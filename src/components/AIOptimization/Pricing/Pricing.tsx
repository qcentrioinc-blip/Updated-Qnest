// import AIFooter from "../../HomePage/AIOptimization/AIFooter";
import HeroSection from "../AboutUs/HeroSection";
import Intro from "../AboutUs/Intro";
import AINavbar from "../Navbar/AINavbar";
import ComparePrice from "./ComparePrice";

const Pricing = () => {
    return (
        <div>
            <AINavbar/>
            <div id="landingpage">
              <HeroSection />   
            </div>
            <ComparePrice />
            <Intro/>
            {/* <AIFooter /> */}
        </div>
    );
};

export default Pricing;
