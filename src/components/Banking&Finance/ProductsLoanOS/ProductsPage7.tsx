import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import BNFNav from "../Navbar/BNFnav"
import HWD from "../HWD"
 
import AboutFeaturesSection from "../ProductDetailsSAMS/Feature"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
// import FaqSection from "../ProductKYC/FAQ"
import FirstPage from "./FirstPage"
import Harper from "./Harper"
import SecondSection from "./SecondSection"
import ThreeCards from "./ThreeCards"
import { ScrollContext } from "../../../context/ScrollContext"
import ImageCard from "../BNFBlogs/ImageCard"
import Cards from "./Cards"
import CTABanner from "./CTABanner"
// import FaqSection from "../ProductKYC/FAQ"
import Layout from "./Layout"
import Automate from "./Automate"
import Transform from "./Transform"
import MFI from "./MFI"

const ProductsPage7 = () => {
  const scrollableContainerRef = useContext(ScrollContext);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-us') {
      setTimeout(() => {
        if (scrollableContainerRef) {
          scrollableContainerRef.scrollTo('#contact-us', { offset: 0, duration: 1.5 });
        } else {
          const element = document.getElementById('contact-us');
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, scrollableContainerRef]);

  useEffect(() => {
    if (scrollableContainerRef) {
      scrollableContainerRef.scrollTo(0, {
        offset: 0,
        immediate: false,
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [scrollableContainerRef]);

  return (
    <div>
      <BNFNav />
      <FirstPage />
      <SecondSection />
      <ThreeCards />
      <AboutFeaturesSection />
      <Harper />
      <Cards/>
      <CTABanner/>
    
      <Layout/>
        <Automate/>
        <Transform/>
        <MFI/>
      <HWD />
      {/* <FaqSection/> */}
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
    </div>
  )
}

export default ProductsPage7
