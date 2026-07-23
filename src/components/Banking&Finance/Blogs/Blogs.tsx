import BNFNav from "../Navbar/BNFnav"
// import ContactSection from "../ProductBankfair/ContactSection"
import ContactUS from "../ProductRemitree/ContactUS"
import NewOneFooter from "../ProductRemitree/NewOneFooter"
// import BlogGridSection from "./BlogsGridSection"
// import ContactSection from "../Products1/ContactSection"
// import NewOneFooter from "../Products2/NewOneFooter"

import AllPosts from "./AllPosts"
// import FeaturedCards from "./FeaturedCards"
// import HeroSection from "./HeroSection"



const Blogs = () => {
  return (
    <div>
      <BNFNav />
      {/* <HeroSection /> */}
      {/* <FeaturedCards /> */}
      <AllPosts />
     
           <div id="contact-us">
             <div className="hidden lg:block relative">
               {/* Footer sits at bottom, ContactUS scrolls over it */}
               <div>
                 <ContactUS />
               </div>
               <NewOneFooter />
             </div>
     
             {/* MOBILE */}
             <div className="lg:hidden">
               <ContactUS />
               <NewOneFooter />
             </div>
           </div>
           </div>
  )
}

export default Blogs
