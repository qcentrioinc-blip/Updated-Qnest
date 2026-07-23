import { useState } from "react";
import { H2,  P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const HeroSplitMasked = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (  
    <>
      <section className="w-full bg-[#F5F5F5]  dark:bg-[#141414] py-10   ">
        <div className="px-[40px] md:px-[60px] xl:px-[160px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <H2 className="text-[#00AA72] ">
              The Proven Impact for Modern Practices
            </H2>

            <P className="  leading-normal tracking-normal text-[#2A2A2A] max-w-2xl ">
              Unified Clinicapp is engineered for the realities of daily healthcare delivery. By integrating clinical, administrative, and patient workflows onto a single platform, we eliminate the friction of juggling multiple systems.
            </P>

            <P className=" leading-normal tracking-normal text-[#2A2A2A]  max-w-2xl ">
              Our solution directly translates into measurable outcomes: faster patient throughput, reduced administrative burden, and a stronger financial foundation, all while enhancing the quality of care.
            </P>

            <button
  onClick={() => {
    setDrawerOpen(true);
  }}
  className="
    group
    inline-flex items-center justify-center
    px-6 h-12
    rounded-lg
    font-quadran   font-bold text-sm tracking-widest
    bg-[#00AA72] text-white
    hover:bg-white hover:text-[#00AA72]
    border-2 border-[#00AA72]
    transition-all duration-300 ease-in-out
    hover:border-b-[4px]
    hover:-translate-y-[2px]
    shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
    cursor-pointer
  "
>
  <span className="flex items-center gap-2">
    See How

    <span className="relative flex items-center justify-center w-[20px] h-[20px]">
      
      {/* Default Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17L17 7" />
      </svg>

      {/* Hover Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>

    </span>
  </span>
</button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center  ">

            {/* MASKED IMAGE */}
            <img
              src="/EHRIcons/SplitMaskedImage.svg"
              alt="Hero visual"
              className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[550px]"
              loading="lazy"
            />

            {/* TOP CARD */}
            {/* <div className="absolute top-0  right-18 md:right-48 lg:right-60 xl:right-20 bg-[#00AA72]  rounded-2xl xl:rounded-4xl w-24 h-24 md:w-34 md:h-32 lg:w-48 lg:h-48  xl:w-54 xl:h-52 flex flex-col items-center justify-center shadow-md">
              <div className="w-6 h-6 xl:w-14 xl:h-14 bg-[#F5F5F5] rounded-full  " />
              <P className=" xl:pt-2 pl-4 md:pl-6 xl:pl-0 font-medium">Clinical Confidence </P>
            </div> */}

            {/* BOTTOM CARD */}
            {/* <div className="absolute  bottom-0 left-16 md:left-48 lg:left-60 xl:left-16 bg-[#00AA72]  rounded-2xl xl:rounded-4xl w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-54 xl:h-52 flex flex-col items-center justify-center shadow-md">
               <div className="w-6 h-6 xl:w-14 xl:h-14 bg-[#F5F5F5] rounded-full  " />
                  <P className=" xl:pt-2 pl-4 md:pl-6 xl:pl-0 font-medium">Operational Efficiency </P>
            </div> */}

          </div>


        </div>
      </section>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default HeroSplitMasked;
