import { useState } from "react";
import { H3, H4, P } from "../../../styles/Typography";

const features = [
  {
    title: "Varied Solutions",
    description: "Built for specific goals.",
    paragraph: "We tailor our cloud strategies to align perfectly with your infrastructure requirements, empowering your team with the right tools to scale efficiently.",
    image: "/AIProduct/Feature1.svg",
    points: [
      "Implement AWS, Azure, and Google Cloud solutions.",
      "Advanced optimization beyond standard FinOps tools.",
      "Crafted for multi-cloud platform professionals.",
      "Understands complex configurations and commercial cloud term.",
    ],
  },
  {
    title: "Guaranteed Savings",
    description: "Pay only for performance results.",
    paragraph: "Eliminate financial risk with a pricing model that directly ties our success to the actual cost reductions we achieve for your business.",
    image: "/AIProduct/Feature2.svg",
    points: [
      "Rapid ROI as early as the first month.",
      "Pay-for-performance model ensures shared success.",
      "Customers keep 100% of the assured savings.",
      "We charge a percentage of realized savings.",
    ],
  },
  {
    title: "Continuous Optimization",
    description: "Retain savings long-term with AI.",
    paragraph: "Our AI-driven approach continuously monitors and adjusts your environment, ensuring your cloud expenditure remains optimized as your usage evolves.",
    image: "/AIProduct/Feature3.svg",
    points: [
      "Keep 80–90% of savings over time.",
      "AI-driven measures enable continuous efficiency gains.",
      "Full savings from enhancements over three years.",
      "Maximized savings retention with an 8x ROI.",
    ],
  },
  {
    title: "Secure & Compliant",
    description: "Zero data access",
    paragraph: "Security is built into our foundation. We operate on a strict read-only basis, ensuring your sensitive data remains completely isolated and under your control.",
    image: "/AIProduct/Feature4.svg",
    points: [
      "Never access customer files, databases, or apps.",
      "Read-only by design with Azure RBAC roles.",
      "Encrypted data at rest and in transit.",
      "Onboarding and permissions managed by you.",
    ],
  },
];

export default function FeatureCards() {
  const [open, setOpen] = useState<number>(0);
  const [activeHeader, setActiveHeader] = useState<number>(0);

  const handleToggle = (index: number) => {
    if (open === index) {
      setOpen(-1); // Close accordion
    } else {
      setOpen(index); // Open accordion
      setActiveHeader(index); // Update left side heading
    }
  };

  const currentFeature = features[activeHeader] || features[0];

  return (
    <section className="w-full bg-[#009565] py-10">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          
          {/* LEFT SIDE */}
          <div className="text-white lg:sticky top-28 flex flex-col gap-2">
            <div>
              <P className="font-semibold text-white mb-2">
                {currentFeature.title}
              </P>
              <H3 className="text-white max-w-md">
                {currentFeature.description}
              </H3>
            </div>
            
            {/* ADDED STICKY PARAGRAPH HERE */}
            <P className="text-white max-w-md opacity-90 ">
              {currentFeature.paragraph}
            </P>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            {features.map((item, index) => {
              const active = open === index;

              return (
                <div key={index} className="bg-white overflow-hidden rounded-lg">
                  {/* HEADER */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center px-6 py-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#009565] flex items-center justify-center text-white text-xs flex-shrink-0">
                        ✓
                      </div>

                      <H4 className="text-[#3A3A3A]">{item.title}</H4>
                    </div>

                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                        active ? "rotate-180" : ""
                      }`}
                      fill="#009565"
                      stroke="#009565"
                      strokeWidth=""
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* BODY - FAQ Style Grid Height Animation */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-3">
                        <ul className="px-12 xl:ml-12 font-quadran font-light flex flex-col">
                          {item.points.map((point, i) => (
                            <li key={i} className="list-disc text-gray-700">
                              
                              {/* ADDED TYPOGRAPHY P TAG HERE */}
                              <P className="text-gray-900 m-0">{point}</P>
                              
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}