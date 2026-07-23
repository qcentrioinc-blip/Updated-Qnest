import { useEffect, useRef, useState } from "react";
 
import { H2, H3, H4, P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const TestimonialEHR = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const card = [
    {
      title: "Unify Clinical and Administrative Data",
      desc: " Integrate EHR documentation with scheduling and billing in a single patient record, eliminating redundant data entry and errors.",
      image: "/EHRIcons/OpenFolder.svg"
    },
    {
      title: "Automate Patient Engagement Workflows ",
      desc: " Empower patients with self-scheduling, digital check-in, and a portal for lab results, consents, and telehealth visits.",
      image: "/EHRIcons/HospitalUser.svg"
    },
    {
      title: "Streamline Revenue Management Cycle",
      desc: " From automated coding and claims submission to transparent payment tracking, ensure a healthy and visible financial workflow",
      image: "/EHRIcons/MasterPlan.svg"
    },
    {
      title: " MACRA/MIPS Support and Support Tools",
      desc: "Provide clinicians with unified dashboards, decision support tools, and real-time analytics at the point of care.",
      image: "/EHRIcons/Gear.svg"
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <> 
      <section className="dark:bg-[#042F2E] overflow-hidden">
        <div className="max-w-full  dark:bg-[#042F2E] px-[40px] md:px-[60px] xl:px-[160px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Left Heading */}
            <div className="space-y-4 transition-all duration-1000 ease-out">
              <H2 className="mt-4 dark:text-white">
                Seamlessly Integrating Care and Operations 
              </H2>
            </div>
    
            {/* Right Paragraph */}
            <div className="space-y-4 transition-all duration-1000 ease-out">
              <P className="text-black leading-relaxed">
                Unified Clinicapp connects every part of your practice, from patient intake to final billing, on HIPAA-compliant platform. We unify clinical and administrative workflows to eliminate inefficiencies and enhance care delivery. 
              </P>
            </div>
          </div>
        </div>

        {/* --- DESIGN LAYOUT ROW --- */}
        <div className="max-w-full mt-10 px-[40px] md:px-[60px] xl:px-[160px]">
          <div className="relative flex flex-col lg:flex-row items-center w-full">
            
            {/* Left Green Content Card Container */}
            <div className="w-full lg:w-[45%] relative z-10 lg:flex-shrink-0">
              {/* Asymmetrical smooth shape matching Design Image 1 */}
              <div className="w-full bg-[#00AA72] rounded-tl-[50px] rounded-br-[50px] rounded-tr-none rounded-bl-none p-8 md:p-12 min-h-[260px] flex flex-col justify-center shadow-lg">
                <div className="text-left">
                  <H3 className="text-white font-semibold text-2xl mb-4 inline-block border-b-2 border-white/40 pb-2">
                    How We Function
                  </H3>
                  <P className="text-white text-sm md:text-base opacity-95 max-w-sm leading-relaxed">
                    Ready to see the unified difference? Explore our platform in detail and discover how a seamless workflow can transform your practice. Check How We Work.
                  </P>
                </div>
              </div>

              {/* Drawer Button */}
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="absolute -top-4 right-0 w-24 h-24 z-30 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                aria-label="Open details"
              />
            </div>

            {/* Right Light Green Banner Strip (Flown naturally wide across screen) */}
            <div className="w-full lg:w-[65%] bg-[#E3F2ED] py-8 px-6 lg:pl-20 lg:pr-12 min-h-[160px] flex items-center mt-[-20px] lg:mt-0 lg:-ml-12 z-0 ">
              <H2 className="text-[#00AA72] font-medium text-xl md:text-2xl lg:text-3xl leading-tight text-left w-full">
                Our Four Pillars of Unified Practice Management
              </H2>
            </div>

          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="px-[40px] md:px-[60px] xl:px-[160px] pb-4">
          <div ref={sectionRef} className="relative mt-16 lg:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col space-y-4 lg:min-h-[300px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-10 h-10 object-contain overflow-visible"
                  />

                  <H4 className="text-[#2A2A2A] dark:text-white">
                    {item.title}
                  </H4>

                  <P className="pr-4 text-[#141414] leading-relaxed">
                    {item.desc}
                  </P>

                  {index !== 3 && (
                    <div
                      className="absolute top-0 right-0 w-[2px] bg-[#00AA72] hidden lg:block"
                      style={{
                        height: isVisible ? "90%" : "0",
                        transition: "height 2s ease-out",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </section>
    </>
  );
};

export default TestimonialEHR;