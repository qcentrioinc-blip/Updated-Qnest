// import BlogGridSection from "../Blogs/BlogsGridSection";
import BNFNav from "../Navbar/BNFnav";
// import ContactSection from "../ProductBankfair/ContactSection";
import ContactUS from "../ProductRemitree/ContactUS";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
import TextSec from "./TextSec";
import TitleSec from "./TitleSec";
import AllPosts from "../Blogs/AllPosts";

export default function EventssPage() {
  return (
    <div>
      <BNFNav />
      <TitleSec />
      <TextSec />
      <AllPosts />
      {/* <BlogGridSection/> */}


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
  );
}
