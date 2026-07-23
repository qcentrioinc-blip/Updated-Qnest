import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H2, H4, P } from '../../../styles/Typography';

// Solid Triangle Arrow SVG pointing left
const LeftArrowIcon = () => (
    <svg
        className="absolute left-[1px] top-1/2 -translate-y-1/2 -translate-x-full"
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M28 0 L0 16 L28 32 Z" fill="#00AA72" />
    </svg>
);

// Solid Triangle Arrow SVG pointing right (reduced width as requested)
const RightArrowIcon = () => (
    <svg
        className="absolute right-[1px] top-1/2 -translate-y-1/2 translate-x-full"
        width="18"
        height="24"
        viewBox="0 0 18 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 0 L18 12 L0 24 Z" fill="#00AA72" />
    </svg>
);

const timelineItems = [
    {
        title: 'Analysis',
        description: 'Understand AML policies, risk profiling business rules, case management logic, KYC rules, and roles and responsibilities with bank ALM team.',
        circleText: '1',
    },
    {
        title: 'Data Extraction',
        description: 'Identify relevant tables and fields in core banking and trade finance databases. Prepare data extraction, transformation tools, and parsing tools for financial messages.',
        circleText: '2',
    },
    {
        title: 'Training',
        description: 'Hand over user manuals and train users. Identify additional requirements that may arise during the training phase for incorporation.',
        circleText: '3',
    },
    {
        title: 'UAT',
        description: 'Hand over system with data extraction tools and message parsers for user acceptance testing. Assist the team in resolving software and data issues.',
        circleText: '4',
    },
    {
        title: 'Delivery',
        description: 'Deliver a system with data extraction and transformation tools along with critical changes required by the bank. Evolve the schedule for remaining issues.',
        circleText: '5',
    },
    {
        title: 'Sign Off',
        description: 'Work together with bank team to achieve go-live sign off after successful completion of all testing and acceptance criteria.',
        circleText: '6',
    },
    {
        title: 'Go Live',
        description: 'Prepare for go-live deployment and establish post go-live support processes for smooth transition to production environment.',
        circleText: '7',
    }
];

const TimelineCard = ({ title, description, isTop }: { title: string; description: string; isTop: boolean }) => (
    <div
        className={`absolute ${isTop ? 'bottom-full mb-6' : 'top-full mt-6'
            } left-1/2 -translate-x-1/2 w-[380px] p-6 rounded-[16px] bg-white dark:bg-slate-900 whitespace-normal`}
        style={{ boxShadow: "0 12px 32px -8px rgba(0,0,0,0.06)", zIndex: 0 }}
    >
        <H4 className="text-[20px] font-bold text-[#0F172A]  dark:text-white leading-tight">{title}</H4>
        <P className="mt-3 text-[14.5px] leading-[1.65] text-[#6B7280]">{description}</P>

        {/* Connector vertical line - Exactly matches horizontal line thickness */}
        <div
            className={`absolute left-1/2 -translate-x-1/2 w-[4px] h-6 bg-[#00AA72] ${isTop ? 'top-full' : 'bottom-full'
                }`}
        />
    </div>
);

const TimelineCircle = ({ text }: { text: string }) => (
    <div
        className="relative w-[52px] h-[52px] flex items-center justify-center rounded-full border-[4px] border-[#00AA72] bg-white text-[#00AA72] font-bold text-[18px] shrink-0"
        style={{ zIndex: 10 }}
    >
        {text}
    </div>
);

const SevenStep = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Pure 1:1 translation identical to Harper.tsx (Flat percentages guarantee solid cross-browser stability rather than variable calcs)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <>
            {/* ---------------------------------------- */}
            {/* MOBILE / TABLET (Vertical layout)        */}
            {/* ---------------------------------------- */}
            <div className="block lg:hidden w-full bg-[#EAECEF] dark:bg-black py-16 px-4 font-sans relative overflow-hidden">
                <div className="text-center w-full mb-12">
                    <H2 className="text-[32px] sm:text-[42px] font-extrabold text-[#0F172A]  dark:text-white leading-[1.2] tracking-tight">
                        Implementation Methodology
                    </H2>
                </div>

                <div className="relative max-w-[600px] mx-auto px-2 sm:px-8">
                    <div className="flex flex-col gap-8 w-full">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="flex flex-row items-start gap-4 sm:gap-6 relative z-10">
                                {/* Segment Line - hidden on the last item */}
                                {index !== timelineItems.length - 1 && (
                                    <div className="absolute left-[26px] top-[52px] bottom-[-32px] w-[4px] bg-[#00AA72] translate-x-[-50%] z-[-1]" />
                                )}
                                
                                <TimelineCircle text={item.circleText} />
                                <div 
                                    className="flex-1 p-6 rounded-[16px] bg-white dark:bg-[#141414] whitespace-normal mt-0"
                                    style={{ boxShadow: "0 12px 32px -8px rgba(0,0,0,0.06)" }}
                                >
                                    <H4 className="text-[18px] sm:text-[20px] font-bold dark:text-white text-[#0F172A] leading-tight">{item.title}</H4>
                                    <P className="mt-3 text-[14px] leading-[1.65] text-[#6B7280]">{item.description}</P>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------------------------------------- */}
            {/* DESKTOP (Horizontal Scroll layout)       */}
            {/* ---------------------------------------- */}
            {/* Vast scroll block (800vh) rigidly forces a prolonged vertical traverse to complete the horizontal panning */}
            <div ref={targetRef} className="hidden lg:block w-full dark:bg-black bg-[#EAECEF] h-[800vh] font-sans relative">

                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-x-clip py-4">

                {/* Title Section */}
                <div className="text-center w-full px-6">
                    <H2 className="text-[42px] dark:text-white lg:text-[54px] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight">
                        Implementation Methodology
                    </H2>
                </div>

                {/* Timeline Section */}
                {/* Expand height to 650px to ensure tall cards have enough room, and shrink-0 to prevent flexbox crushing */}
                <div className="relative w-full h-[650px] shrink-0 flex items-center justify-start overflow-x-clip">

                    {/* Scrolling pipeline content */}
                    {/* Replicated Harper's exact pl/pr horizontal structure on motion.div */}
                    <motion.div
                        style={{ x }}
                        className="relative flex items-center h-full gap-x-[320px] pl-[15vw] pr-[40vw] w-max"
                    >
                        {/* Horizontal Line strictly coupled and contained to exactly start from first card and end at last card */}
                        <div className="absolute left-[5vw] right-[30vw] top-1/2 h-[4px] -translate-y-1/2 bg-[#00AA72] z-[0]">
                            <LeftArrowIcon />
                            <RightArrowIcon />
                        </div>

                        {timelineItems.map((item, index) => {
                            const isTop = index % 2 !== 0; // Alternating cards 
                            return (
                                <div key={index} className="relative flex flex-col items-center">
                                    <TimelineCircle text={item.circleText} />
                                    <TimelineCard
                                        title={item.title}
                                        description={item.description}
                                        isTop={isTop}
                                    />
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
            </div>
        </>
    );
};

export default SevenStep;