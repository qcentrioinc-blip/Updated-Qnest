import CareersSec from "./CareersSec"
import CounterSec from "./CounterSec"
import DemoSec from "./DemoSec"
import JobListing from "./JobListing"
import KeyBenefits from "./KeyBenefits"
import TitleSec from "./TitleSec"
import TwoCardBlock from "./TwoCardBlock"
// import SubFooter from "./SubFooter"
import HighTechNavbar from "../Navbar/HighTechNavbar"
import ContactSecHT from "../ContactSecHT"
import FooterHT from "../FooterHT"
 

const CareersPage = () => {
  return (
    <>
    <HighTechNavbar/>
    <TitleSec/>
    <CareersSec/>
    <TwoCardBlock/>
    <JobListing/>
    <CounterSec/>
    <KeyBenefits/>
    <DemoSec/>
    {/* <SubFooter/>    */}
    <ContactSecHT/>
    <FooterHT/>

    </>
  )
}

export default CareersPage