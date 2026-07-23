import BNFNav from "../../Banking&Finance/Navbar/BNFnav"
// import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS"
// import NewFooter from "../../Banking&Finance/ProductRemitree/NewFooter"
import Testimonial from "../../Banking&Finance/Career/Testimonial"
import Benefits from "./Benefits"
import Cards from "./Cards"
import HeroSection from "./HeroSection"
// import PlatformNavbar from "./PlatformNavbar"
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter"
import HeroBottomNavbar from "../../Banking&Finance/ProductPago/HeroBottomNav"
import InsightThought from "../../Banking&Finance/InsightThought"
import HWD from "../../Banking&Finance/HWD"
import ImageGrid from "./ImageGrid"
import GradientText from "./GradientText"
import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter"
import FooterHT from "../../HighTech/FooterHT"
import AIFooter from "../../HomePage/AIOptimization/AIFooter"
import Footer from "../Footer/Footer"
import { useLocation } from "react-router-dom"
import BlogCarousel from "../../HomePage/EHR&PMS/BlogCarousel"
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs"
import Navbar from "../Navbar/Navbar"
import EHRNavbar from "../../EHR&PMS/Navbar/EHRNavbar"
import HighTechNavbar from "../../HighTech/Navbar/HighTechNavbar"
import AINavbar from "../../AIOptimization/Navbar/AINavbar"

const Platform = () => {
  const { pathname } = useLocation();


  const getNavbar = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <BNFNav />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRNavbar />;
    if (pathname.startsWith("/industries/high-tech")) return <HighTechNavbar />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AINavbar />;
    return <Navbar />;
  };
  /* -------------------------------
      FOOTER SWITCHER
   -------------------------------- */
  const getFooter = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <NewOneFooter />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRFooter />;
    if (pathname.startsWith("/industries/high-tech")) return <FooterHT />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AIFooter />;
    return <Footer />;
  };

  const getInsightandThoughts = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <InsightThought />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <BlogCarousel />;
    if (pathname.startsWith("/industries/high-tech")) return <InsightThought />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AIBlogs />;
    return null;
  };
  return (
    <div>
      {getNavbar()}
      <HeroSection />
      {/* <PlatformNavbar/> */}
      <HeroBottomNavbar />


      <div id="overview">
        <Testimonial />
      </div>


      <section className="bg-[#F6DFA4]">

        <div id="benefits" className="relative z-20">
          <Benefits />
        </div>
        <div id="process" className="relative z-10">
          <Cards />
        </div>
      </section>

      <ImageGrid />

      <GradientText />

      <div id="usecases">
        <HWD />
      </div>
      <div id="insights">
        {getInsightandThoughts()}
      </div>
      {/* Footer */}
      {getFooter()}


    </div>
  )
}

export default Platform;
