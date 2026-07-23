import { useRef, useEffect, useState, memo, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { H3, H4, P } from "../../../styles/Typography";

const cards = [
  {
     title: "Deep Cloud Expertise",
        description:
            "Built by cloud engineers with decades of experience across AWS, Azure, and GCP. We understand Azure’s complexity so you don’t have to.",
    video: "/Video/1.mp4",
  },
  {
    title: "Advanced Savings Insights",
        description:
            "Move beyond basic FinOps. Our AI identifies hidden inefficiencies, from SKU optimizations to unused capacity and licensing waste.",
    video: "/Video/2.1.mp4",
  },
  {
    title: "Performance-Based Pricing",
        description:
            "You only pay a percentage of the savings we deliver. Most customers see ROI within the first month of use.",
    video: "/Video/3.mp4",
  },
];

const HEADING_TEXT = "Cloud Optimization Features That Deliver Results";

// Character "float" animation — matches the ScrollFloat reference:
// each character rises from below, starts squashed-wide/stretched-tall,
// and settles with a back.inOut-style overshoot.
const floatContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
};

const floatCharVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "15%",
    scaleY: 1.08,
    scaleX: 0.97,
  },
  visible: {
    opacity: 1,
    y: "0%",
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 0.28,
      ease: [0.25, 1, 0.4, 1], // hard, near-linear stop — minimal cushioning
    },
  },
};

// Animation variants — simple, subtle fade-in matching qcentrio.com's
// "Why Choose Qcentrio" card grid: opacity + a small rise, no blur/scale.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scaleY: 1.05,
    scaleX: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.4, 1],
    },
  },
};

// Video card - loads once triggered, plays when section visible
const VideoCard = memo(({ card, shouldLoad, isPlaying }: {
  card: typeof cards[0];
  shouldLoad: boolean;
  isPlaying: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <motion.div
      variants={cardVariants}
      
      className="
        group relative overflow-hidden
        rounded-tl-[32px]
        bg-white hover:bg-[#F7FFEC] dark:bg-slate-900
        border border-[#e4e4e4]
        md:w-[450px] md:flex-shrink-0
        lg:w-auto lg:flex-shrink lg:flex-1
      "
    >
      <div className="overflow-hidden aspect-video rounded-t-[28px] bg-gray-50 dark:bg-black flex items-center justify-center">
        {shouldLoad ? (
          <video
            ref={videoRef}
            src={card.video}
            className="w-full h-full object-contain"
            playsInline
            muted
            preload="auto"
          />
        ) : (
          <div className="w-full h-full bg-gray-100/50" />
        )}
      </div>

      <div>
        {/* Green Title Bar */}
        <div className="bg-[#009565] px-7 py-5">
          <H4 className="text-white font-semibold">
            {card.title}
          </H4>
        </div>

        {/* Description */}
        <div className="px-7 py-5">
          <P className="leading-relaxed text-black">
            {card.description}
          </P>
        </div>
      </div>
    </motion.div>
  );
});

export default function Onboarding() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const headingChars = useMemo(() => HEADING_TEXT.split(""), []);

  // Optimized Loading Logic
  useEffect(() => {
    if (!sectionRef.current) return;

    // 1. Immediate check for refresh/direct navigation
    const rect = sectionRef.current.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200;

    if (isInViewport) {
      setHasLoaded(true);
    }

    // 2. Observer for scrolling towards the section
    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasLoaded(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before
    );

    loadObserver.observe(sectionRef.current);

    // 3. Observer for Play/Pause (Strict visibility)
    const playObserver = new IntersectionObserver(
      (entries) => {
        setIsPlaying(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );

    playObserver.observe(sectionRef.current);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, []);

  return (
    <section className="dark:bg-black">
      <div
        ref={sectionRef}
        id="benefits"
        className="relative max-w-full  px-[40px]   md:px-[60px] xl:px-[160px]"
      >
        {/* Heading — character float-in */}
        <H3 className="mb-8 lg:mb-[32px] max-w-4xl mx-auto text-left xl:text-center font-semibold dark:text-white text-[#000000] overflow-hidden">
          <motion.span
            className="inline-block"
            variants={floatContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {headingChars.map((char, i) => (
              <motion.span
                key={i}
                variants={floatCharVariants}
                style={{ display: "inline-block", transformOrigin: "50% 0%" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </H3>

        {/* WHITE CONTAINER */}
        <div className="rounded-3xl">
          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="
              grid grid-cols-1 gap-8
              sm:grid-cols-2
              lg:grid-cols-3

              md:flex md:gap-6 md:overflow-x-auto
              md:-mx-6 md:px-6 md:pb-4
              md:overscroll-x-contain
              lg:overflow-visible lg:px-0 lg:mx-0
            "
          >
            {cards.map((card, i) => (
              <VideoCard
                key={i}
                card={card}
                shouldLoad={hasLoaded}
                isPlaying={isPlaying}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}