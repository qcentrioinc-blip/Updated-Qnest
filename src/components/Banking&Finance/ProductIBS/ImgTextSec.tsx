import { useState, useEffect, useRef } from "react";
import { P, H4, H2 } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
import { Link } from "react-router-dom";

const accordionData = [
  {
    title: { part1: "Customer Dashboard and ", part2: " Account Overview" },
    imageSrc: "/ProductIBS/1f.webp",
    paragraph:
      "Personalized dashboard displays complete financial status with savings, deposits, and borrowings. Visual representations and drill-down capabilities provide detailed transaction history and account information.",
    features: [
      "Real-time balance updates",
      "Transaction history with filters",
      "Download account statements",
      "Multiple account type views",
    ],
  },
  {
    title: { part1: "Fund Transfers and ", part2: " Bill Payments" },
    imageSrc: "/ProductIBS/2f.webp",
    paragraph: "Send money between accounts, pay utility bills, and transfer funds domestically or internationally. Integration with Pago payment gateway ensures secure processing with immediate confirmation.",
    features: [
      "Intra-bank and inter-bank transfers ",
      "Utility bill payment integration ",
      "Favorite and recent payees ",
      "Scheduled and recurring payments ",
    ],
  },
  {
    title: { part1: "Account Management and ", part2: "Security Controls" },
    imageSrc: "/ProductIBS/3f.webp",
    paragraph: " Comprehensive account services including checkbook requests, stop payments, and statement downloads. Transaction limits and security controls protect customer accounts.",
    features: [
      "Checkbook request online",
      "Stop payment facility ",
      "Daily transaction limits ",
      "Two-factor authentication ",
    ],
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#00AA72] mr-3 mt-0.5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ImgTextSec = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      if (window.innerWidth < 1024) {
        const triggerY = window.innerHeight * 0.35;

        let bestIndex = 0;
        let bestDist = Infinity;

        sectionRefs.current.forEach((section, index) => {
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const dist = Math.abs(rect.top - triggerY);
          if (dist < bestDist) {
            bestDist = dist;
            bestIndex = index;
          }
        });

        setOpenIndex(bestIndex);
      } else {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;

        const progress = Math.min(Math.max(-rect.top / total, 0), 1);
        const index = Math.min(
          Math.floor(progress * accordionData.length),
          accordionData.length - 1
        );
        setOpenIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (index: number) => {
    if (window.innerWidth < 1024) {
      setOpenIndex(index);
      return;
    }

    setOpenIndex(index);

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const bandSize = 1 / accordionData.length;
    const targetProgress = bandSize * index + bandSize * 0.5;
    const targetY = window.scrollY + rect.top + targetProgress * total;

    isClickScrolling.current = true;
    window.scrollTo({ top: targetY, behavior: "smooth" });
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <section className="relative bg-white dark:bg-black pb-10 ">

      <div ref={containerRef} className="relative lg:h-[320vh]">
        <div className="lg:sticky lg:top-0 lg:min-h-screen lg:flex lg:items-center">
          <div className="w-full px-6 xl:px-6">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">

  {/* LEFT CONTENT */}
  <div >
    <H2 className="max-w-4xl">
      <span className="text-[#00AA72]">Powerful Features of </span>
      <span className="dark:text-white">Internet Banking Solution</span>
    </H2>

    <P className="mt-3 font-bold max-w-3xl">
      IBS delivers comprehensive FFIEC, GLBA, and SOC ready online banking capabilities with secure access, real-time updates, and seamless core banking integration. 
    </P>
  </div>

  {/* RIGHT BUTTON (DESKTOP ONLY POSITIONING) */}
  <div className="lg:flex lg:justify-end lg:flex-shrink-0">
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
    <ContactUs className="mt-4 lg:mt-0">
      CONTACT US
    </ContactUs>
    </Link>
  </div>

</div>

              {/* Accordion */}
              <div className="space-y-3 lg:space-y-4">
                {accordionData.map((data, index) => {
                  const isActive = index === openIndex;

                  return (
                    <div
                      key={index}
                      ref={(el) => { sectionRefs.current[index] = el; }}
                      className="rounded-xl overflow-hidden"
                    >
                      {/* Tab header */}
                      <button
                        onClick={() => handleClick(index)}
                        className={`w-full text-left px-4 py-4 transition-colors duration-300
                          ${isActive
                            ? "bg-[#00AA72]/20"
                            : "bg-gray-50 lg:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        <div className="flex items-center lg:grid lg:grid-cols-3 lg:gap-6">
                          <H4 className="flex items-center text-base">
                            <svg
                              className={`w-5 h-5 mr-3 flex-shrink-0 transition-transform duration-500
                                ${isActive ? "rotate-90 text-[#00AA72]" : "text-gray-400"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M7.293 14.707l4-4-4-4" />
                            </svg>
                            <span>
                              <span className="text-[#00AA72]">{data.title.part1}</span>
                              <span className="dark:text-white">{data.title.part2}</span>
                            </span>
                          </H4>

                          {/* Paragraph for inactive tabs — desktop only */}
                          {!isActive && (
                            <P className="hidden lg:block lg:col-span-2 opacity-70">
                              {data.paragraph}
                            </P>
                          )}
                        </div>
                      </button>

                      {/* Expanded content */}
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                          ${isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pt-3 pb-6 bg-white dark:bg-gray-800">
                            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6">
                              <img
                                src={data.imageSrc}
                                alt={`${data.title.part1}${data.title.part2}`}
                                className="rounded-lg w-full h-44 lg:h-52 object-cover"
                              />
                              <div className="lg:col-span-2">
                                <P className="mb-4 lg:text-base">
                                  {data.paragraph}
                                </P>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 xl:mt-4">
                                  {data.features.map((item, i) => (
                                    <div key={i} className="flex items-start">
                                      <CheckIcon />
                                      <span className="text-sm dark:text-white lg:text-base leading-snug">
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ImgTextSec;