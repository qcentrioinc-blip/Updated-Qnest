import { Link } from "react-router-dom";
// import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";
import { Settings, LifeBuoy, Plug } from "lucide-react";

export default function Sec_4() {
  return (
    <section className="w-full bg-[#F4F4F4] dark:bg-black py-10">
      <div className="max-w-7xl mx-auto px-10 xl:px-6">

        {/* Two Column Layout */}
        <div className="relative flex flex-col lg:flex-row gap-16 lg:gap-20">

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-[#00AA72] -translate-x-1/2" />

          {/* LEFT SECTION */}
          <div className="flex-1 lg:pr-16">
            <H2 className="text-[#00AA72] mb-6 max-w-xl">
              Zero code policy configuration engine
            </H2>

            <P className="mt-4 text-black max-w-xl">
              Automatically identify connected parties and ultimate beneficial
              owners based on configured thresholds and entity types.
            </P>

            <div
              style={{ borderTop: "0.2px solid #00AA72" }}
              className="w-full max-w-xl my-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-xl mb-10">
              <div>
                <H4 className="dark:text-white">Significant cost savings</H4>
                <P className="mt-4">
                  Over fifty percent reduction in CIP processing costs with automated workflows.
                </P>
              </div>

              <div>
                <H4 className="dark:text-white">Security & Integrations</H4>
                <P className="mt-4">
                  Connect with core systems, screening engines, and data sources securely.
                </P>
              </div>
            </div>

            <Link
              to="#contact-us"
              onClick={(e) => {
                const el = document.getElementById("contact-us");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {/* <ContactUs>CONTACT US</ContactUs> */}
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex-1 space-y-6">

            {/* Card 1 */}
            <div className="border border-gray-300 rounded-lg px-6 py-4 dark:bg-slate-900 bg-white">
              <div className="flex flex-col gap-4 items-start">
                <Settings className="text-[#00AA72] mt-1" size={30} />
                <div>
                  <H4 className="dark:text-white">Zero code policy configuration engine</H4>
                  <P className="mt-2 text-gray-900">
                    Configure due diligence parameters on the go without vendor support.
                  </P>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-300 rounded-lg px-6 py-4 dark:bg-slate-900 bg-white">
              <div className="flex flex-col gap-4 items-start">
                <LifeBuoy className="text-[#00AA72] mt-1" size={30} />
                <div>
                  <H4 className="dark:text-white">Full client lifecycle coverage</H4>
                  <P className="mt-2 text-gray-900">
                    Manage onboarding, periodic reviews, and trigger events seamlessly.
                  </P>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-300 rounded-lg px-6 py-4 dark:bg-slate-900 bg-white">
              <div className="flex flex-col gap-4 items-start">
                <Plug className="text-[#00AA72] mt-1" size={30} />
                <div>
                  <H4 className="dark:text-white">Seamless API integrations</H4>
                  <P className="mt-2 text-gray-900">
                    Connect with data sources, screening engines, and core systems.
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