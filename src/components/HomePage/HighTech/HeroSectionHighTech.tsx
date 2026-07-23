import LandingPageHighTech from "./LandingPageHighTech"
import ThreeStep from "./ThreeStep"
// import CircleSteps from "./CircleSteps"
import ThreeCards from "./ThreeCards"
import OnePoint from "./OnePoint"
import TextAnimation from "./TextAnimation"
import SmallArticle from "./SmallArticle"
// import SubFooter from "../../HighTech/AboutHightTech/SubFooter"
// import WorkProfile from "../../HighTech/AboutHightTech/WorkProfile"

// import FeatureCards from "./FeatureCards"
// import ProductSec from "./ProductSec"
// import WorkProfile from "./WorkProfile"

// import FlyingPosters from "./RockTech"
import ContactSecHT from "../../HighTech/ContactSecHT"
import FooterHT from "../../HighTech/FooterHT"
import CircleStepsCopy from "./CircleStepsCopy"
import FloatingImage from "./FloatingImages"

// const items = [
//   '/HighTech/HomePage/EngineerGirl.png',
//   '/HighTech/HomePage/Scientist.png',
//   '/HighTech/HomePage/DoctorGirl.png'
// ];


const HeroSectionHighTech = () => {
  return (
    <div>
      <LandingPageHighTech />
      <TextAnimation />
      <ThreeCards />
      {/* <div style={{ height: '900px', position: 'relative' }}> */}
      {/* <FlyingPosters items={items} /> */}
      {/* </div> */}
      {/* <CircleSteps /> */}
      <FloatingImage/>
      <CircleStepsCopy/>
      <OnePoint />
      <SmallArticle />
      <ThreeStep />
      <ContactSecHT/>
      <FooterHT/>
      {/* <SubFooter /> */}
      {/* <WorkProfile /> */}
      {/* <ProductSec /> */}
      {/* <FeatureCards /> */}
    </div>
  )
}

export default HeroSectionHighTech
