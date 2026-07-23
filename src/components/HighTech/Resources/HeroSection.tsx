import {  H1, P } from "../../../styles/Typography";

 

const HeroSection = () => {
  return (
    <section className="relative w-full py-16 overflow-visible  pt-32 bg-black  space-y-2 text-white">
      {/* Background abstract image */}
      <img
        src="/Resources/ResourceClip.png"  
        alt="Background pattern"
        className="absolute top-[5%] left-[0]  scale-145   lg:top-[-60%] lg:left-[-15%] lg:w-[120%]  lg:scale-120   md:top-[-5%] md:left-[-5%] md:scale-150 
            opacity-80  "
      />

       <div className="lg:absolute hidden left-0 top-[20%] w-80 h-80 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 opacity-70 blur-[120px] rounded-full"></div>
      
      {/* Right Orange/Yellow Blur Effect */}
      <div className="lg:absolute hidden right-0 top-[20%] w-52 h-[700px] bg-gradient-to-l from-orange-500 via-amber-400 to-yellow-500 opacity-70 blur-[120px] rounded-full"></div>

      {/* Content wrapper */}
      <div className="relative  max-w-8xl lg:mx-10 px-4   md:pt-24 flex flex-col md:flex-col items-start gap-10">
        
        {/* Left Text Section */}
        <div className="w-full   text-left z-10">
        <div className="flex  mb-4 flex-row gap-2 items-center">
        <div className="bg-[#8338EC] w-3 h-3 rounded-full"></div>
        <span> 
          <P className="   text-gray-300">
            Careers
          </P></span>
          </div>
         
          <H1 className=" font-extrabold leading-tight">
            Sed ut perspiciatis <br/>
            <span className="text-[#F99526] playfair italic font-semibold">
              unde omnis iste natus
            </span>
          </H1>
        </div>

        
        <div className="w-full   relative">
          <img
            src="/Resources/Hero.png"
            alt="Career visual"
            className="w-full  h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
