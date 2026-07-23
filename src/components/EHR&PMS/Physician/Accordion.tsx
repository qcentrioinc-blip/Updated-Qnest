import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import {   H3 } from "../../../styles/Typography";
import { ArrowRight } from "lucide-react";
import { HoverExpandImage } from "../../HomePage/AIOptimization/HoverExpandImage";
 
const TABS = [
  {
    id: "tab1",
    title: " Intelligent Clinical Documentation",
    description:
      " Speed up charting with customizable SOAP templates and smart fields that pull in patient history. Our system suggests E/M codes and auto-saves, cutting documentation time in half.",
    image: "/Physician/ICD.webp",
  },
  {
    id: "tab2",
    title: " Integrated Decision Support",
    description:
      "Access real-time clinical alerts, drug interactions, and patient insights right at the point of care. This helps you make safer, more informed decisions during every patient visit. ",
    image: "/EHR-PMS/Physician/img7.webp",
  },
  {
    id: "tab3",
    title: " Seamless Care Coordination",
    description:
      "Manage your entire patient list, view live schedules, and track tasks from a unified dashboard. It connects your clinical work with billing and follow-ups effortlessly.",
      image: "/EHR-PMS/Physician/img8.webp",
  },
];
 
const Accordion = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const leftRef = useRef<HTMLUListElement | null>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);
 
  // Sync right image height with left tabs height
  useLayoutEffect(() => {
    if (!leftRef.current) return;
 
    const observer = new ResizeObserver(() => {
      setLeftHeight(leftRef.current!.offsetHeight);
    });
 
    observer.observe(leftRef.current);
 
    return () => observer.disconnect();
  }, []);
 
  return (
    <section className="bg-white  dark:bg-[#141414] py-4">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        {/* Header */}
      
 
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4 items-start">
          {/* Tabs */}
          <motion.ul
            ref={leftRef}
            layout
            className="space-y-4 xl:space-y-20"
          >
            {TABS.map((tab, index) => {
              const isActive = activeTab.id === tab.id;
 
              return (
                <li key={tab.id} className="rounded-xl">
                  <button
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className="
                      w-full
                      text-left
                      cursor-pointer
                      rounded-xl
                      
                      transition-colors
                      hover:bg-gray-100 dark:hover:bg-teal-900
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        {/* Title */}
                        <div className="flex items-center gap-2">
                          <H3
                            className={` leading-tight transition ${
                              isActive
                                ? "text-[#00AA72] dark:text-white"
                                : "dark:text-white  text-[#141414]"
                            }`}
                          >
                            {tab.title}
                          </H3>
 
                          <span
                            className={`transition ${
                              isActive
                                ? "text-teal-600"
                                : "text-gray-400"
                            }`}
                          >
                            <ArrowRight/>
                          </span>
                        </div>
 
                        {/* Description */}
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="mt-3 text-md font-quicksand text-[#141414] xl:text-[18px] dark:text-white max-w-2xl"
                          >
                            {tab.description}
                          </motion.p>
                        )}
 
                        {/* Mobile Image */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <HoverExpandImage
                              src={tab.image}
                              alt="Clinical feature preview"
                              className="
                                mt-5
                                w-full
                               
                                border
                                border-gray-200
                                shadow-lg
                                object-contain
                                lg:hidden
                              "
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </button>
 
                  {index !== TABS.length - 1 && (
                     
                    <hr className="mt-4 h-px w-full text-gray-400" />
                  )}
                </li>
              );
            })}
          </motion.ul>
 
          {/* Desktop Image */}
          <motion.div
            key={activeTab.id}
            className="relative hidden lg:block w-full overflow-hidden rounded-xl"
            style={{ height: leftHeight ?? "auto" }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <HoverExpandImage
              src={activeTab.image}
              alt="Clinical feature preview"
              className="h-full w-full bg-gray-100 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
 
export default Accordion;