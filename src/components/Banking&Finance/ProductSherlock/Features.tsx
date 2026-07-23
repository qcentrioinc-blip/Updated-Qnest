"use client";
import { useState, useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { H2, H3, P } from "../../../styles/Typography";

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Transaction monitoring ",
    title: "Real-Time Transaction Monitoring System ",
    p1: "SHERLOCK integrates with core banking systems to extract transaction data continuously. Configurable rules detect anomalies in customer transaction patterns automatically. ",
    p2: "The system generates alerts for transactions that deviate from set rules. Historical data analysis identifies long-term trends and suspicious patterns over time. ",
    imageSrc: "/ProductSherlock/1.webp",
  },
  {
    id: "feature_b",
    buttonLabel: "Message screening ",
    title: "Financial Message Screening Module ",
    p1: "The module scrutinizes incoming and outgoing SWIFT messages for AML compliance. Real-time analysis detects and prevents suspicious activities before processing. ",
    p2: "Seamless integration intercepts financial messages automatically. Violations are highlighted with detailed information about the nature of each issue. ",
    imageSrc: "/ProductSherlock/2.webp",
  },
  {
    id: "feature_c",
    buttonLabel: "Watch list checking ",
    title: "Automated Watch List Checking",
    p1: "Web crawlers update banned entity lists regularly from UN, OFAC, and Federal Reserve sources. Institutions can create and manage their own custom watch lists. ",
    p2: "New transactions are checked instantly against updated lists. Alerts are generated immediately for any matches found with banned entities. ",
    imageSrc: "/ProductSherlock/3.webp",
  },
  {
    id: "feature_d",
    buttonLabel: "KYC verification ",
    title: "Complete KYC Verification Module ",
    p1: "Customer profiles are managed with detailed personal information, financial data, and transaction history. Risk profiles are assigned based on predefined criteria and customer data.  ",
    p2: "Ongoing monitoring tracks customer activity for any changes in risk status. KYC documents are stored and managed with automated renewal tracking. ",
    imageSrc: "/ProductSherlock/4.webp",
  },
  {
    id: "feature_e",
    buttonLabel: "Risk profiling ",
    title: "Full client lifecycle management",
    p1: "The module assesses and categorizes customers for money laundering risk systematically. Risk attributes and rating outcomes drive workflow rules and decisioning.  ",
    p2: "Customer risk profiles are updated continuously based on transaction behavior. Alerts are triggered when customer activity exceeds defined risk thresholds. ",
    imageSrc: "/ProductSherlock/5.webp",
  },
];

const Feature: React.FC<FeatureSwitcherProps> = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navScrollRef = useRef<HTMLDivElement>(null);
  const navBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
  });

  useEffect(() => {
      return scrollYProgress.onChange((latest) => {
          const numItems = FEATURES.length;
          const index = Math.min(Math.floor(latest * numItems), numItems - 1);
          setActiveFeatureIndex(index);
      });
  }, [scrollYProgress]);

  useEffect(() => {
      const activeIndex = activeFeatureIndex;
      const container = navScrollRef.current;
      const activeBtn = navBtnRefs.current[activeIndex];
      if (!container || !activeBtn) return;

      const containerLeft = container.getBoundingClientRect().left;
      const containerWidth = container.getBoundingClientRect().width;
      const activeLeft = activeBtn.getBoundingClientRect().left;
      const activeWidth = activeBtn.getBoundingClientRect().width;

      const activeCenterRelative = activeLeft - containerLeft + activeWidth / 2;
      const containerCenter = containerWidth / 2;
      const scrollAdjustment = activeCenterRelative - containerCenter;

      container.scrollBy({ left: scrollAdjustment, behavior: "smooth" });
  }, [activeFeatureIndex]);

  const handleNavClick = (index: number) => {
  if (!containerRef.current) return;

  const container = containerRef.current;
  const containerRect = container.getBoundingClientRect();
  const containerTop = window.scrollY + containerRect.top;
  const scrollableDistance = container.offsetHeight - window.innerHeight;

  const targetScroll = containerTop + (index / FEATURES.length) * scrollableDistance + 10;
  window.scrollTo({ top: targetScroll, behavior: "smooth" });
};

  const activeContent = FEATURES[activeFeatureIndex];

  return (
    <section className="w-full bg-white dark:bg-black relative md:h-auto">
      <div ref={containerRef} className="w-full h-[200vh]">
        <div className="sticky top-10 w-full   z-10 pt-4 pb-4">
        
          {/* Included Sticky Title */}
          <div className="w-full px-4 mb-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <H2 className="text-center text-[#00AA72] tracking-tight leading-snug mb-2 md:mb-8">
                Key features of SHERLOCK AML System 
            </H2>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden w-full overflow-hidden flex flex-col z-10 dark:bg-black bg-white">
            <div
              ref={navScrollRef}
              className="w-full overflow-x-auto scrollbar-hide shrink-0 mb-4 scroll-smooth"
            >
              <div className="flex gap-3 px-4 snap-x snap-mandatory pb-1">
                {FEATURES.map((item, index) => {
                  const isActive = index === activeFeatureIndex;
                  return (
                    <button
                      key={item.id}
                      ref={(el) => { navBtnRefs.current[index] = el; }}
                      onClick={() => handleNavClick(index)}
                      className={`flex-shrink-0 snap-start whitespace-nowrap cursor-pointer
                      py-2 px-4 rounded-full text-[12px] font-semibold transition-colors border
                      ${
                        isActive
                          ? "bg-[#00AA72] text-white border-transparent shadow-md"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      {item.buttonLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile CSS Slider Translation */}
            <div
              className="flex w-[500%] transition-transform duration-500 ease-in-out"
              style={{
                transform: `translate3d(-${activeFeatureIndex * 20}%, 0, 0)`,
              }}
            >
              {FEATURES.map((item) => (
                <div
                  key={item.id}
                  className="w-1/5 h-full flex flex-col justify-start items-start px-4 pb-4"
                >
                  <div className="w-full flex justify-center items-center mb-2 shrink-0">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full  h-[30vh] md:h-full object-fill"
                    />
                  </div>
                  <div className="w-full text-center flex flex-col gap-3 max-w-lg overflow-y-auto custom-scrollbar">
                    <H3 className="text-gray-900 dark:text-[#00AA72] tracking-tight leading-tight text-[18px]">
                      {item.title}
                    </H3>
                    <div className="flex flex-col gap-3 text-center">
                        <P className="leading-relaxed">{item.p1}</P>
                        <P className="leading-relaxed">{item.p2}</P>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:block max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {FEATURES.map((item, index) => {
                const isActive = index === activeFeatureIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(index)}
                    className={`px-6 py-4 rounded-full text-sm font-semibold transition-all font-quicksand border cursor-pointer
                    ${
                      isActive
                        ? "bg-[#00AA72] text-white shadow-md border-transparent"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                  >
                    {item.buttonLabel}
                  </button>
                );
              })}
            </div>

            {/* Image LEFT + Content RIGHT */}
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-6 flex justify-center">
                <img
                  src={activeContent.imageSrc}
                  alt={activeContent.title}
                  className="w-full max-h-[450px] object-contain transition-opacity duration-500"
                />
              </div>

              <div className="col-span-6 flex flex-col gap-6 max-h-[450px] overflow-y-auto custom-scrollbar">
                <H3 className="text-gray-900 dark:text-white text-2xl leading-tight">
                  {activeContent.title}
                </H3>
                <P className="leading-relaxed">{activeContent.p1}</P>
                <P className="leading-relaxed">{activeContent.p2}</P>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        
        /* Custom scrollbar for the text area */
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #94a3b8;
            border-radius: 4px;
            border: 2px solid #f1f5f9;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background-color: #64748b;
        }
        
        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
};

export default Feature;