import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import { featuresEHRContent } from "../Physician/featuresEHRContent"

import EHRNavbar from "../Navbar/EHRNavbar"
import FeaturesEHR from "../Physician/FeaturesEHR"
// import AdminHeroSection from "./AdminHerosection"
import Benefits from "./Benefits"
// import FeatureBlockSec from "./FeatureBlock"
import FeaturePoint from "./FeaturePoint"
import OurWork from "./OurWork"
// import { featureblockContent } from "../Physician/featureblockContent"
import Overview from "../../HomePage/EHR&PMS/Overview"

const Admin = () => {
  return (
    <div>
        <EHRNavbar/>
      {/* <AdminHeroSection/> */}
      <FeaturesEHR content={featuresEHRContent.admin} />
       <Benefits />
        <FeaturePoint role="admin" />
        <Overview/>

        <OurWork/>
        {/* <FeatureBlockSec content={featureblockContent.admin} /> */}
       <EHRFooter/>
    </div>
  )
}

export default Admin
   