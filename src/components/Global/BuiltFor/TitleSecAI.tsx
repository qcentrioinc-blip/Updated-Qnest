import { useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { H1, P } from "../../../styles/Typography";
import { ContactUsAI } from "../../../styles/Button";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

// ==========================================
// 1. TYPES & INTERFACES
// ==========================================
export type BuiltForKey =
  | "saas-application-providers"
  | "enterprises"
  | "regulated-large-enterprise";

export type IndustryKey =
  | "cloud-finops-ai"
  | "ehr-and-pms"
  | "banking-and-finance"
  | "high-tech";

export interface ContentItem {
  heading: ReactNode;
  description: string;
  cta: string;
  bgImage: string;
}

type IndustryBuiltForMap = Record<BuiltForKey, ContentItem>;

// ==========================================
// 2. INDUSTRY CONTENT CONFIGURATIONS
// ==========================================

// --- INDUSTRY 1: CLOUD FINOPS AI ---
const CLOUD_FINOPS_CONTENT: IndustryBuiltForMap = {
  "saas-application-providers": {
    heading: (
      <>
        Scale Your SaaS Profitably With CloudDIET
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cta: "Optimize Now",
    bgImage: "/BuiltForImg.jpg",
  },
  enterprises: {
    heading: (
      <>
        Optimize Multi Subscription <br /> Azure Costs
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cta: "Start Your Scan",
    bgImage: "/BuiltForImg.jpg",
  },
  "regulated-large-enterprise": {
    heading: (
      <>
        Assured Azure Savings <br /> For Large Enterprise
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cta: "Get Started",
    bgImage: "/BuiltForImg.jpg",
  },
};

// --- INDUSTRY 2: EHR & PMS ---
const EHR_PMS_CONTENT: IndustryBuiltForMap = {
  "saas-application-providers": {
    heading: (
      <>
        HIPAA-Compliant Cloud <br /> Optimization for Healthcare SaaS
      </>
    ),
    description:
      "Maintain strict HIPAA compliance and patient data privacy while optimizing EHR & PMS cloud infrastructure.",
    cta: "Request Demo",
    bgImage: "/EhrBuiltForImg.jpg",
  },
  enterprises: {
    heading: (
      <>
        Scalable Cloud Infrastructure <br /> For Hospital Networks
      </>
    ),
    description:
      "Streamline healthcare IT workloads and eliminate redundant compute across multi-facility setups.",
    cta: "Explore EHR Solutions",
    bgImage: "/EhrBuiltForImg.jpg",
  },
  "regulated-large-enterprise": {
    heading: (
      <>
        Enterprise Healthcare <br /> Cloud Governance & Cost Control
      </>
    ),
    description:
      "Maintain zero-trust security compliance while scaling clinical diagnostic systems reliably.",
    cta: "Contact Healthcare Team",
    bgImage: "/EhrBuiltForImg.jpg",
  },
};

// --- INDUSTRY 3: BANKING & FINANCE ---
const BANKING_FINANCE_CONTENT: IndustryBuiltForMap = {
  "saas-application-providers": {
    heading: (
      <>
        FinTech Cloud Efficiency <br /> & Margin Growth
      </>
    ),
    description:
      "Drive down compute costs for transaction-heavy financial platforms with real-time optimization.",
    cta: "Schedule Audit",
    bgImage: "/BankingBuiltForImg.jpg",
  },
  enterprises: {
    heading: (
      <>
        Bank-Grade Security <br /> With Optimized Azure Spend
      </>
    ),
    description:
      "Align core banking systems and microservices with cost governance protocols.",
    cta: "Get Financial Assessment",
    bgImage: "/BankingBuiltForImg.jpg",
  },
  "regulated-large-enterprise": {
    heading: (
      <>
        Compliant Cloud Management <br /> For Banking Institutions
      </>
    ),
    description:
      "Ensure SOC2 and PCI-DSS compliance while controlling enterprise infrastructure expansion.",
    cta: "Talk to Financial Expert",
    bgImage: "/BankingBuiltForImg.jpg",
  },
};

// --- INDUSTRY 4: HIGH-TECH ---
const HIGH_TECH_CONTENT: IndustryBuiltForMap = {
  "saas-application-providers": {
    heading: (
      <>
        High-Performance Infrastructure <br /> For AI & Tech SaaS
      </>
    ),
    description:
      "Maximize compute density and reduce GPU/VM costs for intensive engineering workloads.",
    cta: "Start Optimization",
    bgImage: "/HighTechBuiltForImg.jpg",
  },
  enterprises: {
    heading: (
      <>
        Accelerate Tech Velocity <br /> Without Overspending
      </>
    ),
    description:
      "Automated resource allocation for high-growth tech platforms and developer pipelines.",
    cta: "Scan Infrastructure",
    bgImage: "/HighTechBuiltForImg.jpg",
  },
  "regulated-large-enterprise": {
    heading: (
      <>
        Large-Scale High-Tech <br /> Cloud Governance
      </>
    ),
    description:
      "Customized cost strategies for global enterprise tech suites and hybrid deployments.",
    cta: "Get Enterprise Plan",
    bgImage: "/HighTechBuiltForImg.jpg",
  },
};

// ==========================================
// 3. MASTER CONTENT REGISTRY & PREFETCH
// ==========================================
const INDUSTRY_REGISTRY: Record<string, IndustryBuiltForMap> = {
  "cloud-finops-ai": CLOUD_FINOPS_CONTENT,
  "ehr-and-pms": EHR_PMS_CONTENT,
  "banking-and-finance": BANKING_FINANCE_CONTENT,
  "high-tech": HIGH_TECH_CONTENT,
};

// Prefetch all images on application mount
export const prefetchBuiltForAIImages = () => {
  Object.values(INDUSTRY_REGISTRY).forEach((industryMap) => {
    Object.values(industryMap).forEach((item) => {
      if (item?.bgImage) {
        const img = new Image();
        img.src = item.bgImage;
      }
    });
  });
};

// ==========================================
// 4. MAIN COMPONENT
// ==========================================
export default function TitleSecAI() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: BuiltForKey;
  }>();

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Default Fallbacks
  const activeIndustry = industry ?? "cloud-finops-ai";
  const activeBuiltFor = builtForType ?? "saas-application-providers";

  // Prefetch images on mount
  useEffect(() => {
    prefetchBuiltForAIImages();
  }, []);

  // Safe Content Lookup
  const content: ContentItem = useMemo(() => {
    const selectedIndustry = INDUSTRY_REGISTRY[activeIndustry] ?? CLOUD_FINOPS_CONTENT;
    return selectedIndustry[activeBuiltFor] ?? selectedIndustry["saas-application-providers"];
  }, [activeIndustry, activeBuiltFor]);

  // Handle CTA Click per Industry
  const handleContactClick = () => {
    switch (activeIndustry) {
      case "ehr-and-pms":
        setDrawerOpen(true);
        break;
      case "banking-and-finance":
        navigate("/industries/banking-and-finance/contactform");
        break;
      case "high-tech":
        navigate("/industries/high-tech/contactform");
        break;
      case "cloud-finops-ai":
      default:
        setModalOpen(true);
        break;
    }
  };

  return (
    <section className="relative w-full h-full lg:h-[40vh] xl:h-[80vh] overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover xl:bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.bgImage})` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-[40px] md:px-[60px] xl:px-[160px] text-left text-white flex flex-col items-start mt-20">
        <div className="space-y-4 py-4">
          {/* Key prop forces React to remount & re-trigger character floating animations on tab/route changes */}
          <H1
            key={`h1-${activeIndustry}-${activeBuiltFor}`}
            className="text-white max-w-2xl"
          >
            {content.heading}
          </H1>

          <P
            key={`p-${activeIndustry}-${activeBuiltFor}`}
            className="text-white mt-3 max-w-xl"
          >
            {content.description}
          </P>

          <ContactUsAI onClick={handleContactClick}>
            <span>{content.cta}</span>
          </ContactUsAI>
        </div>
      </div>

      {/* Industry Drawers / Modals */}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
}