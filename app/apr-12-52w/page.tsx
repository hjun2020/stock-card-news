"use client";
import InstagramReelsFeed, { ReelsNewsCard } from "@/components/InstagramReelsFeed";

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "같은 기술주인데\n승자와 패자가\n뚜렷이 갈렸다",
    bullets: ["신고가: GE버노바·인텔·KLA", "신저가: 인튜잇·젠디지털"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 2,
    headline: "GE 버노바\n전력주가 AI주가 됐다\n52주 신고가 경신",
    bullets: ["2028 매출 목표 520억달러로 상향", "AI 전력 수요 구조적 수혜주"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 3,
    headline: "인텔\n'끝난 회사'가 돌아왔다\n52주 신고가",
    bullets: ["AI 파트너십·파운드리로 재평가", "스토리 바뀌자 주간 +25%"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 4,
    headline: "KLA\n반도체 장비도 AI 수혜\n또다시 신고가",
    bullets: ["AI 칩 투자 늘수록 더 팔리는 구조", "52주 저점 대비 2배 이상"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 5,
    headline: "젠디지털\n안티바이러스는 이제\n성장주가 아니다",
    bullets: ["클라우드 보안으로 투자금 이탈", "소비자 보안은 배당주로 밀려남"],
    isPositive: false,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 6,
    headline: "인튜잇\n실적은 좋았는데\n주가는 반토막",
    bullets: ["AI가 세무·회계 대체한다는 우려", "고점 대비 -50%, 5년래 최저"],
    isPositive: false,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 7,
    headline: "AI는 누군에겐 기회\n누군에겐 위협이다",
    bullets: ["전력·장비·파운드리 → 수혜", "소비자 소프트웨어 → 위협"],
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} />;
}
