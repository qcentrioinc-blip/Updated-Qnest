import React from "react";
import { Plus } from "lucide-react";
import { H3, P } from "../../../styles/Typography";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Duis aute irure",
      description:
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su.",
    },
    {
      id: 2,
      title: "Duis aute irure",
      description:
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su.",
    },
    {
      id: 3,
      title: "Duis aute irure",
      description:
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su.",
    },
  ];

  return (
    <section className="w-full bg-[#F0FFF8] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center sm:items-start">
            {/* Icon */}
            <div className="mb-4">
              <Plus className="text-orange-500 w-6 h-6" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <H3 className="text-gray-900 mb-2">
              {feature.title}
            </H3>

            {/* Description */}
            <P className="text-gray-700 leading-relaxed max-w-sm">
              {feature.description}
            </P>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
