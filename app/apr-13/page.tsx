"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 13일 미국증시 섹터별 총정리",
  subtitle: "유가 폭락이\n판을 뒤집었다",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "유가 급락이\n한 주의 판을\n다시 짰다",
    isPositive: true,
    date: "4월 13일",
    theme: "주간 총정리",
  },
  {
    id: 2,
    headline: "부동산 리츠\n금리 부담 줄며\n+5.36% 급등",
    isPositive: true,
    date: "4월 13일",
    theme: "리츠 섹터",
  },
  {
    id: 3,
    headline: "소재 섹터\n경기침체 우려 완화로\n+5.31%",
    isPositive: true,
    date: "4월 13일",
    theme: "소재 섹터",
  },
  {
    id: 4,
    headline: "산업재\n설비투자 기대에\n+5.04%",
    isPositive: true,
    date: "4월 13일",
    theme: "산업재",
  },
  {
    id: 5,
    headline: "인텔\nAI 칩 파트너십으로\n+41.54% 폭등",
    isPositive: true,
    date: "4월 13일",
    theme: "기술 섹터",
  },
  {
    id: 6,
    headline: "에너지 섹터\n1분기 MVP의\n쉬어가기 -7.49%",
    isPositive: false,
    date: "4월 13일",
    theme: "에너지 섹터",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
