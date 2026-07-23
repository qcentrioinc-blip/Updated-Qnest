import { H4, P } from "../../../styles/Typography";

export default function Cards() {
  const cards = [
    {
      title: "Central Hub for Secure Transaction Management- FFIEC Aligned ",
      content:
        " The Hub routes all payments securely, monitors regulatory compliance, and ensures high availability with built-in redundancy for uninterrupted operations. Meets FFIEC expectations for payment system resilience. ",
      illustration: "/Pago/OnlineBanking.svg",
    },
    {
      title: "User-Facing Cube for Effective Participant Interaction",
      content:
        "The Cube provides an intuitive interface for users to initiate, monitor, and manage transactions with real-time data and role-based access controls. All user actions logged for SOC audit trails.",
      illustration: "/Pago/WebDesign.svg",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-6">
      <div className="max-w-7xl xl:mx-auto px-6 xl:px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 xl:py-10 xl:gap-14">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#141414] rounded-xl border-2 border-[#666666] shadow-md
                         flex flex-col md:flex-col md:items-center xl:flex-row
                         p-6 sm:p-8 md:py-8 py-10 xl:py-14 gap-6 sm:gap-10"
            >
              {/* LEFT IMAGE */}
              <div className="relative w-full sm:w-1/3 flex justify-center items-center">
                <img
                  src={card.illustration}
                  alt=""
                  className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col gap-3 w-full sm:gap-4">
                <H4 className="max-w-xs">{card.title}</H4>
                <P className="text-sm dark:text-white max-w-sm sm:text-base leading-relaxed">
                  {card.content}
                </P>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}