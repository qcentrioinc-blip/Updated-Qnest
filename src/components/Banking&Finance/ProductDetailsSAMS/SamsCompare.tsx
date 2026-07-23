import { H4, P } from "../../../styles/Typography";

import { HoverExpandImage } from "../../HomePage/AIOptimization/HoverExpandImage";

const SamsCompare = () => {
  const leftItems = [
    {
      number: 1,
      title: "Reports based on NPL age, product type, asset status, sector, sub-sector, and industry classification"
    },
    {
      number: 2,
      title: "Account exception reports including identification, classification, security, collateral, and provision details"
    },
    {
      number: 3,
      title: "Dynamic reporting capability to configure, save specifications, and schedule ad-hoc report execution"
    }
  ];

  const rightItems = [
    {
      number: 1,
      title: "MIS reports focused on SMA and NPL accounts with detailed account-level information"
    },
    {
      number: 2,
      title: "Download options available in excel, text, or csv formats for easy data manipulation"
    },
    {
      number: 3,
      title: "Schedule ad-hoc report execution by configuring specific details for automated delivery"
    }
  ];

  return (
    <div className="min-h-fit md:min-h-fit lg:min-h-fit xl:min-h-fit dark:bg-black bg-white pt-12 ">
      <div className="max-w-8xl xl:mx-10 px-6">
        {/* Header */}
        {/* <div className="text-center mb-8">
           className="text-[#00AA72] mb-2">
          Key Benefits for Physicians Like You
          <>
        </div> */}

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-20">
          {/* Left Column */}
          <div className=" rounded-xl  md:p-10  lg:p-12">
            {/* Icon Circle */}
            <div className="w-full rounded-xl mb-6">
              <HoverExpandImage
                src="/SAMS/standard.webp"
                className="h-48 md:h-56 lg:h-72 object-cover border border-[#00AA72] border-12"
              />
            </div>

            {/* Main Title */}
            <H4 className="text-gray-800 dark:text-white font-semibold text-xl md:text-2xl mb-4 leading-tight">
              Standard Out-of-Box MIS Reports for NPL and Account Monitoring
            </H4>

            {/* Subtitle */}
            <P className=" text-sm md:text-base mb-2 leading-relaxed">
              Comprehensive set of pre-built MIS reports providing gross and net NPL details with configurable parameters for detailed analysis.
            </P>

            {/* Numbered List */}
            <div className="space-y-8 py-10">
              {leftItems.map((item) => (
                <div key={item.number} className="flex gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFEFDD] border border-[#166D48] rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-semibold text-sm">
                      {item.number}
                    </span>
                  </div>

                  {/* Text */}
                  <P className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                    {item.title}
                  </P>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className=" rounded-xl  md:p-10 lg:p-12  ">
            {/* Icon Circle */}
            <div className="w-full rounded-xl mb-6">
              <HoverExpandImage
                src="/SAMS/SMA.webp"
                className="h-48 md:h-56 lg:h-72 object-cover border border-[#00AA72] border-12"
              />
            </div>

            {/* Main Title */}
            <H4 className="text-gray-800 dark:text-white font-semibold text-xl md:text-2xl mb-4 leading-tight">
              SMA and NPL Account Reporting with Flexible Export Options
            </H4>

            {/* Subtitle */}
            <P className=" text-sm md:text-base mb-2 leading-relaxed">
              Special Mention Account and NPL reports with facility to view or download in multiple formats for operational use.
            </P>

            {/* Numbered List */}
            <div className="space-y-8 py-10">
              {rightItems.map((item) => (
                <div key={item.number} className="flex gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFEFDD] border border-[#166D48] rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-semibold text-sm">
                      {item.number}
                    </span>
                  </div>

                  {/* Text */}
                  <P className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                    {item.title}
                  </P>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamsCompare;