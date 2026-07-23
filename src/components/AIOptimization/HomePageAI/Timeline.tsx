
import { H3, P } from "../../../styles/Typography";
import LazyVideo from "../../Global/LazyVideo";

export default function Timeline() {
  return (
    <section className="w-full sm:px-6 lg:px-10 pt-12  md:px-[60px]  px-[40px] xl:px-[160px]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <H3 className="  text-[#009565] mb-4">
          Unique Visibility
        </H3>
        <P className=" max-w-2xl mx-auto">
          Our data-rich profiling provides unique visibility into resource configuration and utilization. This supports precise optimization recommendations and enables you to make informed, cost-saving decisions.
        </P>
      </div>

      {/* Heatmap Image */}
      <div className="relative w-full overflow-x-auto">
        <div className="min-w-[900px] max-w-7xl mx-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <LazyVideo
            src="/AI-CloudFinOps/HomePage/HeatMap.mp4"
            autoPlay
            muted
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
