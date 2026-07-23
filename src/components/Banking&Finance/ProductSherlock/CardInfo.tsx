import { H2, H4, P } from "../../../styles/Typography";

export default function CardInfo() {
  return (
    <section className="w-full dark:bg-black pb-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <H2 className="text-[#00AA72]">
             Core Modules of SHERLOCK Platform
          </H2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">

          {/* Feature 1 */}
          <div className="flex flex-col items-start text-left md:pr-10 md:border-r md:border-gray-300 py-6 md:py-0">
            
            {/* Icon */}
            <div className="w-12 h-12 bg-[#00AA72] rounded-full flex items-center justify-center mb-5">
              <img className="text-white w-8 h-8 z-10"  
              src="/ProductSherlock/icon13.svg"
              />
            </div>

            <H4 className="mb-3 dark:text-white">
              Risk <br /> Management & Compliance
            </H4>

            <P>
              Integrates liquidity risk, interest rate risk,
              and regulatory reporting in one platform.
            </P>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start text-left md:px-10 md:border-r md:border-gray-300 py-6 md:py-0">

            <div className="w-12 h-12 bg-[#00AA72] rounded-full flex items-center justify-center mb-5">
              <img className="text-white w-7 h-7 z-10"  
              src="/ProductSherlock/icon5.svg"
              />
            </div>

                  <H4 className="mb-3 dark:text-white">
              Liquidity <br /> Forecasting & Planning
            </H4>

            <P>
              Manages dynamic and structural liquidity
              with stress testing and ratio analysis.
            </P>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start text-left md:pl-10 py-6 md:py-0">

            <div className="w-12 h-12 bg-[#00AA72] rounded-full flex items-center justify-center mb-5 ">
              <img className="text-white w-8 h-8 z-10"  
              src="/ProductSherlock/icon12.svg"
              />
            </div>

                <H4 className="mb-3 dark:text-white">
              Strategic Analytics
            </H4>

            <P>
              Provides scenario simulation, duration
              analysis, and predictive insights for
              capital planning.
            </P>
          </div>

        </div>
      </div>
    </section>
  );
}