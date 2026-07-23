import CareIcon from "/BuiltFor/analytics.svg";
import ComplianceIcon from "/BuiltFor/team.svg";
import BillingIcon from "/BuiltFor/database-management.svg";
import { H2, H3, P } from "../../../styles/Typography";
import { useParams } from "react-router-dom";
// import { useTheme } from "../ThemeContext";

// Types for card configuration
type CardConfig = {
  icon: string;
  title: string;
  description: string;
};

type SectionConfig = {
  heading: string;
  cards: CardConfig[];
};

// Configuration for different industries and types
// Only text content and icons change, styling remains consistent
const SECTION_CONFIG: Record<string, Record<string, SectionConfig>> = {
  "ehr-and-pms": {
    "long-term-care": {
      heading: "Challenges in Long-Term Care",
      cards: [
        {
          icon: CareIcon,
          title: "Fragmented Care Coordination",
          description:
            "Disconnected teams lead to inconsistent care plans and communication gaps for residents.",
        },
        {
          icon: ComplianceIcon,
          title: "Regulatory Compliance Burden",
          description:
            "Manual tracking and reporting for MDS and audits increase errors and staff workload.",
        },
        {
          icon: BillingIcon,
          title: "Complex Billing Management",
          description:
            "Navigating Medicare, Medicaid, and private insurance billing is time-consuming and prone to delays.",
        },
      ],
    },
    "home-healthcare": {
      heading: "Challenges in Home Healthcare",
      cards: [
        {
          icon: CareIcon,
          title: "Field Communication Gaps",
          description:
            "Limited real-time communication between field staff and office creates delays in care coordination.",
        },
        {
          icon: ComplianceIcon,
          title: "Compliance Tracking Challenges",
          description:
            "Tracking patient outcomes and regulatory compliance remotely adds complexity to operations.",
        },
        {
          icon: BillingIcon,
          title: "Complex Visit-Based Billing",
          description:
            "Managing Medicare and Medicaid visit-based billing across multiple patients and locations is challenging.",
        },
      ],
    },
    "clinics-and-hospitals": {
      heading: "Challenges in Clinics and Hospitals",
      cards: [
        {
          icon: CareIcon,
          title: "Care Coordination Silos",
          description:
            "Fragmented systems across departments create data silos and delayed care coordination.",
        },
        {
          icon: ComplianceIcon,
          title: "Regulatory Compliance Tracking",
          description:
            "Managing complex regulatory requirements and audits across multiple departments is challenging.",
        },
        {
          icon: BillingIcon,
          title: "Revenue Cycle Management",
          description:
            "High-volume billing with complex DRG and CPT claims leads to revenue leakage without proper management.",
        },
      ],
    },
  },
  "banking-and-finance": {
    banks: {
      heading: "Challenges in Banking",
      cards: [
        {
          icon: CareIcon,
          title: "Legacy System Integration",
          description:
            "Outdated systems create silos and limit visibility across banking operations.",
        },
        {
          icon: ComplianceIcon,
          title: "Regulatory Compliance Burden",
          description:
            "Complex regulatory requirements demand constant monitoring and reporting.",
        },
        {
          icon: BillingIcon,
          title: "Complex Payment Processing",
          description:
            "Managing multiple payment channels and reconciliation processes is time-consuming.",
        },
      ],
    },
    "credit-union": {
      heading: "Challenges for Credit Unions",
      cards: [
        {
          icon: CareIcon,
          title: "Limited IT Resources",
          description:
            "Credit unions often lack the IT resources to manage complex banking software.",
        },
        {
          icon: ComplianceIcon,
          title: "Payment Processing Complexity",
          description:
            "Managing payments through intermediaries creates manual work and reconciliation issues.",
        },
        {
          icon: BillingIcon,
          title: "Member Service Integration",
          description:
            "Disconnected systems make it difficult to provide seamless member services.",
        },
      ],
    },
    "financial-unions": {
      heading: "Challenges for Financial Institutions",
      cards: [
        {
          icon: CareIcon,
          title: "Data Silos Across Functions",
          description:
            "Fragmented systems create data silos across lending, payments, and compliance functions.",
        },
        {
          icon: ComplianceIcon,
          title: "Regulatory Complexity",
          description:
            "Evolving regulatory demands require agile compliance monitoring and reporting.",
        },
        {
          icon: BillingIcon,
          title: "Operational Inefficiency",
          description:
            "Manual workarounds and disconnected systems constrain operational efficiency.",
        },
      ],
    },
  },
  "cloud-finops-ai": {
    enterprises: {
      heading: "Challenges for Enterprises",
      cards: [
        {
          icon: CareIcon,
          title: "Cloud Cost Visibility",
          description:
            "Limited visibility into cloud costs across multiple subscriptions and resources.",
        },
        {
          icon: ComplianceIcon,
          title: "Resource Optimization",
          description:
            "Inability to identify and address overprovisioned resources and waste.",
        },
        {
          icon: BillingIcon,
          title: "Complex Cloud Billing",
          description:
            "Managing cloud billing across multiple services and regions is challenging.",
        },
      ],
    },
    "saas-application-providers": {
      heading: "Challenges for SaaS Providers",
      cards: [
        {
          icon: CareIcon,
          title: "Multi-Tenant Cost Leakage",
          description:
            "Difficulty identifying and addressing cost leaks across multiple tenants.",
        },
        {
          icon: ComplianceIcon,
          title: "CI/CD Waste Management",
          description:
            "Managing infrastructure waste from CI/CD pipelines and development environments.",
        },
        {
          icon: BillingIcon,
          title: "Resource Scaling Complexity",
          description:
            "Challenges in optimizing resource scaling for application services.",
        },
      ],
    },
    "regulated-large-enterprise": {
      heading: "Challenges for Regulated Enterprises",
      cards: [
        {
          icon: CareIcon,
          title: "Complex Infrastructure",
          description:
            "Managing complex cloud infrastructure across multiple regions and services.",
        },
        {
          icon: ComplianceIcon,
          title: "Compliance and Governance",
          description:
            "Meeting regulatory requirements while optimizing cloud costs and resources.",
        },
        {
          icon: BillingIcon,
          title: "Cost Risk Management",
          description:
            "Managing significant cloud spend risks without proper visibility and optimization tools.",
        },
      ],
    },
  },
  "high-tech": {
    default: {
      heading: "Challenges in High Tech",
      cards: [
        {
          icon: CareIcon,
          title: "Rapid Technology Evolution",
          description:
            "Keeping up with rapid technology changes while maintaining stability.",
        },
        {
          icon: ComplianceIcon,
          title: "Security and Compliance",
          description:
            "Managing complex security requirements and compliance standards.",
        },
        {
          icon: BillingIcon,
          title: "Infrastructure Scale",
          description:
            "Scaling infrastructure to meet growing demand while controlling costs.",
        },
      ],
    },
  },
};

// Unified styles - consistent across all industries
// const UNIFIED_STYLES = {
//   light: {
//     sectionBg: "#ffffff",
//     headingColor: "#00AA72",
//     cardBg: "#ffffff",
//     cardBorderColor: "#E5E7EB",
//     cardTopBorderColor: "#00AA72",
//     cardTitleColor: "#141414",
//     cardDescriptionColor: "#6B7280",
//   },
  


const EHRNew = () => {
  // const { theme } = useTheme();
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  // Determine which config to use
  const industryConfig = SECTION_CONFIG[industry ?? "ehr-and-pms"];
  
  // Set default type based on industry
  const defaultBuiltForType = 
    industry === "ehr-and-pms" ? "long-term-care" : 
    industry === "banking-and-finance" ? "banks" : 
    industry === "cloud-finops-ai" ? "enterprises" : 
    "default";

  // Get config with fallback
  const config = industryConfig?.[builtForType ?? defaultBuiltForType] || 
                 industryConfig?.default || 
                 SECTION_CONFIG["ehr-and-pms"]["long-term-care"];

  const { heading, cards } = config;
  
  // Get unified styles based on theme

  return (
    <section
      className="relative w-full py-10"
    >
      <div className="max-w-full px-[40px] md:px-[60px] xl:px-[160px]">
        {/* Heading */}
        <H2
          className=" mb-6"
        >
          {heading}
        </H2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-md shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
              style={{
              }}
            >
              {/* Top Border */}
              <div
                className="h-2"
              />
              <div className="p-6">
                <img src={card.icon} alt={card.title} className="w-10 h-10 mb-8" />
                <H3
                  className=" mb-2"
                >
                  {card.title}
                </H3>
                <P
                  className=""
                >
                  {card.description}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EHRNew;