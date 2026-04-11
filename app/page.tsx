"use client";

import { useRef, useState, useEffect } from "react";
import { toPng } from "html-to-image";

interface NewsCard {
  id: number;
  ticker: string;
  company: string;
  headline: string;
  summary: string[];
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  sector: string;
  date: string;
}

const cards: NewsCard[] = [
  {
    id: 1,
    ticker: "NVDA",
    company: "NVIDIA Corporation",
    headline: "NVIDIA Surpasses $3T Market Cap as AI Demand Hits Record Highs",
    summary: [
      "Data center revenue up 427% YoY to $22.6B",
      "H100 GPU demand exceeds supply through 2025",
      "New Blackwell architecture ships ahead of schedule",
    ],
    price: "$875.40",
    change: "+$34.20",
    changePercent: "+4.07%",
    isPositive: true,
    sector: "Semiconductors",
    date: "Apr 11, 2026",
  },
  {
    id: 2,
    ticker: "AAPL",
    company: "Apple Inc.",
    headline: "Apple Intelligence Drives Strongest iPhone Upgrade Cycle in 5 Years",
    summary: [
      "iPhone 17 sales up 18% vs prior generation launch",
      "Services revenue hits all-time high at $26.9B",
      "Vision Pro 2 rumored for Q3 2026 launch",
    ],
    price: "$213.55",
    change: "+$7.80",
    changePercent: "+3.79%",
    isPositive: true,
    sector: "Consumer Technology",
    date: "Apr 11, 2026",
  },
  {
    id: 3,
    ticker: "TSLA",
    company: "Tesla, Inc.",
    headline: "Tesla Cybertruck Recall Weighs on Delivery Outlook for Q2",
    summary: [
      "141,000 Cybertrucks recalled over accelerator defect",
      "Q2 delivery guidance cut by 8% to ~420K vehicles",
      "Full Self-Driving v13 rollout delayed to July",
    ],
    price: "$168.20",
    change: "-$11.45",
    changePercent: "-6.38%",
    isPositive: false,
    sector: "Electric Vehicles",
    date: "Apr 11, 2026",
  },
  {
    id: 4,
    ticker: "MSFT",
    company: "Microsoft Corporation",
    headline: "Azure AI Growth Accelerates to 33% as Copilot Adoption Expands",
    summary: [
      "Azure revenue grew 33% driven by AI workloads",
      "Copilot M365 reaches 400M paid seats globally",
      "OpenAI partnership extended through 2030",
    ],
    price: "$421.10",
    change: "+$12.35",
    changePercent: "+3.02%",
    isPositive: true,
    sector: "Cloud & Software",
    date: "Apr 11, 2026",
  },
  {
    id: 5,
    ticker: "META",
    company: "Meta Platforms, Inc.",
    headline: "Meta's Llama 4 Tops Benchmarks, Boosting Ad Revenue Forecast",
    summary: [
      "Llama 4 outperforms GPT-4o on 6 of 8 benchmarks",
      "AI-driven ad targeting lifts CPM rates by 22%",
      "Ray-Ban smart glasses hit 2M units sold in Q1",
    ],
    price: "$512.70",
    change: "+$18.90",
    changePercent: "+3.83%",
    isPositive: true,
    sector: "Social Media & AI",
    date: "Apr 11, 2026",
  },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-screen h-svh overflow-hidden bg-black">
      {/* Swipeable cards */}
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 pointer-events-none">
        {cards.map((_, i) => (
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

function Card({ card }: { card: NewsCard }) {
  // cardRef wraps only the 4:5 image content — save button is outside
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
      // Scale so output is exactly 1080px wide × 1350px tall (4:5)
      const pixelRatio = 1080 / cardRef.current.offsetWidth;
      const dataUrl = await toPng(cardRef.current, { pixelRatio });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `${card.ticker}-brief.png`, { type: "image/png" });

      if (navigator.canShare?.({ files: [file] })) {
        // iOS Safari: shows native share sheet → "Save Image" lands in Photos
        await navigator.share({ files: [file], title: `${card.ticker} Stock Brief` });
      } else {
        // Desktop fallback
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = `${card.ticker}-brief.png`;
        a.click();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    // Outer slide: full screen, centers the 4:5 card + button vertically
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

        <div className="relative flex flex-col flex-1 px-7 pt-10 pb-8">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Stock Brief
            </span>
            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
              {card.date}
            </span>
          </div>

          {/* Sector badge */}
          <div className="mb-4">
            <span
              className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full"
              style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}` }}
            >
              {card.sector}
            </span>
          </div>

          {/* Ticker + Company */}
          <div className="mb-4">
            <h1
              className="text-6xl font-black tracking-tighter leading-none mb-1"
              style={{ color: "#ffffff" }}
            >
              {card.ticker}
            </h1>
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
              {card.company}
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px mb-4" style={{ background: "rgba(255,255,255,0.15)" }} />

          {/* Headline */}
          <h2
            className="text-lg font-bold leading-snug mb-5"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            {card.headline}
          </h2>

          {/* Summary bullets */}
          <div className="flex flex-col gap-2.5 flex-1">
            {card.summary.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-1 h-1 rounded-full mt-2 shrink-0"
                  style={{ background: accentColor }}
                />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Price block */}
          <div
            className="mt-5 rounded-2xl p-4 flex items-center justify-between"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                Current Price
              </p>
              <p className="text-2xl font-bold" style={{ color: "#ffffff" }}>
                {card.price}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                Today
              </p>
              <p className="text-lg font-bold" style={{ color: accentColor }}>
                {card.changePercent}
              </p>
              <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                {card.change}
              </p>
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
