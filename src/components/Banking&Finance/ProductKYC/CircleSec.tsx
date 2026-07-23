"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { H1, H4, P } from "../../../styles/Typography";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

type ProductTab = {
  label: string;
  description: string;
  para?: string;
  image?: string;
  mobileImage?: string;
  features?: Feature[];
  intro?: string;
};

const products: ProductTab[] = [
  {
    label: "Enterprise CDD",
    para: "Automate and streamline your customer due diligence processes with our comprehensive Enterprise CDD solution. Our platform offers a fully configurable policy engine that allows you to set up and manage your CIP and CDD requirements without any coding. With real-time data capture and seamless integration with external and internal systems, you can ensure compliance with evolving regulations while providing a frictionless onboarding experience for your customers.",
    description:
      "Re-configure on the GO! No more expensive, time consuming system change requests.",
    image: "/cip.webp",
    mobileImage: "/MobileImage.webp",
  },
  {
    label: "ID and V Monitor",
    description:
      "Real-time identity verification with intelligent monitoring and adaptive workflows.",
    intro:
      "A 100% configurable rule engine that enables generation of Identification (ID), Verification (V) & Due Diligence requirements for ANY Client in ANY Country across ANY jurisdictions.",
    features: [
      {
        icon: "/ProductDetails4/icon7.svg",
        title: "Requirement Generator",
        text: "Single click generation of data and documents required data and documents.",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Configuration Studio",
        text: "Re-configure ID&V policy changes to Entities, Countries of data and documents required.",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "API Integration",
        text: "Seamless data exchange with external and internal systems for Clients.",
      },
    ],
  },
  {
    label: "BO Unwrapper",
    description:
      "Unwrap complex ownership structures with automated beneficial ownership mapping.",
    intro:
      "Gain complete transparency into multi-layered ownership structures and identify ultimate beneficial owners across global jurisdictions with automated intelligence.",
    features: [
      {
        icon: "/ProductDetails4/icon7.svg",
        title: "Ownership Mapping",
        text: "Seamless data exchange with external and internal systems.",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Risk Evaluation",
        text: "Seamless data exchange with external and internal systems. Single Clients.",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "Global Coverage",
        text: "Access cross-border data sources for comprehensive ownership analysis.",
      },
    ],
  },
];

const COUNT = products.length;

 
const AnimatedLayer = ({
  product,
  isLeaving,
  onHeightChange,
}: {
  product: ProductTab;
  isLeaving: boolean;
  onHeightChange?: (h: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Measure and report height after render
  useEffect(() => {
    if (isLeaving || !onHeightChange) return;
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        onHeightChange(entry.contentRect.height);
      }
    });
    ro.observe(el);
    // Report immediately too
    onHeightChange(el.getBoundingClientRect().height);
    return () => ro.disconnect();
  }, [isLeaving, onHeightChange]);

  // Enter animation
  useEffect(() => {
    if (isLeaving) return;
    const el = ref.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(24px) scale(0.97)";
    el.style.filter = "blur(8px)";

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = [
          "opacity 750ms cubic-bezier(0.16,1,0.3,1)",
          "transform 750ms cubic-bezier(0.16,1,0.3,1)",
          "filter 750ms cubic-bezier(0.16,1,0.3,1)",
        ].join(", ");
        el.style.opacity = "1";
        el.style.transform = "translateY(0px) scale(1)";
        el.style.filter = "blur(0px)";
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [isLeaving]);

  // Exit animation
  useEffect(() => {
    if (!isLeaving) return;
    const el = ref.current;
    if (!el) return;

    el.style.transition = [
      "opacity 500ms cubic-bezier(0.16,1,0.3,1)",
      "transform 500ms cubic-bezier(0.16,1,0.3,1)",
      "filter 500ms cubic-bezier(0.16,1,0.3,1)",
    ].join(", ");
    el.style.opacity = "0";
    el.style.transform = "translateY(-16px) scale(1.02)";
    el.style.filter = "blur(6px)";
  }, [isLeaving]);

  return (
    <div
      ref={ref}
      style={{
        // KEY FIX: incoming layer is relative (not absolute) so it
        // contributes to normal flow and the container grows with it.
        // Outgoing layer is absolute so it overlays without pushing layout.
        position: isLeaving ? "absolute" : "relative",
        inset: isLeaving ? 0 : undefined,
        width: "100%",
        willChange: "opacity, transform, filter",
        pointerEvents: isLeaving ? "none" : "auto",
        opacity: isLeaving ? 1 : 0,
      }}
    >
      {/* Image tab */}
      {product.image && (
        <div className="w-full flex justify-center">
          <img
            src={product.mobileImage || product.image}
            alt={product.label}
            className="block md:hidden w-full object-contain"
            style={{ maxHeight: "60vh" }}
          />
          <img
            src={product.image}
            alt={product.label}
            className="hidden md:block object-contain w-full"
            style={{ maxWidth: "820px", maxHeight: "55vh" }}
          />
        </div>
      )}

      {/* Features tab */}
      {product.features && (
        <div className="w-full max-w-6xl mx-auto">
          {product.intro && (
            <P className="text-gray-700 text-xs md:text-base mb-6 md:mb-8 max-w-4xl mx-auto text-center">
              {product.intro}
            </P>
          )}

          {/* Mobile: stacked cards — full height, nothing clipped */}
          <div className="flex flex-col gap-3 md:hidden pb-4">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="border border-[#E1EDFF] bg-white dark:bg-black rounded-xl p-4 shadow-sm flex flex-col items-center text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-8 w-8 mb-2 object-contain"
                />
                <H4 className="font-bold text-xs mb-1 dark:text-white text-gray-900 leading-tight">
                  {feature.title}
                </H4>
                <P className="text-gray-600 text-xs leading-snug">{feature.text}</P>
              </div>
            ))}
          </div>

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 md:gap-6 items-start text-center">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-6 md:border-l md:border-blue-300 first:md:border-l-0"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 mb-6"
                />
                <H4 className="font-semibold text-lg mb-3">{feature.title}</H4>
                <P className="text-gray-600 text-sm">{feature.text}</P>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ── CircleSec ─────────────────────────────────────────────────────────
export default function CircleSec() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  // Measured height of the incoming (active) layer
  const [contentHeight, setContentHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);
  const prevIndexRef = useRef(0);
  const cleanupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const transitionTo = (index: number) => {
    if (index === prevIndexRef.current) return;
    if (cleanupTimer.current) clearTimeout(cleanupTimer.current);
    setPrevIndex(prevIndexRef.current);
    prevIndexRef.current = index;
    setActiveIndex(index);
    cleanupTimer.current = setTimeout(() => setPrevIndex(null), 520);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      const index = Math.min(Math.floor(progress * COUNT), COUNT - 1);
      transitionTo(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) {
      transitionTo(index);
      return;
    }

    const bandSize = 1 / COUNT;
    const targetProgress = bandSize * index + bandSize * 0.5;
    const targetY = window.scrollY + rect.top + targetProgress * total;

    isClickScrolling.current = true;
    transitionTo(index);
    window.scrollTo({ top: targetY, behavior: "smooth" });
    setTimeout(() => { isClickScrolling.current = false; }, 700);
  };

  const active = products[activeIndex];

  return (
    <section className="relative bg-white xl:bg-gradient-to-b xl:from-[#E1EDFF] xl:to-[#FFFFFF]">
      <div
        ref={containerRef}
        style={{ height: `${COUNT * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 py-8 md:py-10 bg-white  xl:bg-transparent dark:bg-black">
          <div className="w-full px-4 sm:px-6 xl:px-20 max-w-7xl mx-auto">

            <H1 className="text-[#00AA72] mb-4 md:mb-6 text-center text-lg md:text-3xl font-bold leading-tight">
              Solution Components
            </H1>

            {/* Pill tabs */}
            <div
              className="flex justify-center gap-2 md:gap-4 lg:gap-10 overflow-x-auto pb-2 mb-6 md:mb-8"
              style={{ scrollbarWidth: "none" }}
            >
              {products.map((product, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={product.label}
                    onClick={() => handleTabClick(index)}
                    className={`
                      relative whitespace-nowrap
                      px-3 md:px-6 lg:px-10 xl:px-16
                      py-1.5 md:py-3
                      text-[10px] md:text-sm lg:text-base
                      rounded-full transition-colors duration-300 border flex-shrink-0
                      ${isActive
                        ? "text-white border-transparent bg-[#00AA72] shadow-md"
                        : "text-gray-600 border-gray-300 bg-white hover:bg-gray-100"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-[#00AA72] rounded-full z-[-1]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {product.label}
                  </button>
                );
              })}
            </div>

            {/* Description */}
            <H4 className="text-[#00AA72] mb-6 md:mb-8 max-w-3xl mx-auto text-center text-xs md:text-base font-bold leading-tight px-2">
              {active.description}
            </H4>

            {/*
              Crossfade container.
              Height is driven by the measured incoming layer height —
              so it always fits content exactly with no clipping.
              The outgoing layer is absolute (overlays on top during fade),
              the incoming layer is relative (drives the container height).
            */}
            <div
              className="relative w-full transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ minHeight: contentHeight > 0 ? `${contentHeight}px` : undefined }}
            >
              {prevIndex !== null && (
                <AnimatedLayer
                  key={`out-${prevIndex}`}
                  product={products[prevIndex]}
                  isLeaving={true}
                />
              )}
              <AnimatedLayer
                key={`in-${activeIndex}`}
                product={products[activeIndex]}
                isLeaving={false}
                onHeightChange={setContentHeight}
              />
            </div>

          </div>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}