// import LandingPage1 from "./LandingPage1"
// import CircularCards from "./CircularCards"
// import Navbar from "../../Global/Navbar/Navbar"
import { Suspense, } from "react";
// import PageLoader from "../../PageLoader"
// import LandingPage1 from "./LandingPage1"
// import Map from "./Map"
import SlideReveal from "../../SlideReveal"
import AnimatedFooter from "../../AnimatedFooter"
import LogoMarquee from "./LogoMarquee"
// import LifeCycleTech from "./LifeCycleTech"
import GoalsSection from "./GoalsSection"
import InnovationCards from "./InnovationCards"
import Centric from "./Centric"
import ImgSec from "./ImgSec"
import RotatingGlobe from "./RotatingGlobe"
// import CircularCards from "./CircularCards";
import ElephantQueen from "./ElephantQueen";
// import NewLanding from "./NewLanding";
// import NewLanding from "./NewLanding";
// import ElephantQueen from "./ElephantQueen";
// import Navbar from "../../Global/Navbar/Navbar";
// import MainHero from "./MainHero";
// import MainHero from "./MainHero";
// import NewLanding from "./NewLanding";
import Rocket from "./Rocket";
import ThreeTurns from "./ThreeTurns";
 

const GlobalLandingPage = () => {
//     const [loading, setLoading] = useState(true);
    

//      const handleLoaderComplete = useCallback(() => {
//     setLoading(false);
//   }, []);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setLoading(false);
//   }, 3200); 
//   return () => clearTimeout(timer);
// }, []);

    return (
        <div className="relative">
{/* <PageLoader onComplete={handleLoaderComplete} />  */}

            {/* {loading && <PageLoader onComplete={handleLoaderComplete} />} */}
            {/* <MainHero/> */}
            {/* <NewLanding/> */}

            <ElephantQueen />

            {/* Sections below scroll over the ElephantQueen panel */}
            <div className="relative" style={{ zIndex: 10, background: '' }}>
                {/* <CircularCards /> */}
                {/* <div id="landingpage">
                <LandingPage1 />
            </div> */}
            <LogoMarquee/>
            <Rocket/>
            <ThreeTurns/>
                <GoalsSection/>
                <InnovationCards/>
                <Centric/>
            <Suspense fallback={null}>
                {/* <div className="gpu-optimized">
                    <AnimatedStatement />
                </div> */}
                    {/* <div id="futuresection" className="gpu-optimized">
                    <FutureSection />
                </div> */}
                    {/* <div id="innovationcards" className="gpu-optimized">
                    <InnovationCards />
                </div> */}
                    <div>
                        <SlideReveal />
                    </div>
                    {/* <div id="map" className="gpu-optimized">
                    <Map />
                </div> */}

                    <div className="gpu-optimized">
                        <RotatingGlobe />
                    </div>

                    {/* <div id="businessvaluessection" className="gpu-optimized">
                    <BusinessValuesSection />
                </div> */}

                    {/* <div className="gpu-optimized">
                    <Milestone />
                </div> */}

                    {/* <div className="sticky top-0  h-[60vh] xl:h-screen z-0">
                    <CEO />
                </div> */}

                    {/* <div className="relative z-10 gpu-optimized">
                    <LifeCycleTech />
                </div> */}

                    {/* <div className="gpu-optimized">
                    <Counter />
                </div> */}
                    {/* <div id="calltoaction" className="gpu-optimized">
                    <CallToAction />
                </div> */}

                    {/* <div id="FlowingMenu" className="hidden xl:block gpu-optimized">
                    <FlowingMenu />
                </div> */}

                    <div id="footer" className="gpu-optimized">
                        {/* <NewFooter /> */}
                        <ImgSec />
                        <AnimatedFooter />
                    </div>
                </Suspense>
            </div>
            {/* ✅ LOADER OVERLAY */}

        </div>
    )
}

export default GlobalLandingPage;
