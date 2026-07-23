import { useState } from "react";
// import SubFooter from "../AboutHightTech/SubFooter";
import BlogContent from "./BlogContent";
import BlogHead from "./BlogHead";
import HeroSection from "./HeroSection";
import HighTechNavbar from "../Navbar/HighTechNavbar";
import ContactSecHT from "../ContactSecHT";
import FooterHT from "../FooterHT";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<
    'Case studies' | 'Blogs' | 'News/press Release' | 'Whitepapers'
  >('Case studies');

  return (
    <div>
      <HighTechNavbar />
      <div className="relative overflow-x-hidden">
        <HeroSection />
        <BlogHead activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>

      <BlogContent activeCategory={activeCategory} />
      <ContactSecHT/>
      <FooterHT/>

      {/* <SubFooter /> */}
    </div>
  );
};

export default Resources;
