import { ArrowRight } from "lucide-react";
import { H2, H3, H4, P } from "../../../styles/Typography";

const careers = [
  {
    title: "DEVELOPER",
    location: "Holor in reprehenderit in erlands (On Site)",
    experience: "2-5 Years",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident, sunt in",
  },
  {
    title: "DESIGNER",
    location: "Holor in reprehenderit in erlands (On Site)",
    experience: "2-5 Years",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident, sunt in",
  },
  {
    title: "HR MANAGER",
    location: "Holor in reprehenderit in erlands (On Site)",
    experience: "2-5 Years",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident, sunt in",
  },
  {
    title: ".NET ENGINEER",
    location: "Holor in reprehenderit in erlands (On Site)",
    experience: "2-5 Years",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident, sunt in",
  },
];

const JobListing = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-5">
      <div className="max-w-7xl mx-auto px-[20px] lg:px-0">
        {/* Section Header */}
        <div className="mb-16">
          <H2 className="text-[#CCCCCC]">Sed ut perspiciatis</H2>
          <H2 className="text-[#F99526] mt-1">Unde Seduo ut perspiciatis</H2>
        </div>

        {/* Careers List */}
        <a href="/industries/high-tech/jobdescription">
        <div className="flex flex-col divide-y divide-[#2A2A2A]/60">
          {careers.map((job, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 sm:grid-cols-[1fr_2fr_auto] sm:items-start py-10 gap-6 transition-all duration-300
             hover:bg-gradient-to-r hover:from-[#F99526]/20 hover:to-[#4A4A4A]/40"
            >
              {/* Mobile Layout */}
              <div className="flex flex-col sm:hidden">
                {/* Title + Arrow */}
                <div className="flex justify-between items-center">
                <H3 className="group-hover:text-[#F99526] transition-all duration-300">
                  {job.title}
                </H3>
                  <div className="w-9 h-9 rounded-full bg-[#fffdfd] flex items-center justify-center hover:bg-[#F99526] transition-all duration-300 group">
                    <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
                  </div>
                </div>

                {/* Details stacked below title */}
                <div className="mt-3 space-y-1 text-left">
                  <H4 className="font-semibold text-[#CCCCCC]">
                    {job.location}
                  </H4>
                  <H4 className="font-semibold text-[#CCCCCC]">
                    {job.experience}
                  </H4>
                  <P className="text-gray-400 text-sm leading-relaxed">
                    {job.description}
                  </P>
                </div>
              </div>

              {/* Tablet/Desktop Layout (unchanged) */}
              <div className="hidden sm:block">
              <H3 className="group-hover:text-[#F99526] transition-all duration-300">
                {job.title}
              </H3>
              </div>

              <div className="hidden sm:block sm:max-w-lg text-left space-y-2 sm:col-start-2 sm:col-span-1">
                <H4 className="font-semibold text-[#CCCCCC]">
                  {job.location}
                </H4>
                <H4 className="font-semibold text-[#CCCCCC]">
                  {job.experience}
                </H4>
                <P className="text-gray-400 text-sm leading-relaxed">
                  {job.description}
                </P>
              </div>
              <div className="hidden sm:flex sm:items-start sm:justify-end">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center 
                transition-all duration-300 group-hover:bg-violet-600">
<ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
                </div>
              
              </div>
            </div>
          ))}
        </div>
        </a>
      </div>
    </section>
  );
};

export default JobListing;
