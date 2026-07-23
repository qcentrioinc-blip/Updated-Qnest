import { useEffect, useRef, useState } from "react";
import { H2, H4, P } from "../../../styles/Typography";

const DATA = [
  {
    id: 1,
    title: "Streamline Care & Management ",
    description: "Unified Clinicapp puts clinical efficiency first. Our EHR is designed around the physician’s workflow with smart templates, integrated decision support, and seamless access to patient history, all to reduce charting time and support better, faster clinical decisions at the point of care.",
    items: [
      {
        title: "Simplify Clinical Management- From Patient Encounter to Complete Note ",
        content:
          " We connect every part of the visit into one intuitive flow, from vitals and history to assessment and coding, ensuring nothing is missed.",
        image: "/Imagee1.webp",
      },
      {
        title: "Integrate Point-of-Care Tools for Smarter, Faster Diagnoses",
        content:
          " Access e-prescribing (EPCS ready), lab orders, and clinical alerts directly within the patient’s chart to support accurate and timely care decisions without switching screens.",
        image: "/Imagee1.webp",
      },
      {
        title: "Enable Seamless Care Coordination with a Unified Patient Timeline",
        content:
          "View the patient’s full history—medications, labs, and past visits—in one chronological view, providing complete context for every clinical decision and note.",
        image: "/Imagee1.webp",
      },
    ]
  },
  {
    id: 2,
    title: "Simplify Patient Interaction",
    description: "From first contact to follow-up, manage the entire patient lifecycle on one platform. Reduce front-desk tasks and empower patients with self-service tools.",
    items: [
      {
        title: " Digital Intake & Registration Before the Visit",
        content:
          "Allow new and existing patients to complete forms, provide history, and submit digital consents securely online before they arrive",
        image: "/EHR-PMS/Image2.webp",
      },
      {
        title: "Streamlined Check-In & Status Tracking",
        content:
          "Patients can check themselves in via kiosk or phone. Staff gets real-time updates on room status and patient flow to reduce wait times.",
        image: "/EHR-PMS/Image2.webp",
      },
      {
        title: "Centralize Communication and Task Management",
        content:
          " Assign, track, and complete patient follow-ups, reminders, and staff messages from one unified dashboard to ensure nothing gets missed.",
        image: "/EHR-PMS/Image2.webp",
      },
    ]
  },
  {
    id: 3,
    title: " Turn Claims into Revenue, Faster ",
    description: "Streamline your entire revenue cycle with integrated billing tools. Submit clean claims, track payments in real time, and reduce denials for a healthier bottom line.",
    items: [
      {
        title: "Integrated Revenue Cycle Management",
        content:
          " Automate coding, EDI 837 claims submission and EDI 835 remittance processing from a single platform, ensuring a seamless financial workflow from patient visit to final reimbursement. ",
        image: "/EHR-PMS/Image3.webp",
      },
      {
        title: "Automated Claims Submission & Payment Tracking",
        content:
          " Submit electronic claims directly, monitor their status on a dashboard, and track remittances to simplify your financial workflow.",
        image: "/EHR-PMS/Image3.webp",
      },
      {
        title: "Transparent Patient Billing Portal",
        content:
          "Patients can view balances, payment history, and detailed invoices online, reducing front-desk calls and speeding up collections.",
        image: "/EHR-PMS/Image3.webp",
      },
    ]
  },
  {
    id: 4,
    title: "Optimize Team and Schedule",
    description: " Efficiently manage provider schedules, staff tasks, and resource allocation from a single, dynamic dashboard to maximize productivity.",
    items: [
      {
        title: "Leverage Smart, Color-Coded Calendar Scheduling for Providers",
        content:
          "Visualize and manage daily appointments with drag-and-drop rescheduling and status indicators to optimize provider time and reduce conflicts.",
       image: "/EHR-PMS/Image4.webp",
      },
      {
        title: " Enable Real-Time Staff Coordination with Role-Based Task Lists",
        content:
          "Assign and track clinical and administrative tasks with alerts and due dates, ensuring smooth handoffs and accountability across your team.",
       image: "/EHR-PMS/Image4.webp",
      },
      {
        title: " Streamline Patient Flow with Live Room and Status Tracking",
        content:
          " Monitor patient movement from check-in to discharge in real-time, allowing for instant room reassignments and reduced patient wait times.",
       image: "/EHR-PMS/Image4.webp",
      },
    ]
  },
  {
    id: 5,
    title: "Make Confident, Data Driven Decisions  ",
    description: "Gain clear insights into your practice’s clinical and financial performance with unified dashboards and customizable reports for smarter planning.",
    items: [
      {
        title: "   Unified Clinical & Financial Dashboards",
        content:
          "View key metrics on appointments, billing, and patient care together in one central, easy-to-read visual dashboard.",
       image: "/EHR-PMS/Image5.webp",
      },
      {
        title: " Customizable Reporting for Any Need",
        content:
          " Easily create, filter, and export reports on appointments, revenue, or clinical outcomes with just a few clicks.",
        image: "/EHR-PMS/Image5.webp",
      },
      {
        title: " Live Performance & Health Analytics",
        content:
          "Monitor practice health with real-time dashboards tracking KPIs like patient volume, revenue, and provider efficiency.",
        image: "/EHR-PMS/Image5.webp",
      },
    ]
  },
];

export default function Management() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  // const [firstCardWidth, setFirstCardWidth] = useState(85);
  const [activeItem, setActiveItem] = useState<Record<number, number | null>>(
    Object.fromEntries(DATA.map(card => [card.id, 0]))
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Start expanding as soon as the section enters viewport from bottom
      // Complete expansion before the first card reaches its sticky position
      const sectionTop = sectionRect.top;
      
      // When sectionTop is at viewportHeight, section just entering (progress = 0)
      // When sectionTop is at viewportHeight * 0.3, expansion complete (progress = 1)
      const startPoint = viewportHeight; // Section bottom touches viewport bottom
      const endPoint = viewportHeight * 0.3; // Section well into view
      
      // let scrollProgress = 0;
      
      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        // Calculate progress as section moves from bottom to top
        // scrollProgress = (startPoint - sectionTop) / (startPoint - endPoint);
        // scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      } else if (sectionTop < endPoint) {
        // Section is past the expansion point
        // scrollProgress = 1;
      }
      
      // Interpolate width from 85 to 100
      // const newWidth = 85 + (scrollProgress * 15);
      // setFirstCardWidth(newWidth);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (cardId: number, index: number) => {
    setActiveItem((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === index ? null : index,
    }));
  };

  return (
    <section ref={sectionRef} className="relative">
      <div className="max-w-full ">
        {DATA.map((card, i) => {
          const imageOnRight = i % 2 === 0;
          const activeIndex = activeItem[card.id];

          return (
            <div
              key={card.id}
              ref={i === 0 ? firstCardRef : null}
           className="sticky top-0  h-full  "

 


            >
      <div
  className={`${
    i % 2 === 0 ? "bg-white " : "bg-[#FBF7EF] "
  } h-full rounded-t-[6rem] transition-all duration-700 ease-out 
  shadow-[0_0px_10px_px_rgba(0,0,0,0.25)]`}

  // style={
  //   i === 0
  //     ? { maxWidth: `${firstCardWidth}vw` }
  //     : { maxWidth: "100vw" }
  // }
>

                <div className="flex flex-col lg:flex-row gap-12 py-8 px-[40px] md:px-[60px] xl:px-[160px]">
                  {/* IMAGE + TITLE */}
                  <div
                    className={`w-full lg:w-1/2 flex flex-col gap-6 ${
                      imageOnRight ? "lg:order-2 " : "lg:order-1  "
                    }`}
                  >
                    <H2 className=" font-light text-[#00AA72]   ">
                      {card.title}
                    </H2>

                    <P>{card.description}</P>

                    <div className="relative bg-gray-100 border-14 border-[#00AA72] rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                      {typeof activeIndex === "number" ? (
                        <img
                          src={card.items[activeIndex].image}
                          alt=""  
                          className="w-full h-full  object-fit transition-opacity duration-300"
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">Select an item</span>
                      )}
                    </div>
                  </div>

                  {/* ACCORDION */}
                  <div
                    className={`w-full lg:w-1/2 flex items-start xl:pt-20 ${
                      imageOnRight ? "lg:order-1 " : "lg:order-2"
                    }`}
                  >
                    <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
                      {card.items.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                          <div
                            key={index}
                            className="border-b space-y-4 md:my-6 border-[#3D8D7A] pb-4"
                          >
                            <button
                              onClick={() => toggleAccordion(card.id, index)}
                              className="w-full flex items-start gap-4 text-left"
                            >
                              <H4 className="text-lg font-semibold text-[#00AA72]    flex-1">
                                {item.title}
                              </H4>

                              <svg
                                className={`w-6 h-6 text-[#00AA72]   transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                              }`}
                            >
                              <P>{item.content}</P>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="md:h-[50vh]" /> */}
        

      </div>
    </section>
  );
}