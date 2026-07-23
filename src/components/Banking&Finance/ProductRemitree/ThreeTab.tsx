import { useState, useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { H1, P } from "../../../styles/Typography";

const ThreeTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const navScrollRef = useRef<HTMLDivElement>(null);
    const navBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);    

    const tabs = ['Creation', 'Compliance', 'Integration'];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            const numItems = tabs.length;
            const index = Math.min(Math.floor(latest * numItems), numItems - 1);
            setActiveTab(index);
        });
    }, [scrollYProgress]);

    useEffect(() => {
        const container = navScrollRef.current;
        const activeBtn = navBtnRefs.current[activeTab];
        if (!container || !activeBtn) return;

        const containerLeft = container.getBoundingClientRect().left;
        const containerWidth = container.getBoundingClientRect().width;
        const activeLeft = activeBtn.getBoundingClientRect().left;
        const activeWidth = activeBtn.getBoundingClientRect().width;

        const activeCenterRelative = activeLeft - containerLeft + activeWidth / 2;
        const containerCenter = containerWidth / 2;
        const scrollAdjustment = activeCenterRelative - containerCenter;

        container.scrollBy({ left: scrollAdjustment, behavior: "smooth" });
    }, [activeTab]);

    const handleNavClick = (index: number) => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const containerTop = container.offsetTop;
        const scrollableDistance = container.offsetHeight - window.innerHeight;

        const targetScroll = containerTop + (index / tabs.length) * scrollableDistance + 10;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
    };

    const tabContents = [
        {
            title: 'Message Creation and Enrichment',
            text: 'Swift message templates automatically enrich data from core banking systems. Fields undergo strict Swift validation, including limits and formats. Supports various Swift MT messages, including MT103, MT202, MT700, and MT760. Bi-directional flow manages outward and inward remittances comprehensively with creation, validation, and transmission capabilities.',
            image: '/Remitree/ThreeTab1.webp',
            features: [
                { text: 'Automatic data population', icon: '/Remitree/big-data.svg' },
                { text: 'Swift MT message support', icon: '/Remitree/chatting.svg' },
                { text: 'Field validation rules', icon: '/Remitree/direction.svg' },
                { text: 'Bi-directional message flow', icon: '/Remitree/file.svg' }
            ],
        },
        {
            title: 'Compliance and Screening - OFAC Sanctions Screening and BSA/AML Compliance',
            text: 'Transactions are screened for compliance using integrated AML systems. Performs checks against banned entities and countries to prevent fraud. Ensures regulatory adherence with automated alerts for suspicious activities. Strict Swift validation ensures messages meet international standards before transmission.',
            image: '/Remitree/ThreeTab2.webp',
            features: [
                { text: 'AML system integration', icon: '/Remitree/integration.svg' },
                { text: 'OFAC SDN list and Banned entity screening', icon: '/Remitree/job-search.svg' },
                { text: 'BSA/AML and FINCEN  Regulatory compliance checks', icon: '/Remitree/file.svg' },
                { text: 'Automated alert generation', icon: '/Remitree/bell.svg' }
            ],
        },
        {
            title: 'System Integration Capabilities',
            text: 'Effortlessly integrates with existing banking infrastructure for smooth data flow. Connects with US core banking systems for real-time data synchronization. Treasury system integration fetches real-time currency rates. Corporate banking integration handles bulk processing and detailed reporting.',
            image: '/Remitree/ThreeTab3.webp',
            features: [
                { text: 'Core banking synchronization', icon: '/Remitree/bell.svg' },
                { text: 'Treasury rate integration', icon: '/Remitree/bank.svg' },
                { text: 'Corporate bulk processing', icon: '/Remitree/settings.svg' },
                { text: 'Real-time data flow', icon: '/Remitree/time-management.svg' }
            ],
        },
    ];

    return (
        <div className="w-full bg-white dark:bg-black">

            {/* ── Title & Description ─────────────────────────────
                Normal flow — no absolute positioning
            ─────────────────────────────────────────────────── */}
            <div className="
                flex flex-col items-center text-center w-full
                px-4 py-4
            ">
                <H1 className=" dark:text-[#00AA72]
                    leading-[1.1] text-[#232323] w-full
                    text-[22px]     max-w-full
                    sm:text-[30px]  sm:max-w-md
                    md:text-[34px]  md:max-w-xl
                    lg:text-[40px]  lg:max-w-2xl
                    xl:text-[44px]  xl:max-w-4xl
                ">
                    Key Features of REMITREE Remittance Platform
                </H1>
                <P className="
                text-[#252525] mt-3 w-full
                    text-[13px]  max-w-full
                    sm:text-[14px] sm:max-w-sm
                    md:text-[14px] md:max-w-lg
                    lg:text-[15px] lg:max-w-[560px]
                    xl:text-[16px] xl:max-w-[650px]
                ">
                    REMITREE automates cross-border payment processing with comprehensive message handling, compliance screening, and real-time monitoring for financial institutions.
                </P>
            </div>

            <div ref={containerRef} className="w-full h-[200vh]">
                <div className="sticky top-24 w-full bg-white  dark:bg-black z-10 pt-4 pb-4">

                    {/* ── TABLET + DESKTOP CARD (md and above) ───────────
                NO scaling, NO absolute — pure responsive Tailwind
            ─────────────────────────────────────────────────── */}
                    <div className="
                hidden md:block w-full
                px-4
                md:px-6
                lg:px-10
                xl:px-16
                pb-12 xl:pb-16
            ">
                        <div className="
                    border-[1.5px] border-[#D5D5D5] rounded-xl overflow-hidden dark:bg-slate-900 bg-white
                    w-full max-w-[1400px] mx-auto
                ">
                            {/* ── Tab Navigation ── */}
                            <div className="flex border-b-[3px] border-b-[#a5bbd5]">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab}
                                        onClick={() => handleNavClick(index)}
                                        className={`
                                    flex-1 font-semibold transition-all duration-300 text-center relative
                                    h-[48px]  text-[14px] pl-4
                                    md:h-[56px]  md:text-[16px] md:pl-5
                                    lg:h-[68px]  lg:text-[22px] lg:pl-8
                                    xl:h-[90px]  xl:text-[30px] xl:pl-[60px] xl:pr-[40px]
                                    ${activeTab === index
                                                ? 'bg-[#00AA72]  text-white z-[1]'
                                                : 'bg-transparent  text-[#00AA72] z-0'
                                            }
                                `}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* ── Content Row ── */}
                            <div className="flex flex-col md:flex-row">

                                {/* Left Content */}
                                <div className="
                            w-full md:w-1/2 flex flex-col
                            p-5       gap-3
                            md:p-6    md:gap-4
                            lg:p-10   lg:gap-5
                            xl:py-14  xl:px-16  xl:gap-7
                        ">
                                    <h2 className="
                                font-['Bricolage_Grotesque'] font-bold text-[#00AA72] leading-[120%]
                                text-[18px]
                                md:text-[22px]
                                lg:text-[28px]
                                xl:text-[40px]
                            ">
                                        {tabContents[activeTab].title}
                                    </h2>

                                    <p className="
                                font-['Quicksand'] font-normal  dark:text-white text-[#333] leading-[160%]
                                text-[12px]
                                md:text-[13px]
                                lg:text-[14px]
                                xl:text-[18px]
                            ">
                                        {tabContents[activeTab].text}
                                    </p>

                                    {/* 2×2 Feature Items Grid */}
                                    <div className="
                                grid grid-cols-2
                                gap-y-3 gap-x-3
                                lg:gap-y-4 lg:gap-x-5
                                xl:gap-y-5 xl:gap-x-8
                                mt-1
                            ">
                                        {tabContents[activeTab].features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 xl:gap-4">
                                                <div className="
                                            rounded-full bg-[#00AA72] flex-shrink-0
                                            flex items-center justify-center
                                            w-7 h-7
                                            md:w-8 md:h-8
                                            lg:w-9 lg:h-9
                                            xl:w-12 xl:h-12
                                        " >
                                                    <img src={feature.icon} alt="icon" className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 object-contain" />
                                                </div>
                                                <span className="
                                            font-['Quicksand'] dark:text-white text-[#333]
                                            text-[11px]
                                            md:text-[12px]
                                            lg:text-[13px]
                                            xl:text-[18px]
                                        ">
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="
                            w-full md:w-1/2 overflow-hidden
                            pt-5 md:pt-6 lg:pt-10 xl:pt-14
                        ">
                                    <img
                                        src={tabContents[activeTab].image}
                                        alt={tabContents[activeTab].title}
                                        className="w-full h-full lg:object-cover xl:object-cover rounded-tl-xl md:rounded-tl-2xl rounded-tr-xl border-t border-l border-gray-100 md:border-t-0 md:rounded-tr-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── MOBILE VERSION (below md only) ─────────────── */}
                    <div className="md:hidden w-full flex flex-col items-center px-4 pb-12 relative z-10">
                        <div className="w-full max-w-[700px] rounded-xl overflow-hidden bg-white border-[1.5px] border-[#D5D5D5] min-h-[500px]">

                            {/* Tab Header */}
                            <div ref={navScrollRef} className="flex w-full overflow-x-auto scrollbar-hide border-b-[1.5px] border-b-[#D5D5D5] scroll-smooth">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab}
                                        ref={(el) => { navBtnRefs.current[index] = el; }}
                                        onClick={() => handleNavClick(index)}
                                        className={`
                                    flex-1 py-4 px-5 min-w-[110px]
                                    text-sm font-semibold whitespace-nowrap transition-colors
                                    ${activeTab === index
                                                ? 'bg-[#00AA72] text-white'
                                                : 'bg-transparent text-[#00AA72]'
                                            }
                                `}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex flex-col gap-5">
                                <h2 className="
                            font-['Bricolage_Grotesque'] font-bold text-[#00AA72] leading-[110%]
                            text-[22px] sm:text-[26px]
                        ">
                                    {tabContents[activeTab].title}
                                </h2>

                                <p className="
                            font-['Quicksand'] text-[#333] leading-[150%]
                            text-[13px] sm:text-[14px]
                        ">
                                    {tabContents[activeTab].text}
                                </p>

                                {/* 2×2 Feature Grid */}
                                <div className="grid grid-cols-2 gap-y-[14px] gap-x-4">
                                    {tabContents[activeTab].features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-[10px]">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#00AA72] flex-shrink-0">
                                                <img src={feature.icon} alt="icon" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                                            </div>
                                            <span className="font-['Quicksand'] text-[#333] text-[12px] sm:text-[14px]">
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <img
                                    src={tabContents[activeTab].image}
                                    alt={tabContents[activeTab].title}
                                    className="w-full h-auto rounded-lg object-cover max-h-[300px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeTab;
