// import React from 'react';
import { H2, P } from '../../../styles/Typography';

const Exception = () => {
  const nodes = [
    { id: 1, label: "Read MT\nMessages", hasDash: false },
    { id: 2, label: "Match MT\nMessages", hasDash: true },
    { id: 3, label: "Identify\nSettlement\nBranch", hasDash: true },
    { id: 4, label: "Auto Settle\nTransaction", hasDash: true },
    { id: 5, label: "Post CBS\nEntry", hasDash: false },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-800 pt-6">
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto min-h-[50vh] font-sans p-4 md:p-8 overflow-hidden lg:overflow-hidden">
    
      {/* 1. Header Area */}
      <div className="w-full max-w-7xl mx-auto bg-[#2E68C6] py-3 text-center mb-10 shadow-sm flex items-center justify-center">
        <H2 className="text-white text-[32px] md:text-[38px] lg:text-[42px] font-medium mb-0">
          Inward Remittance Processing Workflow
        </H2>
      </div>

      {/* Responsive Scroll Container for Mobile/Tablet */}
      <div className="w-full overflow-x-auto pb-8 hide-scrollbar lg:overflow-hidden">
        {/* Main Flowchart Wrapper - Fixed width to preserve Desktop structure on smaller screens */}
        <div className="w-[1200px] min-w-[1200px] xl:w-full max-w-7xl mx-auto flex flex-col items-center relative">

        {/* 2. Top "Straight through Process" Indicator */}
        <div className="flex items-center justify-center mb-8">
          {/* Left Arrow */}
          <div className="flex items-center">
            <div className="w-0 h-0 border-y-[7px] border-y-transparent border-r-[13px] border-r-[#3b71ca]"></div>
            <div className="w-[115px] h-[3px] bg-[#3b71ca]"></div>
          </div>
          {/* Text */}
          <P className="mx-4 text-[17px] font-bold text-black tracking-wide">
            Straight through Process
          </P>
          {/* Right Arrow */}
          <div className="flex items-center">
            <div className="w-[115px] h-[3px] bg-[#3b71ca]"></div>
            <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[13px] border-l-[#3b71ca]"></div>
          </div>
        </div>

        {/* 3. The Core Grid */}
        <div className="grid grid-cols-5 w-full">
          
          {/* Animated styles for the arrows */}
          <style>{`
            @keyframes flowShimmer {
              0% { left: -40%; }
              100% { left: 110%; }
            }
          `}</style>

          {/* Row A: Numbered Nodes, Connecting Arrows & Top Labels */}
          {nodes.map((n, i) => (
            <div key={`node-${n.id}`} className="relative flex flex-col items-center z-10">

              {/* Node Circle */}
              <div className="w-[58px] h-[58px] rounded-full bg-[#3b71ca] text-white flex items-center justify-center text-[24px] font-semibold relative z-10">
                {n.id}
              </div>

              {/* Perfect Math Connecting Arrow - Automatically shortens with the grid */}
              {i < 4 && (
                <div
                  className="absolute top-[29px] flex items-center -translate-y-1/2 z-0"
                  style={{
                    left: 'calc(50% + 29px)',
                    width: 'calc(100% - 58px)'
                  }}
                >
                  {/* Thicker black line to match target image with moving transition */}
                  <div className="h-[3px] bg-black flex-grow relative overflow-hidden">
                    <div 
                      className="absolute top-0 bottom-0 bg-white opacity-80"
                      style={{
                        width: '40%',
                        boxShadow: '0 0 8px 1px white',
                        animation: 'flowShimmer 1.2s linear infinite',
                        animationDelay: `${i * 0.25}s`
                      }}
                    />
                  </div>
                  {/* Larger arrowhead to match target image */}
                  <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[13px] border-l-black shrink-0 relative z-10"></div>
                </div>
              )}

              {/* Top Label */}
              <P className="text-[15.5px] font-medium text-center mt-4 whitespace-pre-line leading-snug text-black min-h-[80px]">
                {n.label}
              </P>
            </div>
          ))}

          {/* Row B: Top Dashed Lines (Thickness Increased to 3.5px) */}
          {nodes.map((n) => (
            <div key={`dash1-${n.id}`} className="flex justify-center h-[60px]">
              {n.hasDash && <div className="border-l-[3.5px] border-dashed border-[#3b71ca] h-full"></div>}
            </div>
          ))}

          {/* Row C: Exceptions Handling Box */}
          <div className="col-span-5 grid grid-cols-5 relative z-20 -my-2">
            <div className="col-start-2 col-span-3 flex justify-center w-full px-4">
              <P className="w-full rounded-full bg-gradient-to-b from-[#ffb8b8] to-[#ff7e7e] border border-[#f85454] py-[10px] text-black font-bold text-[16px] text-center shadow-sm mb-0 m-0">
                Exceptions Handling
              </P>
            </div>
          </div>

          {/* Row D: Bottom Dashed Lines (Thickness Increased to 3.5px) */}
          {nodes.map((n) => (
            <div key={`dash2-${n.id}`} className="flex justify-center h-[75px] -mt-1 z-10 relative">
              {n.hasDash && <div className="border-l-[3.5px] border-dashed border-[#3b71ca] h-full"></div>}
            </div>
          ))}

          {/* Row E: Laptop Icons & Bottom Layout */}
          <div className="flex justify-end pt-3 pr-3">
            <P className="text-[15.5px] font-medium text-right leading-snug text-black whitespace-nowrap">
              Match Unmatched<br />Messages
            </P>
          </div>

          <div className="flex justify-center">
            <UserLaptopIcon />
          </div>

          <div className="flex flex-col items-center">
            <UserLaptopIcon />
            <P className="text-[15.5px] font-medium text-center leading-snug mt-2 text-black">
              Assign<br />Branch
            </P>
          </div>

          <div className="flex justify-center">
            <UserLaptopIcon />
          </div>

          <div className="flex justify-start pt-3 pl-3">
            <P className="text-[15.5px] font-medium text-left leading-snug text-black whitespace-nowrap">
              Settle<br />Transaction
            </P>
          </div>

        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const UserLaptopIcon = () => (
  <img 
    src="/Remitree/computer-worker.svg" 
    alt="worker" 
    className="w-[46px] h-[46px] object-contain shrink-0" 
  />
);

export default Exception;