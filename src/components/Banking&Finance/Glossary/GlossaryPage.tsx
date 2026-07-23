
// import Footer from '../../Footer/Footer';
// import CallToAction from '../../HomePage/LandingPages/CallToAction';
// import Footer from '../../Global/Footer/Footer';
// import CallToAction from '../../HomePage/GlobalLandingPage/CallToAction';
// import AlphabetsSection from './AlphabetsSection';
import HeroSec from './HeroSec';
import AsSec from './AsSec';
import NewOneFooter from '../ProductRemitree/NewOneFooter';

import ContactUS from '../ProductRemitree/ContactUS';
import BNFNav from '../Navbar/BNFnav';
import EHRFooter from '../../HomePage/EHR&PMS/EHRFooter';
import SubFooter from '../../HighTech/AboutHightTech/SubFooter';



// import AlphabetSec from './AlphabetsSection';

interface GlossaryPageProps {
  industry: string;
}

const GlossaryPage = ({ industry }: GlossaryPageProps) => {
  return (
    <>
      <BNFNav />
      <HeroSec />

      <AsSec />
      {/* <AlphabetSec/> */}
      {industry === "finance" && (
        <>
          <div id="contact-us">
        {/* DESKTOP */}
        <div className="hidden lg:block relative">
          <ContactUS />
          <NewOneFooter />
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <ContactUS />
          <NewOneFooter />
        </div>
      </div>
        </>
      )}

      {industry === "ehrpms" && <EHRFooter />}
      {industry === "hightech" && <SubFooter />}


      {/* <NewOneFooter/> */}


    </>
  );
};

export default GlossaryPage;
