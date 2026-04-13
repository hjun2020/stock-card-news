"use client";
import InstagramTextSlidesFeed, {
  TextSlide,
  TextTitleSlide,
} from "@/components/InstagramTextSlidesFeed";

const titleSlide: TextTitleSlide = {
  date: "4월 13일",
  lines: [
    "주식 수익률 1위가",
    "60대 여성인 이유",
    "30대 남성이 꼭 봐야 합니다 ↓",
  ],
  isPositive: true,
};

const slides: TextSlide[] = [
  {
    id: 1,
    label: "반전 데이터",
    date: "4월 13일",
    isPositive: true,
    lines: [
      "수익률 순위가 이렇습니다",
      "",
      "🥇 60대 여성 +25.9%",
      "🥈 40대 여성 +25.9%",
      "🥉 50대 여성 +25.7%",
      "4위 30대 여성 +25.6%",
      "5위 20대 여성 +24.8%",
      "…",
      "🔻 20대 남성 +19.0% (꼴찌)",
    ],
  },
  {
    id: 2,
    label: "왜 이런 결과가?",
    date: "4월 13일",
    isPositive: true,
    lines: [
      "종목이 달라서가 아닙니다",
      "행동이 달랐습니다",
      "",
      "60대 여성: 우량주 사고 그냥 둠",
      "20~30대 남성: 자주 사고 자주 팜",
      "",
      "이 차이 하나가",
      "수익률 6%p를 만들었습니다",
    ],
  },
  {
    id: 3,
    label: "회전율이란?",
    date: "4월 13일",
    isPositive: true,
    lines: [
      "매매 회전율이 뭔지 아세요?",
      "",
      "1년 동안 내 주식을",
      "얼마나 자주 갈아탔냐는 뜻입니다",
      "",
      "100% = 보유 종목을 1년에 한 번 전부 교체",
      "200% = 1년에 두 번 전부 교체",
    ],
  },
  {
    id: 4,
    label: "실제 데이터",
    date: "4월 13일",
    isPositive: false,
    lines: [
      "근데 수익률 1위와 꼴찌의 차이가",
      "여기서 갈렸습니다",
      "",
      "여성 평균 → 85% (거의 안 바꿈)",
      "남성 평균 → 181% (1년에 두 번)",
      "20대 남성 → 219% (두 번 이상)",
      "",
      "많이 바꿀수록 수익률은 낮았습니다",
    ],
  },
  {
    id: 5,
    label: "매매 비용",
    date: "4월 13일",
    isPositive: false,
    lines: [
      "많이 살수록 왜 손해일까요?",
      "",
      "거래할 때마다 수수료 발생",
      "차익 실현하면 세금 발생",
      "잦은 매매는 감정적 판단으로 이어짐",
      "잘못된 타이밍에 사고팔게 됨",
      "",
      "이 네 가지가",
      "조용히 수익률을 갉아먹습니다",
    ],
  },
  {
    id: 6,
    label: "핵심 교훈",
    date: "4월 13일",
    isPositive: true,
    lines: [
      "60대 여성의 전략은 단순합니다",
      "",
      "✅ 좋은 종목 고르고",
      "✅ 시장이 흔들려도 버티고",
      "✅ 오래 들고 있기",
      "",
      "복잡한 기술보다",
      "단순한 원칙이 이겼습니다",
    ],
  },
  {
    id: 7,
    label: "마무리",
    date: "4월 13일",
    isPositive: true,
    lines: [
      "주식은 자주 볼수록",
      "손해라는 연구도 있습니다",
      "",
      "이런 데이터 매주 정리해드립니다",
      "팔로우 →",
    ],
  },
];

export default function Page() {
  return <InstagramTextSlidesFeed titleSlide={titleSlide} slides={slides} />;
}
