import { H2} from "../../../styles/Typography";

const HeroSection = () => {
  return (
    <section className="w-full   flex justify-between items-center   bg-[#FFD600]">
     
      {/* Blue Job Info Section */}
      <div className="bg-[#00AA72]   md:h-[400px] lg:h-[300px]  w-screen text-white md:py-10 md:mr-16   mt-28 md:px-8 rounded-lg">
        <div className="max-w-7xl flex flex-col  pt-10 items-start mx-10">
          <H2 className="  mb-8">
            Senior Content Specialist
          </H2>

          <div className="lg:flex   gap-6 sm:flex-row sm:flex-nowrap  pb-10 md:pb-0 ">
            <div>
              <p className=" text-[22px] font-quadran   opacity-60 font-bold">Work Experience</p>
              <p className=" text-[22px]   font-normal opacity-60">3 - 5 years</p>
            </div>
            <div>
              <p className="  text-[22px] opacity-60 font-quadran   font-bold">Workplace Type</p>
              <p className="text-[22px] font-normal opacity-60">In-Office</p>
            </div>
            <div>
              <p className=" text-[22px] opacity-60 font-quadran   font-bold">Employment Type</p>
              <p className=" text-[22px] font-normal opacity-60">Full-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
