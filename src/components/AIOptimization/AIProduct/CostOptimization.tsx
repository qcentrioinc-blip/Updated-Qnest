import { H3, H4, P } from '../../../styles/Typography';
import LazyVideo from '../../Global/LazyVideo';

const COST_LAYERS = [
  {
    title: "Visualization",
    description: "Report costs across environments and business divisions clearly.",
  },
  {
    title: "Utilization",
    description: "Trend how and where your cloud costs are accruing.",
  },
  {
    title: "Configuration",
    description: "Optimize licensing, discounts, and incentives from cloud providers.",
  },
  {
    title: "Commercial",
    description: "Analyze how services are deployed and configured within environments.",
  },
  {
    title: "Engineering",
    description: "Deep profiling of service configuration, utilization, and cost accrual.",
  },
];

const CostOptimization = () => {
  return (
    <section className="w-full relative z-20 bg-white px-[20px] md:px-[60px] xl:px-[160px] py-10 overflow-hidden min-h-[850px] flex flex-col justify-start">
      
      {/* VIDEO BACKGROUND (Pushed slightly higher) */}
      <div className="absolute bottom-[-20px] left-0 right-0 h-[42vh] sm:h-[52vh] -z-10 overflow-hidden opacity-90">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
        <LazyVideo
          className="w-full h-full object-cover"
          src="/Video/LOOO.mp4"
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          autoPlay
          loop
        />
      </div>

      {/* Main Header */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-10 space-y-3">
        <H3 className="text-[#141414] font-bold">
          Layers of Optimization
        </H3>
        <P className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </P>
      </div>

      {/* DESKTOP & TABLET VIEW (md and up) */}
      <div className="hidden md:flex relative w-full max-w-7xl mx-auto flex-col items-center pb-10">
        
        {/* Top 5 Cards Row */}
        <div className="flex justify-between w-full relative z-10">
          {COST_LAYERS.map((layer, index) => (
            <div key={index} className="w-1/5 flex flex-col items-center px-2 xl:px-3">
              {/* Title Outside & Above */}
              <H4 className="text-[#009565] mb-2 text-center h-10 flex items-end justify-center font-semibold">
                {layer.title}
              </H4>
              
              {/* Asymmetrical Card */}
              <div className="border-2 border-[#009565] bg-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-sm rounded-bl-sm p-3 xl:p-4 text-center shadow-sm w-full h-[120px] flex items-center justify-center">
                <P className="text-[#141414] text-xs xl:text-sm">
                  {layer.description}
                </P>
              </div>
            </div>
          ))}
        </div>

        {/* Scaled SVG Connection Lines without the center configuration line */}
        <div className="w-full h-[180px] relative -mt-[1px] z-0">
          <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 1000 180" preserveAspectRatio="none">
            
            {/* U-Shape connecting Card 1 (x=100) and Card 2 (x=300) for Existing Tools */}
            <path 
              d="M 100 0 L 100 45 Q 100 60, 120 60 L 280 60 Q 300 60, 300 45 L 300 0" 
              stroke="#009565" 
              fill="none" 
              strokeWidth="2.5" 
              strokeLinejoin="round" 
            />
            
            {/* Existing Tools Text exactly under the U-shape between Card 1 and 2 */}
            <text x="200" y="48" fill="#009565" fontSize="14" fontWeight="600" textAnchor="middle">
              Existing Tools
            </text>

            {/* Left Outer Line starting from the first 25% of Card 1 (x=50) and touching CloudDIET left border (x=350) */}
            <path 
              d="M 50 0 L 50 150 Q 50 165, 65 165 L 350 165" 
              stroke="#009565" 
              fill="none" 
              strokeWidth="2.5" 
              strokeLinejoin="round" 
            />

            {/* Right Outer Line starting from the last 25% of Card 5 (x=950) and touching CloudDIET right border (x=650) */}
            <path 
              d="M 950 0 L 950 150 Q 950 165, 935 165 L 650 165" 
              stroke="#009565" 
              fill="none" 
              strokeWidth="2.5" 
              strokeLinejoin="round" 
            />

          </svg>
        </div>

        {/* Bottom Central Card (CloudDIET Outcome) */}
        <div className="w-[380px] z-10 relative -mt-[70px]">
          <div className="border-2 border-[#009565] bg-white rounded-tl-[30px] rounded-br-[30px] rounded-tr-sm rounded-bl-sm p-6 text-center shadow-md">
            <H3 className="text-[#009565] mb-2 font-bold">
              CLOUD<span className="font-normal">DIET</span>
            </H3>
            <P className="text-[#141414] text-sm">
              Seamless integration and unified cost visibility mapping directly into your business architecture.
            </P>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW ONLY (< md) */}
      <div className="md:hidden relative w-full max-w-md mx-auto mt-4 pb-16">
        
        <div className="relative flex justify-between items-start">
          
          {/* Left Side: Vertical Stack of Cards */}
          <div className="flex flex-col gap-4 w-[72%]">
            {COST_LAYERS.map((layer, index) => (
              <div key={index} className="border-2 border-[#009565] bg-white rounded-tl-[20px] rounded-br-[20px] rounded-tr-sm rounded-bl-sm p-3.5 shadow-sm">
                <H4 className="text-[#009565] font-semibold mb-1 text-[14px]">
                  {layer.title}
                </H4>
                <P className="text-gray-700 text-xs leading-relaxed">
                  {layer.description}
                </P>
              </div>
            ))}
          </div>

          {/* Right Side: Connector Lines and Labels */}
          <div className="absolute right-0 top-0 bottom-0 w-[26%] pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 650" preserveAspectRatio="none">
              
              {/* Existing Tool bracket connecting card 1 and card 2 */}
              <path 
                d="M 0 35 L 25 35 Q 35 35, 35 47 L 35 150 Q 35 162, 25 162 L 0 162" 
                stroke="#009565" 
                fill="none" 
                strokeWidth="2" 
                strokeLinejoin="round" 
              />

              {/* CloudDIET outer vertical line connecting top and bottom */}
              <path 
                d="M 0 35 L 60 35 Q 75 35, 75 50 L 75 590 Q 75 605, 60 605 L 0 605" 
                stroke="#009565" 
                fill="none" 
                strokeWidth="2" 
                strokeLinejoin="round" 
              />

            </svg>

            {/* Rotated "Existing Tool" Label placed closer to the line */}
            <div className="absolute right-[50px] top-[90px] transform rotate-90 origin-center">
              <P className="text-[#009565] text-[11px] font-semibold whitespace-nowrap">
                Existing Tool
              </P>
            </div>

            {/* "CloudDIET" Label */}
            <div className="absolute right-[4px] top-[300px] transform rotate-90 origin-center">
              <P className="text-[#009565] text-[12px] font-bold whitespace-nowrap tracking-wider">
                CLOUD<span className="font-normal">DIET</span>
              </P>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CostOptimization;