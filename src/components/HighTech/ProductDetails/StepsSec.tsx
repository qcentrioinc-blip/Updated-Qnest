import { H2, H3, P } from "../../../styles/Typography";

const StepsSec = () => {
  const steps = [
    {
      number: "01",
      title: "Duis aute iru dolor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ",
    },
    {
      number: "02",
      title: "Duis aute iru dolor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ",
    },
    {
      number: "03",
      title: "Duis aute iru dolor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ",
    },
  ];

  return (
    <section className="w-full bg-black text-white px-8 md:px-16 lg:px-32 py-20">
      {/* Top Info Row */}
      <div className="flex items-center gap-3 mb-8">
         <span className="w-3 h-3 bg-[#8338EC] rounded-full"></span>
        <P className="text-white/70 text-sm md:text-base">
          Duis aute irure dolor in reprehenderit
        </P>
      </div>

      {/* Heading */}
      <div className="mb-16">
        <H2 className=" text-white mb-2">
          Sed ut perspiciatis
        </H2>
        <H2 className="text-[#F99526]">
          Unde Seduo ut perspiciatis
        </H2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-24  max-w-8xl">
        {steps.map((step, index) => (
          <div
            key={index}
            
          >
            <h2 className="text-6xl md:text-8xl font-bold text-[#5A5A5A] mb-6">
              {step.number}
            </h2>
            <div className="flex flex-col items-start border-t border-white/20 pt-8"/> 
            <H3 className="text-[#F99526] text-lg md:text-xl font-semibold mb-3">
              {step.title}
            </H3>
            <P className="text-white/70 leading-relaxed max-w-sm">
              {step.description}
            </P>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSec;
