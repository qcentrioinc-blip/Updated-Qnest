"use client";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";

import HWD from "../HWD"
import CTA from "./CTA"
import HeroSection from "./HeroSection"
import ImageGrid from "./ImageGrid"
import Workflow from "./Workflow"
import Cards from "./Cards"
// import PagoNavbar from "./PagoNavbar"
 
import ContactUS from "../ProductRemitree/ContactUS"

import BNFNav from "../Navbar/BNFnav"
import NewOneFooter from "../ProductRemitree/NewOneFooter";
// import HeroBottomNavbar from "./HeroBottomNav";
import ImageCard from "../BNFBlogs/ImageCard";
import CTABanner from "./CTABanner";
import Testimonial from "./Testimonial";
import ImageChange from "./ImageChange";
// import FaqSection from "../ProductKYC/FAQ";
import Steps from "./Steps";
 ;
import AccordionPago from "./AccordionPago";
import Cardsfive from "./Cardsfive";
// import Acco from "./Acco";
 

const ProductDetailthree = () => {
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
   
  <div className="bg-white dark:bg-gray-950  dark:text-white transition-colors duration-300">


      <BNFNav />

      <HeroSection />

      {/* <HeroBottomNavbar /> */}


      <div id="overview">
        <CTA />
      </div>
      

      <div id="process">
        <Workflow />
      </div>
<div id="benefits" >
        <Cards />
      </div>

      <div >
        <ImageGrid />
      </div>
      <Testimonial/>
      <ImageChange/>
      {/* <Acco/> */}
<CTABanner/>
<Steps/>
 <Cardsfive/>
<AccordionPago/>
      <div id="usecases">
        <HWD />
      </div>
      <div id="faq">
        {/* <FaqSection /> */}
      </div>
     
<div id="blogs">
  <ImageCard/>
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
};

export default ProductDetailthree;
