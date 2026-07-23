import { H2 } from "../../../styles/Typography";

const pillars = [
  {
    image: "/EHRIcons/HandsTogether.svg",
    title: "Unify Clinical and Administrative Data",
    description:
      "Integrate EHR documentation with scheduling and billing in a single patient record, eliminating redundant data entry and errors.",
  },
  {
    image: "/EHRIcons/UserHeadset.svg",
    title: "Automate Patient Engagement Workflows",
    description:
      "Empower patients with self-scheduling, digital check-in, and a portal for lab results, consents, and telehealth visits.",
  },
  {
    image: "/EHRIcons/Tachometer.svg",
    title: "Streamline Revenue Cycle Management",
    description:
      "From automated coding and claims submission to transparent payment tracking, ensure a healthy and visible financial workflow.",
  },
];

const Pillar = () => {
  return (
    <section className="bg-white py-4">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <H2 className="text-[#2B2B2B]   uppercase leading-tight">
            Our Four Pillars of Unified Practice Management
          </H2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`relative pt-8 ${
                index !== 2
                  ? "lg:border-r lg:border-[#BFE8D8] lg:pr-10"
                  : ""
              } ${
                index !== 0 ? "lg:pl-10" : "lg:pr-10"
              }`}
            >
              {/* Top Green Line */}
              <div className="absolute top-0 left-0 w-[80%] h-[5px] bg-[#00AA72]" />

              {/* Icon */}
              <div className="mb-8">
                <img src={pillar.image} alt={pillar.title} className="w-16 h-16" />
              </div>

              {/* Title */}
              <h3 className="text-[#2B2B2B] text-[20px] font-semibold leading-tight mb-5">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[#555] text-base leading-7 max-w-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillar;