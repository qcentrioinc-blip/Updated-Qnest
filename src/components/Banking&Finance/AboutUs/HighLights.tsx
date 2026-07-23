import React, { useRef, useEffect, useCallback, useState } from "react";
import { useMotionValue } from "motion/react";
import { H2, H3, P } from "../../../styles/Typography";

type Card = {
  title: string;
  description: string;
};

// ... (Card data remains the same)
const cards: Card[] = [
    {
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Ut enim ad minima veniam",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
      title: "Neque porro quisquam",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    },
    {
      title: "Excepteur sint occaecat",
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.",
    },
    {
      title: "Ut enim ad minima veniam",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
      title: "Neque porro quisquam",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    },
  ];

const HighLights: React.FC = () => {
  // ... (useRef, useState, useMotionValue declarations remain the same)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const progress = useMotionValue(0);

  // ... (measure, useEffect, isContainerInViewport, handleWheel, getTransform, animation useEffect remain the same)
  const measure = useCallback(() => {
    if (!scrollerRef.current || !containerRef.current) return;
    const total = scrollerRef.current.scrollWidth;
    const view = containerRef.current.clientWidth;
    setScrollWidth(Math.max(0, total - view));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const isContainerInViewport = useCallback(() => {
    if (!containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    const buffer = 100;
    const isActive = rect.top <= buffer && rect.bottom > window.innerHeight - buffer;
    return isActive;
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isContainerInViewport() || scrollWidth <= 0) return;

      const delta = e.deltaY;
      const sensitivity = 0.002;
      const current = progress.get();
      
      let next = current + delta * sensitivity;
      next = Math.max(0, Math.min(1, next)); 
      
      progress.set(next);

      if (next > 0 && next < 1) {
        e.preventDefault();
      }
    },
    [isContainerInViewport, progress, scrollWidth]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  const getTransform = () => {
    const px = Math.round(-progress.get() * scrollWidth);
    return `translateX(${px}px)`;
  };

  useEffect(() => {
    let raf = 0;
    const animate = () => {
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = getTransform();
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [scrollWidth]);


  return (
    <div className="relative w-full">
      <section
        ref={containerRef}
        className="relative bg-black text-white py-20"
        style={{
          minHeight: scrollWidth ? `${scrollWidth + window.innerHeight}px` : "220vh",
        }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          <H2 className="font-bold px-6 mb-20">Highlights</H2>

          <div className="w-full overflow-hidden px-6">
            <div
              ref={scrollerRef}
              className="flex items-start gap-x-8 will-change-transform" 
              style={{ transform: "translateX(0px)" }}
            >
              {cards.map((c, idx) => (
                <div
                  key={idx}
                  // ADDED: aspect-[437/586] to set the W:H ratio
                  // CHANGED: Removed fixed height classes h-[420px] md:h-[480px]
                  className={`
                    flex-shrink-0 bg-black rounded-2xl shadow-lg 
                    flex flex-col aspect-[437/586]
                    
                    /* Ensures the width is 437px on large screens for ratio calculation */
                    lg:w-[437px] 
                    
                    /* Responsive card count widths for other screens */
                    w-[calc((100%-2rem*1)/1.1)] 
                    sm:w-[calc((100%-2rem*2)/2.1)]
                  `}
                  // The style below enforces the desired width on desktop while keeping the ratio
                  // NOTE: This width only applies when the card count rule allows it.
                  // If you want 437px wide always on desktop, use the lg:w-[437px] above.
                >
                  {/* Using standard HTML tags as H3/P are undefined */}
                  <H3 className="mb-3">{c.title}</H3>
                  <P className="mb-6 flex-grow">{c.description}</P> 
                  
                  {/* Placeholder uses w-full and aspect-square to fill remaining space */}
                  <div 
                    className="w-full aspect-square bg-gray-400 rounded-xl mt-5" 
                  /> 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighLights;