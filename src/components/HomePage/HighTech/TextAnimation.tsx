'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TextAnimation = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const springConfig = {
    stiffness: 280,
    damping: 18,
    mass: 0.12,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  // First text animations - Exits Downwards
  const text1Word1Y = useSpring(
    useTransform(scrollYProgress, [0, 0.03, 0.08, 0.15], [100, 0, 0, 100]),
    springConfig
  );
  const text1Word1Opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.03, 0.08, 0.15], [0, 1, 1, 0]),
    springConfig
  );

  const text1Word2Y = useSpring(
    useTransform(scrollYProgress, [0.01, 0.04, 0.09, 0.16], [100, 0, 0, 100]),
    springConfig
  );
  const text1Word2Opacity = useSpring(
    useTransform(scrollYProgress, [0.01, 0.04, 0.09, 0.16], [0, 1, 1, 0]),
    springConfig
  );

  const text1Word3Y = useSpring(
    useTransform(scrollYProgress, [0.02, 0.05, 0.1, 0.17], [100, 0, 0, 100]),
    springConfig
  );
  const text1Word3Opacity = useSpring(
    useTransform(scrollYProgress, [0.02, 0.05, 0.1, 0.17], [0, 1, 1, 0]),
    springConfig
  );

  // Second text animations - Exits Downwards
  const text2Word1Y = useSpring(
    useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.5], [100, 0, 0, 100]),
    springConfig
  );
  const text2Word1Opacity = useSpring(
    useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.5], [0, 1, 1, 0]),
    springConfig
  );

  const text2Word2Y = useSpring(
    useTransform(scrollYProgress, [0.26, 0.31, 0.41, 0.51], [100, 0, 0, 100]),
    springConfig
  );
  const text2Word2Opacity = useSpring(
    useTransform(scrollYProgress, [0.26, 0.31, 0.41, 0.51], [0, 1, 1, 0]),
    springConfig
  );

  const text2Word3Y = useSpring(
    useTransform(scrollYProgress, [0.27, 0.32, 0.42, 0.52], [100, 0, 0, 100]),
    springConfig
  );
  const text2Word3Opacity = useSpring(
    useTransform(scrollYProgress, [0.27, 0.32, 0.42, 0.52], [0, 1, 1, 0]),
    springConfig
  );

  // Third text animations - Stays Visible
  const text3Word1Y = useSpring(
    useTransform(scrollYProgress, [0.55, 0.6, 0.7, 1], [100, 0, 0, 0]),
    springConfig
  );
  const text3Word1Opacity = useSpring(
    useTransform(scrollYProgress, [0.55, 0.6, 0.7, 1], [0, 1, 1, 1]),
    springConfig
  );

  const text3Word2Y = useSpring(
    useTransform(scrollYProgress, [0.56, 0.61, 0.71, 1], [100, 0, 0, 0]),
    springConfig
  );
  const text3Word2Opacity = useSpring(
    useTransform(scrollYProgress, [0.56, 0.61, 0.71, 1], [0, 1, 1, 1]),
    springConfig
  );

  const text3Word3Y = useSpring(
    useTransform(scrollYProgress, [0.57, 0.62, 0.72, 1], [100, 0, 0, 0]),
    springConfig
  );
  const text3Word3Opacity = useSpring(
    useTransform(scrollYProgress, [0.57, 0.62, 0.72, 1], [0, 1, 1, 1]),
    springConfig
  );

  return (
    <div className="bg-[#1A1A1A]">
      {/* ========= MOBILE + TABLET ========= */}
      <div className="block lg:hidden py-12 px-4 sm:px-6">
        {/* Top purple dot + text */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div
            className="w-4 h-4 rounded-full flex-shrink-0"
            style={{ background: '#8338EC' }}
          />
          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(14px, 3.5vw, 18px)',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: '#F5F5F5',
              opacity: 1,
            }}
          >
            Duis qute irure dolor in reprehenderit
          </p>
        </div>

        {/* Left static text + buttons */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-10">
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(26px, 7vw, 32px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#F5F5F5',
              margin: 0,
            }}
          >
            Sed ut perspiciatis
          </h2>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 7vw, 30px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#F99526',
              margin: 0,
              whiteSpace: 'normal',
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <motion.button
              className="bg-white text-black px-6 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 sm:gap-3 w-fit sm:w-fit justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '4%',
                  textTransform: 'uppercase',
                }}
              >
                BOOK A FREE DEMO
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.button>

            <motion.button
              className="border-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 sm:gap-3 w-fit sm:w-fit justify-center"
              style={{
                borderColor: '#F99526',
                color: '#F99526',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '4%',
                  textTransform: 'uppercase',
                }}
              >
                EXPLORE CASE STUDIES
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Right big text – static on mobile */}
        <div className="max-w-4xl mx-auto space-y-10">
          <p
            className="text-white text-3xl sm:text-4xl md:text-[40px] font-semibold"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              lineHeight: '120%',
              textTransform: 'uppercase',
            }}
          >
            SED UT PERSPIC <br />
            UNDE SEDUO UT <br />
            PERSPICIATIS
          </p>

          <p
            className="text-white text-3xl sm:text-4xl md:text-[40px] font-semibold"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              lineHeight: '120%',
              textTransform: 'uppercase',
            }}
          >
            IMPROVE YOUR <br />
            WEBSITE <br />
            CONVERSION
          </p>

          <p
            className="text-white text-3xl sm:text-4xl md:text-[40px] font-semibold"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              lineHeight: '120%',
              textTransform: 'uppercase',
            }}
          >
            TRANSFORM YOUR <br />
            DIGITAL <br />
            EXPERIENCE
          </p>
        </div>
      </div>

      {/* ========= DESKTOP ANIMATED LAYOUT ========= */}
      <div
        ref={containerRef}
        className="relative h-[400vh] hidden lg:block"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full">
            <div className="layout-shell-wide">
              {/* Top Purple Dot with Text */}
              <div className="flex items-center justify-center gap-4 mb-20">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ background: '#8338EC' }}
                />
                <p
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#F5F5F5',
                    opacity: 1,
                  }}
                >
                  Duis qute irure dolor in reprehenderit
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-12 xl:gap-20 items-start">
                {/* Left Side - Static Text and Buttons */}
                <div className="space-y-8">
                  <h2
                    className="text-4xl lg:text-4xl xl:text-[52px]"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 600,
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      color: '#F5F5F5',
                      opacity: 1,
                      margin: 0,
                      marginBottom: '12px',
                    }}
                  >
                    Sed ut perspiciatis
                  </h2>

                  <h3
                    className="max-w-[12ch] text-4xl lg:text-4xl xl:text-[55px] w-full"
                    style={{
                      fontFamily: "'Playfair Display', serif'",
                      fontWeight: 600,
                      fontStyle: 'italic',
                      lineHeight: '86%',
                      letterSpacing: '0%',
                      color: '#F99526',
                      opacity: 1,
                      margin: 0,
                      marginBottom: '32px',
                      maxWidth: '100%',
                      whiteSpace: 'normal',
                    }}
                  >
                    Unde Seduo ut perspiciatis
                  </h3>

                  <div className="flex flex-col gap-4">
                    <motion.a
                      href="/industries/high-tech/contactform"
                      className="bg-white text-black px-6 py-3 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-3 w-fit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <h2
                        style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontWeight: 700,
                          fontStyle: 'Bold',
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '4%',
                          color: '#2A2A2A',
                          verticalAlign: 'middle',
                          textTransform: 'uppercase',
                          opacity: 1,
                          margin: 0,
                        }}
                      >
                        BOOK A FREE DEMO
                      </h2>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </motion.a>

                    <motion.a
                      href="/industries/high-tech/resources"
                      className="border-2 px-4 py-3 lg:px-4 lg:py-3 xl:px-4 xl:py-4 rounded-xl font-bold text-sm transition-colors flex items-center gap-3 w-fit"
                      style={{
                        borderColor: '#F99526',
                        color: '#F99526',
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <h2
                        style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontWeight: 700,
                          fontStyle: 'Bold',
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '4%',
                          color: '#F99526',
                          verticalAlign: 'middle',
                          textTransform: 'uppercase',
                          opacity: 1,
                          margin: 0,
                        }}
                      >
                        EXPLORE CASE STUDIES
                      </h2>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </motion.a>
                  </div>
                </div>

                {/* Right Side - Animated Text */}
                <div className="relative flex items-start justify-start min-h-[400px]">
                  {/* First Text Set */}
                  <div className="absolute w-full max-w-[520px] 2xl:max-w-[591.5px]">
                    <div className="overflow-hidden mb-2">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text1Word1Y,
                          opacity: text1Word1Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        SED UT PERSPIC
                      </motion.div>
                    </div>

                    <div className="overflow-hidden mb-2">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text1Word2Y,
                          opacity: text1Word2Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        UNDE SEDUO UT
                      </motion.div>
                    </div>

                    <div className="overflow-hidden">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text1Word3Y,
                          opacity: text1Word3Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        PERSPICIATIS
                      </motion.div>
                    </div>
                  </div>

                  {/* Second Text Set */}
                  <div className="absolute w-full max-w-[520px] 2xl:max-w-[591.5px]">
                    <div className="overflow-hidden mb-2">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text2Word1Y,
                          opacity: text2Word1Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        IMPROVE YOUR
                      </motion.div>
                    </div>

                    <div className="overflow-hidden mb-2">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text2Word2Y,
                          opacity: text2Word2Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        WEBSITE
                      </motion.div>
                    </div>

                    <div className="overflow-hidden">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text2Word3Y,
                          opacity: text2Word3Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        CONVERSION
                      </motion.div>
                    </div>
                  </div>

                  {/* Third Text Set */}
                  <div className="absolute w-full max-w-[520px] 2xl:max-w-[591.5px]">
                    <div className="overflow-hidden mb-2">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text3Word1Y,
                          opacity: text3Word1Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        TRANSFORM
                      </motion.div>
                    </div>

                    <div className="overflow-hidden mb-2">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text3Word2Y,
                          opacity: text3Word2Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        YOUR DIGITAL
                      </motion.div>
                    </div>

                    <div className="overflow-hidden">
                      <motion.div
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          lineHeight: '120%',
                          textTransform: 'uppercase',
                          color: '#F5F5F5',
                          y: text3Word3Y,
                          opacity: text3Word3Opacity,
                        }}
                        className="text-5xl lg:text-5xl xl:text-[72px]"
                      >
                        EXPERIENCE
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
