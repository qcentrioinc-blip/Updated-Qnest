import TitleSec from './TitleSec'
import StepsSec from './StepsSec.tsx'
import ProductSec from './ProductSec.tsx'
import CardsSec from './CardSec.tsx'
import Highlights from './Highlights.tsx'
import FeatureCards from './FeatureCards.tsx'
import HWD from '../../Banking&Finance/HWD.tsx'
// import SubFooter from '../Careers/SubFooter.tsx'
// import FaqSection from '../../Banking&Finance/ProductKYC/FAQ.tsx'
// import CTA from '../AboutHightTech/CTA.tsx'
import HighTechNavbar from '../Navbar/HighTechNavbar.tsx'
import ContactSecHT from '../ContactSecHT.tsx'
import FooterHT from '../FooterHT.tsx'




const PDPage = () => {
  return (
    <>
      <HighTechNavbar />
      <TitleSec />
      {/* <CTA /> */}
      <StepsSec />
      <ProductSec />
      <CardsSec />
      <Highlights />
      <FeatureCards />
      <HWD />
      {/* <FaqSection /> */}
      {/* <SubFooter /> */}
      <ContactSecHT/>
      <FooterHT/>

    </>

  )
}
export default PDPage;
