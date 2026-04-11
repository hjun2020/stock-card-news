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
    ticker: "GEV",
    company: "GE Vernova",
    headline: "전력·원전·AI 인프라 '3박자' 갖춘 GEV, 52주 신고가 재경신",
    summary: [
      "2028년 매출 목표 520억 달러로 대폭 상향 (기존 450억 달러)",
      "AI 데이터센터·전기화 수요 폭증, '그림자 인프라' 대표주로 부상",
      "1년 수익률 3배↑ — 단기 급등이 아닌 구조적 재평가",
    ],
    price: "$385.20",
    change: "+$18.40",
    changePercent: "+5.02%",
    isPositive: true,
    sector: "전력 인프라",
    date: "Apr 12, 2026",
  },
  {
    id: 2,
    ticker: "INTC",
    company: "Intel Corporation",
    headline: "AI 인프라 재평가 바람 탄 인텔, 52주 신고가로 화려한 귀환",
    summary: [
      "구글·테슬라 등 AI 인프라·자율주행 협력 확대 보도",
      "미국·유럽 파운드리 정부 지원·수주 계약 논의 가속",
      "목표주가 60달러↑ 상향, 주간 수익률 20%·연간 100% 돌파",
    ],
    price: "$47.85",
    change: "+$4.32",
    changePercent: "+9.93%",
    isPositive: true,
    sector: "반도체·파운드리",
    date: "Apr 12, 2026",
  },
  {
    id: 3,
    ticker: "KLAC",
    company: "KLA Corporation",
    headline: "반도체 장비 최강자 KLA, AI 투자 붐 타고 사상 최고가 경신",
    summary: [
      "AI 서버·HBM·첨단 로직 공정 확대로 검사·계측 수요 급증",
      "2026 회계연도 2Q 실적·가이던스 시장 기대 부합",
      "52주 저점 대비 2배↑ 후에도 신고가 행진 — 구조적 성장주 재인식",
    ],
    price: "$853.40",
    change: "+$42.10",
    changePercent: "+5.19%",
    isPositive: true,
    sector: "반도체 장비",
    date: "Apr 12, 2026",
  },
  {
    id: 4,
    ticker: "GEN",
    company: "Gen Digital",
    headline: "노턴·아바스트 모기업 젠디지털, AI 소외 속 52주 최저가",
    summary: [
      "소비자 보안 구독 모델, AI 대체 우려로 성장 프리미엄 소멸",
      "머니라이온 인수 후 통합 비용·부담 지속, 포트폴리오 확장 의문",
      "30·90일 두 자릿수 하락 — 단순 조정 아닌 구조적 소외 신호",
    ],
    price: "$18.75",
    change: "-$1.20",
    changePercent: "-6.02%",
    isPositive: false,
    sector: "사이버보안",
    date: "Apr 12, 2026",
  },
  {
    id: 5,
    ticker: "INTU",
    company: "Intuit Inc.",
    headline: "터보택스·퀵북스 흔드는 AI 공포… 인튜잇 5년래 최저가",
    summary: [
      "생성형 AI의 세무·회계 자동화, 핵심 수익 모델 직접 위협",
      "실적은 기대치 상회했지만 미래 가격결정력에 투자자 의구심",
      "고점 대비 50%↓ — '좋은 실적'만으론 무너진 스토리를 못 막는다",
    ],
    price: "$341.20",
    change: "-$18.90",
    changePercent: "-5.25%",
    isPositive: false,
    sector: "핀테크·SaaS",
    date: "Apr 12, 2026",
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

        <div className="relative flex flex-col flex-1 px-7 pt-10 pb-8">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Stock Brief
            </span>
            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
              {card.date}
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
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {point}
                </p>
              </div>
            ))}
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
