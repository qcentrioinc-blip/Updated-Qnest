"use client";

import { H2, H4 } from "../../../styles/Typography";

export default function DataSection() {
  return (
    <section className="w-full  dark:bg-black py-0 lg:py-6 px-4 md:px-8">

      {/* TITLE */}
      <div className="max-w-5xl mx-auto text-center mb-6 lg:mb-12">
        <H2 className="text-[#00AA72] leading-tight">
          KYC Compliance
           and Monitoring Tools
        </H2>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden max-w-md mx-auto">

        <div className="flex flex-col gap-4">

          {/* Monitoring */}
          <div className="bg-white rounded-2xl shadow-xl p-5 dark:bg-slate-900">
            <H4 className="  dark:text-white text-[#00AA72] mb-2">Risk</H4>
            <ul className="list-disc pl-5 space-y-2 text-[14px] dark:text-white md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li>Risk profile creation based on customer type, residential status, and activities </li>
              <li>Risk categorization and probe scanning transactions for violations</li>
            </ul>
          </div>

          {/* Detection */}
          <div className="bg-white rounded-2xl shadow-xl p-5 dark:bg-slate-900">
            <H4 className="  dark:text-white text-[#00AA72] mb-2">KYC</H4>
            <ul className="list-disc dark:text-white pl-5 space-y-2 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li> Individual customer monitoring with same address customer identification features </li>
              <li>Corporate customer tracking with special status marking and related income verification </li>
            </ul>
          </div>

          {/* Case Mgmt */}
          <div className="bg-white rounded-2xl shadow-xl p-5 dark:bg-slate-900">
            <H4 className="  dark:text-white text-[#00AA72] mb-2">Monitoring</H4>
            <ul className="list-disc pl-5 space-y-2 dark:text-white text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li>Transaction monitoring and case management with customer and account level reports </li>
              <li>Comprehensive actions and collaborative actions for complete oversight </li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="bg-white rounded-2xl shadow-xl p-5 dark:bg-slate-900">
            <H4 className="  dark:text-white text-[#00AA72] mb-2">Screening</H4>
            <ul className="list-disc pl-5 space-y-2 dark:text-white text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li>Screening directory maintenance with sanction list name matching capabilities </li>
              <li>Compliance reporting with FATCA identification parameters and US indicia tracking </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-2 items-center relative">

        {/* LEFT */}
        <div className="flex flex-col justify-between h-[500px] p-6">

          <div className="bg-white rounded-2xl shadow-xl p-6 dark:bg-slate-900  lg:-mt-6 text-[16px] border border-gray-300">
            <ul className="list-disc pl-5 space-y-3 dark:text-white text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li>Risk profile creation based on customer type, residential status, and activities </li>
              <li>Risk categorization and probe scanning transactions for violations</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 dark:bg-slate-900  lg:mt-6 text-[16px]  border border-gray-300">
            <ul className="list-disc pl-5 space-y-3 dark:text-white text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li> Transaction monitoring and case management with customer and account level reports </li>
              <li>Comprehensive actions and collaborative actions for complete oversight </li>
            </ul>
          </div>
        </div>

        {/* CENTER CIRCLE */}
        <div className="flex justify-center items-center relative">
          <div className="absolute w-[500px] h-[500px]">

            <div className="w-full h-full rounded-full bg-[#00AA72] relative overflow-hidden">

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-white" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-full bg-white" />

              <H4 className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 text-white">
                Risk
              </H4>
              <H4 className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 text-white">
                KYC
              </H4>
              <H4 className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 text-white">
                Monitoring
              </H4>
              <H4 className="absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 text-white">
                Screening
              </H4>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" flex items-center justify-center">
                  <img 
                  className="text-black w-26 h-26"
                  src="/ProductSherlock/Vector1.svg"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between h-[500px] p-6">

          <div className="bg-white rounded-2xl shadow-xl p-6 dark:bg-slate-900  lg:-mt-6 text-[16px]  border border-gray-300">
            <ul className="list-disc pl-5 space-y-3 dark:text-white text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li> Individual customer monitoring with same address customer identification features </li>
              <li>Corporate customer tracking with special status marking and related income verification </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 dark:bg-slate-900  lg:mt-6 text-[16px]  border border-gray-300">
            <ul className="list-disc pl-5 space-y-3 dark:text-white text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand">
              <li>Screening directory maintenance with sanction list name matching capabilities </li>
              <li>Compliance reporting with FATCA identification parameters and US indicia tracking </li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
}