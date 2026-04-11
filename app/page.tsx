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
    ticker: "금리",
    company: "미국 국채 금리",
    headline: "금리 오늘 숨 고르기, 하지만 수준은 여전히 높다",
    summary: [
      "10년 국채 금리 4.34% — 주택·자동차 대출금리의 기준선",
      "한 달 전보다 4.6% 더 올라, 완전한 안도라고 보긴 어려워",
      "금리 높으면 예금·채권이 매력적이고 주식·부동산은 불리해져",
    ],
    price: "4.34%",
    change: "-0.01%",
    changePercent: "-0.23%",
    isPositive: false,
    sector: "채권·금리",
    date: "4월 7일",
  },
  {
    id: 2,
    ticker: "유가",
    company: "원유 ETF (USO)",
    headline: "유가 3개월 만에 두 배 — 오늘 잠깐 쉬어갔을 뿐",
    summary: [
      "90일 동안 유가 ETF 두 배 급등, 오늘은 하루 -1.5% 조정",
      "중동 긴장으로 석유 공급 불안 — 기름값 오르면 물가도 상승",
      "휘발유·항공권·물류비가 줄줄이 오르면 소비자 부담 커져",
    ],
    price: "$136.90",
    change: "-$2.05",
    changePercent: "-1.47%",
    isPositive: false,
    sector: "원자재·에너지",
    date: "4월 7일",
  },
  {
    id: 3,
    ticker: "주식",
    company: "미국 증시",
    headline: "미국 주식 사실상 제자리 — 뉴스는 많은데 방향이 없다",
    summary: [
      "S&P500·나스닥 보합, 다우 소폭 하락으로 혼조 마감",
      "중동·물가 지표·실적 시즌 앞두고 투자자들 모두 관망 중",
      "유가·금리가 불안정해 작은 뉴스에도 방향이 갑자기 바뀔 수 있어",
    ],
    price: "$659.61",
    change: "+$0.66",
    changePercent: "+0.10%",
    isPositive: false,
    sector: "미국 증시",
    date: "4월 7일",
  },
  {
    id: 4,
    ticker: "BTC",
    company: "비트코인",
    headline: "비트코인 6만9천 달러 터치 — 조용히 회복 중",
    summary: [
      "하루 +0.66%, 한 달 +5% — 소리 없이 꾸준히 오르는 중",
      "금리가 높아도 강세 = '언젠가 돈이 다시 풀릴 것'이라는 기대",
      "단, 3개월 전보다 -24% 하락한 상태 — 변동성은 크다",
    ],
    price: "$69,306",
    change: "+$456",
    changePercent: "+0.66%",
    isPositive: true,
    sector: "암호화폐",
    date: "4월 7일",
  },
  {
    id: 5,
    ticker: "총정리",
    company: "오늘 시장 핵심 메시지",
    headline: "긴장은 유지, 공포는 아님 — 4월 7일 시장 요약",
    summary: [
      "유가·금리는 '조심해라', 기술주·코인은 '아직 기회 있다'",
      "두 신호가 동시에 와서 시장이 어느 쪽으로도 못 가는 중",
      "다음 물가 지표와 연준 발표가 방향 결정의 열쇠",
    ],
    price: "-",
    change: "-",
    changePercent: "-",
    isPositive: true,
    sector: "시장 인사이트",
    date: "4월 7일",
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
