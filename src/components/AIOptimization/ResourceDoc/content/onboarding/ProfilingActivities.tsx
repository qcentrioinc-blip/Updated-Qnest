import React, { useState } from "react";
import { H3, P } from "../../../../../styles/Typography";

const ProfilingActivities: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      <H3 className="text-[#009565]">Profiling Activities</H3>

      <P>CloudDIET profiling is divided into three categories:</P>

      <ol className="list-decimal list-inside  space-y-6">
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          <b>Billing:</b> CloudDIET analyzes your Azure Billing to capture
          actual spend, including discounts, Savings Plans, and Reserved
          Instances.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          <b>Usage Metrics:</b> CloudDIET examines Azure Monitor Metrics to see
          resource utilization, such as a Storage Account holding 4TB, without
          accessing the stored data.
        </li>
        <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
          <b>Resource Configuration:</b> CloudDIET inspects Azure control-plane
          configurations, like a Storage Account set to Geo-Redundant Storage
          (GRS) in East US and its creation date, without viewing any customer
          data.
        </li>
      </ol>

      <h2 className="font-quadran text-xl  md:text-2xl lg:text-3xl my-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="border bg-gray-100 border-gray-300 p-4">
          <button
            onClick={() => toggle(0)}
            className="w-full text-left flex justify-between items-center font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]"
          >
            <span>1. How long does it take CloudDIET to produce results?</span>
            <span>{openIndex === 0 ? "−" : "+"}</span>
          </button>

          {openIndex === 0 && (
            <div className="mt-3 space-y-3">
              <P>
                After adding a Subscription, CloudDIET may take from a few
                minutes to a few hours depending on the number of resources in the Azure Subscription.
              </P>
              <P>
                Savings opportunities can appear within minutes or take up to
                two weeks. For a new Subscription, CloudDIET builds a profile
                and baseline of configuration, usage, and cost trends. While
                some optimizations are immediate, others require days or weeks
                of utilization analysis.
              </P>
            </div>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border bg-gray-300 border-gray-300 p-4">
          <button
            onClick={() => toggle(1)}
            className="w-full text-left flex justify-between items-center font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]"
          >
            <span>2. How often does CloudDIET profiling happen?</span>
            <span>{openIndex === 1 ? "−" : "+"}</span>
          </button>

          {openIndex === 1 && (
            <div className="mt-3">
              <P>
                Profiling runs at least daily to track changes, usage patterns,
                and trends. Savings opportunities can be identified and
                presented at any time throughout the day.
              </P>
            </div>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border bg-gray-100 border-gray-300 p-4">
          <button
            onClick={() => toggle(2)}
            className="w-full text-left flex justify-between items-center font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]"
          >
            <span>3. Does CloudDIET impact my Azure bill?</span>
            <span>{openIndex === 2 ? "−" : "+"}</span>
          </button>

          {openIndex === 2 && (
            <div className="mt-3">
              <P>
                No, CloudDIET does not incur any costs on your Azure
                Subscription(s).
              </P>
            </div>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="border bg-gray-300 border-gray-300 p-4">
          <button
            onClick={() => toggle(3)}
            className="w-full text-left flex justify-between items-center font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]"
          >
            <span>4. Can CloudDIET impact my Azure services?</span>
            <span>{openIndex === 3 ? "−" : "+"}</span>
          </button>

          {openIndex === 3 && (
            <div className="mt-3">
              <P>
                No. CloudDIET does not interact with Azure resources directly.
                It operates at the control plane level using Azure Resource
                Manager APIs. There is no performance impact or risk of
                disruption.
              </P>
            </div>
          )}
        </div>
      </div>

      <H3 className="my-4">Examples of what CloudDIET can access</H3>
      <P>
        These examples show what CloudDIET can and cannot access. CloudDIET
        does not view all metrics or configurations, and it lacks permission and
        the ability to access data plane content.
      </P>

      <div className="overflow-x-auto mt-6 xl:pl-16">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Service
              </th>
              <th className="border border-gray-300 px-4 py-2 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Can Access
              </th>
              <th className="border border-gray-300 px-4 py-2 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Cannot Access
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Azure SQL */}
            <tr className="align-top ">
              <td className="border border-gray-300 px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Azure SQL
              </td>
              <td className="border border-gray-300 px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <ul className="list-disc list-inside space-y-1">
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    Costs for the Azure SQL instance
                  </li>
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    CPU utilization
                  </li>
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    Number of sessions
                  </li>
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    Deployed Azure region
                  </li>
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    Licensing
                  </li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <ul className="list-disc list-inside space-y-1">
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    Data plane data (databases, tables, schemas, etc.)
                  </li>
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    No ability to execute queries
                  </li>
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    No ability to view user accounts, permissions, or query
                    activity within the database
                  </li>
                </ul>
              </td>
            </tr>

            {/* Azure Storage (Restored from broken JSX) */}
            <tr className="align-top ">
              <td className="border border-gray-300 px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                Azure Storage
              </td>
              <td className="border border-gray-300 px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <ul className="list-disc list-inside space-y-1">
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    Deployed Azure region
                  </li>
                  <li className="font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                    Creation date
                  </li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-3 font-regular font-quadran leading-[120%] text-[10px] xl:text-[12px]">
                <P>
                  No data plane data (containers, tables, queues, files, etc.)
                </P>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilingActivities;