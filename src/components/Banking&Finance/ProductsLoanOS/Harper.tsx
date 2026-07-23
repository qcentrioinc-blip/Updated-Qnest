"use client";
 
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { ScrollContext } from "../../../context/ScrollContext";
import { H1, H2, P } from "../../../styles/Typography";
 
const Harper = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // const scrollContext = useContext(ScrollContext);
 
    // Horizontal Scroll Animation (Same logic as Process)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
 
    // Move horizontally based on scroll progress
    // Adjusted to match your card width (80vw)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
    // Your content array
    const content = [
        {
            id: 1,
            desktopImage: "/LOS/1.webp",
            mobileImage: "/LOS/1.webp",
            alt: "Harper-1",
            title: "Comprehensive Features for End-to-End Loan Origination and Management",
            description:
                "LOS includes digital applications, pre-approved offers, e-verification, OCR scanning, score parameter configuration, and multi-level approval workflows. Group lending support, dropout management, and customer relationship tools enhance overall lending operations efficiency.",
        },
        {
            id: 2,
            desktopImage: "/LOS/2.webp",
            mobileImage: "/LOS/2.webp",
            alt: "Harper-2",
            title: "Complete Document Verification with OCR and AI-Powered Mismatch Detection- CIP Compliant under USA PATRIOT Act",
            description:
                " LOS includes built-in OCR capabilities for scanning government IDs, driving licenses, and SSN cards. AI enhances accuracy by learning from multiple document images and detecting mismatches in name, birth date, and address.",
        },
        {
            id: 3,
            desktopImage: "/LOS/3.webp",
            mobileImage: "/LOS/3.webp",
            alt: "Harper-3",
            title: "Configurable Multi-Level Approval Matrix Based on Products and Scores",
            description:
                " Define approval parameters based on loan products, credit scores, and amounts. Applications progress through multiple levels with final authority approval. Generates sanction letters automatically upon approval.",
        },
        {
            id: 4,
            desktopImage: "/LOS/4.webp",
            mobileImage: "/LOS/4.webp",
            alt: "Harper-4",
            title: "Dropout Tracking and Customer Relationship Management Tools Included",
            description:
                "Monitors application dropout rates and implements retention strategies. Manages customer interactions throughout loan lifecycle. Supports collection tracking and recovery processes for delinquent loans.",
        },
    ];
 
    return (
        <div className=" ">
 
            {/* ---------------------------------------- */}
            {/* MOBILE / TABLET (Vertical layout)        */}
            {/* ---------------------------------------- */}
            <div className="block lg:hidden bg-white dark:bg-black py-8 px-4">
                <div className="mb-8">
                    <H1 className="font-bold text-gray-900 dark:text-[#00AA72] text-left ml-2 sm:ml-16 lg:ml-20">
                        Complete Loan Origination System Feature 
                    </H1>
                </div>
 
                <div className="flex flex-col gap-y-10">
                    {content.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="relative mx-auto max-w-[600px] h-[320px] rounded-[20px] overflow-hidden mb-6 bg-white p-4">
                                <img
                                    src={item.mobileImage}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
 
                            <div className="mx-auto max-w-[600px] px-4">
                                <H2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {item.title}
                                </H2>
                                <P className="text-base text-gray-700 leading-relaxed">
                                    {item.description}
                                </P>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
 
            {/* ---------------------------------------- */}
            {/* DESKTOP (Horizontal Scroll with Process Logic) */}
            {/* ---------------------------------------- */}
            <div
                ref={containerRef}
                className="hidden lg:block relative dark:bg-black bg-white"
                style={{ height: "200vh" }} // Reduced height further
            >
                <div className="sticky top-0  flex flex-col overflow-hidden">
 
                    {/* Title */}
                    <div className="py-6 px-20 z-20">
                        <H2 className="dark:text-[#00AA72]"
                        >
                            The Complete Loan Origination System Feature 
                        </H2>
                    </div>
 
                    {/* Reverted justify-center to justify-start to fix first card visibility. Changed items-center to items-start + pt-8 to pull cards up. */}
                    <div className="flex-1 flex items-start justify-start overflow-hidden pt-15 pb-8">
                        <motion.div
                            style={{ x }}
                            className="flex gap-x-16 h-full pl-20 pr-10 items-center"
                        >
                            {content.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-shrink-0 "
                                    style={{
                                        width: "80vw",
                                        height: "560px",
                                        background: "#FFFFFF",
                                        borderRadius: "24px",
                                        padding: "40px",
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                                        display: "flex",
                                        gap: "40px",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* IMAGE - Changed to flex: 1 to share space properly with gap */}
                                   <div style={{ flex: "1", height: "100%" }}>
    <img
        src={item.desktopImage}
        alt={item.alt}
        className="w-full h-full object-cover"
    />
</div>
                                    {/* TEXT - Changed to flex: 1 */}
                                    <div style={{
                                        flex: "1",
                                        paddingRight: "10px",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <h2
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                                fontWeight: 700,
                                                fontSize: "32px",
                                                lineHeight: "120%",
                                                color: "#2A2A2A",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            {item.title}
                                        </h2>
 
                                        {/* Divider Line - Changed width to 100% */}
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "2px",
                                                backgroundColor: "gray",
                                                borderRadius: "2px",
                                                marginBottom: "32px",
                                            }}
                                        />
 
                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontSize: "19px",
                                                fontWeight: 400,
                                                lineHeight: "130%",
                                                color: "#141414",
                                                paddingRight: "10px",
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
 
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Harper;