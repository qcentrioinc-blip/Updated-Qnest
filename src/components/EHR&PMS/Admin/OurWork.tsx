import { useEffect, useRef, useState } from "react";
import { H2, H4, P } from "../../../styles/Typography";

const cards = [
  {
    id: 1,
    title: "Manual Appointment Tracking & Confusion",
    text: "Stop calling patients or checking paper schedules. See every appointment's real-time status clearly on your dashboard.",
    image: "/EHR-PMS/Blogs/img1.png",
  },
  {
    id: 2,
    title: "Scattered Communication & Missed Tasks",
    text: "End chasing down staff for updates. All messages and follow-ups are logged and assigned in one central hub.",
    image: "/EHR-PMS/Blogs/img2.png",
  },
  {
    id: 3,
    title: "Manual Reporting & Revenue Blind Spots",
    text: "Remove spreadsheet work for reports. Get instant financial and appointment analytics with a few clicks.",
    image: "/EHR-PMS/Blogs/img3.png",
  },
];

export default function OurWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = -rect.top;
      const sectionHeight = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / sectionHeight, 0), 1);

      const index = Math.floor(progress * cards.length);
      setActiveIndex(Math.min(index, cards.length - 1));
    };

    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
    <section
      ref={sectionRef}
      className="bg-white dark:bg-[#141414]    hidden lg:block"
      style={{ height: "300vh" }}
    >
      <div className="flex items-center   px-[40px] md:px-[60px] xl:px-[160px] justify-start ">
          <H2 className="text-[#00AA72] dark:text-white mt-6 lg:mt-10">
            Eliminate These Common <br /> Administrative Headaches
          </H2>
      </div>
      <div className="sticky top-0 h-screen flex px-[40px] md:px-[60px] xl:px-[160px]   gap-16">
        {/* LEFT CONTENT — STACKS */}
        <div className="w-[45%] pt-24 space-y-16">
        

          {cards.map((card, index) => (
            <div
              key={card.id}
              className="transition-all duration-700"
              style={{
                opacity: activeIndex >= index ? 1 : 0,
                transform:
                  activeIndex >= index
                    ? "translateY(0)"
                    : "translateY(40px)",
              }}
            >
              <H4 className="text-2xl dark:text-[#00AA72]   font-semibold mb-4 text-gray-900">
                {card.title}
              </H4 >
              <P className="leading-relaxed text-gray-700 max-w-md">
                {card.text} 
              </P>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE — SINGLE VIEWPORT */}
        <div className="w-[55%] flex items-center">
          <div className="relative w-full h-[480px] overflow-hidden rounded-2xl shadow-xl">
            {cards.map((card, index) => (
              <img
                key={card.id}
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(${(index - activeIndex) * 110}%)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="lg:hidden bg-white px-4 py-20 space-y-16">
      <div className="flex items-center justify-start ">
          <H2 className="text-[#00AA72] mt-6 ">
            Eliminate These Common <br /> Administrative Headaches
          </H2>
      </div>
  {cards.map((card) => (
    <div key={card.id} className="space-y-6">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-[260px] sm:h-[300px] object-cover rounded-xl"
      />
      <div>
        <H4 className="text-xl  dark:text-[#00AA72]   font-semibold mb-3 text-gray-900">
          {card.title}
        </H4>
        <P className="text-gray-700 leading-relaxed">
          {card.text}
        </P>
      </div>
    </div>
  ))}
</section>
</>
  );
}
