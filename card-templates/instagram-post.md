# Card Template: Instagram Post

**Platform:** Instagram (feed posts / carousel)
**Output size:** 1080 × 1350 px (4:5 portrait)
**Component:** `components/InstagramPostFeed`
**Cards per chain:** varies (one topic per card; typically 5–7 for a weekly macro article)

---

## DOM structure per slide

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
│  │  │ "{date} {theme}" text-lg  │  │  │  header — date + theme
│  │  ├─────────────────────────┤  │  │
│  │  │ Headline   text-2xl     │  │  │  Korean: max ~22자/줄, 3줄 이내
│  │  │            font-bold    │  │  │         → 총 44자 이하 권장
│  │  │                         │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ • bullet   text-l       │  │  │  3 bullets; each can wrap to 2줄
│  │  │ • bullet                │  │  │  Korean: max ~26자/줄
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

---

## `NewsCard` type

```ts
interface NewsCard {
  id: number;
  ticker: string;        // topic label (e.g. "주식", "BTC", "금리")
  company: string;       // sub-label or ETF name (displayed context only)
  headline: string;      // main card title
  summary: string[];     // 3 bullets
  price: string;         // current price or rate (display only)
  change: string;        // absolute change
  changePercent: string; // percent change
  isPositive: boolean;
  sector: string;        // category label
  date: string;
  theme: string;         // short label in header (≤ 12자)
}
```

---

## Content writing rules

Cards are for beginner investors (주린이). Write every field as if explaining to someone with zero finance knowledge:

- **Headline**: State what happened in plain Korean. No jargon. Include the implication, not just the number.
- **Summary bullets**: 3 bullets; each is a concrete, self-contained fact with context. Write the implication, not just the number. Bad: "USO -1.93%". Good: "유가 ETF -1.93% — 에너지주에 부담".
- **Tone**: Friendly, matter-of-fact. Like a smart friend explaining the news over coffee.
- **Avoid**: Raw numbers without explanation, finance abbreviations without context (bp, DXY, TIPS, TLT).

---

## Key technical constraints

- **`cardRef` must only wrap the 4:5 content div** — save button stays outside.
- `pixelRatio = 1080 / element.offsetWidth` → output is exactly 1080×1350px.
- Save: `navigator.share({ files })` on iOS, falls back to `<a download>` on desktop.
- Green accent for `isPositive: true`, red for `false`.
- Background gradients: green `#0f2027→#1a3a2a→#0d1f16`, red `#1a0a0a→#2d1515→#110808`.
