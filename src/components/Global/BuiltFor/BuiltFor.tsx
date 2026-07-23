import { useLocation, useParams } from "react-router-dom";

import InsightThought from "../../Banking&Finance/InsightThought";
// import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
import BuiltForIntro from "./BuiltForIntro";
// import Cardcase from "./CardCase";
import GradientCardsSection from "./GradientCards";
// import ImgSec from "./ImgSec";
import SplitFeature from "./SplitFeature";
import TextSec from "./TextSec";
// import BnfImg from "./BnfImg";

import BNFNav from "../../Banking&Finance/Navbar/BNFnav";
import AINavbar from "../../AIOptimization/Navbar/AINavbar";
import EHRNavbar from "../../EHR&PMS/Navbar/EHRNavbar";
import HighTechNavbar from "../../HighTech/Navbar/HighTechNavbar";

// import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter";
// import FooterHT from "../../HighTech/FooterHT";
// import AIFooter from "../../HomePage/AIOptimization/AIFooter";
import TitleSectionSwitcher from "./TitleSectionSwitcher";
// import BlogCarousel from "../../HomePage/EHR&PMS/BlogCarousel";
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs";
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
import ContactSecHT from "../../HighTech/ContactSecHT";
import EHRNew from "./EHRNew";
// import InsightThoughtBnF from "./InsightThoughtBnF";

// Valid built-for types per industry
const VALID_BUILT_FOR_TYPES: Record<string, string[]> = {
  "banking-and-finance": ["banks", "credit-union", "financial-unions"],
  "cloud-finops-ai": ["enterprises", "saas-application-providers", "regulated-large-enterprise"],
  "ehr-and-pms": ["long-term-care", "home-healthcare", "clinics-and-hospitals"],
  "high-tech": ["startups", "enterprises"],
};

export const BuiltFor = () => {
  const { pathname } = useLocation();
  const { industry, builtForType } = useParams<{ industry: string; builtForType: string }>();

  // Validate builtForType - if provided but not in the valid list, don't render
  if (builtForType && industry) {
    const validTypes = VALID_BUILT_FOR_TYPES[industry];
    if (!validTypes || !validTypes.includes(builtForType)) {
      return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The Built-For page you're looking for doesn't exist.</p>
          <a
            href={`/industries/${industry}`}
            className="px-6 py-3 bg-[#00AA72] text-white rounded-lg hover:bg-[#1a3a54] transition-colors"
          >
            Go Back to {industry.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
          </a>
        </div>
      );
    }
  }


  const getNavbar = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <BNFNav />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AINavbar />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRNavbar />;
    if (pathname.startsWith("/industries/high-tech")) return <HighTechNavbar />;
    return null;
  };


  // const getFooter = () => {
  //   if (pathname.startsWith("/industries/banking-and-finance")) return <NewOneFooter />;
  //   if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRFooter />;
  //   if (pathname.startsWith("/industries/high-tech")) return <FooterHT />;
  //   if (pathname.startsWith("/industries/cloud-finops-ai")) return <AIFooter />;
  //   return null;
  // };

  const getInsightandThoughts = () => {
    // Determine dynamic content for Banking & Finance using the specialized component
    // if (industry === "banking-and-finance" && builtForType) {
    //   return <InsightThoughtBnF />;
    // }

    // if (pathname.startsWith("/industries/banking-and-finance")) return <InsightThought />;
    // if (pathname.startsWith("/industries/ehr-and-pms")) return <BlogCarousel />;
    if (pathname.startsWith("/industries/high-tech")) return <InsightThought />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AIBlogs />;
    return null;
  };

  const getContactForm = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <div id="contact-us"><ContactUS /></div>;
    if (pathname.startsWith("/industries/high-tech")) return <ContactSecHT />;
    return null;
  };

  return (
    <div>
      {/* Navbar */}
      {getNavbar()}
      <div id="landingpage">
        <TitleSectionSwitcher />
      </div>

      <TextSec />
      <EHRNew/>
      {/* <Cardcase /> */}
      <BuiltForIntro />

      <GradientCardsSection />
      <SplitFeature />
      {/* {industry === "banking-and-finance" ? <BnfImg /> : <ImgSec />} */}

      {getInsightandThoughts()}
      {getContactForm()}
      {/* {getFooter()} */}
    </div>
  );
};
