import { useEffect, useRef, useState } from "react"
import { H3, P } from "../../../styles/Typography"

const stepsData = [
  {
    id: 1,
    title: "ACH Automated Clearing House Processing",
    para1: "ACH module handles high-volume payment processing with cheque scanner integration and X9 standards. Supports inbound and outbound transactions with multiple batches and configurable intervals for automated clearing.",
    para2: " Configurable intervals for automated clearing. Rotate and view cheque images at different angles to minimize fraud. Rejection options available with supervisor approval.",
    keywords: ["High Volume", "Multiple Batches"],
    image: "/Pago/STEP1.webp",
  },
  {
    id: 2,
    title: " NACHA National Automated Clearing Association ",
    para1: "NACHA module supports low-value deferred and instant fund transfers with net settlement. Enables single transfers, bulk transactions, and mandate management for recurring payments across various use cases.",
    para2: " Handles recurring payments across various use cases. Settled in deferred time enabling institutions to manage liquidity. Available 24/7 with low turnaround time.",
    keywords: ["Deferred Settlement", "Instant Transfers"],
    image: "/Pago/STEP2.webp",
  },
  {
    id: 3,
    title: "RTGS Real Time Gross Settlement ",
    para1: "RTGS module facilitates high-value fund transfers using SWIFT message formats. Supports outbound credit, outbound returns, inbound credit, and inbound returns with settlement to bank and central bank accounts.",
    para2: "Settlement to bank own accounts and central bank accounts. Enables cashless and paperless transactions. Risk mitigated with automated processing and maker-checker controls.",
    keywords: ["High Value", "Gross Settlement"],
    image: "/Pago/STEP3.webp",
  },
  {
    id: 4,
    title: "Anti Money Laundering Integration",
    para1: "AML module integrates with Sherlock for comprehensive transaction screening. Supports standard and institution-specific lists with real-time and batch checks. Configurable limits for transaction amount and count",
    para2: "Configurable independent limits for transaction amount and count. Cross-reference beneficiary for inward and outward transactions. Complete AML compliance coverage.",
    keywords: ["Real-time Checks", " Batch Checks"],
    image: "/Pago/STEP4.webp",
  },
]

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index + 1)
          }
        },
        { threshold: 0.6 }
      )

      observer.observe(ref)
    })
  }, [])

  const active = stepsData[activeStep - 1]

  return (
    <section className="w-full bg-white dark:bg-black relative">

      {/* SCROLL AREA (4 steps) */}
      <div className="h-[400vh] relative">

        {/* STICKY CONTENT
            xs (iPhone SE):  h-auto + items-start + overflow-y-auto → shrinks to content, no gap
            sm+ (iPhone 12/14 Pro Max): h-[90vh] + items-center → vertically centered, no leftover space
        */}
        <div className="sticky top-0 h-auto sm:h-[90vh] lg:h-[85vh] xl:h-screen flex items-start sm:items-center overflow-y-auto sm:overflow-visible pt-4 sm:pt-0">

          <div className="max-w-7xl mx-auto px-4 xl:px-6 w-full py-2">

            <div className="grid lg:grid-cols-[2fr_1.4fr] xl:gap-14 pt-2 sm:pt-4 items-center">

              {/* LEFT IMAGE PANEL */}
              <div className="bg-[#D9D9D9] rounded-2xl h-[160px] sm:h-[250px] lg:h-[600px] overflow-hidden">
                <img
                  src={active.image}
                  alt="step"
                  className="w-full h-full object-fill transition-all duration-500"
                />
              </div>

              {/* RIGHT CONTENT WRAPPER */}
              <div className="relative flex items-center">

                {/* STEPPER (ON BORDER) */}
                <div className="absolute xl:-left-8 xl:top-16 -left-3 top-14 h-full flex flex-col items-center">
                  {stepsData.map((step, i) => (
                    <div key={step.id} className="flex flex-col items-center z-10">
                      <div
                        className={`xl:w-18 xl:h-18 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex font-quadran   text-lg sm:text-[32px] items-center justify-center font-semibold transition-all
                        ${
                          activeStep === step.id
                            ? "bg-[#00AA72] text-white scale-110"
                            : "border-4 border-[#00AA72] bg-white text-[#00AA72]"
                        }`}
                      >
                        {step.id}
                      </div>

                      {i !== stepsData.length - 1 && (
                        <div className="h-8 sm:h-12" />
                      )}
                    </div>
                  ))}
                </div>

                {/* TEXT PANEL
                    xs: h-auto so panel hugs content tightly — no empty space below
                    sm: h-[480px] restored for iPhone 12/14 Pro Max
                */}
                <div className="w-full h-auto sm:h-[480px] pl-8 sm:pl-10 xl:pl-14 mt-6 xl:mt-0 lg:h-[450px] xl:h-[550px] bg-[#F6F6F6] dark:bg-black border-l-4 border-black dark:border-white py-3 flex flex-col justify-start">

                  <H3 className="text-xl sm:text-3xl lg:text-4xl font-bold my-2 sm:my-4 leading-snug">
                    {active.title}
                  </H3>

                  <P className="mb-3 sm:mb-6 max-w-xl dark:text-white leading-normal text-sm sm:text-base">
                    {active.para1}
                  </P>

                  <P className="mb-3 sm:mb-6 max-w-xl dark:text-white leading-normal text-sm sm:text-base">
                    {active.para2}
                  </P>

                  <div className="flex gap-2 sm:gap-4 flex-wrap">
                    {active.keywords.map((word, i) => (
                      <span
                        key={i}
                        className={`px-3 sm:px-5 py-2 sm:py-3 rounded-full font-quadran   text-sm sm:text-[18px] ${
                          i === 0
                            ? "bg-[#00AA72] text-white"
                            : "bg-gray-200 text-[#00AA72]"
                        }`}
                      >
                        {word}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL TRIGGERS */}
        <div className="absolute top-0 left-0 w-full">
          {stepsData.map((_, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el }}
              className="h-[60vh] xl:h-screen"
            />
          ))}
        </div>

      </div>
    </section>
  )
}
 
export default Steps