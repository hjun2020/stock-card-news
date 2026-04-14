"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 14일 거시경제\n이란 휴전 기대\n달러 약세·금·코인\n동시에 올랐다",
  date: "4월 14일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "S&P 500 사상 최고치\n0.2% 차이까지 복귀\n3거래일 연속 상승",
    isPositive: true,
    date: "4월 14일",
    theme: "오늘 요약",
  },
  {
    id: 2,
    headline: "미국-이란 협상 기대\n불확실성이 줄자\n나스닥 하루 +2% 급등",
    isPositive: true,
    date: "4월 14일",
    theme: "이란·성장주",
  },
  {
    id: 3,
    headline: "장기 금리 소폭 올랐지만\n실질금리는 오히려 하락\n위험자산엔 더 우호적",
    isPositive: true,
    date: "4월 14일",
    theme: "금리",
  },
  {
    id: 4,
    headline: "달러 약세에 금 +1.9%\n은은 하루 +5% 급등\n유가는 휴전 기대에 -3%",
    isPositive: true,
    date: "4월 14일",
    theme: "달러·금·유가",
  },
  {
    id: 5,
    headline: "비트코인 4주래 최고치\n달러 약세 + 휴전 기대\n디지털 금 내러티브 재점화",
    isPositive: true,
    date: "4월 14일",
    theme: "크립토",
  },
  {
    id: 6,
    headline: "미국만 오른 게 아니다\n신흥국·유럽·일본\n7일 기준 모두 +5% 이상",
    isPositive: true,
    date: "4월 14일",
    theme: "글로벌 시장",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
