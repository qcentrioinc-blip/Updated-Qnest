"use client";

import { ArrowRight } from "lucide-react";
import { P } from "../../../styles/Typography";
import BNFNav from "../../Banking&Finance/Navbar/BNFnav";
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";

const products = [
  {
    id: 1,
    title: "CIP and CDD",
    link: "/industries/banking-and-finance/products/CIP",
    logo: "/AllProductLogos/CIP1.svg",
    description:
      "Policy-driven platform digitizing customer onboarding and lifecycle management with automated risk assessment, compliance workflows, and centralized data managemen ",
  },
  {
    id: 2,
    title: "Conciliare",
    link: "/industries/banking-and-finance/products/conciliare",
    logo: "/AllProductLogos/Conciliare.webp",
    description:
      "Automates financial reconciliation across systems with high matching accuracy, straight-through processing, automatic report generation, and reduced manual effort. ",
  },
  {
    id: 3,
    title: "SAMS",
    link: "/industries/banking-and-finance/products/sams",
    logo: "/AllProductLogos/SAMS.webp",
    description:
      "Stressed asset management system providing NPA tracking, automated provisioning, regulatory compliance, real-time dashboards, and predictive analytics for early detection. ",
  },
  {
    id: 4,
    title: "Sherlock",
    link: "/industries/banking-and-finance/products/sherlock",
    logo: "/AllProductLogos/Sherlock.webp",
    description:
      "Advanced AML monitoring solution with transaction screening, customer risk profiling, banned entity checks, automated alerts, and regulatory compliance management. ",
  },
  {
    id: 5,
    title: "ALMANAC",
    link: "/industries/banking-and-finance/products/almanac",
    logo: "/AllProductLogos/Almanac.webp",
    description:
      "Asset and liability management system integrating risk management, liquidity forecasting, multi-currency operations, regulatory reporting, and scenario simulation. ",
  },
  {
    id: 6,
    title: "Internet Banking",
    link: "/industries/banking-and-finance/products/internet-banking-system",
    logo: "/AllProductLogos/ibs.svg",
    description:
      "Comprehensive digital banking platform offering real-time account access, secure transactions, seamless core banking integration, and a user-friendly dashboard. ",
  },
  {
    id: 7,
    title: "Loan Origination",
    link: "/industries/banking-and-finance/products/loan-origination-system",
    logo: "/AllProductLogos/LOS.webp",
    description:
      "End-to-end loan processing system with digital applications, pre-approved offers, eVerification, OCR document processing, and configurable approval workflows. ",
  },
  {
    id: 8,
    title: "Remitree",
    link: "/industries/banking-and-finance/products/remitree",
    logo: "/AllProductLogos/Remitree.webp",
    description:
      "Middleware bridging core banking systems and Swift Alliance Gateway for cross-border remittances with bi-directional message handling and real-time monitoring. ",
  },
  {
    id: 9,
    title: "PAGO",
    link: "/industries/banking-and-finance/products/pago",
    logo: "/AllProductLogos/PAGO.webp",
    description:
      "Payment and settlement system supporting multiple transaction modes with atomicity, real-time monitoring, robust security, seamless integration, and user-friendly interface. ",
  },
  {
    id: 10,
    title: "Bankfair",
    link: "/industries/banking-and-finance/products/bankfair",
    logo: "/AllProductLogos/Bankfair.webp",
    description:
      "Core banking and loan management system enabling account management, transactions, product parameterization, advanced security features, and scalable banking operations. ",
  },
];

export default function AllProducts() {
  return (
    <>
      <BNFNav />
      <div className="bg-gray-100 ">
      <section className="max-w-7xl mx-auto xl:px-6 pt-24 lg:pt-48 py-8 md:py-12 px-4 sm:px-6 lg:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-14">
          
          {[...products]
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((product) => (
              
              <a
                key={product.id}
                href={product.link}
                className="group relative rounded-xl bg-white border border-gray-200 flex flex-col justify-between p-5 md:p-6 min-h-[250px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div>

                  <div className="flex justify-between items-center h-[30px] md:h-[50px] mb-4 xl:mb-6">

  {/* LOGO - LEFT */}
  <img 
    src={product.logo} 
    alt={`${product.title} logo`} 
    className="max-h-full w-auto object-contain"
  />

  {/* ARROW - RIGHT */}
  <div
    className="
      w-9 h-9 md:w-10 md:h-10
      flex items-center justify-center
      rounded-full bg-white shadow-md
      group-hover:scale-110 transition
      flex-shrink-0
    "
  >
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#00AA72]" />
  </div>

</div>

                  {/* <H3 className="mb-3 text-start">
                    {product.title}
                  </H3> */}

                  <P className="text-sm md:text-base text-gray-600 mb-6 line-clamp-6 text-start">
                    {product.description}
                  </P>
                </div>

                <div className="flex items-center justify-center w-full h-[44px] md:h-[48px] rounded-[8px] font-quicksand font-bold text-sm md:text-base bg-[#141414] text-white transition-all duration-300 border border-transparent hover:bg-white hover:text-[#141414] hover:border-[#010101] hover:border-b-[4px] hover:-translate-y-[2px] shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]">
                  Get Started
                </div>
              </a>
          ))}
        </div>

       
      </section>
      </div>
       <NewOneFooter/>
    </>
  );
}