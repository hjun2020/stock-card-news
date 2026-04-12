"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "유가 급락\n에너지는 쉬고\n리츠·반도체가 날았다",
  label: "미국 섹터 주간 성과 분석",
  subtitle: "4월 13일 미국 섹터 주간 완전 정리",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "유가 급락 하나로\n10개 섹터가\n동시에 올랐다",
    bullets: ["리츠·소재·산업재 5% 이상 급등", "에너지만 -7.49% 나홀로 역주행"],
    isPositive: true,
    date: "4월 13일",
    theme: "주간 시장 개요",
  },
  {
    id: 2,
    headline: "리츠\n금리 부담 내려가니\n숨통 텄다 +5.36%",
    bullets: ["유가 안정 → 인플레 완화 기대", "SBAC +34.65%, CCI +10.67%"],
    isPositive: true,
    date: "4월 13일",
    theme: "부동산·리츠",
  },
  {
    id: 3,
    headline: "소재\n뉴몬트·프리포트\n동반 +21% 급등",
    bullets: ["경기침체 최악 우려 완화 수혜", "120일 누적 +28.98% 강세 지속"],
    isPositive: true,
    date: "4월 13일",
    theme: "소재 섹터",
  },
  {
    id: 4,
    headline: "인텔\n'끝난 회사'가 다시 왔다\n주간 +41.54%",
    bullets: ["구글 AI 칩 파트너십 확대 합의", "파운드리 전환 재평가 동시 작용"],
    isPositive: true,
    date: "4월 13일",
    theme: "기술·반도체",
  },
  {
    id: 5,
    headline: "산업재\n기업 설비투자\n멈추지 않는다 +5.04%",
    bullets: ["컴포트시스템즈 +17.24%", "AI 데이터센터 냉각 수요 확대"],
    isPositive: true,
    date: "4월 13일",
    theme: "산업재 섹터",
  },
  {
    id: 6,
    headline: "에너지\n1분기 MVP가\n이번 주 -7.49%",
    bullets: ["이란 휴전 → 유가 하루에 -10%", "120일 +38.99% 중장기는 여전히 강세"],
    isPositive: false,
    date: "4월 13일",
    theme: "에너지 섹터",
  },
  {
    id: 7,
    headline: "이번 주 요약\n유가·전쟁 뉴스가\n판을 다시 짰다",
    bullets: ["다음 주: 휴전 지속·연준 발언 주목", "금리 내리면 리츠·성장주 더 간다"],
    isPositive: true,
    date: "4월 13일",
    theme: "주간 총정리",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
