import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { H2, P } from "../../styles/Typography";

const Counter = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger counters on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Mouse glow movement
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
  ref={sectionRef}
  onMouseDown={(e) => e.preventDefault()}
  onMouseMove={handleMouseMove}
  className="relative overflow-hidden py-6 md:py-10 select-none dark:bg-gradient-to-r- dark:from-[#000000] dark:to-[#141414] bg-gradient-to-r from-[#00AA724D] to-[#E8F2FF]"
>
      {/* Glow effect following mouse */}
      <motion.div
      className="absolute w-[100px] h-[100px] rounded-full blur-3xl bg-[#E8F2FF] pointer-events-none will-change-transform"
        animate={{
          x: mousePos.x - 60,
          y: mousePos.y - 60,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />

      {/* Content Container */}
      <div className="max-w-7xl   mx-auto  px-8 lg:px-10 xl:px-6">
        {/* Heading */}
        <H2 className="  font-bold mb-12  lg:mx-6 md:mt-10 md:mb-16">
          <span className="text-[#00AA72]">Trusted by financial institutions  </span>
          <br className="xl:block hidden"/>
          <span className="text-[#333333] dark:text-white">across the globe</span>
        </H2>

        {/* Counter Grid - Left Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#5A5A5A] [&>*]:border-r-0 sm:[&>*:nth-child(odd)]:border-r lg:[&>*:not(:last-child)]:border-r">          {[
          { value: 80, suffix: "%", text: "Employee trust index score reflecting our people-first culture " },
          { value: 10, suffix: "X", text: "Industry experience serving banking and financial clients worldwide " },
          { value: 3.5, suffix: "%", text: "Skilled professionals delivering solutions across ten global offices " },
          { value: 125, suffix: "", text: "Straight-through processing rate achieved by clients using our platforms " },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start md:pl-10 py-4 lg:py-0 mb-0 sm:mb-10 px-0   lg:px-8"
          >
            {/* Text above */}
            <P className="text-[#141414] mb-[30px]  lg:mb-[40px] max-w-[240px]">
              {item.text}
            </P>

            {/* Counter with Icon */}
            <div className="flex items-center  gap-3 md:gap-4">
              <img
                src="/TrendUp.svg"
                alt="Trend icon"
                className="h-12 md:h-14 lg:h-18"
              />
              <h2 className="   text-[#141414]  dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-quadran  ">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    decimals={item.value % 1 !== 0 ? 1 : 0}
                    suffix={item.suffix}
                  />
                )}
              </h2>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;