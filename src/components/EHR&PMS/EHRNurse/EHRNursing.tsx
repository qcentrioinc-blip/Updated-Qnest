import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import InfoWithImage from "../EHRReceptionist/InfoWithImage"
 
import EHRNavbar from "../Navbar/EHRNavbar"
import Counter from "./Counter"
// import FeatureHighlights from "./FeatureHighlights"
import HeroSec from "./HeroSec"
// import InformationGrid from "./InformationGrid"
// import MedicalFeature from "./MedicalFeature"

export const EHRNursing = () => {
  return (
    <div>
        <EHRNavbar />
        <HeroSec/>
        {/* <Pillar/> */}
       <InfoWithImage/>
        {/* <FeatureHighlights/>
        <MedicalFeature /> */}
        {/* <InformationGrid/> */}
        {/* <ImageShowcaseSection/> */}
        <Counter/>
        <EHRFooter/>
    </div>
  )
}
