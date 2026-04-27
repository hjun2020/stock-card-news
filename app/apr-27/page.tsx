"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 27일 미국증시\n피자는 무너지고\n칩은 질주했다\n지수는 최고치",
  date: "4월 27일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "S&P 500 ▲0.1% 사상 최고\n나스닥 ▲0.2% 기록 경신\n전쟁·유가 부담에도 버텼지만\n섹터 온도차는 극심했다",
    isPositive: true,
    date: "4월 27일",
    theme: "시장 개요",
  },
  {
    id: 2,
    headline: "도미노피자 ▼8.38% 급락\n1분기 실적 시장 기대치 하회\n소비 여력 둔화 신호\n기대 미달 순간 직격타",
    isPositive: false,
    date: "4월 27일",
    theme: "소비주",
  },
  {
    id: 3,
    headline: "샌디스크 ▲8.31%·마이크론 ▲5.39%\n엔비디아 ▲3.97% 동반 급등\nAI·데이터센터 메모리 수요\n구조적 성장 스토리 건재",
    isPositive: true,
    date: "4월 27일",
    theme: "반도체",
  },
  {
    id: 4,
    headline: "알베말 ▲5.95% 급등\n세계 최대 리튬 생산업체\n리튬 가격 바닥론 재부각\nEV·에너지 저장 장기 테마",
    isPositive: true,
    date: "4월 27일",
    theme: "배터리 소재",
  },
  {
    id: 5,
    headline: "금융 섹터 ▲0.50%\n이틀 연속 하락 후 첫 반등\n자산운용·브로커리지 ▲2~3%\n방어+수익 동시에 잡는 구간",
    isPositive: true,
    date: "4월 27일",
    theme: "금융",
  },
  {
    id: 6,
    headline: "필수소비재 ▼1.09%\n부동산 ▼0.70%·임의소비재 ▼0.71%\n지수는 최고치\n내 포트폴리오는 어느 쪽?",
    isPositive: false,
    date: "4월 27일",
    theme: "섹터 양극화",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
