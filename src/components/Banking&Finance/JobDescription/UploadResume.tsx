import { Link } from "react-router-dom";
import {   ContactUsDark } from "../../../styles/Button";
import { H1 } from "../../../styles/Typography";

interface UploadResumeProps {
  bgColor?: string;
  
}

const UploadResume = ({ bgColor = "#FFFFFF" }: UploadResumeProps) => {
  return (
    <section
    id="uploadResumeSection"
      className="w-full  py-10 lg:px-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-8xl mx-10   grid grid-cols-1 mt-16 md:grid-cols-2 gap-2 items-start">
       

        {/* Right Side – Image inside Yellow Div */}
        <div className="flex justify-start px-6 ">
          <div className="bg-[#FFD600] pt-10 pl-10 rounded-lg">
            <img
              src="/ContactPic.png"
              alt="Contact"
              className="rounded-md object-cover w-full md:h-[600px] max-w-md"
            />
          </div>
        </div>
         {/* Left Side – Form */}
        <div>
          <H1 className="text-[#141414] mb-6">Quam finibus rem</H1>

          <form className="flex flex-col gap-5 font-quicksand max-w-full">
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
      <div className="w-full">
  <label className="block w-full">
    <div className="border border-gray-300 rounded-md px-6 py-4 text-[16px] text-black cursor-pointer">
      Upload Resume
    </div>
    <input
      type="file"
      accept=".pdf, .doc, .docx"
      className="hidden"
    />
  </label>
</div>

            <textarea
              placeholder="Tell us a little about yourself"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-6 py-4 text-[16px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
            />

           <Link to="/industries/banking-and-finance"><ContactUsDark>Submit</ContactUsDark></Link> 
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadResume;
