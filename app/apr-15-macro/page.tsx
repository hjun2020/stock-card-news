"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 15일 거시경제\nPPI 깜짝 둔화\n금리·달러 내리고\n기술주·코인 웃다",
  date: "4월 15일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "3월 생산자물가\n예상보다 크게 식어\n인플레 재발 공포\n한 박자 꺾이다",
    isPositive: true,
    date: "4월 15일",
    theme: "PPI 서프라이즈",
  },
  {
    id: 2,
    headline: "10년물 금리 4.26%\n하루 만에 -0.93%\n달러지수도 97.99\n동반 하락",
    isPositive: true,
    date: "4월 15일",
    theme: "금리·달러",
  },
  {
    id: 3,
    headline: "S&P500·나스닥\n사상 최고치 경신\nQQQ +1.31%\n기술주가 랠리 주도",
    isPositive: true,
    date: "4월 15일",
    theme: "미국 주식",
  },
  {
    id: 4,
    headline: "비트코인 74,674달러\n이더리움 +1.56%\n금리 하락에\n위험자산 동반 상승",
    isPositive: true,
    date: "4월 15일",
    theme: "크립토",
  },
  {
    id: 5,
    headline: "금 -1.04%\n은 -0.44%\n장기채 TLT -0.48%\n안전자산 차익 실현",
    isPositive: false,
    date: "4월 15일",
    theme: "안전자산",
  },
  {
    id: 6,
    headline: "다우 -0.16%\n혼자 역주행\n전통·경기민감주\n인플레 완화엔 덜 매력",
    isPositive: false,
    date: "4월 15일",
    theme: "다우 온도차",
  },
  {
    id: 7,
    headline: "달러 약세 구간\n기술주 비중 점검\n크립토는 여전히\n금리 민감 자산",
    isPositive: true,
    date: "4월 15일",
    theme: "투자자 체크",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
