import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { H2,P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

type Outcome = {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
};

const outcomes: Outcome[] = [
  {
    id: 1,
    title: "Complete Visibility and Control",
    description:
      "  Configure and monitor batch jobs for reconciliation processes. View detailed event logs and error logs for troubleshooting. Generate match reports to review successfully reconciled transactions. Access unmatch reports to identify and resolve exceptions.",
    image: "/BNFConsilier/matchreport.webp",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Streamlined Reconciliation Workflows",
    description:
      "Description: Configure and monitor batch jobs for reconciliation processes. View detailed event logs and error logs for troubleshooting. Generate match reports to review successfully reconciled transactions. Access unmatch reports to identify and resolve exceptions.",
    image: "/BNFConsilier/unmatchreports.webp",
    cta: "Explore Features",
  },
  {
    id: 3,
    title: "Comprehensive Match and Unmatch Reports",
    description:
      "Description: Configure and monitor batch jobs for reconciliation processes. View detailed event logs and error logs for troubleshooting. Generate match reports to review successfully reconciled transactions. Access unmatch reports to identify and resolve exceptions.",
    image: "/BNFConsilier/jobmonitor.webp",
    cta: "See How",
  },
  {
    id: 4,
    title: "Real-Time Event and Error Logs",
    description:
      "Description: Configure and monitor batch jobs for reconciliation processes. View detailed event logs and error logs for troubleshooting. Generate match reports to review successfully reconciled transactions. Access unmatch reports to identify and resolve exceptions.",
    image: "/BNFConsilier/eventerror.webp",
    cta: "Explore Features",
  },
];

const ConsOverview = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeOutcome =
    outcomes.find((item) => item.id === activeId) || outcomes[0];

  const handlePrev = () => {
    setActiveId((prev) => {
      const currentIndex = outcomes.findIndex((item) => item.id === prev);
      const newIndex = currentIndex === 0 ? outcomes.length - 1 : currentIndex - 1;
      return outcomes[newIndex].id;
    });
  };

  const handleNext = () => {
    setActiveId((prev) => {
      const currentIndex = outcomes.findIndex((item) => item.id === prev);
      const newIndex = currentIndex === outcomes.length - 1 ? 0 : currentIndex + 1;
      return outcomes[newIndex].id;
    });
  };

  return (
    <>
      <section className="w-full bg-white dark:bg-black py-16 px-4 xl:px-6">
        <div className="max-w-7xl lg:mx-auto xl:mx-auto">
          {/* Section Heading */}
          <div className="mb-6">
            <H2 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#00AA72]">Monitoring and</span> <span className="text-[#141414] dark:text-white">Reporting Capabilities</span>
            </H2>
          </div>

          {/* ================= MOBILE / TABLET ================= */}
          <div className="flex flex-col gap-12 lg:hidden">
            {outcomes.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <H2 className="text-[#00AA72] text-2xl font-bold">
                  {item.title}
                </H2>

                <P className="text-[#141414]">{item.description}</P>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDrawerOpen(true);
                  }}
                  className="
                          group
            inline-flex items-center justify-center w-fit
            px-6 h-12
            rounded-lg
            font-quadran   font-bold text-sm tracking-widest
            bg-[#00AA72] text-white
            hover:bg-white hover:text-[#00AA72]
            border-2 border-[#00AA72]
            transition-all duration-300 ease-in-out
            hover:border-b-[4px]
            hover:-translate-y-[2px]
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
            cursor-pointer
                        "
                >
                  {item.cta}
                  <span className="relative flex items-center justify-center w-[20px] h-[20px]">
                    {/* Default Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17L17 7" />
                    </svg>

                    {/* Hover Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>

                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-fit"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ================= DESKTOP (LG & XL Screen) ================= */}
          <div className="hidden lg:flex gap-8 flex-1 items-center">
            {/* Left Image with Dots */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="relative rounded-xl h-[400px] overflow-hidden">
                <img
                  key={activeOutcome.id}
                  src={activeOutcome.image}
                  alt={activeOutcome.title}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                />
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-3">
                {outcomes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeId === item.id
                      ? "bg-[#00AA72] scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                      }`}
                    aria-label={`Go to ${item.title}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Text */}
            <div className="w-[30%] flex flex-col justify-center">
              <H2 className="text-[#141414]  dark:text-[#00AA72] mb-4 text-3xl font-bold">
                {activeOutcome.title}
              </H2>

              <P className="mb-2 text-[#141414] dark:text-white">
                {activeOutcome.description}
              </P>

              {/* Chevron Buttons */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D9D9D9] text-[#00AA72] hover:bg-[#00AA72] hover:text-white transition-colors duration-300 flex items-center justify-center shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNext}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D9D9D9] text-[#00AA72] hover:bg-[#00AA72] hover:text-white  transition-colors duration-300 flex items-center justify-center shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ContactDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </section>
    </>
  );
};

export default ConsOverview;