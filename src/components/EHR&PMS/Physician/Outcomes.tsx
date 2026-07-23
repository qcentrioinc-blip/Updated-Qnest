import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { H2, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

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
    title: "Lost Patient Information",
    description:
      "Never scramble for missing charts or labs again. Every piece of patient data, history, medications, results is unified in one accessible, secure profile.",
    image: "/EHR-PMS/Physician/img3.webp",
    cta: "Learn More",
  },
   {
    id: 2,
    title: "Billing and Coding Errors",
    description:
      "Stop dealing with claim denials from manual errors. Integrated coding suggestions and automated claim scrubbing ensure accurate submissions and faster reimbursements.",
    image: "/EHR-PMS/Physician/img5.webp",
    cta: "Explore Features",
  },
  {
    id: 3,
    title: "Cumbersome Charting Processes",
    description:
      "Eliminate slow, manual documentation. Smart templates and auto-populated fields cut charting time in half, letting you complete notes quickly and accurately.",
    image: "/EHR-PMS/Physician/img4.webp",
    cta: "See How",
  },
 
];

const Outcomes = () => {
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
      <section className="w-full bg-white dark:bg-[#042F2E] py-4">
        <div className="px-[40px] md:px-[60px] xl:px-[160px]">
          {/* Section Heading */}
          <div className="flex justify-center mb-12 text-[#00AA72]">
            <H2 className="dark:text-white">Physician Pain Points Solved</H2>
          </div>

          {/* ================= MOBILE / TABLET ================= */}
          <div className="flex flex-col gap-12 lg:hidden">
            {outcomes.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <H2 className="text-[#00AA72]  text-2xl font-bold">
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

          {/* ================= DESKTOP (XL Screen) ================= */}
          <div className="hidden lg:flex gap-8 flex-1">
            {/* Left Text */}
            <div className="w-[30%] flex flex-col justify-center">
              <H2 className="text-[#00AA72] dark:text-[#00AA72]   mb-4 text-3xl font-bold">
                {activeOutcome.title}
              </H2>

              <P className="mb-2 text-[#141414]">
                {activeOutcome.description}
              </P>

              {/* Chevron Buttons */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D9D9D9] text-[#006664] hover:bg-[#006664] hover:text-white transition-colors duration-300 flex items-center justify-center shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNext}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D9D9D9] text-[#006664] hover:bg-[#006664] hover:text-white  transition-colors duration-300 flex items-center justify-center shadow-lg"
                  aria-label="Next"
                >   
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Right Image with Dots */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="relative rounded-xl h-[500px] overflow-hidden">
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeId === item.id
                        ? "bg-[#00AA72] scale-125"
                        : "bg-gray-400 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to ${item.title}`}
                  />
                ))}
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

export default Outcomes;