"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 13일 주간 섹터 총정리",
  label: "미국 주간 섹터 리포트",
  subtitle: "유가 급락에\n에너지 빠지고\n리츠·반도체 올랐다",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "이번 주 미국 증시\n10개 섹터 플러스\n위험 선호 장세",
    bullets: ["이란 휴전→유가 급락 촉발", "에너지만 -7.49% 역행"],
    isPositive: true,
    date: "4월 13일",
    theme: "주간 총정리",
  },
  {
    id: 2,
    headline: "부동산(리츠)\n+5.36%\n금리 완화 기대 수혜",
    bullets: ["SBAC 통신타워 +34.65%", "금리↓ 리츠 가치 올라"],
    isPositive: true,
    date: "4월 13일",
    theme: "부동산 리츠",
  },
  {
    id: 3,
    headline: "인텔\n+41.54%\nAI 칩 파트너십 급등",
    bullets: ["구글과 AI 데이터센터 협력", "산디스크·마벨 +30%↑"],
    isPositive: true,
    date: "4월 13일",
    theme: "기술·반도체",
  },
  {
    id: 4,
    headline: "소재·산업재\n나란히 +5%↑\n실물경제 버티고 있다",
    bullets: ["뉴몬트·FCX 각각 +21%", "설비투자 수요 재가속 신호"],
    isPositive: true,
    date: "4월 13일",
    theme: "소재·산업재",
  },
  {
    id: 5,
    headline: "에너지 섹터\n-7.49%\n1분기 강자 숨 고르기",
    bullets: ["이란 휴전→유가 -10% 급락", "120일 수익률 여전히 +39%"],
    isPositive: false,
    date: "4월 13일",
    theme: "에너지",
  },
  {
    id: 6,
    headline: "다음 주 핵심\n유가·연준·AI 수주\n세 가지 체크포인트",
    bullets: ["휴전 지속되면 리츠·성장주 ↑", "AI 협력 발표 이어질지 주목"],
    isPositive: true,
    date: "4월 13일",
    theme: "다음 주 전망",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
