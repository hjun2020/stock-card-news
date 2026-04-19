"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "4월 13~17일 주간\n기름에서 칩·앱으로\n관심이 조용히\n이동한 한 주",
  date: "4월 20일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "기술 섹터 10일 ▲9.88%\n11개 섹터 중 단연 1위\nAI 인프라 투자 기대가 불을 붙였다",
    isPositive: true,
    date: "4월 20일",
    theme: "기술 섹터",
  },
  {
    id: 2,
    headline: "인텔\n10일 ▲35.97% 폭등\nAI 파운드리 투자·빅테크 파트너십 기대",
    isPositive: true,
    date: "4월 20일",
    theme: "인텔",
  },
  {
    id: 3,
    headline: "로빈후드\n10일 ▲31.72% 급등\nSEC 규제 완화 + 크립토 훈풍이 겹쳤다",
    isPositive: true,
    date: "4월 20일",
    theme: "핀테크·크립토",
  },
  {
    id: 4,
    headline: "아마존\n10일 ▲19.45% 반등\nAI 클라우드·광고 수익성 개선 재평가",
    isPositive: true,
    date: "4월 20일",
    theme: "소비 순환",
  },
  {
    id: 5,
    headline: "에너지 섹터\n120일 1위가 이번 주 ▼6.86%\n차익 실현·유가 변동성에 홀로 역주행",
    isPositive: false,
    date: "4월 20일",
    theme: "에너지",
  },
  {
    id: 6,
    headline: "9개 섹터가 오를 때\n에너지만 크게 빠졌다\n한 섹터 몰빵의 위험을 보여준 한 주",
    isPositive: true,
    date: "4월 20일",
    theme: "이번 주 교훈",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
