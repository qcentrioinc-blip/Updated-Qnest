"use client";

import { motion, type Variants } from "framer-motion";
import { H4, P } from "../../../styles/Typography";

export default function RemitreeCard() {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const cards = [
        {
            title: "Works across any industry",
            description:
                "Matches any two source files from banking, retail, or commerce seamlessly.",
            icon: "/BNFConsilier/engineering.svg",
        },
        {
            title: "Highly configurable rules",
            description:
                "Add unlimited rules through the front end without any coding required.",
            icon: "/BNFConsilier/link.svg",
        },
        {
            title: "End-to-end automation",
            description:
                "Automates data acquisition to certification with minimal manual intervention.",
            icon: "/BNFConsilier/iteration.svg",
        },
    ];

    return (
        <section className="w-full bg-white dark:bg-slate-800 xl:pb-8 py-4">
            <div className="max-w-8xl mx-auto px-4 md:px-6 flex flex-col items-center">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="group border border-gray-400 rounded-xl flex flex-col p-6 h-full transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>

                            <H4 className="mt-2 dark:text-white">{card.title}</H4>

                            <P className="text-gray-800 mt-3">
                                {card.description}
                            </P>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
