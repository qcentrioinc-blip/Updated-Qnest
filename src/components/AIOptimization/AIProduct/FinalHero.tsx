import { useEffect, useRef } from "react";
import { H1 } from "../../../styles/Typography";

const FinalHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = -1;

    const handleScroll = () => {
      if (window.scrollY === lastScrollY) return;
      lastScrollY = window.scrollY;
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const progress = Math.min(window.scrollY / 400, 1);
        const opacity = 1 - progress;
        sectionRef.current.style.opacity = String(opacity);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="relative lg:pt-36 xl:pt-32 z-10 mx-4 max-w-8xl xl:px-10 pt-20 flex flex-col items-center justify-center">
        <div className="text-center animate-fade-in">
          <H1 className="text-center pt-10 leading-tight bg-gradient-to-b from-[#8DC1FB] to-[#FFFFFF] bg-clip-text text-transparent">
            AI-Powered Cloud Cost <br /> Optimization Platform
          </H1>
        </div>
      </div>
    </section>
  );
};

export default FinalHero;