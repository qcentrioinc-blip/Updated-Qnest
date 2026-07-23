interface CTAButtonProps {
  label: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = () => {
  return (
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
      {/* <ContactUs className="hidden xl:block gap-2 whitespace-nowrap shrink-0">
        Learn More
      </ContactUs> */}
    </Link>
  );
};

export default function Section() {
  return (
    <section className="bg-[#F4F5FC] dark:bg-black py-10">
      <div className="max-w-7xl mx-auto xl:px-6 px-6">
        <div className="grid xl:grid-cols-2 gap-10 items-center">

          {/* LEFT CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row justify-between sm:space-x-8 space-y-6 sm:space-y-0 min-h-[420px]">
            <div className="flex flex-col justify-between">
              <div>
                <button className="border dark:border-gray-200 text-[#00AA72] border-[#141414] font-quicksand text-[18px] xl:text-[22px] px-6 py-2 rounded-full mb-6">
               Configure Once
                </button>

                <p className="text-[16px] dark:text-white font-quicksand mb-8 max-w-full xl:max-w-md">
                 BankFair enables comprehensive configuration of banking rules and complete account lifecycle management from opening to closure.
                </p>
              </div>

              <div>
                <H4 className="text-2xl dark:text-white font-semibold mb-4">
                   Core Banking and Lifecycle Management
                </H4>
                <CTAButton label="Learn More" />
              </div>
            </div>

            <img
              src="/CTABUTTONBANKFAIR.webp"
              alt="img"
              className="w-full sm:w-[300px] sm:h-full xl:h-[550px] h-[250px] bg-gray-200 object-cover rounded-xl flex-shrink-0"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-start items-start">
            <H2 className="text-4xl md:text-5xl dark:text-white font-bold leading-tight mb-6">
             Account Services and<br />
              <span className="text-[#00AA72]"> Lifecycle Management  </span>
            </H2>

            <P className="mb-8 max-w-3xl xl:max-w-xl ">
         Manage complete account lifecycle with standing instructions, lien markings, and limits. Handle inventory services including cheque books, cards, and certificates.
            </P>
            <P className="mb-8 max-w-3xl xl:max-w-xl">
         Collateralize accounts with freeze management and dormancy controls. Process salary and generate statements. End-to-end account operations within a unified platform. 
            </P>

            {/* ACCORDION */}
            <div className="space-y-4 w-full">
              <AccordionItem
                title="Channel Management and Digital Banking"
                content="Create profiles for customers with digital payments capabilities. Support creation of CASA, term deposits, loans, and office accounts. Enable online and mobile banking access."
                defaultOpen
              />
              <AccordionItem
                title="Integrated Asset and Inventory Management"
                content="  Calculate depreciation automatically and post accounting entries. Write off assets with automated entries. Distribute inventory items to multiple locations"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// AccordionItem.tsx
import { useState } from "react";
import {  H2, H4, P } from "../../../styles/Typography";
// import { ContactUs } from "../../../styles/Button";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<Props> = ({
  title,
  content,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white  dark:bg-slate-950 rounded-xl p-5 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex font-quadran   text-[18px] xl:text-[24px] justify-between items-center text-left font-medium"
      >
        <span className="pr-4 dark:text-[#00AA72]">{title}</span>
        <span className="text-xl flex-shrink-0">{open ? "-" : "+"}</span>
      </button>

      {open && (
        <P className="mt-3   text-sm">
          {content}
        </P>
      )}
    </div>
  );
};