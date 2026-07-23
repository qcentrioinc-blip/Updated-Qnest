import { H4, P } from "../../../styles/Typography";

export default function Cards() {
  const cards = [
    {
      title: "Strategic Capital Distribution Across Business Lines",
      content:
        "Optimize capital allocation to meet strategic objectives using predictive analytics and long-term funding planning tools.",
      shape: "/AML/Groups.svg",
      illustration: "/AML/Groups.svg",
    },
    {
      title: " Regulatory Compliance with Business Management",
      content:
        " Calculate LCR and NSFR ratios accurately while integrating compliance reporting into daily business operations. ",
      shape: "/AML/Agree.svg",
      illustration: "/AML/Agree.svg",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black py-10 md:py-10 xl:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10  xl:py-10 xl:gap-14">

          {cards.map((card, i) => (
           <div
  key={i}
  className="bg-white  dark:bg-gray-800 rounded-xl border-2 border-[#666666] shadow-md
             flex flex-col md:flex-col md:items-center  xl:flex-row
             p-6 sm:p-8 md:px-0 md:py-8 py-10 xl:py-20 xl:px-6 gap-6 sm:gap-10"
>


              {/* LEFT IMAGE */}
              <div className="relative w-full sm:w-1/3 flex justify-center items-center">
                <img
                  src={card.shape}
                  alt=""
                  className="absolute w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain opacity-40 -z-10"
                />

                <img
                  src={card.illustration}
                  alt=""
                  className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-2/3">
                <H4 className=" dark:text-white" >{card.title}</H4>
                <P className="text-sm sm:text-base dark:text-white leading-relaxed">
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
