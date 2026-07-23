"use client";

import { H1, P } from "../../../styles/Typography";

const ImgSec = () => {
  return (
    <section className="w-full py-6">

      {/* ================= MOBILE DESIGN ================= */}
      <div className="block md:hidden px-4">

        {/* Title */}
        <H1 className=" text-[#00AA72] leading-snug mb-6">
          Transform Your Bank with Bankfair
        </H1>

        {/* Image */}
        <img
          src="/ProductBankfair/CTA1.webp"
          alt="section image"
          className="w-full h-100 rounded-xl mb-6"
        />

        {/* Left Text */}
        <div className="mb-4">
          <P className="leading-relaxed">
            See firsthand how parameterization eliminates manual work and
            accelerates product launches for your institution.
          </P>
        </div>

        {/* Right Text */}
        <div className="bg-gray-100 dark:bg-black p-4 rounded-xl">
          <P className=" leading-relaxed">
            Book a personalized demo to explore automation, compliance features,
            and multi-branch scalability.
          </P>
        </div>

      </div>

      {/* ================= TABLET & DESKTOP (UNCHANGED) ================= */}
     {/* ================= TABLET & DESKTOP ================= */}
<div className="hidden md:grid grid-cols-12 w-full min-h-[500px]">

  {/* Left Green Section */}
  <div className="col-span-5 bg-[#00AA72] text-white flex flex-col justify-between p-10 lg:p-14">
    <div>
      <H1 className="text-white leading-tight max-w-lg">
        Transform Your Bank with Bankfair
      </H1>
    </div>

    <P className="text-white max-w-sm leading-relaxed">
      See firsthand how parameterization eliminates manual work and
      accelerates product launches for your institution.
    </P>
  </div>

  {/* Center Image */}
  <div className="col-span-3">
    <img
      src="/ProductBankfair/CTA1.webp"
      alt="Bankfair"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Section */}
  <div className="col-span-4 flex flex-col">

    {/* Green Top */}
    <div className="bg-[#00AA72] flex justify-end items-start p-8 h-1/2">
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
        <img
          src="/BankfairDollar.svg" // replace with your icon
          alt="icon"
          className="w-8 h-8"
        />
      </div>
    </div>

    {/* Grey Bottom */}
    <div className="bg-[#F3F3F3] dark:bg-neutral-900 flex items-center p-10 h-1/2">
      <P className="leading-relaxed max-w-xs">
        Book a personalized demo to explore automation, compliance
        features, and multi-branch scalability.
      </P>
    </div>

  </div>

</div>

    </section>
  );
};

export default ImgSec;