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
    slug: "apr-17",
    date: "2026년 4월 17일",
    label: "4월 17일 시황 총정리",
    description: "여행주 폭등·에너지 폭락 — 크루즈·항공 ▲7%, 넷플릭스 ▼10%, 하루에 두 개 장",
    cardCount: 6,
    isPositive: true,
  },
  {
    slug: "apr-16-macro",
    date: "2026년 4월 16일",
    label: "거시경제 시장 총정리",
    description: "전쟁·금리·유가 동반 상승 — 연준 금리 인하 후퇴 경고 속 증시는 최고치 유지",
    cardCount: 7,
    isPositive: true,
  },
  {
    slug: "apr-16",
    date: "2026년 4월 16일",
    label: "4월 16일 시황 총정리",
    description: "지수는 또 사상 최고 — 리튬·AI 반도체 폭등, 넷플릭스·슈왑은 -8% 급락",
    cardCount: 7,
    isPositive: true,
  },
  {
    slug: "apr-15",
    date: "2026년 4월 15일",
    label: "4월 15일 시황 총정리",
    description: "은행 실적·금리 완화 기대에 금융 질주 — 에너지·산업재는 4개월 랠리 뒤 숨 고르기",
    cardCount: 7,
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
    slug: "apr-13-irp",
    date: "2026년 4월 13일",
    label: "IRP vs 연금저축",
    description: "둘 다 세액공제인데 뭐가 다를까 — 가입 자격·한도·중도인출 비교",
    cardCount: 12,
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
