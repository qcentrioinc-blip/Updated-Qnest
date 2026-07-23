"use client";

import { H2 } from "../../../styles/Typography";

export default function CoreCapabilities() {
  return (
    <section className="w-full bg-white  dark:bg-black px-6 py-6 xl:py-0 lg:px-20 text-center">
      
      {/* Title */}
      <H2 className=" text-gray-900 dark:text-white mb-4 xl:mb-12">
        Platform Capabilities
      </H2>

      {/* Responsive Image Wrapper */}
      <div className="w-full flex justify-center">
        
        {/* Mobile Image */}
        <img
          src="/cip3.webp"
          alt="Core Capabilities Diagram"
          className="block md:hidden w-full max-w-md object-contain"
        />

        {/* Tablet Image */}
        <img
          src="/cip3.webp"
          alt="Core Capabilities Diagram"
          className="hidden md:block lg:hidden w-full max-w-3xl object-contain"
        />

        {/* Desktop Image */}
        <img
          src="/cip3.webp"
          alt="Core Capabilities Diagram"
          className="hidden lg:block w-full max-w-6xl object-contain"
        />

      </div>
    </section>
  );
}