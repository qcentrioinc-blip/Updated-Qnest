// import React from 'react';
import { H2, P } from '../../../styles/Typography';

const Seven = () => {
  // Master Layout Coordinates for Pixel-Perfect Alignment
  const MAIN_Y = 210;
  const NODE_2A_Y = 460;
  const USER_ICON_OFFSET = -55;
  const SEP_X = 230; // Vertical dotted line position

  // Precise X coordinates for the center of each element
  const X_POS = {
    n1: 90,
    n2: 310,
    n3: 470,
    n3A: 580,
    n4: 710,
    n5: 840,
    n6: 970,
    n7: 1100,

    // Exact coordinates for the Side-by-Side 2A block
    n2A_laptop: 360,
    n2A_circle: 440,

    bank: 80,
    treasury: 220,
    sherlock: 580,
  };

  // Position the upward dashed arrow closer to 3A to avoid conflicting with node 3 text
  const mergeX = X_POS.n3A - 30;

  const nodes = [
    { id: '1', x: X_POS.n1, label: "Create\nTransaction in\nCore Systems", user: true },
    { id: '2', x: X_POS.n2, label: "Pull\nTransactions", user: false },
    { id: '3', x: X_POS.n3, label: "Edit/Enrich\nMessage\nand Submit", user: true },
    { id: '3A', x: X_POS.n3A, label: "", user: false },
    { id: '4', x: X_POS.n4, label: "Authorize\nTransaction", user: true },
    { id: '5', x: X_POS.n5, label: "Generate MT\nMessage File", user: false },
    { id: '6', x: X_POS.n6, label: "Push MT\nMessage Files\nto SWIFT", user: false },
    { id: '7', x: X_POS.n7, label: "Read\nResponse\nfrom SWIFT", user: false },
  ];

  // Logic map to automate the main flow lines perfectly
  const mainFlowLines: { from: keyof typeof X_POS; to: keyof typeof X_POS }[] = [
    { from: 'n1', to: 'n2' },
    { from: 'n2', to: 'n3' },
    { from: 'n3', to: 'n3A' }, // Restored arrowhead here
    { from: 'n3A', to: 'n4' },
    { from: 'n4', to: 'n5' },
    { from: 'n5', to: 'n6' },
    { from: 'n6', to: 'n7' },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-800 py-4">
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto min-h-[750px] dark:bg-slate-800 bg-white font-sans p-4 md:p-8 overflow-hidden lg:overflow-hidden">

      {/* Header Area */}
      <div className="w-full max-w-7xl mx-auto bg-[#2E68C6] py-3 text-center shadow-sm relative z-10 flex items-center justify-center">
        <H2 className="text-white text-[32px] md:text-[38px] lg:text-[42px] font-medium mb-0">
          Outward Remittance Processing Workflow
        </H2>
      </div>

      {/* Responsive Scroll Container for Mobile/Tablet */}
      <div className="w-full overflow-x-auto pb-8 hide-scrollbar lg:overflow-hidden">
        {/* Main Flowchart Wrapper - Fixed width to perfectly fit inside max-w-7xl without truncating. Removing mx-auto ensures the left side is fully scrollable safely on small mobile screens. */}
        <div className="w-[1200px] min-w-[1200px] relative h-[600px]">

          <style>{`
            @keyframes flowShimmer {
              0% { left: -40%; }
              100% { left: 110%; }
            }
          `}</style>

          {/* ========================================= */}
          {/* SVG LAYER (Connecting Lines and Arrows) */}
          {/* ========================================= */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <defs>
              {/* Fixed marker definition ensuring arrowheads always point forward and touch edges */}
              <marker id="arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
              </marker>
            </defs>

            {/* Vertical Separator Line connecting perfectly to the blue header */}
            <line x1={SEP_X} y1="0" x2={SEP_X} y2="550" stroke="black" strokeWidth="2.5" strokeDasharray="6,4" />

            {/* Node 3A to Sherlock Connection (Dashed Downward) */}
            <line x1={X_POS.n3A} y1={MAIN_Y + 22} x2={X_POS.n3A} y2={NODE_2A_Y + 5} stroke="black" strokeWidth="2.5" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />

            {/* ========================================= */}
            {/* Node 2A Connections                       */}
            {/* ========================================= */}

            {/* 1. Horizontal from Laptop to 2A Circle */}
            <line x1={X_POS.n2A_laptop + 28} y1={NODE_2A_Y} x2={X_POS.n2A_circle - 22} y2={NODE_2A_Y} stroke="black" strokeWidth="2.5" strokeDasharray="8,5" />

            {/* 2. Horizontal from 2A Circle to Merge point */}
            <line x1={X_POS.n2A_circle + 22} y1={NODE_2A_Y} x2={mergeX} y2={NODE_2A_Y} stroke="black" strokeWidth="2.5" strokeDasharray="8,5" />

            {/* 3. Vertical Upward to Main Flow */}
            <line x1={mergeX} y1={NODE_2A_Y} x2={mergeX} y2={MAIN_Y + 2.5} stroke="black" strokeWidth="2.5" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />

          </svg>

          {/* ========================================= */}
          {/* HTML LAYER (Nodes, Labels, Icons)         */}
          {/* Z-10 ensures circles overlap the SVG line ends */}
          {/* ========================================= */}

          {/* Main Flow Lines 1 to 7 (with animated shimmer matching Exception.tsx) */}
          {mainFlowLines.map((line, idx) => {
            const startX = X_POS[line.from] + 22;
            const endX = X_POS[line.to] - 22;
            const lineWidth = endX - startX;
            return (
              <div
                key={`flow-${idx}`}
                className="absolute flex items-center -translate-y-1/2 z-0"
                style={{
                  left: startX,
                  top: MAIN_Y,
                  width: lineWidth
                }}
              >
                <div className="h-[3px] bg-black flex-grow relative overflow-hidden">
                  <div 
                    className="absolute top-0 bottom-0 bg-white opacity-80"
                    style={{
                      width: '40%',
                      boxShadow: '0 0 8px 1px white',
                      animation: 'flowShimmer 1.2s linear infinite',
                      animationDelay: `${idx * 0.25}s`
                    }}
                  />
                </div>
                <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[13px] border-l-black shrink-0 relative z-10"></div>
              </div>
            );
          })}

          {/* Main Flow Nodes 1 to 7 */}
          {nodes.map((node) => (
            <div key={node.id} className="absolute flex flex-col items-center" style={{ left: node.x - 65, top: MAIN_Y - 25, width: 130 }}>
              {node.user && (
                <div className="absolute flex items-end justify-center z-10" style={{ top: USER_ICON_OFFSET, width: '100%' }}>
                  <LaptopUser />
                </div>
              )}
              <div className="w-[50px] h-[50px] rounded-full bg-[#3b71ca] text-white flex items-center justify-center text-[22px] font-medium z-10">
                {node.id}
              </div>
              <P className="text-[14px] font-medium text-center mt-4 leading-[1.5] tracking-[0.02em] text-black whitespace-pre-line max-w-7xl mx-auto">
                {node.label}
              </P>
            </div>
          ))}

          {/* ========================================= */}
          {/* Node 2A Block (Side-by-Side)              */}
          {/* ========================================= */}

          {/* 2A Laptop User & Label */}
          <div className="absolute flex flex-col items-center z-10" style={{ left: X_POS.n2A_laptop - 50, top: NODE_2A_Y - 22, width: 100 }}>
            <LaptopUser />
            <P className="text-[17px] font-semibold text-center mt-3 leading-snug text-black whitespace-pre-line tracking-tight">
              Create{"\n"}Message
            </P>
          </div>

          {/* 2A Blue Circle */}
          <div className="absolute flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#3b71ca] text-white text-[26px] font-medium z-10 shadow-sm" style={{ left: X_POS.n2A_circle - 28, top: NODE_2A_Y - 28 }}>
            2A
          </div>


          {/* Core Banking System Section */}
          <div className="absolute flex flex-col items-center z-10" style={{ left: X_POS.bank - 85, top: NODE_2A_Y - 15, width: 130 }}>
            <BankIcon />
            <P className="text-[14px] font-medium text-center mt-4 leading-snug text-black whitespace-pre-line">
              Core Banking{"\n"}System
            </P>
          </div>

          {/* Treasury System Section */}
          <div className="absolute flex flex-col items-center z-10" style={{ left: X_POS.treasury - 95, top: NODE_2A_Y - 15, width: 100 }}>
            <TreasuryIcon />
            <P className="text-[14px] font-medium text-center mt-4 leading-snug text-black whitespace-pre-line">
              Treasury{"\n"}System
            </P>
          </div>

          {/* Sherlock Screen Section */}
          <div className="absolute flex flex-col items-center z-10" style={{ left: X_POS.sherlock - 90, top: NODE_2A_Y + 15, width: 180 }}>
            <SherlockIcon />
            <P className="text-[17px] font-medium text-center mt-4 leading-snug text-black whitespace-pre-line">
              Screen Banned{"\n"}Entities from Sherlock
            </P>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

// ==========================================
// REUSABLE PIXEL-PERFECT SVG ICONS
// ==========================================

const LaptopUser = () => (
  <img
    src="/Remitree/computer-worker.svg"
    alt="worker"
    className="w-[44px] h-[44px] object-contain shrink-0"
  />
);

const BankIcon = () => (
  <img
    src="/Remitree/bank.svg"
    alt="bank"
    className="w-[60px] h-[60px] object-contain shrink-0"
  />
);

const TreasuryIcon = () => (
  <img
    src="/Remitree/gold.svg"
    alt="treasury"
    className="w-[60px] h-[60px] object-contain shrink-0"
  />
);

const SherlockIcon = () => (
  <img
    src="/Remitree/banned.svg"
    alt="banned"
    className="w-[50px] h-[58px] object-contain shrink-0"
  />
);

export default Seven;