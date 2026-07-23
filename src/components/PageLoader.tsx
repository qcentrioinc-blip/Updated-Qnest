import React, { useEffect, useState } from "react";
import bgImage from "/Pageloadbg.png";

interface PreloaderProps {
  onComplete: () => void;
}

const PageLoader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

useEffect(() => {
  const steps = [10, 30, 45, 80, 100];
  let index = 0;

  const timer = setInterval(() => {
    if (index < steps.length) {
      setProgress(steps[index]);
      index++;
    } else {
      clearInterval(timer);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, 900);

  return () => clearInterval(timer);
}, []); // ← empty array, runs ONCE on mount only

  const sectorMap: Record<number, string> = {
    10: "Banking Finance",
    30: "Unified Healthcare",
    45: "CloudFinOps AI",
    80: "Across Every Sector",
    100: "Welcome To Qnest",
  };

  const currentSector = sectorMap[progress] || "Banking Finance";

  // Clean, premium spacing between phrases using explicit spaces and elegant divider dots
 const baseText = "BANKING FINANCE  •  UNIFIED HEALTHCARE  •  CLOUD FINOPS AI  •  ";
const repeatedText = `${baseText}${baseText}${baseText}${baseText}`;

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .loader-font{
          font-family:'Cormorant Garamond', serif;
        }

        .fade-number{
          animation:pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse{
          0%{opacity:.5}
          50%{opacity:1}
          100%{opacity:.5}
        }

        /* Hardware-accelerated smooth rotation layer */
        @keyframes spinTrack {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .rotating-vector-group {
          transform-origin: 500px 500px;
          animation: spinTrack 45s linear infinite;
        }
      `}
      </style>

      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center loader-font overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main Frame Outer Frame */}
        <div
          className="relative bg-black rounded-full flex items-center justify-center"
          style={{
            width: "42vw", // Adjusted slightly wider for premium framing
            height: "92vh",
            border: "1px solid rgba(216,208,192,.15)",
          }}
        >
          {/* SVG Vector Canvas */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="absolute inset-0 pointer-events-none"
          >
            <defs>
              {/* Perfectly calculated text alignment track */}
              <path
                id="perfectCircleTrack"
                d="M 500, 70 
                   a 430,430 0 1,1 0,860 
                   a 430,430 0 1,1 0,-860"
              />
            </defs>

            {/* STATIC OUTER RING GEOMETRY */}
            <circle
              cx="500"
              cy="500"
              r="480"
              fill="none"
              stroke="#d8d0c0"
              strokeWidth="1.5"
              strokeOpacity="0.2"
            />

            {/* ROTATING TYPOGRAPHY ENGINE */}
            <g className="rotating-vector-group">
              <text
                fill="#d8d0c0"
                fontSize="26" /* Considerably larger text so it no longer looks like ants */
                letterSpacing="14" /* Wide spacing between letters for a premium look */
                xmlSpace="preserve" /* Forces browser to respect large spacing gaps */
                fontWeight="400"
                className="uppercase tracking-widest"
                style={{ opacity: 0.9 }}
              >
                {/* textLength dynamically balances spacing across the path perimeter */}
                <textPath 
                  href="#perfectCircleTrack" 
                  startOffset="0%"
                 
                >
                  {repeatedText}
                </textPath>
              </text>
            </g>

            {/* STATIC INNER RING GEOMETRY */}
            <circle
              cx="500"
              cy="500"
              r="380"
              fill="none"
              stroke="rgba(216,208,192,.2)"
              strokeWidth="1"
            />
          </svg>

          {/* ISOLATED STATIC CORE PANEL */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#e6dece] pointer-events-none select-none">
            <div
              style={{
                fontSize: "3.2rem",
                lineHeight: 1,
                fontWeight: 300,
                fontStyle: "italic"
              }}
            >
              The
            </div>

            <div
              style={{
                fontSize: "clamp(4.5rem, 7.5vw, 9.5rem)",
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: "0.01em"
              }}
            >
              Qnest
            </div>

            <div
              style={{
                marginTop: "18px",
                marginBottom: "10px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                fontSize: "11px",
                opacity: 0.65,
              }}
            >
              Across Every Sector
            </div>

            <div
              className="fade-number"
              style={{
                fontSize: "4.2rem",
                lineHeight: 1,
                fontWeight: 300,
                margin: "8px 0"
              }}
            >
              {progress}%
            </div>

            <div
              style={{
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontSize: "11px",
                marginTop: "12px",
                minHeight: "22px",
                color: "#d8d0c0",
                opacity: 0.85,
                transition: "all .4s ease",
              }}
            >
              {currentSector}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLoader;