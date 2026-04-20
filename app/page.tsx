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
    slug: "apr-21",
    date: "2026년 4월 21일",
    label: "4월 20일 시황 총정리",
    description: "AI 반도체 훈풍 속 기술 ▲1.11% 선두, NRG 대량 매도에 유틸리티 ▼0.93% 꼴찌",
    cardCount: 6,
    isPositive: true,
  },
  {
    slug: "apr-20",
    date: "2026년 4월 20일",
    label: "4월 셋째 주 시황",
    description: "AI·반도체 랠리 재가동, 에너지 alone 역주행 — 기술 ▲9.88% vs 에너지 ▼6.86%",
    cardCount: 6,
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
