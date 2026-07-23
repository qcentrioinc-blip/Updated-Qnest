import { useState } from "react";
import { H1, H4, P } from "../../../styles/Typography";
import AIFooter from "../../HomePage/AIOptimization/AIFooter";
import AINavbar from "../Navbar/AINavbar";

export default function JobDetails() {
  const [activeTab, setActiveTab] = useState<"overview" | "application">(
    "overview"
  );

  return (
     <>
     <AINavbar/>
    <section className="w-full bg-white text-[#0B0B0F] px-6 md:px-10 lg:px-20 py-20 pt-20 xl:pt-36">
      {/* ---------- HEADER ---------- */}
      <H1 className=" text-[#0AC276] mb-4">
        Senior Social Media <br/> Manager
      </H1>

      {/* ---------- MAIN GRID ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
        
        {/* ===================== LEFT SIDE PANEL ===================== */}
        <aside className="lg:sticky lg:top-20 h-fit space-y-8">

          {/* Block 1 */}
          <div>
            <H4 className="text-[#020059] mb-2">Location</H4>
            <P>Hyderabad, Telangana</P>
            <div className="h-[1px] w-full bg-[#00B140] mt-2"></div>
          </div>

          {/* Block 2 */}
          <div>
            <H4 className="text-[#020059] mb-2">Employment type</H4>
            <P>Full Time</P>
            <div className="h-[1px] w-full bg-[#00B140] mt-2"></div>
          </div>

          {/* Block 3 */}
          <div>
            <H4 className="text-[#020059] mb-2">Work experience</H4>
            <P>2–5 Years</P>
            <div className="h-[1px] w-full bg-[#00B140] mt-2"></div>
          </div>

          {/* Block 4 */}
          <div>
            <H4 className="text-[#020059] mb-2">Department</H4>
            <P>PR</P>
            <div className="h-[1px] w-full bg-[#00B140] mt-2"></div>
          </div>

          {/* Block 5 */}
          <div>
            <H4 className="text-[#020059] mb-2">Location type</H4>
            <P>On-Site</P>
            <div className="h-[1px] w-full bg-[#00B140] mt-2"></div>
          </div>

          {/* Share buttons */}
          <div className="pt-4">
            <H4 className="text-[#020059] mb-3">Share job</H4>
            <div className="flex gap-4 text-xl">
              <i className="ri-twitter-x-line"></i>
              <i className="ri-whatsapp-line"></i>
              <i className="ri-linkedin-fill"></i>
            </div>
          </div>
        </aside>

        {/* ===================== RIGHT SIDE CONTENT ===================== */}
        <div className="max-w-4xl">

          {/* ---------- TABS (Aligned with Summary) ---------- */}
          <div className="grid grid-cols-2 border-b border-gray-300 mb-10 text-center">
  
                {/* Left Half */}
                <button
                    onClick={() => setActiveTab("overview")}
                    className={`
                    py-3 text-3xl font-semibold w-full font-quadran  
                    ${activeTab === "overview" 
                        ? "text-[#020059] border-b-2 border-black" 
                        : "text-[#666666]"
                    }
                    `}
                >
                    Overview
                </button>

                {/* Right Half */}
                <button
                    onClick={() => setActiveTab("application")}
                    className={`
                    py-3 text-3xl font-semibold w-full font-quadran  
                    ${activeTab === "application" 
                        ? "text-[#020059] border-b-2 border-black" 
                        : "text-[#666666]"
                    }
                    `}
                >
                    Application
                </button>

                </div>


                        {/* ---------- TAB CONTENT ---------- */}
                        {activeTab === "overview" && <OverviewContent />}
                        {activeTab === "application" && <ApplicationForm />}
                        </div>
                    </div>
                    </section>
                   
                    <AIFooter/>
                    </>
                    
                );
                }


/* ==========================================================
   OVERVIEW CONTENT
========================================================== */

const OverviewContent = () => {
  return (
    <div className="space-y-6 leading-relaxed text-[#020059]">
      <H4 className=" text-[#020059]">Summary</H4>

      <P>
        Rite Due is our reactive marketing service that gives clients the ability
        to get involved in trending moments. As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications. As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications. As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications. As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.
        
      </P>

      <P>
        As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.
        As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.
        As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.As a Digital PR Executive in the reactive PR team, you will be responsible for
        creating standout Digital PR stories for clients by landing placements and
        links in top-tier publications.
      </P>

     

      <H4 className="text-[#020059] mt-10">You have</H4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Experience in PR (agency or in-house)</li>
        <li>Strong communication & storytelling</li>
        <li>Understanding of digital media</li>
        <li>Experience writing content & press releases</li>
        <li>Experience pitching journalists</li>
      </ul>

      <H4 className="text-[#020059] mt-10">Responsibilities</H4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Create high-quality media coverage</li>
        <li>Monitor trends & news</li>
        <li>Write compelling digital content</li>
        <li>Collaborate with clients</li>
        <li>Pitch journalists</li>
      </ul>

      <H4 className="text-[#020059] mt-10">What we can offer you</H4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Competitive salary</li>
        <li>Training and development</li>
        <li>Creative work culture</li>
        <li>Growth opportunities</li>
      </ul>
    </div>
  );
};

/* ==========================================================
   APPLICATION FORM
========================================================== */

const ApplicationForm = () => {
  return (
    <form className="space-y-6 font-quadran  ">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-4 border rounded-xl outline-none"
      />

      <input
        type="text"
        placeholder="Mobile Number"
        className="w-full p-4 border rounded-xl outline-none"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-4 border rounded-xl outline-none"
      />

      <div className="flex justify-between items-center border border-green-700 rounded-lg px-4 py-3">
            <span className="text-gray-500">Resume</span>
            <label
                htmlFor="resumeUpload"
                className="bg-green-100 text-green-700 font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-green-200 transition duration-150"
            >
                Upload
            </label>
            <input type="file" id="resumeUpload" className="hidden" />
        </div>

      <textarea
        placeholder="Tell us a little about yourself"
        rows={5}
        className="w-full p-4 border rounded-xl outline-none"
      ></textarea>

      <button
        type="submit"
        className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2"
      >
        SUBMIT <span>↗</span>
      </button>
    </form>
  );
};
