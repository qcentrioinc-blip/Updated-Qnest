import { useState, useEffect } from "react";
import { H2, P } from "../../../styles/Typography";

interface SlideData {
  id: number;
  title: string;
  description: string;
  circleColor: string;       // Inner solid core circle (e.g. "bg-[#0F38A1]")
  lightShadeColor: string;   // Outer light tint shade ring (e.g. "bg-[#00AA72]/20 ")
  imageSrc: string;     
  alt: string;
}

const SLIDE_DATA: SlideData[] = [
  {
    id: 1,
    title: "BANKING AND FINANCE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit it amet, Lorem ipsum dolor sit amet",
    circleColor: "bg-[#0F38A1]",
    lightShadeColor: "bg-[#00AA72]/20 ",
    imageSrc: "/Global/BNFHero.png",
    alt: "Banking and Finance",
  },
  {
    id: 2,
    title: "Unified Healthcare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit it amet, Lorem ipsum dolor sit amet",
    circleColor: "bg-[#145327]",
    lightShadeColor: "bg-[#1E7035]/20 ",
    imageSrc: "/Global/UnifiedHero.png",
    alt: "Unified Healthcare",
  },
  {
    id: 3,
    title: "Cloud Finops",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit it amet, Lorem ipsum dolor sit amet, ",
    circleColor: "bg-[#021642]",
    lightShadeColor: "bg-[#021642]/40 ",
    imageSrc: "/Global/AIHeroo.png",
    alt: "Cloud Finops",
  },
];

export default function NewLanding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
  };

  useEffect(() => {
    if (prevIndex !== null) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setPrevIndex(null);
      }, 1600); // Matches the pure CSS bloom transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, prevIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      
      {/* PREMIUM CONCENTRIC REVEAL ENGINE (PURE CSS KEYFRAMES)
        This ensures that the upcoming slide scales organically from 50% 50% (the absolute center),
        forcing the title text and images to be pre-contained inside the tiny circle before growing outwards.
      */}
      <style>{`
        .slide-concentric-bloom {
          transform-origin: 50% 50%;
          animation: concentricBloom 1.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        @keyframes concentricBloom {
          0% {
            transform: scale(0.05);
            clip-path: circle(10% at 50% 50%);
            opacity: 0.3;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: scale(1);
            clip-path: circle(150% at 50% 50%);
            opacity: 1;
          }
        }

        /* Fluid micro-delays for internal content layers to mimic organic depth */
        .slide-inner-content-fade {
          animation: innerContentReveal 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes innerContentReveal {
          0% {
            opacity: 0;
            filter: blur(8px);
          }
          40% {
            opacity: 0.2;
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>
      
      {/* Slide Tracks */}
      {SLIDE_DATA.map((slide, index) => {
        const isCurrent = index === currentIndex;
        const isPrev = index === prevIndex;
        
        if (!isCurrent && !isPrev) return null;

        const isEntering = isCurrent && prevIndex !== null;
        const bloomClass = isEntering ? "slide-concentric-bloom" : "";
        const contentFadeClass = isEntering ? "slide-inner-content-fade" : "";

        return (
          <section
            key={slide.id}
            data-index={index}
            className={`absolute inset-0 w-full h-full bg-black flex items-center justify-center ${bloomClass}`}
            style={{ zIndex: isCurrent ? 20 : 10 }}
          >
            
            {/* THE CONCENTRIC BACKGROUND SUN & SHADE RINGS
              Anchored precisely at absolute center (50% 50%)
            */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[400px] md:h-[400px] pointer-events-none z-0 flex items-center justify-center">
              
              {/* Layer 1: Light Shade Outer Ring */}
              <div className={`absolute w-[135%] h-[135%] rounded-full border-2 ${slide.lightShadeColor} transition-transform duration-700`} />
              
              {/* Layer 2: Inner Core Solid Circle Element */}
              <div className={`w-full h-full rounded-full ${slide.circleColor} shadow-[0_0_60px_rgba(0,0,0,0.8)]`} />

            </div>

            {/* CONTENT LAYER WRAPPER
              Because the parent section scales down to 0.05 from the viewport center, 
              these items start clustered entirely inside the middle circle and gracefully 
              expand outward into their layout split positions as the circle expands.
            */}
            <div className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24 box-border z-30 ${contentFadeClass}`}>
              
              {/* Left Side: Typography Content Column */}
              <div className="w-full md:max-w-[42%] text-white mt-28 md:mt-0 space-y-4 text-left">
                <H2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
                  {slide.title}
                </H2>
                <P className="text-sm md:text-base text-white/70 font-light max-w-sm leading-relaxed">
                  {slide.description}
                </P>
              </div>

              {/* Right Side: Cutout Foreground Transparent Viewport Element */}
              <div className="w-full md:max-w-[50%] h-1/2 md:h-full flex items-center justify-center md:justify-end relative">
                <img
                  src={slide.imageSrc}
                  alt={slide.alt}
                  className="max-h-[45vh] md:max-h-[75vh] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.85)]"
                />
              </div>

            </div>
          </section>
        );
      })}

      {/* Control Navigation Deck */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="px-8 py-3.5 bg-white text-black text-xs font-bold rounded-full tracking-widest uppercase hover:bg-neutral-200 transition-all active:scale-95 duration-200 shadow-2xl disabled:opacity-40 cursor-pointer"
        >
          Explore Next
        </button>
      </div>

    </div>
  );
}