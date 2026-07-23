import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/EHR-PMS/LandingPage/img1.jpg";

import { H2, H4, P } from "../../../styles/Typography";
 
const Benefits = () => {
  const points = [
    {
      title: "Comprehensive Appointment Status Dashboard",
      desc: "View every appointment's live status—from pending to completed—in one screen to optimize patient flow and staff allocation.",
      image: img1,
    },
    {
      title: "Centralized Task & Communication Hub",
      desc: "Manage all patient follow-ups, provider messages, and team assignments from a single, organized to-do list interface.",
      image: img1,
    },
    {
      title: " Filter-Driven Reporting & Analytics",
      desc: "Generate instant reports on appointments, revenue, and provider performance using dynamic filters for data-driven decisions.",
      image: img1,
    },
  ];
 
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
 
  // Scroll logic to update active index based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
 
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
 
      // Logic to calculate progress within the 300vh container
      const startOffset = vh * 0.2;
      const endOffset = rect.height - vh;
     
      const rawProgress = (startOffset - rect.top) / endOffset;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
 
      const index = Math.floor(progress * points.length);
      setActiveIndex(Math.min(index, points.length - 1));
    };
 
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
 
    return () => window.removeEventListener("scroll", onScroll);
  }, [points.length]);
 
  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[150vh] dark:bg-[#141414] lg:min-h-[350vh] lg:pt-10 pb-20   "
    >
      <div className="lg:sticky px-[40px] md:px-[60px] xl:px-[160px] lg:top-0 lg:h-screen pb-10 flex flex-col justify-center items-start">
       
        {/* Section Heading */}
        <div className="w-full max-w-2xl mb-10 lg:mt-10 lg:mb-12">
          <H2 className="text-left   text-[#00AA72]">
            Essential Tools for Clinic Administration
          </H2>
        </div>
 
        {/* --- DESKTOP VIEW (lg and up) --- */}
        <div className="hidden lg:flex w-[100%] max-w-8xl items-center gap-12">
          {/* Interactive Cards */}
          <div className="flex flex-col w-[40%] gap-1">
            {points.map((point, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    py-8 px-6 cursor-pointer transition-all duration-500 ease-out border-l-4
                    ${isActive
                      ? "bg-[#F1F1F1] dark:bg-teal-900 border-[#00AA72] opacity-100"
                      : "bg-transparent border-transparent opacity-50 hover:opacity-80"
                    }
                  `}
                  style={{ borderRadius: "6px" }}
                >
                  <H4 className="font-bold text-xl dark:text-white text-gray-900">
                    {point.title}
                  </H4>
                  <P className="mt-3 max-w-md text-gray-700">
                    {point.desc}
                  </P>
                </motion.div>
              );
            })}
          </div>
 
          {/* Dynamic Image Display */}
          <div className="w-[60%] flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={points[activeIndex].image}
                alt={points[activeIndex].title}
                className="w-full max-w-2xl h-[500px] rounded-2xl shadow-2xl object-contain"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
        </div>
 
        {/* --- MOBILE/TABLET VIEW (Below lg) --- */}
        <div className="lg:hidden flex flex-col gap-12 w-full max-w-2xl lg:max-w-full">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col gap-6">
              {/* Text Top */}
              <div className="p-6 rounded-xl  dark:bg-[#141414] bg-[#F1F1F1] border-t-4 border-[#00AA72]">
                <h3 className="font-bold dark:text-[#00AA72]   text-xl text-gray-900 mb-2">
                  {point.title}
                </h3>
                <P className="text-gray-700">{point.desc}</P>
              </div>
              {/* Image Bottom */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};
 
export default Benefits;