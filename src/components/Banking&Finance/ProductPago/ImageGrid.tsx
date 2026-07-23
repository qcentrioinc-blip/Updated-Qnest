import { Link } from "react-router-dom";
// import { ContactUs } from "../../../styles/Button";
import { H2, H3, H4, P } from "../../../styles/Typography";
import Image1 from "/Pago/ImageGrid1.webp";
import Image2 from "/Pago/ImageGrid2.webp";
 
const ImageGrid = () => {
  return (
    <div className="w-full min-h-screen dark:bg-black  bg-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-6 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start" >
         
          {/* Left Column - Content */}
{/* Left Column */}
<div className="flex flex-col self-start ">
 
  <div className="flex flex-col gap-3">   
    <span className="px-3 py-1 text-xs dark:border-white font-quicksand sm:text-sm dark:text-white  rounded-full border border-black w-fit">
      Benefits
    </span>
 
    <H2><span className="text-[#00AA72]">Key Benefits of PAGO </span>  Payment System </H2>
 
    <P className="xl:max-w-md dark:text-white ">
      Financial institutions gain efficiency, security, and reliability across all payment types with lower operational costs. 
    </P>
  </div>
 
  {/* Big Card */}
  <div className=" mt-10 lg:mt-20  bg-[#EAEAEA] dark:bg-slate-900 rounded-md p-4 sm:p-5 md:p-6 lg:p-8 xl:py-24 flex flex-col  lg:h-[485px] justify-center">
    <H3 className="  dark:text-white ">End-to-End Payment Processing with Lower Fees and Real-Time Monitoring </H3>
    <P className="mt-2 sm:mt-3 lg:mt-10 mb-10">
      PAGO handles e-cash, e-cheques, and ACH transactions with atomicity. Lower transaction fees and real-time fraud monitoring reduce operational costs. 
    </P>
 
     <Link
                            to="#contact-us"
                            onClick={(e) => {
                                const el = document.getElementById("contact-us");
                                if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
            {/* <ContactUs className="w-full flex  mt-4 items-center justify-center gap-2 text-black">
              Learn More 
            </ContactUs> */}
            </Link>
  </div>
 
</div>
          {/* Right Column - Image Grid */}
          <div className="self-start">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full" >
           
            {/* Left Sub-column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full xl:h-[800px]">
              {/* Image 1 */}
              <div className="flex-1 overflow-hidden rounded-md shadow-md ">
                <img
                  src={Image1}
                  alt="Main"
                  className="w-full h-full  object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
 
              {/* Card 1 */}
              <div className="flex-[0.55] bg-[#C7DDFF] dark:bg-slate-950 space-y-10  rounded-md p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-start">
              <div className="h-20 w-20 flex items-center justify-center rounded-full  bg-gray-200">
              <img src="/Pago/Card.svg" alt="pago" className=""/>
              </div>
                  <div className="space-y-8">
                      <H4 className="dark:text-white ">Seamless Integration </H4>
                <P className="  ">
                Connects with core banking systems, SWIFT, and existing financial infrastructure without disruption. 
                </P>
                  </div>
            </div>
            </div>
 
            {/* Right Sub-column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full">
              {/* Card 2 */}
              <div className="flex-[0.55] bg-[#FAFAFA] dark:bg-slate-950 space-y-10  border-2 border-[#00AA72] rounded-md p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-start">
               
                   <div className="h-20 w-20 rounded-full flex items-center justify-center bg-black">
              <img src="/Pago/Eye.svg" alt="pago" className=""/>
              </div>
                  <div className="space-y-8">
                      <H4 className="dark:text-white ">Complete Visibility</H4>
                <P className="">
                 Real-time dashboards and detailed audit trails provide transparency across all payment transactions.
                </P>
                  </div>
                 
              </div>
 
              {/* Image 2 */}
              <div className="flex-1 overflow-hidden rounded-md shadow-md">
                <img
                  src={Image2}
                  alt="Secondary"
                  className="w-full  h-full xl:h-[460px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};
 
export default ImageGrid;
