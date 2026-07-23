"use client";

import { useEffect, useRef, useState } from "react";
import { H2, H4 } from "../../../styles/Typography";

const tabs = ["Inventory", "Fixed Assets", "Security"];

const tabImages = [
  "/Gain.webp",
   "/FixedAsset.webp",
     "/security.webp",
];

const tabData = [
  {
    items: [
      {
        icon: "/LOS/Location.svg",
        heading: "Distribute Items Across Locations",
        para: "System enables distribution of inventory items such as cheque books, cards, and certificates to various branches and locations. Each location receives allocated stock based on demand and usage patterns for efficient inventory control. ",
      },
      {
        icon: "/LOS/Book.svg",
        heading: "Book Purchase Expenses Automatically",
        para: "When inventory items are procured, the system automatically books purchase expenses against the appropriate accounts. This ensures accurate cost tracking and eliminates manual entry errors in financial records.",
      },
      {
        icon: "/LOS/Dollar.svg",
        heading: "Book Revenue for Distribution",
        para: "When inventory items are distributed to customers or branches, the system automatically books revenue. This provides real-time visibility into income generated from inventory-related services and products.",
      },
    ],
  },
  {
    items: [
      {
        icon: "/LOS/Assets.svg",
        heading: "Calculate Depreciation Automatically",
        para: "System automatically calculates depreciation for fixed assets through EOD batch processes based on predefined methods and schedules. Accounting entries are posted without manual intervention, ensuring accuracy and consistency across all asset categories.",
      },
      {
        icon:"/LOS/Balance.svg",
        heading: "Write Off Assets with Entries",
        para: "When assets are retired or disposed, the system facilitates write-off processing. Automatic accounting entries are posted to reflect the disposal, maintaining accurate asset registers and financial statements.",
      },
      {
        icon: "/LOS/Allocation.svg",
        heading: "Track Asset Lifecycle Completely",
        para: " Complete tracking of fixed assets from acquisition to disposal including purchase date, cost, accumulated depreciation, and current book value. Reports provide visibility into asset utilization and remaining useful life.",
      },
    ],
  },
  {
    items: [
      {
        icon: "/LOS/Icon.svg",
        heading: "OWASP Top 10 Standards",
        para: "Platform adheres to OWASP Top 10 security standards addressing critical vulnerabilities including injection attacks, broken authentication, and sensitive data exposure. Regular security assessments ensure ongoing compliance with industry benchmarks.",
      },
      {
        icon: "/LOS/Setting.svg",
        heading: "Role-Based Access Control",
        para: " Granular role-based access control with permissions defined at menu and transaction levels. Users are assigned read-only, write-only, or both access types based on their responsibilities and organizational hierarchy.",
      },
      {
        icon: "/LOS/Audit.svg",
        heading: "Comprehensive Audit Trails",
        para: " All user actions and system events are logged with timestamps and user details. Complete audit trails enable forensic analysis, regulatory reporting, and investigation of unauthorized activities or discrepancies.",
      },
    ],
  },
];

// ─── Mobile view ─────────────────────────────────────────────────────────────
function MobileView() {
  const tabsRef = useRef<HTMLDivElement>(null);
 const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
  const container = tabsRef.current;
  if (!container) return;

  const activeEl = container.children[activeTab] as HTMLElement;
  if (!activeEl) return;

  activeEl.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}, [activeTab]);

 
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(index);
          }
        },
        { threshold: 0.4 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="xl:hidden flex flex-col ">
 
      {/* ✅ STICKY TABS */}
      <div className="sticky top-12 z-20 bg-[#00AA72] py-4">
     <div
  ref={tabsRef}
  className="flex gap-3 overflow-x-auto no-scrollbar"
>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() =>
                sectionRefs.current[i]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className={`flex-shrink-0 px-5 font-quicksand text-[18px] py-2.5 rounded-full text-sm font-medium border whitespace-nowrap transition ${
                activeTab === i
                  ? "bg-white text-[#00AA72] border-white"
                  : "text-gray-300 border-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ VERTICAL SCROLL CONTENT */}
      <div className="flex flex-col gap-16 mt-6">
        {tabData.map((tab, tabIndex) => (
          <div
            key={tabIndex}
            ref={(el) => {sectionRefs.current[tabIndex] = el}}
            className="min-h-[70vh] flex flex-col gap-6"
          >
            {/* IMAGE */}
            <div className="h-[240px] rounded-2xl overflow-hidden">
              <img
                src={tabImages[tabIndex]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ITEMS */}
            {tab.items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
               <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
  <img src={item.icon} alt="" className="w-6 h-6" />
</div>

                <H4 className="text-white font-semibold">
                  {item.heading}
                </H4>

                <p className="text-[#CCCCCC] text-[16px] leading-relaxed">
                  {item.para} 
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop sticky-scroll view (unchanged) ──────────────────────────────────
function DesktopView() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { top, height } = scrollRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / (height - windowHeight)));
      if (progress < 0.33) setActiveTab(0);
      else if (progress < 0.66) setActiveTab(1);
      else setActiveTab(2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentData = tabData[activeTab];

  return (
    <div
      ref={scrollRef}
      style={{ height: "300vh" }}
      className="relative hidden xl:block"
    >
      <div className="sticky top-20 h-[95vh] flex items-start">
        <div className="w-full flex flex-row gap-10 xl:gap-16">

          {/* Left: Image */}
          <div className="w-full lg:w-[30%] flex-shrink-0">
            <div
              className="relative rounded-3xl overflow-hidden bg-gray-200 shadow-2xl"
              style={{ height: "640px" }}
            >
              <img
                key={activeTab}
                src={tabImages[activeTab]}
                alt="Clinic insight"
                className="w-full h-full object-cover opacity-90"
                style={{ animation: "fadeIn 0.6s ease forwards" }}
              />
            </div>
          </div>

          {/* Right: Tabs + content */}
          <div className="w-full lg:w-[70%] flex flex-col">
            <div className="flex flex-wrap gap-3 mb-2">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-12 py-1 font-quicksand text-[18px] rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeTab === i
                      ? "bg-white text-[#00AA72] border-white"
                      : "bg-transparent text-gray-300 border-[#FAFAFA] hover:border-green-900 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {currentData.items.map((item, idx) => (
                <div
                  key={`${activeTab}-${idx}`}
                  className="flex flex-col gap-1"
                  style={{
                    opacity: 0,
                    transform: "translateY(16px)",
                    animation: `slideUp 0.45s ease ${idx * 0.1}s forwards`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-blue-500/30 flex items-center justify-center shadow-md shadow-blue-500/10">
  <img src={item.icon} alt="" className="w-6 h-6" />
                  </div>
                  <H4 className="text-white text-lg font-semibold leading-snug mt-1">
                    {item.heading}
                  </H4>
                  <p className="text-[#CCCCCC] font-quicksand text-[18px] leading-relaxed max-w-full">
                    {item.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function Gain() {
  return (
    <section className="bg-[#00AA72] px-6  xl:px-16">
      <div className="max-w-7xl mx-auto xl:px-6">

        {/* H2 — always scrolls normally */}
        <H2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold pt-10 pb-6 leading-tight max-w-full">
          Integrated Operations Management Capabilities
        </H2>

        {/* Mobile / tablet */}
        <MobileView />

        {/* Desktop sticky scroll */}
        <DesktopView />

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 0.9; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}