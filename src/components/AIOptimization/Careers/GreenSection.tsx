import {  H2, H3 } from "../../../styles/Typography";

export default function GreenSection() {
  return (
    <section className="w-full bg-[#0AC276] py-16 px-6 xl:pl-30">
      <div className="max-w-8xl mx-10 grid grid-cols-1 md:grid-cols-[0.5fr_2fr] gap-10 ">

        {/* Left small heading */}
        <H3
         className="text-white text-sm font-medium">
        Apply
        </H3>

        {/* Right main text */}
        <H2
         className="text-[#020059] ">
          Join the top Cloud AI team and work with the best on CloudDIET and grow your skills fast. 
        </H2>

      </div>
    </section>
  );
}
