"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 18일 주간 거시경제\n인플레 식고\n지정학도 풀리자\n위험자산 총집결",
  date: "4월 18일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "물가가 생각보다 안 뜨겁다\nPPI·CPI 동반 온건\n연준 극단 긴축 공포 후퇴",
    isPositive: true,
    date: "4월 18일",
    theme: "인플레·연준",
  },
  {
    id: 2,
    headline: "이란·호르무즈 긴장 완화\n유가 주간 ▼7% 급락\n에너지 공급충격 프리미엄 소멸",
    isPositive: true,
    date: "4월 18일",
    theme: "유가·지정학",
  },
  {
    id: 3,
    headline: "S&P 500 주간 ▲4.5%\n나스닥 100 ▲6.2%\n1개월 조정을 단숨에 되돌렸다",
    isPositive: true,
    date: "4월 18일",
    theme: "미국 주식",
  },
  {
    id: 4,
    headline: "달러 지수 98선으로 밀려\n신흥국·유럽·일본\n동반 ▲2~4% 글로벌 동행 랠리",
    isPositive: true,
    date: "4월 18일",
    theme: "달러·글로벌",
  },
  {
    id: 5,
    headline: "비트코인 7만 7천 달러 탈환\n이더리움 주간 ▲8.3%\n극단적 공포에서 급반전",
    isPositive: true,
    date: "4월 18일",
    theme: "크립토",
  },
  {
    id: 6,
    headline: "다음 주 4월 말 FOMC 앞\n연준 발언·빅테크 실적 시즌\n랠리 지속 여부 판가름",
    isPositive: true,
    date: "4월 18일",
    theme: "다음 주 주목",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
