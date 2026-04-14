"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 14일 AI 대표주\n9종목이\n동시에\n두 자릿수 상승",
  date: "4월 14일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "AMD, NVDA, AMZN 등\nAI 대표주 9종목\n한 주 만에 10% 동반 상승",
    isPositive: true,
    date: "4월 14일",
    theme: "이번 주 요약",
  },
  {
    id: 2,
    headline: "오라클, 2026년부터\nAMD GPU 5만 개 도입\n엔비디아 독점에 균열",
    isPositive: true,
    date: "4월 14일",
    theme: "GPU 신규 계약",
  },
  {
    id: 3,
    headline: "AMD × 메타\nAI 플랫폼 '헬리오스' 출시\n빅테크 파트너십 강화",
    isPositive: true,
    date: "4월 14일",
    theme: "파트너십",
  },
  {
    id: 4,
    headline: "하이퍼스케일러 5곳\n2026년 AI 투자 5,000억 달러\n전년 대비 +30% 전망",
    isPositive: true,
    date: "4월 14일",
    theme: "캡엑 전망",
  },
  {
    id: 5,
    headline: "AI주는 하나처럼 움직인다\n한 곳 호재가\n전체 테마를 끌어올린다",
    isPositive: true,
    date: "4월 14일",
    theme: "AI 바스켓",
  },
  {
    id: 6,
    headline: "다음 변수:\n빅테크 실적 발표에서\nAI 투자 가이던스 확인",
    isPositive: true,
    date: "4월 14일",
    theme: "앞으로 볼 것",
  },
  {
    id: 7,
    headline: "AI는 트렌드가 아니라\n데이터센터 인프라\n투자 사이클이다",
    isPositive: true,
    date: "4월 14일",
    theme: "핵심 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
