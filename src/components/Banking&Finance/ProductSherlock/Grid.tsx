import { H4, P } from "../../../styles/Typography";

export default function Grid() {
  const features = [
    {
      title: "Transaction Monitoring ",
      desc: "Rule-based monitoring detects suspicious activity across customers, products, accounts, and transactions in real-time.",
      icon: "/ProductSherlock/icon14.svg",
    },
    {
      title: "Case Management",
      desc: "Built-in workflow with profile, detect, investigate, manage, and report pillars for compliance decisions.",
      icon: "/ProductSherlock/icon15.svg",
    },
    {
      title: "Data Extraction",
      desc: "Automated utilities read required data from core banking systems and pipe into AML database. ",
      icon: "/ProductSherlock/icon16.svg",
    },
    {
      title: "FATCA Compliance ",
      desc: "Retail and trade finance transaction monitoring ensures compliance with FATCA regulatory requirements.",
      icon: "/ProductSherlock/icon17.svg",
    },
  ];

  return (
    <section className="w-full py-10 dark:bg-black bg-white">
      <div className="max-w-7xl mx-auto  px-4 md:px-6 lg:px-8">

        <div className="relative bg-[#F4F4F4] dark:bg-slate-900 rounded-3xl p-10 md:p-14">

          {/* Vertical divider */}
          <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-px  bg-gray-400 -translate-x-1/2"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16">

            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-5">

                {/* Blue circle with icon */}
                <div className="w-12 h-12 rounded-full bg-[#00AA72] flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <H4 className="mb-2 dark:text-white text-gray-900">
                    {item.title}
                  </H4>

                  <P className="max-w-md">
                    {item.desc}
                  </P>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}