"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "주식 수익률 1위\n60대 여성입니다\n이유가 있습니다 ↓",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "수익률 순위\n예상과 다릅니다",
    isPositive: true,
    date: "4월 13일",
    theme: "반전 데이터",
  },
  {
    id: 2,
    headline: "🥇 60대 여성 +25.9%\n🥈 40대 여성 +25.9%\n🔻 20대 남성 +19.0%",
    isPositive: true,
    date: "4월 13일",
    theme: "수익률 순위",
  },
  {
    id: 3,
    headline: "종목 차이가 아닙니다\n행동이 달랐습니다",
    isPositive: true,
    date: "4월 13일",
    theme: "핵심 차이",
  },
  {
    id: 4,
    headline: "60대 여성: 우량주 사고 그냥 둠\n20~30대 남성: 자주 사고 자주 팜",
    isPositive: true,
    date: "4월 13일",
    theme: "행동 비교",
  },
  {
    id: 5,
    headline: "이 차이 하나가\n수익률 6%p를\n만들었습니다",
    isPositive: true,
    date: "4월 13일",
    theme: "결과",
  },
  {
    id: 6,
    headline: "한쪽이 안 팔고 있을 때\n다른 쪽은 두 번 이상\n갈아탔습니다",
    isPositive: false,
    date: "4월 13일",
    theme: "회전율 차이",
  },
  {
    id: 7,
    headline: "더 많이 움직인 쪽이\n더 많이 잃었습니다",
    isPositive: false,
    date: "4월 13일",
    theme: "수익률 비교",
  },
  {
    id: 8,
    headline: "수수료, 세금, 감정적 판단\n잘못된 타이밍\n조용히 쌓입니다",
    isPositive: false,
    date: "4월 13일",
    theme: "숨은 비용",
  },
  {
    id: 9,
    headline: "60대 여성의 전략\n좋은 종목, 버티기\n오래 들고 있기",
    isPositive: true,
    date: "4월 13일",
    theme: "핵심 전략",
  },
  {
    id: 10,
    headline: "단순한 원칙이\n복잡한 기술을 이겼습니다",
    isPositive: true,
    date: "4월 13일",
    theme: "마무리",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
