import {   P } from "../../../styles/Typography";

export default function CTABanner() {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-full mx-auto">
        <div className="relative w-full overflow-hidden bg-[#00AA72] min-h-[220px] sm:min-h-[260px]  lg:min-h-[50vh] xl:min-h-[75vh] flex flex-col xl:flex-row">

          <div className="absolute top-0  left-0 lg:left-10 xl:-left-20  w-[220px] h-[220px]  lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-full rounded-full  border-[14px]  lg:border-[50px] xl:border-[60px] border-[#008E60] opacity-50 z-0" />

          {/* LEFT: Card */}
          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 w-full lg:w-xl">
            <div className="relative w-full max-w-[450px]  mx-auto xl:mx-0 xl:absolute lg:left-[60%] xl:left-52 xl:top-14">
              <img
                src="/LOS/CTA.svg"
                alt=""
                className="absolute inset-0 w-full h-[450px]   object-fill "
              />
              <div className="relative p-7 sm:p-9">
                <h3  className="text-white font-quadran   text-[24px] lg:text-[43px] font-bold leading-tight mb-4">
                  Ready to Transform <br className=" lg:hidden  block"/>Your  Loan Origination
                </h3>
                <P className="text-white text-sm leading-relaxed mb-5">
                  Schedule a demo to see how LOS digitizes applications, automates approvals, and enhances customer experience.
                </P>
                <hr className="border-white mb-5" />
                <button className="flex items-center gap-3 bg-white text-[#003A27] font-bold text-sm px-5  py-2 lg:py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#003A27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <h3 className="font-quadran    text-[18px] lg:text-[28px] text-[#141414]">Explore LOS Today</h3>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile: hero image */}
          <div className="xl:hidden relative z-10 w-full h-[220px] sm:h-[280px]">
            <img
              src="/LOS/CTAHero.webp"
              alt="Team working on loan origination"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Mobile: simplify badge */}
          <div className="xl:hidden relative z-10 flex items-center gap-3 bg-white mx-4  lg:mx-0 xl:mx-4 mb-6 rounded-xl px-4 py-3 shadow-lg">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#003A27] flex items-center justify-center">
              <img className="w-8 h-8" src="/LOS/Wrench.svg" />
            </div>
            <P className="text-[#003A27] font-bold text-sm leading-snug">
              Simplify lending from application to disbursement.
            </P>
          </div>

          {/* RIGHT: Desktop image — untouched */}
          <div className="hidden xl:block relative z-10 flex-1">
            <div className="absolute pt-8 pb-2 inset-0 overflow-hidden">
              <img
                src="/LOS/CTAHero.webp"
                alt="Team working on loan origination"
                className="w-full h-full object-contain object-right"
              />
            </div>

            <div className="absolute bottom-2 right-0 z-20 flex items-center gap-3 max-w-full">
              <div className="flex flex-row">
                <div className="shrink-0 absolute top-0 -left-10 w-26 h-26 rounded-full bg-[#003A27] flex items-center justify-center">
                  <img className="w-12 h-12" src="/LOS/Wrench.svg" />
                </div>
                <div className="bg-white py-2 rounded-l-4xl">
                  <h3 className="text-[#141414] pl-20 pr-10 font-quadran   text-[30px] font-bold text-sm leading-snug">
                    Simplify lending from<br />application to disbursement
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}