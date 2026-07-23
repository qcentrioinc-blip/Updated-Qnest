import { useRef, memo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
// import LazyVideo from "../../Global/LazyVideo";
// import { H2 } from "../../../styles/Typography";
import { H2 } from "../../../styles/Typography";

const text =
  "On average, CloudDIET customers save 30% of their Azure spend beyond existing Reserved Instances.";

const images = [
  "/CloudDiet/HomePage/low_price.svg",
  "/CloudDiet/HomePage/idea.svg",
  "/CloudDiet/HomePage/web_optimization.svg",
  "/CloudDiet/HomePage/sales_marketing.svg",
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
      x: useTransform(smoothProgress, [0, 1], [0, -550]),
      y: useTransform(smoothProgress, [0, 1], [0, - 100]),
      r: -8,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, 550]),
      y: useTransform(smoothProgress, [0, 1], [0, - 100]),
      r: 8,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, -550]),
      y: useTransform(smoothProgress, [0, 1], [0,  100]),
      r: 6,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, 550]),
      y: useTransform(smoothProgress, [0, 1], [0,  100]),
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
        bg-[#5CAE8326]
        min-h-[150px] lg:min-h-[350px]
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
              w-18 h-18
              xl:w-24 xl:h-24
              rounded-xl
              overflow-hidden
              bg-transparent
              will-change-transform
            "
          >
            <motion.img
  src={src}
  alt=""
  className="w-full h-full object-contain"
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
        highlight
          ? "text-[#009565] font-extrabold tracking-tight"
          : "text-black"
      } will-change-[color]`}
    >
      {children}
    </motion.span>
  );
});