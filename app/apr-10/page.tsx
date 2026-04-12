"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "물가 쇼크\n비트코인만\n올랐다",
  subtitle: "4월 10일 미국 시장 완전 정리",
  date: "4월 10일",
  isPositive: false,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "4월 10일 금요일\n인플레 쇼크\n시장 눈치보기",
    bullets: [
      "CPI 쇼크 → 금리 인하 기대 후퇴",
      "주식 혼조, 비트코인은 강세",
    ],
    isPositive: false,
    date: "4월 10일",
    theme: "오늘 시장 요약",
  },
  {
    id: 2,
    headline: "3월 소비자물가\n예상보다 뜨거웠다",
    bullets: [
      "에너지·휘발유 급등이 물가 견인",
      "연준 금리 인하 기대 더 멀어져",
    ],
    isPositive: false,
    date: "4월 10일",
    theme: "인플레이션",
  },
  {
    id: 3,
    headline: "10년 금리 4.29%\n한 달 사이 크게 올랐다",
    bullets: [
      "장단기 금리차 플러스로 회복",
      "실질금리 한 달 +10% 급등",
    ],
    isPositive: false,
    date: "4월 10일",
    theme: "금리·채권",
  },
  {
    id: 4,
    headline: "주식 혼조\n기술주만 버텼다",
    bullets: [
      "나스닥 소폭 상승, 다우 하락",
      "이번 주 전체론 3~5% 좋은 한 주",
    ],
    isPositive: false,
    date: "4월 10일",
    theme: "미국 증시",
  },
  {
    id: 5,
    headline: "유가 하락\n달러 소폭 강세",
    bullets: [
      "7일 -10%, 전쟁 프리미엄 소멸",
      "달러 인덱스 98.95 소폭 상승",
    ],
    isPositive: false,
    date: "4월 10일",
    theme: "달러·원자재",
  },
  {
    id: 6,
    headline: "비트코인\n7만3천 달러 돌파",
    bullets: [
      "오늘 +2%, 이더리움 +2.9%",
      "위험자산 눈치볼 때 독야청청",
    ],
    isPositive: true,
    date: "4월 10일",
    theme: "암호화폐",
  },
  {
    id: 7,
    headline: "인플레\n아직 끝나지 않았다",
    bullets: [
      "금리 인하 후퇴 — 대출 부담 계속",
      "포트폴리오 내성 점검할 구간",
    ],
    isPositive: false,
    date: "4월 10일",
    theme: "핵심 메시지",
  },
];

export default function Apr10Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
