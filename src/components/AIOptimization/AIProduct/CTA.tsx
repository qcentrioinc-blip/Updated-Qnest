import { useRef, memo, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import LazyVideo from "../../Global/LazyVideo";
// import { H2 } from "../../../styles/Typography";
import { H2 } from "../../../styles/Typography";

const text =
  "On average, CloudDIET customers save 30% of their Azure spend beyond existing Reserved Instances.";

const images = [
  "/AI-CloudFinOps/HomePage/cost.mp4",
  "/AI-CloudFinOps/HomePage/data-cloud.mp4",
  "/AI-CloudFinOps/HomePage/savings.mp4",
  "/AI-CloudFinOps/HomePage/saving-strategy.mp4",
];

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });

  /* --------------------------------------------------
     Image transforms (Scaled down to prevent overflow)
  -------------------------------------------------- */
  const transforms = [
    {
      x: useTransform(smoothProgress, [0, 1], [0, -470]),
      y: useTransform(smoothProgress, [0, 1], [0, -150]),
      r: -8,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, 470]),
      y: useTransform(smoothProgress, [0, 1], [0, -150]),
      r: 8,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, -470]),
      y: useTransform(smoothProgress, [0, 1], [0, 150]),
      r: 6,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, 470]),
      y: useTransform(smoothProgress, [0, 1], [0, 150]),
      r: -6,
    },
  ];

  // Pre-calculate accurate character offsets
  const words = text.split(" ");
  let cumulativeIndex = 0;
  const wordData = words.map((word) => {
    const startIndex = cumulativeIndex;
    cumulativeIndex += word.length + 1; // +1 for space
    return { word, startIndex };
  });

  const highlightStart = text.indexOf("30%");
  const highlightEnd = highlightStart + 3;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        bg-white
        min-h-[150px] lg:min-h-[500px]
        overflow-hidden
        px-[40px] md:px-[60px] xl:px-[160px]
        md:py-20 lg:py-20
        flex
        font-quadran
        items-center
        justify-center
      "
      style={{ contentVisibility: "auto" }}
    >
      {/* ================= IMAGES / VIDEOS (DESKTOP ONLY) ================= */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none bg-transparent">
        {images.map((src, i) => (
          <motion.div
            key={i}
            style={{
              x: transforms[i].x,
              y: transforms[i].y,
              rotate: transforms[i].r,
            }}
            className="
              absolute
              w-24 h-24
              xl:w-32 xl:h-32
              rounded-xl
              overflow-hidden
              bg-transparent
              will-change-transform
            "
          >
            <LazyVideo
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover bg-transparent"
            />
          </motion.div>
        ))}
      </div>

      {/* ================= TEXT ================= */}
      <div className="relative z-10 max-w-2xl lg:max-w-3xl text-center mx-auto pointer-events-auto">
        <H2 className="">
          {wordData.map(({ word, startIndex }, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-flex whitespace-nowrap mr-[0.25em]"
            >
              {word.split("").map((char, charIndex) => {
                const globalIndex = startIndex + charIndex;
                const start = globalIndex / text.length;
                const end = start + 1 / text.length;

                const isHighlight =
                  globalIndex >= highlightStart &&
                  globalIndex < highlightEnd;

                return (
                  <Character
                    key={charIndex}
                    progress={smoothProgress}
                    range={[start, end]}
                    highlight={isHighlight}
                  >
                    {char}
                  </Character>
                );
              })}
            </span>
          ))}
        </H2>
      </div>
    </section>
  );
}

/* ------------------------------
   Character component (Color Only)
-------------------------------- */
const Character = memo(function Character({
  children,
  progress,
  range,
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight?: boolean;
}) {

 
  

  return (
    <motion.span
      className={`inline-block ${
        highlight ? "font-bold tracking-tight" : ""
      } will-change-[color]`}
    >
      {children}
    </motion.span>
  );
});