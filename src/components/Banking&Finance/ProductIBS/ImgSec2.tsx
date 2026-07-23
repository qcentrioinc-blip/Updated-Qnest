"use client";

import { useEffect, useRef, useState } from "react";
import { H1, H4 } from "../../../styles/Typography";

/* ================= TYPES ================= */
type CardProps = {
  title: string;
  active: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/* ================= DESKTOP CARD GEOMETRY ================= */
const CARD_W = 260;
const CARD_H = 56;

const C1 = { left: 0,   top: 0   };
const C2 = { left: 60,  top: 140 };
const C3 = { left: 120, top: 280 };

const P1_BOTTOM_Y = C1.top + CARD_H;   // 56
const P2_TOP_Y    = C2.top;            // 140
const P3_TOP_Y    = C3.top;            // 280
const P_END_Y     = C3.top + 2;        // 282

const P1_CX = C1.left + CARD_W / 2;   // 130
const P2_CX = C2.left + CARD_W / 2;   // 190
const P3_CX = C3.left + CARD_W / 2;   // 250

const MID_Y1 = (P1_BOTTOM_Y + P2_TOP_Y) / 2;       // 98
const MID_Y2 = (C2.top + CARD_H + P3_TOP_Y) / 2;   // 238

const SVG_PATH = [
  `M ${P1_CX} ${P1_BOTTOM_Y}`,
  `C ${P1_CX} ${MID_Y1}, ${P2_CX} ${MID_Y1}, ${P2_CX} ${P2_TOP_Y}`,
  `L ${P2_CX} ${C2.top + CARD_H}`,
  `C ${P2_CX} ${MID_Y2}, ${P3_CX} ${MID_Y2}, ${P3_CX} ${P3_TOP_Y}`,
].join(" ");

const SVG_TOTAL_H = P_END_Y - P1_BOTTOM_Y; // 226

/* ================= MOBILE CONSTANTS ================= */
const MOB_CARD_H    = 56;
const MOB_CARD2_TOP = 96;
const MOB_CARD3_TOP = 192;
const MOB_LINE_START = MOB_CARD_H;                    // 56
const MOB_LINE_END   = MOB_CARD3_TOP + 2;             // 194
const MOB_LINE_RANGE = MOB_LINE_END - MOB_LINE_START; // 138

/* ================= ANIMATION TIMELINE ================= */
// We drive a single "timeline" value from 0 → 1 at CONSTANT speed.
// The timeline is divided into 3 phases:
//   0.00 → 0.45  draw line from Card1 bottom → Card2 top   (45% of time)
//   0.45 → 0.60  PAUSE at Card2 — line holds, Card2 highlights (15% of time)
//   0.60 → 1.00  draw line from Card2 bottom → Card3 top   (40% of time)

const PHASE1_END  = 0.45;  // line reaches card2
const PAUSE_END   = 0.60;  // pause finishes
const PHASE2_END  = 1.00;  // line reaches card3

// Given raw linear timeline (0→1), return how far the line tip has traveled
// as a fraction of SVG_TOTAL_H (0→1).
function timelineToDrawFraction(t: number): number {
  if (t <= PHASE1_END) {
    // Phase 1: draw first segment (Card1 bottom → Card2 top)
    // First segment height: P2_TOP_Y - P1_BOTTOM_Y = 84px out of 226px total
    const seg1Frac = (P2_TOP_Y - P1_BOTTOM_Y) / SVG_TOTAL_H; // ≈0.372
    return (t / PHASE1_END) * seg1Frac;
  } else if (t <= PAUSE_END) {
    // Pause: line stays at top of Card2
    const seg1Frac = (P2_TOP_Y - P1_BOTTOM_Y) / SVG_TOTAL_H;
    return seg1Frac;
  } else {
    // Phase 2: draw Card2 body + second bezier (Card2 bottom → Card3 top)
    const seg1Frac = (P2_TOP_Y - P1_BOTTOM_Y) / SVG_TOTAL_H;
    const seg2Frac = 1 - seg1Frac;
    const phase2Progress = (t - PAUSE_END) / (PHASE2_END - PAUSE_END);
    return seg1Frac + phase2Progress * seg2Frac;
  }
}

// Same logic for mobile — maps timeline to how far the mobile line has drawn (px)
function timelineToMobDrawn(t: number): number {
  const MOB_SEG1 = MOB_CARD2_TOP - MOB_LINE_START; // 40px (card1 bottom → card2 top)
  if (t <= PHASE1_END) {
    return (t / PHASE1_END) * MOB_SEG1;
  } else if (t <= PAUSE_END) {
    return MOB_SEG1;
  } else {
    const MOB_SEG2 = MOB_LINE_RANGE - MOB_SEG1;    // 98px (card2 bottom → card3 top)
    const phase2Progress = (t - PAUSE_END) / (PHASE2_END - PAUSE_END);
    return MOB_SEG1 + phase2Progress * MOB_SEG2;
  }
}

/* ================= MAIN ================= */
export default function ImgSec2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  // Raw linear timeline 0 → 1
  const [timeline, setTimeline] = useState(0);

  /* ===== INTERSECTION OBSERVER ===== */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHasStarted(true); },
      { threshold: 0.4 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => { if (sectionRef.current) obs.unobserve(sectionRef.current); };
  }, []);

  /* ===== LINEAR RAF ANIMATION ===== */
  useEffect(() => {
    if (!hasStarted) return;
    const DURATION = 2200; // total animation time ms
    let raf: number;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      // Strictly linear — no easing
      const raw = Math.min((now - startTime) / DURATION, 1);
      setTimeline(raw);
      if (raw < 1) raf = requestAnimationFrame(tick);
    };

    const t = setTimeout(() => { raf = requestAnimationFrame(tick); }, 300);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [hasStarted]);

  /* ===== DESKTOP DERIVED ===== */
  const drawFrac     = timelineToDrawFraction(timeline);
  const desktopDrawn = SVG_TOTAL_H * drawFrac;
  const desktopTipY  = P1_BOTTOM_Y + desktopDrawn;
  const svgClipBottom = 400 - desktopTipY;

  const d1Active = true;
  const d2Active = desktopTipY >= P2_TOP_Y;
  const d3Active = desktopTipY >= P3_TOP_Y;

  /* ===== MOBILE DERIVED ===== */
  const mobLineDrawn = timelineToMobDrawn(timeline);
  const mobTipY      = MOB_LINE_START + mobLineDrawn;

  const m1Active = true;
  const m2Active = mobTipY >= MOB_CARD2_TOP;
  const m3Active = mobTipY >= MOB_CARD3_TOP;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-cover bg-center overflow-hidden py-16"
      style={{ backgroundImage: "url('/ProductIBS/CTA1.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">

        {/* ===== LEFT ===== */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <H1>
            <span className="text-black">Ready to Launch Your</span>
            <br />
            <span className="text-gray-200">Internet Banking</span>
            <br />
            {/* <span className="text-gray-200">Platform</span>{" "} */}
            <span className="text-black">for Customers</span>
          </H1>
        </div>

        {/* ===== RIGHT ===== */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">

          {/* ======== MOBILE ======== */}
          <div className="lg:hidden relative w-[300px] h-[260px]">

            <div
              className="absolute left-1/2 -translate-x-px z-0"
              style={{ top: MOB_LINE_START }}
            >
              <div
                style={{
                  width: "3px",
                  height: MOB_LINE_RANGE,
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, white 0px, white 6px, transparent 6px, transparent 12px)",
                  clipPath: `inset(0 0 ${Math.max(0, MOB_LINE_RANGE - mobLineDrawn)}px 0)`,
                }}
              />
            </div>

            <Card title="Schedule Demo"             active={m1Active} className="top-0 left-1/2    -translate-x-1/2 z-10" />
            <Card title="Request Pricing"            active={m2Active} className="top-[96px] left-1/2 -translate-x-1/2 z-10" />
            <Card title="Speak with Banking Experts" active={m3Active} className="top-[192px] left-1/2 -translate-x-1/2 z-10" />
          </div>

          {/* ======== DESKTOP ======== */}
          <div className="hidden lg:block relative w-[460px] h-[400px] -ml-60">

            <div
              className="absolute inset-0 z-0"
              style={{
                clipPath: `inset(0 0 ${Math.max(0, svgClipBottom)}px 0)`,
              }}
            >
              <svg
                width="460"
                height="400"
                viewBox="0 0 460 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
              >
                <path
                  d={SVG_PATH}
                  stroke="white"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            <Card title="Schedule Demo"             active={d1Active} style={{ left: C1.left, top: C1.top, width: CARD_W }} className="z-10" />
            <Card title="Request Pricing"            active={d2Active} style={{ left: C2.left, top: C2.top, width: CARD_W }} className="z-10" />
            <Card title="Speak with Banking Experts" active={d3Active} style={{ left: C3.left, top: C3.top, width: CARD_W }} className="z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ title, active, className, style }: CardProps) {
  return (
    <div
      className={`
        absolute
        px-4 py-4
        w-[260px]
        bg-white text-[#00AA72] font-semibold text-center
        transition-all duration-500
        ${active ? "opacity-100 scale-100" : "opacity-30 scale-95"}
        ${className ?? ""}
      `}
      style={{
        borderTopRightRadius: "40px",
        borderBottomLeftRadius: "40px",
        borderTopLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        ...style,
      }}
    >
      <H4>{title}</H4>
    </div>
  );
}