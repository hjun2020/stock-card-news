"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "IRP, 연금저축\n둘 다 세액공제\n뭐가 다를까요? ↓",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "먼저 공통점\n세 가지입니다",
    isPositive: true,
    date: "4월 13일",
    theme: "공통점",
  },
  {
    id: 2,
    headline: "노후 대비 상품\n연말정산 세액공제\n55세 이후 수령",
    isPositive: true,
    date: "4월 13일",
    theme: "공통점",
  },
  {
    id: 3,
    headline: "차이점 첫 번째\n가입 자격입니다",
    isPositive: true,
    date: "4월 13일",
    theme: "차이점 1",
  },
  {
    id: 4,
    headline: "연금저축 → 누구나 가능\nIRP → 소득 있어야 가능",
    isPositive: true,
    date: "4월 13일",
    theme: "가입 자격",
  },
  {
    id: 5,
    headline: "차이점 두 번째\n납입 한도입니다",
    isPositive: true,
    date: "4월 13일",
    theme: "차이점 2",
  },
  {
    id: 6,
    headline: "연금저축 → 연 600만원\nIRP → 연 900만원\n합산 한도 → 900만원",
    isPositive: true,
    date: "4월 13일",
    theme: "납입 한도",
  },
  {
    id: 7,
    headline: "차이점 세 번째\n꺼낼 때 다릅니다",
    isPositive: true,
    date: "4월 13일",
    theme: "차이점 3",
  },
  {
    id: 8,
    headline: "연금저축 → 중도인출 가능\nIRP → 중도인출 거의 불가",
    isPositive: false,
    date: "4월 13일",
    theme: "중도인출",
  },
  {
    id: 9,
    headline: "정리하면\n이렇습니다",
    isPositive: true,
    date: "4월 13일",
    theme: "정리",
  },
  {
    id: 10,
    headline: "유연하게 쓰고 싶다 → 연금저축 먼저\n한도 꽉 채우고 싶다 → IRP 추가",
    isPositive: true,
    date: "4월 13일",
    theme: "선택 기준",
  },
  {
    id: 11,
    headline: "연말정산 전에\n꼭 확인하세요\n매주 정리해드립니다 →",
    isPositive: true,
    date: "4월 13일",
    theme: "마무리",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
