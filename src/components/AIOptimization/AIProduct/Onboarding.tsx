import { useRef, useEffect, useState, memo, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { H3, H4, P } from "../../../styles/Typography";

const cards = [
  {
    title: "Potential Savings",
    desc: "Instantly view potential savings categorized by implementation effort, easy, medium, and hard. Target 60–70% savings within six weeks.",
    image: "/CloudDiet/HomePage/Onboarding1.webp",
  },
  {
    title: "Cost Transparency",
    desc: "Gain deeper cost insights than native tools. Break down spending by environment, division, service, and resource configuration.",
    image: "/CloudDiet/HomePage/Onboarding2.webp",
  },
  {
    title: "Savings Plans",
    desc: "Make informed decisions with what-if analyses for Reserved Instances and Savings Plans. Optimize commitments for maximum long-term value.",
    image: "/CloudDiet/HomePage/Onboarding3.webp",
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

// Image card - displays image instead of video
const ImageCard = memo(({ card, shouldLoad }: {
  card: typeof cards[0];
  shouldLoad: boolean;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      
      className="
        group relative overflow-hidden
        rounded-tl-[32px]
        bg-white hover:bg-[#F7FFEC] 
        border border-[#e4e4e4]
        md:w-[450px] md:flex-shrink-0
        lg:w-auto lg:flex-shrink lg:flex-1
      "
    >
      <div className="overflow-hidden aspect-video bg-gray-50  flex items-center justify-center">
        {shouldLoad ? (
          <img
            src={card.image}
            alt={card.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
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
            {card.desc}
          </P>
        </div>
      </div>
    </motion.div>
  );
});

export default function Onboarding() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

    return () => {
      loadObserver.disconnect();
    };
  }, []);

  // Check scroll position for arrow visibility
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector(".group")?.clientWidth || 450;
    const gap = 24; // gap-6
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className=" relative">
      <div
        ref={sectionRef}
        id="benefits"
        className="relative max-w-full py-10 px-[40px] md:px-[60px] xl:px-[160px]"
      >
        {/* Heading — character float-in */}
        <H3 className="mb-8 lg:mb-[32px] max-w-4xl mx-auto text-left xl:text-center font-semibold  text-[#000000] overflow-hidden">
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
        <div className="rounded-3xl relative">
          {/* Navigation Arrows - Only visible on smaller screens */}
          <div className="md:hidden absolute -top-12 right-0 z-10 flex gap-2">
            <button
              onClick={() => scroll("left")}
              className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity duration-300 border border-gray-200  ${
                showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 text-gray-700 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className={`w-10 h-10 rounded-full bg-white  shadow-lg flex items-center justify-center transition-opacity duration-300 border border-gray-200  ${
                showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 text-gray-700 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Cards */}
          <motion.div
            ref={scrollContainerRef}
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
              <ImageCard
                key={i}
                card={card}
                shouldLoad={hasLoaded}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}