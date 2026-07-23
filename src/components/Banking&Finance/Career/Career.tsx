
// import ContactUS from "../Banking&Finance/Products2/ContactUS"
// import NewFooter from "../Banking&Finance/Products2/NewFooter"
// import Counter from "../HomePage/LandingPages/Counter"
import BNFNav from "../Navbar/BNFnav"
import ContactUS from "../ProductRemitree/ContactUS"

import Counter from "../../HomePage/GlobalLandingPage/Counter"


import Banner from "./Banner"
import HeroSection from "./HeroSection"
import Openings from "./Openings"
import Testimonial from "./Testimonial"
import NewOneFooter from "../ProductRemitree/NewOneFooter"

const Career = () => {
  return (
    <div className="overflow-x-hidden">
      <BNFNav />
      <HeroSection />
      <Testimonial />
      <Banner />
      <Openings />
      <Counter />
      <div className="relative">

        <div className=" lg:h-[100vh]"></div>



        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter />
        </div>


        <div
          className="absolute inset-0 z-40 pointer-events-none"

        >
          <ContactUS />
        </div>

      </div>

    </div>
  )
}

export default Career

