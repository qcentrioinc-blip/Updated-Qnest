"use client";
import { Linkedin, Twitter } from "lucide-react";
import { H2, H4, P } from "../../../styles/Typography";

const JobDetailsSection = () => {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-gray-200 pt-12  mt-[60px]">
      <div className="max-w-8xl mx-10">
        {/* --- Sticky Full-Width Title Bar --- */}
        <div
          className="sticky top-[0px] z-30 bg-[#0A0A0A] py-4  flex flex-col lg:flex-row 
          items-start lg:items-center justify-between gap-4"
        >
          <H2 className="text-[#F99526] whitespace-nowrap">Frontend Developer</H2>

          {/* Right side button & logos (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#contactForm">
            <button className="bg-[#F99526] text-white px-10 py-2 rounded-md hover:bg-orange-600 transition">
              Apply Now
            </button>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="#"
                className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:mt-16 lg:pr-28">
          {/* Left side - Job details */}
            <div className="mt-2">
              <P className="mb-6 text-[#CCCCCC]">
                About Qnest:
                Qnest is a fast-growing software services company dedicated to delivering financial, mobile apps, AI, and other cutting-edge tech solutions. Our team thrives on innovation, creativity, and a commitment to excellence. The majority of our clients are internationally located. Join us in revolutionizing the software industry with your skills and expertise!
                Position Overview:
                We are seeking a highly skilled Angular Developer to join our growing development team. In this role, you will take ownership of building dynamic and responsive user interfaces, contributing to the complete software development lifecycle, and ensuring a seamless user experience for our client applications.
              </P>

              <H4 className="text-[#F99526] mb-3">Responsibilities</H4>
              <ul className="list-disc list-inside space-y-2 mb-6 text-[#CCCCCC]">
                <li>
                  Develop responsive and user-friendly web interfaces using React
                  and modern JavaScript frameworks.
                </li>
                <li>
                  Collaborate with design and backend teams to implement new
                  features.
                </li>
                <li>Ensure performance, scalability, and cross-browser support.</li>
                <li>Write clean, maintainable, and reusable code.</li>
                <li>Participate in code reviews and team discussions.</li>
              </ul>

              <H4 className="text-[#F99526] mb-3">Requirements</H4>
              <ul className="list-disc list-inside space-y-2 mb-6 text-[#CCCCCC]">
                <li>Bachelor’s degree in Computer Science or related field.</li>
                <li>2+ years of experience in frontend development.</li>
                <li>Proficiency in React, TypeScript, and TailwindCSS.</li>
                <li>Strong understanding of responsive and accessible design.</li>
                <li>Excellent problem-solving and communication skills.</li>
              </ul>

              <H4 className="text-[#F99526] mb-3">Benefits</H4>
              <ul className="list-disc list-inside space-y-2 mb-6 text-[#CCCCCC]" >
                <li>Flexible working hours.</li>
                <li>Remote-friendly environment.</li>
                <li>Professional growth opportunities.</li>
                <li>Collaborative team culture.</li>
                <li>Competitive compensation.</li>
              </ul>
            </div>
          

          {/* Right side - Sticky Job Info */}
          <div className="lg:w-[340px] flex-shrink-0 relative">
              {/* Vertical gray line + Job Info */}
              <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-500" />

            <div className="lg:sticky lg:top-[150px] space-y-6">
              
              <div className="relative pl-16">
                {/* Vertical line */}

                {/* Job Info */}
                <div className="space-y-10">
                  <div>
                    <H4>Workplace Type</H4>
                    <P className="text-[#CCCCCC]">Hybrid</P>
                  </div>
                  <div>
                    <H4 >Employment Type</H4>
                    <P className="text-[#CCCCCC]">Full-time</P>
                  </div>
                  <div>
                    <H4>Experience</H4>
                    <P className="text-[#CCCCCC]">2–4 years</P>
                  </div>
                  <div>
                    <H4>Location</H4>
                    <P className="text-[#CCCCCC]">Bangalore, India</P>
                  </div>
                  <div>
                    <H4>Posted On</H4>
                    <P className="text-[#CCCCCC]">November 2, 2025</P>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Mobile Sticky Bar --- */}
        <div className="lg:hidden sticky bottom-0 left-0 right-0 bg-[#111] border-t border-gray-800 flex items-center justify-between px-6 py-3 z-30 mt-10">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition"
            >
              <Twitter size={22} />
            </a>
          </div>
          <button className="bg-[#F99526] text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsSection;
