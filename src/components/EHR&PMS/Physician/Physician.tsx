import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import Brief from "../AboutUs/Brief"
// import FeatureBlockSec from "../Admin/FeatureBlock"
// import GridSecClinic from "../ClinicApp/GridSecClinic"
import EHRNavbar from "../Navbar/EHRNavbar"
import Accordion from "./Accordion"
import Comparison from "./Comparison"
// import CTAEHR from "./CTAEHR" 
// import { featureblockContent } from "./featureblockContent"
// import FeatureCards from "./FeaturesCard"
import FeaturesEHR from "./FeaturesEHR"
import { featuresEHRContent } from "./featuresEHRContent"
import ImageGridEHR from "./ImageGridEHR"
import Outcomes from "./Outcomes"
import PhysicianHeroSection from "./PhysicianHeroSection"
 
 

const Physician = () => {
  return (
   <>
   <EHRNavbar/>
<PhysicianHeroSection/>
{/* <FeatureBlockSec content={featureblockContent.physician} /> */}
<ImageGridEHR/> 
<FeaturesEHR content={featuresEHRContent.physician} />
<Brief/>
<Accordion/>
<Comparison/>
{/* <GridSecClinic/>
<CTAEHR/> */}
 
<Outcomes/>
{/* <FeatureCards/> */}
<EHRFooter/>

   </>
  )
}

export default Physician
