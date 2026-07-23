"use client"

import { useState, useRef, useEffect } from "react"
import { useScroll } from "framer-motion"
import { Check } from "lucide-react"

type FilterKey =
  | "Data acquisition"
  | "Data enrichment"
  | "Automated matching"
  | "Manual override"
  | "Case management"

interface TabContentData {
  title: string
  description: string
  checkItems: string[]
  image: string
  imageAlt: string
  stats: {
    left: { label: string; value: string }
    right: { label: string; value: string }
  }
}

const tabContent: Record<FilterKey, TabContentData> = {
  "Data acquisition": {
    title: "Data Acquisition From Multiple Sources",
    description:
      "Consolidate data from disparate sources, including bank statements, sales registers, aggregators, and third-party platforms. The system handles Excel, PDFs, CSV files, and proprietary reports through generic and custom parsers.",
    checkItems: [
      "Generic built-in parsers for common file formats",
      "Support for SWIFT, BAI2, MT940, and SAP formats",
      "Centralized database storage for consistent processing",
    ],
    image: "/SAMS/Dataaq.webp",
    imageAlt: "Table",
    stats: {
      left: { label: "Bank accounts reconciled simultaneously in production", value: "100+" },
      right: { label: "Transactions processed during peak volumes", value: "30M" },
    },
  },
  "Data enrichment": {
    title: "Data Enrichment And Attribute Extraction",
    description:
      "Enhance raw data with rule-based enrichment to extract critical identifiers from free text fields. Supports transaction attribute enrichment and consolidated transaction linking for complex one-to-many and many-to-many matching scenarios.",
    checkItems: [
      "Extract transaction IDs from unstructured data",
      "Link consolidated entries to detailed transaction sets",
      "Iterative enrichment configurations supported",
    ],
    image: "/SAMS/Dataenrichment.webp",
    imageAlt: "Analytics Dashboard",
    stats: {
      left: { label: " Reduction in manual data preparation time", value: "90%" },
      right: { label: "Enrichment rules applied per transaction automatically", value: "15+" },
    },
  },
  "Automated matching": {
    title: "Configurable Matching Rules Engine",
    description:
      "Define matching rules and execution sequences based on your specific reconciliation requirements. Apply filter-based search criteria, including date ranges, amounts, and reference numbers. The highly configurable rule engine allows unlimited rules to be added through the front-end interface without coding.",
    checkItems: [
      "Specify columns for searching and matching",
      "Configure reconciliation services and sequences",
      "Support for multiple reconciliation groups",
    ],
    image: "/SAMS/Automated.webp",
    imageAlt: "Compliance Overview",
    stats: {
      left: { label: "Unique reconciliation workflows configured", value: "35+" },
      right: { label: "Automatic matching rate achieved", value: "85%" },
    },
  },
  "Manual override": {
    title: "Manual Override And Review Functions",
    description:
      "Empower users with manual intervention capabilities for exception handling. Select open items from both sources for matching actions. Functions include force match, undo match, provisional match review, partial match review, and exception match review with full audit logging.",
    checkItems: [
      "Force match selected open items from both sources",
      "Review and approve provisional matches",
      "Categorize open items for investigation",
    ],
    image: "/SAMS/Manual.webp",
    imageAlt: "Risk Management",
    stats: {
      left: { label: " Fewer exceptions requiring manual intervention", value: "50%" },
      right: { label: "Audit trail accuracy for all override actions", value: "99.9%" },
    },
  },
  "Case management": {
    title: "Case Management And MIS Reporting",
    description:
      "Generate match reports for successfully reconciled transactions and unmatch reports for exceptions requiring attention. Assign cases for investigation, track status updates, and perform root cause analysis. Access comprehensive MIS reports with ageing analysis from the reporting interface.",
    checkItems: [
      "Reconciliation control reports for each run",
      "Unmatched reports with ageing analysis",
      "Case investigation status tracking",
    ],
    image: "/SAMS/Casemanagement.webp",
    imageAlt: "Risk Management",
    stats: {
      left: { label: " Faster investigation resolution times", value: "70%" },
      right: { label: "Standard MIS reports generated automatically", value: "20+" },
    },
  },
}

const Building = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Data acquisition")

  const filters: FilterKey[] = [
    "Data acquisition",
    "Data enrichment",
    "Automated matching",
    "Manual override",
    "Case management",
  ]

  const containerRef = useRef<HTMLDivElement>(null);
  const navScrollRef = useRef<HTMLDivElement>(null);
  const navBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const numItems = filters.length;
      const index = Math.min(Math.floor(latest * numItems), numItems - 1);
      setActiveFilter(filters[index]);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const activeIndex = filters.indexOf(activeFilter);
    const container = navScrollRef.current;
    const activeBtn = navBtnRefs.current[activeIndex];
    if (!container || !activeBtn) return;

    const containerLeft = container.getBoundingClientRect().left;
    const containerWidth = container.getBoundingClientRect().width;
    const activeLeft = activeBtn.getBoundingClientRect().left;
    const activeWidth = activeBtn.getBoundingClientRect().width;

    const activeCenterRelative = activeLeft - containerLeft + activeWidth / 2;
    const containerCenter = containerWidth / 2;
    const scrollAdjustment = activeCenterRelative - containerCenter;

    container.scrollBy({ left: scrollAdjustment, behavior: "smooth" });
  }, [activeFilter]);

  const handleNavClick = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const scrollableDistance = container.offsetHeight - window.innerHeight;

    const targetScroll = containerTop + (index / filters.length) * scrollableDistance + 10;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const currentContent = tabContent[activeFilter]

  return (
    <div className="w-full bg-white dark:bg-black">
      <div className="w-full px-3.5 sm:px-4 md:px-5 pt-4">

        {/* Title Section */}
        <div className="text-center max-w-[1360px] mx-auto mb-6 xl:mb-8">
          <h1
            className=" max-w-[1058px] mx-auto mb-2.5 xl:mb-4
                     text-[24px] md:text-[32px] lg:text-[48px]

      font-quadran  
        leading-[120%]"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            <span  className=" text-[#00AA72]   " >Powerful Features That Transform</span>{' '}
            <span className="dark:text-white "  >Financial Reconciliation</span>
          </h1>

          <p
            className="font-normal text-[#141414] dark:text-white leading-[140%] max-w-[921px] mx-auto
                     px-1 sm:px-2 xl:px-5
                     text-[12px] sm:text-[13px] md:text-sm xl:text-base"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Conciliare combines advanced automation, configurable rules, and intelligent matching to streamline complex reconciliation processes for financial institutions.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="w-full h-[200vh]">
        <div className="sticky top-24 w-full px-3.5 sm:px-4 md:px-5 pb-4 dark:bg-black bg-white z-10">

          {/* Tabs */}
          <div
            ref={navScrollRef}
            className="overflow-x-auto mb-6 [&::-webkit-scrollbar]:hidden scroll-smooth"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' } as React.CSSProperties}
          >
            <div className="flex gap-[19px] pb-1.5 xl:pb-0
                        min-w-max lg:min-w-0 xl:min-w-0
                        lg:flex-wrap lg:justify-center lg:max-w-7xl lg:mx-auto xl:flex-wrap xl:justify-center  xl:mx-auto">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  ref={(el) => { navBtnRefs.current[index] = el; }}
                  onClick={() => handleNavClick(index)}
                  className={`
                rounded-full font-medium whitespace-nowrap transition-all border border-[#E0E0E0] cursor-pointer
                px-3 py-1.5 text-[11px]
                sm:px-4 sm:py-2 sm:text-xs lg:text-sm lg:px-8 lg:py-4
                xl:px-8 xl:py-4 xl:text-sm
                ${activeFilter === filter ? 'bg-[#00AA72] text-white' : 'bg-white text-[#141414]'}
              `}
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto
                      flex flex-col lg:flex-row
                      gap-4 sm:gap-5 lg:gap-8 xl:gap-6
                      items-start
                      p-2.5 sm:p-3 md:p-4 lg:p-6">

            <div className="
          w-full lg:w-[42%] xl:w-[500px] shrink-0
          h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] xl:h-[512px]
          rounded-[4px] overflow-hidden bg-[#D9D9D9]
        ">
              <img
                src={currentContent.image}
                alt={currentContent.imageAlt}
                className="w-full h-full object-fill"
              />
            </div>

            {/* ── Right Column ── */}
            <div className="w-full  lg:min-h-[400px] xl:min-h-[512px] flex flex-col">

              {/* Top: Title + Desc + Checks */}
              <div className="flex flex-col gap-4 xl:gap-6">

                {/* Title: 20→22→24→26→32px */}
                <h2
                  className="font-bold dark:text-white text-[#141414] m-0 leading-none
                         text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[32px]"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {currentContent.title}
                </h2>

                {/* Description: 12→13→14→16px */}
                <p
                  className="font-normal dark:text-white text-[#141414] m-0 
                         text-[12px] sm:text-[13px] md:text-sm xl:text-base"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {currentContent.description}
                </p>

                {/* Check Items */}
                <div className="flex flex-col gap-3 sm:gap-3.5 xl:gap-6">
                  {currentContent.checkItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check
                        size={18}
                        style={{ color: '#000000', flexShrink: 0, marginTop: '2px' }}
                      />
                      <p
                        className="text-[#2A2A2A]  dark:text-white leading-[140%] m-0
                               text-[12px] sm:text-[13px] xl:text-sm"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Bottom Stats ──
              Always side by side (left stat | divider | right stat)
              marginTop scales: 20→24→28→32→56px
          */}
              <div className="
            flex flex-row items-start
            gap-3 sm:gap-4 lg:gap-6 xl:gap-6
            mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-[56px]
            w-full lg:w-full xl:w-[691px]
          ">

                {/* Left Stat */}
                <div className="flex-1 lg:w-full xl:w-[305px] flex flex-col items-start
                            gap-2.5 sm:gap-3.5 lg:gap-4 xl:gap-6">

                  {/* Label: 11→13→14→15→18px */}
                  <p
                    className="font-normal  dark:text-[#00AA72] text-[#141414] leading-[140%]  m-0
                           lg:w-full xl:w-[252px]
                           text-[11px] sm:text-[13px] md:text-sm lg:text-[16px] xl:text-lg"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {currentContent.stats.left.label}
                  </p>

                  {/* Arrow + Value */}
                  <div className="flex items-center gap-2 xl:gap-3">
                    <img
                      src="/TrendUp.svg"
                      alt="Trend Up"
                      className="w-7 sm:w-9 md:w-10 lg:w-12 xl:w-[60px] h-auto object-contain shrink-0"
                    />
                    {/* Value: 34→42→48→52→64px */}
                    <h3
                      className="font-medium text-[#141414] dark:text-white leading-none m-0
                             text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[64px]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {currentContent.stats.left.value}
                    </h3>
                  </div>
                </div>

                {/* Divider — self-stretch auto-matches column height */}
                <div className="w-px bg-[#C6C6C6] shrink-0 self-stretch" />

                {/* Right Stat */}
                <div className="flex-1 lg:w-full xl:w-[305px] flex flex-col items-start
                            gap-2.5 sm:gap-3.5 lg:gap-4 xl:gap-6">

                  {/* Label: 11→13→14→15→18px */}
                  <p
                    className="font-normal text-[#141414] dark:text-[#00AA72] leading-[140%] m-0
                           lg:w-full xl:w-[252px]
                           text-[11px] sm:text-[13px] md:text-sm lg:text-[16px] xl:text-lg"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {currentContent.stats.right.label}
                  </p>

                  {/* Arrow + Value */}
                  <div className="flex items-center gap-2 xl:gap-3">
                    <img
                      src="/TrendUp.svg"
                      alt="Trend Up"
                      className="w-7 sm:w-9 md:w-10 lg:w-12 xl:w-[60px] h-auto object-contain shrink-0"
                    />
                    {/* Value: 34→42→48→52→64px */}
                    <h3
                      className="font-medium text-[#141414] dark:text-white  leading-none m-0
                             text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[64px]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {currentContent.stats.right.value}
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Building
