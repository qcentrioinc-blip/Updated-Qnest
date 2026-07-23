import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { H3, H4, P } from "../../../styles/Typography"
import { HoverExpandImage } from "./HoverExpandImage"
 
const sections = [
  { id: "optimizations", label: "Insights " },
  { id: "cloud", label: " Optimization " },
  { id: "security", label: "Security" },
]
 
// --- Image URLs for each feature ---
const featureImages = [
  "/AI-CloudFinOps/Features/Feature1.webp",
  "/AI-CloudFinOps/Features/Feature2.webp",
  "/AI-CloudFinOps/Features/Feature3.webp",
  "/AI-CloudFinOps/Features/Feature4.webp",
  "/AI-CloudFinOps/Features/Feature5.webp",
  "/AI-CloudFinOps/Features/Feature6.webp",
  "/AI-CloudFinOps/Features/Feature7.webp",
  "/AI-CloudFinOps/Features/Feature8.webp",
  "/AI-CloudFinOps/Features/Feature9.webp",
]
 
 
// --- Configuration Data & Mockups ---
interface Feature {
  id: number;
  title: string;
  description: string;
  color: string;
  highlight: string;
  borderColor: string;
}
 
 
const features: Feature[] = [
  {
    id: 1,
    title: " Interactive Forecasting & Alerts",
    description: "Predict future spend, set budgets, and spot issues fast. Track savings plans and fixes across subscriptions. ",
    color: "bg-blue-600",
    highlight: "text-blue-500",
    borderColor: "border-blue-500",
  },
  {
    id: 2,
    title: "Granular Cost Attribution ",
    description: "View costs at the table or SKU level, not just workspace summaries. More detail than Azure billing. ",
    color: "bg-purple-600",
    highlight: "text-purple-500",
    borderColor: "border-purple-500",
  },
  {
    id: 3,
    title: " Resource Cost Drilling ",
    description: "Drill into any resource to see cost drivers and usage patterns. Identify optimization potential in detail. ",
    color: "bg-emerald-600",
    highlight: "text-emerald-500",
    borderColor: "border-emerald-500",
  },
  {
    id: 4,
    title: "Daily Trend Monitoring",
    description: "Track spending patterns daily, weekly, or monthly. Spot anomalies and seasonal trends in your cloud spend. ",
    color: "bg-rose-600",
    highlight: "text-rose-500",
    borderColor: "border-rose-500",
  },
  {
    id: 5,
    title: "Tag-Based Allocation ",
    description: "Assign costs by department, project, or team using Azure tags. Enable accurate showback and chargeback reporting. ",
    color: "bg-indigo-600",
    highlight: "text-indigo-500",
    borderColor: "border-indigo-500",
  },
  {
    id: 6,
    title: "Savings Plan Tracking ",
    description: "Visualize how Savings Plans and Reserved Instances impact your current and forecasted cloud spend over time. ",
    color: "bg-amber-600",
    highlight: "text-amber-500",
    borderColor: "border-amber-500",
  },
  {
    id: 7,
    title: " Anomaly Detection ",
    description: "Receive alerts when spending spikes or deviates from expected patterns. Respond quickly to overspend risks. ",
    color: "bg-green-600",
    highlight: "text-green-500",
    borderColor: "border-green-500",
  },
  {
    id: 8,
    title: "Custom Dashboards ",
    description: "Build and save personalized cost views and reports. Tailor dashboards to your team’s specific needs and goals. ",
    color: "bg-cyan-600",
    highlight: "text-cyan-500",
    borderColor: "border-cyan-500",
  },
  {
    id: 9,
    title: " Export & Integration ",
    description: "Export cost data or integrate insights into your BI, FinOps, and governance tools seamlessly. ",
    color: "bg-orange-600",
    highlight: "text-orange-500",
    borderColor: "border-orange-500",
  },
];
 
// --- Sub-Component: Feature Visualization (Image & Pagination) ---
interface FeatureVisualizationProps {
  activeFeature: number;
  onDotClick: (index: number) => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  animate?: boolean;
  mobileAnimKey?: number; // ✅ ADD THIS
}
 
 
const FeatureVisualization: React.FC<FeatureVisualizationProps> = ({
  activeFeature,
  onDotClick,
  onNavigate,
  animate = true,
  mobileAnimKey = 0, // ✅ DEFAULT SAFE VALUE
}) => {
 
  return (
    <div className="w-full">
      {/* Image Container */}
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[450px] xl:h-[400px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-black">
        {animate ? (
          // Desktop animation - SMOOTHED SLIDE UP
          <AnimatePresence initial={false} mode="wait">
            <motion.div
  key={`${activeFeature}-${mobileAnimKey}`}
  initial={{ opacity: 0, y: 30 }}
  animate={{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1]
    }
  }}
  exit={{
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }}
  className="absolute inset-0 w-full h-auto"
>
 
              <HoverExpandImage
                src={featureImages[activeFeature]}
                className="w-full h-full"
                objectFit="contain"
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          // Mobile/Tablet - no animation logic handled here
          <div className="absolute inset-0 w-full h-full">
           <HoverExpandImage
              src={featureImages[activeFeature]}
              className="w-full h-full"
              objectFit="contain"
            />
 
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-2 bg-white/95  dark:bg-black backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <div className={`w-3 h-3 rounded-full ${features[activeFeature].color}`}></div>
                <span className="font-quicksand font-regular text-gray-900">
                  Feature {features[activeFeature].id}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
 
      {/* Pagination Controls - Desktop Only */}
      <div className="mt-6 hidden xl:flex justify-center items-center gap-4">
        {/* Prev Button (<) - Hidden if at first feature */}
        {activeFeature > 0 && (
          <button
            onClick={() => onNavigate('prev')}
            className="p-2 rounded-lg border border-gray-200 bg-white transition-all duration-300 shadow-sm hover:border-[#00AA72] hover:text-[#00AA72] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
        )}
 
        {/* Dots */}
        <div className="flex items-center gap-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onDotClick(idx)}
              className={`transition-all duration-300 ${idx === activeFeature
                ? `${features[activeFeature].color} scale-110 shadow-md`
                : "bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
              style={{
                width: idx === activeFeature ? "24px" : "12px",
                height: idx === activeFeature ? "24px" : "12px"
              }}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>
 
        {/* Next Button (>) - Hidden if at last feature */}
        {activeFeature < features.length - 1 && (
          <button
            onClick={() => onNavigate('next')}
            className="p-2 rounded-lg border border-gray-200 bg-white transition-all duration-300 shadow-sm hover:border-[#00AA72] hover:text-[#00AA72] active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        )}
      </div>
    </div>
  );
};
 
// --- Sub-Component: Text Item (Right Side) ---
interface FeatureItemProps {
  feature: Feature;
  index: number;
  setInView: (i: number) => void;
}
 
const FeatureItem: React.FC<FeatureItemProps> = ({
  feature,
  index,
  setInView,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px"
  });
 
  useEffect(() => {
    if (isInView) setInView(index);
  }, [isInView, index, setInView]);
 
  return (
    <div
      ref={ref}
      data-feature-index={index}
      className={`
        min-h-[40vh]    sm:min-h-[40vh] xl:min-h-[80vh] flex flex-col justify-center px-2 sm:px-8 py-8 sm:py-10 transition-all duration-500
        ${isInView ? "opacity-100 scale-100" : "opacity-30 scale-95"}
      `}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className={`text-5xl dark:text-white sm:text-6xl font-bold opacity-20 ${feature.highlight}`}>0{feature.id}</span>
      </div>
      <h3 className="text-3xl sm:text-2xl md:text-2xl font-bold text-[#00AA72]  dark:text-white   mb-4 sm:mb-6 leading-tight">
        {feature.title}
      </h3>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
        {feature.description}
      </p>
    </div>
  );
};
 
// --- Sub-Component: Mobile/Tablet Feature Block ---
interface MobileFeatureBlockProps {
  feature: Feature;
  index: number;
  isActive: boolean;
}
 
const MobileFeatureBlock: React.FC<MobileFeatureBlockProps> = ({
  feature,
  index,
  isActive,
}) => {
  return (
    <div
      id={`mobile-feature-${index}`}
      className="w-full scroll-mt-24"
    >
      {/* Text Block */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span
            className={`text-4xl font-bold transition-all duration-300 ${isActive ? `opacity-70 ${feature.highlight}` : "opacity-50 text-gray-400"
              }`}
          >
            0{feature.id}
          </span>
          {/* <div
            className={`p-3 rounded-xl transition-all duration-300 ${feature.color} ${isActive ? "opacity-100 shadow-lg" : "opacity-70 shadow"
              }`}
          >
            <div className="w-6 h-6"></div>
          </div> */}
        </div>
        <H4
          className={`mb-3 transition-all duration-300 ${isActive ? "text-[#00AA72]" : "text-gray-700"
            }`}
        >
          {feature.title}
        </H4>
        <P
          className={`leading-relaxed transition-all duration-300 ${isActive ? "text-gray-800" : "text-gray-500"
            }`}
        >
          {feature.description}
        </P>
      </div>
 
      {/* Image Block */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={`image-${index}`}
            initial={{
              opacity: 0,
              y: 20,
              height: 0,
              marginBottom: 0
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: 220,
             
              marginBottom: 32
            }}
            exit={{
              opacity: 0,
              y: -20,
              height: 0,
              marginBottom: 0
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className="relative w-full rounded-xl overflow-hidden shadow-md mt-4"
          >
            <img
              src={featureImages[index]}
              alt={`Feature ${index + 1}`}
              className="w-full h-full object-contain md:object-cover"
            />
 
            {/* Feature Indicator */}
            {/* <div className="absolute top-4 left-4">
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <div className={`w-3 h-3 rounded-full ${feature.color}`}></div>
                <span className="text-sm font-medium text-gray-900">
                  Feature {feature.id}
                </span>
              </div>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
 
export default function StickyPremiumSections() {
  const [active, setActive] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [activeFeature, setActiveFeature] = useState<number>(0)
 
  const [mobileAnimKey, setMobileAnimKey] = useState(0);
const hasAnimatedOnMobile = useRef(false);
 
  const hasInitializedMobileFeature = useRef(false);
 
 
  const storyboardRef = useRef<HTMLDivElement>(null)
  const activeFeatureRef = useRef<number>(0)
 
  // Store refs for each section
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  useEffect(() => {
    sectionRefs.current = sections.map(section =>
      document.getElementById(section.id)
    )
  }, [])
 
  useEffect(() => {
  if (window.innerWidth >= 1280) return;
 
  const section = document.getElementById("security");
  if (!section) return;
 
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimatedOnMobile.current) {
        hasAnimatedOnMobile.current = true;
        setMobileAnimKey((k) => k + 1); // 🔥 FORCE REMOUNT
      }
    },
    { threshold: 0.3 }
  );
 
  observer.observe(section);
 
  return () => observer.disconnect();
}, []);
 
 
  // INTERSECTION OBSERVER OPTIMIZATION
  const containerRef = useRef<HTMLDivElement>(null);
  const isInternalIntersecting = useRef(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      isInternalIntersecting.current = entry.isIntersecting;
    }, { rootMargin: "200px" }); // Buffer to start slightly before view
 
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);
 
  // Main scroll handler for section detection (Sections 1 & 2)
  useEffect(() => {
    let ticking = false
 
    const onScroll = () => {
      // Optimization: Skip if not visible
      if (!isInternalIntersecting.current) return;
 
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
 
          let currentActive = 0
          let currentProgress = 0
 
          sections.forEach((section, index) => {
            const element = document.getElementById(section.id)
            if (!element) return
 
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top + scrollY
            const elementBottom = elementTop + element.offsetHeight
 
            if (scrollY + windowHeight * 0.2 >= elementTop &&
              scrollY + windowHeight * 0.2 < elementBottom) {
              currentActive = index
 
              const sectionStart = elementTop - windowHeight * 0.5
              const sectionEnd = elementBottom - windowHeight * 0.5
              const sectionLength = sectionEnd - sectionStart
 
              if (sectionLength > 0) {
                currentProgress = (scrollY - sectionStart) / sectionLength
                currentProgress = Math.max(0, Math.min(1, currentProgress))
              }
            }
          })
 
          if (currentProgress === 0) {
            sections.forEach((section, index) => {
              const element = document.getElementById(section.id)
              if (!element) return
 
              const rect = element.getBoundingClientRect()
              const elementTop = rect.top + scrollY
 
              if (scrollY >= elementTop) {
                currentActive = index
                currentProgress = 1
              }
            })
          }
 
          setActive(currentActive)
          setProgress(currentProgress)
 
          ticking = false
        })
 
        ticking = true
      }
    }
 
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
 
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
 
  // FIXED: Unified Scroll Handler for Mobile and Tablet
  useEffect(() => {
  if (typeof window === 'undefined' || window.innerWidth >= 1280) return;
 
  let ticking = false;
 
  const updateActiveFeature = () => {
    // ✅ ALLOW FIRST CALCULATION EVEN IF NOT INTERSECTING
    if (!isInternalIntersecting.current && hasInitializedMobileFeature.current) {
      return;
    }
 
    if (ticking) return;
    ticking = true;
 
    requestAnimationFrame(() => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + viewportHeight / 2;
 
      let bestMatchIndex = activeFeatureRef.current;
      let closestDistance = Infinity;
 
      for (let i = 0; i < features.length; i++) {
        const element = document.getElementById(`mobile-feature-${i}`);
        if (!element) continue;
 
        const rect = element.getBoundingClientRect();
        const elementTop = scrollY + rect.top;
        const elementCenter = elementTop + rect.height / 2;
 
        const distance = Math.abs(elementCenter - viewportCenter);
        const isInViewport =
          rect.top < viewportHeight * 0.8 &&
          rect.bottom > viewportHeight * 0.2;
 
        if (isInViewport && distance < closestDistance) {
          closestDistance = distance;
          bestMatchIndex = i;
        }
      }
 
      if (bestMatchIndex !== activeFeatureRef.current) {
        setActiveFeature(bestMatchIndex);
        activeFeatureRef.current = bestMatchIndex;
      }
 
      // ✅ MARK INITIALIZATION COMPLETE
      hasInitializedMobileFeature.current = true;
 
      ticking = false;
    });
  };
 
  window.addEventListener("scroll", updateActiveFeature, { passive: true });
 
  // ✅ FORCE INITIAL CALCULATION AFTER LAYOUT
  const timeoutId = setTimeout(() => {
    updateActiveFeature();
  }, 120);
 
  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener("scroll", updateActiveFeature);
  };
}, []);
 
 
 
 
 
  // Desktop scroll handler for feature activation (Section 3)
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1280) return;
 
    const handleDesktopScroll = () => {
      // Optimization: Skip if not visible
      if (!isInternalIntersecting.current) return;
 
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + viewportHeight / 2;
 
      let bestMatchIndex = activeFeatureRef.current;
      let closestDistance = Infinity;
 
      // Find the feature text element closest to viewport center
      features.forEach((_, index) => {
        const element = document.querySelector(`[data-feature-index="${index}"]`);
        if (!element) return;
 
        const rect = element.getBoundingClientRect();
        const elementTop = scrollY + rect.top;
        const elementHeight = rect.height;
        const elementCenter = elementTop + elementHeight / 2;
 
        const distance = Math.abs(elementCenter - viewportCenter);
 
        // Check if element is mostly in viewport
        const isInViewport = rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2;
 
        if (isInViewport && distance < closestDistance) {
          closestDistance = distance;
          bestMatchIndex = index;
        }
      });
 
      if (bestMatchIndex !== activeFeatureRef.current) {
        setActiveFeature(bestMatchIndex);
        activeFeatureRef.current = bestMatchIndex;
      }
    };
 
    // Throttle desktop scroll
    let desktopScrollTimeout: number | null = null;
    const throttledDesktopScroll = () => {
      if (desktopScrollTimeout) return;
 
      desktopScrollTimeout = window.setTimeout(() => {
        handleDesktopScroll();
        desktopScrollTimeout = null;
      }, 16);
    };
 
    window.addEventListener("scroll", throttledDesktopScroll, { passive: true });
 
    // Initial calculation
    handleDesktopScroll();
 
    return () => {
      window.removeEventListener("scroll", throttledDesktopScroll);
      if (desktopScrollTimeout) {
        clearTimeout(desktopScrollTimeout);
      }
    };
  }, []);
 
  // Scroll to section handler
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }
 
  // Handle dot click for desktop
  const handleDotClick = (index: number) => {
    setActiveFeature(index)
    // Scroll to the text element associated with this feature
    const element = document.querySelector(`[data-feature-index="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
 
  // Handle Navigation buttons for desktop (Start, End, Prev, Next)
  const handleNavigate = (direction: "prev" | "next") => {
    const isDesktop = window.innerWidth >= 1280;
 
    // NEXT
    if (direction === "next") {
      // Note: We removed the scroll-to-bottom logic here since the button is now hidden at the end.
      if (activeFeature === features.length - 1) {
         return
      }
      setActiveFeature(prev => prev + 1)
    }
 
    // PREV
    if (direction === "prev") {
      // Note: We removed the scroll-to-section logic here since the button is now hidden at the start.
      if (activeFeature === 0) {
        return
      }
      setActiveFeature(prev => prev - 1)
    }
 
    // Scroll corresponding feature text (desktop)
    const nextIndex =
      direction === "next" ? activeFeature + 1 : activeFeature - 1
 
    if (isDesktop) {
      const el = document.querySelector(
        `[data-feature-index="${nextIndex}"]`
      )
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }
 
  return (
    <div ref={containerRef} className="relative dark:bg-black w-full overflow-visible">
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
        <div className="max-w-8xl mx-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center justify-between w-full gap-3">
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(i)}
                  className={`px-4 py-2 font-quadran font-regular rounded-full transition-all duration-300 shadow-sm
                    ${active === i
                      ? "bg-[#00AA72] text-white shadow-lg"
                      : "text-gray-600 hover:text-[#00AA72] hover:bg-gray-100"
                    }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
 
          {/* Progress Bar */}
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-[#00AA72] shadow-sm"
              animate={{ width: `${((active + progress) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
 
      <div className="max-w-full px-[40px] md:px-[60px] xl:px-[160px]  flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
 
        {/* LEFT NAV (Desktop and iPad Pro - lg screens and above) */}
        <div className="hidden lg:block w-56 sticky top-32 space-y-4 lg:mt-14 xl:mt-42">
          {sections.map((s, i) => (
            <div key={s.id} className="relative">
              <button
                onClick={() => scrollToSection(i)}
                className={`w-full flex items-center gap-2 uppercase font-bold
                  font-quadran   leading-[120%] transition-all duration-300
                  ${active === i ? "text-[#00AA72] font-semibold" : "text-gray-400 hover:text-gray-600"}`}
              >
                <span className={`h-2 w-2 rounded-full font-quadran font-regular transition-all duration-300 flex-shrink-0
                  ${active === i ? "bg-[#00AA72] shadow" : "bg-gray-300"}`} />
                <span className="text-left">{s.label}</span>
              </button>
 
              {/* Progress bar container */}
              {active === i && (
                <div className="relative mt-2 h-[2px] w-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-[#00AA72]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
              )}
 
            </div>
          ))}
        </div>
 
        {/* RIGHT CONTENT - REDUCED SPACING */}
        <div className="flex-1 space-y-12 md:space-y-16 lg:space-y-16">
 
          {/* Section 1 */}
          <section
            id="optimizations"
            className="min-h-[30vh] sm:min-h-[30vh] xl:min-h-[90vh] scroll-mt-20 xl:scroll-mt-32 mt-4 lg:mt-10 xl:mt-16 mx-6 lg:mx-4"
          >
            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16">
              <H3 className="text-[#00AA72]">
                Transform Your Cloud Spend with AI Insights
                {/* <br className="hidden lg:block" />
                <span className="hidden lg:inline-block lg:ml-[-10px] xl:ml-100" />
                Spend with AI Insights */}
              </H3>
 
              <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:mt-4">
 
                {/* LEFT BLOCK */}
                <div className="mt-3 md:mt-4 lg:mt-6 lg:p-6">
                  <H3 className="text-[#00AA72] mb-3">
                    Engineering-Led Profiling
                  </H3>
                  <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                    CloudDIET's AI-powered profiler analyzes Azure configuration, usage, and billing metadata without accessing your data. It identifies misconfigurations, over-provisioning, and optimization opportunities across IaaS, PaaS, and Azure services.
                  </P>
 
                  <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full md:w-[700px] lg:w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl bg-white shadow-md overflow-hidden">
                     <img
    src="/AI-CloudFinOps/Features/Insights1.webp"
    className="w-full h-full object-contain lg:hidden"
    alt=""
  />
 
  {/* ✅ Desktop only */}
  <div className="hidden lg:block w-full h-full">
    <HoverExpandImage
      src="/AI-CloudFinOps/Features/Insights1.webp"
      className="w-full h-full object-contain"
      alt=""
    />
  </div>
                  </div>
                </div>
 
                {/* RIGHT BLOCK */}
                <div className="xl:mt-6 md:mt-6 lg:mt-3 mt-6 lg:p-6">
                  <H3 className="text-[#00AA72] mb-3">
                    Advanced Cost Intelligence
                  </H3>
                  <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                    Go beyond basic FinOps with deep cost attribution, granular spend breakdowns, and trend analysis. View costs at the resource, table, or SKU level—insights standard Azure billing can't provide.
                  </P>
 
                  <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full  md:w-[700px] lg:w-[700px] h-[180px] sm:h-[280px] md:h-[350px] lg:h-[400px]  md:rounded-2xl bg-white overflow-hidden">
                     <img
    src="/AI-CloudFinOps/Features/Insights2.webp"
    className="w-full h-full object-contain lg:hidden"
    alt=""
  />
 
  {/* ✅ Desktop only */}
  <div className="hidden lg:block w-full h-full">
    <HoverExpandImage
      src="/AI-CloudFinOps/Features/Insights2.webp"
      className="w-full h-full object-contain"
      alt=""
    />
    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
 
          {/* Section 2 */}
          <section
            id="cloud"
            className="min-h-[40vh] sm:min-h-[40vh] xl:min-h-[90vh] scroll-mt-20 lg:scroll-mt-32"
          >
            <H3 className="text-[#00AA72] mx-6">
              Engineered for Azure Cost  Intelligence & Savings
              {/* <br className="hidden lg:block" />
              <span className="hidden lg:inline-block lg:ml-[-10px] xl:ml-100" />
              Intelligence & Savings */}
            </H3>
 
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:mt-6">
 
              {/* LEFT BLOCK */}
              <div className="p-6 md:mt-6 lg:mt-8">
                <H3 className="text-[#00AA72] mb-3">
                  Savings Plan Designer
                </H3>
                <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                  Model and optimize Azure Savings Plan commitments with interactive what-if analysis. Adjust terms, commitment percentages, and forecast savings while avoiding overcommitment—all backed by real usage data.
                </P>
 
                <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full md:w-[700px] lg:w-[700px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl bg-white shadow-md overflow-hidden">
                   <img
    src="/AI-CloudFinOps/Features/Optimization1.webp"
    className="w-full h-full object-contain lg:hidden"
    alt=""
  />
 
  {/* ✅ Desktop ONLY (Hover expand enabled) */}
  <div className="hidden lg:block w-full h-full">
    <HoverExpandImage
      src="/AI-CloudFinOps/Features/Optimization1.webp"
      className="w-full h-full object-contain"
      alt=""
    />
  </div>
                </div>
              </div>
 
              {/* RIGHT BLOCK */}
              <div className="p-6 md:mt-6 lg:mt-8">
                <H3 className="text-[#00AA72] mb-3">
                  Guided Optimization Workflows
                </H3>
                <P className="leading-relaxed mb-4 max-w-full md:max-w-2xl lg:max-w-2xl xl:max-w-xl">
                  Receive categorized savings opportunities with detailed implementation steps, risk assessments, and effort levels (Minimal, Moderate, Significant). CloudDIET helps you prioritize and execute optimizations with confidence.
                </P>
 
                <div className="mt-4 md:mt-8 lg:mt-12 w-full max-w-full md:w-[700px] lg:w-[700px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl bg-white overflow-hidden">
                 
  {/* ✅ Mobile & Tablet */}
  <img
    src="/AI-CloudFinOps/Features/Optimization2.webp"
    className="w-full h-full object-contain lg:hidden"
    alt=""
  />
 
  {/* ✅ Desktop */}
  <div className="hidden lg:block w-full h-full">
    <HoverExpandImage
      src="/AI-CloudFinOps/Features/Optimization2.webp"
      className="w-full h-full object-contain"
      alt=""
    />
  </div>
                </div>
              </div>
            </div>
          </section>
 
          {/* Section 3 - RESPONSIVE STICKY SCROLL SECTION */}
          <section
            ref={storyboardRef}
            id="security"
            className="relative w-full px-4 bg-white  dark:bg-black font-quadran  "
          >
            <H3 className="text-[#00AA72]">
              Multi-Dimensional Cost Views
              {/* <br className="hidden lg:block" />
              <span className="hidden dark:text-white lg:inline-block lg:ml-60 xl:ml-100" />
              Cost Views */}
            </H3>
 
            <P className="mt-6 md:mt-8 xl:mt-10 max-w-full md:max-w-3xl xl:max-w-5xl leading-relaxed">
              See Azure costs by service, resource, or tag. Zoom from trends to details, better than basic Azure tools. Identify cost drivers at table or SKU level with granular breakdowns. Pinpoint waste and accelerate decisions with clarity.
            </P>
 
 
            <div className="mt-10 md:mt-10 xl:mt-12 w-full lg:w-[750px] xl:w-[1000px] h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[550px] rounded-xl lg:rounded-2xl overflow-hidden bg-white">
              <img
                src="/AI-CloudFinOps/Features/outbound1.webp"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            {/* Desktop Layout (xl screens and above - 1280px+) */}
            <div className="hidden xl:flex relative w-full max-w-[1400px] mx-auto flex-row">
 
              {/* LEFT COLUMN: Sticky Image Display (Increased Width - 2/3rds) */}
              <div className="w-2/3 h-screen sticky top-0 flex items-center justify-center p-6 bg-transparent">
                <div className="w-full h-full flex items-center justify-center">
                  <FeatureVisualization
  activeFeature={activeFeature}
  onDotClick={handleDotClick}
  onNavigate={handleNavigate}
  animate={true}
  mobileAnimKey={mobileAnimKey} // ✅ PASS IT
/>
 
                </div>
              </div>
 
              {/* RIGHT COLUMN: Scrollable Feature List (Decreased Width - 1/3rd) */}
              <div className="w-1/3 relative z-10">
                <div className="h-[15vh]" />
 
                <div className="flex flex-col pb-20">
                  {features.map((feature, index) => (
                    <div key={feature.id} data-feature-index={index}>
                      <FeatureItem
                        feature={feature}
                        index={index}
                        setInView={(i) => setActiveFeature(i)}
                      />
                    </div>
                  ))}
                </div>
 
                <div className="h-[15vh]" />
              </div>
            </div>
 
            {/* Mobile & Tablet Layout (below xl screens - <1280px) */}
           
            <div className="xl:hidden w-full py-8 sm:py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Vertical Stack of Feature Blocks */}
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={feature.id} id={`mobile-feature-${index}`}>
                      <MobileFeatureBlock
                        feature={feature}
                        index={index}
                        isActive={activeFeature === index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
 
 
          </section>
        </div>
      </div>
 
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
       
        @media (max-width: 768px) {
          .max-w-8xl {
            max-width: 100%;
          }
        }
       
        * {
          scroll-behavior: smooth;
        }
       
        /* Glow effect for active text blocks */
        .glow-effect {
          box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 0 20px -5px currentColor;
        }
       
        /* Smooth transitions for mobile features */
        #mobile-feature-* {
          transition: all 0.3s ease-out;
        }
       
        /* Better scroll performance */
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}