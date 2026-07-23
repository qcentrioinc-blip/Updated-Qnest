import { H2, H3, P } from "../../../styles/Typography";

const cards = [
  {
    title: " Complexity",
    description:
      "Manual gap analysis, duration calculations, and stress testing across multiple currencies is time-consuming and error-prone. ALMANAC automates these processes completely.",
       icon: "/AML/Banks.png",
  },
  {
    title: "Visibility",
    description:
      "Banks struggle to predict liquidity needs and interest rate impacts. ALMANAC provides real-time dashboards and scenario simulations for proactive decision-making.",
       icon: "/AML/ALMEye.png",
  },
  {
    title: "Compliance",
    description:
      "Generating accurate regulatory reports for multiple authorities is challenging. ALMANAC automates report generation aligned with Basel and central bank requirements.",
       icon: "/AML/ALMCompliance.png",
  },
];

const DetailCards = () => {
  return (
    <section className="w-full">

      {/* Hero Banner with BG Image */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[380px] lg:min-h-[480px] xl:h-screen flex items-center"
        style={{ backgroundImage: "url('/AML/Almanac2.webp')" }}
      >
        {/* Blue overlay */}
       

        {/* Text Content */} 
        <div className="relative z-10 px-6 md:px-12 lg:px-10  xl:pl-20 pb-24 pt-10 md:pt-40 w-full xl:max-w-[65%]">
          <H2 className="text-white mb-4">
           Challenges ALMANAC <br className="xl:block hidden "/> Solves for Banks 
          </H2>
          <P className=" bg-black/60 xl:bg-transparent max-w-[100%]  p-4 xl:p-2 text-white/85 md:max-w-[82%]  leading-relaxed">
           Financial institutions face complex asset liability management issues daily. ALMANAC addresses these challenges through automated tools, predictive analytics, and integrated regulatory reporting across multi-currency operations
          </P>
        </div>
      </div>

      {/* Cards - overlap banner using negative margin, stays in normal flow */}
      <section className="dark:bg-black">
      <div className="relative z-10 -mt-20 px-4 md:px-8  max-w-7xl mx-auto lg:px-12 xl:px-6 pb-4 xl:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white  dark:bg-slate-950 rounded-2xl border py-10 xl:py-20 border-neutral-300 shadow-md px-6   flex flex-col items-center text-center"
            >
              {/* Icon placeholder circle */}
              <div className="w-20 h-20 mb-5 rounded-full  flex items-center justify-center">
  <img
    src={card.icon}
    alt={card.title}
    className=" w-12 h-12 xl:w-14 xl:h-14 object-contain"
  />
</div>
              {/* Title */}
              <H3 className="font-bold text-black dark:text-white mb-3">
                {card.title}
              </H3>

              {/* Description */}
              <P className="text-sm md:text-[15px]  dark:text-gray-300 leading-relaxed">
                {card.description}
              </P>
            </div>
          ))}
        </div>
      </div>
      </section>

    </section>
  );
};

export default DetailCards;