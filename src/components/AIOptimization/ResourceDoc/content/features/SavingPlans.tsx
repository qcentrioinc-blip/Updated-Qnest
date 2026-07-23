import React from "react";
import { H3, P } from "../../../../../styles/Typography";

const SavingPlans: React.FC = () => {
  return (
    <div className="space-y-4">
      <H3 className="text-[#009565] my-4">Saving Plans</H3>

      <P>
        The Savings Plan Designer helps you make data-driven decisions and run
        what-if analyses to optimize savings plan strategy. Key components
        include Visualizations, Slicers, and Resource-level Details.
      </P>

      <H3 className="my-4">Visualizations</H3>

      <P>
        The graph shows usage patterns of resources eligible for a Savings
        Plan. It displays spending only for qualifying compute resources. For
        example, it includes VM compute SKU costs but excludes disks and other
        non-covered expenses.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/SavingPlans1.webp"
        alt="Savings Plan Visualization"
      />

      <div className="overflow-x-auto xl:pl-16 mt-6">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
                Category
              </th>
              <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-top ">
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Actual Billed Spend
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The billed cost of Savings Plan-eligible compute resources over
                the last 30 days, including discounts. Covers eligible resources
                without an existing Savings Plan or Reserved Instance. Used to
                calculate your future commitment and visualize past Savings Plan
                utilization.
              </td>
            </tr>

            <tr className="align-top bg-gray-100 ">
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                What-if Savings Plan Spend
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The projected cost if a Savings Plan had been applied to
                eligible resources.
              </td>
            </tr>

            <tr className="align-top ">
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                What-if Pay-As-You-Go Spend
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The additional cost incurred at Pay-As-You-Go rates after the
                Savings Plan is fully used.
              </td>
            </tr>

            <tr className="align-top bg-gray-100 ">
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Recommended Savings Plan Commitment
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The suggested commitment based on your filters. Matches the
                What-if Savings Plan Spend and visually guides you toward an
                optimal purchase.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <H3 className="my-4">Designer</H3>

      <P>
        The Designer enables you to model what-if scenarios by adjusting
        Savings Plan terms, commitment percentages, and identifying resources
        that could become eligible with SKU changes.
      </P>

      <P>
        For example, recommendations may include ineligible App Service Plans.
        Only the Premium V3 SKU qualifies. CloudDIET flags these plans and
        assesses whether they can be upgraded with minimal risk.
      </P>

      <img
        className="xl:pl-16 h-[650px] w-[80%]"
        src="/AI-CloudFinOps/Resources/SavingPlans2.webp"
        alt="Savings Plan Visualization"
      />

      <div className="flex gap-4 rounded-lg bg-green-50 border-l-4 border-green-600 p-5 my-6">
        <div className="text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3a7 7 0 00-4 12.74V19a1 1 0 001 1h6a1 1 0 001-1v-3.26A7 7 0 0012 3z"
            />
          </svg>
        </div>

        <div>
          <h4 className="font-quadran text-lg font-semibold text-green-800 mb-1">
            TIP
          </h4>

          <P>
            CloudDIET uses a conservative default Commitment Percent of 70%.
            For example, if your maximum commitment is $100, the Designer
            recommends $70. You can adjust this percentage based on your
            business needs and expected usage changes to avoid overcommitment.
          </P>
        </div>
      </div>

      <H3 className="my-4">Frequently Asked Questions</H3>

      <H3 className="my-4">1. Why choose Savings Plans over Reserved Instances?</H3>
      <P>
        Savings Plans offer greater flexibility and can yield higher overall
        savings. Reserved Instances are tied to specific SKUs and regions (e.g.,
        a Dv2 VM in West US). If the resource changes, the Reservation may be
        wasted.
      </P>

      <P>
        Savings Plans apply automatically to all eligible resources without
        specifying SKUs or regions, prioritizing those with the highest
        discount.
      </P>

      <H3 className="my-4">2. Can I commit to multiple Savings Plans?</H3>
      <P>
        Yes. You can create multiple Savings Plan commitments over time. This
        lets you start with a smaller amount and gradually increase your
        coverage as needed.
      </P>

      <H3 className="my-4">3. Which Azure services are eligible for a Savings Plan?</H3>
      <P>
        The following Azure services are generally eligible, though some
        underlying SKUs may be excluded:
      </P>

      <ul className="list-disc  list-inside space-y-2">
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Virtual Machines
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          App Service Premium v3
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          App Service Isolated v2
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Functions Premium
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Container Instances
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Container Apps
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Dedicated Host
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          Spring Apps Enterprise
        </li>
      </ul>
    </div>
  );
};

export default SavingPlans;