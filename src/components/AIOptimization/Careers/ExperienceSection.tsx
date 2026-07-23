"use client";

import { H2, P } from "../../../styles/Typography";
const stats = [
  {
    title: "150+ Team Tech Years",
    description: "Engineers bring decades of cloud AI expertise",
  },
  {
    title: "95% Employee Retention Rate",
    description: "Low turnover shows strong culture and growth paths. ",
  },
  {
    title: "100+ Internal Trainings Yearly",
    description: "Qcentrio Academy builds skills in latest tech. ",
  },
];

const images = [
  "/AI/Careers/img5.png",
  "/AI/Careers/img6.png",
  "/AI/Careers/img7.png",
  "/AI/Careers/img8.png",
  "/AI/Careers/img9.png",
];

export default function ExperienceSection() {
  return (
    <section className="max-w-8xl bg-[#020059] py-20">
      <div className="text-white">

        {/* -------------------------------------------------- */}
        {/* TOP TEXT CONTAINER (UNCHANGED) */}
        {/* -------------------------------------------------- */}
        <div className="max-w-8xl mx-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20 px-6 md:px-12 lg:px-24">
         {stats.map((item, i) => (
  <div key={i}>
    <H2 className="text-[#0AC276]">{item.title}</H2>
    <P className="text-[#CCCCCC]">
      {item.description}
    </P>
  </div>
))}

        </div>

        {/* -------------------------------------------------- */}
        {/* BOTTOM IMAGE CONTAINER */}
        {/* Mobile → infinite loop scroll */}
        {/* Tablet/Desktop → original grid */}
        {/* -------------------------------------------------- */}
        <div className="relative">

          {/* ================= MOBILE ================= */}
          <div className="md:hidden overflow-hidden">
            <div className="flex w-max animate-auto-scroll touch-pan-x">

              {/* DUPLICATE IMAGES FOR SEAMLESS LOOP */}
              {[...images, ...images].map((src, i) => (
                <div
                  key={i}
                  className="mx-3 min-w-[80vw] h-[260px] rounded-lg overflow-hidden shadow-lg flex-shrink-0"
                >
                  <img
                    src={src}
                    alt={`img-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

            </div>
          </div>

          {/* ================= TABLET & DESKTOP (UNCHANGED) ================= */}
          <div className="hidden md:grid grid-cols-4 gap-10">

            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/AI/Careers/img5.png"
                alt="img5"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <img
                src="/AI/Careers/img6.png"
                alt="img6"
                className="w-full rounded-lg shadow-lg object-cover"
              />
              <img
                src="/AI/Careers/img7.png"
                alt="img7"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/AI/Careers/img8.png"
                alt="img8"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/AI/Careers/img9.png"
                alt="img9"
                className="w-full h-full object-cover object-top"
              />
            </div>

          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* MOBILE INFINITE SCROLL ANIMATION */}
      {/* -------------------------------------------------- */}
      <style>{`
        @keyframes autoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 767px) {
          .animate-auto-scroll {
            animation: autoScroll 35s linear infinite;
          }

          /* pause while user touches */
          .animate-auto-scroll:active {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
