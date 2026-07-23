// import React from 'react';
import { H2, P } from '../../../styles/Typography';

const CircleArrow = () => {
    return (
        //flex flex-col items-center bg-white min-h-[800px] py-16 font-sans
        <div className="w-full pt-10 pb-16 min-h-[800px] relative  dark:bg-black bg-[#EEF3FA] flex flex-col items-center overflow-hidden font-sans">
            
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#00AA72 3px, transparent 3px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* --- Header Section --- */}
            <div className="text-center px-4 mb-16 z-10">
                <H2 className="text-[36px] md:text-[44px] dark:text-[#00AA72] text-[#2d3748] font-bold tracking-tight mb-4">
                    Key Features of Remitree Platform
                </H2>
                <P className="text-[16px] text-[#718096] max-w-[700px] mx-auto leading-relaxed">
                    Remitree provides comprehensive cross-border payment capabilities with template maintenance, integrated dashboards, alerts, and seamless connectivity with core banking and treasury systems.
                </P>
            </div>

            {/* --- Diagram Canvas --- */}
            {/* Desktop: 840x420 ensures a perfect 40px horizontal/vertical gap in the middle */}
            {/* Mobile/Tablet: Stacked cards using flex-col */}
            <div className="relative w-full max-w-[840px] lg:h-[420px] mx-auto select-none flex flex-col sm:flex-row sm:flex-wrap lg:block items-center justify-center gap-6 lg:gap-0 px-4 sm:px-8 lg:px-0">

                {/* 1. Top-Left Quadrant */}
                <div className="relative lg:absolute lg:top-0 lg:left-0 w-full sm:w-[calc(50%-12px)] lg:w-[400px] h-[120px] lg:h-[190px] bg-gradient-to-r from-[#9ebce4] to-[#5984bc] rounded-2xl lg:rounded-tl-[90px] lg:rounded-tr-none lg:rounded-bl-none lg:rounded-br-none flex items-center justify-center lg:pr-12 z-10 shadow-sm transition-all duration-300">
                    <P className="text-white text-[20px] lg:text-[22px] font-semibold text-center leading-snug m-0">
                        Template<br className="hidden lg:block"/>Maintenance
                    </P>
                </div>

                {/* 2. Top-Right Quadrant */}
                <div className="relative lg:absolute lg:top-0 lg:right-0 w-full sm:w-[calc(50%-12px)] lg:w-[400px] h-[120px] lg:h-[190px] bg-gradient-to-l from-[#9ebce4] to-[#5984bc] rounded-2xl lg:rounded-none flex items-center justify-center lg:pl-12 z-10 shadow-sm transition-all duration-300">
                    <P className="text-white text-[20px] lg:text-[22px] font-semibold text-center leading-snug m-0">
                        Integrated with<br className="hidden lg:block"/>CBS / Treasury
                    </P>
                </div>

                {/* 3. Bottom-Left Quadrant */}
                <div className="relative lg:absolute lg:bottom-0 lg:left-0 w-full sm:w-[calc(50%-12px)] lg:w-[400px] h-[120px] lg:h-[190px] bg-gradient-to-r from-[#9ebce4] to-[#5984bc] rounded-2xl lg:rounded-none flex items-center justify-center lg:pr-12 z-10 shadow-sm transition-all duration-300">
                    <P className="text-white text-[20px] lg:text-[22px] font-semibold text-center leading-snug m-0">
                        Dashboard/Reports<br className="hidden lg:block"/>& Audit Logs
                    </P>
                </div>

                {/* 4. Bottom-Right Quadrant */}
                <div className="relative lg:absolute lg:bottom-0 lg:right-0 w-full sm:w-[calc(50%-12px)] lg:w-[400px] h-[120px] lg:h-[190px] bg-gradient-to-l from-[#9ebce4] to-[#5984bc] rounded-2xl lg:rounded-br-[90px] lg:rounded-tl-none lg:rounded-tr-none lg:rounded-bl-none flex items-center justify-center lg:pl-12 z-10 shadow-sm transition-all duration-300">
                    <P className="text-white text-[20px] lg:text-[22px] font-semibold text-center leading-snug m-0">
                        Alerts
                    </P>
                </div>

                {/* --- Uploaded SVG Arrows (Z-index 20) : Hidden on mobile/tablet --- */}
                {/* Arrow 1: Top Left */}
                <img
                    src="/Remitree/Arrow1.svg"
                    alt="Top Left Arrow"
                    className="hidden lg:block absolute z-20 pointer-events-none object-contain"
                    style={{
                        width: '270px',
                        height: '200px',
                        top: '-45px',   /* ← overflows 55px above diagram */
                        left: '130px'
                    }}
                />

                {/* Arrow 2: Top Right */}
                <img
                    src="/Remitree/Arrow2.svg"
                    alt="Top Right Arrow"
                    className="hidden lg:block absolute z-20 pointer-events-none object-contain"
                    style={{
                        width: '270px',
                        height: '180px',
                        top: '-37px',
                        left: '436px'
                    }}
                />

                {/* Arrow 3: Bottom Left */}
                <img
                    src="/Remitree/Arrow3.svg"
                    alt="Bottom Left Arrow"
                    className="hidden lg:block absolute z-20 pointer-events-none object-contain"
                    style={{
                        width: '270px',
                        height: '180px',
                        top: '278px',
                        left: '138px'
                    }}
                />

                {/* Arrow 4: Bottom Right */}
                <img
                    src="/Remitree/Arrow4.svg"
                    alt="Bottom Right Arrow"
                    className="hidden lg:block absolute z-20 pointer-events-none"
                    style={{
                        width: '270px',
                        height: '180px',
                        top: '278px',
                        left: '438px'
                    }}
                />

                {/* --- Central Circles (Z-index 30/40) : Hidden on mobile/tablet --- */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-white rounded-full items-center justify-center z-30 shadow-sm">
                    <div className="w-[130px] h-[130px] bg-[#2962ad] rounded-full z-40"></div>
                </div>

            </div>
        </div>
    );
};

export default CircleArrow;