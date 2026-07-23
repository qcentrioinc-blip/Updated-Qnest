"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { H3 } from "../../../styles/Typography";

interface Step {
  text: string;
  bgGradient: string;
  sphereGradient: string;
}

export default function CircleSteps() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  /* --------------------------------
     WINDOW SIZE DETECTION
  --------------------------------- */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setWindowWidth(w);
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* --------------------------------
     SCROLL PROGRESS
  --------------------------------- */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* --------------------------------
     STEPS DATA
  --------------------------------- */
  const steps: Step[] = [
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      bgGradient:
        "linear-gradient(90deg, #B8A0D8 0%, #8B7AB8 20%, #7B52AB 45%, #5F3C8E 70%, #3D2456 85%, #000000 100%)",
      sphereGradient:
        "radial-gradient(circle at 30% 30%, #B366FF 0%, #8338EC 40%, #5F2BA8 70%, #3D1970 100%)",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      bgGradient:
        "linear-gradient(90deg, #000000 0%, #4A2B1A 15%, #8B5A2B 35%, #D4853D 60%, #E89D4D 100%)",
      sphereGradient:
        "radial-gradient(circle at 35% 35%, #FFB366 0%, #F99526 35%, #D47520 60%, #8B4513 85%, #3D1F0F 100%)",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      bgGradient:
        "linear-gradient(90deg, #D0D0D0 0%, #9B9B9B 25%, #6B6B6B 45%, #3A3A3A 70%, #1A1A1A 85%, #000000 100%)",
      sphereGradient:
        "radial-gradient(circle at 30% 30%, #4A4A4A 0%, #252525 35%, #111111 60%, #030008 85%, #000000 100%)",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
      bgGradient:
        "linear-gradient(90deg, #000000 0%, #4B4B4B 15%, #7B7B7B 35%, #9B9B9B 55%, #BABABA 80%, #D0D0D0 100%)",
      sphereGradient:
        "radial-gradient(circle at 35% 35%, #FFFFFF 0%, #E8E8E8 25%, #D7D7D7 45%, #AFAFAF 70%, #7A7A7A 100%)",
    },
  ];

  /* --------------------------------
     START OFFSETS (SCROLL TIMING)
  --------------------------------- */
  const startOffsets = isMobile
    ? [0, 0.12, 0.35, 0.65]
    : isTablet
    ? [0, 0.08, 0.28, 0.52]
    : [0, 0.05, 0.25, 0.45]; // DESKTOP UNCHANGED

  return (
    <div
      ref={containerRef}
      className="relative h-[250vh] md:h-[300vh] lg:h-[400vh] bg-black"
    >
      <div className="sticky top-0 overflow-hidden h-screen">

        {/* --------------------------------
            HEADING
        --------------------------------- */}
        <div className="text-center py-6 px-4">
          <H3 className="text-white">Sed ut perspiciatis</H3>
          <h3
            className="mt-2 text-[24px] md:text-[30px] lg:text-[36px]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#F99526",
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>
        </div>

        {/* --------------------------------
            STEPS
        --------------------------------- */}
        {steps.map((step, index) => {
          const fromLeft = index % 2 === 0;
          const start = startOffsets[index];
          const end = 1;

          const circleSize = isMobile ? 80 : isTablet ? 100 : 130;

          /* --------------------------------
             CIRCLE X (FIXED FOR ALL SCREENS)
          --------------------------------- */
          const circleX = useTransform(
            scrollYProgress,
            [start, end],
            isMobile
              ? fromLeft
                ? [-windowWidth * 0.3, windowWidth * 1.1]
                : [windowWidth * 1.1, -windowWidth * 0.3]
              : isTablet
              ? fromLeft
                ? [-windowWidth * 0.25, windowWidth * 1.2]
                : [windowWidth * 1.2, -windowWidth * 0.25]
              : fromLeft
              ? [-140, 1388] // DESKTOP
              : [1600, 0]    // DESKTOP
          );

          /* --------------------------------
             BACKGROUND WIPE
          --------------------------------- */
          const bgSize = useTransform(
            scrollYProgress,
            [start, end],
            ["0% 100%", "90% 100%"]
          );

          /* --------------------------------
             TEXT + BG REVEAL (SYNCED TO CIRCLE)
          --------------------------------- */
          const revealProgress = useTransform(
            circleX,
            fromLeft
              ? [
                  isMobile
                    ? windowWidth * 0.2
                    : isTablet
                    ? windowWidth * 0.25
                    : 400,
                  isMobile
                    ? windowWidth * 0.7
                    : isTablet
                    ? windowWidth * 0.75
                    : 1000,
                ]
              : [
                  isMobile
                    ? windowWidth * 0.7
                    : isTablet
                    ? windowWidth * 0.75
                    : 900,
                  isMobile
                    ? windowWidth * 0.2
                    : isTablet
                    ? windowWidth * 0.25
                    : 400,
                ],
            [0, 1]
          );

          const clipPath = useTransform(revealProgress, (v) =>
            fromLeft
              ? `inset(0 ${100 - v * 100}% 0 0)`
              : `inset(0 0 0 ${100 - v * 100}%)`
          );

          return (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              style={{
                height: isMobile ? "100px" : isTablet ? "120px" : "144px",
                backgroundImage: step.bgGradient,
                backgroundRepeat: "no-repeat",
                backgroundSize: bgSize,
                backgroundPosition: fromLeft ? "left center" : "right center",
              }}
            >
              {/* TEXT */}
              <div className="w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-12">
                <motion.p
                  style={{ clipPath }}
                  className="text-white max-w-2xl font-bold font-quadran  
                             text-sm md:text-lg lg:text-[29px] text-center"
                >
                  {step.text}
                </motion.p>
              </div>

              {/* CIRCLE */}
              <motion.div
                style={{
                  x: circleX,
                  background: step.sphereGradient,
                  width: circleSize,
                  height: circleSize,
                }}
                className="absolute top-0 bottom-0 my-auto rounded-full"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
