"use client";
import InstagramReelsFeed, { ReelsNewsCard, ReelsTitleCard } from "@/components/InstagramReelsFeed";

const titleCard: ReelsTitleCard = {
  title: "신고가·신저가 종목 완전 분석",
  subtitle: "같은 기술주\n왜 누구는 오르고\n누구는 무너졌나",
  date: "4월 12일",
  isPositive: true,
};

const cards: ReelsNewsCard[] = [
  {
    id: 1,
    headline: "같은 기술주인데\n승자와 패자가\n뚜렷이 갈렸다",
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 2,
    headline: "GE 버노바\n전력주가 AI주가 됐다\n52주 신고가 경신",
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 3,
    headline: "인텔\n'끝난 회사'가 돌아왔다\n52주 신고가",
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 4,
    headline: "KLA\n반도체 장비도 AI 수혜\n또다시 신고가",
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 5,
    headline: "젠디지털\n안티바이러스는 이제\n성장주가 아니다",
    isPositive: false,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 6,
    headline: "인튜잇\n실적은 좋았는데\n주가는 반토막",
    isPositive: false,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
  {
    id: 7,
    headline: "AI는 누군에겐 기회\n누군에겐 위협이다",
    isPositive: true,
    date: "4월 12일",
    theme: "52주 극단 종목",
  },
];

export default function Page() {
  return <InstagramReelsFeed cards={cards} titleCard={titleCard} />;
}
