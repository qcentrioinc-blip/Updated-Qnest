import { H2, H3, H4, P } from "../../../styles/Typography";

export default function ContentInfo() {
  return (
    <section className="w-full dark:bg-black">
      <div className="max-w-7xl mx-auto py-10 px-10 xl:px-6">

        {/* Two Column Layout */}
        <div className="relative flex flex-col lg:flex-row gap-16 lg:gap-20">

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-[#00AA72] -translate-x-1/2" />

          {/* LEFT SECTION */}
          <div className="flex-1 lg:pr-16">

            <H2 className="text-black mb-6 max-w-2xl dark:text-[#00AA72] ">
              Problems IBS Solves for Banks
            </H2>

            <P className="text-gray-800   max-w-xl">
              Traditional banking faces challenges with branch dependency, manual processes, and limited customer access. IBS addresses these issues through digital transformation and self-service capabilities.
            </P>

            {/* Feature Row */}
            <div className="flex items-center gap-6 mt-6 xl:mt-26">

              <div className="w-20 h-20 rounded-full bg-[#00AA72] flex items-center justify-center">
                <img
                  src="/ProductIBS/icon9.svg"
                  alt="icon"
                  className="w-14 h-14 object-contain"
                />
              </div>

              <H3 className="text-[#00AA72]">
                 Go Digital Now
              </H3>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex-1 space-y-6">

            {/* Card 1 */}
            <div className="border border-gray-300 rounded-lg px-6 py-4 dark:bg-slate-950 bg-white">
              <div className="flex flex-col gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <img
                  src="/ProductIBS/icon7.svg"
                  alt="icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
                <div>
                  <H4 className="dark:text-white">Branch Overcrowding</H4>
                  <P className="mt-2 text-gray-900">
                    Customers can bank online without visiting branches for routine transactions.
                  </P>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-300 dark:bg-slate-950 rounded-lg px-6 py-4 bg-white">
              <div className="flex flex-col gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <img
                  src="/ProductIBS/icon8.svg"
                  alt="icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
                <div>
                  <H4 className="dark:text-white">After-Hours Banking</H4>
                  <P className="mt-2 text-gray-900">
                     24/7 account access from anywhere using desktop, tablet, or mobile devices.
                  </P>
                </div>
              </div>
            </div>

            

          </div>

        </div>
      </div>
    </section>
  );
}