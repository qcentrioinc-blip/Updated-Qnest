import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/EHR-PMS/LandingPage/img1.webp";
import img2 from "/EHR-PMS/LandingPage/img2.webp";
import img3 from "/EHR-PMS/LandingPage/img3.webp";
import { H2, H4, P } from "../../../styles/Typography";

const Benefits = () => {
  const points = [
    {
      title: "Consolidated Insurance and Benefits Overview",
      desc: "View patient coverage, copays, deductibles, and active authorizations in one clean, scrollable profile to verify eligibility quickly.",
      image: img1,
    },
    {
      title: "End-to-End Claims Submission and Tracking ",
      desc: "Submit electronic claims directly and monitor their real-time status from sent to paid or denied on a single dashboard. ",
      image: img2,
    },
    {
      title: "Integrated Prior Authorization Request Management ",
      desc: "Initiate, document, and track the complete authorization workflow with built-in status updates and provider alerts for timely approvals. ",
      image: img3,
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
      className="relative w-full min-h-[150vh] lg:min-h-[350vh] lg:py-6   dark:bg-[#141414] bg-white "
    >
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center items-center">
        
        {/* Section Heading */}
        <div className="px-[40px] md:px-[60px] xl:px-[160px]mb-10 lg:mb-12">
          <H2 className="text-center    text-[#00AA72]">
            Access All Payer Data Instantly
            
          </H2>
        </div>

        {/* --- DESKTOP VIEW (lg and up) --- */}
        <div className="hidden lg:flex w-[90%] max-w-full px-[40px] md:px-[60px] xl:[80px] items-stretch gap-12">
          {/* Interactive Cards */}
         <div className="flex flex-col w-[40%] gap-4 h-full">
            {points.map((point, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    py-8 px-6 cursor-pointer transition-all duration-500 ease-out border-l-4
                    ${isActive 
                      ? "bg-[#F1F1F1] dark:bg-teal-800 border-[#00AA72] opacity-100" 
                      : "bg-transparent border-transparent opacity-50 hover:opacity-80"
                    }
                  `}
                  style={{ borderRadius: "6px" }}
                >
                  <H4 className="font-bold  dark:text-white text-xl text-[#00AA72]">
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
          <div className="w-[60%] h-full flex">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={points[activeIndex].image}
                alt={points[activeIndex].title}
                className="w-full h-full rounded-2xl shadow-2xl object-cover"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE/TABLET VIEW (Below lg) --- */}
        <div className="lg:hidden flex flex-col gap-12 w-full max-w-2xl">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col gap-6">
              {/* Text Top */}
              <div className="p-6 rounded-xl bg-[#F1F1F1] dark:bg-black border-t-4 border-[#00AA72]">
                <h3 className="font-bold text-xl dark:text-[#00AA72]   text-gray-900 mb-2">
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