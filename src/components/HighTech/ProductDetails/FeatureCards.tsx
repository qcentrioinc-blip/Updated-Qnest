"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { H2, H4, P } from "../../../styles/Typography";

/* ✅ Responsive Media Query Hook */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ✅ Responsive X Transform */
  const islg = useMediaQuery("(min-width: 1024px) and (max-width: 1439px)");
  const isMd = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isSm = useMediaQuery("(max-width: 767px)");

  let endX = "-33%"; // default (large screens)
  if(islg) endX = "-37%"; // large screens
  if (isMd) endX = "-33%"; // medium screens
  else if (isSm) endX = "-65%"; // small screens

  const x = useTransform(scrollYProgress, [0, 1], ["0%", endX]);

  const cards = [
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      author: "Abcdef, Qnest CEO, New York, USA",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit.",
      text2:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      author: "John Doe, CTO, London, UK",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1: "Complex integration processes slow down business operations significantly.",
      text2: "Qnest provides plug-and-play solutions that integrate in minutes, not months.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      author: "Jane Smith, VP Operations, Singapore",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "Growing businesses struggle with infrastructure limitations and support gaps.",
      text2: "Our platform scales automatically with 24/7 enterprise support worldwide.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full  bg-black"
      style={{ height: "300vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Fixed background image */}
        <div
          className="absolute right-0 lg:top-33 h-[60vh] md:h-[70vh] lg:h-[75vh] w-full md:w-1/2 bg-no-repeat bg-contain bg-right-top md:bg-right opacity-40 md:opacity-100 pointer-events-none z-0"
          style={{
            backgroundImage: "url('/HighTech/ProductDetails/img3.png')",
          }}
        />

        {/* Section title - Fixed at top */}
        <div className="absolute top-14 md:top-24 left-4 md:left-12 z-20 mt-4">
          <H2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Sed ut perspiciatis
          </H2>
          <H2 className="text-[#F99526] mt-1 md:mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-serif">
            Unde Seduo ut perspiciatis
          </H2>
        </div>

        {/* Horizontal scrolling cards */}
        <motion.div
          style={{ x }}
          className="flex gap-4 md:gap-6 px-4 md:px-12 mt-10 md:mt-20 xl: xl:mt-58 will-change-transform relative z-10"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[45vw] lg:w-[46vw] h-[400px] md:h-[450px] lg:h-[500px] xl:h-[400px] bg-white/10  rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between shadow-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              {/* Top text */}
              <div>
                <H4 className="font-semibold text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6">
                  {card.title}
                </H4>
                <P className="text-[#F99526] font-semibold text-sm md:text-base lg:text-lg">
                  {card.author}
                </P>
              </div>

              {/* Buttons + respective texts */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6">
                {/* Button 1 + Text */}
                <div className="flex flex-col flex-1">
                  <button className="border border-[#F99526] px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#F99526] hover:text-black transition-all duration-300 text-sm md:text-base font-medium">
                    {card.btn1}
                  </button>
                  <P className="text-xs md:text-sm text-gray-300 leading-relaxed mt-3">
                    {card.text1}
                  </P>
                </div>

                {/* Button 2 + Text */}
                <div className="flex flex-col flex-1">
                  <button className="border border-[#F99526] px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#F99526] hover:text-black transition-all duration-300 text-sm md:text-base font-medium">
                    {card.btn2}
                  </button>
                  <P className="text-xs md:text-sm text-gray-300 leading-relaxed mt-3">
                    {card.text2}
                  </P>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCards;
