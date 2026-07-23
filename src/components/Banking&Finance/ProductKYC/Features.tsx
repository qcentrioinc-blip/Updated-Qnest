"use client";
import { useState, useEffect, useRef } from "react";
import { H2, H3, P } from "../../../styles/Typography";

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Policy Configuration Engine",
    title: "Zero code policy configuration engine",
    p1: "Configure all due diligence parameters without coding. Changes to regulations or policies can be made in minutes with version control and checker functionality. No training required for frontline staff when policies update.",
    imageSrc: "/ProductDetails4/PD4_img1(2).webp",
  },
  {
    id: "feature_b",
    buttonLabel: "Smart Data Capture",
    title: "Smart forms for data capture",
    p1: "Client-specific smart forms automatically generate requirements based on entity type, jurisdiction, and risk profile. Captures data for customers and connected parties with built-in validations for accuracy.",
    imageSrc: "/ProductDetails4/PD4_img2(2).webp",
  },
  {
    id: "feature_c",
    buttonLabel: "Automated Screening",
    title: "Automated name screening integration",
    p1: "Seamlessly screen customers and connected parties against sanctions, PEP lists, and watchlists. Integrates with leading screening engines during onboarding and ongoing monitoring.",
    imageSrc: "/ProductDetails4/PD4_img3.webp",
  },
  {
    id: "feature_d",
    buttonLabel: "Risk Assessment",
    title: "Risk assessment and decisioning",
    p1: "Automatically compute risk ratings based on configured attributes and rules. Workflow rules drive consistent decisioning with options for approval routing and case management.",
    imageSrc: "/ProductDetails4/PD4_img4.webp",
  },
  {
    id: "feature_e",
    buttonLabel: "Lifecycle Management",
    title: "Full client lifecycle management",
    p1: "System automatically moves profiles to periodic and trigger event queues. Applies current policy standards and enables refresh of CIP profiles with version control for audit readiness.",
    imageSrc: "/ProductDetails4/PD4_img5.webp",
  },
];

const COUNT = FEATURES.length;

// ── AnimatedLayer ─────────────────────────────────────────────────────
// Mounts in the "out" state, then on next frame flips to "in" —
// this guarantees the browser always sees a before→after to animate.
const AnimatedLayer = ({
  feature,
  isLeaving,
}: {
  feature: (typeof FEATURES)[0];
  isLeaving: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLeaving) return;
    const el = ref.current;
    if (!el) return;

    // Start fully out
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(22px) scale(0.96)";
    el.style.filter = "blur(8px)";

    // Next frame: animate in with premium spring-like easing
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

  // Leaving: animate out immediately
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
    el.style.transform = "translateY(-14px) scale(1.02)";
    el.style.filter = "blur(6px)";
  }, [isLeaving]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        willChange: "opacity, transform, filter",
        pointerEvents: isLeaving ? "none" : "auto",
        // Start hidden — useEffect animates it in
        opacity: isLeaving ? 1 : 0,
      }}
    >
      {/* MOBILE */}
      <div className="flex flex-col gap-4 md:hidden">
        <img
          src={feature.imageSrc}
          alt={feature.title}
          className="w-full h-52 object-contain rounded-xl"
        />
        <H3 className="text-gray-900  dark:text-white tracking-tight leading-tight text-lg">
          {feature.title}
        </H3>
        <P className="text-sm leading-relaxed text-gray-600">{feature.p1}</P>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-9 md:gap-8 lg:gap-12 items-center h-full">  
        <div className="col-span-5 flex items-center justify-center">
          <img
            src={feature.imageSrc}
            alt={feature.title}
            className="w-full max-h-[470px] lg:max-h-[520px] object-contain rounded-xl"
          />
        </div>
        <div className="col-span-4 flex max-w-[420px] flex-col gap-5">
          <H3 className="text-gray-900 dark:text-white tracking-tight leading-tight text-2xl">
            {feature.title}
          </H3>
          <P className="text-gray-600 leading-relaxed">{feature.p1}</P>
        </div>
      </div>
    </div>
  );
};

// ── Feature ───────────────────────────────────────────────────────────
const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileTabsRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);
  const prevIndexRef = useRef(0);
  const cleanupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const transitionTo = (index: number) => {
    if (index === prevIndexRef.current) return;
    if (cleanupTimer.current) clearTimeout(cleanupTimer.current);
    setPrevIndex(prevIndexRef.current);
    prevIndexRef.current = index;
    setActiveIndex(index);
    // Remove outgoing layer slightly after exit animation (500ms) ends
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

      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      const index = Math.min(Math.floor(progress * COUNT), COUNT - 1);
      transitionTo(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = mobileTabsRef.current;
    if (!container) return;
    const active = container.querySelector("[data-active='true']") as HTMLElement;
    if (!active) return;
    container.scrollTo({
      left: active.offsetLeft - container.offsetWidth / 2 + active.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

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

  return (
    <section className="relative dark:bg-black bg-white">
      <div
        ref={containerRef}
        style={{ height: `${COUNT * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 dark:bg-black bg-white">
          <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 py-4 sm:px-6 md:min-h-[620px] md:py-5 lg:min-h-[680px] lg:px-10 xl:min-h-[720px] xl:py-6">

            <H2 className="mb-3 mt-0 text-center text-[#00AA72] tracking-tight leading-snug md:mb-5 xl:mb-6">
              Key features of Diligent platform
            </H2>

            {/* ── MOBILE ── */}
            <div className="block md:hidden">
              <div
                ref={mobileTabsRef}
                className="flex gap-3 overflow-x-auto pb-3 mb-6"
                style={{ scrollbarWidth: "none" }}
              >
                {FEATURES.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.id}
                      data-active={isActive.toString()}
                      onClick={() => handleTabClick(index)}
                      className={`flex-shrink-0 whitespace-nowrap py-2 px-4 rounded-full text-xs font-semibold transition-colors duration-300
                        ${isActive
                          ? "bg-[#00AA72] text-white"
                          : "bg-white border border-gray-300 text-gray-700"
                        }`}
                    >
                      {item.buttonLabel}
                    </button>
                  );
                })}
              </div>

              <div className="relative" style={{ minHeight: "340px" }}>
                {prevIndex !== null && (
                  <AnimatedLayer
                    key={`out-${prevIndex}`}
                    feature={FEATURES[prevIndex]}
                    isLeaving={true}
                  />
                )}
                <AnimatedLayer
                  key={`in-${activeIndex}`}
                  feature={FEATURES[activeIndex]}
                  isLeaving={false}
                />
              </div>
            </div>

            {/* ── DESKTOP ── */}
            <div className="hidden md:grid md:grid-cols-12 md:gap-8 lg:gap-12 items-center">

              <div className="col-span-3 flex flex-col gap-6 lg:gap-7">
                {FEATURES.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(index)}
                      className={`w-full rounded-full px-6 py-6 text-[17px] font-semibold text-center transition-all duration-300
                        ${isActive
                          ? "bg-[#00AA72] text-white shadow-md"
                          : "border border-gray-300 text-gray-700 hover:border-[#00AA72] hover:text-[#00AA72]"
                        }`}
                    >
                      {item.buttonLabel}
                    </button>
                  );
                })}
              </div>

              <div className="col-span-9 relative flex items-center" style={{ minHeight: "450px" }}>
                {prevIndex !== null && (
                  <AnimatedLayer
                    key={`out-${prevIndex}`}
                    feature={FEATURES[prevIndex]}
                    isLeaving={true}
                  />
                )}
                <AnimatedLayer
                  key={`in-${activeIndex}`}
                  feature={FEATURES[activeIndex]}
                  isLeaving={false}
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Feature;
