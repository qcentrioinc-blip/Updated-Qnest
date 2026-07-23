import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HandSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1280);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">

      {/* IMAGE AREA */}
      <div className="relative w-full h-[48vh] sm:h-[55vh] md:h-[58vh] lg:h-[60vh] xl:h-[75vh]">
        <img src="/EHRandPMS/Hand.png" className="w-full h-full object-cover object-top" />

        {/* OVERLAY */}
        <div className="absolute bottom-6 md:bottom-10 lg:bottom-14 xl:bottom-0 left-1/2 xl:left-[60%] -translate-x-1/2 z-20 px-4 w-full max-w-2xl">
          <div className="backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-sm bg-white/10 shadow-2xl h-[170px] sm:h-[200px] lg:h-[230px] xl:h-[340px] flex flex-col justify-center text-center">
            <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Sed ut perspiciatis Unde
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Seduo ut perspiciatis
            </h1>
          </div>
        </div>

        {/* DESKTOP FLOATING CARD */}
        {isDesktop && (
          <div className="absolute right-12 bottom-[-140px] w-[420px] xl:bottom-[-180px] xl:w-[480px] z-30">
            <div className="bg-[#2D9D78] rounded-xl shadow-2xl overflow-hidden h-[230px] xl:h-[250px] flex flex-col justify-between">
              <div className="p-8 xl:p-10 text-white text-base leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="border-t border-white/50" />
              <div className="p-4 flex justify-end bg-[#2D9D78]">
                <button className="bg-white p-3 rounded-full hover:scale-110 transition">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BASE COLOR */}
      <div className="bg-[#E8F5FF] pt-40 lg:pt-48 xl:pt-60"></div>

      {/* MOBILE / TABLET CARD */}
      {!isDesktop && (
        <div className="relative -mt-40 sm:-mt-48 lg:-mt-56 px-6 pb-20 z-20 max-w-xl mx-auto">
          <div className="bg-[#2D9D78] rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 text-white text-sm sm:text-base">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="border-t border-white/50" />
            <div className="p-4 flex justify-end">
              <button className="bg-white p-2 sm:p-3 rounded-full">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
