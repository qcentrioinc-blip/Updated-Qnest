import Tabs from "./Tabs";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
// import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import Cards from "./Cards";
import GridLayout from "./GridLayout";
import FeatureGrid from "./FeatureGrid";
import HWD from "../HWD";
import InsightThought from "../InsightThought";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
// import NewFooter from "../Products2/NewFooter";

// import { ScrollProvider } from "../../../context/ScrollContext"; // Import ScrollProvider
// import FeatureGrid2 from "./FeatureGrid2";

import BNFNav from "../Navbar/BNFnav";
import NewOneFooter from "../ProductRemitree/NewOneFooter";

import ContactUS from "../ProductRemitree/ContactUS";
import LongCard from "./LongCard";
import CosLanding from "./CosLanding";

const Cos_Page = () => {
  const location = useLocation();
  const lenis = useContext(ScrollContext);

  useEffect(() => {
    if (location.hash === '#contact-us') {
      setTimeout(() => {
        if (lenis) {
          lenis.scrollTo('#contact-us', { offset: 0, duration: 1.5 });
        } else {
          const element = document.getElementById('contact-us');
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, lenis]);

  return (
    <div>
      <BNFNav />
      {/* <HeroSection /> */}
      <CosLanding />
      <HeroBottomNavbar />
      <StatsSection />
      <Cards />
      <Tabs />
      <GridLayout />
      <LongCard />
      <FeatureGrid />
      {/* <FeatureGrid2/> */}
      <HWD />
      <InsightThought />
      <div className="relative">

        <div className="hidden lg:block lg:h-[200vh]"></div>

        <div
          id="contact-us"
          className="lg:absolute lg:inset-0 z-40 lg:pointer-events-none"
        >
          <ContactUS />
        </div>

        <div className="lg:sticky lg:bottom-0 lg:inset-0 z-30">
          <NewOneFooter />
        </div>

      </div>

    </div>
  );
}

export default Cos_Page;