"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 14일 미국증시\n유가 진정\n성장·부동산에\n돈이 몰렸다",
  date: "4월 14일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "3거래일 연속 상승\nS&P 500 +1.2%·나스닥 +2%\n사상 최고치 근처까지 복귀",
    isPositive: true,
    date: "4월 14일",
    theme: "오늘 요약",
  },
  {
    id: 2,
    headline: "미국-이란 대화 기대\n유가 하락 전환\n에너지만 -2.26% 역주행",
    isPositive: false,
    date: "4월 14일",
    theme: "유가·에너지",
  },
  {
    id: 3,
    headline: "로빈후드 하루 +10.45%\n코인베이스 +5.66%\n위험자산 선호 심리 되살아났다",
    isPositive: true,
    date: "4월 14일",
    theme: "금융·크립토",
  },
  {
    id: 4,
    headline: "마이크론 하루 +9.04%\nAI·데이터센터 투자 기대\n반도체에 다시 베팅하다",
    isPositive: true,
    date: "4월 14일",
    theme: "반도체",
  },
  {
    id: 5,
    headline: "델타항공 하루 +6.94%\n연료비 부담 완화 기대\n항공·소비주 동반 반등",
    isPositive: true,
    date: "4월 14일",
    theme: "항공·소비",
  },
  {
    id: 6,
    headline: "부동산 리츠 섹터 1위 +1.18%\n금리 피크아웃 기대에\n소외됐던 배당주가 깨어났다",
    isPositive: true,
    date: "4월 14일",
    theme: "부동산·리츠",
  },
  {
    id: 7,
    headline: "전쟁→유가→물가→금리\n최악의 도미노가 멈출 수 있다\n성장주 랠리의 진짜 이유",
    isPositive: true,
    date: "4월 14일",
    theme: "거시 배경",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
