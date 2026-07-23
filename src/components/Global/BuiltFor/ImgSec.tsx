import { useState } from "react";
// import { ContactUs, ContactUsAI } from "../../../styles/Button";
import {  H3, P } from "../../../styles/Typography";
import { useParams } from "react-router-dom";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

/* ================= TYPES ================= */

type Theme = {
  bgImage: string;
  cardBg: string;
  cardText: string;
  paraColor: string;
  borderColor: string;
  buttonText: string;
  buttonBg: string;
  contactAction: "route" | "drawer" | "modal";
  contactRoute?: string;
};

type Content = {
  heroHeading: string | React.ReactNode;
  headingColor: string | React.ReactNode;
  cardTitle: string;
  cardPara: string;
  buttonLabel: string;
};

/* ================= THEMES (INDUSTRY ONLY) ================= */

const THEMES: Record<string, Theme> = {
  "banking-and-finance": {
    bgImage: "/BuiltFor/img3.jpg",
    cardBg: "bg-[#00AA72]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-[#D9D9D9]",
    buttonText: "text-[#010101]",
    buttonBg: "bg-[#FAFAFA]",
    contactAction: "route",
    contactRoute: "/industries/banking-and-finance/contactform",
  },

  "ehr-and-pms": {
    bgImage: "/BuiltFor/.webp",
    cardBg: "bg-[#00AA72]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-white",
    buttonText: "text-black",
    buttonBg: "bg-white",
    contactAction: "drawer",
  },

  "high-tech": {
    bgImage: "/BuiltFor/img3.jpg",
    cardBg: "bg-[#F99526]",
    cardText: "text-[#CCCCCC]",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-black",
    buttonText: "text-white",
    buttonBg: "bg-black",
    contactAction: "route",
    contactRoute: "/industries/high-tech/contactform",
  },

  "cloud-finops-ai": {
    bgImage: "/BuiltFor/ImageBg2.webp",
    cardBg: "bg-[#00AA72]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-[#D9D9D9]",
    buttonText: "text-black",
    buttonBg: "bg-[#FAFAFA]",
    contactAction: "modal",
  },
};

/* ================= BACKGROUND IMAGES FOR CLOUD-FINOPS-AI SUB-TYPES ================= */

const CLOUD_FINOPS_BG_IMAGES: Record<string, string> = {
  enterprises: "/BuiltFor/enterprisenewbg.webp",
  "saas-application-providers": "/BuiltFor/digitalnativenewbg.webp",
  "regulated-large-enterprise": "/BuiltFor/SmnBg.webp",
};

const EHR_AND_PMS_BG_IMAGES: Record<string, string> = {
  "long-term-care": "/BuiltFor/ContactLong.webp",
  "home-healthcare": "/BuiltFor/BuiltForHealth.webp",
  "clinics-and-hospitals": "/BuiltFor/ClinicsContact.webp",
};

const BANKING_AND_FINANCE_BG_IMAGES: Record<string, string> = {
  banks: "/BuiltForBnf/Bank.webp",
  "credit-union": "/BuiltForBnf/credit.webp",
  "financial-unions": "/BuiltForBnf/financial1.webp",
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, Content>> = {
  "cloud-finops-ai": {
    enterprises: {
      headingColor: "text-[#00AA72]",
      heroHeading: (<>
        CloudDIET cuts enterprise <br /> {" "} Azure waste.
      </>),
      cardTitle: "Our Platform",
      cardPara: "Check our solution for large-scale Azure environments.",
      buttonLabel: "View Demo",
    },

    "saas-application-providers": {
      headingColor: "text-[#00AA72]",
      heroHeading:
        "CloudDIET secures Azure savings, ensures compliance. ",
      cardTitle: "Start Saving ", 
      cardPara: "See CloudDIET platform and cut your cloud bills today.",
      buttonLabel: "Try Now",
    },

    "regulated-large-enterprise": {
      headingColor: "text-[#00AA72]",
      heroHeading: (<>
        CloudDIET stops SaaS <br /> {" "}cloud waste.
      </>),

      cardTitle: "Start Optimizing ",
      cardPara: "Check CloudDIET platform to cut Azure costs safely in regulated setups",
      buttonLabel: " Try Platform",
    },
  },

  "banking-and-finance": {
    banks: {
      headingColor: "text-[#00AA72]",
      heroHeading:
        "Modern banking requires modern solutions. We deliver both.",
      cardTitle: "Transform Your Bank",
      cardPara: "See our solutions in action with a personalized demo.",
      buttonLabel: "Get Started",
    },

    "credit-union": {
      headingColor: "text-[#00AA72]",
      heroHeading:
        "Built for credit unions. Powered by innovation. Focused on members.",
      cardTitle: "Empower Your Team",
      cardPara: "See how we help credit unions work smarter.",
      buttonLabel: "Get Started",
    },

    "financial-unions": {
      headingColor: "text-[#00AA72]",
      heroHeading:
        "Enterprise-grade solutions for institutions built to last.",
      cardTitle: "Transform Operations",
      cardPara: "Schedule a demo tailored to your institution's needs.",
      buttonLabel: "Get Started",
    },
  },
  "ehr-and-pms": {
    "long-term-care": {
      headingColor: "text-[#141414]",
      heroHeading: (<>
        Unified Care for <br /> {" "} Long Term Facilities.
      </>),
      cardTitle: "Ready to Transform?",
      cardPara: "See how Unified Clinicapp is built for the unique needs of long-term care.",
      buttonLabel: "Schedule Demo",
    },
    "home-healthcare": {
      headingColor: "text-[#141414]",
      heroHeading: (<>
        Home Healthcare <br /> {" "} Modernized.
      </>),
      cardTitle: "Remote Care",
      cardPara: "Bring the hospital experience to the patient's home.",
      buttonLabel: "Learn More",
    },
    "clinics-and-hospitals": {
      headingColor: "text-[#141414]",
      heroHeading: (<>
        Connected <br /> {" "} Healthcare Systems.
      </>),
      cardTitle: "Ready for Unity?",
      cardPara: "Discover how Unified Clinicapp connects your entire health system on one platform.",
      buttonLabel: "Request Demo",
    },
  },
};


export default function ImgSec() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  // const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme =
    THEMES[industry ?? "banking-and-finance"] ??
    THEMES["banking-and-finance"];

  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const content =
    CONTENT[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!content) return null;

  const getBgImage = () => {
    const activeBuiltForType = builtForType ?? defaultBuiltForType;

    if (industry === "cloud-finops-ai" && activeBuiltForType) {
      return CLOUD_FINOPS_BG_IMAGES[activeBuiltForType] ?? theme.bgImage;
    }

    if (industry === "ehr-and-pms" && activeBuiltForType) {
      return EHR_AND_PMS_BG_IMAGES[activeBuiltForType] ?? theme.bgImage;
    }

    if (industry === "banking-and-finance" && activeBuiltForType) {
      return BANKING_AND_FINANCE_BG_IMAGES[activeBuiltForType] ?? theme.bgImage;
    }

    return theme.bgImage;
  };

  // const handleContactClick = (e: React.MouseEvent) => {
  //   e.preventDefault();

  //   if (theme.contactAction === "route" && theme.contactRoute) {
  //     navigate(theme.contactRoute);
  //   } else if (theme.contactAction === "drawer") {
  //     setDrawerOpen(true);
  //   } else if (theme.contactAction === "modal") {
  //     setModalOpen(true);
  //   }
  // };

  return (
    <>
      <section
        className="relative  lg:h-[50vh] xl:h-[80vh] bg-cover bg-center  rounded-lg bg-no-repeat  mx-[40px] md:mx-[60px] xl:mx-[160px] justify-center lg:block"
        style={{ backgroundImage: `url(${getBgImage()})` }}
      >


        <div className="relative z-10 w-full max-w-full mx-auto h-full xl:pt-4 ">
          {/* LEFT TEXT */}
          <div className="absolute h-full xl:pt-6 w-full">
            {/* <div className="w-full  ">
              <H2
                className={`leading-tight md:mt-10  pl-6 max-w-[100%] md:max-w-[80%] lg:max-w-[55%] xl:max-w-[65%]   ${content.headingColor} ${industry === "ehr-and-pms"
                  ? "font-quadran"
                  : "font-quadran"
                  }`}
              >
                {content.heroHeading}
              </H2>


            </div> */}
          </div>
        </div>

        {/* FLOATING CARD RIGHT */}
        <div
         className="
relative w-full pb-12
lg:absolute lg:bottom-0 lg:right-0
lg:pb-0
"
        >
          <div className="flex justify-start xl:justify-end pointer-events-auto">
            <div
              className={`
                ${theme.cardBg} ${theme.cardText}
                rounded-md shadow-xl p-6 md:p-10 w-full lg:max-w-md
                lg:rounded-b-none lg:rounded-tr-none
                border-t-[10px] border-l-[10px] ${theme.borderColor}
              `}
            >
              <H3 className="mb-4">{content.cardTitle}</H3>

              <P className={`mb-6 ${theme.paraColor}`}>
                {content.cardPara}
              </P>


              <a href="/comingsoon">
                <button
                  className={` gap-2 group
            flex items-center justify-center
            w-auto h-[44px] sm:h-[48px]
            px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
            rounded-[8px]
            font-quicksand font-bold text-[14px] sm:text-[16px]
           
            transition-all duration-300 ease-in-out
            border border-transparent
            hover:bg-white hover:text-[#141414]
            hover:border-[#010101]
            hover:border-b-[4px]
            hover:-translate-y-[2px]
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] ${theme.buttonBg} ${theme.buttonText} cursor-pointer`}

                >
                  {content.buttonLabel}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}