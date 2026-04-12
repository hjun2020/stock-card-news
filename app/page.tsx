"use client";

import Link from "next/link";

interface Chain {
  slug: string;
  date: string;
  label: string;
  description: string;
  cardCount: number;
  isPositive: boolean;
}

const chains: Chain[] = [
  {
    slug: "apr-13",
    date: "2026년 4월 13일",
    label: "주간 섹터 총정리",
    description: "유가 폭락이 판을 뒤집었다 — 리츠·반도체 급등, 에너지 급락",
    cardCount: 7,
    isPositive: true,
  },
  {
    slug: "apr-10",
    date: "2026년 4월 10일",
    label: "인플레 쇼크 데이",
    description: "CPI 서프라이즈 — 금리·달러 출렁, 비트코인은 버텼다",
    cardCount: 7,
    isPositive: false,
  },
  {
    slug: "apr-12-52w",
    date: "2026년 4월 12일",
    label: "52주 극단 종목 분석",
    description: "신고가 GEV·INTC·KLA vs 신저가 INTU·GEN",
    cardCount: 7,
    isPositive: true,
  },
  {
    slug: "apr-12-kakao",
    date: "2026년 4월 12일",
    label: "주간 시장 총정리 (카카오)",
    description: "전쟁 공포 완화 → 위험자산 안도 랠리 — 카카오톡용 4장",
    cardCount: 4,
    isPositive: true,
  },
  {
    slug: "apr-12",
    date: "2026년 4월 12일",
    label: "주간 시장 총정리",
    description: "전쟁 공포 완화 → 위험자산 전부 올랐다",
    cardCount: 7,
    isPositive: true,
  },
];

export default function Home() {
  return (
    <div
      className="min-h-svh w-full flex flex-col px-5 pt-12 pb-10"
      style={{ background: "#0a0a0a" }}
    >
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          nextinvest.org
        </p>
        <h1 className="text-3xl font-bold" style={{ color: "rgba(255,255,255,0.95)" }}>
          마켓 브리핑
        </h1>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
          주린이를 위한 미국 증시 카드 뉴스
        </p>
      </div>

      {/* Chain list */}
      <div className="flex flex-col gap-3">
        {chains.map((chain) => (
          <ChainItem key={chain.slug} chain={chain} />
        ))}
      </div>
    </div>
  );
}

function ChainItem({ chain }: { chain: Chain }) {
  const accentColor = chain.isPositive ? "#22c55e" : "#ef4444";
  const accentBg = chain.isPositive ? "rgba(34,197,94,0.07)" : "rgba(239,68,68,0.07)";
  const accentBorder = chain.isPositive ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)";

  return (
    <Link href={`/${chain.slug}`} className="block active:opacity-70 transition-opacity">
      <div
        className="rounded-2xl px-5 py-4 flex items-center gap-4"
        style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
      >
        {/* Left: dot */}
        <div
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: accentColor }}
        />

        {/* Center: text */}
        <div className="flex-1 min-w-0">
          <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
            {chain.date}
          </p>
          <p className="text-base font-semibold truncate" style={{ color: "rgba(255,255,255,0.92)" }}>
            {chain.label}
          </p>
          <p className="text-sm mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
            {chain.description}
          </p>
        </div>

        {/* Right: card count + arrow */}
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
            {chain.cardCount}장
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,0.3)" }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
