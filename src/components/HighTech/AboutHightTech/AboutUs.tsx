import ContactSecHT from "../ContactSecHT"
import FooterHT from "../FooterHT"
import WorkProfile from "./WorkProfile"
import HighTechNavbar from "../Navbar/HighTechNavbar"
// import Banner from "./Banner"
// import BorderCTA from "./BorderCTA"
// import CTA from "./CTA"
import Feature from "./Feature"

import Gallery from "./Gallery"
// import HeroSection from "./HeroSection"
 

const AboutUs = () => {
  return (
    <div>
      <HighTechNavbar />
      <div className="relative  ">
        {/* <HeroSection /> */}
        {/* <CTA /> */}
      </div>

      {/* <Banner /> */}
      
      <WorkProfile />
      {/* <BorderCTA /> */}

      <Gallery />

      <Feature />
      {/* <SubFooter /> */}
      <ContactSecHT/>
      <FooterHT/>




    </div>
  )
}

export default AboutUs
