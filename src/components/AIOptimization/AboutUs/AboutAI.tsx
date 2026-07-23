import AINavbar from "../Navbar/AINavbar"
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs"
import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import CTA from "./CTA"
import CTAImage from "./CTAImage"
import HeroSection from "./HeroSection"
import ImageGrid from "./ImageGrid"
import Intro from "./Intro"
import Solutions from "./Solutions"

 

const AboutAI = () => {
  return (
    <div>
      <AINavbar/>
  <HeroSection/>
  <Intro/>
  <Solutions/>
  <ImageGrid/>
  <CTA/>
  <CTAImage/>
  <AIBlogs/>
  <AIFooter/>
    </div>
  )
}

export default AboutAI
