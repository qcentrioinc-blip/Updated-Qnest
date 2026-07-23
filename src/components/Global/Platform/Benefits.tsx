
const CheckCircle = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
);
import { H2, H3, P } from '../../../styles/Typography';

const Benefits = () => {
  const benefits = [
    {
      title: "Lorem ipsum dolor, consectetur adipis consec",
      items: [
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit"
      ],
      metric: "8x",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute"
    },
    {
      title: "Lorem ipsum dolor, consectetur adipis consec",
      items: [
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit"
      ],
      metric: "70+",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute"
    }
  ];

  return (
    <div className="pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-10 relative z-[50]">
      <div className="max-w-8xl lg:mx-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <H2 className="font-bold leading-tight">
            <span className="text-black">Lorem ipsum dolor,</span>
            <br />
            <span className="text-black"> consectetur adipis conse</span>
          </H2>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-[999] lg:-mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Title */}
              <H3 className="  text-gray-800 mb-6">
                {benefit.title}
              </H3>

              {/* Checklist Items */}
              <div className="space-y-4 mb-8">
                {benefit.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-6">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                    <P className="  text-gray-700 leading-relaxed">
                      {item}
                    </P>
                  </div>
                ))}
              </div>

              {/* Metric Section */}
              <div className="flex items-center gap-10 ">
                <div className="text-6xl text-outline sm:text-7xl lg:text-8xl font-bold  text-blue-600 leading-none">
                  {benefit.metric}
                </div>
                <P className="text-sm px-10 sm:text-base text-gray-700 flex-1 leading-relaxed">
                  {benefit.description}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;