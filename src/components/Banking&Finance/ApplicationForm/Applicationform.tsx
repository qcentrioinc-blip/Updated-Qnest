import HeroSection from "../BNFContact/HeroSection"
import BNFNav from "../Navbar/BNFnav"
import ContactUS from "../ProductRemitree/ContactUS"

import NewOneFooter from "../ProductRemitree/NewOneFooter"


const Applicationform = () => {
  return (
    <div>
      <BNFNav />
      <HeroSection
        bgColor="#E5F0FF"
      />
      <div className="relative">

        <div className=" lg:h-[200vh]"></div>



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

export default Applicationform
