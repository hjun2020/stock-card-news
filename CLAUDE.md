# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Commands

```bash
npm run dev      # Start dev server (Turbopack, default)
npm run build    # Production build (Turbopack, default)
npm run start    # Start production server
npm run lint     # Run ESLint
```

> `next build` no longer runs the linter automatically (Next.js 16 breaking change). Run lint separately via `npm run lint`.

---

## Stack

- **Next.js 16.2.3** with App Router (file-system routing under `app/`)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Recharts** for charting
- **html-to-image** for DOM-to-PNG capture
- **ESLint 9** with flat config (`eslint.config.mjs`)

---

## Architecture

Stock news card generator. Cards are captured as PNG images and shared to social platforms.

- `app/layout.tsx` — root layout with Geist font variables
- `app/page.tsx` — **main listing page**; shows all card news chains; each chain links to its sub-route
- `app/[slug]/page.tsx` — swipeable card feed for a specific chain (e.g. `app/apr-12/page.tsx`)
- `app/globals.css` — Tailwind v4 base styles
- `card-templates/` — **styling & content specs per platform** (see index below)

---

## Card templates

Each file documents the visual layout, content rules, and technical constraints for one target platform. Read the relevant template before writing card content or building a new card style.

| File | Platform | Size | Status |
|------|----------|------|--------|
| [instagram-reels.md](card-templates/instagram-reels.md) | Instagram posts / reels slides | 1080×1350 (4:5) | ✅ Live |
| `twitter.md` | Twitter / X | 1200×675 (16:9) | 🔲 Planned |
| `threads.md` | Threads | 1080×1080 (1:1) | 🔲 Planned |
| `facebook.md` | Facebook feed | 1200×630 (1.91:1) | 🔲 Planned |
| `kakaotalk.md` | KakaoTalk share | 800×400 (2:1) | 🔲 Planned |

When building a new card style, create `card-templates/[platform].md` first to agree on layout and constraints before writing any code.

---

## Adding a new card news chain

When asked to create news cards from an article, do **both** steps:

**Step 1 — Create the card feed page**

Copy the most recent `app/[slug]/page.tsx` to a new route, e.g. `app/apr-19/page.tsx`. Use `mmm-dd` as the slug (e.g. `apr-19`, `may-05`). Replace the `cards` array with the new content. Keep the component structure identical — only the data changes.

Refer to the target platform's template in `card-templates/` for content rules and character limits.

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

---

## Next.js 16 Key Changes

Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. Important v16 differences from prior training data:

- **Turbopack is the default** for both `next dev` and `next build`. Use `--webpack` flag to opt out.
- **`turbopack` config is top-level** in `next.config.ts` (no longer under `experimental.turbopack`).
- **`next build` does not lint** — linting must be run explicitly.
- **Sass tilde imports (`~`) are not supported** by Turbopack; remove the `~` prefix.
- **Webpack `resolve.fallback`** equivalent is `turbopack.resolveAlias` in `next.config.ts`.
- **Middleware** convention has changed — use `proxy` instead of deprecated `middleware`.
- ESLint flat config (`eslint.config.mjs`) is used; legacy `.eslintrc.*` format is deprecated.
