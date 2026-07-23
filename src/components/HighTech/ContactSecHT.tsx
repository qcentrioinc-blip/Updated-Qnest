"use client";

import { H2 } from "../../styles/Typography";
import { Submit } from "../../styles/Button";

export default function ContactSecHT() {
  return (
    <section className="w-full bg-white">
      <div className="w-full flex flex-col lg:flex-row">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 h-[260px] sm:h-[360px] md:h-[420px] lg:h-auto relative">
          <img
            src="/HighTech/Contact/img1.png"
            alt="HighTech Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full xl:w-1/2 bg-[#F79520] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 md:py-20">
          <H2 className="text-white leading-tight mb-8 text-3xl sm:text-4xl lg:text-5xl">
            An ecosystem to be part of. Stay in.
          </H2>

          {/* INPUT FIELD */}
          <div className="w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 sm:px-6 py-3 sm:py-4 mb-6 bg-transparent border border-black/40 rounded-full placeholder-black text-black text-base sm:text-lg focus:outline-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <Submit className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            SUBMIT
          </Submit>
        </div>

      </div>
    </section>
  );
}
