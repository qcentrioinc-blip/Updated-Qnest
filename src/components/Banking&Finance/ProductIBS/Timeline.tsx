import { useEffect, useRef, useState } from "react";
import { H2, H4, P } from "../../../styles/Typography";

const timelineData = [
  {
    id: "1",
    title: "Enter Personal Details",
    description:
      "Provide customer information to initiate a registration request ",
  },
  {
    id: "2",
    title: "Verify Identity Information",
    description:
      " System validates customer details against core banking records ",
  },
  {
    id: "3",
    title: "Set Login Credentials",
    description: "Create username and password for secure account access ",
  },
  {
    id: "4",
    title: "Complete Registration Process",
    description: " Finalize registration after successful identity verification",
  },
  {
    id: "5",
    title: "Access Dashboard View",
    description:
      "Customer lands on the personalized dashboard post registration",
  },
];

export default function Timeline() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(timelineData.length).fill(false)
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          timelineData.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 200 + i * 400);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white dark:bg-black py-10 xl:pb-20" ref={sectionRef}>
      <style>{`
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.5) translateY(-8px); }
          70%  { opacity: 1; transform: scale(1.08) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          0%   { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes growDown {
          0%   { opacity: 0; transform: scaleY(0); }
          100% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes growUp {
          0%   { opacity: 0; transform: scaleY(0); }
          100% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes fadein {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }

        .anim-circle        { opacity: 0; }
        .anim-circle.show   { animation: popIn 0.5s cubic-bezier(.4,0,.2,1) forwards; }

        .anim-stem-down        { opacity: 0; transform-origin: top center; }
        .anim-stem-down.show   { animation: growDown 0.3s cubic-bezier(.4,0,.2,1) 0.1s forwards; }

        .anim-stem-up          { opacity: 0; transform-origin: bottom center; }
        .anim-stem-up.show     { animation: growUp 0.3s cubic-bezier(.4,0,.2,1) 0.1s forwards; }

        .anim-triangle         { opacity: 0; }
        .anim-triangle.show    { animation: fadein 0.25s ease 0.2s forwards; }

        .anim-text-down        { opacity: 0; }
        .anim-text-down.show   { animation: fadeUp 0.45s cubic-bezier(.4,0,.2,1) 0.15s forwards; }

        .anim-text-up          { opacity: 0; }
        .anim-text-up.show     { animation: fadeDown 0.45s cubic-bezier(.4,0,.2,1) 0.15s forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 xl:px-6">
        <div className="flex justify-center items-center pb-10 xl:pb-20">
          <H2 className="dark:text-white">Self Registration Process with USA PATRIOT Act CIP Verification </H2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">

          {/* Base Line (Blue + Gray Segments) — UNCHANGED */}
          <div className="absolute top-[48.2%] left-0 w-full h-[14px] flex">
            <div className="w-1/5 bg-blue-600" />
            <div className="w-1/5 bg-gray-300" />
            <div className="w-1/5 bg-blue-600" />
            <div className="w-1/5 bg-gray-300" />
            <div className="w-1/5 bg-blue-600" />
          </div>

          <div className="grid grid-cols-5 gap-1 relative">
            {timelineData.map((item, index) => {
              const isTop = index % 2 === 0;
              const show = visibleSteps[index];

              return (
                <div key={index} className="relative flex flex-col items-center">

                  {/* TOP CONTENT (ONLY for odd index) — spacing UNCHANGED */}
                  {!isTop && (
                    <div className="mb-16 text-center">
                      <div className={`anim-text-up ${show ? "show" : ""}`}>
                        <H4 className="font-semibold  dark:text-[#00AA72] text-lg">{item.title}</H4>
                        <P className="text-gray-500 text-sm mt-2 max-w-full">
                          {item.description}
                        </P>
                      </div>
                    </div>
                  )}

                  {/* CONNECTOR — all h-, mt-, bottom-, top- values UNCHANGED */}
                  <div className="relative flex flex-col items-center">
                    {isTop ? (
                      <>
                        {/* Circle ABOVE line */}
                        <div className={`anim-circle w-24 h-24 font-quadran   text-[24px] md:text-[30px] xl:text-[40px] rounded-full bg-[#00AA72] text-white flex items-center justify-center text-lg font-semibold shadow-md ${show ? "show" : ""}`}>
                          {item.id}
                        </div>

                        {/* Line DOWN to base — h-20 UNCHANGED */}
                        <div className={`anim-stem-down w-[4px] h-[87px] dark:bg-white bg-black ${show ? "show" : ""}`} />

                        {/* Triangle pointing DOWN — bottom values UNCHANGED */}
                        <div className={`anim-triangle absolute bottom-[-10px] xl:bottom-[-8px] border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent dark:border-b-white border-b-black ${show ? "show" : ""}`} />
                      </>
                    ) : (
                      <>
                        {/* Triangle pointing DOWN — mt-[10px] UNCHANGED */}
                        <div className={`anim-triangle mt-[10px]  border-l-[12px] dark:border-t-white border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-black ${show ? "show" : ""}`} />

                        {/* Stem — xl:mt-1 h-20 UNCHANGED */}
                        <div className={`anim-stem-up w-[4px] -mt-1 h-20 dark:bg-white bg-black ${show ? "show" : ""}`} />

                        {/* Circle BELOW line */}
                        <div className={`anim-circle w-24 h-24 font-quadran   text-[24px] md:text-[30px] xl:text-[40px] rounded-full bg-[#00AA72] text-white flex items-center justify-center text-lg font-semibold shadow-md ${show ? "show" : ""}`}>
                          {item.id}
                        </div>
                      </>
                    )}
                  </div>

                  {/* BOTTOM CONTENT (ONLY for even index) — mt-16 UNCHANGED */}
                  {isTop && (
                    <div className="mt-16 text-center">
                      <div className={`anim-text-down ${show ? "show" : ""}`}>
                        <H4 className="font-semibold text-lg dark:text-[#00AA72]">{item.title}</H4>
                        <P className="text-gray-500 text-sm mt-2 max-w-full">
                          {item.description}
                        </P>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden items-center flex justify-center relative">
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const show = visibleSteps[index];
              return (
                <div key={index} className="relative flex items-start gap-6">

                  {/* Circle */}
                  <div className="relative z-10">
                    <div className={`anim-circle w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-md ${show ? "show" : ""}`}>
                      {item.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`anim-text-down ${show ? "show" : ""}`}>
                    <H4 className="font-semibold text-lg">{item.title}</H4>
                    <P className="text-gray-500 text-sm mt-2 max-w-xs">
                      {item.description}
                    </P>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}