import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { H2, H4, P } from "../styles/Typography";
import { Link } from "react-router-dom";

export default function SlideReveal() {
  const sectionRef = useRef(null);

  // Detect desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Scroll only active on desktop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-white  dark:bg-black ${isDesktop ? "h-[160vh]" : "h-auto"
        }`}
    >
      <div
        className={`${isDesktop
          ? "sticky top-0 h-screen overflow-hidden"
          : ""
          }`}
      >
        {/* MOBILE STATIC IMAGE */}
        {!isDesktop && (
          <div className="w-full">
            <img
              src="/Img1.png"
              alt="Wind Energy"
              className="w-full object-fit"
            />
          </div>
        )}

        {/* BACK CONTENT */}
       <div className="relative z-0 px-6 md:px-12 lg:px-16 h-full flex items-center py-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-12 xl:gap-16">

            {/* LEFT CONTENT */}
            <div>
              <H2 className="xl:mb-6 dark:text-white py-4 xl:py-0">
                Built Around <br className="hidden md:block"/> Your Business
              </H2>

              <P className="max-w-md mb-10">
                All the products we deliver are the brilliant result of a unique
                mix: Their founders’ ideas and inspiration with our team’s
                expertise and creativity.
              </P>

              <Link to="/contact">
                <button
                  className="
              group flex items-center gap-2
              h-[44px] sm:h-[48px] px-5 sm:px-6
              rounded-lg font-quicksand font-bold text-sm sm:text-base
              bg-[#1C59A1] text-white border border-transparent
              transition-all duration-300 ease-in-out
              hover:bg-white hover:text-[#141414] hover:border-[#010101] hover:border-b-4 hover:-translate-y-0.5
              shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] cursor-pointer
            "
                >
                  <span>Contact Us</span>
                  <span className="relative flex items-center justify-center w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                      <path d="M7 7h10v10" /><path d="M7 17L17 7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: "/icon11.svg",
                  title: "Discovery & Consultation",
                  text: "We speak with your teams to learn goals, issues, and industry needs in detail",
                },
                {
                  icon: "/icon12.svg",
                  title: "Planning & Alignment",
                  text: "We turn your requirements into a practical, clear plan with agreed priorities and scope.",
                },
                {
                  icon: "/icon13.svg",
                  title: "Workflow & Optimization",
                  text: "We design simple workflows that match daily work and are easy to follow.",
                },
                {
                  icon: "/icon14.svg",
                  title: "Integration & Compliance",
                  text: "We develop, integrate, and test every component against performance, security, and compliance standards.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border dark:bg-slate-900 border-[#9C9C9C] rounded-lg p-6 xl:p-10 transition-all duration-300"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 mb-4"
                  />

                  <H4 className="mb-3 dark:text-white ">{item.title}</H4>
                  <P>{item.text}</P>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP SLIDING IMAGE */}
        {isDesktop && (
          <motion.div
            style={{ x }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <img
              src="/Img5.webp"
              alt="Wind Energy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}