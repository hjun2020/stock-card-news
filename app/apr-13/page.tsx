"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 13일 미국증시 섹터별 총정리",
  subtitle: "유가 폭락이\n판을 뒤집었다",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "유가 급락이\n한 주의 판을\n다시 짰다",
    bullets: ["이란 휴전 → 유가 하루 10%↓", "에너지 돈이 리츠·반도체로 이동"],
    isPositive: true,
    date: "4월 13일",
    theme: "주간 총정리",
  },
  {
    id: 2,
    headline: "부동산 리츠\n금리 부담 줄며\n+5.36% 급등",
    bullets: ["SBA커뮤니케이션 +34.65%", "금리 인하 기대 → 리츠 가치↑"],
    isPositive: true,
    date: "4월 13일",
    theme: "리츠 섹터",
  },
  {
    id: 3,
    headline: "소재 섹터\n경기침체 우려 완화로\n+5.31%",
    bullets: ["뉴몬트 금광주 +21.68%", "프리포트 구리 AI수요 기대 급등"],
    isPositive: true,
    date: "4월 13일",
    theme: "소재 섹터",
  },
  {
    id: 4,
    headline: "산업재\n설비투자 기대에\n+5.04%",
    bullets: ["데이터센터 냉난방 수요 수혜", "컴포트시스템즈 +17.24%"],
    isPositive: true,
    date: "4월 13일",
    theme: "산업재",
  },
  {
    id: 5,
    headline: "인텔\nAI 칩 파트너십으로\n+41.54% 폭등",
    bullets: ["구글 클라우드 AI칩 공급 합의", "파운드리 전환 · 숏스퀴즈 랠리"],
    isPositive: true,
    date: "4월 13일",
    theme: "기술 섹터",
  },
  {
    id: 6,
    headline: "에너지 섹터\n1분기 MVP의\n쉬어가기 -7.49%",
    bullets: ["이란 휴전으로 유가 하루 10%↓", "120일 +39% 장기 추세는 건재"],
    isPositive: false,
    date: "4월 13일",
    theme: "에너지 섹터",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
