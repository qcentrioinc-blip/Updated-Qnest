import { H1 } from "../../../styles/Typography";
// import ResourceClipPath from "/AboutUs/ResourceClipPath.png" // your 2nd image
// import ResourceHero from "/AboutUs/ResourceHero.png"; // your hero image

const HeroSection = () => {
  return (
    <section className="relative  overflow-visible pt-32 bg-[#0c0c0c] text-white">
      {/* Background ClipPath */}
      <div className=" overflow-hidden    absolute top-0 left-0 w-full h-full">
        {/* <img
          src={ResourceClipPath}
          alt="background clip path"
          className="absolute lg:top-[-70%] left-[-10%] w-[120%]   lg:scale-110  md:top-[-5%] scale-150 opacity-80"
        /> */}
      </div>
      {/* Left Orange Blur Effect */}
      <div className="hidden lg:absolute left-0 top-[20%] w-80 h-80 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 opacity-70 blur-[120px] rounded-full"></div>
      
      {/* Right Orange/Yellow Blur Effect */}
      <div className="hidden lg:absolute right-0 top-[20%] w-52 h-[700px] bg-gradient-to-l from-orange-500 via-amber-400 to-yellow-500 opacity-70 blur-[120px] rounded-full"></div>

      {/* Content Section */}
      <div className="relative max-w-8xl pt-24 lg:mx-10 px-4   flex  flex-col gap-6">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-10 text-sm text-gray-300 items-center">
          <div className="flex items-center gap-2">
            <span  className="w-2 h-2 bg-[#8338EC] rounded-full"></span>
            <span className="font-quickstand" >Author</span>
          </div>
          <div className="flex items-center gap-2">
            <span  className="w-2 h-2 bg-[#8338EC] rounded-full"></span>
            <span className="font-quickstand" >10 mins read</span>
          </div>
          <div className="flex items-center gap-2">
            <span  className="w-2 h-2 bg-[#8338EC] rounded-full"></span>
            <span className="font-quickstand" >Published date</span>
          </div>
        </div>

        {/* Title */}
        <H1 className="  leading-tight">
          Sed ut perspicitatis <br/>
          <span className="playfair italic text-[#F99526]">
            unde omnis iste natus
          </span>
        </H1>

        {/* Hero Image */}
        <div className="mt-6 h-[400px]  rounded-lg  shadow-lg">
          {/* <img
            src={ResourceHero}
            alt="Hero"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
