import Image1 from "/AML/Almanac6.webp";
import { H2, H4, P } from "../../../styles/Typography";

const title=[

  
  "Accuracy",
  "Efficiency",
  "Compliance",
  "Insight"
]

const para=[
 
  " Automated calculations for interest rate sensitivity, duration analysis, and regulatory reports eliminate manual errors and ensure precise financial data for decision-making.",
  "Streamlines complex asset liability management processes through integrated tools for liquidity forecasting, stress testing, and scenario simulation in one platform.",
  "Generates regulatory reports aligned with Basel requirements and central bank guidelines. Maintains audit trails and ensures adherence to multi-currency standards.",
  "Predictive analytics and scenario modeling provide visibility into future liquidity positions, interest rate impacts, and capital adequacy for proactive planning.",

]

const Banks = () => {
  return (
    <section className="dark:bg-black">
    <div className="relative max-w-7xl  mx-auto min-h-screen  py-10 xl:py-16 px-6 xl:px-6  lg:px-10  ">
      <div className="relative z-10">
        <H2 className="font-semibold md:mb-10 dark:text-[#00AA72] ">
                  Key Benefits of Implementing <br/> ALMANAC Platform
                </H2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
  

          {/* Left section */}
          <div className="lg:sticky sm:mb-10 md:mb-0 lg:top-0 lg:pt-10 self-start h-fit">

            <div className="bg-white dark:bg-slate-950 border-2 h-full lg:w-96 sm:mb-10  mt-10 md:mt-0 lg:mb-0 border-gray-200 shadow-lg rounded-md overflow-hidden p-6">
              <img
                src={Image1}
                alt="Profile"
                className="w-full h-52 object-cover rounded-md"
              />

              <div className="lg:mt-10 mt-4">
                <H4 className="font-semibold text-[#00AA72]">
                  Complete Balance Sheet Control
                </H4>

                <P className="mt-4 text-black dark:text-white">
                  Single platform for managing liquidity, interest rate risk, and regulatory reporting.
                </P>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex lg:pt-24 flex-col gap-6">

            {title.map((label, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-950  mt-4 shadow-lg rounded-md p-6 border-gray-300 border-2  sticky top-24"
                style={{ zIndex: index + 1 }}
              >
                <H4 className="mb-6 lg:mb-10 text-[#00AA72] font-semibold">
                  {label}
                </H4>

                <P className="mt-2 text-black dark:text-white">
                  {para[index]}
                </P>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banks;
