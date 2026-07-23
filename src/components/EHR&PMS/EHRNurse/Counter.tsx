import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Image1 from "/AboutUs/image83.png";
import Image2 from "/AboutUs/image84.png";
import { H2, H4, P } from "../../../styles/Typography";
import Star from "/AboutUs/AboutStar.png";

const Counter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
const StarIcon = ({ className }: { className?: string }) => (
  <img
    src={Star}
    alt="decorative-star"
    className={`absolute  w-8 h-8   ${className}`}
  />
);

  return (
   <section
  ref={ref}
  className="relative flex flex-col  lg:items-center   py-6  overflow-hidden"
>
 
   <div className="absolute inset-0 dark:bg-[#141414] bg-[#FFFFFF]"></div>
{/* Decorative Stars */}
<div className="absolute  lg:block hidden inset-0 pointer-events-none z-0">
  <StarIcon className="top-10 left-10 opacity-60" />
  <StarIcon className="top-20 right-24 opacity-60" />
  <StarIcon className="top-80 left-1/10" />
  <StarIcon className="top-32 left-1/4 opacity-60" />
  <StarIcon className="top-60 right-10 opacity-60" />
  <StarIcon className="top-80 right-80" />
</div>

  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col px-[40px] md:px-[60px] xl:px-[160px]   justify-center">
    {/* Heading */}
    <H2 className="font-semibold  text-left lg:text-center   dark:text-white mb-10 lg:mb-16 text-gray-800 leading-snug">
      Eliminating the Top Nursing <br className="hidden lg:block" />Workflow Challenges 
    </H2>

    {/* Main Container */}
    <div className="relative flex flex-col  lg:flex-row items-center   sm:gap-4 md:gap-0 w-full max-w-8xl  lg:px-6 ">
      {/* Left Box */}
      <motion.div
        className="relative bg-[#00AA72] w-[100%] rounded-lg lg:rounded-l-lg  lg:px-0 px-2 h-[320px] flex items-center justify-center overflow-hidden"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={Image1}
          alt="Left"
          className="w-[90%] h-[260px] object-cover shadow-md"
        />
      </motion.div>
<div className="flex lg:hidden flex-col w-full my-10 gap-12">

  {/* Left */}
  <div className="flex flex-col items-center">
    <h2 className="text-4xl font-quadran   font-bold dark:text-white text-black">
      {isInView && <CountUp end={56} duration={2} suffix="%" />} 
    </h2>
    <H4 className="dark:text-white text-[#2A2A2A]">Fewer Communication Gaps</H4>
    <P className="text-gray-600 mt-3 max-w-3xl  ">
      A unified task list and patient record ensure all team members are instantly updated, reducing errors and oversights. 
    </P>
  </div>
  </div>
      {/* Middle Green Box */}
      <motion.div
        className="relative bg-[#00AA72] text-white rounded-lg shadow-xl my-4 w-[100%]  h-[600px] flex flex-col justify-center items-center border border-[#4c8e72]"
        initial={{ y: "-100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Lighter inner rectangle */}
        <div className="absolute inset-4 bg-[#ffffff]  dark:bg-teal-900 border-1 border-[#ffffff] rounded-lg backdrop-blur-sm">
          
        </div>

        {/* Circle and Texts on top of light box */}
        <div className="relative z-10 px-8">
          <div className="absolute top-0 lg:left-20 left-18 transform -translate-x-1/2  w-16  h-16 rounded-full  flex items-center justify-center">
          <img
    src="/EHR-PMS/Nurse/icon1.svg"
    alt="Feature icon"
    loading="lazy"
    className="w-8 h-8 md:w-10 md:h-10 object-contain"
  />
          </div>
          <div className="pt-22   space-y-10 p-6">
            <div className=" ">
              <H4 className="mb-3 text-[#2A2A2A] dark:text-white">Scattered Patient Information </H4>
              <P className="  text-[#141414]">
                No more searching through multiple systems. All patient history, meds, and orders are unified in one secure, accessible profile. 
              </P>
            </div>
            <div>
              <H4 className=" mb-3 text-[#2A2A2A] dark:text-white"> Manual Task Tracking </H4>
              <P   className="text-sm text-[#141414]">
                Eliminate sticky notes and missed follow-ups. A dynamic digital task list organizes and tracks all your clinical responsibilities. 
              </P>
            </div>
           
          </div>
        </div>
      </motion.div>
<div className="flex lg:hidden flex-col w-full my-10 gap-12">
 <div className="flex flex-col items-center">
    <h2 className="text-4xl font-quadran   dark:text-white font-bold text-black">
      {isInView && <CountUp end={4} duration={2} suffix="X" />}
    </h2>
    <H4 className="dark:text-white">Faster Documentation</H4>
    
    <P className="text-[#141414] mt-3 max-w-3xl text-sm">
      Using smart templates reduces charting time dramatically, allowing more focus on direct patient care and less on paperwork. 
    </P>
  </div>

</div>
      {/* Right Box */}
      <motion.div
        className="relative bg-[#00AA72] rounded-r-lg w-[100%] lg:px-0 px-2  h-[320px] flex items-center justify-center overflow-hidden"
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={Image2}
          alt="Right"
          className="w-[90%] h-[260px] object-cover shadow-md"
        />
      </motion.div>

      <div className="flex lg:hidden flex-col w-full my-10 gap-12">
        <div className="flex flex-col items-center">
    <h2 className="text-4xl dark:text-white font-quadran   font-bold text-black">
      {isInView && <CountUp end={150} duration={2} suffix="%" />}
    </h2>
    <H4 className="dark:text-white"> More Organized Shifts</H4>
    <P className="text-[#141414] mt-3 max-w-3xl text-sm">
      Centralized access to patient data, orders, and schedules creates a structured, predictable workflow from check-in to handoff. 
    </P>
  </div>
      </div>
    </div>

  {/* Counter Section – DESKTOP ONLY */}
<div className="hidden lg:flex lg:flex-row items-center justify-center mt-12 gap-14 text-center">

  {/* Counter 1 */}
  <div className="mr-38">
    <h2 className="lg:text-6xl text-4xl font-quadran   -mt-44 font-bold dark:text-white text-black">
      {isInView && <CountUp end={56} duration={2} suffix="%" />} 
    </h2>
    <H4 className="dark:text-white">Fewer Communication Gaps</H4>
    <P className="text-[#141414] mt-3 max-w-xs text-sm">
      A unified task list and patient record ensure all team members are instantly updated, reducing errors and oversights. 
    </P>
  </div>  

  {/* Counter 2 */}
  <div className="mr-38">
    <h2 className="lg:text-6xl text-4xl font-quadran   dark:text-white text-black">
      {isInView && <CountUp end={4} duration={2} suffix="X" />}
    </h2>
    <H4 className="dark:text-white">Faster Documentation</H4>
    <P className="text-[#141414] mt-3 max-w-xs text-sm">
      Using smart templates reduces charting time dramatically, allowing more focus on direct patient care and less on paperwork. 
    </P>
  </div>

  {/* Counter 3 */}
  <div>
    <h2 className="lg:text-6xl text-4xl font-quadran   md:-mt-44 font-bold dark:text-white text-black">
      {isInView && <CountUp end={150} duration={2} suffix="%" />}
    </h2>
    <H4 className="dark:text-white"> More Organized Shifts</H4>
    <P className="text-[#141414] mt-3 max-w-xs text-sm">
      Centralized access to patient data, orders, and schedules creates a structured, predictable workflow from check-in to handoff. 
    </P>
  </div>

</div>



  </div>
</section>

  );
};

export default Counter;
