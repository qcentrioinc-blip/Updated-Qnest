// import ArrowBuilding from "./ArrowBuilding";
import ContactUS from "./ContactUS";
import FiveCards from "./FiveCards";
// import NewFooter from "./NewFooter";
// import NewsLetter from "./NewsLetter";
import Overview from "./Overview";
// import SecondHeading from "./SecondHeading";
import ThirdCards from "./ThirdCards";
import ThreeTab from "./ThreeTab";
// import { ScrollProvider } from "../../../context/ScrollContext"; 
import NewOneFooter from "./NewOneFooter";
import BNFNav from "../Navbar/BNFnav";
// import TwoPart from "./TwoPart";
import HWD from "../HWD";
// import FaqSection from "../ProductKYC/FAQ";
import HeroBottomNavbar from "../ProductPago/HeroBottomNav";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../../../context/ScrollContext";
import TwoImage from "./TwoImage";
import ThreeCircle from "./ThreeCircle";
import CTARemitree from "./CTARemitree";
import ImageCard from "../BNFBlogs/ImageCard";
import CircleArrow from "./CircleArrow";
import RemitreeCard from "./RemitreeCard";
import Exception from "./Exception";
import Seven from "./Seven";
import Second from "./Second";

const ProductsPage2 = () => {

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
    <>

      {/* <ScrollProvider>  */}
      <BNFNav />


      <Overview />

      <HeroBottomNavbar />
      <Second />
      <div id="benefits">
        <ThreeTab />
      </div>

      <div id="process">
        <FiveCards />
        {/* <TwoPart /> */}
        <CircleArrow />
        <TwoImage />
        <ThreeCircle />
        {/* <ArrowBuilding /> */}
        {/* <div id="process"> <NewsLetter /></div> */}
        <CTARemitree />
        <Exception />
        <RemitreeCard />
        <Seven />
        <div id="overview">
          <ThirdCards />

        </div>
      </div>
      <div id="usecases">
        <HWD />
      </div>
      <div id="faq">
        {/* <FaqSection /> */}
      </div>
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


    </>
    // </ScrollProvider>
  )
}

export default ProductsPage2;
