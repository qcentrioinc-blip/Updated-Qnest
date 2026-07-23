import { H2, H4, P } from "../../../styles/Typography"

export default function ThreeCards() {
  const cards = [
  {
    title: "Manual Paper-Based Loan Applications",
    description:
      "Eliminates paperwork with digital forms and automated document capture using OCR technology.",
      icon:"/LOS/sign.svg"
  },
  {
    title: "Slow Customer Approval Decisions",
    description:
      "Accelerates loan decisions through pre-approved offers and configurable score parameter automation.",
      icon:"/LOS/Sandclock.svg"
  },
  {
    title: "Complex Multi-Level Approval Workflows",
    description:
      "Streamlines authorization with configurable matrix approval based on products, scores, and amounts.",
      icon:"/LOS/grid.svg"
  },
];
  return (
    <div className="max-w-8xl mx-auto flex items-center justify-center dark:bg-black bg-white">
      {/* Desktop Layout - Responsive */}
      <div className="hidden lg:flex w-full max-w-8xl mx-10 px-10 py-10 flex-col gap-8">
        <H2 className="dark:text-white">Key Lending Challenges LOS Solves</H2>

        <div className="flex w-full gap-8 h-auto xl:h-[458px]">
          {/* Left Card */}
          <div
            className="flex-1 xl:w-[685px] dark:bg-slate-950 bg-[#F3F3F3] border-2 border-[#666666] rounded-lg  p-8 flex flex-col gap-4 relative"
          >
            <div className="w-18 h-18 bg-[#00AA72] rounded-full shrink-0 flex items-center justify-center">
              <img src="/LOS/sign.svg" alt="" className="object-contain h-12 w-12"/>
            </div>
            <div className="flex flex-col gap-2">
              <H4 className="dark:text-[#2B63C3] ]"
              >
             Manual Paper-Based Loan Applications
              </H4>
            <P className="dark:text-white">
             Eliminates paperwork with digital forms and automated document capture using OCR technology.
             </P>
            </div>

           <div className="mt-auto w-full h-[200px] xl:h-[227px] rounded-t-lg mx-auto overflow-hidden">
  <img
    src="/LOS/LosImage.webp"
     
    className="w-full h-full object-cover"
  />
</div>
          </div>

          {/* Right Cards */}
          <div className="flex-1   flex flex-col gap-4">
       {cards.slice(1).map((card, idx) => (
  <div
    key={idx}
    className="flex-1 rounded-lg border-2 bg-[#F3F3F3] dark:bg-slate-950 border-[#666666] py-6 px-8 flex flex-col gap-4"
  >
     <div className="w-14 h-14 bg-[#00AA72] rounded-full shrink-0 flex items-center justify-center">
              <img src={card.icon} alt="" className="object-contain h-8 w-8"/>
            </div>

    <div className="flex flex-col gap-2">
      <H4 className="dark:text-[#00AA72]"
      >
        {card.title}
      </H4>

      <P className="dark:text-white"
      >
        {card.description}
      </P>
    </div>
  </div>
))}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Responsive */}
      <div className="lg:hidden w-full px-6 py-12 flex flex-col items-center gap-8 bg-[#F3F3F3]">
        <H2 >
          Key Lending Challenges  LOS Solves
        </H2>

    {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-full max-w-md rounded-lg bg-[#E4F0FF] dark:bg-black p-6 flex flex-col gap-4"
          >
          <div className="w-10 h-10 bg-[#00AA72] rounded-full shrink-0 flex items-center justify-center">
              <img src={card.icon} alt="" className="object-contain h-6 w-6"/>
            </div>
            <div className="flex flex-col gap-2">
              <H4 className="dark:text-white">
               {card.title}
              </H4>
             <P className="dark:text-white">
              {card.description}
              </P>
            </div>
            {idx === 0 && (
              <div className="mt-4 w-full h-[200px] bg-white rounded-md mx-auto" > 
              <img
    src="/LOS/LosImage.webp"
     
    className="w-full h-full object-cover"
  /></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
