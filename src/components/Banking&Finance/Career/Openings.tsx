import { Link } from "react-router-dom";
import { H2 } from "../../../styles/Typography";
import { Calendar, MapPin, Clock, ArrowUpRight } from "lucide-react";

const Openings = () => {
  const jobs = [
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
    { title: "Sed ut perspiciatis", type: "Full-time", location: "Hyderabad", exp: "2-5 years" },
  ];

  return (
    <div className="relative w-screen bg-black text-white py-20 px-6 md:px-20">
      {/* Background pattern only for large screens */}
      <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:150px_120px] bg-[position:0_50px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10">
        <H2 className="mb-10">Sed ut perspiciatis</H2>

        <div className="overflow-hidden">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`font-quadran   border-gray-800 transition-colors duration-300 p-5 
                ${index % 2 === 0 ? "lg:hover:bg-gray-600/40" : "lg:hover:bg-gray-800/40"}
                `}
            >
              {/* Mobile + Tablet layout */}
              <div className="block lg:hidden">
                <div className="font-semibold text-lg mb-3">{job.title}</div>

                <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{job.exp}</span>
                  </div>
                </div>
<Link to="/industries/banking-and-finance/jobdescription">
                <button className="flex items-center gap-2 border border-white bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300 text-sm font-medium">
                  Apply Now <ArrowUpRight size={16} />
                </button>
                </Link>
              </div>

              {/* Desktop layout */}
              <div
                className={`hidden lg:grid lg:grid-cols-5 lg:items-center lg:gap-4`}
              >
                <div className="font-semibold text-lg">{job.title}</div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={16} />
                  <span>{job.type}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} />
                  <span>{job.exp}</span>
                </div>

                <div className="flex justify-center">
                  <a href="/industries/banking-and-finance/jobdescription">
                  <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                    Apply
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Openings;
