"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 17일 거시경제\n유가 ▼10% 급락\n증시 최고치·비트코인 급등\n안도 랠리의 하루",
  date: "4월 17일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "이란, 호르무즈 해협 재개방\n유가 하루 만에 ▼10% 급락\n기름값 폭탄 해제",
    isPositive: true,
    date: "4월 17일",
    theme: "유가·지정학",
  },
  {
    id: 2,
    headline: "S&P 500·나스닥\n또 한 번 사상 최고치\n이번 주만 수차례 경신",
    isPositive: true,
    date: "4월 17일",
    theme: "미국 주식",
  },
  {
    id: 3,
    headline: "금리가 올랐는데\n주식도 올랐다\n'나쁜 금리'가 아니었기 때문",
    isPositive: true,
    date: "4월 17일",
    theme: "금리·채권",
  },
  {
    id: 4,
    headline: "금·장기채도 함께 올랐다\n위험자산과 안전자산\n동시 강세의 날",
    isPositive: true,
    date: "4월 17일",
    theme: "안전자산",
  },
  {
    id: 5,
    headline: "비트코인 7만 7천 달러\n이더리움도 ▲3.5%\n위험 온도계가 확 올라갔다",
    isPositive: true,
    date: "4월 17일",
    theme: "크립토",
  },
  {
    id: 6,
    headline: "안도 랠리는 언제든 뒤집힌다\n유가가 계속 눌릴지\n다음 주 연준 발언이 핵심",
    isPositive: true,
    date: "4월 17일",
    theme: "오늘의 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
