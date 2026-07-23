import { useLocation, useNavigate } from "react-router-dom";
import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import { useState } from "react";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const HeroSection = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  type ContactDetail = {
    contactAction: "route" | "drawer" | "modal";
    contactRoute?: string;
  }

  const contactDetail: Record<string, ContactDetail> = {
    "/industries/ehr-and-pms/platform": {
      contactAction: "drawer",
    },
    "/industries/banking-and-finance/platform": {
      contactAction: "route",
      contactRoute: "/industries/banking-and-finance/contactform",
    },
    "/industries/high-tech/platform": {
      contactAction: "route",
      contactRoute: "/industries/high-tech/contactform",
    },
    "/industries/cloud-finops-ai/platform": {
      contactAction: "modal",
    },
  };

  const config = contactDetail[pathname] || contactDetail["/industries/banking-and-finance"];


  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (config.contactAction === "route" && config.contactRoute) {
      if (config.contactRoute) navigate(config.contactRoute);
    } else if (config.contactAction === "drawer") {
      setDrawerOpen(true);
    } else if (config.contactAction === "modal") {
      setModalOpen(true);
    }
  };


  return (
    <>
      <div className="w-full bg-[#00AA72]   relative overflow-hidden">


        {/* Text Section */}
        <div className="px-8   lg:pt-24 lg:px-20 xl:px-24 flex flex-col lg:flex-row justify-between items-center relative z-10">
          {/* Left Text */}
          <div className="w-full lg:pb-10 lg:pt-20 p-4 text-center lg:text-left">
            <H1 className="text-white">Lorem ipsum dolor , consectetur adipis</H1>
          </div>

          {/* Paragraph + Button */}
          <div className="w-full md:w-lg lg:w-3/5 flex flex-col lg:pb-10 p-4 lg:pt-20 text-center lg:text-left">
            <P className="text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </P>
            <div className="flex mt-6 justify-center lg:justify-start">
              <ContactUs onClick={handleContactClick}>Contact Us</ContactUs>
            </div>
          </div>
        </div>


        {/* IMAGE LAYOUT CONTAINER */}
        <div className="relative w-full flex justify-center items-center mt-20 pb-20">

          {/* Top Left Floating Graphic */}
          <img
            src="/Platform/Graphic1.png"
            alt="Graphic 1"
            className="absolute -top-64 left-1/4 w-32 md:w-40 lg:w-lg  animate-fadeInUp z-20"
          />

          {/* Top Right Floating Graphic */}
          <img
            src="/Platform/Graphic2.png"
            alt="Graphic 2"
            className="absolute top-24 right-0 w-32 md:w-40 lg:w-72 animate-fadeInUp z-20"
          />


          {/* Left Small Image */}
          <img
            src="/Platform/LeftImage.png"
            alt="Left Small"
            className="absolute left-32 top-2 -translate-y-1/2 w-32 md:w-44 lg:w-72 rounded-xl z-50  lg:z-10"
          />

          {/* Right Small Image + Insights Tag */}
          <div className="absolute right-5 bottom-48 -translate-y-1/2 z-50">
            <img
              src="/Platform/RightImage.png"
              alt="Right Small"
              className="w-32 md:w-44 lg:w-72 rounded-xl "
            />


          </div>

          {/* MAIN CENTER IMAGE */}
          <img
            src="/Platform/HeroImage.png"
            alt="Main UI"
            className="w-[90%] md:w-[85%] lg:w-[70%] rounded-xl   relative z-20"
          />
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default HeroSection;
