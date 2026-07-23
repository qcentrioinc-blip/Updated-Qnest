import { Link } from "react-router-dom";
import {   ContactUsDark } from "../../../styles/Button";
import { H1 } from "../../../styles/Typography";

interface HeroSectionProps {
  bgColor?: string;
  
}

const HeroSection = ({ bgColor = "#FFF5BF" }: HeroSectionProps) => {
  return (
    <section
      className="w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto pt-28 grid grid-cols-1 mt-16 md:grid-cols-2 gap-12 items-center">
        {/* Left Side – Form */}
        <div>
          <H1 className="text-[#141414] mb-6">Quam finibus</H1>

          <form className="flex flex-col gap-5 max-w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-6 py-4 text-[16px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-md px-6 py-4 text-[16px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-6 py-4 text-[16px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
            />
            <textarea
              placeholder="Tell us a little about yourself"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-6 py-4 text-[16px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
            />

           <Link to="/industries/banking-and-finance"><ContactUsDark>Submit</ContactUsDark></Link> 
          </form>
        </div>

        {/* Right Side – Image inside Yellow Div */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-[#FFD600] pt-10 pl-10 rounded-lg">
            <img
              src="/ContactPic.png"
              alt="Contact"
              className="rounded-md object-cover w-full md:h-[500px] max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
