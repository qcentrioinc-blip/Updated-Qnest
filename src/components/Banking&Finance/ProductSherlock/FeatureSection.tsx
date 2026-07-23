"use client";

import { useState } from "react";
import { H2, H3, H4, P } from "../../../styles/Typography";

/* ✅ TYPES */
type TabType = "advance" | "lite";

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

interface FeatureData {
  image: string;
  items: FeatureItem[];
}

type DataType = {
  advance: FeatureData;
  lite: FeatureData;
};

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState<TabType>("advance");

  const data: DataType = {
    advance: {
      image: "/ProductSherlock/img1.webp",
      items: [
        {
          icon: "/ProductSherlock/icon25.svg",
          title: "Foreign Remittance Monitoring",
          desc: "Monitors foreign inward and outward remittance transactions with complete tracking and sc  reening capabilities for AML compliance",
        },
        {
          icon: "/ProductSherlock/icon26.svg",
          title: "Case Management",
          desc: "Comprehensive case management tools for tracking investigations, documenting findings, and managing alerts through resolution",
        },
        {
          icon: "/ProductSherlock/icon27.svg",
          title: "Real-Time Screening",
          desc: "Real-time sanctions screening with name matching, whitelisting, and automated alerts for suspicious transactions",
        },
        {
          icon: "/ProductSherlock/icon28.svg",
          title: "Financial Messages",
          desc: "Financial messages related features for monitoring and analyzing payment message flows across SWIFT and other channels",
        },
      ],
    },

    lite: {
      image: "/ProductSherlock/img2.webp",
      items: [
        {
          icon: "/ProductSherlock/img29.svg",
          title: "Database Backup",
          desc: "Advance offers automated database backup while Lite and Mini provide manual backup options with different report counts",
        },
        {
          icon: "/ProductSherlock/img30.svg",
          title: "Report Count",
          desc: "Advance variant includes 50 reports while Lite includes 25 reports with configurable reporting options",
        },
        {
          icon: "/ProductSherlock/img31.svg",
          title: "FATCA Fraud Monitoring",
          desc: "FATCA fraud monitoring capabilities with US indicia tracking and reportable account identification features",
        },
        {
          icon: "/ProductSherlock/img32.svg",
          title: "Core Features",
          desc: "Includes dashboard, alerts, sanctions list name matching, whitelisting, and case management as common features across variants",
        },
      ],
    },
  };

  const current = data[activeTab];

  return (
    <section className="w-full dark:bg-black py-6 px-4 md:px-8">
      {/* TITLE */}
      <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
        <H2 className="text-[#00AA72] leading-tight">
          Sherlock Product Variants Key Differentiators
        </H2>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[40%_60%] items-stretch">

        {/* LEFT IMAGE */}
        <div className="hidden lg:block h-full overflow-hidden">
  <img
    src={current.image}
    alt="feature"
    className="w-full h-full object-cover"
  />
</div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#1F2A3C] text-white px-6 py-10 md:px-10 md:py-12 flex flex-col justify-between h-full">

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {current.items.map((item: FeatureItem, index: number) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <H4>{item.title}</H4>

                <P className="text-white/70 text-sm">
                  {item.desc}
                </P>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
<div className="flex flex-col sm:flex-row gap-8 mt-10">
  
  <button
    onClick={() => setActiveTab("advance")}
    className={`cursor-pointer w-full sm:w-auto px-6 py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300
      ${
        activeTab === "advance"
          ? "bg-[#00AA72] text-white scale-105"
          : "bg-white text-[#00AA72]"
      }`}
  >
    <H3>Advance Variant</H3>
  </button>

  <button
    onClick={() => setActiveTab("lite")}
    className={`cursor-pointer w-full sm:w-auto px-6 py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300
      ${
        activeTab === "lite"
          ? "bg-[#00AA72] text-white scale-105"
          : "bg-white text-[#00AA72]"
      }`}
  >
    <H3>Lite & Mini Variants</H3>
  </button>

</div>
        </div>
      </div>
    </section>
  );
}