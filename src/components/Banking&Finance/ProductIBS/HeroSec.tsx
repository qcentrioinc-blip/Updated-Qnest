"use client";

import { H1, P } from "../../../styles/Typography";

const HeroSec = () => {
  return (
    <section className="w-full mt-10 dark:bg-black xl:mt-0">

      {/* ================= MOBILE DESIGN ================= */}
      <div className="block md:hidden px-4 mt-18">

        {/* Heading */}
        <H1 className=" text-gray-900 dark:text-white leading-snug mb-6">
          FFIEC-Aligned Complete Internet Banking Solution for Financial Institutions
        </H1>

        {/* Image */}
        <img
          src="/ProductIBS/Hero1.webp"
          alt="section image"
          className="w-full h-auto rounded-xl mb-6"
        />

        {/* LEFT CARD (below image) */}
        <div className="bg-blue-600 text-white p-4 rounded-xl w-full mb-4 shadow-md">
          <P className="font-semibold mb-1 text-white">Customer Access</P>
          <P className=" leading-relaxed text-white/80">
            Secure online portal for customers to view accounts, transfer funds,
            pay bills, and manage transactions from anywhere.
          </P>
        </div>

        {/* RIGHT CARD (below left, aligned right) */}
        <div className=" bg-blue-400 text-black p-4 rounded-xl w-full mb-6 shadow-md">
          <P className=" leading-relaxed text-white">
            Seamlessly connects with core banking systems for real-time account
            updates, transaction processing, and secure data synchronization.
          </P>
        </div>

        {/* Bottom Card */}
        <div className="bg-black text-white rounded-xl p-4 flex items-center justify-center">
          <P className="font-semibold text-white">Bank Integration</P>
          {/* <span className="text-xl">+</span> */}
        </div>

      </div>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block w-full overflow-hidden relative">

        <img
          src="/ProductIBS/HEROIBS.webp"
          alt="section image"
          className="w-full h-auto object-cover"
        />

        <img
          src="/ProductIBS/icon13.svg"
          alt="rotating icon"
          className="
            absolute
            bottom-2 right-33
            md:bottom-4 md:right-65
            lg:bottom-6 lg:right-100
            xl:bottom-6 xl:right-120
            w-[30px]
            sm:w-[50px]
            md:w-[60px]
            lg:w-[80px]
            xl:w-[100px]
            animate-spin-slow
          "
        />

      </div>

      {/* Animation */}
      <style>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  );
};

export default HeroSec;