import { H2, H4  , P } from "../../../styles/Typography";
 
import { HoverExpandImage } from "../../HomePage/AIOptimization/HoverExpandImage";

const Comparison = () => {
  const leftItems = [
    {
      number: 1,
      title: "Pre-built, customizable SOAP templates auto-populate with patient data for faster note completion. "
    },
    {
      number: 2,
      title: "Integrated coding suggestions and one-click billing eliminate separate billing software steps. "
    },
    {
      number: 3,
      title: "To-do lists and reminders are linked directly to patient charts, organizing follow-ups automatically. "
    }
  ];

  const rightItems = [
    {
      number: 1,
      title: "Real-time alerts for drug interactions and allergies appear as you prescribe within the workflow. "
    },
    {
      number: 2,
      title: "A unified patient profile provides immediate access to full history, labs, and medications during the visit. "
    },
    {
      number: 3,
      title: "Clinical decision support tools offer evidence-based guidance and reminders based on patient-specific data. "
    }
  ];

  return (
    <div className="min-h-fit md:min-h-fit lg:min-h-fit xl:min-h-fit dark:bg-[#141414] bg-white py-4 ">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        {/* Header */}
        <div className="text-center mb-8">
          <H2 className="text-[#00AA72] dark:text-white mb-2">
          Key Benefits for Physicians Like You
          </H2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-20">
          {/* Left Column */}
          <div className=" rounded-xl dark:bg-teal-900  ">
            {/* Icon Circle */}
            <div className="w-full rounded-xl mb-6">
              <HoverExpandImage
              src="/EHR-PMS/Physician/img1.webp"
              className="h-48 md:h-56 lg:h-72"
              />
            </div>

            {/* Main Title */}
            <H4   className="text-gray-800  dark:text-white font-semibold text-xl md:text-2xl mb-4 leading-tight">
               Dramatically Reduce Time Spent on Documentation and Administrative Tasks
            </H4>

            {/* Subtitle */}
            <P className=" text-sm md:text-base mb-2 leading-relaxed">
             Smart tools and automation handle the paperwork, giving you more face-to-face time with your patients.
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
          <div className=" rounded-xl dark:bg-teal-900   ">
            {/* Icon Circle */}
            <div className="w-full rounded-xl mb-6">
              <HoverExpandImage
              src="/EHR-PMS/Physician/img2.webp"
              className="h-48 md:h-56 lg:h-72"
              />
            </div>

            {/* Main Title */}
            <H4   className="text-gray-800 font-semibold dark:text-white text-xl md:text-2xl mb-4 leading-tight">
    Enhance Clinical Accuracy and Patient Outcomes with Informed Decision Support
            </H4>

            {/* Subtitle */}
            <P className=" text-sm md:text-base mb-2 leading-relaxed">
          Access critical patient insights and alerts instantly to support safer, more effective care decisions.
            </P>

            {/* Numbered List */}
            <div className="space-y-8 py-10">
              {rightItems.map((item) => (
                <div key={item.number} className="flex gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFEFDD] border border-[#166D48] rounded-full flex items-center justify-center">
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

export default Comparison;