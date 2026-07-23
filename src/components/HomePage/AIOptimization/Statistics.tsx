import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { H2, P } from "../../../styles/Typography";

const Statistics = () => {
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
    const [, setMousePos] = useState({ x: 0, y: 0 });
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
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden dark:bg-black px-[40px] md:px-[60px] xl:px-[160px]"
           
        >
            

            {/* Content Container */}
            <div className="max-w-8xl mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-0 ">
                {/* Heading */}
                <H2 className="font-bold mb-2 sm:mx-5 md:mb-6">
                    <span className="text-[#00AA72]  ">How CloudDIET Protect </span>
                    
                    <span className="text-[#00AA72]">Your <br/>Azure Environment & Data </span>
                </H2>

                {/* Counter Grid - Left Aligned */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
  {[
    { value: 0, suffix: "", text: "We analyze metadata only, never your files, databases, or apps." },
    { value: 10, suffix: "X", text: "CloudDIET never modifies resources or accesses customer data." },
    { value: 30, suffix: "%", text: "Enterprises reduce Azure spend without compromising performance." },
    { value: 256, suffix: "", text: "All data is encrypted at rest and in transit." },
  ].map((item, index) => (
    <div
      key={index}
      className="
        bg-[#F7F7F7]
        border-t-4
        border-[#00AA72]
        px-8
        py-5
        min-h-[150px]
        flex
        flex-col
        justify-between
      "
    >
      <P className="max-w-[220px] text-black">
        {item.text}
      </P>

      <div className="flex items-center gap-4">
        <img
          src="/AIOptimization/TrendUp.svg"
          alt=""
          className="w-10 h-10"
        />

        <H2 className="  font-quadran font-bold leading-none text-[#141414] ">
          {inView && (
            <CountUp
              start={0}
              end={item.value}
              duration={2}
              suffix={item.suffix}
            />
          )}
        </H2>
      </div>
    </div>
  ))}
</div>
            </div>
        </div>
    );
};

export default Statistics;