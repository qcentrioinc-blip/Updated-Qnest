import { H1, H4, P } from "../../../styles/Typography";

const GridSec = () => {
  return (
    <section className="w-full pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading Row */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">

          <H1 className="dark:text-white">
            How Bankfair Powers<br />
            <span className="text-[#00AA72]">Banking Operations</span>
          </H1>

          <P className="max-w-xl">
            Configure parameters once and let the system automate processes
            across branches. Bankfair's architecture ensures consistency,
            compliance, and efficiency at every step.
          </P>

        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-8">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">

            {/* Card 1 - Background Image */}
            <div className="relative rounded-2xl bg-[#E7F1FF] dark:bg-slate-900 overflow-hidden border border-gray-300 min-h-[180px] sm:min-h-[200px] md:min-h-[230px] lg:min-h-[300px]">

              <img
                src="/ProductBankfair/icon4.svg"
                alt=""
                className="absolute bottom-0 right-0 w-[70%] lg:w-[60%] h-auto object-contain"
              />


              <div className="relative p-4 xl:p-6">
                <H4 className="mb-4 dark:text-white">
                  Configure Banking Rules <br />  and Products
                </H4>

                <P className="max-w-xs">
                  Set up branches, currencies, charges, and financial products
                  through parameterization. Define transaction types, interest
                  calculations, and approval workflows without writing code.
                </P>
              </div>

            </div>


            {/* Card 2 */}
            <div className="relative bg-[#F2F2F2] dark:bg-slate-950 rounded-2xl px-4 xl:px-10 border border-gray-300 flex items-center justify-between min-h-[180px] sm:min-h-[200px] md:min-h-[230px] lg:min-h-[300px]">

              {/* Smaller Image */}
              <img
                src="/ProductBankfair/icon2.svg"
                className="w-[90px] md:w-[130px] xl:w-[180px] rounded-xl flex-shrink-0"
                alt=""
              />

              {/* Text */}
              <div className="max-w-lg py-4 ml-6">
                <H4 className="mb-3 dark:text-white">
                  Automate Daily Banking Operations
                </H4>

                <P>
                  System executes configured rules for account management, teller
                  transactions, and regulatory reporting. Processes run automatically
                  with role-based access controls and audit trails.
                </P>
              </div>

            </div>

          </div>


          {/* ROW 2 */}
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-8">

            {/* Card 3 */}
            <div className="relative bg-white dark:bg-slate-950 rounded-2xl px-4 xl:px-10 border border-gray-300 flex items-center justify-between min-h-[180px] sm:min-h-[200px] md:min-h-[230px] lg:min-h-[300px]">

              {/* Text */}
              <div className="max-w-xs py-4 mr-6">
                <H4 className="mb-4 dark:text-white">
                  Manage Customer Lifecycle  End-to-End
                </H4>

                <P>
                  Handle member onboarding, account modifications, lien noting, and
                  service requests through a unified interface. Customer data flows
                  seamlessly across all banking modules.
                </P>
              </div>

              {/* Smaller Image */}
              <img
                src="/ProductBankfair/icon3.svg"
                className="w-[90px] md:w-[120px] xl:w-[150px]  rounded-xl flex-shrink-0 xl:mr-15"
                alt=""
              />

            </div>


            {/* Card 4 - Background Image */}
            <div className="relative rounded-2xl   overflow-hidden  border border-gray-300 min-h-[180px] sm:min-h-[200px] md:min-h-[230px] lg:min-h-[260px]">

              <img
                src="/ProductBankfair/circles.webp"
                alt=""
                className="absolute inset-0 w-full h-full  dark:opacity-0 object-cover"
              />


              <div className="relative p-4 md:p-6 lg:p-8 xl:p-10 xl:left-15 xl:top-5">
                <H4 className="mb-4 dark:text-white">
                  Generate Reports and <br /> Ensure Compliance
                </H4>

                <P className="max-w-xs  ">
                  The system automatically produces regulatory reports, audit
                  logs, and transaction statements. Real-time dashboards provide
                  visibility into branch performance and operational metrics.
                </P>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GridSec;