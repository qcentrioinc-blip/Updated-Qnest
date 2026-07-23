import { useState } from "react";
import { H1, H3, } from "../../../styles/Typography";
import { Link } from "react-router-dom";
// import Navbar from "../../Global/Navbar/Navbar";

const industries = [
  {
    id: "01",
    title: "Banking & Finance",
    stat: "30%",
    description: "Cost Savings vs. Human Agents",
    image:
      "/Global/Banking.webp",
          link: "/industries/banking-and-finance",
  },
  {
    id: "02",
    title: "Unified Healthcare",
    stat: "92%",
    description: "Patient Satisfaction Improvement",
    image:
      "/Global/EHR.webp",
      link: "/industries/ehr-and-pms",
  },
  {
    id: "03",
    title: "Cloud FinOps",
    stat: "45%",
    description: "Cloud Cost Optimization",
    image:
      "/Global/Cloud.webp",
        link: "/industries/cloud-finops-ai",
  },
//   {
//     id: "04",
//     title: "AI Operations"
//     stat: "3x",
//     description: "Operational Efficiency Gain",
//     image:
//       "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1800&auto=format&fit=crop",
//   },
];

const MainHero = () => {
  const [active, setActive] = useState(2);

  return (
    <>
    {/* <Navbar/> */}
    <section className="w-full min-h-screen bg-transparent">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Content */}
        <div className="w-full lg:w-[28%] bg-[#f5f5f5] flex flex-col  p-6 sm:p-8 lg:p-12">
          <div className="flex items-center justify-center">
            <H1 className="font-bold tracking-tight">
           
              Shaping Future 
           

              <span className="block text-[#1f8fff]  mt-2">
                Powerful Impact
              </span>

            </H1>
          </div>

          <div className="hidden md:flex items-center justify-center py-10">
            <div className="grid grid-cols-4 gap-2 opacity-70">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-sm bg-gradient-to-br from-green-400 to-blue-200 blur-[1px]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Accordion Panels */}
        <div className="flex flex-1 overflow-hidden">
          {industries.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActive(index)}
                className={`
                  relative overflow-hidden cursor-pointer
                 transition-[flex-grow] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                  border-l border-white/10
                  ${isActive ? "flex-[4]" : "flex-1"}
                `}
              >
                {/* Background Image */}
               {/* Base Gradient */}
<div
  className={`
    absolute inset-0
    bg-gradient-to-b
    from-[#168AE2]
    via-[#175cd3]
    to-[#0f3f94]
    transition-all duration-700
  `}
/>

{/* Image Layer */}
<img
  src={item.image}
  alt={item.title}
  className={`
    absolute inset-0 h-full w-full object-cover
    transition-all duration-1000 ease-out
    ${
      isActive
        ? "opacity-100 scale-105"
        : "opacity-0 scale-105"
    }
  `}
/>

{/* Dark Overlay */}
<div
  className={`
    absolute inset-0 bg-black/0
    transition-opacity duration-700
    ${isActive ? "opacity-100" : "opacity-0"}
  `}
/>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Number */}
                <div className="absolute top-10 left-10 z-20">
                  <span className="text-white text-xl md:text-2xl font-medium">
                    {item.id}
                  </span>
                </div>

                {/* Vertical Title when collapsed */}
                {!isActive && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                    <H3
                      className="
                        text-white text-sm uppercase tracking-[0.3em]
                        [writing-mode:vertical-rl]
                      "
                    >
                      {item.title}
                    </H3>
                  </div>
                )}

                {/* Expanded Content */}
                <div
                  className={`
                    absolute bottom-12 left-10 z-20
                    transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                >
                  <H1 className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold">
                    {item.stat}
                  </H1>

                  <p className="text-white text-lg md:text-2xl mt-3">
                    {item.description}
                  </p>

                  <div className="mt-6">
                    <Link
  to={item.link}
  className="inline-flex items-center gap-2 text-white border border-white/30 px-5 py-3 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all"
>
  Explore Industry
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 5l7 7-7 7"
    />
  </svg>
</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4 space-y-4">
        {industries.map((item) => (
          <div
            key={item.id}
            className="relative rounded-3xl overflow-hidden h-[320px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6">
              <div className="text-white text-sm mb-2">{item.id}</div>
              <h3 className="text-white text-4xl font-bold">
                {item.stat}
              </h3>
              <p className="text-white/90">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default MainHero;