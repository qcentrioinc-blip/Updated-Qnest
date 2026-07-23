// import StickyBackgroundLayout from "./StickyBackgroundLayout";
import LandingPageEHS from "./LandingPageEHS";
// import { Logos } from "./Logos";
// import StatsSectionEHR from "./StatsSectionEHR";
// import CTASection from "./CTASection";
import WhyQnest from "./WhyQnest";
// import GridSection from "./GridSection";
// import ShortDesc from "./ShortDesc";
// import SplitSection from "./SplitSection";
// import BlogCarousel from "./BlogCarousel";
// import UserProfile from "./UserProfile";
import EHRFooter from "./EHRFooter";
// import UnifiedFeatureSection from "./UnifiedFeatureSection";
// import Stroke from "../../EHR&PMS/AboutUs/Stroke";

 
import HWD from "../../Banking&Finance/HWD";
// import FaqSection from "../../Banking&Finance/ProductKYC/FAQ";
import Managment from "./Managment";
import HeroSplitMasked from "./HeroSplitMasked";
import Overview from "./Overview";
import WhyUnifiedHealth from "./WhyUnifiedHealth";
import CTAEHRUnifi from "./CTAEHRUnifi";
import PatientJourney from "./PatientJourney";
import TestimonialEHR from "./TestimonialEHR";
 

const HeroSectionEHR = () => {
  return (
<div className="font-quadran   ">

      {/* NO BACKGROUND */}
      <LandingPageEHS />
 <WhyQnest /> 

 <TestimonialEHR/>
<HeroSplitMasked/>
      {/* STICKY BACKGROUND STARTS */}
      {/* <StickyBackgroundLayout image="/EHRandPMS/StickyImg.jpg"> */}

        {/* <Logos /> */}
        
        {/* <StatsSectionEHR /> */}
        {/* <div className="relative">
        <Stroke/>
        <CTASection />
        
       

        </div> */}
        <PatientJourney/>
        <Managment/>
        <Overview/>
        <WhyUnifiedHealth/>
        <CTAEHRUnifi/>
          {/* <UnifiedFeatureSection/> */}

      {/* </StickyBackgroundLayout> */}

      {/* NO BACKGROUND */}
      {/* <BlogCarousel />
      <UserProfile /> */}
      <HWD/>
      {/* <FaqSection/> */}
      <EHRFooter />

    </div>
  );
};

export default HeroSectionEHR;
