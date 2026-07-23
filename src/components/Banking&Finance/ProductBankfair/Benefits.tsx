import { H2, H3, P } from "../../../styles/Typography";

// const FEATURES = [
//   {
//     icon: "/icon6.svg",
//     text: "Automate matching ",
//   },
//   {
//     icon: "/icon5.svg",
//     text: "Reduce errors ",
//   },
//   {
//     icon: "/icon4.svg",
//     text: "Ensure compliance ",
//   },
// ];

const CARDS = [
  {
    number: "01",
    title: "Efficiency",
    description:
"Automate repetitive tasks like account creation, transaction processing, and regulatory reporting. Reduce manual effort and processing time while improving operational productivity across all branches and departments. ",
  },
  {
    number: "02",
    title: "Accuracy",
    description:
      "Minimize errors through automated calculations, validation rules, and system-driven processes. Ensure consistent application of interest rates, charges, and compliance requirements across all customer accounts.  ",
  },
  {
    number: "03",
    title: "Compliance",
    description:
      "Stay audit-ready with automated regulatory checks, comprehensive audit trails, and detailed reporting. Generate required reports for regulators with accurate data from unified banking operations. ",
  },
];

const Benefits = () => {
  return (
    <div className="relative h-auto">
      <div className="max-w-7xl xl:mx-auto mx-4 py-10 px-4 xl:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(400px,516px)_1fr] gap-10 xl:gap-16">

          {/* ================= LEFT COLUMN ================= */}
          <div className="xl:sticky xl:top-20 xl:h-fit">
            <div className="space-y-6 lg:space-y-8 w-full max-w-[516px]">

              <H2>
                <div className="text-[#00AA72]">Key Benefits of </div>
                <div className="text-gray-800 dark:text-white">Using Bankfair</div>
              </H2>

              <P>
Financial institutions choose Bankfair to streamline operations, ensure compliance, and scale efficiently. The platform reduces manual work, improves accuracy, and provides complete control over banking processes through parameterization and automation.               </P>

              {/* ICON LIST */}
              {/* <div className="flex flex-col gap-4">
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
              </div> */}

            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col items-end gap-6 w-full">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className="w-full max-w-[971px] rounded-2xl p-6 dark:bg-slate-950 bg-white border border-[#E0E0E0]"
              >
                <div className="flex flex-row items-center gap-6 lg:gap-10">

                  {/* Number */}
                  <H3 className=" flex-shrink-0 dark:text-white leading-none">
                    {card.number}
                  </H3>

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

export default Benefits;