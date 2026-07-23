"use client";

import { H2, H4, P } from "../../../styles/Typography";

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-20 px-10">
      <div className="max-w-8xl mx-10 grid grid-cols-1 xl:grid-cols-2 gap-0">

        {/* LEFT CONTENT */}
        <div>
          <H2 className="text-[#020059] leading-tight mb-10 max-w-3xl whitespace-nowrap">
          We Bring Together<br/> Top Talent & Experience
          </H2>

          {/* Reusable Item */}
          <div className="mb-10">
            <H4 className=" text-[#6c6aff] mb-2">Our Mission</H4>
            <P className="  leading-relaxed">
             Build AI cloud solutions like CloudDIET to cut enterprise <br/> Azure costs safely and fast. 
            </P>
            <div className="border-b border-[#d0f5e6] mt-4"></div>
          </div>

          <div className="mb-10">
            <H4 className=" text-[#6c6aff] mb-2">Training   Progression</H4>
            <P className="  leading-relaxed">
             Qcentrio Academy runs 100+ yearly trainings on cloud,<br /> AI, Python, React for skill growth
              
            </P>
            <div className="border-b border-[#d0f5e6] mt-4"></div>
          </div>

          <div className="mb-10">
            <H4 className=" text-[#6c6aff] mb-2">Our Culture</H4>
            <P className="  leading-relaxed">
            Collaborative teams own projects, share knowledge,<br/> and get equal chances for career advancement here. 
            </P>
            {/* <div className="border-b border-[#d0f5e6] mt-4"></div> */}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center">
          <img
            src="/AI/Careers/img4.png"
            alt="Team celebration"
            className="w-full max-w-lg h-full object-cover shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
