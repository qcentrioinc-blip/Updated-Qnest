"use client";

import React, { useEffect, useRef, useState } from "react";
import { H1 } from "../../styles/Typography";

// Data for the slider WITH IMAGE PATHS
const slides = [
  {
    id: 0,
    title: "Banking and Finance",
    image: "/LandingPage/Landing4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "EHR and PMS",
    image: "/LandingPage/Landing6.jpg",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    title: "High Tech",
    image: "/LandingPage/Landing5.jpg",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 3,
    title: "AI Optimization",
    image: "/LandingPage/Landing7.png",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];

const SingleIndustrySlider: React.FC = () => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(0);
  const [contentOpacity, setContentOpacity] = useState<number>(1);

  const currentSlide = slides[currentSlideId];

  // --- Refs for scroll locking & soft snap
  const accumulatingDelta = useRef<number>(0);
  const isAnimating = useRef<boolean>(false);
  const wheelTimeout = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // thresholds & tuning
  const WHEEL_THRESHOLD = 120; // amount of accumulated delta required to trigger
  const SNAP_LOCK_MS = 700; // animation lock duration
  const ACCUM_RESET_MS = 200; // reset accumulator after inactivity

  // touch support
  const touchStartY = useRef<number | null>(null);

  const changeSlide = (newId: number) => {
    if (newId === currentSlideId || isAnimating.current) return;
    isAnimating.current = true;

    // fade content out/in (you already had similar logic)
    setContentOpacity(0);
    window.setTimeout(() => {
      setCurrentSlideId(newId);
      setContentOpacity(1);
    }, 300);

    // release lock after SNAP_LOCK_MS
    window.setTimeout(() => {
      isAnimating.current = false;
    }, SNAP_LOCK_MS);
  };

  // helper to go next/prev
  const goNext = () => {
    const next = (currentSlideId + 1) % slides.length;
    changeSlide(next);
  };
  const goPrev = () => {
    const prev = (currentSlideId - 1 + slides.length) % slides.length;
    changeSlide(prev);
  };

  // Wheel handler implements soft snap + accumulation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Prevent default vertical scroll while locked
      e.preventDefault();

      // ignore if animating
      if (isAnimating.current) return;

      // accumulate deltaY (normalized)
      const delta = e.deltaY;
      accumulatingDelta.current += delta;

      // clear/reset timer to gradually decay accumulator
      if (wheelTimeout.current) window.clearTimeout(wheelTimeout.current);
      wheelTimeout.current = window.setTimeout(() => {
        // decay the accumulator smoothly (soft snap)
        accumulatingDelta.current = 0;
      }, ACCUM_RESET_MS);

      // If threshold reached, snap to next/prev and reset
      if (Math.abs(accumulatingDelta.current) >= WHEEL_THRESHOLD) {
        if (accumulatingDelta.current > 0) {
          goNext();
        } else {
          goPrev();
        }
        accumulatingDelta.current = 0;
        // temporary ignore further wheel events until animation finishes
      }
    };

    // capture options: { passive: false } so preventDefault works
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel as any);
      if (wheelTimeout.current) window.clearTimeout(wheelTimeout.current);
    };
  }, [currentSlideId]);

  // Touch handlers (mobile)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (ev: TouchEvent) => {
      touchStartY.current = ev.touches[0].clientY;
    };

    const onTouchMove = (ev: TouchEvent) => {
      // prevent page scroll while locked
      ev.preventDefault();
    };

    const onTouchEnd = (ev: TouchEvent) => {
      if (touchStartY.current == null) return;
      const endY = (ev.changedTouches && ev.changedTouches[0].clientY) || 0;
      const diff = touchStartY.current - endY;
      const abs = Math.abs(diff);
      const TOUCH_THRESHOLD = 60;
      if (abs > TOUCH_THRESHOLD) {
        if (diff > 0) goNext();
        else goPrev();
      }
      touchStartY.current = null;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      el.removeEventListener("touchstart", onTouchStart as any);
      el.removeEventListener("touchmove", onTouchMove as any);
      el.removeEventListener("touchend", onTouchEnd as any);
    };
  }, [currentSlideId]);

  // Lock page scroll while this component is mounted (full locked scroll)
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    // prevent layout shift by measuring scrollbar width and compensate
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow || "";
      document.body.style.paddingRight = prevPaddingRight || "";
    };
  }, []);

  const gradients = [
    "bg-gradient-to-b from-[#ffffff26] to-[#ffffff0f]",
    "bg-gradient-to-b from-[#ffffff1f] to-[#ffffff0d]",
    "bg-gradient-to-b from-[#ffffff14] to-[#ffffff07]",
    "bg-gradient-to-b from-[#ffffff14] to-[#ffffff07]",
  ];

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      {/* shimmer + glassmorphism keyframes and helper classes */}
      <style>{`
        /* shimmer band */
        @keyframes shimmer-slide {
          0% { transform: translateX(-120%); opacity: 0; }
          50% { transform: translateX(0%); opacity: 0.6; }
          100% { transform: translateX(120%); opacity: 0; }
        }

        /* subtle glow on active dot */
        .dot-glow {
          box-shadow: 0 6px 18px rgba(255,255,255,0.06), 0 1px 4px rgba(255,255,255,0.04);
          transition: box-shadow .28s ease;
        }

        /* glassy tab hover using pseudo-element through inner wrapper */
        .glass-tab {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem; /* matches rounded-md */
        }

        .glass-tab::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 250%;
          height: 200%;
          background: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.14) 45%, rgba(255,255,255,0.06) 100%);
          transform: translateX(-120%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease, transform 0.6s cubic-bezier(.2,.9,.2,1);
          filter: blur(10px);
        }

        .glass-tab:hover::after {
          opacity: 1;
          transform: translateX(0%);
          animation: shimmer-slide 1.6s linear;
        }
      `}</style>

      <div className="relative w-full h-full py-20 pl-28 pr-0" ref={containerRef}>
        {/* LEFT SIDE PAGINATION */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 flex flex-col space-y-4 z-30">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => changeSlide(slide.id)}
              aria-label={`Go to ${slide.title}`}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center focus:outline-none
                ${currentSlideId === slide.id ? "bg-white scale-110 dot-glow" : "bg-white/40"}`}
            />
          ))}
        </div>

        {/* Slider Container */}
        <div
          className="w-full h-full flex flex-row overflow-hidden rounded-md shadow-2xl relative"
          style={{
            backgroundImage: `url('${currentSlide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontFamily: "Inter, sans-serif",
            transition: "background-image 360ms ease-in-out", // browsers don't animate background-image, but keep for slight timing
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/1 z-0" />

          {/* Tabs */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col p-4 md:p-2 space-y-4 z-10 justify-center order-2 md:order-3">
            {slides.map((slide, index) => {
              const isActive = slide.id === currentSlideId;
              return (
                <div
                  key={slide.id}
                  onClick={() => changeSlide(slide.id)}
                  className={`
                    glass-tab transition-all duration-300 cursor-pointer 
                    py-4 px-10 text-left 
                    ${isActive ? "bg-white text-black font-semibold" : `text-white ${gradients[index]} bg-opacity-10`}
                    ${isActive ? "shadow-lg" : "hover:shadow-white/10"}
                  `}
                  role="button"
                  tabIndex={0}
                >
                  <div className="px-2 py-1">
                    {slide.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div className="w-full md:flex-1 lg:w-3/4 flex flex-col justify-end p-8 md:p-12 z-10">
            <H1 className="text-white mb-4 transition-opacity duration-300" style={{ opacity: contentOpacity }}>
              {currentSlide.title}
            </H1>

            <div
              className="bg-white/95 p-6 md:p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 transition-opacity duration-300"
              style={{ opacity: contentOpacity }}
            >
              <p className="text-gray-700 text-lg max-w-xl mb-4 sm:mb-0">{currentSlide.description}</p>

              <button className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleIndustrySlider;
