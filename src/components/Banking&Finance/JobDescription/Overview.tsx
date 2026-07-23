
import { H2, P, } from "../../../styles/Typography";
import linkedinLogo from "/linkedIn.png";
import xLogo from "/Twitter.png";
import { useEffect,useRef,useState } from "react";
import { ArrowUpRight,ArrowRight } from "lucide-react";
 
const OverviewSection = () => {
   const [showBar, setShowBar] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Show bar only when this section is in view
  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBar(entry.isIntersecting),
      { threshold: 0.3 }  
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, []);


  return (
    <section 
    
      ref={sectionRef}
      className="bg-[#E5F0FF] -mt-10 w-full py-20  overflow-visible"
    >
      <div className="max-w-8xl  flex flex-col lg:flex-row  mx-4 px-4 justify-between md:px-8 md:mx-10">
        
        {/* Left Section */}
        <div className="max-w-4xl mt-10">
          <div className="mb-12">
            <H2 className="mb-4">Role Overview:</H2>
            <P className="text-[#141414] md:py-6 text-justify leading-tight ">
              We are seeking a highly organized and customer-focused senior content specialist
              to join our team. The ideal candidate will serve as the first point of contact
              for clients, visitors, and employees, ensuring a welcoming and professional
              environment. This role requires excellent communication, multitasking, and
              problem-solving skills.
            </P>
          </div>

          <div className="mb-12">
            <H2 className="mb-4">Roles and Responsibilities:</H2>
            <ul className="list-disc ml-6 md:py-6 leading-tight  text-[#141414]">
              <li>Greet and assist visitors, clients, and staff in a friendly and professional manner.</li>
              <li>Manage incoming calls, emails, and correspondence efficiently.</li>
              <li>Handle check-ins, check-outs, and general inquiries at the front desk.</li>
              <li>Maintain the reception area, ensuring it is clean, organized, and presentable.</li>
              <li>Manage scheduling, appointments, and meeting room bookings.</li>
              <li>Support administrative tasks such as data entry, filing, and record maintenance.</li>
              <li>Coordinate with departments to ensure smooth operations.</li>
              <li>Monitor and manage office supplies, placing orders when necessary.</li>
            </ul>
          </div>

          <div className="mb-12">
            <H2 className="mb-4">Key Skills & Competencies:</H2>
            <ul className="list-disc md:py-6 ml-6 text-[#141414 ] leading-tight ">
              <li>Proven experience in a front office or similar role.</li>
              <li>Exceptional interpersonal and communication skills.</li>
              <li>Proficiency in Microsoft Office Suite and related software.</li>
              <li>Strong organizational and multitasking abilities.</li>
              <li>Ability to maintain a positive attitude under pressure.</li>
              <li>High level of professionalism and discretion.</li>
            </ul>
          </div>

          <div className="mb-12">
            <H2 className="mb-4">Qualifications & Skillsets:</H2>
            <ul className="list-disc ml-6 md:py-6 leading-tight  text-[#141414]">
              <li>Bachelor’s degree in Business Administration or related field.</li>
              <li>Minimum 1–4 years of relevant experience.</li>
              <li>Experience in IT or service industry is an advantage.</li>
              <li>Familiarity with office management systems and procedures.</li>
            </ul>
          </div>

          <div>
            <H2 className="mb-4">Why Join Us?</H2>
            <P className="  text-justify leading-tight  text-[#141414]">
              At Qnest, we are at the forefront of digital transformation, helping businesses
              across the globe achieve operational excellence through innovative technology
              solutions. You will play a critical role in shaping our future and driving impactful
              solutions that make a difference in our customers’ success stories. We encourage
              dynamic leaders with a passion for technology and business transformation to apply.
            </P>
            <P className="  text-justify text-[#141414] ">
              Arche Global Private limited is an equal opportunity employer. All qualified applicants
              will receive consideration for employment without regard to ancestry, color, gender,
              identity, or any other characteristic protected by applicable laws.
            </P>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-start mt-10 sticky top-24 self-start w-[280px]">
         
          <button
  onClick={() => {
    const section = document.getElementById("uploadResumeSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="group flex items-center justify-center gap-2 w-[250px] h-[48px]
             px-[24px] py-[12px] rounded-[8px] font-quicksand font-bold text-[16px]
             border-2 border-[#141414] bg-black text-white shadow-md
             transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
>
  SUBMIT APPliCATION
  <span className="relative flex items-center h-[20px] w-[20px]">
    <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
    <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </span>
</button>


          <div className="mt-8 space-y-4 items-start">
            <P className="text-[#141414] gray-600 font-semibold">Share Job</P>
            <div className="flex items-start gap-4">
              <img src={linkedinLogo} alt="linkedIn" className="w-8 h-8 cursor-pointer hover:opacity-80" />
              <img src={xLogo} alt="X" className="w-8 h-8 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar (visible only when OverviewSection is in view) */}
      {showBar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[50] bg-white border-t border-gray-300 flex justify-end gap-4 items-center  
         shadow-[0_-2px_6px_rgba(0,0,0,0.1)] transition-transform duration-500">
          <div className="flex gap-4">
            <img
              src={linkedinLogo}
              alt="linkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
            <img
              src={xLogo}
              alt="X"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </div>
          <button
            className="group flex items-center justify-center gap-2 px-[20px] py-[10px] rounded-[8px]
                       font-quicksand font-bold text-[15px] border-2 border-[#141414]
                       bg-black text-white shadow-md
                       transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-black"
          >
            Apply Now
            <span className="relative flex items-center h-[20px] w-[20px]">
              <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </button>
          <div className="h-20"></div>
        </div>
        
      )}


    </section>
  );
};

export default OverviewSection;