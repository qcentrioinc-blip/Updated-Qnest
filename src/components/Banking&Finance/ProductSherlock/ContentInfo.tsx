import { Link } from "react-router-dom";
import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";

export default function ContentInfo() {
  return (
    <section className="w-full dark:bg-black py-16">
      <div className="max-w-7xl mx-auto  px-4 md:px-6 lg:px-8">

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* LEFT SECTION */}
          <div className="flex-1">
            <H2 className="text-[#00AA72] mb-6 max-w-3xl">
              Key Benefits of SHERLOCK AML System 
            </H2>

            <P className="mt-4 text-black max-w-3xl">
              Financial institutions gain comprehensive money laundering detection, automated compliance processes, and reduced manual effort through SHERLOCK's integrated monitoring and screening capabilities. 
            </P>

            <div
              style={{ borderTop: "0.2px solid #00AA72" }}
              className="w-full max-w-xl my-12"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mb-10">
              <div>
                <H4 className="dark:text-white">Regulatory Compliance </H4>
                <P className="mt-4">
                  Meets global AML regulations with automated reporting and audit trails. 
                </P>
              </div>

              <div>
                <H4 className="dark:text-white">Operational Efficiency </H4>
                <P className="mt-4">
                  Reduces manual work through automated transaction monitoring and alerts. 
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
              <ContactUs>Book Demo </ContactUs>
            </Link>
          </div>

          {/* RIGHT SECTION - CARDS */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                <div className="w-12 h-12 bg-[#00AA72] flex items-center justify-center rounded-full mb-4">
                   <img className="w-8 h-8 rounded-xl"
                src="/ProductSherlock/icon8.svg"
                alt="image"/>
                </div>
                <H4 className="dark:text-white">Time Savings</H4>
                <P className="mt-3 text-sm">
                  Automates repetitive monitoring tasks, reducing hours spent on manual transaction review and investigation significantly. 
                </P>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                <div className="w-12 h-12 bg-[#00AA72] flex items-center justify-center rounded-full mb-4">
                   <img className="w-8 h-8 rounded-xl"
                src="/ProductSherlock/icon4.svg"
                alt="image"/>
                </div>
                <H4 className="dark:text-white">Risk Reduction</H4>
                <P className="mt-3 text-sm">
                  Detects suspicious activities early through real-time monitoring and alerts, preventing potential money laundering incidents. 
                </P>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition">

                {/* Background Image */}
                <img
                  src="/ProductSherlock/icon11.svg"
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Content */}
                <div className="relative p-6 text-white">

                  <div className="w-12 h-12 bg-[#00AA72] flex items-center justify-center rounded-full mb-4">
                    <img
                      className="w-8 h-8"
                      src="/ProductSherlock/icon9.svg"
                      alt="icon"
                    />
                  </div>

                  <H4 className="dark:text-white">Cost Efficiency</H4>

                  <P className="mt-3 text-white">
                    Lowers compliance operational costs by automating watch list checks, KYC verification, and regulatory reporting processes.
                  </P>

                </div>

              </div>

              {/* Card 4 */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
               <div className="w-12 h-12 bg-[#00AA72] flex items-center justify-center rounded-full mb-4">
                   <img className="w-8 h-8 rounded-xl"
                src="/ProductSherlock/icon10.svg"
                alt="image"/>
                </div>
                <H4 className="dark:text-white">Audit Readiness </H4>
                <P className="mt-3 text-sm">
                  Maintains comprehensive audit trails and detailed reports for regulators, ensuring transparency and compliance always. 
                </P>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}