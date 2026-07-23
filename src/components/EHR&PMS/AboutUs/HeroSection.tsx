import { H1 } from "../../../styles/Typography";
// import Image1 from "/AboutUs/image81.png";
const HeroSection = () => {
  return (
    <div className="w-full   ">
       
      <div 
        className="  h-[40vh] lg:h-[60vh]  w-full flex items-center justify-center" 
        style={{
            // backgroundImage: 'url("/EHR-PMS/Careers/bg_img1.png")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
           
        }}
      >
        <H1 className=" font-thin lg:pt-24  px-2   xl:px-40 text-[#166D48] text-center ">
          A new era of healthcare, a new world of practice well-being
        </H1>
      </div>


      <div className=" w-full flex  h-full justify-center bg-gray-100  ">
        {/* <img
          src={Image1}
          alt="Hero Image"
          className="   w-full h-auto object-cover  "
        /> */}
      </div>
    </div>
  );
};

export default HeroSection;