import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import Overview from "../../HomePage/EHR&PMS/Overview"
import FeatureHighlights from "../EHRNurse/FeatureHighlights"
import InformationGrid from "../EHRNurse/InformationGrid"
import EHRNavbar from "../Navbar/EHRNavbar"
import FeatureCards from "./FeatureCards"
import HeroSec from "./HeroSec"
// import { Image } from "./Image"
import ImageWithCards from "./ImageWithCards"
import InfoWithImage from "./InfoWithImage"
import NewSection from "./NewSection"
import Pillar from "./Pillar"

export const EHRReceptionist = () => {
  return (
    <div>
        <EHRNavbar/>
        <HeroSec/>
        <Overview/>
        <FeatureCards/>
        <NewSection/>
        <InfoWithImage/>
        <InformationGrid/>
        {/* <Image/> */}
        <ImageWithCards/>
        <Pillar/>
        <FeatureHighlights/>
        <EHRFooter/>

        
    </div>
  )
}
