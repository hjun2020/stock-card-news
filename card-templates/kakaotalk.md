# Card Template: KakaoTalk Open Chat

**Platform:** KakaoTalk open chat (오픈채팅)
**Output size:** 1080 × 1350 px (4:5 portrait) — same capture pipeline as Instagram Reels
**Component:** `components/KakaoTalkCardFeed`
**Cards per chain:** 4 (each card covers a broader topic grouping than Reels)

---

## Card grouping pattern (weekly article → 4 cards)

| Card | Topics | `isPositive` |
|------|--------|--------------|
| 1 | 주식 — 미국 증시 + 글로벌 합산 | overall market direction |
| 2 | 금리 + 달러 | bond/fx direction |
| 3 | 원자재 + 암호화폐 | commodity/crypto direction |
| 4 | 총정리 + 다음 주 전망 | overall tone |

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
│  │  px-6 pt-5 pb-5               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ "{date} {theme}" text-sm  │  │  │  header — date + theme label
│  │  ├─────────────────────────┤  │  │
│  │  │ Headline   text-xl      │  │  │  Korean: max ~24자/줄, 3줄 이내
│  │  │            font-bold    │  │  │         → 총 60자 이하 권장
│  │  │                         │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ intro line  text-xs     │  │  │  optional 1–2줄 context sentence
│  │  │                         │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ • bullet  text-xs       │  │  │  4–5 bullets; each can be 2줄
│  │  │ • bullet  (4–5 items)   │  │  │  Korean: max ~30자/줄
│  │  │ • bullet                │  │  │
│  │  │ • bullet                │  │  │
│  │  │ • bullet                │  │  │
│  │  ├─────────────────────────┤  │  │
│  │  │ 주린이를…    text-xs    │  │  │  footer — fixed string
│  │  │ nextinvest.org text-lg  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │  ← cardRef ends here
│                                     │
│  [ ↓ Save to Photos ]               │  button NOT inside cardRef
└─────────────────────────────────────┘
          • • • •   dot indicators (absolute, bottom-8)
```

---

## `KakaoNewsCard` type

```ts
interface KakaoNewsCard {
  id: number;
  ticker: string;       // topic label shown above headline (e.g. "주식", "금리·달러")
  headline: string;     // main title of the card
  intro?: string;       // optional 1–2 sentence context before bullets
  summary: string[];    // 4–5 bullets
  isPositive: boolean;
  date: string;
  theme: string;        // short label in header (≤ 12자)
}
```

---

## Content writing rules

Same beginner-investor (주린이) tone as Instagram Reels, but:

- **More bullets (4–5)**: cover sub-topics that would be separate Reels cards
- **Longer bullets**: each bullet can be 1–2 lines; write implication not just the number
- **Intro line**: use the optional `intro` field for a 1–2 sentence framing sentence before the bullets (e.g. "이번 주 키워드는 X였습니다. 그 결과:"). Omit if not needed.
- **Headline**: can be slightly longer than Reels (up to 3 lines); still plain Korean, no jargon
- **Ticker**: use topic grouping label, not stock symbol (e.g. `"금리·달러"`, `"원자재·암호화폐"`)

---

## Key technical constraints

- Same `pixelRatio = 1080 / element.offsetWidth` capture as Reels
- Same `navigator.share` / `<a download>` save flow
- `cardRef` must only wrap the 4:5 div — save button stays outside
- Accent: green for `isPositive: true`, red for `false`
- Background gradients: same as Reels (green `#0f2027→#1a3a2a→#0d1f16`, red `#1a0a0a→#2d1515→#110808`)
