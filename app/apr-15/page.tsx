"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 15일 미국증시\n금융이 질주하고\n에너지는\n숨을 골랐다",
  date: "4월 15일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "금융 ▲1.42%\n11개 섹터 1위\n기술·커뮤니케이션도\n동반 강세",
    isPositive: true,
    date: "4월 15일",
    theme: "섹터 총정리",
  },
  {
    id: 2,
    headline: "골드만·씨티 호실적\n금리 완화 기대까지\n로빈후드 ▲10.48%\n유에스 뱅코프 ▲9.75%",
    isPositive: true,
    date: "4월 15일",
    theme: "금융주",
  },
  {
    id: 3,
    headline: "코인베이스 ▲6.22%\n위험자산 선호 회복\n개인 트레이딩\n다시 불붙다",
    isPositive: true,
    date: "4월 15일",
    theme: "핀테크",
  },
  {
    id: 4,
    headline: "아틀라시안 ▲10.65%\n데이터독 ▲9.49%\n쇼피파이 ▲8.18%\n기술주 랠리 연장",
    isPositive: true,
    date: "4월 15일",
    theme: "기술주",
  },
  {
    id: 5,
    headline: "도어대시 ▲10.02%\n테슬라 ▲7.49%\n하지만 섹터 전체는\n아직 회복 초입",
    isPositive: true,
    date: "4월 15일",
    theme: "소비 순환주",
  },
  {
    id: 6,
    headline: "에너지 4개월 ▲33%\n최근 10일 ▼8%\n이익 실현 매물에\n잠시 벤치에 앉다",
    isPositive: false,
    date: "4월 15일",
    theme: "에너지",
  },
  {
    id: 7,
    headline: "방어주에서\n성장·금융으로\n무게 중심이\n서서히 이동 중",
    isPositive: true,
    date: "4월 15일",
    theme: "투자자 체크",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
