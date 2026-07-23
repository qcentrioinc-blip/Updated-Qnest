import TitlePage from "./TitlePage";
import ProductCards from "./ProductCards";
// import FeatureGrid from "../../Banking&Finance/ProductDetails(COS)/FeatureGrid";
// import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
// import Counter from "../../HomePage/GlobalLandingPage/Counter";

// import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
// import FeatureSection from "./FeatureSection";
// import InfoCards from "./InfoCards";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
// import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter";
// import FooterHT from "../../HighTech/FooterHT";
// import AIFooter from "../../HomePage/AIOptimization/AIFooter";

import BNFNav from "../../Banking&Finance/Navbar/BNFnav";
import EHRNavbar from "../../EHR&PMS/Navbar/EHRNavbar";
import HighTechNavbar from "../../HighTech/Navbar/HighTechNavbar";
import AINavbar from "../../AIOptimization/Navbar/AINavbar";
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
// import NewFooter from "../NewFooter/NewFooter";

const MarketPage = () => {
  const { pathname } = useLocation();

  const getNavbar = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <BNFNav />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRNavbar />;
    if (pathname.startsWith("/industries/high-tech")) return <HighTechNavbar />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AINavbar />;
    return <Navbar />;
  };

  /* -------------------------------
      FOOTER SWITCHER
   -------------------------------- */
  // const getFooter = () => {
  //   if (pathname.startsWith("/industries/banking-and-finance")) return <NewOneFooter />;
  //   if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRFooter />;
  //   if (pathname.startsWith("/industries/high-tech")) return <FooterHT />;
  //   if (pathname.startsWith("/industries/cloud-finops-ai")) return <AIFooter />;
  //   return <NewFooter />;
  // }
  return (
    <div>
      {getNavbar()}
      <TitlePage />
      <ProductCards />
      {/* <FeatureSection /> */}
      {/* <FeatureGrid /> */}
      {/* <InfoCards />
      <Counter /> */}
      {/* <div className="relative">

        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter />
        </div>


        <div
          className="absolute inset-0 z-40 pointer-events-none"

        >
          <ContactUS />
        </div>

      </div> */}
      {/* Footer */}
      {/* {getFooter()} */}

       <div id="contact-us">
        {/* DESKTOP */}
        <div className="hidden lg:block relative">
          <ContactUS />
          <NewOneFooter />
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <ContactUS />
          <NewOneFooter />
        </div>
      </div>
    </div>
  );
}

export default MarketPage;