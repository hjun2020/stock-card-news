"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 10일 미국 시장 완전 정리",
  subtitle: "물가 쇼크\n비트코인만\n올랐다",
  date: "4월 10일",
  isPositive: false,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "4월 10일 금요일\n인플레 쇼크\n시장 눈치보기",
    isPositive: false,
    date: "4월 10일",
    theme: "오늘 시장 요약",
  },
  {
    id: 2,
    headline: "3월 소비자물가\n예상보다 뜨거웠다",
    isPositive: false,
    date: "4월 10일",
    theme: "인플레이션",
  },
  {
    id: 3,
    headline: "10년 금리 4.29%\n한 달 사이 크게 올랐다",
    isPositive: false,
    date: "4월 10일",
    theme: "금리·채권",
  },
  {
    id: 4,
    headline: "주식 혼조\n기술주만 버텼다",
    isPositive: false,
    date: "4월 10일",
    theme: "미국 증시",
  },
  {
    id: 5,
    headline: "유가 하락\n달러 소폭 강세",
    isPositive: false,
    date: "4월 10일",
    theme: "달러·원자재",
  },
  {
    id: 6,
    headline: "비트코인\n7만3천 달러 돌파",
    isPositive: true,
    date: "4월 10일",
    theme: "암호화폐",
  },
  {
    id: 7,
    headline: "인플레\n아직 끝나지 않았다",
    isPositive: false,
    date: "4월 10일",
    theme: "핵심 메시지",
  },
];

export default function Apr10Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
