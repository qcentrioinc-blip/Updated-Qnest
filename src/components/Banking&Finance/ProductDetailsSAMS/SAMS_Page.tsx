import HWD from "../HWD";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
// import FaqSection from "../ProductKYC/FAQ";
import Cards from "./Cards";
import Feature from "./Feature";
// import HeroSection from "./HeroSection";
// import NewFooter from "../Products2/NewFooter";
// Import ScrollProvider


// import NewFooter from "../Products2/NewFooter";
import BNFNav from "../Navbar/BNFnav";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
// import ContactSection from "../ProductBankfair/ContactSection";
import ContactUS from "../ProductRemitree/ContactUS";
import LandingSams from "./LandingSams";
import BlueBox from "./BlueBox";
import ThreeTab1 from "./ThreeTab1";
// import FaqSection from "../ProductKYC/FAQ";
import ImageCard from "../BNFBlogs/ImageCard";
import SamsFive from "./SamsFive";
import SamsCube from "./SamsCube";
import SamsCompare from "./SamsCompare";
import SamsSeven from "./SamsSeven";

const Sams_Page = () => {
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
      <LandingSams />
      <Feature />
      <ThreeTab1 />
      <Cards />
      <BlueBox />
      <SamsCube />
      <SamsFive />
      <SamsCompare />
      <SamsSeven />
      <HWD />

      {/* <FaqSection /> */}
      {/* <FaqSection /> */}
      <div id="blogs">
        <ImageCard />
      </div>


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

export default Sams_Page;
