"use client";

import { useRef, useState, useEffect } from "react";
import { toPng } from "html-to-image";

interface NewsCard {
  id: number;
  ticker: string;
  company: string;
  headline: string;
  summary: string[];
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  sector: string;
  date: string;
  theme: string;
}

const cards: NewsCard[] = [
  {
    id: 1,
    ticker: "주식",
    company: "미국 증시 주간 요약",
    headline: "전쟁 공포 물러서자 미국 주식 주간 3~4% 급반등",
    summary: [
      "S&P500(SPY) 주간 +3.55%, 나스닥(QQQ) +4.46% — 기술주 중심 강세",
      "미·이란 휴전 기대에 '경기침체 최악 시나리오'가 한 발 물러선 덕분",
      "3개월 누적은 여전히 소폭 마이너스 — 완전한 강세장이라 보기엔 이른 구간",
    ],
    price: "$679.10",
    change: "+$23.33",
    changePercent: "+3.55%",
    isPositive: true,
    sector: "미국 증시",
    date: "4월 12일",
    theme: "미국 증시 주간 요약",
  },
  {
    id: 2,
    ticker: "글로벌",
    company: "신흥국·유럽·일본 ETF",
    headline: "신흥국·유럽·일본 모두 올랐다 — 전 세계 동반 랠리",
    summary: [
      "신흥국(VWO) +5.44% — 달러 약세 + 유가 급락이 겹쳐 가장 크게 수혜",
      "유럽(VGK +4.61%), 일본(EWJ +3.33%)도 3~4%대 동반 상승",
      "분산 투자 중이라면 이번 주 해외 자산이 전부 함께 회복한 주간",
    ],
    price: "$56.75",
    change: "+$2.93",
    changePercent: "+5.44%",
    isPositive: true,
    sector: "글로벌 증시",
    date: "4월 12일",
    theme: "글로벌 증시 주간 요약",
  },
  {
    id: 3,
    ticker: "금리",
    company: "미국 국채 금리",
    headline: "금리 이번 주 숨 고르기, 1개월 누적은 여전히 높다",
    summary: [
      "10년물 국채 금리 4.29% — 주간 소폭 하락, 유가 급락에 인플레 공포 진정",
      "클리블랜드 연은 총재 '인플레 지속되면 금리 더 올릴 수도' 발언",
      "1개월 누적 +4.13% 여전히 높아 — 대출금리 내려오는 완화 국면은 아직",
    ],
    price: "4.29%",
    change: "-0.04%",
    changePercent: "-0.92%",
    isPositive: false,
    sector: "채권·금리",
    date: "4월 12일",
    theme: "금리·채권 동향",
  },
  {
    id: 4,
    ticker: "달러",
    company: "달러 인덱스 (DXY)",
    headline: "달러 이번 주 약세 — 전쟁 프리미엄 일부 해소",
    summary: [
      "달러 인덱스(DXY) 98.95, 주간 -0.96% — '달러 들고 도망가기' 수요 완화",
      "달러 약세 + 유가 급락이 겹치며 신흥국으로 자금 유입 가속",
      "1개월로는 여전히 보합(+0.35%) — 큰 방향 전환은 아직",
    ],
    price: "98.95",
    change: "-0.96",
    changePercent: "-0.96%",
    isPositive: false,
    sector: "외환·달러",
    date: "4월 12일",
    theme: "달러·외환 동향",
  },
  {
    id: 5,
    ticker: "유가",
    company: "원유 ETF (USO)",
    headline: "유가 이번 주 -10% 급락 — 휴전 소식에 전쟁 프리미엄 빠져",
    summary: [
      "유가 ETF(USO) 주간 -9.72% — 미·이란 휴전 기대에 호르무즈 리스크 완화",
      "기름값 내리면 물류비·가계 부담 줄어 경기에 긍정적인 신호",
      "3개월 누적 +75.91% — 전쟁 이전보다 여전히 훨씬 높은 레벨",
    ],
    price: "$124.51",
    change: "-$13.45",
    changePercent: "-9.72%",
    isPositive: false,
    sector: "원자재·에너지",
    date: "4월 12일",
    theme: "원자재 동향",
  },
  {
    id: 6,
    ticker: "BTC",
    company: "비트코인·이더리움",
    headline: "비트코인·이더리움 주간 +9~10% — ETF로 기관 자금 재유입",
    summary: [
      "비트코인 $73,235(+9.38%), 이더리움 $2,254(+9.77%) 강하게 반등",
      "미국 비트코인 현물 ETF에 6주 만에 최대 하루 순유입(약 4.7억 달러) 기록",
      "3개월 기준 BTC -19%, ETH -27% — 이번 반등은 조정 속 기술적 반등에 가까워",
    ],
    price: "$73,235",
    change: "+$6,260",
    changePercent: "+9.38%",
    isPositive: true,
    sector: "암호화폐",
    date: "4월 12일",
    theme: "암호화폐 동향",
  },
  {
    id: 7,
    ticker: "총정리",
    company: "이번 주 시장 핵심 메시지",
    headline: "이번 주 요약: 전쟁 공포 완화 → 위험자산 전부 올랐다",
    summary: [
      "주식·신흥국·비트코인까지 위험자산 전반 동반 랠리 — 전형적인 '리스크온' 한 주",
      "금리는 1개월 누적으로 여전히 높아 — 안심하기엔 이른 수준",
      "다음 주 핵심: 휴전 지속 여부 + 연준 발언 톤 + BTC 7.5만 달러 돌파 여부",
    ],
    price: "-",
    change: "-",
    changePercent: "-",
    isPositive: true,
    sector: "시장 인사이트",
    date: "4월 12일",
    theme: "주간 시장 총정리",
  },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-screen h-svh overflow-hidden bg-black">
      {/* Swipeable cards */}
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 pointer-events-none">
        {cards.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background: i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.35)",
              transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ card }: { card: NewsCard }) {
  // cardRef wraps only the 4:5 image content — save button is outside
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const bg = card.isPositive
    ? "linear-gradient(160deg, #0f2027 0%, #1a3a2a 50%, #0d1f16 100%)"
    : "linear-gradient(160deg, #1a0a0a 0%, #2d1515 50%, #110808 100%)";

  const accentColor = card.isPositive ? "#22c55e" : "#ef4444";
  const accentBg = card.isPositive ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)";
  const accentBorder = card.isPositive ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)";

  const handleSave = async () => {
    if (!cardRef.current || saving) return;
    setSaving(true);
    try {
      // Scale so output is exactly 1080px wide × 1350px tall (4:5)
      const pixelRatio = 1080 / cardRef.current.offsetWidth;
      const dataUrl = await toPng(cardRef.current, { pixelRatio });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `${card.ticker}-brief.png`, { type: "image/png" });

      if (navigator.canShare?.({ files: [file] })) {
        // iOS Safari: shows native share sheet → "Save Image" lands in Photos
        await navigator.share({ files: [file], title: `${card.ticker} Stock Brief` });
      } else {
        // Desktop fallback
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = `${card.ticker}-brief.png`;
        a.click();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    // Outer slide: full screen, centers the 4:5 card + button vertically
    <div className="shrink-0 w-screen h-svh snap-center snap-always flex flex-col items-center justify-center gap-4 bg-black px-0">

      {/* ── 4:5 card (captured area) ── */}
      <div
        ref={cardRef}
        className="w-full flex flex-col"
        style={{ aspectRatio: "4/5", background: bg }}
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative flex flex-col flex-1 px-7 pt-5 pb-5">
          {/* Header row */}
          <div className="mb-6">
            <span
              className="text-lg font-semibold"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {card.date} {card.theme}
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-2xl font-bold leading-snug mb-8"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            {card.headline}
          </h2>

          {/* Summary bullets */}
          <div className="flex flex-col gap-5 flex-1">
            {card.summary.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ background: accentColor }}
                />
                <p className="text-l leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex flex-col items-center">
            <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.89)" }}>
              주린이를 위한 미국증시
            </p>
            <p className="text-2xl font-bold" style={{ color: "rgba(248, 244, 244, 1)" }}>
              nextinvest.org
            </p>
          </div>
        </div>
      </div>

      {/* ── Save button (outside captured area) ── */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 px-7 transition-opacity active:opacity-60"
        style={{
          background: accentBg,
          border: `1px solid ${accentBorder}`,
          color: accentColor,
          opacity: saving ? 0.5 : 1,
          maxWidth: "100vw",
        }}
      >
        {saving ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        )}
        <span className="text-sm font-semibold">
          {saving ? "Saving…" : "Save to Photos"}
        </span>
      </button>
    </div>
  );
}
