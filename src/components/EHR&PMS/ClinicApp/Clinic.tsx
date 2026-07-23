 
import HWD from "../../Banking&Finance/HWD"
// import FaqSection from "../../Banking&Finance/ProductKYC/FAQ"
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import EHRNavbar from "../Navbar/EHRNavbar"
import Advantage from "./Advantage"
import Benefits from "../Admin/Benefits"
import HeroSection from "./HeroSection"

import Testimonial from "../../HomePage/EHR&PMS/TestimonialEHR"
import GridSecClinic from "./GridSecClinic"



const Clinic = () => {
  return (
    <div className="relative overflow-x-hidden">
      <EHRNavbar />
      <HeroSection />
      <Testimonial />
      <Benefits />

       
      {/* <div className="relative">
         <img
          src="/ClinicApp/GreenCircle.png"
          alt="Decoration"
          className="
            absolute
            top-[750px]
            right-0
            w-[200px] md:w-[300px]
            z-10
            pointer-events-none
          "
        /> */}

        <Advantage />

        {/* ✅ FLOATING IMAGE */}
       <GridSecClinic/>
        <HWD />
      {/* </div> */}

      {/* <FaqSection /> */}
      <EHRFooter />
    </div>
  );
};

export default Clinic
