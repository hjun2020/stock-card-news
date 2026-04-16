"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 16일 거시경제\n전쟁·금리·유가\n다 올랐는데\n증시는 버텼다",
  date: "4월 16일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "10년물 금리 4.29%\n유가 +2.65% 급등\n그래도 증시는 최고치",
    isPositive: true,
    date: "4월 16일",
    theme: "오늘 거시",
  },
  {
    id: 2,
    headline: "연준 윌리엄스\n중동 전쟁이 물가를\n다시 올리고 있다 경고",
    isPositive: false,
    date: "4월 16일",
    theme: "연준",
  },
  {
    id: 3,
    headline: "S&P·나스닥\n금리·전쟁 부담 속에서도\n사상 최고치 부근 유지",
    isPositive: true,
    date: "4월 16일",
    theme: "미국 주식",
  },
  {
    id: 4,
    headline: "장기채·금·은\n실질 금리 상승에\n안전자산도 짓눌렸다",
    isPositive: false,
    date: "4월 16일",
    theme: "채권·귀금속",
  },
  {
    id: 5,
    headline: "비트코인 7만 5천 달러\n90일 -21% 조정 후\n단기 숨 고르기 중",
    isPositive: true,
    date: "4월 16일",
    theme: "크립토",
  },
  {
    id: 6,
    headline: "전쟁이 물가를 키우면\n금리 인하는 멀어진다\n대출·포트폴리오 점검할 때",
    isPositive: false,
    date: "4월 16일",
    theme: "오늘의 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
