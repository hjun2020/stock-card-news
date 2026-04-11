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
- `app/page.tsx` — swipeable card feed (CSS scroll snap, horizontal); contains `Home` (scroll container + dot indicators) and `Card` (individual card)
- `app/globals.css` — Tailwind v4 base styles

### Card component (`app/page.tsx`)

The `cards` array at the top of the file holds all card data (`NewsCard` type). Edit this to change content.

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
│  │  px-7 pt-10 pb-8              │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ "Stock Brief"   date    │  │  │  header row
│  │  ├─────────────────────────┤  │  │
│  │  │ [sector badge]          │  │  │  colored pill
│  │  ├─────────────────────────┤  │  │
│  │  │ TICKER (text-6xl bold)  │  │  │
│  │  │ Company name            │  │  │
│  │  ├── divider ──────────────┤  │  │
│  │  │ Headline (text-lg bold) │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ • summary point 1       │  │  │  flex-1 (fills remaining)
│  │  │ • summary point 2       │  │  │
│  │  │ • summary point 3       │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ Price     │  Change %   │  │  │  frosted price block
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │  ← cardRef ends here
│                                     │
│  [ ↓ Save to Photos ]               │  button NOT inside cardRef
└─────────────────────────────────────┘
          • • • • •   dot indicators (absolute, bottom-8)
```

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
