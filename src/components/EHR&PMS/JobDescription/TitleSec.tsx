import React from 'react';
import { H1, P } from '../../../styles/Typography';

const JobHeaderBanner: React.FC = () => {
  const jobData = {
    location: "Hyderabad, Telangana",
    title: "Front Desk Office Executive",
    experience: "1 - 4 Years",
  };

 

  return (
    <section
      className="relative w-full   h-[71vh] md:h-[51vh] xl:h-screen overflow-hidden flex items-center justify-center"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 249, 243, 0.5) 0%, rgba(200, 255, 215, 0.5) 100%)",
      }}
    >
      <div
        className="
          w-full 
          max-w-8xl  mx-10
          flex 
          flex-col 
          justify-center
          sm:items-start 
          sm:text-left
          items-center 
          text-center
          md:max-w-6xl
          sm:gap-0
          gap-2
        "
      >
        {/* Location */}
        <P className="text-gray-600 tracking-wide mb-2 sm:mb-3">
          {jobData.location}
        </P>

        {/* Title */}
        <H1 className="text-green-700 leading-tight mb-4 sm:mb-6">
          {jobData.title}
        </H1>

        {/* Experience */}
        <P className="text-gray-700 mb-8 sm:mb-10">
          Experience :{" "}
          <span className="font-semibold text-green-800">
            {jobData.experience}
          </span>
        </P>
        {/* Button */}
        <button
  onClick={() => {
    document.getElementById("ApplicationSec")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-green-800 hover:bg-green-700 transition duration-150 ease-in-out uppercase tracking-wider whitespace-nowrap"
>
  SUBMIT APPLICATION
  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</button>

        
      </div>
    </section>
  );
};

export default JobHeaderBanner;
