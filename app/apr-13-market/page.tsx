"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 13일 미국증시\n악재 속에서도\nAI·기술주에\n다시 베팅하다",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "4월 13일 미 증시\n중동 악재 딛고\n기술주 주도로 상승 마감",
    isPositive: true,
    date: "4월 13일",
    theme: "오늘 요약",
  },
  {
    id: 2,
    headline: "오라클 하루 +12%\nAI 클라우드 재평가\n낙폭 과대 종목의 귀환",
    isPositive: true,
    date: "4월 13일",
    theme: "오라클",
  },
  {
    id: 3,
    headline: "기술 섹터 하루 +3.39%\n최근 10일 누적 +9%\nAI·금리 기대가 겹쳤다",
    isPositive: true,
    date: "4월 13일",
    theme: "기술 섹터",
  },
  {
    id: 4,
    headline: "방어주에서 돈이 빠졌다\n유틸리티 -1.17%\n성장주로 자금 이동한 하루",
    isPositive: false,
    date: "4월 13일",
    theme: "섹터 로테이션",
  },
  {
    id: 5,
    headline: "에너지 4개월 누적 +38%\n오늘은 보합 +0.1%\n장기 강세 후 숨고르기",
    isPositive: true,
    date: "4월 13일",
    theme: "에너지",
  },
  {
    id: 6,
    headline: "성장주 재랠리 두 엔진:\nCPI 둔화 + AI 투자 사이클\n동시에 돌아가기 시작했다",
    isPositive: true,
    date: "4월 13일",
    theme: "랠리 배경",
  },
  {
    id: 7,
    headline: "성장주와 방어주\n둘 다 필요한 시점\n한쪽 올인은 기회를 놓친다",
    isPositive: true,
    date: "4월 13일",
    theme: "투자 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
