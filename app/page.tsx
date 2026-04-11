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
    ticker: "AI 랠리",
    company: "AI·머신러닝 대표주",
    headline: "AI 대표주, 일주일 만에 10%씩 동반 급등",
    summary: [
      "AMD·NVDA·META 등 AI 종목이 한꺼번에 강세",
      "AI 투자가 말뿐 아니라 실제 계약·매출로 연결된다는 신호",
      "데이터센터·칩·클라우드 전 분야 동시 상승",
    ],
    price: "-",
    change: "-",
    changePercent: "+10%",
    isPositive: true,
    sector: "AI 테마",
    date: "4월 12일",
  },
  {
    id: 2,
    ticker: "AMD",
    company: "Advanced Micro Devices",
    headline: "오라클이 AMD 칩 5만 개 도입, AI 시장 판도 변화",
    summary: [
      "그동안 엔비디아가 독점하던 AI 칩 시장에 AMD가 진입",
      "메타와 AI 플랫폼 협업도 발표 — 빅테크 파트너십 확대",
      "경쟁자 생기면 칩 가격 내려가 서버 회사들도 수혜",
    ],
    price: "-",
    change: "-",
    changePercent: "+10%",
    isPositive: true,
    sector: "AI 반도체",
    date: "4월 12일",
  },
  {
    id: 3,
    ticker: "빅테크",
    company: "하이퍼스케일러",
    headline: "빅테크 AI 투자 5천억 달러, 관련주에 돈 쏟아진다",
    summary: [
      "아마존·구글·메타 등 AI 설비 투자 작년보다 30% 이상 확대",
      "이 돈은 서버·칩·클라우드 기업 매출로 고스란히 연결",
      "투자 뉴스 나올 때마다 AI 관련주 줄줄이 동반 급등",
    ],
    price: "-",
    change: "-",
    changePercent: "+30%",
    isPositive: true,
    sector: "클라우드·인프라",
    date: "4월 12일",
  },
  {
    id: 4,
    ticker: "AKAM",
    company: "Akamai Technologies",
    headline: "아카마이, 실적은 좋았는데 왜 20% 급락했을까",
    summary: [
      "2026년 이익 전망이 시장 기대치를 살짝 밑돌아 실망 매물",
      "AI 인프라 투자 확대로 비용이 매출보다 먼저 늘어나는 구조",
      "주가는 과거 실적이 아닌 앞으로의 이익을 보고 움직인다",
    ],
    price: "-",
    change: "-",
    changePercent: "-20%",
    isPositive: false,
    sector: "CDN·보안",
    date: "4월 12일",
  },
  {
    id: 5,
    ticker: "교훈",
    company: "오늘의 핵심 메시지",
    headline: "AI 수혜주도 두 종류 — 돈 버는 쪽 vs 돈 쓰는 쪽",
    summary: [
      "칩·서버를 파는 기업은 AI 붐으로 매출이 바로 급증",
      "AI 인프라를 사들이는 기업은 비용이 먼저 늘고 이익은 나중",
      "'AI 관련주'라는 이유만으로 다 같이 오르지는 않는다",
    ],
    price: "-",
    change: "-",
    changePercent: "-",
    isPositive: true,
    sector: "투자 인사이트",
    date: "4월 12일",
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
