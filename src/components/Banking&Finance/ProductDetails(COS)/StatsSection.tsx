import {H3, P } from "../../../styles/Typography";
import CountUp from "../CountUp";

export default function StatsSection() {
  return (
    <section className="bg-white text-black py-10 xl:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-center justify-between">

        {/* Left content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <H3 className="mb-4">Lorem ipsum dolor sit amet</H3>
          <P className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </P>
        </div>

        {/* Right stats */}
        <div className="flex gap-10 justify-center lg:w-auto w-full">
          
          {/* 100+ */}
          <div className="text-center">
            <span className="text-5xl text-[#00AA72] font-bold flex items-center justify-center">
              <CountUp from={0} to={100} direction="up" duration={1} />
              +
            </span>
            <P className="text-gray-800 mt-4">quis nostrud</P>
          </div>

          {/* 4x */}
          <div className="text-center">
            <span className="text-5xl text-[#00AA72] font-bold flex items-center justify-center">
              <CountUp from={0} to={4} direction="up" duration={1} />
              x
            </span>
            <P className="text-gray-800 mt-4">quis nostrud</P>
          </div>

          {/* 85% */}
          <div className="text-center">
            <span className="text-5xl text-[#00AA72] font-bold flex items-center justify-center">
              <CountUp from={0} to={85} direction="up" duration={1} />
              %
            </span>
            <P className="text-gray-800 mt-4">quis nostrud</P>
          </div>

        </div>

      </div>
    </section>
  );
}
