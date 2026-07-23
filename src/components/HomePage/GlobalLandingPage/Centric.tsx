// Centric.jsx
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const Centric = () => {
    // ✅ Single ref on the section to detect viewport
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // ✅ Reusable divider animation variant
    const dividerVariant = (fullHeight: number, delay = 0): Variants => ({
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: fullHeight,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeOut", delay },
        },
    });

    return (
        <section ref={sectionRef} className="w-full dark:bg-black bg-white overflow-hidden">

            {/* ── DESKTOP (xl) ── */}
            <div className="hidden lg:flex w-full h-[600px] relative">

                {/* ── COL 1 ── */}
                <div className="relative flex-1 h-full border-opacity-0">

                    {/* ✅ Animated Divider - grows from top to 365px */}
                    <motion.div
                        variants={dividerVariant(365, 0)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="absolute right-[-2px] top-0 w-0 border-r border-[1px] border-[#515151]"
                    />

                    {/* Grey Box */}
                    <div className="absolute top-[140px] left-0 right-0 h-[227px] bg-[#EAEAEA] flex flex-col justify-center px-8 gap-4">
                        <span
                            className="relative left-10 text-[#00AA72] text-[24px] font-semibold leading-none block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Driven by Outcomes
                        </span>
                        <p
                            className="relative left-10 text-[#141414] text-[16px] font-normal leading-[130%] m-0 max-w-[256px]"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            We focus on measurable improvements in performance, cost, and
                            reliability.
                        </p>
                    </div>
                </div>

                {/* ── COL 2 ── */}
                <div className="relative flex-1 h-full">

                    {/* ✅ Animated Divider - grows from top to 500px */}
                    <motion.div
                        variants={dividerVariant(500, 0.2)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="absolute right-[1px] top-0 w-0 border-r border-[1px] border-[#515151]"
                    />

                    {/* People-Centric Delivery */}
                    <div className="absolute top-[250px] left-8 right-8 flex flex-col gap-4">
                        <span
                            className="text-[#00AA72] dark:text-white text-[24px] font-semibold leading-none block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            People‑Centric Delivery
                        </span>
                        <p
                            className="text-[#141414] dark:text-white text-[16px] font-normal leading-[130%] m-0"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Qnest Global supports companies across banking, manufacturing,
                            healthcare, retail, and services. Our teams design AI, CRM, HRM
                        </p>
                    </div>
                </div>

                {/* ── COL 3 ── */}
                <div className="relative flex-1 h-full">

                    {/* ✅ Animated Divider - grows from top-40 to 400px */}
                    <motion.div
                        variants={dividerVariant(400, 0.4)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="absolute right-[-2px] top-40 w-0 border-r border-[1px] border-[#515151]"
                    />

                    {/* Grey Box */}
                    <div className="absolute top-[270px] left-0 right-0 h-[231px] bg-[#EAEAEA] flex flex-col justify-center px-8 gap-4">
                        <span
                            className="text-[#00AA72] text-[24px] font-semibold leading-[120%] block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Accountable Partnership
                        </span>
                        <p
                            className="text-[#141414] text-[16px] font-normal leading-[130%] m-0 max-w-[290px]"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            We commit to clear expectations, honest updates, and consistent
                            follow-through.
                        </p>
                    </div>
                </div>

                {/* ── COL 4 ── */}
                <div className="relative flex-1 h-full">

                    {/* Rotating Circle SVG */}
                    {/* <div className="absolute bottom-125 right-[180px] w-[350px] h-[280px] pointer-events-none z-0">
                        <motion.img
                            src="/Global-Landing-Page/Circle.svg"
                            alt="circle pattern"
                            className="w-full h-full max-w-none object-contain rotate-180"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            style={{ transformOrigin: "50% 50%" }}
                        />
                    </div> */}

                    {/* People-Centric Delivery */}
                    <div className="absolute top-[450px] left-8 right-8 flex flex-col gap-4">
                        <span
                            className="text-[#00AA72] dark:text-white text-[24px] font-semibold leading-none block"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            Built for Scale
                        </span>
                        <p
                            className="text-[#141414] dark:text-white text-[16px] font-normal leading-[130%] m-0"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                            We design platforms that grow with your business without performance degradation.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── MOBILE & TABLET (below xl) ── */}
            <div className="lg:hidden flex flex-col divide-y divide-gray-200">

                {/* Col 1 */}
                <div className="bg-[#EAEAEA] px-8 py-8 flex flex-col gap-4">
                    <span
                        className="text-[#00AA72] text-[20px] font-semibold leading-none"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Driven by Outcomes
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        We focus on measurable improvements in performance, cost, and
                        reliability.
                    </p>
                </div>

                {/* Col 2 */}
                <div className="px-8 py-8 flex flex-col gap-4">
                    <span
                        className="text-[#00AA72] text-[20px] font-semibold leading-none"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        People‑Centric Delivery
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Qnest Global supports companies across banking, manufacturing,
                        healthcare, retail, and services. Our teams design AI, CRM, HRM
                    </p>
                </div>

                {/* Col 3 */}
                <div className="bg-[#EAEAEA] px-8 py-8 flex flex-col gap-4">
                    <span
                        className="text-[#00AA72] text-[20px] font-semibold leading-[120%]"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Accountable Partnership
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        We commit to clear expectations, honest updates, and consistent
                        follow-through.
                    </p>
                </div>

                {/* Col 4 */}
                <div className="px-8 py-8 flex flex-col gap-4">
                    <span
                        className="text-[#00AA72] text-[20px] font-semibold leading-none"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        Built for Scale
                    </span>
                    <p
                        className="text-[#141414] text-[15px] font-normal leading-[145%] m-0"
                        style={{ fontFamily: "Quicksand, sans-serif" }}
                    >
                        We design platforms that grow with your business without performance degradation.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Centric;
