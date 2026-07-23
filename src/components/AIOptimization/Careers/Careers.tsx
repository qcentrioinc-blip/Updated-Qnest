"use client";

import { ArrowRight } from "lucide-react";
import { H1 } from "../../../styles/Typography";


export default function Careers() {
  return (
    <section className="w-full h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">

      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(50% 50% at 50% 50%, rgba(255, 249, 243, 0.5) 0%, rgba(200, 255, 215, 0.5) 100%)]">
        <img
          src="/AI/Careers/bg_img.jpg"
          alt="Radial Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative text-center max-w-4xl mx-auto">
        
        
        {/* Main Heading */}
        <H1 className="leading-snug text-[#0AC276] mb-10">
          Build the Best AI   <br className="hidden sm:block" />
          <span className="text-white">Cloud  Solutions With Us </span>
        </H1>

        {/* Button */}
                <button
          onClick={() => {
    document.getElementById("JobListSection")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
          className="
            inline-flex 
            font-quadran  
            items-center 
            justify-center 
            px-6 sm:px-8 
            py-3 
            bg-[#0AC276] 
            text-black 
            rounded-lg 
            shadow-lg 
          
            transition 
            duration-300 
            transform 
            hover:scale-[1.02]
            
          "
        >
          See Positions
         <ArrowRight/>
        </button>

      </div>

    </section>
  );
}
