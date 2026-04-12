# Card Template: Instagram Reels

**Platform:** Instagram Reels slides
**Output size:** 1080 × 1350 px (4:5 portrait)
**Component:** `components/InstagramReelsFeed`
**Cards per chain:** varies (one topic per card; typically 5–7 for a weekly macro article)
**Reading target:** each card readable in ≤ 5 seconds

---

## Design principle

Reels viewers swipe fast. Each card must land its point before the viewer swipes away:

- **One headline** — the entire message in 1–2 punchy lines
- **Two bullets only** — supporting facts, each a single short line
- Large type, generous whitespace, minimal decoration

---

## DOM structure per slide

```
┌─────────────────────────────────────┐  100vw × 100svh
│  <div>  snap slide (bg: black)      │  scroll snap unit
│                                     │
│  ┌───────────────────────────────┐  │
│  │  <div ref=cardRef>            │  │  width: 100%
│  │  aspect-ratio: 4/5            │  │  ← captured by html-to-image
│  │  (gradient bg)                │  │  → saved as 1080×1350px PNG
│  │                               │  │
│  │  px-7 pt-6 pb-6               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ "{date}  {theme}" text-sm│  │  │  header — small, low contrast
│  │  │                         │  │  │
│  │  │  [ticker pill]          │  │  │  accent-colored badge
│  │  │                         │  │  │
│  │  │  Headline  clamp(2.1rem  │  │  │  dominant; max ~20자/줄, 2줄 이내
│  │  │            –3.2rem)     │  │  │
│  │  │  font-bold              │  │  │
│  │  │                         │  │  │
│  │  │  ─── accent divider ─── │  │  │
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

## `ReelsNewsCard` type

```ts
interface ReelsNewsCard {
  id: number;
  ticker: string;         // badge shown above headline — full company name or Korean category (e.g. "GE Vernova", "인텔", "금리·달러"); never a stock symbol
  headline: string;       // 1–2 lines; max ~20자 per line — the core message
  bullets: [string, string]; // exactly 2; each ≤ 20자, single line
  isPositive: boolean;
  date: string;
  theme: string;          // short label in header (≤ 12자)
}
```

---

## Content writing rules

- **Headline**: One punchy statement — what happened AND why it matters, in the fewest possible words. Max ~20자/줄, 2줄 이내. Can include a number if it's the whole story (e.g. "S&P500 주간 +3.5%\n기술주 중심 강하게 반등").
- **Bullets**: Exactly 2. Each is one short line (≤ 20자). Supporting context only — the headline already carries the main message. No wrapping.
- **Ticker field**: The badge label shown above the headline. Use a plain Korean category name (e.g. `"금리·달러"`, `"원자재"`) or the **full company name** (e.g. `"GE Vernova"`, `"인튜잇"`). **Never use stock symbols or tickers** (no `"INTC"`, `"GEV"`, `"KLAC"`).
- **No tickers or symbols anywhere in headline or bullets** — always write the full company name or plain Korean description. A viewer who doesn't know the stock market must be able to read every word without a glossary. Bad: `"INTC 주간 +25%"`. Good: `"인텔 주간 +25%"`.
- **No intro field** — Reels cards have no room for a framing sentence.
- **Tone**: Punchy and direct. Cut every word that doesn't add meaning.

---

## Key technical constraints

- **`cardRef` must only wrap the 4:5 content div** — save button stays outside.
- `pixelRatio = 1080 / element.offsetWidth` → output is exactly 1080×1350px.
- Save: `navigator.share({ files })` on iOS, falls back to `<a download>` on desktop.
- Green accent for `isPositive: true`, red for `false`.
- Background gradients: green `#0f2027→#1a3a2a→#0d1f16`, red `#1a0a0a→#2d1515→#110808`.
- Headline font size uses `clamp(2.1rem, 8vw, 3.2rem)` so it scales correctly across device widths.
