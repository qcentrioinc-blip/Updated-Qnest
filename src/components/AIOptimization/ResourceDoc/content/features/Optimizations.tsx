import React, { useState } from "react";
import { H3, P } from "../../../../../styles/Typography";

const Optimizations: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-4">
      <H3 className="text-[#009565] my-4">Optimizations</H3>

      <P>
        CloudDIET profiles your Azure environment to identify hundreds of
        cost-saving optimizations across IaaS and PaaS resources. We
        continuously update our capabilities to match Azure’s evolving
        landscape, including pricing, SKUs, services, and incentives.
      </P>

      <P>
        We manage this complexity so you receive clear, actionable insights. We
        present findings in an easily consumable format through methods such
        as:
      </P>

      <ul className="list-disc dark:text-white list-inside space-y-3">
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Categorizing savings by effort level: Minimal, Moderate, and
          Significant.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Providing relevant configuration details and usage metrics.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Detailing each opportunity’s nature, cost drivers, and associated
          risks.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Offering implementation steps, timelines, and expected savings start
          dates.
        </li>
      </ul>

      <H3 className="my-4">Categories</H3>

      <H3 className="my-4">Minimal Effort</H3>
      <P>
        Opportunities requiring little effort and no risk. Example: pausing an
        unused Microsoft Fabric capacity with no recent data or activity.
      </P>
      <P>
        Savings opportunities can appear within minutes or take up to two
        weeks. For a new Subscription, CloudDIET builds a profile and baseline
        of configuration, usage, and cost trends. While some optimizations are
        immediate, others require days or weeks of utilization analysis.
      </P>

      <H3 className="my-4">Moderate Effort</H3>
      <P>
        Opportunities involving configuration or usage changes that should be
        reviewed, but pose minimal disruption risk. Example: adjusting
        indexing policies in Azure Cosmos DB.
      </P>

      <H3 className="my-4">Significant Effort</H3>
      <P>
        Opportunities that require review, testing, validation, or planning
        before implementation. Example: purchasing compute Reservations or
        making major licensing changes.
      </P>

      <H3 className="my-4">Summarized Savings Opportunities</H3>
      <P>
        Savings Opportunities are organized by Azure service. You can also
        filter findings in other ways. The Discovery view, for instance,
        displays opportunities for Azure Cosmos DB, Azure App Services, and
        Microsoft Fabric. Drilling into each service reveals various
        opportunities across resources, each with its own effort level.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/featuresOpti1.webp"
        alt="Summarized Savings Opportunities"
      />

      <H3 className="my-4">Savings Opportunity Details</H3>
      <P>
        Each opportunity shows impacted resources, potential savings, and
        relevant configuration and usage metrics. Use the dropdown to view the
        full description and resolution guidance.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/FeaturesOpti2.webp"
        alt="Savings Opportunity Details"
      />

      <div className="my-6">
        <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm">
          {/* LEFT ICON BAR */}
          <div className="w-22 bg-gray-300 flex items-center justify-center pt-4">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-sm">
              i
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 px-5 py-4 relative">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
              aria-label="Toggle note"
            >
              {open ? "×" : "+"}
            </button>

            {open && (
              <P>
                The Daily, Monthly, and Annual savings is the amount you would
                realize by implementing the recommendation and not the full
                cost of the resource.
              </P>
            )}
          </div>
        </div>
      </div>

      <H3 className="my-4">Dismissing Savings Opportunities</H3>
      <P>
        If a discovered Savings Opportunity is not relevant to your
        environment, you can dismiss it. This will remove it from the active
        list, and the opportunity costs will not be reflected in the Potential
        Savings or Realized Savings.
      </P>
    </div>
  );
};

export default Optimizations;