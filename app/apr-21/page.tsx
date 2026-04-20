"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 20일 미국증시\nAI 반도체 훈풍\n기술만 치고 나가고\n유틸은 대형 매물에 밀렸다",
  date: "4월 21일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "11개 섹터 중 8개 상승\n기술 ▲1.11% 선두\n유틸리티 ▼0.93% 꼴찌\nAI 랠리가 시장 엔진 재확인",
    isPositive: true,
    date: "4월 21일",
    theme: "시장 전체",
  },
  {
    id: 2,
    headline: "마벨 테크놀로지\nGoogle AI 맞춤형 칩 개발 협의\n데이터센터 수혜 기대 불붙어\n▲5.67% 급등",
    isPositive: true,
    date: "4월 21일",
    theme: "반도체",
  },
  {
    id: 3,
    headline: "휴렛 팩커드 엔터프라이즈\nAI 전용 서버·인프라 수요 폭증\n반도체 옆 인프라도 같이 오른다\n▲5.33% 강세",
    isPositive: true,
    date: "4월 21일",
    theme: "AI 인프라",
  },
  {
    id: 4,
    headline: "아틀라시안\nAI 기능 탑재·클라우드 수요 확대\n소프트웨어까지 AI 수혜 확산\n▲6.78% 급등",
    isPositive: true,
    date: "4월 21일",
    theme: "소프트웨어",
  },
  {
    id: 5,
    headline: "NRG 에너지\nLS파워 1,430만 주 대량 매도\n물량 쏟아지자 수급 압박에\n▼6.29% 급락",
    isPositive: false,
    date: "4월 21일",
    theme: "유틸리티",
  },
  {
    id: 6,
    headline: "칩→서버→소프트웨어\nAI 가치사슬 전체가 함께 올랐다\n배당주도 대량 매물엔 흔들린다\n오늘이 보낸 두 가지 메시지",
    isPositive: true,
    date: "4월 21일",
    theme: "오늘의 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
