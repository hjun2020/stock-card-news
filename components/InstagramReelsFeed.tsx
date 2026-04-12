"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toPng } from "html-to-image";

// Reels cards are built for a 5-second read:
// one punchy headline + at most 2 short bullets.
export interface ReelsNewsCard {
  id: number;
  headline: string;    // up to 3 lines; lead with full company name, then the message
  bullets: [string, string]; // exactly 2, each ≤ 20자
  isPositive: boolean;
  date: string;
  theme: string;       // short label in header (≤ 12자)
}

// Title card — always slide 0; eye-catching cover before the content cards.
export interface ReelsTitleCard {
  title: string;       // 1-line factual descriptor — date + what's inside (≤ 24자)
  subtitle: string;    // hook/teaser, up to 3 lines; punchy and intriguing
  date: string;
  isPositive: boolean;
}

export default function InstagramReelsFeed({
  cards,
  titleCard,
}: {
  cards: ReelsNewsCard[];
  titleCard?: ReelsTitleCard;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const totalSlides = (titleCard ? 1 : 0) + cards.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-screen h-svh overflow-hidden bg-black">
      {/* Back button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
        style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="text-xs font-medium">목록</span>
      </button>

      {/* Swipeable cards */}
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {titleCard && <TitleCard card={titleCard} />}
        {cards.map((card) => (
          <ReelsCard key={card.id} card={card} />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 pointer-events-none">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background: i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.35)",
              transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TitleCard({ card }: { card: ReelsTitleCard }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const accentColor = card.isPositive ? "#22c55e" : "#ef4444";
  const accentBg = card.isPositive ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)";
  const accentBorder = card.isPositive ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)";
  const accentDim = card.isPositive ? "rgba(34,197,94,0.18)" : "rgba(239,68,68,0.18)";

  // Richer, more dramatic gradient for the title card
  const bg = card.isPositive
    ? "linear-gradient(150deg, #061410 0%, #0d2b1e 40%, #071a10 70%, #030d08 100%)"
    : "linear-gradient(150deg, #120404 0%, #250a0a 40%, #150505 70%, #080202 100%)";

  const handleSave = async () => {
    if (!cardRef.current || saving) return;
    setSaving(true);
    try {
      const pixelRatio = 1080 / cardRef.current.offsetWidth;
      const dataUrl = await toPng(cardRef.current, { pixelRatio });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "reels-title.png", { type: "image/png" });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "nextinvest" });
      } else {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "reels-title.png";
        a.click();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="shrink-0 w-screen h-svh snap-center snap-always flex flex-col items-center justify-center gap-4 bg-black px-0">
      {/* ── 4:5 card (captured area) ── */}
      <div
        ref={cardRef}
        className="w-full flex flex-col"
        style={{ aspectRatio: "4/5", background: bg, position: "relative", overflow: "hidden" }}
      >
        {/* Radial glow behind title */}
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "50%",
            background: `radial-gradient(ellipse at center, ${accentDim} 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div className="relative flex flex-col flex-1 px-7 pt-7 pb-6">
          {/* Top bar: brand + date */}
          <div className="flex items-center justify-between">
            <span
              className="text-base font-bold tracking-wider uppercase"
              style={{ color: accentColor, letterSpacing: "0.12em" }}
            >
              nextinvest
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {card.date}
            </span>
          </div>

          {/* Center block */}
          <div className="flex flex-col justify-center flex-1 gap-5">
            {/* Subtitle — the hook (big dramatic text) */}
            <h1
              className="font-black leading-none"
              style={{
                color: "#ffffff",
                fontSize: "clamp(2.8rem, 11vw, 4.2rem)",
                whiteSpace: "pre-line",
                letterSpacing: "-0.02em",
              }}
            >
              {card.subtitle}
            </h1>

            {/* Accent rule */}
            <div style={{ width: "2.5rem", height: "3px", borderRadius: "9999px", background: accentColor }} />

            {/* Title — factual descriptor */}
            <p
              className="text-xl font-medium leading-snug"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {card.title}
            </p>
          </div>

          {/* Bottom: swipe CTA + brand */}
          <div className="mt-auto flex items-end justify-between">
            <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
              nextinvest.org
            </p>
            <div className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
              <span className="text-xs font-medium tracking-wide">스와이프</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Save button (outside captured area) ── */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 px-7 transition-opacity active:opacity-60"
        style={{
          background: accentBg,
          border: `1px solid ${accentBorder}`,
          color: accentColor,
          opacity: saving ? 0.5 : 1,
          maxWidth: "100vw",
        }}
      >
        {saving ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        )}
        <span className="text-sm font-semibold">
          {saving ? "Saving…" : "Save to Photos"}
        </span>
      </button>
    </div>
  );
}

function ReelsCard({ card }: { card: ReelsNewsCard }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const bg = card.isPositive
    ? "linear-gradient(160deg, #0f2027 0%, #1a3a2a 50%, #0d1f16 100%)"
    : "linear-gradient(160deg, #1a0a0a 0%, #2d1515 50%, #110808 100%)";

  const accentColor = card.isPositive ? "#22c55e" : "#ef4444";
  const accentBg = card.isPositive ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)";
  const accentBorder = card.isPositive ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)";

  const handleSave = async () => {
    if (!cardRef.current || saving) return;
    setSaving(true);
    try {
      const pixelRatio = 1080 / cardRef.current.offsetWidth;
      const dataUrl = await toPng(cardRef.current, { pixelRatio });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `reels-${card.id}.png`, { type: "image/png" });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: card.theme });
      } else {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = `reels-${card.id}.png`;
        a.click();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="shrink-0 w-screen h-svh snap-center snap-always flex flex-col items-center justify-center gap-4 bg-black px-0">
      {/* ── 4:5 card (captured area) ── */}
      <div
        ref={cardRef}
        className="w-full flex flex-col"
        style={{ aspectRatio: "4/5", background: bg }}
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative flex flex-col flex-1 px-7 pt-6 pb-6">
          {/* Header */}
          <div className="mb-auto">
            <span className="text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>
              {card.date}  {card.theme}
            </span>
          </div>

          {/* Center block: headline */}
          <div className="flex flex-col justify-center flex-1 gap-4">
            {/* Headline — dominant element */}
            <h2
              className="font-bold leading-tight"
              style={{ color: "rgba(255,255,255,0.97)", fontSize: "clamp(2.1rem, 8vw, 3.2rem)", whiteSpace: "pre-line" }}
            >
              {card.headline}
            </h2>

            {/* Divider */}
            <div className="w-8 h-0.5 rounded-full" style={{ background: accentColor }} />

            {/* 2 bullets */}
            <div className="flex flex-col gap-3">
              {card.bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ background: accentColor }} />
                  <p className="text-xl font-medium" style={{ color: "rgba(255,255,255,0.88)" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex flex-col items-center pt-6">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              주린이를 위한 미국증시
            </p>
            <p className="text-xl font-bold" style={{ color: "rgba(255,255,255,0.7)" }}>
              nextinvest.org
            </p>
          </div>
        </div>
      </div>

      {/* ── Save button (outside captured area) ── */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 px-7 transition-opacity active:opacity-60"
        style={{
          background: accentBg,
          border: `1px solid ${accentBorder}`,
          color: accentColor,
          opacity: saving ? 0.5 : 1,
          maxWidth: "100vw",
        }}
      >
        {saving ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        )}
        <span className="text-sm font-semibold">
          {saving ? "Saving…" : "Save to Photos"}
        </span>
      </button>
    </div>
  );
}
