// import FaqSection from "../../Banking&Finance/ProductKYC/FAQ"
import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import AINavbar from "../Navbar/AINavbar"
import BenefitsSection from "./BenefitsSection"
import Careers from "./Careers"
import ExperienceSection from "./ExperienceSection"
import GreenSection from "./GreenSection"
import JobListSection from "./JobListSection"
import TeamSection from "./TeamSection"

export const CareersPageAI = () => {
  return (
    <div>
      <AINavbar />
      <Careers />
      <GreenSection />
      <BenefitsSection />
      <ExperienceSection />
     
      
      <JobListSection />
       <TeamSection />
       {/* <FaqSection/> */}
   
      <AIFooter/>
    </div>
  )
}
