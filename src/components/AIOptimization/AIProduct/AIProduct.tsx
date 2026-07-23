// NO LAZY LOADING - All components load immediately for consistent scroll restoration
import { memo, Suspense, lazy, } from 'react';
 
import DeferredLoader from "../../Global/DeferredLoader";
// import HWD from "../../Banking&Finance/HWD";
// import FaqSection from "../../Banking&Finance/ProductKYC/FAQ";
// import HeroCombined from './HeroComp/HeroCombined';
 
// import HeroCombined from './HeroComp/HeroCombined';
import CloudDietHero from './CloudHero';
// import AccordionImageGrid from './AccordionImageGrid';
import ProcessSteps from './ProcessSteps';
// import CloudDietOptimizationSection from './CloudDietOptimizationSection';
// import WasteOptimizationHero from './WasteOptimizationHero';
// import CloudHero from './CloudHero';
// import BloomHero from './BloomHero';
// import BloomHero2 from './BloomHero2';
// Lazy load middle components
const CTA = lazy(() => import("./CTA"));
const Onboarding = lazy(() => import('./Onboarding'));
const Firm = lazy(() => import('./Firm'));
const ImageGrid = lazy(() => import('../HomePageAI/ImageGrid'));
const FeatureCards = lazy(() => import("../HomePageAI/Features"));

// Simple deferred render hook - delays rendering to keep critical path clear
// function useDeferredRender(delay: number) {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     const t = setTimeout(() => setShow(true), delay);
//     return () => clearTimeout(t);
//   }, [delay]);
//   return show;
// }


const AIProduct = () => {
  // const showHWD = useDeferredRender(3000);
  // const showFAQ = useDeferredRender(4000);

  return (
    <div className="relative font-quadran   font-semibold">
      <div id='landingpage'>
        <CloudDietHero  />
        {/* <CloudDietOptimizationSection/> */}
        {/* <WasteOptimizationHero/> */}
        {/* <HeroCombined /> */}
        {/* <BloomHero2/>
        <BloomHero/> */}
        
      </div>

      <Suspense fallback={null}>
        
        <Onboarding />
        <CTA />
        <Firm />
        <ImageGrid />
        {/* <AccordionImageGrid/> */}
        <FeatureCards />
        
        {/* <CostOptimization /> */}
        {/* <Timeline /> */}
      </Suspense>

      {/* Defer loading of lower sections to clear critical path latency and reduce TBT */}
      <DeferredLoader
        loader={() => import("./CostOptimization")}
        delay={1500}
      />
      <ProcessSteps/>
      
      <DeferredLoader
        loader={() => import("../HomePageAI/Timeline")}
        delay={2500}
      />
      {/* HWD and FAQ are statically imported (used in 12+ files), so use deferred render instead */}
      {/* {showHWD && <HWD />} */}
      <DeferredLoader
        loader={() => import('./UseCases')}
        delay={3500}
      />
      {/* {showFAQ && <FaqSection />} */}
      {/* <DeferredLoader
        loader={() => import("../../HomePage/AIOptimization/AIBlogs")}
        delay={4500}
      /> */}
    </div>
  );
};

export default memo(AIProduct);