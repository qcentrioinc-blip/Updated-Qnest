"use client";

import { H1, H3 } from "../../../styles/Typography";

export default function CardsSec() {
  return (
    <section className="w-full py-4 px-4 md:px-8">
      
      {/* Heading */}
      <div className="text-center max-w-5xl mx-auto mb-10">
        <H1 className="">
          <span className="text-[#00AA72]">
           Enterprise-Grade Security and
          </span>
          <br />
          <span className="text-gray-800">
            Regulatory Compliance Standards 
          </span>
        </H1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT CARD */}
        <div
          className="relative bg-white p-6 sm:p-8 shadow-2xl border border-gray-200
          rounded-xl 
          [border-top-right-radius:40px] 
          [border-bottom-left-radius:34px]
          h-full flex flex-col justify-between"
        >
          
          {/* Title */}
          <H3 className="text-gray-800 mb-4 leading-snug">
            OWASP{" "}
            <span className="text-[#00AA72]">Compliant Security </span>{" "}
            <br />
             Framework for  <span className="text-[#00AA72]"> Banking Operations</span>
          </H3>

          {/* Description */}
          <p className=" mb-6">
            BankFair adheres to OWASP Top 10 security standards to protect sensitive banking data. The platform ensures secure access, transaction integrity, and comprehensive audit capabilities across all modules.
          </p>

          {/* Checklist */}
          <ul className="space-y-3 mt-auto">
            {[
              "Role-based access control with granular user permissions and privileges ",
              "Comprehensive audit trails tracking all user actions and system events ",
              "Transaction-level security controls for sensitive banking operations ",
              "Data protection aligned with OWASP Top 10 security standards ",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                <span className="text-black mt-1">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-full">
          <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden [border-top-right-radius:40px] 
          [border-bottom-left-radius:34px]">
            <img
              src="/ProductBankfair/card.webp"
              alt="Security"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}