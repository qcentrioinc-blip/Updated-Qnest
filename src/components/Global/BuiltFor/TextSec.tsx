import { useParams } from "react-router-dom";
import {  P } from "../../../styles/Typography";

type TextContent = {
  h4: string;
  h2: string;
  p: string;
};

const CONTENT_MAP: Record<string, Record<string, TextContent>> = {
  "cloud-finops-ai": {
    enterprises: {
      h4: "Challenges",
      h2: "Enterprise IT and Cloud Operations",
      p: "Multi-region Azure setups often overprovision resources to ensure availability. Without consistent governance and visibility, idle and oversized resources go unmanaged. This leads to millions in avoidable cloud waste over time.",
    },
    "saas-application-providers": {
      h4: "Saas",
      h2: "Scaling Challenges ",
      p: "SaaS providers incur hidden costs by keeping applications always scaled for peak demand. Always-on resources drive up compute and infrastructure spend even during low usage. Without dynamic scaling controls, these costs quietly erode margins.",
    },
    "regulated-large-enterprise": {
      h4: "Enterprise  ",
      h2: "Cloud Challenges",
      p: "Multi-region Azure setups overprovision resources for resilience. Without unified governance, idle assets drive massive, avoidable cloud waste.",
    },
  },

  "banking-and-finance": {
    banks: {
      h4: "Challenges",
      h2: "Banking Hurdles & Challenges",
      p: "Legacy infrastructure, regulatory pressure, and manual workflows slow bank growth while increasing operational risk and compliance costs. Disconnected systems create data silos, hindering real-time visibility across operations.  ",
    },
    "credit-union": {
      h4: "Challenges",
      h2: "Member-Focused Challenges",
      p: " Limited resources, rising member expectations for digital services, and complex regulatory demands make it hard for credit unions to compete with larger institutions while maintaining personalized service.",
    },
    "financial-unions": {
      h4: "Challenges",
      h2: "Operational Complexity & Issues ",
      p: "Complex operations, fragmented legacy systems, evolving regulatory mandates, and pressure to digitize demand modern, scalable, and secure solutions that can adapt to changing market conditions.",
    },
  },

  "ehr-and-pms": {
    "long-term-care": {
      h4: "Challenges faced by industry",
      h2: " Regulatory & Staffing Demands",
      p: "Long-term care providers face complex regulatory demands, staffing shortages, and high-acuity resident needs. Coordinating care while meeting strict compliance requires integrated technology that streamlines operations. ",
    },
    "home-healthcare": {
      h4: "Challenges faced by industry",
      h2: "Key EHR & PMS Hurdles",
      p: "Coordinating mobile care teams with disconnected systems creates data silos, delays billing, and increases compliance risks. Practices face rising denials, manual documentation burdens, and fragmented patient communication.",
    },
    "clinics-and-hospitals": {
      h4: "Challenges faced by industry",
      h2: "Clinical & Financial Hurdles",
      p: "Clinics and hospitals face disconnected systems that fragment patient data, delay billing cycles, and increase administrative burden. Coordinating complex care across departments while managing diverse revenue streams demands integrated technology solutions.",
    },
  },

  "high-tech": {
    startups: {
      h4: "Challenges",
      h2: "Speed vs Stability",
      p: "High-tech startups move fast but often sacrifice infrastructure efficiency and cost control.",
    },
    enterprises: {
      h4: "Challenges",
      h2: "Scaling Innovation Securely",
      p: "Large tech organizations must innovate while controlling spend and operational complexity.",
    },
  },
};


export default function TextSec() {
  
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();
  const isEHR = industry === "ehr-and-pms";

  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const content =
    CONTENT_MAP[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!content) return null;

  return (
 <section
  className={`w-full py-6 bg-white ${
    isEHR ? "dark:bg-black" : "dark:bg-black"
  }`}
>
      <div className="max-w-full px-[40px] md:px-[60px] xl:px-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* LEFT */}
          <div>
          <h5
  className={`mb-3 text-[14px] md:text-[16px] lg:text-[20px]
    ${industry === "ehr-and-pms" ? "font-quadran  EHR" : "font-quadran  "}
    font-Regular leading-[120%]
    ${
      isEHR
        ? "dark:text-[#FFCA28]"
        : "dark:text-[#00AA72]"
    }
  `}
>
  {content.h4}
</h5>

            <h3 className={`leading-snug dark:text-white text-[20px] md:text-[24px] lg:text-[32px]
        ${industry === "ehr-and-pms" ? "font-quadran  EHR" : "font-quadran  "}
        font-semibold
        
     `}>{content.h2}</h3>
          </div>

          {/* RIGHT */}
          <div>
            <P className="leading-relaxed">{content.p}</P>
          </div>

        </div>
      </div>
    </section>
  );
}