import { H2, P } from "../../../styles/Typography";

const features = [
  {
    title: "Improved NPL Tracking Accuracy - FDIC Compliant",
    description:
      "Automated identification and flagging of NPLs reduces manual errors. System applies IRAC guidelines consistently across all loan products and customer types.",
    icon: "/BNFCos/Search.svg", // Path placeholder to map your asset
  },
  {
    title: "Significant Time Savings",
    description:
      "Daily auto-upload of data files eliminates manual data collection. Automated processes reduce time spent on NPL identification and provisioning calculations.",
    icon: "/BNFCos/OnTime.svg",
  },
  {
    title: "Enhanced Regulatory Compliance",
    description:
      "Generates accurate reports aligned with regulatory changes and requirements. Maintains comprehensive MIS reports on NPLs, defaulters, and account classifications.",
    icon: "/BNFCos/Notes.svg",
  },
  {
    title: "Proactive Risk Management - CECL Compliant",
    description:
      "Predictive analytics identify potential NPLs early for timely intervention. Real-time dashboards provide visibility into stressed assets across the portfolio.",
    icon: "/BNFCos/Tower.svg",
  },
];

const AboutFeaturesSection = () => {
  return (
    <section className="w-full pb-10 px-6 md:px-12  dark:bg-black lg:px-20 bg-white">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-left mb-12  pt-4 ">
        <H2 className="text-[#232323]  dark:text-white mb-4 font-bold text-[36px] md:text-[44px] lg:text-[50px] leading-[1.1]">
          Key Benefits of SAMS for Financial Institutions
        </H2>

        <P className="text-[#555] mb-12 leading-[1.6] max-w-4xl text-[14px] md:text-[16px]">
          Banks gain accurate NPL tracking, reduced manual effort, and improved regulatory compliance through automated processes. Real-time dashboards provide actionable insights for proactive risk management and better decision-making.
        </P>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] justify-items-center lg:justify-items-start">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start border border-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow bg-[#FFFFFF] dark:bg-slate-900 w-full"
            style={{
              maxWidth: '608px',
              minHeight: '277px',
              borderRadius: '8px',
              padding: '40px 32px'
            }}
          >
            {/* Left Icon */}
            <div
              className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-8 flex items-center justify-center"
              style={{ width: '146px', height: '146px' }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  /* Fallback if icon isn't found yet */
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="146" height="146" viewBox="0 0 146 146" fill="none"><rect width="146" height="146" rx="73" fill="%23EEF2F6"/><path d="M73 40V106M40 73H106" stroke="%232B68C3" stroke-width="4" stroke-linecap="round"/></svg>';
                }}
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col flex-1 text-center sm:text-left justify-center h-full">
              <h4 className="font-['Bricolage_Grotesque'] dark:text-white font-bold text-[#1a1a1a] text-[20px] sm:text-[24px] mb-3 leading-[1.2]">
                {item.title}
              </h4>
              <p className="font-['Quicksand'] dark:text-white text-[#555] text-[13px] sm:text-[14px] leading-[1.6]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
