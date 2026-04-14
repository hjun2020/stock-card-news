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
    slug: "apr-14-market",
    date: "2026년 4월 14일",
    label: "4월 14일 시황 총정리",
    description: "유가 진정·미국-이란 대화 기대 — 성장·부동산·항공주 동반 랠리, 에너지만 역주행",
    cardCount: 8,
    isPositive: true,
  },
  {
    slug: "apr-13-macro",
    date: "2026년 4월 13일",
    label: "거시경제 시장 총정리",
    description: "호르무즈 봉쇄·유가 급등·금리 상승 — 악재 속에서도 S&P500·크립토 동반 상승한 하루",
    cardCount: 8,
    isPositive: true,
  },
  {
    slug: "apr-13-market",
    date: "2026년 4월 13일",
    label: "4월 13일 시황 총정리",
    description: "오라클 +12% 급등·기술 섹터 +3.39% — 악재 속에서도 AI·성장주로 다시 베팅한 하루",
    cardCount: 8,
    isPositive: true,
  },
  {
    slug: "apr-14-ai-reels",
    date: "2026년 4월 14일",
    label: "AI 대표주 주간 총정리",
    description: "AMD·NVDA·AMZN 등 9종목 한 주 만에 두 자릿수 동반 상승 — 왜 같이 움직였나",
    cardCount: 8,
    isPositive: true,
  },
  {
    slug: "apr-13-irp",
    date: "2026년 4월 13일",
    label: "IRP vs 연금저축",
    description: "둘 다 세액공제인데 뭐가 다를까 — 가입 자격·한도·중도인출 비교",
    cardCount: 12,
    isPositive: true,
  },
  {
    slug: "apr-13-women-reels",
    date: "2026년 4월 13일",
    label: "60대 여성 수익률 1위",
    description: "단순한 원칙이 복잡한 기술을 이겼다 — 행동 차이가 수익률을 갈랐다",
    cardCount: 11,
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
