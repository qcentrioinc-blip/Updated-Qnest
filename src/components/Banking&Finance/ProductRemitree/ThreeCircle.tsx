import { H2 } from "../../../styles/Typography";

// ── Card Data ─────────────────────────────────────────────────
const cards = [
  {
    title: "Bi-Directional Flow",
    text: "Manages both outward and inward remittances comprehensively with automated creation, validation, and transmission of Swift messages.",
    image: "/Remitree/workflow.svg",
  },
  {
    title: "Integrated Compliance",
    text: "Screens transactions against banned entities and countries using AML integration for fraud prevention and regulatory adherence.",
    image: "/Remitree/integrations.svg",
  },
  {
    title: "Real-Time Tracking",
    text: "Comprehensive dashboard provides real-time overview of all messages with status tracking for pending, approved, and transmitted items.",
    image: "/Remitree/time.svg",
  },
];

// ── Single Card ───────────────────────────────────────────────
const CircleCard = ({ title, text, image }: any) => (
  <div className="
        flex flex-col items-start
        gap-4
        md:gap-5
        xl:gap-6
        w-full
    ">
    {/* Image instead of Circle */}
    <img src={image} alt={title} className="
            flex-shrink-0 object-contain
            w-10 h-10
            sm:w-12 sm:h-12
            lg:w-14 lg:h-14
            xl:w-[60px] xl:h-[60px]
        " />

    {/* Title */}
    <h3 className="
            font-['Bricolage_Grotesque'] dark:text-[#00AA72] font-semibold
            leading-none tracking-normal text-[#141414] w-full
            text-[18px]
            sm:text-[20px]
            md:text-[22px]
            lg:text-[24px]
            xl:text-[32px]
        ">
      {title}
    </h3>

    {/* Paragraph */}
    <p className="
            font-['Quicksand'] dark:text-white font-normal
            leading-relaxed tracking-normal text-[#141414] w-full
            text-[13px]
            sm:text-[14px]
            md:text-[14px]
            lg:text-[15px]
            xl:text-[16px]
        ">
      {text}
    </p>
  </div>
);

// ── Main Component ────────────────────────────────────────────
const ThreeCircle = () => {
  return (
    <div className="
            w-full bg-white
            dark:bg-black
            px-5 pb-4
            sm:px-8
            md:px-10
            lg:px-14
            xl:px-20
        ">
      <div className="
                max-w-7xl mx-auto
                flex flex-col items-center
                gap-8
                md:gap-10
                xl:gap-8
            ">

        {/* ── Title ── */}
        <H2 className="
                    leading-none tracking-normal text-center text-[#00AA72] w-full
                    
                ">
          What Makes REMITREE Unique
        </H2>

        {/* ── Cards Grid ──
                    Uses grid at ALL breakpoints — no flex switch.
                    xl: justify-between handles spacing naturally.
                    No fixed gap-[200px] — uses fraction columns instead.
                ── */}
        <div className="
                    w-full grid
                    grid-cols-1      gap-8
                    sm:grid-cols-2   sm:gap-10
                    lg:grid-cols-3   lg:gap-12
                    xl:grid-cols-3   xl:gap-16
                ">
          {cards.map((card, i) => (
            <CircleCard key={i} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ThreeCircle;
