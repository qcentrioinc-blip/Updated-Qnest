import React, { useState, useEffect, useRef } from "react";
import { H2 } from "../../../styles/Typography";

const CounterCard = React.memo(({
  number,
  suffix = "",
  // title,
  description,
  dark,
}: {
  number: number;
  suffix?: string;
  title: string;
  description: string;
  dark?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(counter);
      } else {
        if (number % 1 !== 0) {
          setCount(parseFloat(start.toFixed(1)));
        } else {
          setCount(Math.floor(start));
        }
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isVisible, number]);

  return (
    <div
      ref={ref}
      className={`rounded-xl   transition-all duration-300  p-4   sm:p-6 text-start cursor-pointer border-2 border-gray-200
        ${dark ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"}
      `}
    >
      {/* <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-2 sm:pt-4 font-bold text-blue-500">
        {count}
        {suffix}
      </h2> */}

      <H2 className="text-[#8338EC]  sm:pt-4  sm:mb-8">

        {count}
        {suffix}
      </H2>
      {/* <h3 className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 font-semibold text-sm sm:text-base">{title}</h3> */}
      {/* <H4 className=" mt-8 sm:mt-10 md:mt-18 lg:mt-20 ">
        {title}
      </H4> */}
      {/* <p className="text-xs sm:text-sm">{description}</p> */}
      <p className="max-w-[90%] font-quicksand text-[16px] font-bold  md:pt-16 md:pb-0">

        {description}
      </p >
    </div>
  );
});

const Counter = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-8xl lg:mx-10 text-center mb-8 sm:mb-12 px-4 ">
        {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Lorem ipsum dolor sit amet consectetur</h2> */}
        <H2>
          Results That Prove Our Impact
        </H2>
        {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Behind every number is a team achieving more — see how high-performing workflows,
          speed, and satisfaction come together.
        </p> */}
        {/* <P className="text-black">
          Behind every number is a team achieving more — see how high-performing workflows,
          speed, and satisfaction come together.
        </P> */}
      </div>
      <div className="w-full     px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-h-[200px] sm:min-h-[240px] md:min-h-[300px]">
          <CounterCard
            number={25}
            suffix="K+"
            title="Emily"
            description="Businesses supported with AI, CRM, HRM, and cloud solutions. "
            dark
          />
          <CounterCard
            number={5}
            suffix="X"
            title="Emily"
            description="Average improvement in delivery speed for digital initiatives. "
            dark
          />
          <CounterCard
            number={92}
            suffix="%"
            title="Emily"
            description="Client satisfaction across completed projects and ongoing engagements. "
            dark
          />
        </div>
      </div>
    </section>
  );
};

export default Counter;