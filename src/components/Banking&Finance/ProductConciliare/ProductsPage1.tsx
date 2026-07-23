import BNFNav from "../Navbar/BNFnav"

import HWD from "../HWD"
// import InsightThought from "../InsightThought"
// import FaqSection from "../ProductKYC/FAQ"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import Building from "./Building"
// import Capabilities from "./Capabilities"
// import Enterprises from "./Enterprises"
// import FirstProduct from "./FirstProduct"
// import PagoNavbar from "../ProductPago/PagoNavbar"
import HeroBottomNavbar from "../ProductPago/HeroBottomNav"
import Capabilities from "./Capabilities"
import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { ScrollContext } from "../../../context/ScrollContext"
import ConsilierCTA from "./ConsilierCTA"
import ConsilierCard from "./ConsilierCard"
import FourPoints from "./FourPoints"
// import Configurable from "./Configurable"
// import Industry from "./Industry"
import ConsOverview from "./ConsOverview"
import FiveIndustries from "./FiveIndustries"
import Configurable from "./Configurable"
// import ConsOverview from "./ConsOverview"
// import Pricing from "./Pricing"

const ProductsPage1 = () => {
  const scrollableContainerRef = useContext(ScrollContext);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-us') {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (scrollableContainerRef) {
          (scrollableContainerRef as any).scrollTo('#contact-us', { offset: 0, duration: 1.5 });
        } else {
          const element = document.getElementById('contact-us');
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, scrollableContainerRef]);

  useEffect(() => {
    // Scroll the ScrollContext container to top
    if (scrollableContainerRef) {
      (scrollableContainerRef as any).scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Fallback to window scroll if ScrollContext not available
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [scrollableContainerRef]);
  return (
    <div>
      <BNFNav />
      <div id="industry"><FiveIndustries /></div>
      {/* <FirstProduct /> */}
      <HeroBottomNavbar />
      <div id="overview"><Capabilities /></div>
      <div id="benefits"> <Building /></div>
      {/* <div id="overview"><Enterprises /></div> */}
      <div id="consilier"><ConsilierCard /></div>
      <div id="process"><ConsilierCTA /></div>
      {/* <div id="industry"><Industry /></div> */}
      <div id="configurable"><Configurable /></div>
      <div id="four-points"><FourPoints /></div>
      <div id="cons-overview"><ConsOverview /></div>
      {/* <Pricing /> */}
      <div id="usecases"> <HWD /></div>

      {/* <div id="faq"><FaqSection /></div> */}

      {/* <div id="blogs"><InsightThought /></div> */}

      <div id="contact-us">
        <div className="hidden lg:block relative">
          {/* Footer sits at bottom, ContactUS scrolls over it */}
          <div>
            <ContactUS />
          </div>
          <NewOneFooter />
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <ContactUS />
          <NewOneFooter />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage1