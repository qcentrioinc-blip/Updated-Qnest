import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
import HeroSection from "./HeroSection"
import Overview from "./Overview"
import UploadResume from "./UploadResume"

 
const JobDescription = () => {
  return (
    <div>
      <HeroSection/>
      <Overview/>
      <UploadResume/>
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
    </div>
  )
}

export default JobDescription
