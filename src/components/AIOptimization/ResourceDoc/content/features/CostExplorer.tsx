import React from "react";
import { H3, P } from "../../../../../styles/Typography";

const CostExplorer: React.FC = () => {
  return (
    <div className="space-y-4">
      <H3 className="text-[#009565] my-4">Cost Explorer</H3>

      <P>
        CloudDIET provides deeper cost insights than standard Azure billing.
        For instance, while Azure aggregates Log Analytics costs at the
        Workspace level, CloudDIET breaks them down by Table, identifying
        high-cost tables clearly.
      </P>

      <H3 className="my-4">Search, Filter, and View Resource Cost Trends</H3>

      <P>
        Examine Azure resources and costs in detail. Filter, view, and analyze
        resources across your environment. Track daily, weekly, and monthly cost
        trends. Drill into specific resources for deeper insight.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/CostExpo1.webp"
        alt="Savings Plan Visualization"
      />

      <H3 className="my-4">Cost Attribution</H3>

      <P>
        CloudDIET attributes costs at a finer level than Azure billing. Using Log
        Analytics as an example, costs are shown per Table rather than per
        Workspace.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/CostExpo2.webp"
        alt="Savings Plan Visualization"
      />

      <H3 className="my-4">Metric Attribution</H3>

      <P>
        Along with detailed cost views, CloudDIET shows granular utilization
        metrics. For example, view logs ingested per Table and source resource in
        Log Analytics. Visualizations can be filtered and pivoted beyond Azure
        Monitor’s capabilities.
      </P>

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/CostExpo3.webp"
        alt="Savings Plan Visualization"
      />

      <img
        className="xl:pl-16"
        src="/AI-CloudFinOps/Resources/CostExpo4.webp"
        alt="Savings Plan Visualization"
      />
    </div>
  );
};

export default CostExplorer;