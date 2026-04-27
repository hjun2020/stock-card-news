"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 27일 거시경제\nFOMC 앞두고\n고점서 숨 들이마시는\n시장",
  date: "4월 27일",
  isPositive: false,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "FOMC·빅테크 이벤트 앞두고\n주식 고점서 멈춤\n비트코인·금 동반 ▼\n폭풍 전야의 대기 모드",
    isPositive: false,
    date: "4월 27일",
    theme: "시장 개요",
  },
  {
    id: 2,
    headline: "10년물 금리 4.31% ▼0.69%\n실질금리도 ▼1.56% 하락\n연준 덜 매파적 기대에\n채권 선매수 움직임",
    isPositive: true,
    date: "4월 27일",
    theme: "금리",
  },
  {
    id: 3,
    headline: "10-2년 스프레드 0.53 확대\n침체 공포 조금씩 완화 중\n아직 안심 단계는 아니지만\n최악은 지나가는 분위기",
    isPositive: true,
    date: "4월 27일",
    theme: "수익률 곡선",
  },
  {
    id: 4,
    headline: "달러 98.63 사실상 보합\n유가 ETF ▲1.75%\n90일 누적 ▲78% 급등 중\n물가 재반등 불씨 살아있다",
    isPositive: false,
    date: "4월 27일",
    theme: "달러·유가",
  },
  {
    id: 5,
    headline: "금 ETF ▼0.81%·은 ETF ▼0.68%\n공포 베팅 차익 실현\n유가 오르는데 금은 빠진다\n극단 공포의 정점은 아냐",
    isPositive: false,
    date: "4월 27일",
    theme: "금·은",
  },
  {
    id: 6,
    headline: "SPY ▲0.15%·QQQ ±0%\n사상 최고 근처서 멈춤\n빅테크 실적 따라\n위아래 모두 열려있는 구간",
    isPositive: true,
    date: "4월 27일",
    theme: "미국 주식",
  },
  {
    id: 7,
    headline: "비트코인 76,916달러 ▼2.24%\n이더리움 ▼3.34% 동반 하락\n30일 ▲15~16% 랠리 후\n차익 실현·숨 고르기 구간",
    isPositive: false,
    date: "4월 27일",
    theme: "크립토",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
