import { H1, H2, P } from "../../../styles/Typography";
import CountUp from "../CountUp";

const stats = [
  { value: 100, suffix: "+", label: " Banking features" },
  { value: 4, suffix: "x", label: "Faster processing" },
  { value: 85, suffix: "%", label: "Branch visit reduction" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#FAFAFA] dark:bg-black  py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <H2 className="mb-4 dark:text-[#00AA72]">Key Benefits of Internet Banking Solution </H2>

          <P className="text-gray-800">
              Financial institutions gain improved customer satisfaction, reduced operational costs, and enhanced security through IBS platform features and capabilities with GLBA compliance and FFIEC-aligned security controls.
          </P>
        </div>

        {/* Stats */}
        <div className="flex gap-10 justify-center lg:w-auto w-full">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <H1 className=" flex items-center dark:text-white justify-center">
                <CountUp from={0} to={item.value} direction="up" duration={1} />
                {item.suffix}
              </H1>

              <P className="text-gray-800 mt-4">{item.label}</P>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}