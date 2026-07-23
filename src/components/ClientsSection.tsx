"use client";

import { useState, useEffect } from "react";

const logos = [
  { label: "Bankfair", tagline: "Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum ",},
  { label: "PAGO", tagline: "Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "Sherlock", tagline: "AML Lorum IPsum  Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "Remitree", tagline: "Lorum IPsum  Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "LOS", tagline: "Lorum IPsum Lorum  IPsum Lorum IPsum Lorum IPsum" },
  { label: "ALMANAC", tagline: "Lorum IPsum  Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "SAMS", tagline: "Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "Conciliare", tagline: "AI Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "IOS", tagline: "ILorum IPsum  Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "Diligent", tagline: "Lorum IPsum  Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "Cloud Diet", tagline: "Lorum IPsum  Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "Unified Health", tagline: "Lorum IPsum  Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "HRMS", tagline: "Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum" },
  { label: "DMS", tagline: "Lorum IPsum Lorum IPsum Lorum IPsum Lorum IPsum" },
];

// The icon for the top of the active card
const CardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2" />
    <path d="M3 9H21" stroke="white" strokeWidth="2" />
    <circle cx="14" cy="14" r="3" stroke="white" strokeWidth="2" />
    <path d="M16 16L19 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function ClientsSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Logic to maintain equal VISUAL gap regardless of scale
  const getTranslateX = (offset: number) => {
    const W = "320px"; // Base Width
    const G = "40px";  // Visual Gap

    if (offset === 0) return "0px";
    
    // Calculation:
    // Active Scale: 1.15, Adjacent Scale: 0.85, Far Scale: 0.70
    // Distance for offset 1: (W_active/2 + G + W_adj/2)
    // Distance for offset 2: Distance_1 + (W_adj/2 + G + W_far/2)
    
    // Optimized calc string to maintain ~40px visual gap
    if (offset === 1) return `calc(${W} + ${G})`; 
    if (offset === 2) return `calc((${W} + ${G}) * 1.8)`; // Compressed distance to account for smaller scaled cards
    
    if (offset === -1) return `calc(-${W} - ${G})`; 
    if (offset === -2) return `calc((${W} + ${G}) * -1.8)`; 
    
    return "0px";
  };

  return (
    <div
      className="w-full bg-[#fcfcfc] overflow-hidden relative"
      // style={{
      //   borderTop: "2px solid #a9a9a9",
      //   borderBottom: "2px solid #a9a9a9",
      //   perspective: "1000px", 
      // }}
    >
      <div className="relative h-[220px] md:h-[280px] flex items-center justify-center">
        {logos.map((logo, i) => {
          let offset = i - activeIndex;

          if (offset > logos.length / 2) offset -= logos.length;
          if (offset < -logos.length / 2) offset += logos.length;

          const isActive = offset === 0;
          const isAdjacent = Math.abs(offset) === 1;
          const isHidden = Math.abs(offset) > 2; 

          const styles = {
            transform: `
              translateX(${getTranslateX(offset)}) 
              scale(${isActive ? 1.15 : isAdjacent ? 0.85 : 0.7}) 
              rotateY(${offset * -15}deg)
            `,
            opacity: isActive ? 1 : isAdjacent ? 0.7 : 0.3,
            zIndex: 10 - Math.abs(offset),
            filter: isActive ? "grayscale(0%)" : "grayscale(80%)",
            transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            display: isHidden ? "none" : "flex",
          };

          return (
            <div
              key={i}
              className={`absolute flex flex-col items-center justify-center rounded-xl shadow-lg cursor-pointer transition-colors duration-300 ${
  isActive 
    ? "bg-[#f4f7fc] border-[#3b5998] border-6 shadow-xl" 
    : "bg-white border border-[#e5e7eb]"
}`}
              style={{
                ...styles,
                width: "clamp(220px, 30vw, 320px)",
                height: "clamp(130px, 15vw, 180px)", 
                padding: "20px",
              }}
              onClick={() => setActiveIndex(i)}
            >
              {isActive && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#3b5998] rounded-full flex items-center justify-center border-4 border-white shadow-md z-20">
                  <CardIcon />
                </div>
              )}

              <div className={`text-center leading-tight w-full ${isActive ? 'mt-4' : ''}`}>
                <div
                  className="product-name text-gray-800 text-[20px] xl:text-[28px]"
                  style={{
                    fontWeight: 600,
                    letterSpacing: "1px",
                    transition: "all 0.3s ease",
                    fontFamily: "bricolage, sans-serif",
                  }}
                >
                  {logo.label}
                </div>

                <div
                  className="text-[14px] text-[#1C59A1] font-quicksand xl:text-[18px]"
                  style={{
                    marginTop: "8px",
                    fontWeight: 400,
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {logo.tagline}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fades on sides */}
      {/* <div
        className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
        style={{
          width: "150px",
          background: "linear-gradient(to right, #fcfcfc 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
        style={{
          width: "150px",
          background: "linear-gradient(to left, #fcfcfc 0%, transparent 100%)",
        }}
      /> */}

      <style>{`
        .product-name:hover {
          color: #000;
        }
      `}</style>
    </div>
  );
}