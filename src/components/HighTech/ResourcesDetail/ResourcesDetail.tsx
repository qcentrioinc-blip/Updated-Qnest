"use client"

import ContactSecHT from "../ContactSecHT"
import FooterHT from "../FooterHT"
// import SubFooter from "../AboutHightTech/SubFooter"
import HighTechNavbar from "../Navbar/HighTechNavbar"
import Content from "./Content"
import HeroSection from "./HeroSection"

const ResourcesDetail = () => {
  return (
    <div>
      <HighTechNavbar />
      <HeroSection />
      <Content />
      <ContactSecHT/>
      <FooterHT/>

      {/* <SubFooter /> */}

    </div>
  )
}

export default ResourcesDetail
