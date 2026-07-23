
import { useLocation } from "react-router-dom";
import React, { useRef, useEffect, useCallback } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<Element>;
}

/* =========================================================
   CLICK SPARK (Embedded inside the file, not imported)
   ========================================================= */


interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const useClickSpark = (options: {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  extraScale?: number;
}) => {
  const {
    sparkColor = "#FF3B3B",
    sparkSize = 10,
    sparkRadius = 20,
    sparkCount = 8,
    duration = 400,
    easing = "ease-out",
    extraScale = 1.0
  } = options;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const reqIdRef = useRef<number | null>(null);

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const updateCanvasSize = (width: number, height: number) => {
      canvas.width = width;
      canvas.height = height;
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        updateCanvasSize(width, height);
      }
    });

    resizeObserver.observe(parent);

    return () => {
      resizeObserver.disconnect();
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
        reqIdRef.current = null;
      }
    };
  }, []);

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sparksRef.current = sparksRef.current.filter((spark) => {
      const elapsed = timestamp - spark.startTime;
      if (elapsed >= duration) return false;

      const t = easeFunc(elapsed / duration);
      const distance = t * sparkRadius * extraScale;
      const lineLength = sparkSize * (1 - t);

      const x1 = spark.x + distance * Math.cos(spark.angle);
      const y1 = spark.y + distance * Math.sin(spark.angle);
      const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
      const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

      ctx.strokeStyle = sparkColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      return true;
    });

    if (sparksRef.current.length > 0) {
      reqIdRef.current = requestAnimationFrame(draw);
    } else {
      reqIdRef.current = null;
    }
  }, [duration, easeFunc, extraScale, sparkColor, sparkRadius, sparkSize]);

  const triggerSpark = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();

    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now
    }));

    sparksRef.current.push(...newSparks);

    if (!reqIdRef.current) {
      reqIdRef.current = requestAnimationFrame(draw);
    }
  };

  return { canvasRef, triggerSpark };
};

/* =========================================================
   1) CONTACT US BUTTON
   ========================================================= */
// export const ContactUs = ({ children, className = "", onClick }: ButtonProps) => {
//   const location = useLocation();
//   const pathParts = location.pathname.split("/");
//   const industrySlug = pathParts.includes("industries")
//     ? pathParts[pathParts.indexOf("industries") + 1]
//     : null;
//   const contactUrl = industrySlug
//     ? `/industries/${industrySlug}/contactform`
//     : "/contact";

//   const { canvasRef, triggerSpark } = useClickSpark({});

//   const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     triggerSpark(e);
//   };

//   const handleLinkClick = (e: React.MouseEvent) => {
//     if (onClick) {
//       onClick(e);
//     }
//   };

//   return (
//     <div className="relative inline-block w-fit" onClick={handleClick}>
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none"
//       ></canvas>

//       <a href={contactUrl} onClick={handleLinkClick}>
//         <button
//           className={`
//             group
           
//             flex items-center justify-center
//             w-auto h-[44px] sm:h-[48px]
//             px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
//             rounded-[8px]
//             font-quicksand font-bold text-[14px] sm:text-[16px]
//             bg-[#141414] text-white
//             transition-all duration-300 ease-in-out
//             border border-transparent
//             hover:bg-white hover:text-[#141414]
//             hover:border-[#010101]
//             hover:border-b-[4px]
//             hover:-translate-y-[2px]
//             cursor-pointer
//             shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
//             ${className}
//           `}
//         >
//           <span className="flex items-center gap-[8px]">
//             {children}
//             <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
//                 <path d="M7 7h10v10" />
//                 <path d="M7 17L17 7" />
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                 <path d="M5 12h14" />
//                 <path d="m12 5 7 7-7 7" />
//               </svg>
//             </span>
//           </span>
//         </button>
//       </a>
//     </div>
//   );
// };

// export const ContactUsHigh = ({ children, className = "", onClick }: ButtonProps) => {
//   const location = useLocation();
//   const pathParts = location.pathname.split("/");
//   const industrySlug = pathParts.includes("industries")
//     ? pathParts[pathParts.indexOf("industries") + 1]
//     : null;
//   const contactUrl = industrySlug
//     ? `/industries/${industrySlug}/contactform`
//     : "/contact";

//   const { canvasRef, triggerSpark } = useClickSpark({});

//   const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     triggerSpark(e);
//   };

//   const handleLinkClick = (e: React.MouseEvent) => {
//     if (onClick) {
//       onClick(e);
//     }
//   };

//   return (
//     <div className="relative inline-block w-fit" onClick={handleClick}>
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none"
//       ></canvas>

//       <a href={contactUrl} onClick={handleLinkClick}>
//         <button
//           className={`
//             group
//             flex items-center justify-center
//             w-auto h-[44px] sm:h-[48px]
//             px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
//             rounded-[8px]
//             font-quicksand font-bold text-[14px] sm:text-[16px]
//             bg-white text-[#141414]
//             transition-all duration-300 ease-in-out
//             border border-transparent
//             hover:bg-[#141414] hover:text-white
             
//             hover:border-b-[4px] hover:border-white
//             hover:-translate-y-[2px]
//             shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
//             ${className}
//           `}
//         >
//           <span className="flex items-center gap-[8px]">
//             {children}
//             <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
//                 <path d="M7 7h10v10" />
//                 <path d="M7 17L17 7" />
//               </svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                 <path d="M5 12h14" />
//                 <path d="m12 5 7 7-7 7" />
//               </svg>
//             </span>
//           </span>
//         </button>
//       </a>
//     </div>
//   );
// };

export const ContactUsHighYellow = ({ children, className = "", onClick }: ButtonProps) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const industrySlug = pathParts.includes("industries")
    ? pathParts[pathParts.indexOf("industries") + 1]
    : null;
  const contactUrl = industrySlug
    ? `/industries/${industrySlug}/contactform`
    : "/contact";

  const { canvasRef, triggerSpark } = useClickSpark({});

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    triggerSpark(e);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className="relative inline-block w-fit" onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      ></canvas>

      <a href={contactUrl} onClick={handleLinkClick}>
        <button
          className={`
            group
            flex items-center justify-center
            w-auto h-[48px] 
            px-[10px] py-[12px]
            rounded-[8px]
            font-quadran   font-bold
            text-[16px] 
            border-2 border-[#141414]
            bg-[#F99526] text-[#141414]
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
            transition-all duration-300 ease-in-out
            hover:bg-white hover:text-black  ${className}`}
        >
          <span className="flex items-center gap-[8px]">
            {children}
            <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </span>
        </button>
      </a>
    </div>
  );
};

export const ContactUsAI = ({ children, className = "", onClick }: ButtonProps) => {
  const { canvasRef, triggerSpark } = useClickSpark({});

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    triggerSpark(e);
    if (onClick) onClick(e);
  };

  return (
    <div className="relative inline-block w-fit" onClick={handleClick}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>

      <button
        className={`
          group
          flex items-center justify-center
          w-auto h-[40px]
          px-[18px] py-[4px]
          rounded-[4px]
          font-quadran font-light text-[16px]
          bg-[#009565] text-white
        
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#056735]
          ${className}
        `}
      >
        <span className="flex items-center gap-2">
          {children}
          {/* <span className="relative flex items-center w-[20px] h-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <path d="M7 7h10v10" />
              <path d="M7 17L17 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span> */}
        </span>
      </button>
    </div>
  );
};


export const ContactUsEHR = ({ children, className = "", onClick }: ButtonProps) => {
  const { canvasRef, triggerSpark } = useClickSpark({});

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    triggerSpark(e);
    if (onClick) onClick(e);
  };

  return (
    <div className="relative inline-block w-fit" onClick={handleClick}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>

      <button
        className={`
          group
          flex items-center justify-center
          w-auto h-[48px]
          px-[24px] py-[12px]
          rounded-[8px]
          border border-black
          font-quicksand font-bold text-[16px]
          bg-[#00AA72] text-white
        
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-white hover:text-black
          ${className}
        `}
      >
        <span className="flex items-center gap-2">
          {children}
          <span className="relative flex items-center w-[20px] h-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <path d="M7 7h10v10" />
              <path d="M7 17L17 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
};


/* =========================================================
   3) SUBMIT BUTTON
   ========================================================= */
export const Submit = ({ children, className = "", onClick }: ButtonProps) => {
  const { canvasRef, triggerSpark } = useClickSpark({});

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    triggerSpark(e);
    if (onClick) onClick(e);
  };

  return (
    <div className="relative inline-block w-fit" onClick={handleClick}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>

      <button
        className={`
          group
          flex items-center justify-center
          w-[110px] sm:w-[130px] h-[44px] sm:h-[48px]
          px-[16px] sm:px-[20px] py-[10px] sm:py-[12px]
          rounded-[8px]
          font-quicksand font-bold text-[14px] sm:text-[16px]
          bg-white text-[#141414]
          border border-[#141414]
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#141414] hover:text-white
          hover:-translate-y-[2px]
          ${className}
        `}
      >
        <span className="flex items-center gap-[8px]">
          {children}
          <span className="relative flex items-center w-[15px] h-[15px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <path d="M7 7h10v10" />
              <path d="M7 17L17 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
};
