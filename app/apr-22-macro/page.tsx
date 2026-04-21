"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 21일 거시경제\n이란 휴전 만료 공포\n유가 ▲5.66%\n증시는 숨 고르기",
  date: "4월 21일",
  isPositive: false,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "USO ▲5.66% 급등\n이란 휴전 수요일 만료\n원유 공급 차질 우려\n다시 불붙었다",
    isPositive: true,
    date: "4월 21일",
    theme: "원유·에너지",
  },
  {
    id: 2,
    headline: "10년물 금리 4.26%\n거의 제자리인데\n실질금리는 소폭 ▲\n성장주엔 서서히 부담",
    isPositive: false,
    date: "4월 21일",
    theme: "금리",
  },
  {
    id: 3,
    headline: "SPY ▼0.73%\nQQQ ▼0.51%\n30일 ▲8~11% 랠리 뒤\n숨 고르기 하루",
    isPositive: false,
    date: "4월 21일",
    theme: "미국 증시",
  },
  {
    id: 4,
    headline: "달러 ▼0.22% 약세\n유럽 ETF ▼2.18%\n일본 ETF ▼2.45%\n전 세계 동반 조정",
    isPositive: false,
    date: "4월 21일",
    theme: "달러·글로벌",
  },
  {
    id: 5,
    headline: "비트코인 ▼0.37%\n이더리움 ▲0.15%\n30일 ▲11~13% 뒤\n조용한 숨 고르기",
    isPositive: false,
    date: "4월 21일",
    theme: "크립토",
  },
  {
    id: 6,
    headline: "휴전 만료 전후\n유가·금리·주식\n세 변수 동시 점검\n필요한 시점",
    isPositive: false,
    date: "4월 21일",
    theme: "투자자 체크",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
