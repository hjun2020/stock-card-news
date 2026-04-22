"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 22일 미국증시\n실적 좋은 곳만\n확실히\n보상받았다",
  date: "4월 22일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "에너지·기술·커뮤니케이션 ▲\n소비재·리츠·유틸리티 ▼\n지수는 강했지만\n내부는 들쑥날쑥",
    isPositive: false,
    date: "4월 22일",
    theme: "시장 개요",
  },
  {
    id: 2,
    headline: "브렌트유 배럴당 102달러\n베이커휴즈 ▲3.80%\n코테라에너지 ▲3.39%\n에너지 섹터 ▲1.64% 1위",
    isPositive: true,
    date: "4월 22일",
    theme: "에너지",
  },
  {
    id: 3,
    headline: "ARM 홀딩스 ▲11.97%\n텍사스인스트루먼츠 ▲9.44%\nAI·자동차 칩 수요 확인\n기술 섹터 ▲1.14%",
    isPositive: true,
    date: "4월 22일",
    theme: "기술·반도체",
  },
  {
    id: 4,
    headline: "GE 베르노바 ▲13.85%\n데이터센터 전력 주문\n분기 24억 달러\nAI가 실적을 바꿨다",
    isPositive: true,
    date: "4월 22일",
    theme: "AI 인프라",
  },
  {
    id: 5,
    headline: "보스턴사이언티픽 ▲8.99%\n인튜이티브서지컬 ▲7.41%\n로봇수술 시술 두 자릿수 ▲\n의료기기 실적 서프라이즈",
    isPositive: true,
    date: "4월 22일",
    theme: "헬스케어",
  },
  {
    id: 6,
    headline: "소비재 ▼1.19% 꼴찌\n리츠 ▼0.78%·유틸리티 ▼0.36%\n유가·금리 동시 상승에\n고배당 업종이 팔렸다",
    isPositive: false,
    date: "4월 22일",
    theme: "소비·부동산",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
