import { useEffect, useRef, useState } from "react";

export default function Keywords() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /** ---------- ARC GEOMETRY ---------- */
  const cx = 500;
  const cy = 500;
  const outerR = 420;
  
  // angles along the semicircle (left → right)
  const angles = [-150, -110, -70, -30];
  
  // Different labels for each point
  const labels = [
    "Verify Eligibility",
    "Submit Claims", 
    "Track Status",
    "Resolve Denials"
  ];

 
  const labelOffsets = [
    { radial: 60, xOffset: -20, yOffset: 35 },  
    { radial: 50, xOffset: -60, yOffset: 50 },   
    { radial: 50, xOffset: 50, yOffset: 50 },   
    { radial: 60, xOffset: 20, yOffset: 30 }   
  ];
  
  const points = angles.map((deg, idx) => {
    const rad = (deg * Math.PI) / 180;
    const pointX = cx + outerR * Math.cos(rad);
    const pointY = cy + outerR * Math.sin(rad);
    
    // Get custom offset for this label
    const offset = labelOffsets[idx];
    
    // Calculate label position with custom radial offset
    const labelX = cx + (outerR + offset.radial) * Math.cos(rad) + offset.xOffset;
    const labelY = cy + (outerR + offset.radial) * Math.sin(rad) + offset.yOffset;
    
    return {
      x: pointX,
      y: pointY,
      labelX: labelX,
      labelY: labelY,
      label: labels[idx],
    };
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F8F8] dark:bg-[#141414] h-auto lg:h-[150vh]"
    >
      {/* STICKY AREA */}
      <div className="sticky top-0 h-auto lg:h-screen flex items-end justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto items-center flex lg:items-end justify-center pb-0">

          {/* SVG - arcs touch bottom - responsive sizing */}
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-auto max-h-[40vh] lg:max-h-none"
            preserveAspectRatio="xMidYMax meet"
          >
            {/* OUTER ARC */}
            <path
              d="M 920 500 A 420 420 0 0 0 80 500"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="2"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: animate ? 0 : 1,
                transition: "stroke-dashoffset 1.6s ease-out",
              }}
            />

            {/* INNER ARC */}
            <path
              d="M 800 500 A 300 300 0 0 0 200 500"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: animate ? 0 : 1,
                transition: "stroke-dashoffset 1.2s ease-out 0.3s",
              }}
            />

            {/* POINTS */}
            {points.map((p, i) => (
              <g
                key={i}
                style={{
                  transformOrigin: `${p.x}px ${p.y}px`,
                  opacity: animate ? 1 : 0,
                  transform: animate ? "scale(1)" : "scale(0.6)",
                  transition: "all 0.45s ease-out",
                  transitionDelay: `${700 + i * 180}ms`,
                }}
              >
                {/* Point circle */}
                <circle cx={p.x} cy={p.y} r="6" fill="#00AA72" />
                
                {/* Label positioned outside the arc with custom offsets */}
                <text  
                  x={p.labelX}
                  y={p.labelY}
                  fontSize="16"
                 
                  fontFamily="Quicksand,sans-serif"
                  className="font-bold  fill-black dark:fill-white lg:block"
                  textAnchor="middle"
                >
                  {p.label}
                </text>
              </g>
            ))}
          </svg>

          {/* SEMI-CIRCLE GRADIENT BACKGROUND - responsive sizing */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                       w-[200px] h-[100px] sm:w-[400px] sm:h-[200px] lg:w-[500px] lg:h-[250px]"
            style={{
              borderRadius: "300px 300px 0 0",
              background:
                "radial-gradient(ellipse at center bottom, #00AA72 0%, rgba(0,130,128,0.4) 40%, transparent 90%)",

              transformOrigin: "bottom center",
              transform: animate
                ? "translateX(0%) scaleY(1)"
                : "translateX(0%) scaleY(0)",

              opacity: animate ? 1 : 0,
              transition: "transform 0.6s ease-out, opacity 0.4s ease-out",
              transitionDelay: "0.4s",
            }}
          />

          {/* CENTER IMAGE - responsive sizing */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex lg:items-end justify-center">
            <img
              src="/EHRIcons/InsuranceKeywords.webp"
              alt="Person"
              className="w-[150px] sm:w-[200px] md:w-[260px] lg:w-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}