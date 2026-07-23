import { H2, H3, H4, P } from "../../../styles/Typography";
import { useParams } from "react-router-dom";
import type { ReactNode } from "react";

/* ================= TYPES ================= */

type SplitContent = {
  headingPrimary: string | ReactNode;
  imageSrc: string;
  paragraph: string;
  bulletPoints: string[];
  stats: {
    value: string | ReactNode;
    label: string;
  }[];
  bulletIcons?: string[];
};

type Theme = {
  sectionBg: string;
  headingPrimaryColor: string;
  paragraphColor: string;
  bulletColor: string;
  statsColor: string;
  bulletIcons: string[];
};

/* ================= THEMES (BY INDUSTRY) ================= */

const THEMES: Record<string, Theme> = {
  "banking-and-finance": {
    sectionBg: "#FFFFFF",
    headingPrimaryColor: "#00AA72",
    paragraphColor: "#141414",
    bulletColor: "#fafafa",
    statsColor: "#00AA72",
    bulletIcons: [
      "/dollar.svg",
      "/time-fast.svg",
      "/uparrow.svg",
      "/risk.svg",
    ],
  },
  "ehr-and-pms": {
    sectionBg: "#FFFFFF",
    headingPrimaryColor: "#00AA72",
    paragraphColor: "#141414",
    bulletColor: "#efefef",
    statsColor: "#00AA72",
    bulletIcons: [
      "/BuiltFor/user.svg",
      "/BuiltFor/arrow-down.svg",
      "/BuiltFor/arrow-up.svg",
      "/BuiltFor/rotate-square.svg",
    ],
  },
  "high-tech": {
    sectionBg: "#FFFFFF",
    headingPrimaryColor: "#00AA72",
    paragraphColor: "#141414",
    bulletColor: "#efefef",
    statsColor: "#00AA72",
    bulletIcons: [
      "/BuiltFor/user.png",
      "/BuiltFor/arrow-down.png",
      "/BuiltFor/arrow-up.png",
      "/BuiltFor/rotate-square.png",
    ],
  },
  "cloud-finops-ai": {
    sectionBg: "#FFFFFF",
    headingPrimaryColor: "#00AA72",
    paragraphColor: "#141414",
    bulletColor: "#efefef",
    statsColor: "#00AA72",
    bulletIcons: [
      "/BuiltFor/Waste.svg",
      "/BuiltFor/money.svg",
      "/BuiltFor/web.svg",
      "/BuiltFor/efficiency.svg",
    ],
  },
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, SplitContent>> = {
  "banking-and-finance": {
    banks: {
      headingPrimary: "Tangible outcomes for forward-thinking banking institutions",
      imageSrc: "/bank3rd.webp",
      paragraph: "Measurable improvements in efficiency, compliance, and customer experience across your banking operations.",
      bulletPoints: [
        "Reduced operational costs",
        "Faster regulatory compliance",
        "Improved customer retention",
        "Enhanced risk management",
      ],
      bulletIcons: [
        "/dollar.svg",
        "/compliance.svg",
        "/handshake-deal.svg",
        "/risk.svg",
      ],
      stats: [
        { value: "85%", label: "Straight-through processing rate" },
        { value: "5K+", label: "Daily messages processed per user" },
        { value: "10", label: "Days saved in monthly reporting" },
      ],
    },
    "credit-union": {
      headingPrimary: "Real results for growing credit unions everywhere",
      imageSrc: "/BuiltForBnf/credit-3rd.webp",
      paragraph: "Measurable improvements in efficiency, member service, and daily operations for your team, helping you serve members better while reducing manual work.",
      bulletPoints: [
        "Faster member onboarding",
        "Reduced manual work",
        "Improved compliance readiness",
        "Lower operational costs",
      ],
      bulletIcons: [
        "/time-fast.svg",
        "/down-arrow.svg",
        "/revenue-alt.svg",
        "/cheap-stack.svg",
      ],
      stats: [
        { value: "85%", label: "Straight-through processing rate" },
        { value: "5K+", label: "Monthly hours saved" },
        { value: "10", label: "Days faster loan approvals" },
      ],
    },
    "financial-unions": {
      headingPrimary: "Proven results for financial institutions worldwide",
      imageSrc: "/BuiltForBnf/finance3rd.webp",
      paragraph: "Quantifiable improvements in efficiency, compliance, risk management, and operational scale across your entire organization.",
      bulletPoints: [
        "Accelerated digital transformation",
        "Strengthened regulatory compliance",
        "Optimized capital management",
        "Reduced operational risk",
      ],
      bulletIcons: [
        "/time-fast.svg",
        "/uparrow.svg",
        "/revenue-alt.svg",
        "/risk.svg",
      ],
      stats: [
        { value: "85%", label: "Straight-through processing achievement" },
        { value: "8K+", label: "Daily messages processed per team" },
        { value: "300", label: "Million transactions reconciled annually" },
      ],
    },
  },

  "cloud-finops-ai": {
    enterprises: {
      headingPrimary: (
        <>
          The Impact
          CloudDIET
          Delivers For Enterprises
        </>
      ),
      imageSrc: '/CloudDiet/BuiltFor/Enterprise.webp',
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      bulletPoints: [
        "Cut Waste Fast",
        "Fix Config Errors",
        "Lower License Costs",
        "Boost Team Efficiency",
      ],
      stats: [
        { value: "30%", label: "Average savings across estates" },
        { value: "100+", label: "Measures checked per scan" },
        { value: "8X", label: "ROI in first month" },
      ],
    },
    "saas-application-providers": {
      headingPrimary: "Impact We Deliver",
      imageSrc: '/CloudDiet/BuiltFor/DigitalNative.webp',
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      bulletPoints: [
        "Cut Costs Now",
        "Scale Without Waste",
        "Assure Savings Long-Term",
        "Boost Team Speed",
      ],
      stats: [
        { value: "200+", label: "Customers" },
        { value: "30%", label: "Average Solutions" },
        { value: "10M+", label: "Spend Optimized" },
      ],
    },
    "regulated-large-enterprise": {
      headingPrimary: "The Enterprise Impact We Deliver",
      imageSrc: '/CloudDiet/BuiltFor/LargeEnterprise.webp',
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      bulletPoints: [
        "Cut Waste Fast",
        "Keep Services Running",
        "Azure Every Dollar",
        "Scale Regions Smart",
      ],
      stats: [
        { value: "200+", label: "Customers" },
        { value: "30%", label: "Average Savings" },
        { value: "10M+", label: "Spend Managed" },
      ],
    },
  },
  "ehr-and-pms": {
    "long-term-care": {
      headingPrimary: "Measurable Outcomes for Long-Term Care",
      imageSrc: "/BuiltFor/Mesurable.webp",
      paragraph: "Unified Clinicapp transforms daily operations, leading to tangible improvements in care quality and efficiency.",
      bulletPoints: [
        "Improved Resident Care Coordination",
        "Reduced Administrative Burden",
        "Enhanced Regulatory Compliance",
        "Accelerated Reimbursement Cycles",
      ],
      stats: [
        { value: <>4X <br /> Faster</>, label: "Audit Preparation Time" },
        { value: <>200+ <br /> Facilities</>, label: "Trust Our Platform" },
        { value: <>50% <br /> less</>, label: "Medication Charting Errors" },
      ],
    },
    "home-healthcare": {
      headingPrimary: "Measurable Outcomes for Home Care",
      imageSrc: "/BuiltFor/HomeCareEHR.webp",
      paragraph: "Improve care quality, streamline operations, and ensure financial health for your agency.",
      bulletPoints: [
        "Accelerated Visit Documentation",
        "Improved Care Coordination",
        "Enhanced Regulatory Compliance",
        "Faster Claim Submission",
      ],
      stats: [
        { value: <>4X <br /> Faster</>, label: "Visit-to-Billing Cycle" },
        { value: <>200+ <br /> Agencies</>, label: "Trust Our Platform" },
        { value: <>40% <br /> Reduction</>, label: "Charting Backlog" },
      ],
    },
    "clinics-and-hospitals": {
      headingPrimary: "Measurable Outcomes for Healthcare Systems",
      imageSrc: "/BuiltFor/ClinicsNewEHR.webp",
      paragraph: "Drive operational excellence and financial health with a platform built for scale and coordination.",
      bulletPoints: [
        "Streamlined Interdepartmental Coordination",
        "Reduced Claim Denial Rates",
        "Enhanced Patient Data Accessibility",
        "Improved Staff Productivity",
      ],
      stats: [
        { value: <>40% <br /> Faster</>, label: "Care Coordination Handoffs" },
        { value: <>200+ <br /> Facilities</>, label: "Trust Our Platform" },
        { value: <>99% <br /> Accuracy</>, label: "Integrated Clinical Documentation" },
      ],
    },
  },
};

/* ================= COMPONENT ================= */

export default function SplitFeature() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  // Get theme configuration
  const themeConfig = THEMES[industry ?? "banking-and-finance"] || THEMES["banking-and-finance"];

  // Determine default builtForType based on industry
  const defaultBuiltForType = 
    industry === "ehr-and-pms" ? "long-term-care" : 
    industry === "banking-and-finance" ? "banks" : 
    industry === "cloud-finops-ai" ? "enterprises" : 
    "";

  // Get content with fallback
  const content = CONTENT[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!content) return null;

  // Get bullet icons (use content-specific or fallback to theme defaults)
  const bulletIcons = content.bulletIcons || themeConfig.bulletIcons;

  return (
    <section
      className="w-full pb-6"
      style={{ backgroundColor: themeConfig.sectionBg }}
    >
      {/* Added structural gap (gap-12 lg:gap-16 xl:gap-24) to the main grid to balance columns naturally */}
      <div className="max-w-full px-[40px] md:px-[60px] xl:px-[160px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-32 items-center">
        
        {/* LEFT - IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={content.imageSrc}
            alt="Feature illustration"
            className="w-full max-w-[450px] lg:max-w-[500px] h-auto rounded-lg object-contain"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="w-full mt-10 flex flex-col justify-center">
          {/* HEADING - Increased bottom margin */}
          <H2
            className={`mb-5 lg:mb-6 font-quadran leading-tight ${
              industry === "ehr-and-pms" ? "EHR" : ""
            }`}
            style={{ color: themeConfig.headingPrimaryColor }}
          >
            {content.headingPrimary}
          </H2>

          {/* PARAGRAPH - Removed restrictive max-w-md and gave it a wider breathing room (max-w-xl), increased bottom margin */}
          <P 
            className="mb-8 max-w-xl "
            style={{ color: themeConfig.paragraphColor }}
          >
            {content.paragraph}
          </P>

          {/* BULLET POINTS - Improved grid gaps (gap-x-6 gap-y-5) so it doesn't look squished vertically, increased bottom margin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
            {content.bulletPoints.map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div
                >
                  <img
                    src={bulletIcons[index] || bulletIcons[0]}
                    alt={text}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <H4
                  className=""
                  style={{ color: themeConfig.paragraphColor }}
                >
                  {text}
                </H4>
              </div>
            ))}
          </div>

          {/* STATS - Adjusted gaps to spread evenly across the 3 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 pt-6 border-t border-gray-100">
            {content.stats.map((stat, index) => (
              <div key={index} className="text-left">
                <H3
                  className=""
                  style={{ color: themeConfig.statsColor }}
                >
                  {stat.value}
                </H3>
                <P 
                  className=""
                  style={{ color: themeConfig.paragraphColor }}
                >
                  {stat.label}
                </P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}