import React from "react";
import { H2, P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const CTAEHRUnifi: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <section className="w-full  overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">

          {/* Left Content */}
          <div className="flex flex-col  px-[40px] md:px-[60px] xl:px-[160px]  xl:h-[90vh] justify-center bg-[#00AA72] dark:bg-[#141414] py-16 text-white">
            {/* <span className="mb-4 font-quicksand text-md">
              Generate any kind of
            </span> */}

            <H2 className="mb-6 leading-tight">
               Ready to Transform Your Practice?
             
            </H2>

            <P className="mb-8 max-w-xl leading-relaxed text-white/80">
         See how a unified platform simplifies everything for your business. Focus on patient care while we handle the complexity.  
            </P>

            <button
              onClick={() => setDrawerOpen(true)}
              className="
                group flex items-center justify-center
                w-52 h-[48px]
                group
    px-6
    rounded-lg
    font-quadran   font-bold text-sm tracking-widest
    bg-white text-[#00AA72]
    border-2 border-[#00AA72]
    transition-all duration-300 ease-in-out
    
    hover:border-b-[4px]
    hover:-translate-y-[2px]
    shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
    cursor-pointer
              "
            >
             Get Demo
              <span className="ml-3 relative w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[420px] lg:min-h-full">
            <img
              src="/EHRIcons/CTAEHR.webp"
              alt="EHR landscape"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </div>
      </section>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default CTAEHRUnifi;
