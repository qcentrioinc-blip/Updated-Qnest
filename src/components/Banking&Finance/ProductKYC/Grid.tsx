import { H2, H4, P } from "../../../styles/Typography";

export default function Sec_Grid() {
  const cards = [
    {
      title: "Multi-segment client coverage for individuals and corporates ",
      content:
        "Handle due diligence for retail customers, private limited companies, firms, and complex corporate structures with beneficial ownership identification. ",
      shape: "/ProductDetails4/icon4.svg",
      illustration: "/ProductDetails4/icon4.svg",
    },
    {
      title: "Beneficial ownership identification and unwrapping thresholds",
      content:
        "Automatically identify connected parties and ultimate beneficial owners based on configured thresholds and entity types. ",
      shape: "/ProductDetails4/icon5.svg",
      illustration: "/ProductDetails4/icon5.svg",
    },
    {
      title: "Transaction screening for remittances and trade finance",
      content:
        "Screen inward and outward remittances along with import and export letters of credit and bills. ",
      shape: "/ProductDetails4/icon6.svg",
      illustration: "/ProductDetails4/icon6.svg",
    },
    {
      title: "Always audit ready with version controlled profiles ",
      content:
        "Maintain complete history of CIP profiles across lifecycle with all changes tracked for regulatory examinations. ",
      shape: "/ProductDetails4/icon7.svg",
      illustration: "/ProductDetails4/icon7.svg",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-start py-10">
      <div className="max-w-7xl mx-auto px-6 xl:px-6">
        <H2 className="text-center mb-10 mt-2">
          Core capabilities of Diligent platform 
        </H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
          {cards.map((card, i) => (
            <div
  key={i}
  className="
    rounded-lg bg-white p-6 
    border border-gray-300
    flex flex-col md:flex-col xl:flex-row
    items-start xl:items-center
  "
>
  {/* ICON — Top for tablet, Left for desktop */}
  <div className="
      w-full md:w-full xl:w-1/3
      relative flex justify-start xl:justify-center items-center
      mb-6 xl:mb-0
    "
  >
    {/* Shape behind */}
    <img
      src={card.shape}
      alt=""
      className="absolute xl:w-[120px] xl:h-[120px]
    md:w-[100px] md:h-[100px]
    sm:w-[50px] sm:h-[50px] object-contain -z-10"
    />

    {/* Illustration */}
    <img
      src={card.illustration}
      alt=""
      className="xl:w-[120px] xl:h-[120px]
    md:w-[100px] md:h-[100px]
    sm:w-[50px] sm:h-[50px] object-contain z-10"
    />
  </div>

  {/* CONTENT */}
  <div className="
      w-full xl:w-2/3
      flex flex-col gap-4
      xl:ml-10
    "
  >
    <H4>{card.title}</H4>
    <P>{card.content}</P>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
