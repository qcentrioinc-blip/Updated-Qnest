
// import { AiOutlineEye, AiOutlineSafety, AiOutlineRobot } from "react-icons/ai";  
import { H2, H4, P } from "../../../styles/Typography";

export default function Intro() {
  return (
    <section className="bg-white w-full  py-4 lg:px-8 xl:px-0 lg:py-10" >
      <div className="max-w-full px-[40px] md:px-[60px] xl:px-[160px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-stretch">


        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center ">
          <div>
            <H2 className="font-bold  text-[#009565]  ">
              {/* Pay Only For <br className="lg:block xl:block hidden" /> */}
               Lorem ipsum dolor sit amet, consectetu.
            </H2>

            <P className="  mt-2 text-left max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </P>
          </div>

          {/* STATS */}
          <div className=" flex flex-col md:flex-row mt-8 lg:mt-20 xl:mt-12 gap-4 lg:gap-8">
            <div className=" flex flex-col  space-y-2 lg:space-y-4 ">
              <div className=" text-2xl  text-[#009565] lg:text-4xl font-quadran   ">$0</div>
              <P className=" " >Initial Cost</P>
            </div>
            <div className=" flex flex-col space-y-4 ">
              <div className="text-2xl text-[#009565] lg:text-4xl font-quadran   ">30%</div>
              <P className=" " >Typical Waste Found</P>
            </div>

            <div className=" flex flex-col space-y-4 ">
              <div className="text-2xl text-[#009565] lg:text-4xl font-quadran   ">6 Week</div>
              <P className=" " >Implementation</P>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col lg:flex-col xl:flex-col mt-10 gap-4 lg:gap-10 xl:gap-10 lg:pl-10 xl:pl-20">


          {/* ITEM 1 */}
          <div className="flex items-start gap-4">
            {/* <img src="/icon1.svg" className="w-6 h-6 " /> */}
            <div >
              <H4 className="text-lg text-[#009565] ">
                Aligned Incentive Model
              </H4>
              <P className=" max-w-lg    pr-2 sm:pr-0 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </P>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start gap-4">
            {/* <img src="/icon2.svg" className="w-6 h-6 " /> */}
            <div>
              <H4 className="text-lg text-[#009565] ">
                No Minimum Commitment
              </H4>
              <P className=" max-w-lg   pr-2 sm:pr-0 mt-2">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </P>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-4">
            {/* <img src="/icon3.svg" className="w-6 h-6 " /> */}
            <div>
              <H4 className=" text-[#009565] ">
                Verified Billing Metrics
              </H4>
              <P className=" max-w-lg    pr-2 sm:pr-0 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </P>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
