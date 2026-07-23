"use client";

import { H1, P } from "../../../styles/Typography";

export default function TitleSec() {
  return (
    <section className="w-full flex items-center justify-center py-24 px-6 relative overflow-hidden">

      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(50% 50% at 50% 50%, rgba(255, 249, 243, 0.5) 0%, rgba(200, 255, 215, 0.5) 100%)]">
        <img
          src="/EHR-PMS/Careers/bg_img1.png"
          alt="Radial Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative text-center max-w-3xl mx-auto">
        
        {/* Small Top Text */}
        <P className=" mb-3">
          Careers
        </P>

        {/* Main Heading */}
        <H1 className="leading-snug text-[#116A43]">
          Shaping the Future <br className="hidden sm:block" />
          Across Every Sector.
        </H1>

        {/* Description */}
        <P className="mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        </P>
      </div>

    </section>
  );
}
