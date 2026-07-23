import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { H2, H3 } from "../../../styles/Typography";
import { ArrowRight } from "lucide-react";
// import { HoverExpandImage } from "../../HomePage/AIOptimization/HoverExpandImage";

const TABS = [
  {
    id: "tab1",
    title: "Single Transfers",
    description:
      "Process single transfer transactions for customers and non-customers. Supports credit transfers with complete validation and secure processing.",
    desc: "Service both account holders and walk-in customers for one-time payments. Ideal for person-to-person transfers and occasional payouts. ",
    image: "/Pago/point1.webp",
  },
  {
    id: "tab2",
    title: "Bulk Transfers",
    description:
      " Handle bulk transactions for subsidies, dividends, salary, pension, utility bills, loan collections, and mutual fund investments. ",
    desc: "Upload batch files with standardized Excel format. System processes high volumes efficiently with configurable intervals and multiple batch support. ",
    image: "/Pago/point2.webp",
  },
  {
    id: "tab3",
    title: "Inbound Processing",
    description:
      "Manage inbound NACHA transactions with automated reconciliation. Supports deferred settlement for better liquidity management across institutions. ",
    desc: "Receive and process incoming credit transfers from various sources. System matches transactions and updates settlement positions for complete tracking. ",
    image: "/Pago/point3.webp",
  },
];

const AccordionPago = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const leftRef = useRef<HTMLUListElement | null>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!leftRef.current) return;
    const observer = new ResizeObserver(() => {
      setLeftHeight(leftRef.current!.offsetHeight);
    });
    observer.observe(leftRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTab = (i: number) => {
    if (!sectionRef.current) return;
    const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
    const fraction = TABS.length > 1 ? i / (TABS.length - 1) : 0;
    const target = sectionRef.current.offsetTop + fraction * totalScrollable;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      const index = Math.min(
        TABS.length - 1,
        Math.max(0, Math.round(progress * (TABS.length - 1)))
      );

      if (index !== activeIndexRef.current) {
        activeIndexRef.current = index;
        setActiveIndex(index);
        setActiveTab(TABS[index]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    <div
      ref={sectionRef}
      style={{ height: `${TABS.length * 100}vh` }}
      className="relative"
    >
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-[90vh] dark:bg-black lg:[70vh] xl:h-[110vh] overflow-hidden bg-white flex flex-col">

        {/* HEADING */}
        <div className="max-w-full mx-auto pt-10 pb-4 text-center px-6">
          <H2>NACHA Payment <br className="hidden xl:block"/>Processing Capabilities</H2>
        </div>

        {/* MOBILE IMAGE — fixed position above tabs, outside the list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            className="xl:hidden mx-4 mb-4 rounded-xl overflow-hidden shrink-0"
            style={{ height: 180 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="h-full w-full object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* GRID */}
        <div className="flex-1 overflow-hidden xl:mx-auto max-w-7xl w-full xl:px-6 px-4 pb-10">
          <div className="grid grid-cols-1 xl:grid-cols-[35%_65%] items-start h-full">

            {/* LEFT TABS */}
            <motion.ul ref={leftRef} layout className="space-y-0 xl:space-y-6">
              {TABS.map((tab, index) => {
                const isActive = activeTab.id === tab.id;

                return (
                  <li key={tab.id} className="rounded-xl min-h-[60px] xl:min-h-[100px]">
                    <button
                      type="button"
                      onClick={() => scrollToTab(index)}
                      className="w-full text-left cursor-pointer rounded-xl p-4 transition-colors hover:dark:bg-transparent hover:bg-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1">

                          {/* TITLE */}
                          <div className="flex items-center gap-2">
                            <H3
                              className={`font-semibold leading-tight transition ${
                                isActive ? "text-[#00AA72]" : "text-black dark:text-white"
                              }`}
                            >
                              {tab.title}
                            </H3>
                            <motion.span
                              animate={{ x: isActive ? 4 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`transition ${
                                isActive ? "text-[#00AA72]" : "text-gray-600"
                              }`}
                            >
                              <ArrowRight />
                            </motion.span>
                          </div>

                          {/* DESCRIPTION — only on active, no image inside */}
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <p className="mt-3 text-md font-quicksand text-[16px] dark:text-white text-[#141414] max-w-2xl">
                                  {tab.description}
                                </p>
                                {tab.desc && (
                                  <p className="mt-2 text-[16px] dark:text-white font-quicksand">
                                    {tab.desc}
                                  </p>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </div>
                      </div>
                    </button>

                    {index !== TABS.length - 1 && (
                      <hr className="mt-2 h-px w-full text-gray-400" />
                    )}
                  </li>
                );
              })}
            </motion.ul>

            {/* RIGHT IMAGE — desktop only */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                className="relative hidden xl:block bg-gray-200 w-full overflow-hidden rounded-xl"
                style={{ height: leftHeight ?? "auto" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="h-full w-full object-fill rounded-xl"
                />
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionPago;