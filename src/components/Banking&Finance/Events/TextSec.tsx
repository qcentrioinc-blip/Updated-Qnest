"use client";

import { H2, H3, P } from "../../../styles/Typography"; // adjust path if needed

export default function TextSec() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Small title with line */}
          <div className="flex items-center gap-3">
            <div className="h-[6px] w-10 rounded-full bg-[#F5F5F5]"></div>
            <H3 className="text-white">Quis autem</H3>
          </div>

          {/* Main Heading */}
          <H2 className="leading-tight">
            Shaping the  
            Future Across  
            Every Sector.
          </H2>
        </div>

        {/* RIGHT SIDE — PARAGRAPHS */}
        <div className="space-y-6 max-w-3xl">
          <P className="text-white/70 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco.
          </P>

          <P className="text-white/70 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum. Occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ksdfg.
          </P>
        </div>
      </div>
    </section>
  );
}
