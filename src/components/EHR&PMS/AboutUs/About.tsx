 
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import GridSecClinic from "../ClinicApp/GridSecClinic"
import EHRNavbar from "../Navbar/EHRNavbar"
import Brief from "./Brief"
import Counter from "../EHRNurse/Counter"
import Headquarters from "./Headquaters"
import HeroSection from "./HeroSection"
import OurWork from "../Admin/OurWork"
 
 

const About = () => {
  return (
    <div className="relative">
      <EHRNavbar />
      
      
   

      <HeroSection />
      <Brief />
      <Counter />
      <OurWork />
      <GridSecClinic/>
      <Headquarters />
      <EHRFooter />
    </div>
  );
};


export default About
