"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 20일 거시경제\n유가 ▲4.6% 급등\n주식은 숨고르기\n크립토만 홀로 강세",
  date: "4월 21일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "유가 ETF\n호르무즈 긴장에 하루 ▲4.58%\n에너지·물류 비용 인플레\n다시 불씨 살아났다",
    isPositive: false,
    date: "4월 21일",
    theme: "유가",
  },
  {
    id: 2,
    headline: "미 10년물 금리 4.26%\n유가 급등에도 오히려 소폭 하락\n시장은 '과열 아닌\n공급 충격'으로 읽었다",
    isPositive: true,
    date: "4월 21일",
    theme: "금리",
  },
  {
    id: 3,
    headline: "S&P 500 ▼0.20%\n나스닥 100 ▼0.31%\n사상 최고 근처에서\n아주 가벼운 숨고르기",
    isPositive: true,
    date: "4월 21일",
    theme: "미국 주식",
  },
  {
    id: 4,
    headline: "비트코인 ▲3.69%\n이더리움 ▲3.28%\n주식이 쉬는 날\n크립토가 홀로 강세",
    isPositive: true,
    date: "4월 21일",
    theme: "크립토",
  },
  {
    id: 5,
    headline: "금 ▼0.83% · 은 ▼2.01%\n한 달간 크게 오른 뒤\n차익 실현 매물에 밀렸다\n안전자산도 항상 오르진 않는다",
    isPositive: false,
    date: "4월 21일",
    theme: "귀금속",
  },
  {
    id: 6,
    headline: "유가·전쟁·실적이 뒤엉킨 하루\n레버리지보다 분산\n한 번에 사기보다\n시간 나눠 매수가 유리",
    isPositive: true,
    date: "4월 21일",
    theme: "오늘의 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
