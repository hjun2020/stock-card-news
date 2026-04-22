"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 22일 거시경제\n이자·유가·비트코인\n모두 뛰었다\n위험자산 재가동",
  date: "4월 22일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "SPY ▲1.02%·QQQ ▲1.80%\n비트코인 ▲2.88%·유가 ▲0.90%\n불안 속에서도\n위험자산으로 돈이 돌았다",
    isPositive: true,
    date: "4월 22일",
    theme: "시장 개요",
  },
  {
    id: 2,
    headline: "10년 국채 금리 4.30%\n연준 금리 인하 더 늦어질 것\n장기 대출 이자\n쉽게 안 내려간다",
    isPositive: false,
    date: "4월 22일",
    theme: "금리",
  },
  {
    id: 3,
    headline: "나스닥 QQQ ▲1.80% 급등\n테슬라·IBM 실적 앞두고\n기술·성장주로\n미리 돈이 몰렸다",
    isPositive: true,
    date: "4월 22일",
    theme: "미국 주식",
  },
  {
    id: 4,
    headline: "비트코인 78,548달러 ▲2.88%\n이란 휴전 기대에 급등\n현물 ETF 자금도 꾸준 유입\n전쟁 속 역설적 랠리",
    isPositive: true,
    date: "4월 22일",
    theme: "크립토",
  },
  {
    id: 5,
    headline: "유가 ETF ▲0.90%·90일 ▲80%\n금 ▲1.32%·은 ▲2.74%\n한 손엔 주식, 한 손엔 금\n양손 전략 구간",
    isPositive: true,
    date: "4월 22일",
    theme: "원자재",
  },
  {
    id: 6,
    headline: "신흥국·유럽·일본 ETF 동반 ▲\n달러 지수 소폭 강세\n세계 경기 전체 붕괴는 아냐\n글로벌 분산도 통한 하루",
    isPositive: true,
    date: "4월 22일",
    theme: "글로벌",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
