"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import { ArrowRightIcon, ArrowUpRightIcon, Check } from "lucide-react";
import { H1, H4, P } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";
import { Check } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NodeData {
  label: string;
  iconSrc: string;
  highCost: string;
  lowCost: string;
}
interface HexNodeProps {
  label: string;
  iconSrc: string;
  cost: string;
  costColor: string;
  mobile?: boolean;
  tablet?: boolean;
  flat?: boolean;
  layer?: "left" | "right";
}
interface ScrollingTrackProps {
  nodes: NodeData[];
  speed: number;
  mobile?: boolean;
  tablet?: boolean;
  leftColor: string;
  rightColor: string;
  leftCostKey: "lowCost" | "highCost";
  rightCostKey: "lowCost" | "highCost";
  delayMs?: number;
}
interface CenterImageProps {
  overlapCount: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const NODES: NodeData[] = [
  { label: "Misconfiguration", iconSrc: "/AIProduct/Misconfiguration.svg", highCost: "$7500", lowCost: "$750" },
  { label: "Duplication", iconSrc: "/AIProduct/Duplication.svg", highCost: "$1200", lowCost: "$220" },
  { label: "Idle Resources", iconSrc: "/AIProduct/IdleResource.svg", highCost: "$3500", lowCost: "$350" },
  { label: "Overprovisioning", iconSrc: "/AIProduct/Overprovisioning.svg", highCost: "$3500", lowCost: "$252" },
];

// Hexagon clip-path used across all hex nodes
const HEX_CLIP = "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

// ─── Framer Motion Variants ───────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
  },
});

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 1.2 },
  },
};

// ─── useInfiniteScroll ────────────────────────────────────────────────────────
function useInfiniteScroll(
  refs: React.RefObject<HTMLDivElement | null>[],
  speed: number,
  delayMs = 0
) {
  useEffect(() => {
    let rafId: number;
    let last: number | null = null;
    let offset = 0;
    let setWidth = 0;
    let started = false;

    const apply = () =>
      refs.forEach(r => { if (r?.current) r.current.style.transform = `translateX(-${offset}px)`; });

    const measure = () => {
      const w = (refs[0]?.current?.scrollWidth ?? 0) / 2;
      if (w <= 0) return false;
      setWidth = w;
      return true;
    };

    const tick = (ts: number) => {
      if (last === null) last = ts;
      const delta = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      offset += speed * delta;
      if (offset >= setWidth) offset -= setWidth;
      apply();
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (started) return;
      if (!measure()) { rafId = requestAnimationFrame(start as unknown as FrameRequestCallback); return; }
      apply();
      started = true;
      last = null;
      rafId = requestAnimationFrame(tick);
    };

    const timer = setTimeout(start, delayMs);
    const ro = new ResizeObserver(() => measure());
    if (refs[0]?.current) ro.observe(refs[0].current);
    return () => { clearTimeout(timer); cancelAnimationFrame(rafId); ro.disconnect(); };
  }, [speed, delayMs]);
}

// ─── HexNode ──────────────────────────────────────────────────────────────────
function HexNode({ label, iconSrc, cost, costColor, mobile = false, tablet = false, flat = false, layer = "left" }: HexNodeProps) {
  const wrapSize = mobile ? 60 : tablet ? 78 : 104;
  const iconSize = mobile ? "w-[26px] h-[26px]" : tablet ? "w-8 h-8" : "w-11 h-11";
  const nodeW = mobile ? 90 : tablet ? 120 : 160;
  const nodeH = mobile ? 120 : tablet ? 155 : 200;
  
  // Left nodes are solid green; Right nodes are 3D silver/grey gradient
  const isLeft = layer === "left";
  const hexBackground = isLeft ? "bg-[#00A86B]" : "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400";
  const shadowEffect = isLeft ? "drop-shadow-sm" : "drop-shadow-md";

  return (
    <div
      data-hex-node="true"
      data-hex-layer={layer}
      className="flex flex-col items-center justify-center flex-shrink-0 font-quadran"
      style={{ width: nodeW, height: nodeH, transform: "rotate(20deg)" }}
    >
      {/* Label & Cost */}
      <div className={`${mobile ? "mb-[7px]" : "mb-3"} text-center z-[2]`}>
        <div
          className={`font-extrabold tracking-[0.3px] ${mobile ? "text-[11px]" : tablet ? "text-[14px]" : "text-[18px]"}`}
          style={{ color: costColor }}
        >
          {cost}
        </div>
        <div className={`text-gray-700 font-semibold ${mobile ? "text-[10px] mt-[2px]" : "text-[15px] mt-1"} tracking-[0.2px]`}>
          {label}
        </div>
      </div>

      {/* Hex shape */}
      <div
        className={`relative ${shadowEffect}`}
        style={{
          width: wrapSize,
          height: wrapSize,
          transform: flat ? "perspective(350px) rotateX(52deg) scale(0.92)" : "none",
          transformOrigin: "center center",
        }}
      >
        <div
          className={`absolute inset-0 z-0 ${hexBackground}`}
          style={{ clipPath: HEX_CLIP }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center z-[1]"
          style={{ clipPath: HEX_CLIP }}
        >
          <img
            src={iconSrc}
            alt={label}
            className={`${iconSize} object-contain relative z-[3] drop-shadow-md`}
          />
        </div>
      </div>
    </div>
  );
}

// ─── CenterImage ──────────────────────────────────────────────────────────────
function CenterImage({ overlapCount }: CenterImageProps) {
  const intensity = Math.min(overlapCount / 2, 1);
  const glowAlpha = 0.15 + intensity * 0.25; 
  const glowSpread = 15 + intensity * 25; 

  return (
    <div
      className="absolute flex items-center justify-center z-20 pointer-events-auto
                 w-52 h-52 md:w-68 md:h-68 lg:w-72 lg:h-72 xl:w-72 xl:h-72
                 left-[55%] top-[55%] md:left-[55%] md:top-[58%] lg:left-[60%] lg:top-[60%] xl:left-[55%] xl:top-[50%] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        data-cloud-target="true"
        className="relative w-full h-full"
        animate={{
          scale: 1 + intensity * 0.04,
          filter: overlapCount > 0
            ? `drop-shadow(0 0 ${glowSpread}px rgba(0,168,107,${glowAlpha})) drop-shadow(0 15px 35px rgba(0,0,0,0.1))`
            : "drop-shadow(0 15px 35px rgba(0,0,0,0.15))",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <img
          src="/CloudDiet/LandingPage/Cloud.svg"
          alt="Cloud Dashboard"
          className="w-full h-full object-contain"
        />
        {/* <motion.div
          className="absolute inset-0 flex items-center justify-center mt-6 lg:mt-10 xl:mt-15"
          animate={{ opacity: 0.88 + intensity * 0.12 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/AIProduct/Text.png"
            alt="CloudDIET"
            className="object-cover w-[60%] h-[20%]"
          />
        </motion.div> */}
      </motion.div>
    </div>
  );
}

// ─── BottomRightCard ──────────────────────────────────────────────────────────
function BottomRightCard() {
  return (
    <motion.div
      className="
        absolute
        bottom-[6%]
        right-[10%]
        z-[25]
        flex
        items-start
        overflow-hidden
        rounded-3xl
        bg-[#00A86B]
        text-white
        shadow-2xl
      "
      style={{
        width: "clamp(280px, 38vw, 550px)",
        padding: "clamp(18px, 2vw, 30px)",
        gap: "clamp(12px, 1.5vw, 20px)",
      }}
      variants={slideRight}
      initial="hidden"
      animate="visible"
    >
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-full bg-white text-[#00A86B]"
        style={{
          width: "clamp(44px, 5vw, 64px)",
          height: "clamp(44px, 5vw, 64px)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Check className="w-8 h-8 stroke-[3]" />
      </div>
      <div>
        <H4 className="mb-2 text-white ">Lorem ipsum kjhgfdfghj</H4>
        <P className="text-white/90 ">
          We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.
        </P>
      </div>
    </motion.div>
  );
}

// ─── ScrollingTrack ───────────────────────────────────────────────────────────
function ScrollingTrack({
  nodes, speed, mobile = false, tablet = false,
  leftColor, rightColor, leftCostKey, rightCostKey,
  delayMs = 0,
}: ScrollingTrackProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll([leftRef, rightRef], speed, delayMs);

  const SET = [...nodes, ...nodes, ...nodes, ...nodes];
  const loopSet = [...SET, ...SET];

  const MASK_L = mobile
    ? "linear-gradient(to right, black 0%, black 30%, transparent 48%, transparent 100%)"
    : "linear-gradient(to right, black 0%, black 38%, transparent 52%, transparent 100%)";
  const MASK_R = mobile
    ? "linear-gradient(to right, transparent 0%, transparent 52%, black 70%, black 100%)"
    : "linear-gradient(to right, transparent 0%, transparent 48%, black 62%, black 100%)";

  const trackStyle: React.CSSProperties = mobile
    ? { left: "50%", top: "50%", width: "200vw", height: 200, transform: "translateX(-50%) translateY(-50%) rotate(-30deg)" }
    : tablet
      ? { left: "50%", top: "48%", width: "220vw", height: 260, transform: "translateX(-50%) rotate(-20deg)" }
      : { left: "50%", top: "35%", width: "250vw", height: 320, transform: "translateX(-50%) rotate(-20deg)" };

  const gap = mobile ? "gap-4" : tablet ? "gap-6" : "gap-10";

  return (
    <div className="absolute pointer-events-none z-[5] flex items-center overflow-hidden" style={trackStyle}>
      {/* Left layer — GREEN — upright */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ maskImage: MASK_L, WebkitMaskImage: MASK_L }}
      >
        <div ref={leftRef} className={`flex ${gap} flex-shrink-0`} style={{ willChange: "transform" }}>
          {loopSet.map((node, i) => (
            <HexNode
              key={`l-${i}`}
              label={node.label}
              iconSrc={node.iconSrc}
              cost={node[leftCostKey]}
              costColor={leftColor}
              mobile={mobile}
              tablet={tablet}
              flat={false}
              layer="left"
            />
          ))}
        </div>
      </div>

      {/* Right layer — RED — flat on grid */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ maskImage: MASK_R, WebkitMaskImage: MASK_R }}
      >
        <div ref={rightRef} className={`flex ${gap} flex-shrink-0`} style={{ willChange: "transform" }}>
          {loopSet.map((node, i) => (
            <HexNode
              key={`r-${i}`}
              label={node.label}
              iconSrc={node.iconSrc}
              cost={node[rightCostKey]}
              costColor={rightColor}
              mobile={mobile}
              tablet={tablet}
              flat={true}
              layer="right"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CloudDietHero ────────────────────────────────────────────────────────────
export default function CloudDietHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [overlapCount, setOverlapCount] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const checkOverlap = () => {
      const cloudEl = Array.from(
        document.querySelectorAll<HTMLElement>('[data-cloud-target="true"]')
      ).find(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
      if (!cloudEl) { rafId = requestAnimationFrame(checkOverlap); return; }

      const cloudRect = cloudEl.getBoundingClientRect();
      const viewCX = window.innerWidth / 2;

      const detectZone = {
        left: cloudRect.left + cloudRect.width * 0.12,
        right: cloudRect.right - cloudRect.width * 0.12,
        top: cloudRect.top + cloudRect.height * 0.12,
        bottom: cloudRect.bottom - cloudRect.height * 0.12,
      };

      const allNodes = Array.from(
        document.querySelectorAll<HTMLElement>('[data-hex-node="true"]')
      );

      let count = 0;
      allNodes.forEach(node => {
        const layer = node.getAttribute("data-hex-layer");
        const rect = node.getBoundingClientRect();
        const cx = (rect.left + rect.right) / 2;
        const cy = (rect.top + rect.bottom) / 2;

        const inVisibleRegion = layer === "left" ? cx < viewCX : cx > viewCX;
        if (!inVisibleRegion) return;
        if (cx < 0 || cx > window.innerWidth || cy < 0 || cy > window.innerHeight) return;

        if (cx > detectZone.left && cx < detectZone.right &&
          cy > detectZone.top && cy < detectZone.bottom) {
          count++;
        }
      });

      setOverlapCount(prev => prev !== count ? count : prev);
      rafId = requestAnimationFrame(checkOverlap);
    };

    rafId = requestAnimationFrame(checkOverlap);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-white text-gray-900 min-h-[60vh] font-quadran
                 lg:min-h-[100vh] max-md:h-auto max-md:flex max-md:flex-col"
    >
      {/* Target for user's static SVG background grid image */}
      <img 
        src="/CloudDiet/LandingPage/Grid.svg" 
        alt="Isometric Grid Background"
        className="absolute bottom-[-95%] right-[-10%] w-[120%] sm:w-[90%] md:w-[80%] lg:w-[65%] object-cover pointer-events-none opacity-80 z-0"
      />

      {/* Hero content */}
      <div className="relative z-[30] px-14 pt-10 max-w-[900px] max-md:px-5 max-md:pt-5 max-md:max-w-full xl:px-[160px]">
        <H1 className="mt-[60px] lg:mt-[110px] xl:mt-[130px] uppercase text-[#00A86B]">
          AI-Powered Azure<br/>Optimization Platform
        </H1>

        <P className="text-gray-700  my-4 max-w-xl lg:max-w-md">
          CloudDIET profiles your Azure resources, analyzes configurations and usage,
          and delivers recommendations that cut waste across IaaS, PaaS, and licensing.
          Enterprises save 30% on average with our pay-for-performance model.
        </P>

        <motion.div
          className="flex flex-row gap-4 w-full max-w-md max-md:gap-[10px]"
          variants={fadeUp(0.38)}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="group
flex items-center justify-center
w-auto h-[40px]
px-[20px] py-[8px]
rounded-[4px]
font-quadran font-light text-[16px]
bg-transparent border border-[#009565] text-[#009565]
shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
transition-all duration-300
hover:bg-[#009565] hover:text-white"
          >
            Request Demo
            {/* <span className="relative flex items-center w-5 h-5 ml-2">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span> */}
          </button>

          <a
            href="https://login.clouddiet.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group
          flex items-center justify-center
          w-auto h-[40px]
          px-[50px] py-[8px]
          rounded-[4px]
          font-quadran font-light text-[16px]
          bg-[#009565] text-white
        
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#056735]"
          >
            Login
            {/* <span className="relative flex items-center w-5 h-5 ml-2">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span> */}
          </a>
        </motion.div>
      </div>

      {/* Desktop visual (lg+) */}
      <div className="block max-lg:hidden">
        <ScrollingTrack
          nodes={NODES} speed={50} delayMs={0}
          leftColor="#00A86B" rightColor="#ef4444"
          leftCostKey="lowCost" rightCostKey="highCost"
        />
        <CenterImage overlapCount={overlapCount} />
        <BottomRightCard />
      </div>

      {/* Tablet visual (md–lg) */}
      <div className="hidden max-lg:block max-md:hidden">
        <ScrollingTrack
          nodes={NODES} speed={38} tablet delayMs={0}
          leftColor="#00A86B" rightColor="#ef4444"
          leftCostKey="lowCost" rightCostKey="highCost"
        />
        {/* Tablet cloud — mid-sized with glow */}
        <div
          className="absolute flex items-center justify-center z-20 pointer-events-auto
                     w-56 h-56 left-[55%] top-[55%] -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            data-cloud-target="true"
            className="relative w-full h-full"
            animate={{
              scale: 1 + Math.min(overlapCount / 2, 1) * 0.04,
              filter: overlapCount > 0
                ? `drop-shadow(0 0 ${15 + Math.min(overlapCount / 2, 1) * 25}px rgba(0,168,107,${0.15 + Math.min(overlapCount / 2, 1) * 0.25})) drop-shadow(0 10px 20px rgba(0,0,0,0.1))`
                : "drop-shadow(0 15px 30px rgba(0,0,0,0.15))",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src="/CloudDiet/LandingPage/Cloud.svg"
              alt="Cloud Dashboard"
              className="w-full h-full object-contain"
            />
            {/* <motion.div
              className="absolute inset-0 flex items-center justify-center mt-8"
              animate={{ opacity: 0.88 + Math.min(overlapCount / 2, 1) * 0.12 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/AIProduct/Text.png"
                alt="CloudDIET"
                className="object-cover w-[60%] h-[20%]"
              />
            </motion.div> */}
          </motion.div>
        </div>
        <BottomRightCard />
      </div>

      {/* Mobile visual */}
      <div className="hidden max-md:flex max-md:flex-col">
  <motion.div
    className="relative w-full overflow-hidden flex-shrink-0"
    style={{ height: 320 }}
          variants={fadeUp(0.54)}
          initial="hidden"
          animate="visible"
        >
          <ScrollingTrack
            nodes={NODES} speed={25} mobile delayMs={0}
            leftColor="#00A86B" rightColor="#ef4444"
            leftCostKey="lowCost" rightCostKey="highCost"
          />
          <div
            className="absolute z-20 pointer-events-auto flex items-center justify-center"
            style={{ left: "50%", top: "50%", width: 200, height: 200, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              data-cloud-target="true"
              className="relative w-full h-full"
              animate={{
                scale: 1 + Math.min(overlapCount / 2, 1) * 0.04,
                filter: overlapCount > 0
                  ? `drop-shadow(0 0 ${12 + Math.min(overlapCount / 2, 1) * 20}px rgba(0,168,107,${0.15 + Math.min(overlapCount / 2, 1) * 0.25})) drop-shadow(0 10px 15px rgba(0,0,0,0.1))`
                  : "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src="/CloudDiet/LandingPage/Cloud.svg"
                alt="Cloud Dashboard"
                className="w-full h-full object-contain"
              />
              {/* <motion.div
                className="absolute inset-0 flex items-center justify-center mt-8"
                animate={{ opacity: 0.88 + Math.min(overlapCount / 2, 1) * 0.12 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/AIProduct/Text.png"
                  alt="CloudDIET"
                  className="object-cover"
                  style={{ width: "60%", height: "20%" }}
                />
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Bottom Card */}
        <motion.div
          className="mx-5 p-5 mt-4 flex items-start gap-4 rounded-[18px] bg-[#00A86B] text-white shadow-xl relative z-10"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
        >
          <div
            className="w-12 h-12 flex-shrink-0 rounded-full bg-white flex items-center justify-center text-[#00A86B]"
            style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
          >
            <Check className="w-6 h-6 stroke-[3]" />
          </div>
          <div>
            <H4 className="mb-2 text-white">Lorem ipsum kjhgfdfghj</H4>
            <P className="text-white/90 ">
              We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.
            </P>
          </div>
        </motion.div>
      </div>

      {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  );
}