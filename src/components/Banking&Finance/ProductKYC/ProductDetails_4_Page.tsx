import HWD from "../HWD";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import TitleSec from "./TitleSec";
import CardsSection from "./CardsSection";
import Features from "./Features";
import ContentInfo from "./ContentInfo";
// import Grid from "./Grid";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
import BNFNav from "../Navbar/BNFnav";
import ContactUS from "../ProductRemitree/ContactUS";
// import FaqSection from "./FAQ";
import NewsLetter from "../ProductRemitree/NewsLetter";
import CoreCapabilities from "./CoreCapabilities";
import CircleSec from "./CircleSec";
import ChallengesSection from "./ChallengesSection";
import ImageCard from "../BNFBlogs/ImageCard";


const ProductDetails_4_page = () => {
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
      <TitleSec />
      <HeroBottomNavbar />

      <div id="overview">
        <CardsSection />
        <CoreCapabilities/>
      </div>
      <div id="benefits"> <Features /></div>
      <ChallengesSection/>
      <div id="process"><ContentInfo /></div>

      

      {/* <Grid /> */}
      <CircleSec/>
      <NewsLetter/>
      <div id="usecases">
        <HWD />
      </div>
      <div id="faq">
        {/* <FaqSection /> */}
      </div>
      <ImageCard/>
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

export default ProductDetails_4_page