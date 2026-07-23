"use client";
import { useState, useRef, useEffect } from "react";
import { H2, P } from "../../../styles/Typography";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const glossaryData: Record<string, { term: string; description: string }[]> = {

  A: [
    {
      term: "AML (Anti-Money Laundering)",
      description:
        "Regulations and procedures designed to stop illegal income generation. Qnest's AI-enabled Sherlock product automates AML compliance by monitoring transactions and financial messages in real time to detect suspicious activities.",
    },
    {
      term: "ALMANAC",
      description:
        "Qnest's asset and liability management system integrating risk management, liquidity forecasting, and regulatory reporting. It provides financial analytics, scenario simulation, and long-term planning with multi-currency support and predictive analytics for capital management.",
    },
    {
      term: "Asset Classification",
      description:
        "The process of categorizing loans based on risk of default as defined by IRAC guidelines. This determines provisioning requirements and impacts financial health reporting while helping institutions manage risk effectively.",
    },
  ],

  B: [
    {
      term: "BAI2",
      description:
        "A standard file format used by banks worldwide to provide account information. Qnest's Conciliare platform supports parsing and reconciling BAI2 files along with SWIFT, MT940, and SAP formats for comprehensive reconciliation.",
    },
    {
      term: "Bankfair",
      description:
        "Qnest's core banking and loan management system featuring extensive parameterization to manage branches, currencies, products, user roles, and transactions without custom code changes.",
    },
    {
      term: "BIC (Bank Identifier Code)",
      description:
        "A unique code used to identify a specific bank during international transactions.",
    },
  ],

  C: [
    {
      term: "CDD (Customer Due Diligence)",
      description:
        "The process of gathering and verifying customer information to assess risk.",
    },
    {
      term: "Conciliare",
      description:
        "Qnest's AI-powered reconciliation platform automating matching of financial data.",
    },
    {
      term: "Core Banking System (CBS)",
      description:
        "The central software managing daily transactions, customer accounts, and ledgers.",
    },
    {
      term: "Cross-Border Remittance",
      description:
        "Transfer of funds from one country to another involving currency conversion and compliance.",
    },
    {
      term: "Cube",
      description:
        "User interface component of PAGO allowing participants to interact with the payment platform.",
    },
  ],

  D: [
    {
      term: "Data Enrichment",
      description:
        "A Conciliare feature enhancing raw data by extracting identifiers from free text fields.",
    },
    {
      term: "Designer",
      description:
        "A Bankfair tool allowing institutions to customize financial products.",
    },
    {
      term: "DPD (Days Past Due)",
      description:
        "The number of days a payment is overdue. Key metric for identifying NPAs.",
    },
  ],

  E: [
    {
      term: "e-Cheque",
      description:
        "An electronic version of a paper cheque facilitating digital payments.",
    },
    {
      term: "eVerification",
      description:
        "A feature in Qnest's LOS using electronic methods to verify customer documents.",
    },
    {
      term: "Exception Handling",
      description:
        "Bankfair's systematic approach categorizing operational issues.",
    },
  ],

  F: [
    {
      term: "Financial Crime Risk Management",
      description:
        "Processes and controls detecting and preventing money laundering and fraud.",
    },
  ],

  G: [
    {
      term: "G-Sec (Government Securities)",
      description:
        "Debt instruments issued by governments considered low-risk investments.",
    },
  ],

  H: [
    {
      term: "Hub",
      description:
        "The central transaction routing component in PAGO.",
    },
    {
      term: "Holiday Calendar",
      description:
        "A Bankfair feature managing branch-specific non-working days.",
    },
  ],

  I: [
    {
      term: "IRAC",
      description:
        "Regulatory guidelines dictating how institutions classify assets.",
    },
    {
      term: "Internet Banking Solution",
      description:
        "Qnest's digital front-end providing secure account access.",
    },
  ],

  K: [
    {
      term: "KYC (Know Your Customer)",
      description:
        "Mandatory process of identifying and verifying clients.",
    },
  ],

  L: [
    {
      term: "Legacy System",
      description:
        "Outdated systems hindering modernization and efficiency.",
    },
    {
      term: "Loan Origination System (LOS)",
      description:
        "Qnest's platform streamlining digital loan processing.",
    },
  ],

  M: [
    {
      term: "MT940",
      description:
        "A SWIFT message format reporting detailed account activity.",
    },
    {
      term: "MT103",
      description:
        "A SWIFT message format for customer credit transfers.",
    },
  ],

  N: [
    {
      term: "NACHA",
      description:
        "Organization managing the ACH network for electronic payments.",
    },
    {
      term: "NOSTRO Account",
      description:
        "An account a bank holds in foreign currency in another bank.",
    },
    {
      term: "NPA",
      description:
        "A loan where borrower has stopped payments for a specified period.",
    },
  ],

  O: [
    {
      term: "OCR",
      description:
        "Technology converting document images into machine-readable data.",
    },
    {
      term: "Onboarding",
      description:
        "The process of acquiring and setting up new customers.",
    },
  ],

  P: [
    {
      term: "PAGO",
      description:
        "Qnest's versatile payment system supporting e-cash, e-cheques, and e-wallets.",
    },
    {
      term: "Parameterization",
      description:
        "Bankfair's core feature allowing banks to configure operations without coding.",
    },
    {
      term: "Predictive Analytics",
      description:
        "Use of historical data and machine learning to forecast outcomes.",
    },
  ],

  R: [
    {
      term: "Reconciliation",
      description:
        "Process ensuring two sets of financial records are in agreement.",
    },
    {
      term: "Remitree",
      description:
        "Qnest's middleware for cross-border remittances.",
    },
    {
      term: "RTGS",
      description:
        "A continuous funds transfer system settling transactions individually.",
    },
  ],

  S: [
    {
      term: "SAMS",
      description:
        "Qnest's product automating NPA tracking and provisioning.",
    },
    {
      term: "Sherlock",
      description:
        "Qnest's AI-enabled anti-money laundering solution.",
    },
    {
      term: "STP",
      description:
        "Automated end-to-end transaction processing requiring no manual intervention.",
    },
    {
      term: "SWIFT",
      description:
        "Global network for secure financial information exchange.",
    },
  ],

  T: [
    {
      term: "Teller Denomination",
      description:
        "Bankfair feature assisting tellers with cash counting.",
    },
    {
      term: "Trigger Event",
      description:
        "Specific occurrence initiating a new due diligence review.",
    },
  ],

  U: [
    {
      term: "UCC (Uniform Customer Code)",
      description:
        "Unique identifier unifying customer credit facilities across products.",
    },
    {
      term: "User Role Management",
      description:
        "A security feature defining privileges for user types.",
    },
  ],

  V: [
    {
      term: "Value at Risk (VaR)",
      description:
        "A statistical technique measuring financial risk.",
    },
  ],

  W: [
    {
      term: "Watch List",
      description:
        "Compiled list of sanctioned or high-risk entities.",
    },
    {
      term: "Workflow Automation",
      description:
        "Software completing tasks with minimal human input.",
    },
  ],

  X: [
    {
      term: "XML",
      description:
        "Flexible text format for storing and transporting data between systems.",
    },
  ],

  Y: [
    {
      term: "Yield Curve",
      description:
        "A line plotting the interest rates of bonds with different maturities.",
    },
  ],

  Z: [
    {
      term: "Zero-Code Configuration",
      description:
        "Qnest's principle allowing business users to configure rules without coding.",
    },
  ],

};

export default function GlossaryPage() {

  const [activeLetter, setActiveLetter] = useState("A");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const alphabetRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const isManualScroll = useRef(false);

  const [isScrollUp, setIsScrollUp] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrollUp(currentY < lastScrollY.current);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (letter: string) => {

    isManualScroll.current = true;
    setActiveLetter(letter);

    sectionRefs.current[letter]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isManualScroll.current = false;
    }, 700);

  };

  useEffect(() => {

    const handleScroll = () => {

      if (isManualScroll.current) return;

      const scrollPos = window.scrollY;
      let current = "A";

      Object.keys(sectionRefs.current).forEach((letter) => {

        const ref = sectionRefs.current[letter];

        if (ref && ref.offsetTop - 200 <= scrollPos) {
          current = letter;
        }

      });

      setActiveLetter(current);

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {
    const el = alphabetRefs.current[activeLetter];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeLetter]);

  const toggleItem = (item: string) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  return (

    <div className="w-full  dark:bg-black font-quadran  ">

      <div
        className={`sticky z-40 bg-black text-white border-b border-gray-700 transition-all duration-300 ${isScrollUp ? "top-14 lg:top-[120px]" : "top-0 lg:top-18"
          }`}
      >

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 lg:gap-10 px-4 py-3 lg:py-4">

          {alphabet.map((letter) => (

            <button
              key={letter}
              ref={(el) => {
                alphabetRefs.current[letter] = el;
              }}
              onClick={() => handleScrollTo(letter)}
              className={`snap-center text-xl lg:text-2xl font-semibold transition-colors ${activeLetter === letter
                ? "text-[#FFB800]"
                : "text-white/70 hover:text-white"
                }`}
            >

              {letter}

            </button>

          ))}

        </div>

      </div>

      <div className="pt-10 mx-4 max-w-8xl lg:mx-10">

        {alphabet.map((letter) => (

          <div
            key={letter}
            ref={(el) => {
              sectionRefs.current[letter] = el;
            }}
            className="mb-10 scroll-mt-[160px]"
          >

            <H2 className="mb-4 dark:text-[#00AA72]">{letter}</H2>

            {glossaryData[letter]?.length ? (

              glossaryData[letter].map((entry) => (

                <div
                  key={entry.term}
                  className="border-b border-gray-300 py-4 cursor-pointer"
                  onClick={() => toggleItem(entry.term)}
                >

                  <div className="flex justify-between items-center">

                    <P>{entry.term}</P>

                    <span className="text-black  dark:text-white text-xl">
                      {openItem === entry.term ? "−" : "+"}
                    </span>

                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openItem === entry.term ? "max-h-[500px] mt-2" : "max-h-0"
                      }`}
                  >

                    <P className="leading-relaxed">{entry.description}</P>

                  </div>

                </div>

              ))

            ) : (

              <P>No entries available under {letter}</P>

            )}

          </div>

        ))}

      </div>

    </div>

  );

}