import { H2, H4, P } from "../../../styles/Typography"

 

// Dynamic Card
const Card = ({ title, description }: { title: React.ReactNode; description: string }) => (
  <div className="bg-[#F8F8F8]  dark:bg-gray-800 rounded-xl px-4 py-5 w-full text-center shadow">
    <H4 className="font-semibold  dark:text-white text-lg my-2 leading-snug">
      {title}
    </H4>
    <P className="text-sm text-gray-600">
      {description}
    </P>
  </div>
)

// Card Data (easy to scale later)
const cardsData = [
  {
    title: "Slow Customer Approval Decisions",
    description:
      "Delays in approval decisions cause customer dropouts and lost business opportunities",
  },
  {
    title: "Bottlenecks Across Hierarchy  ",
    description:
      "Inefficient workflows create processing delays across branches, centers, and groups",
  },
]

const MFI = () => {
  return (
    <div className="w-full bg-[#EEF3FA] dark:bg-black relative overflow-hidden">

      {/* DOTTED BG */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#00AA72 3px, transparent 3px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="z-10 my-10 flex justify-center items-center">
        <H2 className="dark:text-[#00AA72]">Group Lending</H2>
      </div>
  
      <div className="max-w-7xl mx-auto pb-10 xl:py-20 px-6 xl:px-6 relative">
      

        {/* DESKTOP */}
        <div className="hidden lg:block">

          {/* BORDER */}
          <div className="absolute left-32 right-32  -top-4 xl:top-6 h-[450px] border-t-4 border-l-4 border-[#464F5D] rounded-tl-[48px] rounded-tr-[48px] border-r-4" />

          <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 items-end relative mt-10">

            {/* LEFT CARD */}
            <div className="relative flex justify-end">
              <div className="absolute left-[34%] -top-10">
  <div className="w-14 h-14 bg-[#00AA72] rounded-full flex items-center justify-center shadow-md">
    <img
      src="/LOS/hourglass.svg"
      alt="Group Lending"
      className="w-7 h-7 object-contain"
    />
  </div>
</div>
              <div className="w-full max-w-lg">
                <Card {...cardsData[0]} />
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="/losFlow.webp"
                alt="LOS Flow"
                className="w-full"
              />
            </div>

            {/* RIGHT CARD */}
            <div className="relative flex justify-start">
             <div className="absolute left-[60%] -translate-x-1/2 -top-10">
  <div className="w-14 h-14 bg-[#00AA72] rounded-full flex items-center justify-center shadow-md">
    <img
      src="/LOS/IconHour.svg"
      alt="Workflow"
      className="w-7 h-7 object-contain"
    />
  </div>
</div>
              <div className="w-full max-w-xl">
                <Card {...cardsData[1]} />
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-6 max-w-lg mx-auto items-center lg:hidden">

          {/* Card 1 */}
          <div className="relative pt-10">
           <div className="absolute left-1/2 -translate-x-1/2 top-0">
  <div className="w-14 h-14 bg-[#00AA72] rounded-full flex items-center justify-center shadow-md">
    <img
      src="/LOS/hourglass.svg"
      alt="Group Lending"
      className="w-7 h-7 object-contain"
    />
  </div>
</div>
            <Card {...cardsData[0]} />
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/LOS/LOSFlow.webp"
              alt="LOS Flow"
              className="w-full max-w-md"
            />
          </div>

          {/* Card 2 */}
          <div className="relative pt-10">
            <div className="absolute left-1/2 -translate-x-1/2 top-0">
  <div className="w-14 h-14 bg-[#00AA72] rounded-full flex items-center justify-center shadow-md">
    <img
      src="/LOS/IconHour.svg"
      alt="Group Lending"
      className="w-7 h-7 object-contain"
    />
  </div>
</div>
            <Card {...cardsData[1]} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default MFI