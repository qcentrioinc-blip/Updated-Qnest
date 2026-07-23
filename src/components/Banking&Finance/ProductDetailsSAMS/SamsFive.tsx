import { H2, H4, P } from "../../../styles/Typography";


// ─── Feature Card Component ───────────────────────────────────────────────────
const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
  <div
    className="flex flex-1 flex-col rounded-[20px] bg-white dark:bg-gray-900 p-6 sm:p-8 border border-white h-full"
    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
  >
    <img src={icon} className="w-10 h-10 object-cover" />
    <H4 className="mt-6  dark:text-white mb-3 text-[18px] sm:text-[20px]">{title}</H4>
    <P className="leading-[1.7] text-[14px] sm:text-[14.5px]">{description}</P>
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const cards = [
  { id: 1, title: "NPL Identification", description: "System identifies NPL records based on IRAC guidelines using various attribute combinations and NPL rules for financial and non-financial cases.", icon: "/SAMS/id-card.svg" },
  { id: 2, title: "Asset Classification", description: "Automatic classification based on asset type and pre-set rules. Excludes KVP, NSC, and insurance-backed loans with sufficient margin.", icon: "/SAMS/balance-sheet.svg" },
  { id: 3, title: "Provisioning Calculation", description: "Provision computation based on secured and unsecured principal amount. Secured principal is security value or outstanding principal whichever is less.", icon: "/SAMS/digital-asset.svg" },
  { id: 4, title: "Exception Management", description: "Handles asset classification changes, security value changes, additional security updates, additional provisioning updates, and alert maintenance.", icon: "/SAMS/cube1.svg" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const SamsFive = () => {
  return (
    <section className="w-full bg-[#F4F4F4] dark:bg-black  ">
      <div
        className="mx-auto w-full max-w-7xl  bg-[#F4F4F4] dark:bg-slate-900 rounded-none sm:rounded-[24px] px-4 sm:px-8 py-10 sm:py-16    xl:my-0"

      >
        {/* Header Section */}
        <div className="mb-10 sm:mb-14 text-center px-2">
          <H2 className="mb-4 sm:mb-5 tracking-tight dark:!text-white !text-[#111827] text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2]">
            NPL Identification and Classification <br className="hidden sm:block" /> Process Overview
          </H2>
          <P className="mx-auto max-w-[800px] leading-[1.6] sm:leading-[1.7] dark:!text-white !text-[#4B5563] text-[14px] sm:text-[16px]">
            The system identifies NPL records based on IRAC guidelines, automates asset classification, and performs provisioning calculations with exception handling capabilities.
          </P>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3 items-stretch gap-4 sm:gap-4">

          {/* Left Column (Renders 2nd on Mobile) */}
          <div className="flex flex-col gap-6 sm:gap-8 order-2 md:order-1">
            {cards.slice(0, 2).map((card) => (
              <FeatureCard key={card.id} title={card.title} description={card.description} icon={card.icon} />
            ))}
          </div>

          {/* Center Gray Placeholder Block (Renders 1st on Mobile) */}
          <div
            className="w-full rounded-xl h-[350px] sm:h-auto md:h-auto md:min-h-full order-1 md:order-2 flex justify-center items-center"
          >
            <img src="/SAMS/NPAIdentification.webp" alt="NPA Identification" className="w-full h-full object-fit" />
          </div>

          {/* Right Column (Renders 3rd on Mobile) */}
          <div className="flex flex-col gap-6 sm:gap-8 order-3 md:order-3">
            {cards.slice(2, 4).map((card) => (
              <FeatureCard key={card.id} title={card.title} description={card.description} icon={card.icon} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SamsFive;