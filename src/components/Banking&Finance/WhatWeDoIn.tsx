import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { H2, H3, P } from "../../styles/Typography";
// import { ContactUs } from "../../styles/Button";
import { Link } from "react-router-dom";

const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const stickyInnerRef = useRef<HTMLDivElement | null>(null);

  const accordionData = [
    {
      id: 1,
      title: "Banks",
      link: "/industries/banking-and-finance/built-for/banks",
      content: [
        "Banks face complex challenges from legacy infrastructure, regulatory pressure, and digital expectations. Our solutions modernize core banking, automate AML compliance, streamline payments, and provide real-time risk visibility. ",
        "Enterprise-grade core banking and compliance platforms on SOC 1/SOC 2 certified infrastructure.  ",
      ],
    },
    {
      id: 2,
      title: "Credit Unions",
      link: "/industries/banking-and-finance/built-for/credit-union",
      content: [
        "Credit unions need technology to compete with larger institutions while serving members. Our solutions digitize onboarding, simplify loan processing, enable league payments, and automate reconciliation without large IT teams. ",
        "Member-focused technology that streamlines operations without burdening your valuable staff. ",
      ],
    },
    {
      id: 3,
      title: "Financial Institutions",
      link: "/industries/banking-and-finance/built-for/financial-unions",
      content: [
        "Mortgage companies, NBFCs, and asset managers need adaptable platforms for diverse products and regulations. Our suite supports multi-entity management, asset tracking, treasury, and enterprise reconciliation. ",
        "Integrated solutions for complex operations, multi-entity management, and regulatory compliance. ",
      ],
    },
  ];

  const images = ["/BNFWhat.svg", "/WhatWe2.svg", "/WhatWe3.svg"];
  // Track desktop breakpoint (xl = 1280px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Sticky scroll logic — desktop only
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!isDesktop || !targetRef.current) return;

  //     const rect = targetRef.current.getBoundingClientRect();
  //     const outerHeight = targetRef.current.offsetHeight;
  //     const windowHeight = window.innerHeight;

  //     const scrolledIn = -rect.top;

  //     if (scrolledIn <= 0) {
  //       setOpenIndex(0);
  //       return;
  //     }

  //     const extraScroll = outerHeight - windowHeight;

  //     if (scrolledIn >= extraScroll) {
  //       setOpenIndex(accordionData.length - 1);
  //       return;
  //     }

  //     const segmentSize = extraScroll / accordionData.length;

  //     const newIndex = Math.min(
  //       accordionData.length - 1,
  //       Math.max(0, Math.floor(scrolledIn / segmentSize))
  //     );

  //     setOpenIndex(newIndex);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [accordionData.length, isDesktop]);
  useEffect(() => {
    const handleScroll = () => {
      if (!isDesktop || !targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const totalScrollable =
        targetRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        totalScrollable
      );

      const progress = scrolled / totalScrollable; // 0 → 1

      const newIndex = Math.min(
        accordionData.length - 1,
        Math.floor(progress * accordionData.length)
      );

      setOpenIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [accordionData.length, isDesktop]);

  return (
    <div
      ref={targetRef}
      className="relative bg-white  text-black w-full"
      id="benefits"
      style={
        isDesktop
          ? { height: `calc(100vh + ${accordionData.length * 60}vh)` }
          : { height: "auto" }
      }
    >
      <div
        ref={stickyInnerRef}
        className={isDesktop ? "sticky top-[70px] max-w-7xl mx-auto overflow-hidden" : "relative px-4 w-full"}
        style={isDesktop ? { height: "100vh" } : { height: "auto" }}
      >
        <div
          className="  flex flex-col"
          style={
            isDesktop
              ? {
                height: "100%",
                paddingTop: "clamp(1.25rem, 3vh, 2.5rem)",
                paddingBottom: "clamp(0.75rem, 2vh, 1.5rem)",
              }
              : {
                height: "auto",
                paddingTop: "0.5rem",
                paddingBottom: "2rem",
              }
          }
        >
          {/* ── Heading ── */}
          <div className="shrink-0 flex justify-between items-start gap-8 xl:px-6 ">
            <div className="max-w-4xl ">
              <H2 className="font-bold text-[#00AA72]">
                Who <span className="text-[#141414] "> We </span> Serve
              </H2>
              <P className="pt-2 text-justify  xl:pr-20  leading-tight">
                Financial institutions of all sizes trust our solutions to
                streamline operations, automate compliance, and deliver better
                customer experiences. Our platforms scale to meet your specific
                needs.
              </P>
            </div>
            {/* <Link
              to="#contact-us"
              onClick={(e) => {
                const el = document.getElementById("contact-us");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <ContactUs className="hidden xl:block gap-2 whitespace-nowrap shrink-0">
                Learn More
              </ContactUs>
            </Link> */}
          </div>

          {/* Mobile Button */}
          <div className="xl:hidden mt-4 shrink-0">
            <Link
              to="#contact-us"
              onClick={(e) => {
                const el = document.getElementById("contact-us");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {/* <ContactUs className="w-full flex items-center justify-center gap-2 text-black">
                CONTACT US
              </ContactUs> */}
            </Link>
          </div>

          {/* ── Desktop Layout ── */}
          <div className="flex-1 min-h-0 hidden xl:flex xl:px-6 flex-row items-center gap-8 2xl:gap-12 h-full">

            {/* Image — no wrapper div, height stretches to match accordion column */}
            <motion.img
              key={openIndex}
              src={images[openIndex]}
              alt="Who we serve"
              className="h-[80%] w-full max-w-[420px] 2xl:max-w-[550px] shrink-0 object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Accordion Side */}
            <div
              ref={desktopRef}
              className="flex-1 flex flex-col justify-center gap-4 h-full"
            >
              {accordionData.map((item, index) => {
                const isOpen = !isDesktop ? true : openIndex === index;

                return (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ease-in-out ${isOpen ? "bg-[#E5FFF7] " : "bg-[#F6F6F6] "
                      }`}
                    style={{ minHeight: isOpen ? "auto" : "100px" }}
                    onClick={() => {
                      if (isDesktop) setOpenIndex(index);
                    }}
                  >
                    {/* Number */}
                    <span
                      className={`absolute left-6 top-3 text-6xl font-bold leading-none transition-colors duration-500 ${isOpen ? "text-[#3E3E3E]" : "text-[#00AA72]"
                        }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <motion.h3
                      className="absolute left-28 top-6 pr-20 text-2xl lg:text-3xl font-semibold"
                      initial={false}
                  
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Arrow — only when open */}
                    {isOpen && (
                      <motion.a
                        href={item.link}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute right-6 top-10 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src="/Arrowright.svg" alt="Arrow Right" className="w-5 h-5" />
                      </motion.a>
                    )}

                    {/* Content — only when open */}
                    {isOpen && (
                      <motion.div
                        className="pr-14 pt-16 pb-3 text-left"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {Array.isArray(item.content) ? (
                          item.content.map((para, i) => (
                            <P key={i} className="pb-2 pt-4 leading-snug text-sm xl:pl-20 2xl:pl-24">
                              {para}
                            </P>
                          ))
                        ) : (
                          <P className="leading-snug text-sm">{item.content}</P>
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile / Tablet Layout — normal flow, no sticky ── */}
          <div
            ref={mobileRef}
            className="xl:hidden flex flex-col w-full mt-6"
          >
            <div className="w-full flex flex-col justify-center items-center gap-6">
              {accordionData.map((item, index) => {
                // const isOpen = openIndex === index;

                return (
                  <div key={item.id} className="w-full">
                    {/* Image — no border, no badge, full image visible */}
                    <div className="w-full lg:flex  lg:justify-center lg:items-center mt-4 mb-4">
                      <img
                        src={images[index]}
                        alt={item.title}
                        className="w-[90%] lg:w-[50%] h-auto object-contain rounded-2xl"
                      />
                    </div>

                    {/* Accordion */}
                    <div
                      className={`relative overflow-hidden transition-all duration-500 ease-in-out rounded-lg mb-4 `}
                    >
                      <div
                        className="flex items-center  gap-x-4 px-4 lg:px-10 py-4 cursor-pointer"
                        onClick={() => setOpenIndex(index)}
                      >
                        <div className="flex items-center">
                          <span
                            className={`text-4xl sm:text-5xl font-bold mr-4 transition-colors duration-500 `}
                          >
                            {String(item.id).padStart(2, "0")}
                          </span>
                          <H3
                            className={`text-lg sm:text-xl font-semibold transition-colors duration-500 `}
                          >
                            {item.title}
                          </H3>
                        </div>


                        <motion.a
                          href={item.link}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src="/Arrowright.svg"
                            alt="Arrow Right"
                            className="w-4 h-4"
                          />
                        </motion.a>

                      </div>


                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 lg:px-10 pb-4"
                      >
                        {Array.isArray(item.content)
                          ? item.content.map((para, i) => (
                            <P key={i} className="mb-3  max-w-4xl text-sm leading-relaxed">
                              {para}
                            </P>
                          ))
                          : <P>{item.content}</P>}
                      </motion.div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoIn;
