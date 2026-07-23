"use client";


import { Link } from "react-router-dom";
import { H2, P } from "../../../styles/Typography";


export default function ImgSec() {
  return (
    <section className="max-w-full mx-auto  px-0">
      <div
        className="relative overflow-hidden  min-h-[320px]  flex items-center"
        style={{
          backgroundImage: "url('/digital.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text visibility (optional but recommended) */}
        {/* <div className="absolute inset-0 bg-black/20 rounded-[32px]" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-8 md:px-16 py-16 text-white">
          <H2 className="leading-tight mb-6">
            Ready to Transform Your<br />
             Business Operations
          </H2>

          <P className="mb-8 max-w-lg text-white">
            Partner with Qnest to modernize your systems, automate complex processes, and scale operations with AI-enabled solutions trusted by enterprises across banking, healthcare, cloud, and nutraceuticals. 
          </P>

          <Link to="/contact">
            <button className="group flex cursor-pointer items-center gap-2 border border-white/70 text-white px-6 py-3 rounded-xl text-sm hover:bg-white hover:text-black transition-all duration-300">
             Get Started
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                ↗
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}