"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 21일 미국증시\n에너지만 웃고\n방산·코인·리츠\n동반 급락",
  date: "4월 21일",
  isPositive: false,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "이란 휴전 만료 공포\n에너지만 ▲1.62%\n나머지 섹터는\n일제히 하락",
    isPositive: false,
    date: "4월 21일",
    theme: "시장 개요",
  },
  {
    id: 2,
    headline: "APA·HAL·OXY\n유가 공급 불안에\n에너지주 120일\n누적 ▲30%",
    isPositive: true,
    date: "4월 21일",
    theme: "에너지",
  },
  {
    id: 3,
    headline: "기술주 오늘 ▲0.44%\n숨 고르기지만\n10일 기준 ▲10%\n여전히 주도",
    isPositive: true,
    date: "4월 21일",
    theme: "기술",
  },
  {
    id: 4,
    headline: "유나이티드헬스 ▲6.84%\n노던트러스트 ▲8.02%\n실적 확인되자\n투자자 바로 매수",
    isPositive: true,
    date: "4월 21일",
    theme: "실적 승자",
  },
  {
    id: 5,
    headline: "트랙터서플라이 ▼11.69%\n노스롭그루먼 ▼6.98%\n코인베이스 ▼7.53%\n스토리보다 숫자",
    isPositive: false,
    date: "4월 21일",
    theme: "실적 패자",
  },
  {
    id: 6,
    headline: "부동산 ▼2.13%\n유틸리티 ▼1.72%\n'안전자산'도\n고금리 앞엔 무너졌다",
    isPositive: false,
    date: "4월 21일",
    theme: "부동산·유틸",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
