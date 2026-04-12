# Card Template: Instagram Reels

**Platform:** Instagram Reels slides
**Output size:** 1080 × 1350 px (4:5 portrait)
**Component:** `components/InstagramReelsFeed`
**Cards per chain:** 1 title card + 5–7 content cards
**Reading target:** each card readable in ≤ 5 seconds

---

## Design principle

Reels viewers swipe fast. Every card must land before they swipe away.

- **Slide 0 — title card**: eye-catching cover; hook that makes the viewer want to keep swiping
- **Slides 1–N — content cards**: one point per card — a punchy headline + exactly 2 short bullets
- Large type, generous whitespace, minimal decoration

---

## DOM structure

### Title card (slide 0)

```
┌─────────────────────────────────────┐  100vw × 100svh
│  snap slide (bg: black)             │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  <div ref=cardRef>            │  │  width: 100%, aspect-ratio: 4/5
│  │  deeper gradient (more drama) │  │  ← captured by html-to-image
│  │                               │  │
│  │  px-7 pt-7 pb-6               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ nextinvest   (accent)   │  │  │  top-left brand, accent color
│  │  │              {date}     │  │  │  top-right date, low contrast
│  │  │                         │  │  │
│  │  │  radial glow (bg)       │  │  │  subtle accent glow behind title
│  │  │                         │  │  │
│  │  │  [{label} badge]        │  │  │  topic pill — tells reader what this is
│  │  │                         │  │  │
│  │  │  Title  clamp(2.8rem    │  │  │  hook; font-black, letter-spacing tight
│  │  │         –4.2rem)        │  │  │  2–3 lines; creates curiosity/tension
│  │  │                         │  │  │
│  │  │  ─── accent rule ───    │  │  │  2.5rem wide, 3px tall
│  │  │                         │  │  │
│  │  │  Subtitle  text-xl      │  │  │  1 line; what's inside (≤ 24자)
│  │  │                         │  │  │
│  │  │ nextinvest.org  스와이프 →│  │  │  footer — brand left, swipe CTA right
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │  ← cardRef ends here
│                                     │
│  [ ↓ Save to Photos ]               │  button NOT inside cardRef
└─────────────────────────────────────┘
          • • • • •   dot indicators (absolute, bottom-8)
```

### Content card (slides 1–N)

```
┌─────────────────────────────────────┐  100vw × 100svh
│  snap slide (bg: black)             │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  <div ref=cardRef>            │  │  width: 100%, aspect-ratio: 4/5
│  │  standard gradient            │  │  ← captured by html-to-image
│  │                               │  │
│  │  px-7 pt-6 pb-6               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ "{date}  {theme}" text-sm│  │  │  header — small, low contrast
│  │  │                         │  │  │
│  │  │  Headline  clamp(2.1rem  │  │  │  dominant; max ~20자/줄, up to 3 lines
│  │  │            –3.2rem)     │  │  │  font-bold
│  │  │                         │  │  │
│  │  │  ─── accent divider ─── │  │  │  2rem wide, 2px tall
│  │  │                         │  │  │
│  │  │  • bullet  text-xl      │  │  │  exactly 2 bullets
│  │  │  • bullet               │  │  │  each ≤ 20자, single line
│  │  ├─────────────────────────┤  │  │
│  │  │ 주린이를…    text-xs    │  │  │  footer — small, low contrast
│  │  │ nextinvest.org text-xl  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │  ← cardRef ends here
│                                     │
│  [ ↓ Save to Photos ]               │  button NOT inside cardRef
└─────────────────────────────────────┘
          • • • • •   dot indicators (absolute, bottom-8)
```

---

## Types

### `ReelsTitleCard` — slide 0, always required

```ts
interface ReelsTitleCard {
  title: string;       // hook/teaser, 2–3 lines; punchy, creates curiosity or tension
  label: string;       // topic badge — tells reader exactly what this chain covers
                       // e.g. "미국 주요주식 52주 신고가·신저가", "미국 시장 데일리"
  subtitle: string;    // 1 line: what's inside (≤ 24자)
  date: string;
  isPositive: boolean;
}
```

### `ReelsNewsCard` — content slides 1–N

```ts
interface ReelsNewsCard {
  id: number;
  headline: string;          // up to 3 lines; lead with full company name on line 1
  bullets: [string, string]; // exactly 2; each ≤ 20자, single line
  isPositive: boolean;
  date: string;
  theme: string;             // short label in header (≤ 12자)
}
```

---

## Content writing rules

### Title card

**A first-time viewer must be able to tell, within 2 seconds, exactly what this Reels is about.** The `label` + `subtitle` together carry that clarity; the `title` provides the emotional hook that makes them stay.

- **label**: Specific topic descriptor shown in the badge. A stranger who has never seen this account must understand the subject from this alone. Good: `"미국 주요주식 52주 신고가·신저가"`. Bad: `"미국 시장"` (too vague — about what?).
- **subtitle**: One line that names what's inside, not what happened. Complements the label with date/scope context. Good: `"4월 10일 미국 시장 완전 정리"`.
- **title**: 2–3 short lines. Write like a hook — make the viewer *have to* swipe. Use contrast, tension, or surprise. The hook works *because* the label already told them what this is; now make them curious about the answer. Good: `"물가 쇼크\n비트코인만\n올랐다"`. Bad: `"4월 10일 미국 시장 요약"` (no tension).

### Content cards
- **Headline**: Up to 3 lines. For company-specific cards, **lead with the full company name on the first line**, then deliver the message on lines 2–3. Max ~20자/줄. Example: `"인튜잇\n실적은 좋았는데\n주가는 반토막"`. For thematic/summary cards with no single company, 2 lines is fine.
- **Bullets**: Exactly 2. Each is one short line (≤ 20자). Supporting context only — the headline already carries the main message. No wrapping.
- **No ticker field** — the company name lives in the headline. No badge, no pill.
- **No tickers or symbols anywhere** — always write the full company name or plain Korean. Bad: `"INTC 주간 +25%"`. Good: `"인텔 주간 +25%"`.
- **No intro field** — Reels cards have no room for a framing sentence.
- **Tone**: Punchy and direct. Cut every word that doesn't add meaning.

---

## Key technical constraints

- **`cardRef` must only wrap the 4:5 content div** — save button stays outside.
- `pixelRatio = 1080 / element.offsetWidth` → output is exactly 1080×1350px.
- Save: `navigator.share({ files })` on iOS, falls back to `<a download>` on desktop.
- Green accent for `isPositive: true`, red for `false`.
- **Title card gradients** (deeper/more dramatic): green `#061410→#0d2b1e→#071a10→#030d08`, red `#120404→#250a0a→#150505→#080202`.
- **Content card gradients**: green `#0f2027→#1a3a2a→#0d1f16`, red `#1a0a0a→#2d1515→#110808`.
- Title card headline uses `clamp(2.8rem, 11vw, 4.2rem)` with `font-black` and tight letter-spacing.
- Content card headline uses `clamp(2.1rem, 8vw, 3.2rem)` with `font-bold`.
