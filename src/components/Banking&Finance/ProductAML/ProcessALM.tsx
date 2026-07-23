import React from "react";
 
import { H2 } from "../../../styles/Typography";

const Arrow = () => {
  return (
    <div
      className="flex items-center justify-center xl:rotate-0 rotate-90 md:w-[140px] md:h-[80px] w-[80px] h-[140px] my-2 md:my-6 xl:my-0 flex-shrink-0"
    >
      <svg
        width="140"
        height="80"
        viewBox="0 0 140 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="chGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#26C894" />
            <stop offset="100%" stopColor="#00AA72" />
          </linearGradient>
        </defs>

        {/* Chevron 1 */}
        <path
          d="M 6 5 L 36 40 L 6 75"
          fill="none"
          stroke="url(#chGrad)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: "chevMove 1.4s ease-in-out infinite",
            transformOrigin: "21px 40px",
          }}
        />

        {/* Chevron 2 */}
        <path
          d="M 60 5 L 90 40 L 60 75"
          fill="none"
          stroke="url(#chGrad)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: "chevMove 1.4s ease-in-out infinite 0.35s",
            transformOrigin: "75px 40px",
          }}
        />

        <style>{`
          @keyframes chevMove {
            0%   { opacity: 0; transform: translateX(-16px); }
            30%  { opacity: 1; }
            70%  { opacity: 1; }
            100% { opacity: 0; transform: translateX(16px); }
          }
          @media (prefers-reduced-motion: reduce) {
            path { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}</style>
      </svg>
    </div>
  );
};
const ProcessALM: React.FC = () => {
  return (
    <div className="w-full relative   bg-[#E7E7E7] dark:bg-black flex flex-col items-center px-4 xl:px-6   pt-10 pb-20 ">
      {/* Title */}
      <H2 className="  text-center mb-10  dark:text-[#00AA72] ">
         Integrated Toolkit for Risk Management
      </H2>

      {/* Main Content */}
      <div className="flex  flex-col xl:flex-row items-center    gap-4 xl:gap-6 w-full max-w-7xl">
        {/* Left Circle */}
        <div className="bg-[#00AA72] text-white rounded-full w-60 h-60  md:w-72 md:h-72 xl:w-76 xl:h-76 flex flex-col items-center justify-center -lg">
          <h2 className=" text-[24px] md:text-[32px] xl:text-[40px] font-quicksand font-semibold mb-2">Data</h2>
          <ul className=" text-[18px] md:text-[24px] xl:text-[24px] space-y-0 font-quicksand text-center">
            <li>• Structural Statements </li>
            <li>• Dynamic Statements </li>
            <li>• Stress Tests </li>
          </ul>
        </div>

        {/* Arrow */}
        <Arrow />

        {/* Middle Box */}
        <div className="bg-gradient-to-b from-[#00AA72] via-[#00AA72] to-[#00AA72] rounded-3xl p-10 w-72 md:w-80 flex flex-col gap-4">
          {[
            "Gap",
            "Duration",
            "NII",
            "Scenarios",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-full py-2 text-[24px] font-quicksand font-semibold  text-center "
            >
              {item}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <Arrow />

        {/* Right Panel */}
    <div className="bg-white rounded-2xl text-center p-6  w-72 flex flex-col gap-5">
          {[
            "Bond Register",
            "Duration Analysis",
            "Value at Risk",
            "Adjusted Income",
            "Portfolio Simulations",
            "Market Data Upload",
          ].map((item, index) => (
            <div key={index} className=" text-[18px] xl:text-[24px] font-quicksand font-semibold ">
              {item}
              <div className="mt-2 h-[3px] w-full rounded-4xl  bg-[#00AA72] opacity-100" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Vertical Label */}
     <div className="flex absolute  -bottom-[2%] left-[12%] md:left-[30%] lg:left-[35%]  my-10 xl:my-0  xl:left-[91%] xl:bottom-[5%]">
        <div className="bg-[#00AA72] text-white px-4 py-4  rounded-full flex    flex-row xl:flex-col items-end gap-2">
          {"RESIDUAL MATURITIES".split("").map((char, i) => (
            <span key={i} className="text-sm font-quicksand font-semibold">
              {char}
            </span>
          ))}
        </div>
        </div>
    </div>
  );
};

export default ProcessALM;
