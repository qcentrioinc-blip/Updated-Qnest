import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { H2 } from "../../../styles/Typography";

const ApplicationSec: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1280);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="ApplicationSec" className="relative w-full min-h-screen bg-gradient-to-r from-[#E6FFEF] to-[#C8FFD7] flex items-center justify-center py-10 px-4">

      <div className={`max-w-7xl w-full grid grid-cols-1 ${isDesktop ? "grid-cols-2" : ""} items-center gap-3 mt-10`}>

        {/* IMAGE FIRST ON DESKTOP */}
        {isDesktop && (
          <div className="relative flex justify-center lg:justify-start items-center">
            <div className="w-full h-full flex justify-center lg:justify-start">
              <img
                src="/EHR-PMS/ApplicationForm/shape1.png"
                alt="Application form illustration"
                className="w-full sm:w-full md:w-[80%] lg:w-full max-w-[1000px] h-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* FORM */}
        <div className={`lg:col-span-1 flex ${isDesktop ? "justify-center lg:justify-start" : "justify-center"} items-center`}>
          <div className={`bg-white shadow-md rounded-2xl p-8 sm:p-10 lg:p-12 w-full max-w-3xl ${!isDesktop ? "min-h-[620px] sm:min-h-[680px]" : ""}`}>
            <H2 className="text-green-900 mb-6 text-center lg:text-left">
              Front Desk Office Executive
            </H2>

            <form className="space-y-6">
              <input type="text" placeholder="Name" className="w-full border border-green-400 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-150" />
              <input type="email" placeholder="Email" className="w-full border border-green-400 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-150" />
              <div className="flex justify-between items-center border border-green-400 rounded-lg px-4 py-3">
                <span id="fileName" className="text-gray-500">Resume</span>
                <label htmlFor="resumeUpload" className="bg-green-100 text-green-700 font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-green-200 transition duration-150">
                  Upload
                </label>
                <input type="file" id="resumeUpload" className="hidden" onChange={(e) => {
                  const file = e.target.files?.[0];
                  document.getElementById('fileName')!.textContent = file ? file.name : 'Resume';
                }} />
              </div>
              <textarea placeholder="Tell us about yourself" rows={4} className="w-full border border-green-400 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-150" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300">
                APPLY NOW <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* IMAGE BELOW FOR MOBILE/TABLET */}
        {!isDesktop && (
          <div className="relative flex justify-center mt-10">
            <img
              src="/EHR-PMS/ApplicationForm/shape1.png"
              alt="Application form illustration"
              className="w-full sm:w-full md:w-[80%] max-w-[700px] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplicationSec;
