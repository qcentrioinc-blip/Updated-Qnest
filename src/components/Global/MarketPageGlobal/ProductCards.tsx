"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

type CardItem = {
  id: string;
  logo: string;
  title: string;
  tags?: string[];
  description: string;
  category: string;
  link?: string;
};

const sampleData: CardItem[] = [
  // --- Banking and Finance (2 Products Only) ---
  {
    id: "1",
    logo: "QBnFLogo.svg",
    title: "Conciliare",
    // tags: ["AML", "AI", "Security"],
    description:
      "Automated reconciliation platform designed to streamline complex financial data matching. It consolidates data from disparate sources, applies advanced algorithms for high automatic matching rates, and generates detailed reports. The solution reduces manual effort, ensures accuracy, and provides transparent audit trails for regulatory compliance. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/conciliare",
  },
  {
    id: "2",
    logo: "/kycLogo.png",
    title: "CIP & CDD",
    // tags: ["Core", "Cloud"],
    description:
      "Policy-driven due diligence automation platform that digitizes customer onboarding and lifecycle management. It replaces manual document-based processes with system-configured policies, automated risk assessment, and name screening. The solution ensures consistent CIP compliance, reduces re-work, and maintains audit-ready customer profiles across jurisdictions. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/CIP",
  },
  {
    id: "3",
    logo: "QBnFLogo.svg",
    title: "Bankfair",
    // tags: ["AML", "AI", "Security"],
    description:
      "Core banking and loan management system with comprehensive parameterization capabilities. It enables centralized management of branch setup, currency handling, general ledger, and financial products. The system automates processes, ensures regulatory compliance, and supports scalability. Advanced security features protect sensitive customer data while enabling tailored financial product offerings. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/bankfair",
  },
  {
    id: "4",
    logo: "/kycLogo.png",
    title: "Sherlock",
    // tags: ["Core", "Cloud"],
    description:
      "An advanced anti-money laundering solution that monitors customer transactions and financial messages in real-time. It screens transactions against global watch lists, performs CIP verification, and generates alerts for suspicious activities. The system integrates with core banking platforms to ensure regulatory compliance and enhance operational efficiency. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/sherlock",
  },
  {
    id: "5",
    logo: "QBnFLogo.svg",
    title: "Remitree",
    // tags: ["AML", "AI", "Security"],
    description:
      "Cross-border remittance middleware that bridges core banking systems with the Swift Alliance Gateway. It supports bi-directional message handling, validates MT and MX formats, and automates compliance checks through AML integration. The solution enables straight-through processing, reduces manual intervention, and ensures timely settlement of international transactions. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/remitree",
  },
  {
    id: "6",
    logo: "/kycLogo.png",
    title: "Internet Banking System",
    // tags: ["Core", "Cloud"],
    description:
      "Digital onboarding platform that streamlines customer application processes across web and mobile channels. It features dynamic forms, SSN auto-fill, document verification through OCR, and role-based sales manager assistance. The solution reduces drop-off rates, ensures data accuracy, and provides real-time application tracking for financial institutions. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/internet-banking-system",
  }, {
    id: "7",
    logo: "QBnFLogo.svg",
    title: "PAGO",
    // tags: ["AML", "AI", "Security"],
    description:
      "Versatile payment and settlement system supporting multiple transaction methods, including e-cash and e-cheques. It ensures atomicity with immediate payment decisions, integrates seamlessly with existing infrastructure, and provides real-time monitoring. Advanced security protocols protect transactions while lower fees make it economical for high-volume processing. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/pago",
  },
  {
    id: "8",
    logo: "/kycLogo.png",
    title: "SAMS",
    // tags: ["Core", "Cloud"],
    description:
      "Stressed asset management solution that automates NPA tracking and provisioning calculations. It consolidates customer data across multiple loan products, applies regulatory classification rules based on days past due, and generates comprehensive MIS reports. Predictive analytics enable early identification of potential NPAs for proactive risk management.",
    category: "Banking and Finance",
    link: "/industries/:industry/products/commingsoon",
  },

  {
    id: "9",
    logo: "/kycLogo.png",
    title: "ALMANAC",
    // tags: ["Core", "Cloud"],
    description:
      "An asset and liability management system that integrates risk management, liquidity forecasting, and regulatory reporting. It provides tools for interest rate sensitivity analysis, stress testing, and government securities management. Multi-currency compliant with predictive analytics for capital planning. Generates regulatory reports and supports informed strategic decision-making for financial institutions. ",
    category: "Banking and Finance",
    link: "/industries/banking-and-finance/products/almanac",
  },

  // --- EHR and PMS (1 Product) ---
  {
    id: "10",
    logo: "QBnFLogo.svg",
    title: "Unified HealthCare",
    // tags: ["EHR", "Interoperability"],
    description:
      "All-in-one EMR/EHR and practice management solution that integrates clinical workflows with revenue cycle management. It streamlines patient care from scheduling to treatment follow-ups, tracks billing and payments, and supports any practice size. HIPAA-compliant with enterprise-grade security for protecting sensitive patient data. ",
    category: "EHR and PMS",
    link: "/industries/ehr-and-pms",
  },

  // --- Cloud Finops AI (CloudDIET) ---
  {
    id: "11",
    logo: "QBnFLogo.svg",
    title: "CloudDIET",
    // tags: ["FinOps", "Savings", "Cloud"],
    description:
      "AI-powered cloud financial optimization platform that profiles resource configuration, utilization, and cost across AWS, Azure, and Google Cloud. It identifies misconfigurations, over-provisioning, and waste. Provides detailed recommendations and savings assurance with a pay-for-performance model. Reduces cloud expenditure by up to 30% without impacting outcomes. ",
    category: "Cloud Finops AI",
    link: "/industries/cloud-finops-ai",
  },

  // HIGH TECH INDUSTRY COMMENTED OUT
  // {
  //   id: "5",
  //   ...
  //   category: "High Tech",
  // },
];

export const App: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    "Banking and Finance",
    "EHR and PMS",
    "Cloud Finops AI",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredData = useMemo(
    () =>
      sampleData
        .filter((item) => item.category === selectedCategory)
        .sort((a, b) => a.title.localeCompare(b.title)),
    [selectedCategory]
  );

  const handleCardClick = (item: CardItem) => {
    if (item.link) {
      navigate(item.link);
    }
  };

  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();

  // Detect if a tall industry navbar (BNFNav etc.) is active
  const hasTallNavbar =
    pathname.startsWith("/industries/banking-and-finance") ||
    pathname.startsWith("/industries/ehr-and-pms") ||
    pathname.startsWith("/industries/high-tech") ||
    pathname.startsWith("/industries/cloud-finops-ai");

  const [isScrollUp, setIsScrollUp] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrollUp(currentY < lastScrollY.current);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-up top: tall navbar = 130px, global navbar = 16 (64px)
  // Scroll-down top: tall navbar = top-20 (80px), global navbar = top-0
  const stickyTopClass = isScrollUp
    ? hasTallNavbar ? "top-0 lg:top-[0px]" : "top-0 lg:top-0"
    : hasTallNavbar ? "top-0 lg:top-0" : "top-0";

  return (
    <section ref={sectionRef} className="w-full ">
      {/* Category Pills */}
      <div
        className={`
          sticky 
          ${stickyTopClass} 
          z-40 
          dark:bg-slate-900
          bg-white 
          py-3 
          shadow-sm 
          transition-all 
          duration-300
        `}
      >
        <div className="flex justify-start sm:justify-center gap-4 py-2 overflow-x-auto px-4 sm:px-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setSelectedCategory(c);
                sectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`px-5 py-4 text-sm sm:text-base rounded-full border transition-all duration-300 whitespace-nowrap
                ${c === selectedCategory
                  ? "bg-[#5d8ef0] text-white shadow-md"
                  : "bg-white  text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-12 
          dark:bg-slate-900
          px-6 sm:px-10 lg:px-20 
          pt-12
          pb-12
        "
      >
        {filteredData.map((item) => (
          <article
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="
      group
      relative dark:bg-slate-700 bg-[#F2F2F2] 
      rounded-2xl 
      p-8 
      flex flex-col 
      shadow-md 
      transition-all duration-300 
      cursor-pointer 
      hover:shadow-md 
      hover:-translate-y-2
      
      min-h-[400px] 
      lg:min-h-[450px]
    "
          >
            {/* Title + Arrow */}
            <div className="flex items-start justify-between mb-3">
              <H3 className=" dark:text-white">
                {item.title}
              </H3>

              {/* Arrow Icon */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(item);
                }}
                className="
          flex items-center justify-center
          w-8 h-8 
          rounded-full 
          bg-white 
          transition-all duration-300
          group-hover:translate-x-2
        "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-5">
              {item.tags?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-white border rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <P className="text-sm text-gray-600 flex-1 leading-relaxed">
              {item.description}
            </P>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(item);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Explore Product
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default App;