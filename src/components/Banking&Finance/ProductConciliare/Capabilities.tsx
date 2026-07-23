import { H2, H3, P } from "../../../styles/Typography";

const FEATURES = [
  {
    icon: "/icon6.svg",
    text: "Automate matching ",
  },
  {
    icon: "/icon5.svg",
    text: "Reduce errors ",
  },
  {
    icon: "/icon4.svg",
    text: "Ensure compliance ",
  },
];

const CARDS = [
  {
    number: "01",
    title: "Overview",
    description:
      "Conciliare automates reconciliation by consolidating data from multiple sources including bank statements, sales registers, and third-party platforms. It handles various formats like Excel, PDFs, CSV, and proprietary reports.  The platform transforms disparate data into structured, matchable information for accurate and efficient reconciliation across your organization. ",
  },
  {
    number: "02",
    title: "Features",
    description:
      "The platform offers data acquisition, enrichment, and reconciliation services with configurable matching rules. It supports manual override functions, including force match, undo match, and exception review. Case management tools enable collaborative investigation and resolution of unmatched items.  Audit logging captures all user actions for complete transparency and compliance. ",
  },
  {
    number: "03",
    title: "Benefits",
    description:
      "Organizations achieve high automatic matching rates and straight-through processing with reduced operational overhead. The platform minimizes manual errors, accelerates monthly closing cycles, and provides comprehensive audit trails. This ensures regulatory compliance while freeing staff from tedious spreadsheet-based reconciliation tasks.  Customer satisfaction improves through accurate and timely transaction processing. ",
  },
  {
    number: "04",
    title: "Capabilities",
    description:
      "Conciliare handles NOSTRO message reconciliation, SWIFT message matching, and bank account reconciliation across multiple ledgers. It supports transaction attribute enrichment and consolidated transaction linking.  The system scales from standard to enterprise versions with advanced parallelism, aggressive scheduling, and automated data purging for optimal performance with high transaction volumes. ",
  },
];

const Capabilities = () => {
  return (
    <div className="relative dark:bg-black min-h-screen">
      <div className="max-w-7xl lg:mx-auto xl:mx-auto mx-4 py-10 px-4 lg:px-6 xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(350px,516px)_1fr] gap-10 xl:gap-16">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <div className="space-y-6 lg:space-y-8 w-full lg:max-w-[516px]">

              <H2>
                <div className="text-[#00AA72]">What is</div>
                <div className="text-gray-800 dark:text-white">Conciliare</div>
              </H2>

              <P className="dark:text-white">
                Conciliare is Qnest's advanced reconciliation platform designed to automate and streamline complex financial reconciliation processes on SOC 1/SOC 2 certified infrastructure. It transforms how financial institutions match transactions across disparate sources, ensuring accuracy audit readiness, and SOX compliance.
              </P>

              {/* ICON LIST */}
              <div className="flex flex-col gap-4">
                {FEATURES.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">

                    <div className="w-8 h-8 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt="feature icon"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <P className="leading-[120%]">
                      {item.text}
                    </P>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col items-end gap-6 w-full">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className="w-full max-w-[971px] rounded-2xl p-6 dark:bg-slate-900 bg-white border border-[#E0E0E0]"
              >
                <div className="flex flex-row items-center gap-6 lg:gap-10">

                  {/* Number */}
                  <div className="text-[clamp(48px,8vw,80px)] font-bold text-gray-600 flex-shrink-0 leading-none">
                    {card.number}
                  </div>

                  {/* Title */}
                  <H3 className="text-[#00AA72] m-0">
                    {card.title}
                  </H3>

                </div>

                {/* Description */}
                <P className="leading-[150%] text-black mt-6">
                  {card.description}
                </P>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Capabilities;