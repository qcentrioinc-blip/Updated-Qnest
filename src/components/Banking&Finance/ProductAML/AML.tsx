import Description from "./Description"
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import HeroSection from "./HeroSection"
import Testimonial from "./Testimonial"
import Banks from "./Banks"
import HWD from "../HWD"

// import FaqSection from "../ProductKYC/FAQ"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import BNFNav from "../Navbar/BNFnav"
// import ContactSection from "../ProductBankfair/ContactSection"
import ContactUS from "../ProductRemitree/ContactUS"
import DetailCards from "./DeatilCards";
import Cards from "./Cards";
import ImageCard from "../BNFBlogs/ImageCard";
import Highlights from "./Highlights";
import ProcessALM from "./ProcessALM";



const AML = () => {
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
      <HeroSection />
      <Testimonial />
      <Description />
      <Banks />
      <DetailCards/>
      <ProcessALM/>
      <Cards/>
      <Highlights/>
      <HWD />

      {/* <FaqSection />   */}
      <ImageCard />
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
  )
}

export default AML
