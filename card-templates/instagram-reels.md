# Card Template: Instagram Reels

**Platform:** Instagram (posts / reels slides)
**Output size:** 1080 × 1350 px (4:5 portrait)
**Current route pattern:** `app/[slug]/page.tsx`

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

---

## Content writing rules

Cards are for beginner investors (주린이). Write every field as if explaining to someone with zero finance knowledge:

- **Theme** (`theme` field): Short label shown in the header next to the date. Describes what kind of card this is. Examples: `오늘 미국 증시 요약`, `눈에 띄는 종목`, `금리·채권 동향`, `암호화폐 동향`, `원자재 동향`, `오늘 시장 총정리`. Keep under 12자.
- **Headline**: State what happened in plain Korean. No jargon. Avoid symbols like %, $, bp standing alone — spell out what they mean or add context (e.g. "금리 4.29%로 여전히 높아" not just "4.29%").
- **Ticker field**: Use the plain Korean topic name (e.g. "CPI", "비트코인", "주식") not a stock symbol when the card is about a macro theme.
- **Summary bullets**: Each bullet = one concrete, self-contained fact. Write the implication, not just the number. Bad: "USO -1.93%". Good: "유가 ETF 하루 -1.93% — 에너지주에 부담".
- **Avoid**: Raw numbers without explanation, finance abbreviations without context (bp, DXY, TIPS, TLT), sentences that assume the reader knows what the metric means.
- **Tone**: Friendly, matter-of-fact. Like a smart friend explaining the news over coffee.

---

## Key technical constraints

- **`cardRef` must only wrap the 4:5 content div**, never the save button — the button must not appear in the saved image.
- On save: `pixelRatio = 1080 / element.offsetWidth` → output is exactly 1080×1350px regardless of device screen size.
- Save uses `navigator.share({ files })` on iOS Safari (lands in Photos), falls back to `<a download>` on desktop.
- Accent color (`accentColor`) and gradients are green for `isPositive: true`, red for `false`.
- Background gradient: green chain → `#0f2027 → #1a3a2a → #0d1f16`; red chain → `#1a0a0a → #2d1515 → #110808`.
