import { useState, useEffect, useRef, useContext, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollContext } from "../../../context/ScrollContext";
import { H2 } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
import { Link } from "react-router-dom";
import { useTheme } from "../../Global/ThemeContext";

const PRIMARY_COLOR = "#00AA72";

 


// const LIGHT_BLUE_BG = "#C1D7F3";
const LIGHT_BG_COLORS = [
  "#FFFFFF",
  "#DCEAFF",
  "#ADCEFF",
  "#78A6EC",
  "#00AA72",
];

const DARK_BG_COLORS = [
  "#1A3E75",
  "#112A4E",
  "#0D1F3B",
  "#091527",
  "#040A14",
];


const steps = [
  {
    id: 1,
    title:
      "Supports e-cash, e-wallets, and e-cheques for modern payment needs ",
    image:
      "/Pago/1FEATURE.webp",
  },
  {
    id: 2,
    title:
      "Atomicity ensures that payments either complete or fail immediately ",
    image:
      "/Pago/2FEATURE.webp",
  },
  {
    id: 3,
    title:
      "Real-time monitoring with advanced fraud detection and security protocols ",
    image:
      "/Pago/3FEATURE.webp",
  },
  {
    id: 4,
    title:
      "Seamless integration with core banking through account setup and configuration and existing financial systems. ",
    image:
      "/Pago/4FEATURE.webp",
  },
  {
    id: 5,
    title:
      "The Business Report screenshot shows report generation and PDF export. Content is accurate and aligns well.  ",
    image:
      "/Pago/5FEATURE.webp",
  },
];
 

export default function Workflow() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeStep, setActiveStep] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollableContainerRef = useContext(ScrollContext);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768); // md breakpoint
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

 
  useEffect(() => {
    const lenis = scrollableContainerRef;
    if (!lenis) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      const sectionProgress = (viewportCenter - sectionRect.top) / sectionRect.height;

      setScrollProgress(sectionProgress);

      // Map progress to step (1 to 5)
      const stepProgress = Math.min(
        Math.max(sectionProgress * steps.length, 0),
        steps.length - 0.01
      );
      const newActiveStep = Math.floor(stepProgress) + 1;

      setActiveStep(newActiveStep);
    };

    lenis.on("scroll", handleScroll);
    handleScroll();

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [scrollableContainerRef]);
 
const backgroundColor = useMemo(() => {
  if (isMobile) return isDark ? "#1A3E75" : "#C1D7F3";

  const p = Math.min(Math.max(scrollProgress, 0), 1);

  const colors = isDark ? DARK_BG_COLORS : LIGHT_BG_COLORS;

  const index = Math.floor(p * colors.length);

  return colors[Math.min(index, colors.length - 1)];
}, [scrollProgress, isMobile, isDark]);

const textColor = useMemo(() => {
  if (isDark) return "#FFFFFF";

  const p = Math.min(Math.max(scrollProgress, 0), 1);
  const index = Math.floor(p * LIGHT_BG_COLORS.length);

  // Map each bg to correct text
  const TEXT_COLORS = [
    "#111827", // #FFFFFF
    "#111827", // #DCEAFF
    "#111827", // #ADCEFF
    "#111827", // #78A6EC (still light!)
    "#111827", // #00AA72 (dark → white text)
  ];

  return TEXT_COLORS[Math.min(index, TEXT_COLORS.length - 1)];
}, [scrollProgress, isDark]);

  // const backgroundGradient = useMemo(() => {
  //   const progress = scrollProgress;

  //   const start = { r: 193, g: 215, b: 243 };

  //   const end = { r: 100, g: 100, b: 255 };

  //   const r = Math.round(start.r + (end.r - start.r) * progress);
  //   const g = Math.round(start.g + (end.g - start.g) * progress);
  //   const b = Math.round(start.b + (end.b - start.b) * progress);

  //   return `rgb(${r}, ${g}, ${b})`;
  // }, [scrollProgress]);

  return (
    <motion.div
      ref={sectionRef}
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 0.4s ease-out",
      }}
      className="w-full relative  pb-10  min-h-full md:min-h-[200vh] xl:min-h-[400vh]"
    >

      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center text-center  pt-16 pb-10 lg:pb-16 px-6 md:px-20">
        <H2
 style={{ color: textColor }} 
          className="   mb-6 leading-snug"
        >
          Complete Payment and Settlement System <br />for Financial Institutions
        </H2>
        <motion.p
         style={{ color: textColor }} 
          className="  font-quicksand text-[18px] text-white    max-w-4xl transition-colors duration-300"
        >
          PAGO is a versatile payment platform designed to streamline and secure payment processes. It supports multiple transaction methods, including e-cash and e-cheques. The system integrates seamlessly with existing financial infrastructure while providing real-time monitoring and detailed reporting.
        </motion.p>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden px-6 space-y-10">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center space-y-4">

            {/* Step Title */}
            <h3 style={{color:textColor}} className="text-[16px] font-quadran   leading-snug text-[#111827]">
              {step.title}
            </h3>

            {/* Step Image */}
            <div className="w-full h-[220px] rounded-xl overflow-hidden shadow-md">
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        ))}

        {/* CTA */}
        <Link
          to="#contact-us"
          onClick={(e) => {
            const el = document.getElementById("contact-us");
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ContactUs className="w-full flex items-center justify-center gap-2 text-black">
            Explore PAGO Features
          </ContactUs>
        </Link>
      </div>

      {/* Sticky Content Container */}
      <div className="sticky top-10 xl:h-screen hidden md:flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8  items-center px-6 xl:px-6">

          {/* LEFT SIDE - Sticky Image */}
          <div className="h-[400px] md:h-[550px] xl:h-[600px] pb-6 xl:pb-0 order-1 md:order-0">
            <div className="w-full h-full rounded-xl overflow-hidden  l">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep - 1]?.image}
                  alt={`Step ${activeStep}`}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
          {/* RIGHT SIDE - All 5 Steps in View */}
          <div className="flex flex-col relative space-y-4 xl:space-y-8 mt-6">
            {/* Connecting line */}
            <div
              style={{ backgroundColor: "black" }}
              className="absolute left-8 md:top-8 lg:top-2 bottom-30 w-[2px] rounded-full   hidden md:block"
            />

            {steps.map((step, index) => {
              const isActive = step.id === activeStep;
              return (
                <motion.div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="flex items-center gap-4 xl:mb-10    text-[16px] font-quadran   md:gap-8 relative z-10"
                >
                  {/* Circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 0.8,
                      backgroundColor: isActive ? PRIMARY_COLOR : "white",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      color: isActive ? "white" : PRIMARY_COLOR,
                      boxShadow: isActive
                        ? "0 4px 20px rgba(66, 133, 244, 0.4)"
                        : "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg shrink-0"
                  >
                    {step.id}
                  </motion.div>

                  {/* Step Content */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? "white" : "transparent",
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
    flex-1 rounded-lg flex items-center
    ${isActive ? "shadow-md" : ""}
   
    /* Responsive padding */
    ${isActive
                        ? "px-3 py-2 sm:px-4 sm:py-3 md:px-2 md:py-2 lg:px-8 lg:py-5"
                        : "px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-5 lg:py-3"
                      }`}
                  >
                    <motion.h3
                      
                         style={{
   color: isActive ? "#111827" : textColor
  }}
                      className={`  leading-tight  lg:text-[18px]   transition-colors duration-300 ${isActive ? "font-quadran  " : ""
                        }`}
                    >
                      {step.title}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Book A Demo Button */}
            <div className=" md:pl-4 ">


              <Link
                to="#contact-us"
                onClick={(e) => {
                  const el = document.getElementById("contact-us");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <ContactUs className="w-full flex items-center justify-center gap-2 text-black">
                  Explore PAGO Features
                </ContactUs>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}