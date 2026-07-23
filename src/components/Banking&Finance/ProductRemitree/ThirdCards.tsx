import { Link } from "react-router-dom";
import { H2, P } from "../../../styles/Typography";

const ThirdCards = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-12 xl:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-6">

        {/* Two Column Layout like Intro.tsx but adjusted ratio to increase right side width */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] xl:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 xl:gap-20 items-center">

          {/* LEFT SIDE */}
          <div>
            <H2 className="mb-6 leading-tight">
              <span className="text-[#00AA72] block">Robust Security Framework</span>
              <span className="text-[#141414] dark:text-white block">for Payment Transactions</span>
            </H2>

            <P className="text-base md:text-lg text-[#141414] mb-8 leading-relaxed pr-0 md:pr-4">
              Remitree ensures secure cross-border payments with maker-checker controls, restricted key field modifications, and validation of outgoing messages against source systems before transmission
            </P>

            <Link
              to="/contact"
              onClick={(e) => {
                const el = document.getElementById("contact-us");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <button
                className="
                  group
                  inline-flex items-center justify-center
                  w-auto h-[44px] sm:h-[48px]
                  px-[20px] sm:px-[24px] rounded-[8px]
                  font-quicksand font-bold text-[14px] sm:text-[16px]
                  bg-[#141414] text-white
                  transition-all duration-300 ease-in-out
                  border border-transparent
                  hover:bg-[#1a1a1a] hover:border-[#010101]
                  hover:border-b-[4px] hover:-translate-y-[2px]
                  shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
                "
              >
                Learn More
                <span className="flex items-center ml-[8px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col w-full relative lg:pr-6">
            <div className="bg-[#f9fafb] dark:bg-slate-900 border border-[#e5e7eb] rounded-[32px] px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-8 lg:py-4 shadow-sm">
              {[
                { label: 'Maker and checker approval controls', img: '/Remitree/bank.svg' },
                { label: 'Outgoing messages validated with source system', img: '/Remitree/integrations.svg' },
                { label: 'Restricted modification of key fields', img: '/Remitree/insurance.svg' }
              ].map((stat, i, arr) => (
                <div
                  key={i}
                  className={`flex items-center gap-5 xl:gap-6 py-5 xl:py-5 ${i !== arr.length - 1 ? 'border-b border-[#cbd5e1]' : ''
                    }`}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#00AA72]">
                    {/* Applying a blue color filter to the original white icons so they look like standalone dummy icons */}
                    <img src={stat.img} alt="icon" className="w-[34px] h-[34px] xl:w-12 xl:h-12 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(32%) sepia(87%) saturate(1637%) hue-rotate(200deg) brightness(91%) contrast(92%)' }} />
                  </div>
                  <P className="
                    font-sans font-normal
                    leading-[1.4] whitespace-pre-line text-[#1f2937]
                    text-[17px] xl:text-[20px]
                  ">
                    {stat.label}
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

export default ThirdCards;
