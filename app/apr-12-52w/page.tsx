"use client";
import InstagramReelsFeed, { ReelsNewsCard } from "@/components/InstagramReelsFeed";

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    ticker: "52주 극단",
    headline: "같은 기술주인데\n승자와 패자가 갈렸다",
    bullets: ["신고가: GEV · INTC · KLAC", "신저가: INTU · GEN"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 2,
    ticker: "GEV",
    headline: "전력주가 AI주가 됐다\n52주 신고가 경신",
    bullets: ["2028 매출 목표 520억달러로 상향", "AI 전력 수요 구조적 수혜주"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 3,
    ticker: "INTC",
    headline: "'끝난 회사' 인텔이\n52주 신고가를 찍었다",
    bullets: ["AI 파트너십·파운드리 재평가", "스토리 바뀌자 주간 +25%"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 4,
    ticker: "KLAC",
    headline: "반도체 장비도 AI 수혜\nKLA 또 신고가",
    bullets: ["AI 칩 투자 늘수록 더 팔리는 구조", "52주 저점 대비 2배 이상"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 5,
    ticker: "GEN",
    headline: "안티바이러스는 이제\n성장주가 아니다",
    bullets: ["클라우드 보안으로 자금 이탈", "소비자 보안은 배당주로 밀려남"],
    isPositive: false,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 6,
    ticker: "INTU",
    headline: "실적은 좋았는데\n주가는 반토막",
    bullets: ["AI가 세무·회계 대체한다는 우려", "고점 대비 -50%, 5년래 최저"],
    isPositive: false,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 7,
    ticker: "오늘의 교훈",
    headline: "AI는 누군에겐 기회\n누군에겐 위협이다",
    bullets: ["전력·장비·파운드리 → 수혜", "SaaS·소비자 SW → 위협"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} />;
}
