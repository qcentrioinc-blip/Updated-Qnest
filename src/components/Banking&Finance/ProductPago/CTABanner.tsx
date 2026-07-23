import { Link } from "react-router-dom";
import {   P } from "../../../styles/Typography";

const CTABanner = () => {
  return (
    <section
      className="
      relative
      w-full 
      min-h-[60vh] 
       xl:h-[80vh]
      flex
      items-start
      
      bg-no-repeat
      xl:bg-cover
 
      overflow-hidden
      "
      style={{
        backgroundImage: "url('/Pago/CTABanner.webp')",  
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12   lg:px-10  xl:px-6 pt-10 xl:pt-24  w-full">

        {/* Heading */}
        <h1 className="text-[#002459] font-quadran   text-[24px] max-w-4xl md:text-[56px] lg:text-[72px] ">
        Payment and Settlement System Overview
        </h1>

        {/* Glass Card */}
        <div
          className="
          mt-10
          max-w-4xl
          flex
          items-center
          gap-6
          p-6
          xl:p-10
       
       rounded-tr-[76px]
          border border-white/10
          bg-white/10
          backdrop-blur-md
          "
        >
          {/* Circle */}
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
          <div className="w-14 h-14  rounded-full flex justify-center items-center flex-shrink-0">
            <img src="/Pago/Arrow1.svg" alt="arrow" className=" w-12 h-12 hover:scale-110 "/>
          </div>
          </Link>

          {/* Text */}
          <P className="text-[#141414] max-w-xl leading-relaxed">
    Explore PAGO modules including ACH, NACHA, and RTGS to streamline your payment operations and settlement processes across all channels
          </P>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;