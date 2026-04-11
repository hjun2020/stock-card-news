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
}

const cards: NewsCard[] = [
  {
    id: 1,
    ticker: "CPI",
    company: "인플레이션",
    headline: "3월 CPI 예상 초과, 금리 인하 기대 후퇴",
    summary: [
      "에너지·휘발유 급등이 물가 끌어올려",
      "연준 금리 인하 횟수 기대 줄어드는 분위기",
      "10년 국채 금리 4.29%, 고점 수준 유지",
    ],
    price: "4.29%",
    change: "-0.04%",
    changePercent: "-0.92%",
    isPositive: false,
    sector: "인플레이션",
    date: "4월 10일",
  },
  {
    id: 2,
    ticker: "금리",
    company: "수익률곡선",
    headline: "장단기 금리차 +51bp, 역전 해소 진행 중",
    summary: [
      "10Y-2Y 스프레드 정상화 — 침체 공포 완화",
      "하지만 인플레 장기화 우려는 여전히 잔존",
      "TLT 90일 -0.54%, 고금리 장기화 시사",
    ],
    price: "+51bp",
    change: "+2bp",
    changePercent: "+2.00%",
    isPositive: true,
    sector: "채권·금리",
    date: "4월 10일",
  },
  {
    id: 3,
    ticker: "주식",
    company: "미국 증시",
    headline: "S&P·다우 약세, 나스닥만 살아남은 혼조장",
    summary: [
      "SPY -0.12%, DIA -0.55%, QQQ +0.14%",
      "인플레에도 AI·기술 성장 스토리 건재",
      "주간 기준 S&P +3.55%, QQQ +4.46%",
    ],
    price: "679.10",
    change: "-0.82",
    changePercent: "-0.12%",
    isPositive: false,
    sector: "미국 증시",
    date: "4월 10일",
  },
  {
    id: 4,
    ticker: "BTC",
    company: "비트코인",
    headline: "인플레 공포 속 BTC 7.3만달러 강세 마감",
    summary: [
      "BTC +2.00% → $73,235, 주간 +9.38%",
      "전통 자산 불안에 '디지털 금' 수요 유입",
      "90일 -19%: 변동성 크고 레버리지 주의",
    ],
    price: "$73,235",
    change: "+$1,435",
    changePercent: "+2.00%",
    isPositive: true,
    sector: "암호화폐",
    date: "4월 10일",
  },
  {
    id: 5,
    ticker: "유가",
    company: "원자재·달러",
    headline: "유가 하락·달러 소폭 강세, 금·은은 조정",
    summary: [
      "USO 하루 -1.93%, 7일 -9.72% 급락",
      "DXY +0.18%, 미·이란 휴전 관망세 반영",
      "GLD 30일 -8.32%, 금·은 되돌림 구간",
    ],
    price: "124.51",
    change: "-2.45",
    changePercent: "-1.93%",
    isPositive: false,
    sector: "원자재",
    date: "4월 10일",
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
              {card.date} 뉴스
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
              주린이를 위한 초보주식사이트
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
