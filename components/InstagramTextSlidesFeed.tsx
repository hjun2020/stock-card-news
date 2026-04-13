"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toPng } from "html-to-image";

// Text-slide format: free-form lines per card.
// "" (empty string) in lines renders as a vertical spacer.
export interface TextSlide {
  id: number;
  label: string;   // shown in card header (≤ 12자)
  date: string;
  lines: string[]; // content lines; "" = blank spacer
  isPositive: boolean;
}

export interface TextTitleSlide {
  date: string;
  lines: string[];       // hook lines; joined and rendered big
  isPositive: boolean;
}

export default function InstagramTextSlidesFeed({
  titleSlide,
  slides,
}: {
  titleSlide: TextTitleSlide;
  slides: TextSlide[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const totalSlides = 1 + slides.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
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

      {/* Swipeable slides */}
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <TitleSlideCard slide={titleSlide} />
        {slides.map((slide) => (
          <ContentSlideCard key={slide.id} slide={slide} />
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

function TitleSlideCard({ slide }: { slide: TextTitleSlide }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const accentColor = slide.isPositive ? "#22c55e" : "#ef4444";
  const accentBg = slide.isPositive ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)";
  const accentBorder = slide.isPositive ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)";
  const accentDim = slide.isPositive ? "rgba(34,197,94,0.18)" : "rgba(239,68,68,0.18)";
  const bg = slide.isPositive
    ? "linear-gradient(150deg, #061410 0%, #0d2b1e 40%, #071a10 70%, #030d08 100%)"
    : "linear-gradient(150deg, #120404 0%, #250a0a 40%, #150505 70%, #080202 100%)";

  const handleSave = async () => {
    if (!cardRef.current || saving) return;
    setSaving(true);
    try {
      const pixelRatio = 1080 / cardRef.current.offsetWidth;
      const dataUrl = await toPng(cardRef.current, { pixelRatio });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "slide-0.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "nextinvest" });
      } else {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "slide-0.png";
        a.click();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="shrink-0 w-screen h-svh snap-center snap-always flex flex-col items-center justify-center gap-4 bg-black">
      <div
        ref={cardRef}
        className="w-full flex flex-col"
        style={{ aspectRatio: "4/5", background: bg, position: "relative", overflow: "hidden" }}
      >
        {/* Radial glow */}
        <div style={{
          position: "absolute", top: "38%", left: "50%",
          transform: "translate(-50%, -50%)", width: "80%", height: "50%",
          background: `radial-gradient(ellipse at center, ${accentDim} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div className="relative flex flex-col flex-1 px-7 pt-7 pb-6">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <span className="text-base font-bold tracking-wider uppercase" style={{ color: accentColor, letterSpacing: "0.12em" }}>
              nextinvest
            </span>
            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
              {slide.date}
            </span>
          </div>

          {/* Hook text */}
          <div className="flex flex-col justify-center flex-1 gap-5">
            <h1
              className="font-black leading-tight"
              style={{
                color: "#ffffff",
                fontSize: "clamp(2.8rem, 11vw, 4.2rem)",
                whiteSpace: "pre-line",
                letterSpacing: "-0.02em",
              }}
            >
              {slide.lines.join("\n")}
            </h1>
            <div style={{ width: "2.5rem", height: "3px", borderRadius: "9999px", background: accentColor }} />
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-end justify-between">
            <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>nextinvest.org</p>
            <div className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
              <span className="text-xs font-medium tracking-wide">스와이프</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <SaveButton saving={saving} onSave={handleSave} accentBg={accentBg} accentBorder={accentBorder} accentColor={accentColor} />
    </div>
  );
}

function ContentSlideCard({ slide }: { slide: TextSlide }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const bg = slide.isPositive
    ? "linear-gradient(160deg, #0f2027 0%, #1a3a2a 50%, #0d1f16 100%)"
    : "linear-gradient(160deg, #1a0a0a 0%, #2d1515 50%, #110808 100%)";
  const accentColor = slide.isPositive ? "#22c55e" : "#ef4444";
  const accentBg = slide.isPositive ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)";
  const accentBorder = slide.isPositive ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)";

  const handleSave = async () => {
    if (!cardRef.current || saving) return;
    setSaving(true);
    try {
      const pixelRatio = 1080 / cardRef.current.offsetWidth;
      const dataUrl = await toPng(cardRef.current, { pixelRatio });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `slide-${slide.id}.png`, { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: slide.label });
      } else {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = `slide-${slide.id}.png`;
        a.click();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="shrink-0 w-screen h-svh snap-center snap-always flex flex-col items-center justify-center gap-4 bg-black">
      <div
        ref={cardRef}
        className="w-full flex flex-col"
        style={{ aspectRatio: "4/5", background: bg }}
      >
        <div className="flex flex-col flex-1 px-7 pt-6 pb-6">
          {/* Header */}
          <p className="text-sm font-medium mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
            {slide.date}{"  "}{slide.label}
          </p>

          {/* Content lines */}
          <div className="flex flex-col flex-1 justify-center">
            {slide.lines.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-4" />
              ) : (
                <p
                  key={i}
                  className="text-xl leading-snug font-medium"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {line}
                </p>
              )
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center pt-5">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>주린이를 위한 미국증시</p>
            <p className="text-lg font-bold" style={{ color: "rgba(255,255,255,0.6)" }}>nextinvest.org</p>
          </div>
        </div>
      </div>

      <SaveButton saving={saving} onSave={handleSave} accentBg={accentBg} accentBorder={accentBorder} accentColor={accentColor} />
    </div>
  );
}

function SaveButton({
  saving, onSave, accentBg, accentBorder, accentColor,
}: {
  saving: boolean;
  onSave: () => void;
  accentBg: string;
  accentBorder: string;
  accentColor: string;
}) {
  return (
    <button
      onClick={onSave}
      disabled={saving}
      className="w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 px-7 transition-opacity active:opacity-60"
      style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor, opacity: saving ? 0.5 : 1 }}
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
      <span className="text-sm font-semibold">{saving ? "Saving…" : "Save to Photos"}</span>
    </button>
  );
}
