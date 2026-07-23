import React from "react";

import { H2, H3, H4, P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const WhyUnifiedHealth: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <section className="w-full bg-white ">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]  py-16">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16   lg:grid-cols-[1fr_2fr_1fr]">

          {/* LEFT IMAGE (top only) */}
          <div>
            <img
              src="/EHRIcons/WhyUnified2.webp"
              alt="Why Unified Health"
              className="h-[400px] w-full rounded-sm object-cover"
            />
          </div>

          {/* CENTER CONTENT (top) */}
          <div className="flex flex-col px-4 xl:px-0  justify-center items-start xl:pl-16">
            {/* <span className="mb-3 font-quicksand text-md">
              Why Unified Health Net
            </span> */}

            <H2 className="mb-6 leading-snug text-[#00AA72]">
              Built for Modern Healthcare’s Demands
            </H2>

            <P className="mb-6 max-w-xl leading-relaxed">
              We unify the entire patient and practice journey on one intelligent platform, delivering the simplicity, efficiency, and clarity that today’s providers need to succeed.
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
    Learn More

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

          {/* RIGHT IMAGE (spans top + bottom) */}
          <div className="row-span-2">
            <img
              src="/EHRIcons/WhyUnified1.webp"
              alt="Architecture"
              className="h-full min-h-[620px] w-full rounded-lg object-cover"
            />
          </div>

          {/* EMPTY LEFT CELL (keeps alignment) */}
          <div className="hidden  lg:block" />

          {/* BOTTOM FEATURES (center column only) */}
          <div className="xl:-ml-80 px-4 xl:px-0 ">
            <H3 className="mb-4 text-[#00AA72] ">
              Our Core Promise
            </H3>

            <div className="mb-8 h-px w-full bg-[#00AA72]" />

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Feature 1 */}
              <div>
                <H4 className="mb-2 text-[#00AA72]">
                  Uncompromising Simplicity
                </H4>
                <div className="flex  flex-col-reverse   xl:flex-row">
                  <P className="max-w-sm">
                    A single, intuitive platform for all clinical, financial, and patient engagement tasks.
                  </P>
                  {/* <div className="h-12 w-12 bg-[#D9D9D9] my-4 xl:my-0  rounded-full" /> */}
                </div>
              </div>

              {/* Feature 2 */}
              <div>
                <H4 className="mb-2 text-[#00AA72]">
                  Unmatched Efficiency
                </H4>
                <div className="flex  flex-col-reverse    xl:flex-row">
                  <P className="max-w-sm">
                    Automates workflows to speed up documentation, billing, and daily operations.
                  </P>
                  {/* <div className="h-12 w-12 bg-[#D9D9D9]  my-4 xl:my-0 rounded-full" /> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};

export default WhyUnifiedHealth;
