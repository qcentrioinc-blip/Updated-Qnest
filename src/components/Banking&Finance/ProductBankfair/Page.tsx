import BNFNav from "../Navbar/BNFnav"
// import ColourBoard from "./ColourBoard"
import ThreeBank from "./ThreeBank"
import HeroBottomNavbar from "../ProductPago/HeroBottomNav"
import GridSec from "./GridSec"
import Features from "./Features"
import Benefits from "./Benefits"
import HWD from "../HWD"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import HeroSec1 from "./HeroSec1"
// import FaqSection from "../ProductKYC/FAQ"
import ImageCard from "../BNFBlogs/ImageCard"
import ImgSec from "./ImgSec"
import SingleCard from "./SingleCard"
import Gain from "./Gain"
import CTAButton from "./CTAButton"
// import CardsSec from "./CardsSec"

const Bankfair = () => {
  return (
    <div className="dark:bg-black  " >
      <BNFNav />
      <div id="Landing">
        <HeroSec1 />
      </div>
      <HeroBottomNavbar />
      <div id="overview"><ThreeBank /></div>
      <div id="benefits">
        <GridSec />
        <ImgSec />
        {/* <ColourBoard/> */}
        <Features/>
        </div>
        <div id="process">
        <Benefits/>
        {/* <CardsSec/> */}
        </div>
        
        <CTAButton/>
        <Gain/>
        <SingleCard />
         <div id="usecases">
        <HWD />
      </div>
      {/* <div id="faq"> <FaqSection /></div> */}
      
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

export default Bankfair
