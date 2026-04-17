"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 17일 미국증시\n여행주는 폭등\n에너지는 폭락\n하루에 두 개 장이 열렸다",
  date: "4월 17일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "11개 섹터 중 8개 상승\n크루즈·항공이 시장을 이끌며\n'여행 랠리의 날'",
    isPositive: true,
    date: "4월 17일",
    theme: "오늘 시장",
  },
  {
    id: 2,
    headline: "유나이티드항공 ▲7%\n카니발·로열캐리비안도 ▲7%\n기름값 내리면 여행주가 웃는다",
    isPositive: true,
    date: "4월 17일",
    theme: "항공·크루즈",
  },
  {
    id: 3,
    headline: "넷플릭스\n실적은 좋았는데\n가이던스 실망에 ▼10%",
    isPositive: false,
    date: "4월 17일",
    theme: "커뮤니케이션",
  },
  {
    id: 4,
    headline: "에너지 섹터 ▼2.74%\n4개월 ▲27% 올랐던 주도주\n지정학 완화에 차익 실현",
    isPositive: false,
    date: "4월 17일",
    theme: "에너지",
  },
  {
    id: 5,
    headline: "라이온델바젤 ▼12%\n다우 ▼11% 동반 급락\n원자재 강세가 끝나가나",
    isPositive: false,
    date: "4월 17일",
    theme: "기초소재",
  },
  {
    id: 6,
    headline: "실적 좋아도 주가 떨어진다\n시장은 '지금'보다 '앞으로'를\n더 비싸게 산다",
    isPositive: true,
    date: "4월 17일",
    theme: "오늘의 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
