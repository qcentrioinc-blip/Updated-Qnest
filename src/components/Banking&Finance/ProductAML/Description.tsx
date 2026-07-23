import { useEffect, useRef, useState } from "react";
import { H2, H3, H4, P } from "../../../styles/Typography";

const images = [
  "/AML/Almanac1.webp",
  "/AML/Almanac4.webp",
  "/AML/Almanac10.webp",
  "/AML/Almanac8.webp",
  "/AML/Almanac7.webp",
];

const tabs = [
  "Compliance",
  "Report generation",
  "Stress testing",
  "Rate analysis",
  "G-Sec tools",
];

const contentData = [
  {
    title: "Multi-Currency Compliance for Global Operations",
    description:
      "The platform is fully multi-currency compliant, enabling banks to manage assets and liabilities across different currencies. All liquidity and interest rate tools work seamlessly with multiple currencies for global banking operations.",
      head:" Fully Multi-Currency Compliant Platform",
    para: "ALMANAC supports global banking operations with seamless multi-currency transaction handling, reporting, and analysis capabilities",
    para2:"Handles transactions, reporting, and analysis across different currencies seamlessly"
  },
  {
    title: " Comprehensive Regulatory Reporting for Compliance Requirements ",
    description:
      " ALMANAC generates complete reports for regulatory authorities including Statement of Structural Liquidity, Statement of Short-term Dynamic Liquidity, and Statement of Interest Rate Sensitivity with Traditional Gap and Modified Duration Gap analysis. ",
       head:"Automated FFIEC and OCC Regulatory Report Generation",
    para: "Generates liquidity statements, interest rate sensitivity reports, and Basel-compliant submissions required by regulatory authorities.",
    para2:"Generates reports required by regulatory authorities including liquidity statements"
  },
  {
    title: "Stress Testing for Liquidity Risk Management",
    description:
      " ALMANAC performs stress tests to simulate impact on liquidity during credit defaults, large withdrawals, and market disruptions. Assesses liquidity coverage ratio and available funding ratio to ensure banks maintain adequate liquidity under stress scenarios.",
     head:"  Comprehensive Liquidity Stress Testing",
    para: "Simulates impact of large withdrawals, credit defaults, and assesses liquidity coverage ratio and available funding ratio.",
    para2:"Simulates impact of large withdrawals and credit defaults under stress conditions"
  },
  {
    title: "Statement of Interest Rate Sensitivity with Gap Analysis",
    description:
      "Classifies interest sensitive assets and liabilities into user-defined time buckets based on maturities. Points out mismatches to help ALCO measure gaps, set limits, and decide strategy for deposit acceptance, lending periods, and investments. ",
    head:" Interest Rate Risk Analysis Tools",
    para: " Measures interest rate sensitivity with traditional gap and modified duration gap methods for balance sheet impacts. ",
    para2:"Includes traditional gap analysis and modified duration calculations "
  },
  {
    title: "Bonds Register with Duration and VaR Analysis ",
    description:
      "ALMANAC maintains fixed income bonds portfolio and provides upload of market data for analysis. Performs duration analysis, value at risk calculations, and adjusted income calculations. Simulates portfolio rearrangements under varying interest rate scenarios.",
     head:" Government Securities Portfolio Managemen",
    para: "Manages fixed income bonds portfolio with bond register, duration analysis, and value at risk calculations.",
    para2:" Manages government securities portfolios with bond registers and duration analysis "
  },
];

const Description = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = el.offsetHeight - viewportH;
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      const newIndex = Math.floor(progress * contentData.length);

      if (newIndex !== activeIndex && newIndex < contentData.length) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;

    const activeTab = container.children[activeIndex] as HTMLElement;
    if (!activeTab) return;

    activeTab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="w-full  dark:bg-black bg-[#ffffff] h-full">
      <div className="relative  h-[150vh] md:h-[200vh] xl:h-[300vh]  ">
        {/* Heading */}
        <div className="pb-4 md:pt-10 md:pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:py-6 xl:px-6 md:3xl lg:w-[95%]">
          <H2 className="text-left dark:text-[#00AA72] ">
            Key Features of ALMANAC for Financial Institutions
          </H2>
        </div>

        {/* Mobile sticky pill bar */}
        <div className="xl:hidden sticky top-0 z-20 bg-white  dark:bg-black border-b border-neutral-100 py-3 px-4 sm:px-6">
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {tabs.map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200
                  ${
                    activeIndex === index
                      ? "bg-[#00AA72] text-white"
                      : "border border-neutral-400 bg-white text-neutral-700"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile sticky content */}
        <div className="xl:hidden sticky top-[57px]  z-10 bg-white dark:bg-black px-4 sm:px-6 pt-4 pb-6 space-y-5">
          {/* Image */}
          <div className="relative w-full rounded-2xl overflow-hidden">
            <img
              src={images[activeIndex]}
              alt="Description"
              className="w-full h-[220px] sm:h-[300px] object-cover rounded-2xl"
            />
          </div>

          {/* Para */}
         
                  <div className=" flex flex-col space-y-6">
            <H4 className="dark:text-white">{contentData[activeIndex].head}</H4>
            <P className="text-[#141414]">{contentData[activeIndex].para}</P>
          
            <div className="bg-[#00AA72] p-4 rounded-2xl flex flex-row gap-x-4">
              <img src="/CheckIcon.svg" alt="alt"/>
              <P className="text-white  ">{contentData[activeIndex].para2}</P>
              </div>
              </div>
              


          {/* Title + Description */}
          <div className="space-y-2">
            <H3 className="text-[#00AA72]">
              {contentData[activeIndex].title}
            </H3>
            <P>{contentData[activeIndex].description}</P>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden xl:flex xl:sticky xl:top-0 xl:h-screen lg:items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 xl:px-8 xl:py-0">

            {/* Desktop pill buttons */}
            <div className="flex flex-wrap space-x-8 my-3">
              {tabs.map((label, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-10 py-3 w-ful text-[20px] font-quicksand rounded-full transition duration-300
                    ${
                      activeIndex === index
                        ? "bg-[#00AA72] text-white"
                        : "border border-[#00AA72] dark:border-black dark:bg-gray-200 text-black "
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Image + Overlay Content */}
            <div className="relative w-full rounded-2xl overflow-hidden">
              <img
                src={images[activeIndex]}
                alt="Description"
                className="w-full xl:w-3xl h-[450px] xl:h-[475px] object-cover rounded-2xl"
              />

              {/* Right Overlay Box — para replaces stats */}
              <div className="flex flex-col absolute top-8 right-8 xl:top-[10%] xl:right-0 border-2 border-neutral-300 rounded-md bg-white p-6 min-w-[200px] min-h-[240px] xl:min-h-[280px] max-w-[460px]">
                  <div className=" flex flex-col space-y-6">
            <H4>{contentData[activeIndex].head}</H4>
            <div className="dark:bg-gray-900 dark:p-4 rounded-lg">
               <P className="text-[#141414]">{contentData[activeIndex].para}</P>
            </div>
           
             
            <div className="bg-[#00AA72] p-4 rounded-2xl flex flex-row gap-x-4">
              <img src="/CheckIcon.svg" alt="alt"/>
              <P className="text-white ">{contentData[activeIndex].para2}</P></div>
            

          </div>

              </div>
            </div>

            {/* Bottom Content Card */}
            <div className="flex flex-row justify-between items-center gap-6 mt-4 border-2 border-neutral-300  rounded-xl px-10 py-8">
              <div className="w-1/2">
                <H3 className="text-[#00AA72]">
                  {contentData[activeIndex].title}
                </H3>
              </div>
              <div className="w-2/5 ">
                <P className=" dark:text-white">{contentData[activeIndex].description}</P>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;