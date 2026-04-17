"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 13일 거시경제\n유가 급등·금리 상승\n그런데도\n주식은 올랐다",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "호르무즈 봉쇄\n유가 배럴당 100달러 돌파\nS&P500은 오히려 올랐다",
    isPositive: true,
    date: "4월 13일",
    theme: "오늘 요약",
  },
  {
    id: 2,
    headline: "유가 ETF(USO)\n하루 ▲2.83%\n90일 누적 ▲74%",
    isPositive: true,
    date: "4월 13일",
    theme: "유가",
  },
  {
    id: 3,
    headline: "10년물 금리 4.31%\n돈의 가격이 계속 오르는데\n주식은 기어코 올랐다",
    isPositive: false,
    date: "4월 13일",
    theme: "금리",
  },
  {
    id: 4,
    headline: "SPY ▲0.97%  QQQ ▲1.03%\n지정학 악재를 딛고\n실적 기대가 이겼다",
    isPositive: true,
    date: "4월 13일",
    theme: "미국 증시",
  },
  {
    id: 5,
    headline: "비트코인 ▲3.35%\n이더리움 ▲2.73%\n공포 모드는 아직 아니다",
    isPositive: true,
    date: "4월 13일",
    theme: "크립토",
  },
  {
    id: 6,
    headline: "신흥국·유럽·일본\n세계 ETF 전부 플러스\n달러 약세가 뒷받침했다",
    isPositive: true,
    date: "4월 13일",
    theme: "글로벌",
  },
  {
    id: 7,
    headline: "비싼 기름, 비싼 돈\n그런데도 버티는 시장\n다음 관건은 유가와 물가",
    isPositive: true,
    date: "4월 13일",
    theme: "핵심 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
