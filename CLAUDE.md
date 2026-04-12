# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, default)
npm run build    # Production build (Turbopack, default)
npm run start    # Start production server
npm run lint     # Run ESLint
```

> `next build` no longer runs the linter automatically (Next.js 16 breaking change). Run lint separately via `npm run lint`.

## Stack

- **Next.js 16.2.3** with App Router (file-system routing under `app/`)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Recharts** for charting
- **html-to-image** for DOM-to-PNG capture
- **ESLint 9** with flat config (`eslint.config.mjs`)

## Architecture

Stock news card generator for Instagram. Cards are designed to be saved as 1080×1350px (4:5) images and uploaded as Instagram posts/reels slides.

- `app/layout.tsx` — root layout with Geist font variables; `overflow-hidden` for full-screen card view
- `app/page.tsx` — **main listing page**; shows all card news chains; each chain links to its sub-route
- `app/[slug]/page.tsx` — swipeable card feed for a specific chain (e.g. `app/apr-12/page.tsx`)
- `app/globals.css` — Tailwind v4 base styles

### Adding a new card news chain

When asked to create news cards from an article, do **both** steps:

**Step 1 — Create the card feed page**

Copy the most recent `app/[slug]/page.tsx` to a new route, e.g. `app/apr-19/page.tsx`. Use `mmm-dd` as the slug (e.g. `apr-19`, `may-05`). Replace the `cards` array with the new content. Keep the `Home`/`Card` component structure identical — only the data changes.

**Step 2 — Register the chain in the listing page**

Add an entry to the `chains` array at the top of `app/page.tsx`:

```ts
{
  slug: "apr-19",          // matches the folder name
  date: "2026년 4월 19일", // full Korean date
  label: "주간 시장 총정리", // short chain title (≤ 12자)
  description: "한 줄 요약 — 이번 주 핵심 메시지", // one-line hook shown in the list
  cardCount: 7,            // number of cards in this chain
  isPositive: true,        // true = green accent, false = red
}
```

Prepend new chains at the top of the array so the most recent appears first.

### Card component (`app/[slug]/page.tsx`)

The `cards` array at the top of each chain page holds all card data (`NewsCard` type). Edit this to change content.

#### DOM structure per slide

```
┌─────────────────────────────────────┐  100vw × 100svh
│  <div>  snap slide (bg: black)      │  (scroll snap unit)
│                                     │
│  ┌───────────────────────────────┐  │
│  │  <div ref=cardRef>            │  │  width: 100%
│  │  aspect-ratio: 4/5            │  │  ← captured by html-to-image
│  │  (gradient bg)                │  │  → saved as 1080×1350px PNG
│  │                               │  │
│  │  px-7 pt-5 pb-5               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ "{date} {theme}" text-lg  │  │  │  header — 1 line, date + theme
│  │  ├─────────────────────────┤  │  │
│  │  │ Headline   text-2xl     │  │  │  Korean: max ~22자/줄, 3줄 이내
│  │  │            font-bold    │  │  │         → 총 44자 이하 권장
│  │  │                         │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ • bullet   text-l       │  │  │  Korean: max ~26자/줄, 2줄 이내
│  │  │ • bullet   (3 items)    │  │  │         → 총 36자 이하 권장
│  │  │ • bullet                │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ 주린이를…    text-sm    │  │  │  footer — fixed string
│  │  │ nextinvest.org text-2xl │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │  ← cardRef ends here
│                                     │
│  [ ↓ Save to Photos ]               │  button NOT inside cardRef
└─────────────────────────────────────┘
          • • • • •   dot indicators (absolute, bottom-8)
```

#### Content writing rules

Cards are for beginner investors (주린이). Write every field as if explaining to someone with zero finance knowledge:

- **Theme** (`theme` field): Short label shown in the header next to the date. Describes what kind of card this is. Examples: `오늘 미국 증시 요약`, `눈에 띄는 종목`, `금리·채권 동향`, `암호화폐 동향`, `원자재 동향`, `오늘 시장 총정리`. Keep under 12자.
- **Headline**: State what happened in plain Korean. No jargon. Avoid symbols like %, $, bp standing alone — spell out what they mean or add context (e.g. "금리 4.29%로 여전히 높아" not just "4.29%").
- **Ticker field**: Use the plain Korean topic name (e.g. "CPI", "비트코인", "주식") not a stock symbol when the card is about a macro theme.
- **Summary bullets**: Each bullet = one concrete, self-contained fact. Write the implication, not just the number. Bad: "USO -1.93%". Good: "유가 ETF 하루 -1.93% — 에너지주에 부담".
- **Avoid**: Raw numbers without explanation, finance abbreviations without context (bp, DXY, TIPS, TLT), sentences that assume the reader knows what the metric means.
- **Tone**: Friendly, matter-of-fact. Like a smart friend explaining the news over coffee.

#### Key constraints
- **`cardRef` must only wrap the 4:5 content div**, never the save button — the button must not appear in the saved image.
- On save: `pixelRatio = 1080 / element.offsetWidth` → output is exactly 1080×1350px regardless of device screen size.
- Save uses `navigator.share({ files })` on iOS Safari (lands in Photos), falls back to `<a download>` on desktop.
- Accent color (`accentColor`) and gradients are green for `isPositive: true`, red for `false`.

## Next.js 16 Key Changes

Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. Important v16 differences from prior training data:

- **Turbopack is the default** for both `next dev` and `next build`. Use `--webpack` flag to opt out.
- **`turbopack` config is top-level** in `next.config.ts` (no longer under `experimental.turbopack`).
- **`next build` does not lint** — linting must be run explicitly.
- **Sass tilde imports (`~`) are not supported** by Turbopack; remove the `~` prefix.
- **Webpack `resolve.fallback`** equivalent is `turbopack.resolveAlias` in `next.config.ts`.
- **Middleware** convention has changed — use `proxy` instead of deprecated `middleware`.
- ESLint flat config (`eslint.config.mjs`) is used; legacy `.eslintrc.*` format is deprecated.
