import { H2, H4, P } from "../../../styles/Typography";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import React from 'react'; // Import React for component typing

const KeyBenefits: React.FC = () => {
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);

  // Trigger when 70% of section enters viewport
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -80% 0px",
  });

  // Smooth scaling based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newScale = Math.min(Math.max(width / 1400, 0.55), 1);
      setScale(newScale);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Variants for non-center cards (expand height)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scaleY: 0.4 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  // Variant for center card (expand width)
  const centerCardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scaleX: 0.4 },
    visible: {
      opacity: 1,
      y: 0,
      scaleX: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000000] text-white flex flex-col items-center justify-center overflow-hidden py-16 px-4"
    >
      {/* Title */}
      <div className="max-w-7xl w-full md:ml-[100px] mb-10 md:mb-[-90px] lg:mb-10 text-center md:text-left">
        <H2>Sed ut perspiciatis</H2>
        <H2 className="text-[#F99526] mt-1">Unde Seduo ut perspiciatis</H2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full justify-start items-center overflow-visible">
        <motion.div
          className="relative transition-transform duration-300 ease-in-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "left center",
            width: "1400px",
            height: "720px",
          }}
        >
          {/* Top-Left */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute bg-[#F99526] text-black flex flex-col items-center justify-center text-center shadow-md z-10 origin-bottom"
            style={{
              width: "420px",
              height: "236px",
              top: "2px",
              left: "90px",
              padding: "59px 69px",
              borderRadius: "324px",
            }}
          >
            <H4 className="mb-2">Health & Wellness</H4>
            <P>
              Comprehensive health insurance, mental health support, wellness
              programs, and fitness benefits.
            </P>
          </motion.div>

          {/* Bottom-Left */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute bg-white text-black flex flex-col items-center justify-center text-center shadow-md origin-bottom"
            style={{
              width: "391px",
              height: "451px",
              top: "238px",
              left: "90px",
              borderRadius: "69px",
              padding: "48px",
            }}
          >
            <H4 className="mb-2">Learning & Development</H4>
            <P>
              Continuous learning opportunities, conference budgets, skill
              development courses, and career growth paths.
            </P>
          </motion.div>

          {/* Center */}
          <motion.div
            variants={centerCardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute bg-[#444444] flex flex-col items-center justify-center text-center text-white shadow-md origin-bottom"
            style={{
              width: "484px",
              height: "687px",
              top: "2px",
              left: "481px",
              borderRadius: "324px",
              padding: "235px 86px",
            }}
          >
            <H4 className="mb-4">Work-Life Balance</H4>
            <P className="text-white/80">
              Flexible working hours, remote work options, unlimited PTO, family
              leave policies, and work-life integration support.
            </P>
          </motion.div>

          {/* Top-Right */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute bg-[#ededed] text-black flex flex-col items-center justify-center text-center shadow-md origin-bottom"
            style={{
              width: "391px",
              height: "451px",
              top: "0px",
              left: "965px",
              borderRadius: "69px",
              padding: "48px",
            }}
          >
            <H4 className="mb-2">Financial Benefits</H4>
            <P>
              Competitive salary, stock options, retirement plans, bonus
              structures, and financial planning services.
            </P>
          </motion.div>

          {/* Bottom-Right */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute bg-[#7B2FF2] text-black flex flex-col items-center justify-center text-center shadow-md origin-bottom"
            style={{
              width: "423px",
              height: "236px",
              top: "453px",
              left: "933px",
              borderRadius: "324px",
              padding: "59px 69px",
            }}
          >
            <H4 className="mb-2">Team & Culture</H4>
            <P>
              Collaborative environment, team building activities, inclusive
              culture, and community engagement opportunities.
            </P>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile layout unchanged */}
      <div className="flex flex-col gap-6 items-center md:hidden w-full max-w-md">
        <div className="bg-[#F99526] text-black rounded-full p-8 w-full text-center">
          <H4 className="mb-2">Health & Wellness</H4>
          <P>
            Comprehensive health insurance, mental health support, wellness
            programs, and fitness benefits.
          </P>
        </div>

        <div className="bg-white text-black rounded-[69px] p-8 w-full text-center">
          <H4 className="mb-2">Learning & Development</H4>
          <P>
            Continuous learning opportunities, conference budgets, skill
            development courses, and career growth paths.
          </P>
        </div>

        <div className="bg-[#444444] text-white rounded-full p-10 w-full text-center">
          <H4 className="mb-4">Work-Life Balance</H4>
          <P className="text-white/80">
            Flexible working hours, remote work options, unlimited PTO, family
            leave policies, and work-life integration support.
          </P>
        </div>

        <div className="bg-[#ededed] text-black rounded-[69px] p-8 w-full text-center">
          <H4 className="mb-2">Financial Benefits</H4>
          <P>
            Competitive salary, stock options, retirement plans, bonus
            structures, and financial planning services.
          </P>
        </div>

        <div className="bg-[#7B2FF2] text-white rounded-full p-8 w-full text-center">
          <H4 className="mb-2">Team & Culture</H4>
          <P>
            Collaborative environment, team building activities, inclusive
            culture, and community engagement opportunities.
          </P>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;