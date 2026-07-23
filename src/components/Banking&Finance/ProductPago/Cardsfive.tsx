import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { H1, H4, P } from "../../../styles/Typography";

const INTRO = {
  title: "Payment Scenarios We Support ",
  desc: "PAGO enables multiple payment scenarios for financial institutions and their customers.",
};

const CARDS = [
  {
    id: 1,
    icon: "/transfer.svg",
    title: "Single Transfers",
    desc: "Service both customers and non-customers for one-time payments",
  },
  {
    id: 2,
    icon: "/collection.svg",
    title: "Bulk Transactions",
    desc: " Distribute subsidies, dividends, salary, and pension payments.",
  },
  {
    id: 3,
    icon: "/financial.svg",
    title: "Utility Collections",
    desc: " Collect telephone, electricity, water, and loan payments.",
  },
  {
    id: 4,
    icon: "/settings.svg",
    title: "Investment Collections",
    desc: "Collect mutual fund investments and insurance premium payments ",
  },
  {
    id: 5,
    icon: "/moneytransfer.svg",
    title: "Instant Transfers",
    desc: "Enable 24/7 low turnaround time fund transfers",
  },
];

const Cardsfive = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByOne = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.95 + 24;
    scrollRef.current.scrollBy({
      left: dir === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.95 + 24;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, CARDS.length - 1));
  };

  return (
    <section className="w-full bg-white dark:bg-black relative py-10">
    <div className="max-w-7xl dark:bg-black mx-auto px-6 py-10 xl:px-6">

      {/* ── MOBILE / TABLET INTRO ── */}
      <div className="mb-8 xl:hidden">
        <H1 className="mb-4 font-quadran   text-[#00AA72]">
          {INTRO.title}
        </H1>
        <P className="max-w-full text-black dark:text-white">
          {INTRO.desc}
        </P>
      </div>

      <div className="grid grid-cols-1  dark:bg-black  sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-y-8 gap-x-4">

        {/* ── DESKTOP INTRO ── */}
        <div className="hidden xl:block col-span-1 sm:col-span-2 lg:col-span-1">
          <H1 className="mb-4 text-[#00AA72] font-quadran  ">
            {INTRO.title}
          </H1>
          <P className="max-w-md dark:text-white  text-black">
            {INTRO.desc}
          </P>
        </div>

        {/* ── MOBILE / TABLET CAROUSEL ── */}
        <div className="relative col-span-1 sm:col-span-2 xl:hidden">
          <button
            onClick={() => scrollByOne("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white  dark:bg-black  dark:border-white shadow-md rounded-full p-2"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scrollByOne("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-black dark:border-white shadow-md rounded-full p-2"
          >
            <ChevronRight />
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="
                  snap-center flex-shrink-0 w-[95%] md:w-[55%] mx-auto
                  rounded-2xl p-8 bg-[#F0F4FF] dark:bg-black border border-gray-100
                  shadow-sm hover:shadow-xl hover:shadow-black/5
                  transform transition-all duration-500 ease-out hover:-translate-y-2
                "
              >
              <div className="mb-6">
  <img 
    src={card.icon} 
    alt={card.title}
    className="w-12 h-12 object-contain"
  />
</div>
                <H4 className="mb-3 text-[18px] dark:text-white md:text-[20px] font-semibold text-[#0F172A] leading-snug">
                  {card.title}
                </H4>
                <P className="">{card.desc}</P>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollByOne(i > activeIndex ? "right" : "left")}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === i ? "bg-black  dark:bg-blue-800 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP CARDS (xl+) ── */}
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="
              hidden xl:flex flex-col gap-4
              rounded-2xl p-8 bg-[#F6F6F6]  dark:bg-slate-900 border border-gray-100
              shadow-sm hover:shadow-xl hover:shadow-black/5
              transform transition-all duration-500 ease-out hover:-translate-y-2
              w-[95%] mx-auto
            "
          >
        <div className="mb-6">
  <img 
    src={card.icon} 
    alt={card.title}
    className="w-12 h-12 object-contain"
  />
</div>
            <H4 className="text-[18px] dark:text-white lg:text-[20px] font-semibold text-[#0F172A] leading-snug">
              {card.title}
            </H4>
            <P className="   xl:max-w-xs">{card.desc}</P>
          </div>
        ))} 

      </div>
    </div>
    </section>
  );
};

export default Cardsfive;