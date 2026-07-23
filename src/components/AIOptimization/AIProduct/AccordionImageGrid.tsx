import { useState } from "react";
import {  Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { H2, H3, P } from "../../../styles/Typography";

type Item = {
  title: string;
  description: string;
  image: string;
  cta: string;
  bordered?: boolean;
};

const items: Item[] = [
  {
    title: "Secure Access",
    description:
      "Provide read-only access to billing and configuration metadata. We never access your data, files, databases, or applications. CloudDIET operates at the Azure control plane level using Resource Manager APIs, ensuring zero performance impact. Your credentials are stored in an HSM-backed vault with a zero-trust security model, and you can revoke access anytime.",
    cta: "Get Started",
    image: "/CDImage.webp",
    bordered: true,
  },
  {
    title: "AI Analysis",
    description:
      "Our profiling engine analyzes hundreds of measures to identify misconfigurations, waste, and optimization opportunities across your cloud estate. CloudDIET examines resource configurations, usage metrics, and billing data to pinpoint over-provisioning, unused capacity, and suboptimal SKUs. It builds baselines and trends over days or weeks to surface both immediate and long-term savings opportunities.",
    cta: "Learn More",
    image: "/RealiseSaving.webp",
  },
  {
    title: "Realize Savings",
    description:
      "We provide an assured savings estimate before implementation. Our team helps execute recommended optimizations, and you only pay a percentage of the savings realized. This performance-based model ensures you keep 80–90% of savings while we handle the work. Most customers see positive ROI within the first month of using CloudDIET.",
    cta: "See Results",
    image: "/AIAnalysis.webp",
  },
];

export default function AccordionImageGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];

  return (
    <section className="relative w-full  ">
      {/* =========================================================
          MOBILE & TABLET STATIC LAYOUT (< lg screens)
         ========================================================= */}
      <div className="block xl:hidden py-10 max-w-2xl mx-auto space-y-10">
        {/* Top Left Header Section */}
        <div className="space-y-4">
          <H2 className="">How CloudDIET Works For You</H2>

          <P className="">
            A secure, four-step process combining AI-powered analysis with
            engineering expertise to guarantee cloud savings, without ever
            accessing your data.
          </P>

          <P className="">
            CloudDIET operates at the Azure control plane level ensuring
            complete zero performance impact while guaranteeing privacy.
          </P>

          <div className="pt-2">
            <a
              href="https://clouddiet.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#009565] hover:bg-[#007a53] text-white font-quadran font-regular tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Book a demo</span>
            </a>
          </div>
        </div>

        {/* Static Content Blocks: Content followed directly by Image */}
        <div className="space-y-8 pt-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50  rounded-2xl p-5 sm:p-6 border border-gray-100 space-y-5"
            >
              {/* Content */}
              <div>
                <H3 className="text-[#009565] mb-2">{item.title}</H3>
                <P className="mb-4">{item.description}</P>
                <a
                  href="https://clouddiet.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-regular font-quadran tracking-wider text-[#009565] hover:underline"
                >
                  <span>{item.cta}</span>
                </a>
              </div>

              {/* Image directly below content */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100  shadow-sm border border-gray-200 ">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          DESKTOP ACCORDION LAYOUT (>= xl screens)
         ========================================================= */}
      <div className="hidden xl:block relative w-full pb-10">
        <div className="flex items-center justify-center px-[40px] md:px-[60px] xl:px-[160px]">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-8 xl:gap-12 items-center">
            {/* LEFT COLUMN: Header & CTA */}
            <div className="col-span-4 flex flex-col justify-between space-y-6">
              <div>
                <H2 className="text-[#141414] mb-5">
                  How CloudDIET Works <br /> For You
                </H2>

                <P className="text-gray-600 mb-4">
                  A secure, four-step process combining AI-powered analysis with
                  engineering expertise to guarantee cloud savings, without
                  ever accessing your data.
                </P>

                <P className="text-gray-500 mt-2">
                  CloudDIET operates at the Azure control plane level ensuring
                  complete zero performance impact while guaranteeing privacy.
                </P>
              </div>

              <div className="pt-2">
                <a
                  href="https://clouddiet.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#009565] hover:bg-[#007a53] text-white font-quadran font-light px-4 py-2 rounded-xl"
                >
                  <span>Book a demo</span>
                </a>
              </div>
            </div>

            {/* CENTER COLUMN: Interactive Image Container */}
            <div className="col-span-4 flex items-center justify-center">
              <div className="relative w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      loading="lazy"
                      className="w-full h-full object-contain rounded-[2rem]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT COLUMN: Accordion Step Tabs */}
            <div className="col-span-4 flex flex-col justify-center space-y-3">
              {items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 cursor-pointer overflow-hidden  ${
                      isActive
                        ? "bg-[#f2faf5] border-t-[6px] border-[#009565] p-5 shadow-sm"
                        : "p-4 hover:bg-gray-50 "
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <H3
                        className={`transition-colors duration-200 ${
                          isActive
                            ? "text-[#009565]"
                            : "text-[#009565] hover:opacity-80"
                        }`}
                      >
                        {item.title}
                      </H3>

                      {/* Smooth Rotating Plus Icon */}
                      <Plus
                        className={`w-5 h-5 text-[#009565] flex-shrink-0 mt-1 transition-transform duration-300 ease-in-out ${
                          isActive ? "rotate-45" : ""
                        }`}
                      />
                    </div>

                    {/* Smooth CSS Grid Height Expansion */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-3 pt-2">
                          <P className="text-gray-700  ">
                            {item.description}
                          </P>

                          <a
                            href="https://clouddiet.ai/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-quadran font-regular tracking-wider text-[#009565] hover:underline pt-1"
                          >
                            <span>{item.cta}</span>
                          </a>
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
    </section>
  );
}