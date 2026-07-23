// import { useEffect, useRef, useState } from "react";
// import Globe, { type GlobeMethods } from "react-globe.gl";

// const RotatingGlobe = () => {
//     const globeRef = useRef<GlobeMethods | undefined>(undefined);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

//     useEffect(() => {
//         const updateSize = () => {
//             if (containerRef.current) {
//                 const w = containerRef.current.offsetWidth;

//                 // ✅ Cap max size — never bigger than 500px
//                 // ✅ On mobile use 85% of container width
//                 const size = Math.min(w * 0.90, 700);
//                 setDimensions({ width: size, height: size });
//             }
//         };
//         updateSize();
//         window.addEventListener("resize", updateSize);
//         return () => window.removeEventListener("resize", updateSize);
//     }, []);

//     useEffect(() => {
//         if (globeRef.current) {
//             const controls = globeRef.current.controls();
//             controls.autoRotate = true;
//             controls.autoRotateSpeed = 6;
//             controls.enableZoom = true;
//             controls.enablePan = false;

//             // ✅ Higher altitude = globe appears smaller/further away
//             globeRef.current.pointOfView({ altitude: 2.0 });
//         }
//     }, []);

//     return (
//         // ✅ Constrain the container itself — globe can't grow beyond this
//         <div
//             ref={containerRef}
//             className="
//                 w-full max-w-7xl mx-auto
//                 flex items-center justify-center
//                 bg-white
//             "
//         >
//             <Globe
//                 ref={globeRef}
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 backgroundColor="rgba(255,255,255,1)"
//                 showAtmosphere={true}
//                 atmosphereColor="#00AA72"
//                 atmosphereAltitude={0.15}
//                 showGraticules={true}
//                 width={dimensions.width}
//                 height={dimensions.height}
//             />
//         </div>
//     );
// };

// export default RotatingGlobe;


import { useEffect, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";
import { H2 } from "../../../styles/Typography";

const globePoints = [
    { lat: 32.9, lng: -97.0, name: 'USA (Head Quarter)' },
    { lat: 51.5, lng: -0.12, name: 'United Kingdom' },
    { lat: 46.2, lng: 6.15, name: 'Switzerland' },
    { lat: 1.35, lng: 103.82, name: 'Singapore' },
    { lat: 17.38, lng: 78.49, name: 'India' },
    { lat: -33.86, lng: 151.21, name: 'Australia' },
];

// ✅ CHANGE 1: Outside component + pointer-events: auto on el
const buildPinElement = (d: object) => {
    const point = d as typeof globePoints[0];
    const el = document.createElement("div");
    el.style.cssText = `
        position: relative;
        width: 50px;
        height: 50px;
        cursor: pointer;
        transform: translate(-50%, -50%);
        pointer-events: auto;
    `;
    el.innerHTML = `
        <div class="globe-pin-outer"></div>
        <div class="globe-pin-mid"></div>
        <div class="globe-pin-dot"></div>
        <div class="globe-pin-label">${point.name}</div>
    `;
    /*
     const label = el.querySelector(".globe-pin-label") as HTMLElement;
    el.addEventListener("mouseenter", () => {
        if (label) label.style.opacity = "1";
        if (label) label.style.transform = "translateX(-50%) translateY(0)";
    });
    el.addEventListener("mouseleave", () => {
        if (label) label.style.opacity = "0";
        if (label) label.style.transform = "translateX(-50%) translateY(4px)";
    });
    */
    return el;
};

const RotatingGlobe = () => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const [dimensions, setDimensions] = useState({ width: 700, height: 700 });
    const [arcProgress, setArcProgress] = useState(0);

    const targetProgress = useRef(0);
    const currentProgress = useRef(0);
    const rafId = useRef<number>(0);

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const w = containerRef.current.offsetWidth;
                const size = Math.min(w * 0.95, 900);
                setDimensions({ width: size, height: size });
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // ✅ CHANGE 2: CSS2D container = pointer-events:none (pass-through to canvas)
    // canvas keeps pointer-events for rotation
    // individual pins have pointer-events:auto so hover works
    useEffect(() => {
        const initControls = () => {
            if (globeRef.current) {
                const controls = globeRef.current.controls();
                controls.autoRotate = true;
                controls.autoRotateSpeed = 3;
                controls.enableZoom = false;
                controls.enablePan = false;
                globeRef.current.pointOfView({
  lat: 10,     // slightly towards Asia
  lng: 90,     // centers Asia region
  altitude: 2.4
});

                // Find the CSS2DRenderer div (sibling to canvas)
                // Set it to pointer-events:none so mouse events pass through to canvas
                // Individual pin elements override this with pointer-events:auto
                const canvasEl = globeRef.current.renderer().domElement;
                const parentEl = canvasEl.parentElement;
                if (parentEl) {
                    // The CSS2D div is a sibling div next to the canvas
                    const css2dDiv = Array.from(parentEl.children).find(
                        (child) => child !== canvasEl && child.tagName === "DIV"
                    ) as HTMLElement | undefined;
                    if (css2dDiv) {
                        css2dDiv.style.pointerEvents = "none";
                    }
                }
            } else {
                setTimeout(initControls, 100);
            }
        };
        initControls();
    }, []);

    useEffect(() => {
        const animate = () => {
            const diff = targetProgress.current - currentProgress.current;
            if (Math.abs(diff) > 0.001) {
                currentProgress.current += diff * 0.06;
                setArcProgress(currentProgress.current);
            }
            rafId.current = requestAnimationFrame(animate);
        };
        rafId.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId.current);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            const sectionH = sectionRef.current.offsetHeight;
            const totalTravel = windowH + sectionH;
            const travelled = windowH - rect.top;
            const p = travelled / totalTravel;
            targetProgress.current = Math.max(0, Math.min(1, p));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const w = dimensions.width;
    const h = dimensions.height;
    const cx = w / 2;
    const cy = h / 2;
    const R = w * 0.40;

    const leftArc = `M ${cx} ${cy - R} A ${R} ${R} 0 0 0 ${cx} ${cy + R}`;
    const rightArc = `M ${cx} ${cy - R} A ${R} ${R} 0 0 1 ${cx + R} ${cy} A ${R} ${R} 0 0 1 ${cx} ${cy + R}`;

    const yellowLen = Math.PI * R;
    const yellowOffset = yellowLen * (1 - arcProgress);

    return (
        <div ref={sectionRef} className="relative w-full bg-[#0a1628] overflow-hidden">
            <div className="absolute top-[10px] md:top-[40px] left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-3">
  <H2 className="text-white text-center px-4">
  {/* Mobile text */}
  <span className="block sm:hidden whitespace-nowrap">
    QNEST Presence
  </span>

  {/* Desktop text */}
  <span className="hidden sm:block whitespace-nowrap">
    QNEST's Presence Across the Globe
  </span>
</H2>
</div>
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(100,160,255,0.07) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(100,160,255,0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: "90px 90px",
                }}
            />

            {["top-[10%] left-[5%]", "top-[10%] right-[5%]",
                "bottom-[8%] left-[5%]", "bottom-[8%] right-[5%]"].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} pointer-events-none z-10`}>
                        <div className="relative w-5 h-5">
                            <div className="absolute top-0 left-0 w-4 h-[1px] bg-[rgba(120,200,255,0.35)]" />
                            <div className="absolute top-0 left-0 w-[1px] h-4 bg-[rgba(120,200,255,0.35)]" />
                        </div>
                    </div>
                ))}

            <div
                ref={containerRef}
                className="relative w-full flex justify-center"
                style={{ height: `${h}px` }}
            >
                <div className="absolute" style={{ top: "55%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <Globe
                        ref={globeRef}
                        // globeImageUrl="https://unpkg.com/three-globe/example/img/earth-water.png"
                        // globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
                        // globeImageUrl="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
                        // globeImageUrl="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
                        // globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                        // globeImageUrl="https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg"
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        backgroundColor="rgba(0,0,0,0)"
                        showAtmosphere={true}
                        atmosphereColor="#00d4ff"
                        atmosphereAltitude={0.22}
                        showGraticules={false}
                        width={w}
                        height={h}
                        htmlElementsData={globePoints}
                        htmlLat="lat"
                        htmlLng="lng"
                        htmlAltitude={0.01}
                        htmlElement={buildPinElement}
                    />
                </div>

                <svg
                    className="absolute pointer-events-none z-10"
                    style={{ top: "55%", left: "50%", transform: "translate(-50%, -50%)", overflow: "visible" }}
                    width={w}
                    height={h}
                >
                    <path d={leftArc} fill="none" stroke="rgba(180,220,255,0.28)" strokeWidth="1.5" strokeLinecap="round" />
                    <path d={rightArc} fill="none" stroke="rgba(180,220,255,0.28)" strokeWidth="1.5" strokeLinecap="round" />
                    {/* ✅ CHANGE 3: Left arc yellow fill */}
                    <path d={leftArc} fill="none" stroke="#F5A623" strokeWidth="5" strokeLinecap="round"
                        strokeDasharray={yellowLen} strokeDashoffset={yellowOffset} />
                    <path d={rightArc} fill="none" stroke="#F5A623" strokeWidth="5" strokeLinecap="round"
                        strokeDasharray={yellowLen} strokeDashoffset={yellowOffset} />
                </svg>
            </div>

            <style>{`
                .globe-pin-outer {
                    position: absolute; top: 50%; left: 50%;
                    width: 50px; height: 50px;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    background: rgba(100, 180, 255, 0.12);
                    border: 1.5px solid rgba(150, 210, 255, 0.35);
                    animation: pin-pulse-outer 2.2s ease-out infinite;
                    pointer-events: none;
                }
                .globe-pin-mid {
                    position: absolute; top: 50%; left: 50%;
                    width: 28px; height: 28px;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    background: rgba(120, 190, 255, 0.18);
                    border: 1.5px solid rgba(180, 225, 255, 0.55);
                    animation: pin-pulse-mid 2.2s ease-out infinite 0.4s;
                    pointer-events: none;
                }
                .globe-pin-dot {
                    position: absolute; top: 50%; left: 50%;
                    width: 14px; height: 14px;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    background: radial-gradient(circle at 35% 35%, #ffffff, #b8d8f8);
                    box-shadow: 0 0 6px 2px rgba(255,255,255,0.9), 0 0 14px 4px rgba(120,190,255,0.7);
                    pointer-events: none;
                }
                .globe-pin-label {
                    position: absolute;
                    bottom: calc(100% + 6px);
                    left: 50%;
                    transform: translateX(-50%) translateY(0);
                    white-space: nowrap;
                    background: rgba(8, 18, 50, 0.85);
                    border: 1px solid rgba(120, 200, 255, 0.4);
                    color: #ffffff;
                    font-family: 'Quicksand', sans-serif;
                    font-weight: 600;
                    font-size: 12px;
                    padding: 4px 10px;
                    border-radius: 5px;
                    opacity: 1;
                    pointer-events: none;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    backdrop-filter: blur(4px);
                }
                @keyframes pin-pulse-outer {
                    0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.7; }
                    70%  { transform: translate(-50%, -50%) scale(1.8); opacity: 0;   }
                    100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0;   }
                }
                @keyframes pin-pulse-mid {
                    0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.8; }
                    70%  { transform: translate(-50%, -50%) scale(1.35); opacity: 0;   }
                    100% { transform: translate(-50%, -50%) scale(1.35); opacity: 0;   }
                }
            `}</style>
        </div>
    );
};

export default RotatingGlobe;
