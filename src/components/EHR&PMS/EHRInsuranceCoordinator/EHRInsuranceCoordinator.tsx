import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import Overview from "../../HomePage/EHR&PMS/Overview"
import FeaturePoint from "../Admin/FeaturePoint"
import FeatureHighlights from "../EHRNurse/FeatureHighlights"
import InformationGrid from "../EHRNurse/InformationGrid"
 
import EHRNavbar from "../Navbar/EHRNavbar"
import Benefits from "./Benefits"
import FeatureGrid from "./FeatureGrid"
 

import HeroSec from "./HeroSec"
import Keywords from "./Keywords"
// import PointsSec from "./PointsSec"

export const EHRInsuranceCoordinator = () => {
  return (
    <div>
        <EHRNavbar />
        <HeroSec />
        <FeatureHighlights />
        <Benefits />
        {/* <FeatureShowcase /> */}
        
        {/* <PointsSec/> */}
      <FeatureGrid/>
      <Keywords/>
      <Overview/>
      <InformationGrid/>
       <FeaturePoint role="insuranceCoordinator" />

        {/* <FeaturePointInsuranceCoordinator /> */}
        <EHRFooter />
    </div>
  )
}
 