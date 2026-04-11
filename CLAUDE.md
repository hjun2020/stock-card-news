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
- **ESLint 9** with flat config (`eslint.config.mjs`)

## Architecture

This is an early-stage Next.js App Router project. All routes live under `app/`:

- `app/layout.tsx` — root layout with Geist font variables and full-height flex body
- `app/page.tsx` — home page (currently scaffold)
- `app/globals.css` — global styles (Tailwind base)

## Next.js 16 Key Changes

Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. Important v16 differences from prior training data:

- **Turbopack is the default** for both `next dev` and `next build`. Use `--webpack` flag to opt out.
- **`turbopack` config is top-level** in `next.config.ts` (no longer under `experimental.turbopack`).
- **`next build` does not lint** — linting must be run explicitly.
- **Sass tilde imports (`~`) are not supported** by Turbopack; remove the `~` prefix.
- **Webpack `resolve.fallback`** equivalent is `turbopack.resolveAlias` in `next.config.ts`.
- **Middleware** convention has changed — use `proxy` instead of deprecated `middleware`.
- ESLint flat config (`eslint.config.mjs`) is used; legacy `.eslintrc.*` format is deprecated.
