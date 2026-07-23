import HeroSection from "./HeroSection";
import Overview from "./Overview";
import HighLights from "./HighLights";
import Process from "../Process";
import ContactUS from "../ProductRemitree/ContactUS";
 
// import Counter from "../../HomePage/LandingPages/Counter";
import Counter from "../../HomePage/GlobalLandingPage/Counter";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import ScrollingCards from "./ScrollingCards";
import PartnershipsSection from "./PartnershipsSection";
// import Capabilities from "../ProductBankfair/Capabilities";

const AboutUsPage = () => {
  return (
    <>
    <HeroSection />
    <Overview />
    <HighLights />
    <ScrollingCards />
    <PartnershipsSection/>
    {/* <Capabilities /> */}
    <Process />
    <Counter />
     <div className="relative">
      
      <div className=" lg:h-[200vh]"></div>
     
     
       
        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter/>
        </div>
 
         
        <div
          className="absolute inset-0 z-40 pointer-events-none"
         
        >
          <ContactUS/>
        </div>
 
      </div>
    </>
  )
}
export default AboutUsPage;