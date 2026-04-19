"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 19일 52주\n신고가 종목들\nAI·반도체 + 빅뱅크\n두 엔진이 켜졌다",
  date: "4월 19일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "필라델피아 반도체지수\n4월 초 사상 최고 돌파\nAI 인프라 수요가 섹터 전체 들어올렸다",
    isPositive: true,
    date: "4월 19일",
    theme: "반도체 섹터",
  },
  {
    id: 2,
    headline: "마벨 테크놀로지\n4월에만 ▲50% 랠리\n커스텀 AI 칩·데이터센터 리레이팅",
    isPositive: true,
    date: "4월 19일",
    theme: "마벨",
  },
  {
    id: 3,
    headline: "아날로그 디바이시스\n52주 신고가 재경신\n가격 인상 + AI·자동차 인프라 노출",
    isPositive: true,
    date: "4월 19일",
    theme: "ADI",
  },
  {
    id: 4,
    headline: "아리스타 네트웍스\nAI 서버의 혈관을 깔아주는 회사\n1년 최고가 근접 재탈환",
    isPositive: true,
    date: "4월 19일",
    theme: "아리스타",
  },
  {
    id: 5,
    headline: "시티그룹\n실적 서프라이즈 + 목표가 ▲137달러\n구조개편 완성 → 52주 신고가",
    isPositive: true,
    date: "4월 19일",
    theme: "시티그룹",
  },
  {
    id: 6,
    headline: "지금은 테마·사이클이 먼저\n조정이 와도 AI 인프라엔\n자금이 빠르게 다시 돌아온다",
    isPositive: true,
    date: "4월 19일",
    theme: "오늘의 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
