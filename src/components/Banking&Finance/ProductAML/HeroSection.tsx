import { Link } from "react-router-dom";
import { H1, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";

export default function HeroSection() {
  const bullets = [
  {
    icon: "/AML/Dollar.svg",
    text: "Multi-currency compliant platform that generates FFIEC and OCC regulatory reports and uses predictive analytics for capital planning and funding strategies. "
  },
  {
    icon: "/AML/Vector.svg",
    text: "Comprehensive toolkit for interest rate risk analysis, Dodd-Frank Act stress testing, government securities management, and liquidity monitoring. "
  }
];
  return (
    <section className="w-full bg-gray-100 dark:bg-black py-16 relative overflow-hidden">
      <div className="max-w-7xl  lg:pt-24 px-6 lg:px-10 xl:px-6 mx-auto ">

        {/* Heading */} 
        <div className="max-w-4xl mb-12">
          <H1 className="text-[#00AA72] leading-tight">
           FFIEC-Aligned Asset Liability Management System
          </H1>
        </div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] bg-[#00AA72] dark:bg-blue-950 rounded-2xl overflow-hidden min-h-[520px]">

          {/* Left Image */}
          <div className="relative w-full h-full">
            <img
              src="/AML/Almanac11.webp"
              alt="hero image"
              className="w-full h-full  object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between p-4  lg:p-6 xl:p-16 ">

            {/* White floating card */}
            <div className="bg-gray-100 dark:bg-gray-800 text-[#141414] p-6 rounded-xl shadow-md ">
              <P className="leading-relaxed max-w-2xl ">
              ALMANAC integrates risk management, liquidity forecasting, and regulatory reporting into a single platform for US financial institutions. Meets FFIEC guidelines and OCC expectations for asset liability management. 
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
                         <ContactUs className="w-full mt-4 flex items-center justify-center gap-2 text-black">
                                          Request A Demo
                         </ContactUs>
                         </Link>
            </div>

            {/* Bullet points */}
           <div className="space-y-10 mt-10">
  {bullets.map((item, index) => (
    <div key={index} className="flex gap-5 items-start">

      <div className="w-16 h-16 bg-white/10   rounded-full  flex items-center justify-center shrink-0 mt-1">
        <img
          src={item.icon}
          alt=""
          className="w-10 h-10 object-contain"
        />
      </div>

      <P className="text-[#CCCCCC] max-w-full leading-normal">
        {item.text}
      </P>

    </div>
  ))}
</div>
          </div>
        </div>
      </div>

      {/* Exclude decoration */}
      <div className="hidden lg:block absolute  right-0 top-[27%] xl:right-8 xl:top-52">
        <img
          src="/AML/Exclude.svg"
          alt="exclude shape"
          className="w-[120px] xl:w-[200px]"
        />
      </div>
    </section>
  );
}