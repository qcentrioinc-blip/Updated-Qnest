import ImageCard from "../BNFBlogs/ImageCard"
import HWD from "../HWD"
import BNFNav from "../Navbar/BNFnav"
// import FaqSection from "../ProductKYC/FAQ"
import HeroBottomNavbar from "../ProductPago/HeroBottomNav"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import CardInfo from "./CardInfo"
import ContentInfo from "./ContentInfo"
import DataSection from "./DataSection"
import Feature from "./Features"
import FeatureSection from "./FeatureSection"
import Grid from "./Grid"
import HeroSec from "./HeroSec"
import ImgSec1 from "./ImgSec1"
import Process from "./Process"
import ThreeCards from "./ThreeCards"

const Sherlock = () => {
  return (
    <div>
      <BNFNav/>
      <HeroSec/>
      <HeroBottomNavbar/>
      <div id="overview"><ThreeCards/></div>
      <div id="benefits">
      <Feature/>
      <ContentInfo/>
      <CardInfo/>
      </div>
      <div id="process">
        <ImgSec1/>
      <Grid/>
      <DataSection/>
      <FeatureSection/>
      <Process/>
      </div>
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

export default Sherlock
