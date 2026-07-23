"use client";

import { Link } from "react-router-dom";
import { P } from "../../../styles/Typography";

const stats = [
  { value: "30%", label: "AI-Driven\nOutcomes" },
  { value: "99.9%", label: "Secure, Scalable\nCloud" },
  { value: "24/7", label: "End-to-End\nDelivery" },
  { value: "50%", label: "Faster regulatory\ncompliance" },
];

export default function GoalsSection() {
  return (
    <section className="w-full bg-white  dark:bg-black py-6 xl:py-10 px-6 md:px-8">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-20">

        {/* ── LEFT: ~45% ── */}
        <div className="w-full lg:w-[60%] flex flex-col items-start">
          <h2 className="text-gray-900 dark:text-white font-quadran    text-lg md:text-[24px]  lg:text-[56px] leading-tight  mb-2 md:mb-5">
            Turning goals into<br className="xl:block hidden" /> measurable results.
          </h2>

          {/* max-w-sm forces ~3 lines */}
          <P className="  leading-relaxed mb-8 max-w-2xl">
            From fast-growing startups to global enterprises, Qnest Global builds stable,
            scalable systems. We connect data, automate work, and modernize core
            platforms so each client can operate with better speed, control, and insight.
          </P>


          <Link to="/contact">
            <button
              className="
              group flex items-center gap-2
              h-[44px] sm:h-[48px] px-5 sm:px-6
              rounded-lg font-quicksand font-bold text-sm sm:text-base
              bg-[#1C59A1] text-white border border-transparent
              transition-all duration-300 ease-in-out
              hover:bg-white hover:text-[#141414] hover:border-[#010101] hover:border-b-4 hover:-translate-y-0.5
              shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] cursor-pointer
            "
            >
              <span>Contact Us</span>
              <span className="relative flex items-center justify-center w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  <path d="M7 7h10v10" /><path d="M7 17L17 7" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* ── RIGHT: 2×2 stats grid ── */}
        <div className="w-full lg:w-[55%]">
          <div className="relative grid grid-cols-2">

            {/* Vertical Gradient Line */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px]
      bg-gradient-to-b from-transparent via-[#00AA72] to-transparent" />

            {/* Horizontal Gradient Line */}
            <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px]
      bg-gradient-to-r from-transparent via-[#00AA72] to-transparent" />

            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-center px-8 py-8 sm:px-12 sm:py-10"
              >
                <span
                  className="text-4xl sm:text-5xl font-bold dark:text-[#00AA72] text-gray-900 leading-none mb-2"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-md dark:text-white text-center font-quicksand md:text-[16px] leading-snug whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}