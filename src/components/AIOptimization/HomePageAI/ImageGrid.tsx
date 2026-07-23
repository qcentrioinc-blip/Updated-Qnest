import React, { useState } from "react";
import { ShieldCheck, Cpu, TrendingUp, ArrowRight } from "lucide-react";
import { motion,  } from "framer-motion";
// import { H2, H3, H4, P } from "../../../styles/Typography";
import { H2, H3, H4, P } from "../../../styles/Typography";

type Item = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  cta: string;
  tags?: string[];
};

// function ViewportVideo({ src }: { src: string }) {
//   const ref = useRef<HTMLVideoElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.2 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (!ref.current) return;
//     if (isVisible) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }, [isVisible]);

//   return (
//     <video
//       ref={ref}
//       src={isVisible ? src : undefined}
//       muted
//       loop
//       playsInline
//       preload="none"
//       className="w-full h-full object-cover"
//     />
//   );
// }

const items: Item[] = [
  {
    title: "Secure Access",
    description:
      "Provide read-only access to billing and configuration metadata. We never access your data, files, databases, or applications. CloudDIET operates at the Azure control plane level using Resource Manager APIs, ensuring zero performance impact.",
    image: "/CDImage.webp",
    icon: ShieldCheck,
    cta: "Get Started",
    tags: ["Read-Only", "Control Plane", "Zero Trust"],
  },
  {
    title: "AI Analysis",
    description:
      "Our profiling engine analyzes hundreds of measures to identify misconfigurations, waste, and optimization opportunities across your cloud estate. It examines resource configurations, usage metrics, and billing data to pinpoint over-provisioning.",
    image: "/RealiseSaving.webp",
    icon: Cpu,
    cta: "Learn More",
    tags: ["Profiling Engine", "Usage Metrics", "Optimization"],
  },
  {
    title: "Realize Savings",
    description:
      "We provide an assured savings estimate before implementation. Our team helps execute recommended optimizations, and you only pay a percentage of the savings realized through our performance-based model.",
    image: "/AIAnalysis.webp",
    icon: TrendingUp,
    cta: "See Results",
    tags: ["Assured Savings", "Performance Model", "ROI"],
  },
];

export default function ImageGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full dark:bg-black pt-4 pb-14">
      
      {/* =========================================================
          1. MOBILE & TABLET STATIC LAYOUT (< xl screens)
         ========================================================= */}
      <div className="block xl:hidden max-w-2xl mx-auto space-y-10 px-[40px] md:px-[60px] xl:px-[160px]">
        <div className="space-y-4">
          <H2>How CloudDIET Works For You</H2>
          <P className="text-gray-700 dark:text-gray-300 max-w-xl">
            A secure, four-step process combining AI-powered analysis with
            engineering expertise to guarantee cloud savings, without ever
            accessing your data.
          </P>
          <div className="pt-2">
            <a
              href="https://clouddiet.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#009565] hover:bg-[#007a53] text-white font-quadran font-regular tracking-wider uppercase px-6 py-3.5 rounded-[4px] transition-all shadow-md"
            >
              <span>Book a demo</span>
            </a>
          </div>
        </div>

        <div className="space-y-8 pt-2">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900/60 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#009565] flex items-center justify-center text-white shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <H3 className="text-[#009565]">{item.title}</H3>
                </div>

                <P className="text-gray-700 dark:text-gray-300">{item.description}</P>

                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <a
                  href="https://clouddiet.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-regular font-quadran tracking-wider text-[#009565] hover:underline"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          2. DESKTOP 50/50 SPLIT LAYOUT (>= xl screens)
         ========================================================= */}
      <div className="hidden xl:block relative w-full px-[40px] md:px-[60px] xl:px-[160px]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
          
          {/* LEFT 50% (col-span-5): Static Content */}
          <div className="col-span-6 space-y-6 pr-4">
            <div className="space-y-4">
              <H2 className="">
                How CloudDIET Works For You
              </H2>
              <P className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
              <P className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </P>
            </div>

            <div className="pt-2">
              <a
                href="https://clouddiet.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#009565] hover:bg-[#007a53] text-white font-quadran font-light px-7 py-2 rounded-[4px] transition-all shadow-sm"
              >
                <span>Book a demo</span>
              </a>
            </div>
          </div>

          {/* RIGHT 50% (col-span-7): 3 Cards Side-by-Side (Expanding Accordion) */}
          <div className="col-span-6 flex gap-3 h-[450px] w-full">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-tr-[2.5rem] rounded-tl-xl rounded-bl-xl rounded-br-xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer flex flex-col justify-between shadow-2xl ${
  isActive 
    ? "flex-[3]" /* Decreased from 4.5 */
    : "flex-[0.55] bg-gradient-to-t from-[#001a11] via-[#003825] to-[#005c3d]"
}`}
                >
                  {isActive ? (
                    /* PREMIUM ACTIVE CARD LAYOUT WITH ANIMATIONS */
                    <div className="relative w-full h-full flex flex-col justify-between p-8 overflow-hidden">
                      {/* Background Image */}
                      <motion.div 
                        className="absolute inset-0 z-0"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Premium multi-stop gradient for clear text readability and deep contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                      </motion.div>

                      {/* Top Header: Floating Icon Badge & Step Indicator */}
                      <motion.div 
                        className="relative z-10 flex justify-between items-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      >
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-[#009565]/90 backdrop-blur-md flex items-center justify-center text-white shadow-xl border border-white/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="w-7 h-7" />
                        </motion.div>
                      </motion.div>

                      {/* Bottom Content Area */}
                      <div className="relative z-10 space-y-3.5 max-w-lg">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                          <H3 className="text-white">
                            {item.title}
                          </H3>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        >
                          <P className="text-gray-200">
                            {item.description}
                          </P>
                        </motion.div>

                        {/* Interactive Pill Tags */}
                        {item.tags && (
                          <motion.div 
                            className="flex flex-wrap gap-2 pt-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                          >
                            {item.tags.map((tag, tagIdx) => (
                              <motion.span
                                key={tagIdx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 + (tagIdx * 0.1) }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,149,101,1)" }}
                                className="inline-flex items-center gap-1.5 bg-[#009565]/80 backdrop-blur-sm text-white font-quadran font-light text-xs px-3 py-2 rounded-full border border-white/10 shadow-sm"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}

                        {/* Action CTA Link */}
                        <motion.div 
                          className="pt-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        >
                          <motion.a
                            href="https://clouddiet.ai/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex items-center gap-2 font-light font-quadran tracking-wider text-white underline underline-offset-4 hover:text-[#009565] transition-colors"
                          >
                            <span>{item.cta}</span>
                          </motion.a>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    /* INACTIVE VERTICAL TAB LAYOUT */
                    <div className="relative w-full h-full flex flex-col justify-between items-center py-8 px-2">
                      <div className="my-auto flex items-center justify-center h-full">
                        <H4 className="tracking-wider whitespace-nowrap -rotate-90 origin-center text-white/90">
                          {item.title}
                        </H4>
                      </div>

                      <div className="mt-auto flex flex-col items-center space-y-3">
                        <div className="w-6 h-[1px] bg-white/30" />
                        <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 shadow-inner">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}