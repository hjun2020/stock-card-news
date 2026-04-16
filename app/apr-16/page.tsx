"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 16일 미국증시\n지수는 또 사상 최고\n근데 안에서는\n전쟁 중",
  date: "4월 16일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "S&P·나스닥\n다시 사상 최고치\n8개 섹터가 함께 올랐다",
    isPositive: true,
    date: "4월 16일",
    theme: "오늘 시장",
  },
  {
    id: 2,
    headline: "앨버말\n리튬 공급 부족 기대에\n하루 만에 +16%",
    isPositive: true,
    date: "4월 16일",
    theme: "기초소재",
  },
  {
    id: 3,
    headline: "ASML 호실적이\nAMD·델까지\n끌어올렸다",
    isPositive: true,
    date: "4월 16일",
    theme: "AI 반도체",
  },
  {
    id: 4,
    headline: "넷플릭스\n성장 둔화 우려 하나에\n-8% 추락",
    isPositive: false,
    date: "4월 16일",
    theme: "커뮤니케이션",
  },
  {
    id: 5,
    headline: "찰스 슈왑\n실적·마진 실망에\n-8% 급락",
    isPositive: false,
    date: "4월 16일",
    theme: "금융",
  },
  {
    id: 6,
    headline: "지금 장세의 법칙\n좋은 것만 골라 오른다\n무엇을 갖고 있느냐가 전부",
    isPositive: true,
    date: "4월 16일",
    theme: "오늘의 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
