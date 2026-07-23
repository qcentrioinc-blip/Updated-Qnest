'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from 'framer-motion';


const ThreeStep = () => {
  const steps = [
    {
      number: '1',
      title: 'Duis aute irure dolor in reprehenderit',
      description:
        'Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.',
      bgColor: 'bg-black',
    },
    {
      number: '2',
      title: 'Duis aute irure dolor in reprehenderit',
      description:
        'Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.',
      bgColor: 'bg-black',
    },
    {
      number: '3',
      title: 'Duis aute irure dolor in reprehenderit',
      description:
        'Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.',
      bgColor: 'bg-black',
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  // same pattern as TextAnimation: one scrollYProgress for whole block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 1) Smooth the raw scroll first (so everything that uses it feels buttery)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,     // lower = softer
    damping: 26,        // higher = less bounce
    mass: 0.4,          // a bit heavier for inertia feel
    restDelta: 0.0001,
    restSpeed: 0.0001,
  });

  // 2) Softer springs for all Y/opacity animations
  const springConfig = {
    stiffness: 180,
    damping: 24,
    mass: 0.25,
    restDelta: 0.0001,
    restSpeed: 0.0001,
  };

  return (
    <div className="relative w-full bg-black">
      {/* ================= MOBILE + TABLET (UNCHANGED) ================= */}
      {/* Header */}
      <div className="w-full bg-black pt-16 pb-6 px-4 sm:px-6 lg:px-0 block lg:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(26px, 5vw, 32px)',
              color: '#F5F5F5',
            }}
          >
            Sed ut perspiciatis
          </h2>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 4.5vw, 30px)',
              lineHeight: '110%',
              color: '#F99526',
              whiteSpace: 'normal',
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>
        </div>
      </div>

      {/* Steps - mobile / tablet, stacked, non-sticky */}
      <div className="block lg:hidden">
        {steps.map((step, index) => (
          <section
            key={index}
            className="w-full bg-black py-12 sm:py-16 px-4 sm:px-6 border-b border-white/5 last:border-b-0"
          >
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              {/* Number */}
              <div
                style={{
                  background:
                    'linear-gradient(180deg, #a855f7 0%, #d97706 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: 'clamp(80px, 20vw, 160px)',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h4
                className="text-white"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 4.2vw, 22px)',
                  lineHeight: '120%',
                }}
              >
                {step.title}
              </h4>

              {/* Description */}
              <p
                className="text-white"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: 'clamp(15px, 3.8vw, 18px)',
                  fontWeight: 400,
                  lineHeight: '150%',
                }}
              >
                {step.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* ================= DESKTOP LAYOUT (3 STEPS, TEXTANIMATION-STYLE) ================= */}

      {/* STICKY + ANIMATED (LIKE TextAnimation BUT FOR 3 STEPS) */}
      <div
        ref={containerRef}
        className="relative h-[400vh] hidden lg:block"
      >
        <div className="sticky top-0 h-screen flex flex-col bg-black">
          {/* Header inside sticky */}
          <div className="w-full px-6 lg:px-8 xl:px-10">
            <div className="max-w-8xl mx-10 text-center pt-10 lg:pt-16">
              <h2
                className="text-3xl lg:text-4xl xl:text-[42px]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  color: '#F5F5F5',
                }}
              >
                Sed ut perspiciatis
              </h2>

              <h3
                className="text-3xl lg:text-4xl xl:text-[40px]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  lineHeight: '100%',
                  color: '#F99526',
                  whiteSpace: 'nowrap',
                }}
              >
                Unde Seduo ut perspiciatis
              </h3>
            </div>
          </div>

          {/* Animated steps area */}
          <div className="flex-1 flex items-center overflow-hidden">
            <div className="max-w-[90rem] mx-10 w-full px-6 lg:px-8 xl:px-10 relative">
              {steps.map((step, index) => (
                <AnimatedStep
                  key={index}
                  step={step}
                  index={index}
                  totalSteps={steps.length}
                  scrollYProgress={smoothProgress}  // ← use smoothed scroll
                  springConfig={springConfig}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStep;


/* ============== ANIMATED STEP (ONE OF 3 SCREENS) ============== */

type AnimatedStepProps = {
  step: {
    number: string;
    title: string;
    description: string;
    bgColor: string;
  };
  index: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
  springConfig: {
    stiffness: number;
    damping: number;
    mass: number;
    restDelta: number;
    restSpeed: number;
  };
};

const AnimatedStep = ({
  step,
  index,
  totalSteps,
  scrollYProgress,
  springConfig,
}: AnimatedStepProps) => {
  // === 1) Define global windows per step ===
  const stepWindows = [
    { start: 0.00, end: 0.30 }, // step 1 - extended range for smoother transition
    { start: 0.30, end: 0.60 }, // step 2 - extended range
    { start: 0.60, end: 0.90 }, // step 3 - extended range
  ];

  const { start, end } = stepWindows[index] || stepWindows[0];
  const rangeSize = end - start;

  const isLastStep = index === totalSteps - 1;

  // === 2) EXTENDED HOLD - exit much later ===
  const exitStart = 0.75; // start exiting at 75% of section (was 0.20)
  const exitEnd = 0.95;   // fully gone by 95% of section

  const exitY = isLastStep ? 0 : 100;
  const exitOpacity = isLastStep ? 1 : 0;

  // === 3) Split title into lines ===
  const titleWords = step.title.split(' ');
  const midPoint = Math.ceil(titleWords.length / 2);
  const titleLine1 = titleWords.slice(0, midPoint).join(' ');
  const titleLine2 = titleWords.slice(midPoint).join(' ');

  // === 4) Split description into lines ===
  const descWords = step.description.split(' ');
  const descLine1Words = descWords.slice(0, 12);
  const descLine2Words = descWords.slice(12, 24);
  const descLine3Words = descWords.slice(24);

  const descLine1 = descLine1Words.join(' ');
  const descLine2 = descLine2Words.join(' ');
  const descLine3 = descLine3Words.join(' ');

  // === 5) Create animation for each line - SMOOTHER TIMING ===
  // Title Line 1 - fast entrance, long hold, smooth exit
  const titleLine1Range = [
    start + 0.00 * rangeSize,
    start + 0.03 * rangeSize,
    start + exitStart * rangeSize, // stays visible until 75%
    start + exitEnd * rangeSize,   // exits by 95%
  ];
  const titleLine1Y = useSpring(
    useTransform(scrollYProgress, titleLine1Range, [100, 0, 0, exitY]),
    springConfig
  );
  const titleLine1Opacity = useSpring(
    useTransform(scrollYProgress, titleLine1Range, [0, 1, 1, exitOpacity]),
    springConfig
  );

  // Title Line 2
  const titleLine2Range = [
    start + 0.01 * rangeSize,
    start + 0.04 * rangeSize,
    start + exitStart * rangeSize,
    start + exitEnd * rangeSize,
  ];
  const titleLine2Y = useSpring(
    useTransform(scrollYProgress, titleLine2Range, [100, 0, 0, exitY]),
    springConfig
  );
  const titleLine2Opacity = useSpring(
    useTransform(scrollYProgress, titleLine2Range, [0, 1, 1, exitOpacity]),
    springConfig
  );

  // Description Line 1
  const descLine1Range = [
    start + 0.02 * rangeSize,
    start + 0.05 * rangeSize,
    start + exitStart * rangeSize,
    start + exitEnd * rangeSize,
  ];
  const descLine1Y = useSpring(
    useTransform(scrollYProgress, descLine1Range, [100, 0, 0, exitY]),
    springConfig
  );
  const descLine1Opacity = useSpring(
    useTransform(scrollYProgress, descLine1Range, [0, 1, 1, exitOpacity]),
    springConfig
  );

  // Description Line 2
  const descLine2Range = [
    start + 0.03 * rangeSize,
    start + 0.06 * rangeSize,
    start + exitStart * rangeSize,
    start + exitEnd * rangeSize,
  ];
  const descLine2Y = useSpring(
    useTransform(scrollYProgress, descLine2Range, [100, 0, 0, exitY]),
    springConfig
  );
  const descLine2Opacity = useSpring(
    useTransform(scrollYProgress, descLine2Range, [0, 1, 1, exitOpacity]),
    springConfig
  );

  // Description Line 3
  const descLine3Range = [
    start + 0.04 * rangeSize,
    start + 0.07 * rangeSize,
    start + exitStart * rangeSize,
    start + exitEnd * rangeSize,
  ];
  const descLine3Y = useSpring(
    useTransform(scrollYProgress, descLine3Range, [100, 0, 0, exitY]),
    springConfig
  );
  const descLine3Opacity = useSpring(
    useTransform(scrollYProgress, descLine3Range, [0, 1, 1, exitOpacity]),
    springConfig
  );

  // === 6) NUMBER (appears after text, exits with them) ===
  const numRange = [
    start + 0.09 * rangeSize,
    start + 0.15 * rangeSize,
    start + exitStart * rangeSize,
    start + exitEnd * rangeSize,
  ];
  const numberY = useSpring(
    useTransform(scrollYProgress, numRange, [100, 0, 0, exitY]),
    springConfig
  );
  const numberOpacity = useSpring(
    useTransform(scrollYProgress, numRange, [0, 1, 1, exitOpacity]),
    springConfig
  );

  // === 7) Render ===
  return (
    <div
      className={`${step.bgColor} absolute inset-0 flex items-center`}
      style={{ zIndex: index + 1 }}
    >
      <div className="w-full">
        <div
          className="
            flex 
            flex-col 
            lg:flex-row 
            items-center 
            justify-between 
            gap-10 
            lg:gap-6
            xl:gap-10
            relative
          "
        >
          {/* LEFT TITLE - split into 2 lines */}
          <div className="w-full lg:w-[240px] xl:w-[280px] text-left lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <div className="overflow-hidden mb-1">
              <motion.h4
                className="text-white text-xl lg:text-xl xl:text-[24px]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  lineHeight: '110%',
                  y: titleLine1Y,
                  opacity: titleLine1Opacity,
                }}
              >
                {titleLine1}
              </motion.h4>
            </div>

            <div className="overflow-hidden">
              <motion.h4
                className="text-white text-xl lg:text-xl xl:text-[24px]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  lineHeight: '110%',
                  y: titleLine2Y,
                  opacity: titleLine2Opacity,
                }}
              >
                {titleLine2}
              </motion.h4>
            </div>
          </div>

          {/* CENTER NUMBER */}
          <div className="flex justify-center w-full overflow-hidden">
            <motion.div style={{ y: numberY, opacity: numberOpacity }}>
              <div
                className="font-bold text-[180px] lg:text-[200px] xl:text-[260px]"
                style={{
                  background:
                    'linear-gradient(180deg, #a855f7 0%, #d97706 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>
            </motion.div>
          </div>

          {/* RIGHT DESCRIPTION - split into 3 lines */}
          <div className="w-full lg:w-[350px] xl:w-[420px] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            {descLine1 && (
              <div className="overflow-hidden mb-1">
                <motion.p
                  className="text-white text-lg lg:text-lg xl:text-[22px]"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 400,
                    lineHeight: '150%',
                    y: descLine1Y,
                    opacity: descLine1Opacity,
                  }}
                >
                  {descLine1}
                </motion.p>
              </div>
            )}

            {descLine2 && (
              <div className="overflow-hidden mb-1">
                <motion.p
                  className="text-white text-lg lg:text-lg xl:text-[22px]"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 400,
                    lineHeight: '150%',
                    y: descLine2Y,
                    opacity: descLine2Opacity,
                  }}
                >
                  {descLine2}
                </motion.p>
              </div>
            )}

            {descLine3 && (
              <div className="overflow-hidden">
                <motion.p
                  className="text-white text-lg lg:text-lg xl:text-[22px]"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 400,
                    lineHeight: '150%',
                    y: descLine3Y,
                    opacity: descLine3Opacity,
                  }}
                >
                  {descLine3}
                </motion.p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
