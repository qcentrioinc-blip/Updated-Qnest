import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import FeatureGridSection from "./FeatureGridSection";
import ImgTextSec from "./ImgTextSec";
import HWD from "../HWD";
// import FaqSection from "../ProductKYC/FAQ";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import BNFNav from "../Navbar/BNFnav";

import ContactUS from "../ProductRemitree/ContactUS";
import StatsSection from "./StatsSection";
import CardsSection from "./CardsSection";
import ContentInfo from "./ContentInfo";
import ImageCard from "../BNFBlogs/ImageCard";
import ImgSec2 from "./ImgSec2";
import ImageWithCards from "./ImageWithCards";
import TechSection from "./TechSection";
import HeroSec from "./HeroSec";
import Roadmap from "./Roadmap";
import Timeline from "./Timeline";

const PDPage9 = () => {
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
    <>
      <BNFNav />
      <HeroSec />
      <FeatureGridSection />
      <StatsSection/>
      <CardsSection/>
      {/* <KeytomStickyScroll/> */}
      <ImgTextSec />
      <ImgSec2/>
      <ContentInfo/>
      <Roadmap/>
      
      <TechSection/>
      
      <Timeline/>
      <ImageWithCards/>
      <HWD />
      {/* <FaqSection /> */}
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

    </>
  );
};

export default PDPage9;
