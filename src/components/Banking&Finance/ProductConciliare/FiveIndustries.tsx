import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { H2, H4, P } from "../../../styles/Typography";

const DoctorImg = "/BNFConsilier/Doctor.png";
const LaptopGirlImg = "/BNFConsilier/Laptopgirl.png";
const EnergyWorkerImg = "/BNFConsilier/Electrical.png";
const RedHairGirlImg = "/BNFConsilier/RedHairGirl.png";
const ManufWomanImg = "/BNFConsilier/ElectricalWomen.png";

// ── Fixed design canvas size ──────────────────────────────
const DESIGN_WIDTH = 1400;
const DESIGN_HEIGHT = 900;

// ✅ All imgHeight = same value for equal image heights
const INDUSTRIES = [
    {
        id: 1,
        label: ["Healthcare"],
        image: DoctorImg,
        alt: "Healthcare doctor with stethoscope",
        labelPos: { top: "40%", left: "50%", transform: "translateX(-50%)" },
        align: "center",
        imgHeight: "44%", // ✅ Equal for all
    },
    {
        id: 2,
        label: ["Banking and", "Finance"],
        image: LaptopGirlImg,
        alt: "Banking and Finance professional on laptop",
        labelPos: { top: "45%", left: "50%", transform: "translateX(-50%)" },
        align: "center",
        imgHeight: "62%", // ✅ Equal for all
    },
    {
        id: 3,
        label: ["Energy and", "Utilities"],
        image: EnergyWorkerImg,
        alt: "Energy and Utilities worker with hard hat",
        labelPos: { top: "39%", left: "50%", transform: "translateX(-50%)" },
        align: "center",
        imgHeight: "62%", // ✅ Equal for all
    },
    {
        id: 4,
        label: ["Retail and", "E-commerce"],
        image: RedHairGirlImg,
        alt: "Retail shopper with phone and bags",
        labelPos: { top: "45%", left: "50%", transform: "translateX(-50%)" },
        align: "center",
        imgHeight: "62%", // ✅ Equal for all
    },
    {
        id: 5,
        label: ["Manufacturing"],
        image: ManufWomanImg,
        alt: "Manufacturing engineer with hard hat and tablet",
        labelPos: { top: "40%", left: "50%", transform: "translateX(-50%)" },
        align: "center",
        imgHeight: "62%", // ✅ Equal for all
    },
];

/* ─── Wave Ribbon: z-10 (above columns, below images) ── */
const WaveRibbon = ({ inView }: { inView: boolean }) => (
    <div
        className="absolute inset-x-0 w-full pointer-events-none"
        style={{ zIndex: 10, top: "42%", height: "46%" }}
    >
        <svg
            aria-hidden="true"
            className="w-full h-full"
            viewBox="0 0 1400 540"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M-20,420 C 280,130 520,490 720,340 C 940,185 1200,470 1460,270"
                fill="none"
                stroke="#2563eb"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ strokeWidth: "50px" }} // Thinner wave line
            />
        </svg>
    </div>
);

const FiveIndustries = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0 });

    const [hasScrolled, setHasScrolled] = useState(false);
    const [scale, setScale] = useState(1);

    // ✅ ResizeObserver for perfect scale recalculation
    useEffect(() => {
        const updateScale = () => {
            if (wrapperRef.current) {
                const containerWidth = wrapperRef.current.offsetWidth;
                setScale(containerWidth / DESIGN_WIDTH);
            }
        };
        updateScale();
        const ro = new ResizeObserver(updateScale);
        if (wrapperRef.current) ro.observe(wrapperRef.current);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10) {
                setHasScrolled(true);
                window.removeEventListener("scroll", onScroll);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const shouldAnimate = inView && hasScrolled;
    const scaledHeight = Math.round(DESIGN_HEIGHT * scale);

    return (
        <div
            ref={wrapperRef}
            style={{
                width: "100%",
                height: `${scaledHeight}px`,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <section
                ref={sectionRef}
                aria-label="Industries Conciliare Serves Globally"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${DESIGN_WIDTH}px`,
                    height: `${DESIGN_HEIGHT}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    background:
                        "#E1ECFE",
                }}
            >
                {/* ── LAYER 1 (z-0): Column dividers ── */}
                <div className="absolute inset-0 flex" style={{ zIndex: 0 }}>
                    {INDUSTRIES.map((_, idx) => (
                        <div
                            key={idx}
                            className="flex-1 h-full"
                            style={{
                                borderRight:
                                    idx < INDUSTRIES.length - 1
                                        ? "4.5px solid #ffffff"
                                        : "none",
                            }}
                        />
                    ))}
                </div>

                {/* ── LAYER 2 (z-10): Blue wave — behind images ── */}
                <WaveRibbon inView={shouldAnimate} />

                {/* ── LAYER 3 (z-20): Person images — in FRONT of wave ── */}
                <div className="absolute inset-0 flex" style={{ zIndex: 20 }}>
                    {INDUSTRIES.map((industry, idx) => (
                        <div
                            key={industry.id}
                            className="relative flex-1 h-full overflow-hidden"
                            style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}
                        >
                            <div
                                style={{
                                    height: industry.imgHeight,
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                }}
                            >
                                <motion.img
                                    // ✅ Start VISIBLE — images shown on page load
                                    initial={{ y: 0, opacity: 1 }}
                                    animate={
                                        shouldAnimate
                                            ? { y: [idx % 2 === 0 ? -100 : 100, 0], opacity: [0, 1] }
                                            : {}
                                    }
                                    transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                                    src={industry.image}
                                    alt={industry.alt}
                                    loading="eager"
                                    decoding="async"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        objectPosition: "bottom center",
                                        filter: "drop-shadow(0 8px 18px rgba(20,55,150,0.12))",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── LAYER 4 (z-30): Industry labels — above wave ── */}
                <div
                    className="absolute inset-0 flex pointer-events-none"
                    style={{ zIndex: 30 }}
                >
                    {INDUSTRIES.map((industry) => (
                        <div key={industry.id} className="relative flex-1 h-full">
                            <div
                                className="absolute select-none"
                                style={{
                                    top: industry.labelPos.top,
                                    left: industry.labelPos.left,
                                    transform: industry.labelPos.transform,
                                    width: "92%",
                                    textAlign: "center",
                                }}
                            >
                                <H4
                                    className="!text-[#1d4ed8] !text-[18px] md:!text-[20px] lg:!text-[22px] text-center !leading-[1.3] !tracking-[-0.015em] m-0"
                                >
                                    {industry.label.map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < industry.label.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </H4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── LAYER 5 (z-40): Title + Subtitle header ── */}
                <div
                    className="absolute inset-x-0 flex flex-col items-center gap-1.5 pointer-events-none px-6 top-48 md:top-44 lg:top-48 xl:top-36"
                    style={{ zIndex: 40, }}
                >
                    <div
                        style={{
                            borderRadius: "999px",
                            padding: "14px 56px",
                            backgroundColor: "#151923", // Black Dark Background
                            boxShadow: "0 4px 24px rgba(30,74,190,0.15)",
                            marginTop: "0px"
                        }}
                    >
                        <H2
                            className="!text-white !text-[24px] md:!text-[28px] lg:!text-[33px] !leading-[1.2] tracking-tight whitespace-nowrap m-0"
                        >
                            Industries Conciliare Serves Globally
                        </H2>
                    </div>

                    <P
                        className="text-center bg-[#E1ECFE] p-4 rounded-xl m-0 !text-black !text-[13px] md:!text-[14px] lg:!text-[15px] !leading-[1.75] !font-medium"
                        style={{
                            // backgroundColor: "#E1ECFE",
                            padding: "12px 24px",
                            borderRadius: "20px",
                            maxWidth: "570px",
                        }}
                    >
                        Automated reconciliation solutions tailored for complex financial
                        <br />
                        operations across diverse sectors and transaction types.
                    </P>
                </div>
            </section>
        </div>
    );
};

export default FiveIndustries;