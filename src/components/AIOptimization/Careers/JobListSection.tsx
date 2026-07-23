import { ArrowUpRight } from "lucide-react";
import { H2, H4 } from "../../../styles/Typography";

const jobs = [
  {
    title: "Senior Social Media Manager",
    type: "Full Time",
    experience: "5-8 Years",
    location: "Hyderabad",
  },
  {
    title: "Senior Social Media Manager",
    type: "Full Time",
    experience: "5-8 Years",
    location: "Hyderabad",
  },
  {
    title: "Senior Social Media Manager",
    type: "Full Time",
    experience: "5-8 Years",
    location: "Hyderabad",
  },
  {
    title: "Senior Social Media Manager",
    type: "Full Time",
    experience: "5-8 Years",
    location: "Hyderabad",
  },
  {
    title: "Senior Social Media Manager",
    type: "Full Time",
    experience: "5-8 Years",
    location: "Hyderabad",
  },
];

export default function JobListSection() {
  return (
    <section className="w-full bg-[#E9FFF7] py-16" id="JobListSection">
      <div className="max-w-8xl mx-10">

        {/* -------------------- HEADING -------------------- */}
        <H2 className="text-[#020059] mb-10">Find your next role</H2>

        {/* -------------------- JOB CARDS -------------------- */}
        <a href="/industries/cloud-finops-ai/jobs">

        <div className="space-y-4">
          {jobs.map((job, index) => (
            
            
            <div
              key={index}
              className="
                group w-full rounded-sm  hover:rounded-full px-6 py-8 
                flex flex-col md:flex-row md:items-center justify-between gap-4
                bg-[#0B0B0F] text-white
                transition-all duration-200 ease-in-out
                hover:bg-[#F3F3F3] hover:text-black
              "
            >
              {/* Title */}
              <H4
                className="
                  
                  text-[#00B140]
                  group-hover:text-[#5A63EC]
                  transition-all duration-300
                "
              >
                {job.title}
              </H4>

              {/* Job Details */}
              <div className="flex gap-10 md:gap-20">
                <p className="transition-colors duration-300 group-hover:text-black">
                  {job.type}
                </p>
                <p className="transition-colors duration-300 group-hover:text-black">
                  {job.experience}
                </p>
                <p className="transition-colors duration-300 group-hover:text-black">
                  {job.location}
                </p>
              </div>

              {/* Arrow Button */}
              <button
                className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  bg-white text-black
                  transition-all duration-300
                  group-hover:bg-black group-hover:text-white
                "
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        
        </a>

        {/* -------------------- BOTTOM SECTION -------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          {/* Left Text */}
          <H2 className="text-[#020059] leading-snug">
           Can’t find a matching <br/> role to your skills? 
          </H2>

          {/* Right Section */}
          <div className="flex flex-col justify-between">
            <p className="text-2xl font-quadran   text-[#141414] mb-6">
            Tell us your unique skills and experience to join our growing AI cloud team. 
            </p>

            <button className="bg-[#0AC276] text-[#2A2A2A] px-6 py-3 rounded-lg font-medium flex items-center gap-2 w-fit hover:bg-[#b0f5d8] transition">
              Apply Here <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
