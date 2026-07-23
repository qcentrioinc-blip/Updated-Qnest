import TitleSec from "./TitleSec"
import ContactSection from "./ContactSection"
// import FeaturePoint from "../Admin/FeaturePoint"
import JobCard from "./JobCard"
// import FeatureBlock from "../Admin/FeatureBlock"
import CareerCallToAction from "./CareerCTA"
import HandSection from "./HandSection"
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import EHRNavbar from "../Navbar/EHRNavbar"


const CareersPage = () => (
  <div>
    <EHRNavbar/>
    <TitleSec/>
    <ContactSection/>
    <HandSection/>
    {/* <FeatureBlock/> */}
    <JobCard/>
    <CareerCallToAction/>
    {/* <FeaturePoint/> */}
    <EHRFooter/>

    
  </div>
)
export default CareersPage