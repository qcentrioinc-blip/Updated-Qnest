import React from "react";
import { H2, H4, P } from "../../../styles/Typography";

interface CardItem {
  id: number;
  icon: string;
  title: string;
  text: string;
}

const cardData: CardItem[] = [
  {
    id: 1,
    icon: "🚀",
    title: "Future-Proof Your Career",
    text: "We offer continuous learning and development programs, ensuring you stay ahead of the curve in a rapidly evolving technological landscape.",
  },
  {
    id: 2,
    icon: "🌍",
    title: "Global Impact, Local Team",
    text: "We offer continuous learning and development programs, ensuring you stay ahead of the curve in a rapidly evolving technological landscape.",
  },
  {
    id: 3,
    icon: "💡",
    title: "Autonomy and Innovation",
    text: "We offer continuous learning and development programs, ensuring you stay ahead of the curve in a rapidly evolving technological landscape.",
  },
];

const CareerSec: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black  flex flex-col justify-center items-center py-16 px-10 md:py-20 lg:py-24 overflow-hidden">

    <img
        src="/HighTech/Careers/shape1.png"
        alt="Background shape"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-6 flex flex-col gap-10 sm:gap-12 lg:gap-16 ">
        {/* Headings + Paragraph Container */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-10">
          {/* Left: Headings */}
          <div className="flex flex-col whitespace-nowrap">
            <H2 className="text-[#F5F5F5] leading-tight">Sed ut perspiciatis</H2>
            <H2 className="text-[#F99526] italic mt-2 md:mt-3 leading-tight">
              Unde Seduo ut perspiciatis
            </H2>
          </div>

          {/* Right: Paragraph */}
          <P className="text-[#CCCCCC] max-w-md mt-4 md:mt-0">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </div>

        {/* Cards Container */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 z-10 
            gap-6 sm:gap-6 md:gap-8 
            justify-items-center
          "
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="
                bg-white rounded-xl shadow-md p-6 
                w-full sm:w-[calc(100%-12px)] md:w-full lg:w-full 
                min-h-[320px] md:min-h-[400px] lg:min-h-[420px] xl:h-[500px] 
                flex flex-col transition-transform duration-300 
                hover:scale-105 hover:shadow-lg
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl mb-6">
                {/* {card.icon} */}
              </div>

              {/* Card Content */}
              <H4 className="text-black font-bold mt-auto leading-relaxed">
                {card.text}
              </H4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSec;
