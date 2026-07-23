import { H3, H4, P } from "../../../styles/Typography";

const steps = [
  {
    id: "1",
    title: "Sed ut perspiciatis unde",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "2",
    title: "Sed ut perspiciatis unde",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "3",
    title: "Sed ut perspiciatis unde",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="w-full pt-12 px-6 md:px-12 xl:px-20 max-w-7xl mx-auto">
      {/* Top Tagline */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-[3px] bg-gray-300 rounded-full" />
        <H4 className="">Quis autem</H4>
      </div>

      {/* Main Title */}
      <H3 className="text-[#009565] mb-6">
        Sed ut perspiciatis unde
      </H3>

      {/* Responsive Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-4">
            {/* Number Indicator */}
            <span className="text-5xl lg:text-6xl font-light text-gray-300 leading-none flex-shrink-0 select-none">
              {step.id}
            </span>

            {/* Content Block */}
            <div className="space-y-2 pt-1">
              {/* Accent Line */}
              <div className="w-20 h-[4px] bg-[#009565] rounded-full" />

              {/* Subtitle */}
              <H4 className="text-[#141414]">
                {step.title}
              </H4>

              {/* Paragraph */}
              <P className="">
                {step.description}
              </P>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}