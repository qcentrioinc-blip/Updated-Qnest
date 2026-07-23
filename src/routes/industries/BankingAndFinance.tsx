// import Audit from "../../components/Banking&Finance/Audit"
import Counter from "../../components/Banking&Finance/Counter"
import HeroSection from "../../components/Banking&Finance/HeroSection"
// import InsightThought from "../../components/Banking&Finance/InsightThought"
import Intro from "../../components/Banking&Finance/Intro"
import Process from "../../components/Banking&Finance/Process"

// import Products from "../../components/Banking&Finance/Products"

import WhatWeDoIn from "../../components/Banking&Finance/WhatWeDoIn"
// import Testimonial from "../../components/HomePage/GlobalLandingPage/Testimonial"
import ContactUS from "../../components/Banking&Finance/ProductRemitree/ContactUS"
import BNFNav from "../../components/Banking&Finance/Navbar/BNFnav"
import NewOneFooter from "../../components/Banking&Finance/ProductRemitree/NewOneFooter"
import AuditAnimation from "../../components/Banking&Finance/AuditAnimation"
// import ContactFooterReveal from "../../components/Banking&Finance/BNFFooter/ContactForm"

import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../context/ScrollContext";
import TwoProducts from "../../components/HomePage/GlobalLandingPage/TwoProducts"
import ImageCard from "../../components/Banking&Finance/BNFBlogs/ImageCard"
// import HeroTitle from "../../components/Banking&Finance/HeroTitle"

const BankingAndFinance = () => {
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

  useEffect(() => {
    const originalStyle = document.body.style.overflowX;
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = originalStyle;
    };
  }, []);

  return (
    <>

      <BNFNav />
   
      <HeroSection />
         {/* <HeroTitle/> */}
      <Intro />
      <TwoProducts />
      {/* <Products /> */}
      <WhatWeDoIn />
      <Counter />
      <AuditAnimation />
      {/* <Audit /> */}
      <Process />
      <ImageCard/>
      {/* <Testimonial /> */}
      {/* <InsightThought /> */}
      {/* <div className="relative">


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

      </div> */}
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
  )
}

export default BankingAndFinance
