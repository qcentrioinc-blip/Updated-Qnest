import { useState, useRef, useEffect } from "react";
import { useScroll } from "framer-motion";

const FourPoints = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const navScrollRef = useRef<HTMLDivElement>(null);
    const navBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            const numItems = 5;
            const index = Math.min(Math.floor(latest * numItems), numItems - 1);
            setActiveIndex(index);
        });
    }, [scrollYProgress]);

    // Auto-scroll the mobile nav container horizontally to keep active tab visible
    useEffect(() => {
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
    }, [activeIndex]);

    const handleNavClick = (index: number) => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const containerTop = container.offsetTop;
        const scrollableDistance = container.offsetHeight - window.innerHeight;

        // adding a tiny offset to ensure it snaps to the exact right panel
        const targetScroll = containerTop + (index / 5) * scrollableDistance + 10;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
    };

    const navItems = [
        "Banking and Financial Services",
        "Retail and E-commerce",
        "Healthcare Provider Payments",
        "Manufacturing and Supply Chain",
        "Energy and Utilities"
    ];

    // Dummy icons to be replaced later
    const navIcons = [
        "/BNFConsilier/Banking.svg",
        "/BNFConsilier/Cart.svg",
        "/BNFConsilier/healthcare.svg",
        "/BNFConsilier/manufacture.svg",
        "/BNFConsilier/Energy.svg",
    ];

    const tabData = [
        {
            heading: "Banking and Financial Services",
            paragraph: "Reconcile NOSTRO messages, SWIFT transactions, and inter-bank settlements with precision. The platform handles MT103, 202, and 940/950 messages while identifying duplicates and field mismatches across core banking systems.",
            bullets: ["NOSTRO message matching", "SWIFT transaction reconciliation", "Duplicate message detection", "Core system integration"],
        },
        {
            heading: "Retail and E-commerce",
            paragraph: "Match high-volume transactions across payment gateways, POS systems, and merchant accounts. Automate reconciliation of sales channels, settlement files, and payment aggregators while identifying revenue leakage and discrepancies.",
            bullets: ["Payment gateway matching", "POS transaction reconciliation", "Settlement file processing", "Revenue leakage detection"],
        },
        {
            heading: "Healthcare Provider Payments",
            paragraph: "Reconcile patient payments, insurance claims, and provider settlements across multiple systems. Match electronic and paper payments with claims data while managing denials and adjustments efficiently.",
            bullets: ["Insurance claim matching", "Patient payment reconciliation", "Provider settlement processing", "Denial and adjustment tracking"],
        },
        {
            heading: "Manufacturing and Supply Chain",
            paragraph: "Automate reconciliation of vendor payments, supplier invoices, and intercompany transactions. Match purchase orders with invoices and payments across multiple entities while ensuring supply chain financial accuracy.",
            bullets: ["Vendor payment matching", "Supplier invoice reconciliation", "Intercompany transactions", "Purchase order matching"],
        },
        {
            heading: "Energy and Utilities",
            paragraph: "Reconcile customer billing, payment collections, and regulatory reporting requirements. Match meter data with billing systems and payment gateways while ensuring compliance with industry regulations.",
            bullets: ["Customer billing matching", "Payment collection reconciliation", "Regulatory reporting", "Meter data integration"],
        },
    ];

    // ── Vertical divider height calculation (desktop/tablet) ──
    const TOTAL_HEIGHT = 500
    const GAP = 11;
    const ITEM_SLOT = (TOTAL_HEIGHT - (navItems.length - 1) * GAP) / navItems.length;
    const blueHeight = (activeIndex + 1) * ITEM_SLOT + activeIndex * GAP;

    // ── Horizontal divider width calculation (mobile) ──
    const blueWidthPercent = ((activeIndex + 1) / navItems.length) * 100;

    return (
        <section ref={containerRef} className="w-full dark:bg-[#141414] bg-[#EFEFEF] mb-6 h-[150vh]">
            <div className="sticky top-24 w-full flex items-center justify-center px-4 py-12 md:px-10 md:py-16 xl:px-20 xl:py-16 box-border overflow-hidden">
                <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row lg:items-start">

                    {/* ─────────────── LEFT NAV ─────────────── */}

                    {/* ── Mobile/Tablet: Horizontal tabs ── */}
                    <div className="lg:hidden w-full mb-8">
                        {/* Horizontal tab row */}
                        <div ref={navScrollRef} className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide scroll-smooth">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    ref={(el) => { navBtnRefs.current[index] = el; }}
                                    onClick={() => handleNavClick(index)}
                                    className={`font-quadran   font-semibold text-lg md:text-xl text-[#00AA72] whitespace-nowrap select-none transition-opacity duration-300 cursor-pointer bg-transparent border-none px-0 ${activeIndex === index ? "opacity-100" : "opacity-55"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                            {/* Spacer to allow last item to be scrolled/centered on mobile */}
                            <div className="min-w-[40vw] shrink-0" aria-hidden="true" />
                        </div>
                        {/* Horizontal progress bar */}
                        <div className="w-full h-[3px] rounded-full overflow-hidden mt-2 flex">
                            <div
                                className="h-full bg-[#00AA72] rounded-l-full transition-all duration-400"
                                style={{
                                    width: `${blueWidthPercent}%`,
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            />
                            <div className="h-full bg-[#C0C0C0] flex-1 rounded-r-full" />
                        </div>
                    </div>

                    {/* ── Desktop: Vertical nav with divider ── */}
                    <div className="hidden lg:flex items-start shrink-0">
                        {/* Nav Labels */}
                        <div
                            className="flex flex-col min-w-max pr-8 xl:pr-[50px]"
                            style={{ height: `${TOTAL_HEIGHT}px`, gap: `${GAP}px` }}
                        >
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleNavClick(index)}
                                    className="flex items-center cursor-pointer"
                                    style={{ height: `${ITEM_SLOT}px` }}
                                >
                                    <span
                                        className={`font-quadran   font-semibold text-[32px] leading-none  text-[#00AA72] select-none transition-opacity duration-300 flex items-center whitespace-nowrap ${activeIndex === index ? "opacity-100" : "opacity-55"
                                            }`}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Vertical Divider */}
                        <div
                            className="hidden lg:flex w-[3px] flex-col rounded overflow-hidden shrink-0"
                            style={{ height: `${TOTAL_HEIGHT}px` }}
                        >
                            <div
                                className="w-[3px] bg-[#00AA72] rounded-t"
                                style={{
                                    height: `${blueHeight}px`,
                                    transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            />
                            <div className="w-[3px] flex-1 bg-[#C0C0C0] rounded-b" />
                        </div>
                    </div>

                    {/* ─────────────── RIGHT CONTENT ─────────────── */}
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-8 xl:gap-[22px] w-full lg:flex-1 lg:ml-10 xl:ml-[80px] overflow-hidden">

                        {/* Dynamic Icon */}
                        <img
                            src={navIcons[activeIndex]}
                            alt={`${navItems[activeIndex]} icon`}
                            className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[139px] xl:h-[139px] rounded-lg shrink-0 object-cover"
                        />

                        {/* Text Container */}
                        <div className="flex flex-col items-center gap-5 md:gap-6 xl:gap-[29px] w-full max-w-4xl px-2 md:px-0">

                            {/* Heading */}
                            <h2
                                className="w-full text-center dark:text-white text-[#00AA72] m-0 font-quadran   font-semibold leading-tight md:leading-none"
                                style={{ fontSize: "clamp(24px, 4vw, 42px)" }}
                            >
                                {tabData[activeIndex].heading}
                            </h2>

                            {/* Paragraph */}
                            <p className="w-full text-center text-[#141414] dark:text-white m-0 font-quicksand font-normal text-sm md:text-base xl:text-lg leading-relaxed md:leading-[130%]">
                                {tabData[activeIndex].paragraph}
                            </p>

                            {/* Bullet Row */}
                            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 lg:gap-[11px] w-full mt-2 md:mt-0">
                                {tabData[activeIndex].bullets.map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1.5 md:gap-[5px]"
                                    >
                                        <span className="text-[#141414] dark:text-white text-base md:text-lg font-quicksand leading-none">
                                            •
                                        </span>
                                        <span className="font-quicksand font-semibold md:font-medium text-sm md:text-base xl:text-lg leading-tight text-[#141414] dark:text-white text-center">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourPoints;
