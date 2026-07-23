import {
  SearchCheck,
  Workflow,
  FilePenLine,
} from "lucide-react";
import { H2, H4 } from "../../../styles/Typography";

const ThreeTurns = () => {
  const steps = [
    {
      icon: SearchCheck,
      title: "Discovery & Consultation",
      description:
        "We speak with your teams to learn goals, issues, and industry needs in detail",
      active: true,
    },
    {
      icon: Workflow,
      title: "Workflow & Optimization",
      description:
        "We design simple workflows that match daily work and are easy to follow.",
    },
    {
      icon: FilePenLine,
      title: "Planning & Alignment",
      description:
        "We turn your requirements into a practical, clear plan with agreed priorities and scope.",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto bg-[#eef4ff] border-2 border-blue-600 rounded-[40px] overflow-hidden">
        <div className="pl-6 xl:pl-12 py-10">
          {/* Heading */}
          <H2 className="text-center text-4xl md:text-5xl font-semibold text-gray-900 mb-10 max-w-xl mx-auto">
            Turning goals into measurable results.
          </H2>

          {/* Content */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] xl:ml-10 gap-10 items-center">
            {/* Left Cards */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className={`rounded-3xl p-4 transition-all duration-300
                    ${
                      step.active
                        ? "bg-white border-l-12 border-blue-600 shadow-sm"
                        : "bg-transparent border border-blue-500"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-5" />

                    <H4  className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </H4    >

                    <p className="text-gray-700 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/HalfCircle.png" // replace with your image
                alt="Architecture"
                className="
                  w-[280px]
                md:w-[300px]
                
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeTurns;