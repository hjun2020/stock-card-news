"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "주식 수익률 1위가 60대 여성인 이유",
  subtitle: "30대 남성이\n꼭 봐야 합니다",
  date: "4월 13일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "수익률 1위\n60대 여성 +25.9%\n꼴찌는 20대 남성",
    bullets: ["5위까지 전원 여성이 독식", "20대 남성 +19.0% — 6.9%p 격차"],
    isPositive: true,
    date: "4월 13일",
    theme: "수익률 순위",
  },
  {
    id: 2,
    headline: "종목 차이가 아니다\n행동 차이가\n수익률을 갈랐다",
    bullets: ["60대 여성: 우량주 사고 그냥 둠", "20대 남성: 자주 사고 자주 팜"],
    isPositive: true,
    date: "4월 13일",
    theme: "행동 차이",
  },
  {
    id: 3,
    headline: "매매 회전율이란\n1년에 얼마나\n갈아탔냐는 뜻",
    bullets: ["100% = 보유 종목 1년에 1번 교체", "200% = 1년에 2번 전부 교체"],
    isPositive: true,
    date: "4월 13일",
    theme: "회전율 설명",
  },
  {
    id: 4,
    headline: "여기서 갈렸다\n여성 85% vs\n20대 남성 219%",
    bullets: ["많이 바꿀수록 수익률은 낮았다", "회전율 2배 차이 → 6%p 격차"],
    isPositive: false,
    date: "4월 13일",
    theme: "회전율 데이터",
  },
  {
    id: 5,
    headline: "자주 매매할수록\n수익률이\n조용히 갉아먹힌다",
    bullets: ["거래마다 수수료·세금 발생", "감정적 판단 → 잘못된 타이밍"],
    isPositive: false,
    date: "4월 13일",
    theme: "매매 비용",
  },
  {
    id: 6,
    headline: "60대 여성의\n전략은 단순하다",
    bullets: ["좋은 종목 고르고 오래 들고 있기", "단순한 원칙이 복잡한 기술을 이겼다"],
    isPositive: true,
    date: "4월 13일",
    theme: "핵심 교훈",
  },
  {
    id: 7,
    headline: "주식은 자주 볼수록\n손해라는\n연구도 있다",
    bullets: ["매주 이런 데이터 정리해드립니다", "팔로우하면 놓치지 않습니다"],
    isPositive: true,
    date: "4월 13일",
    theme: "마무리",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
