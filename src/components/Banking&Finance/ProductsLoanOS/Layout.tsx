 
import { H2, H4, P } from '../../../styles/Typography'

const features = [
  {
    id: 1,
    title: 'Group Lending Management',
    description:
      'Supports joint liability groups and self-help groups with center meetings and bulk collection features',
    icon: '/LOS/Docx.svg',
  },
  {
    id: 2,
    title: 'Collection and Recovery',
    description:
      'Routes outstanding cases to agents with Google Maps integration and legal case tracking',
    icon: '/LOS/WhiteCollect.svg',
  },
  {
    id: 3,
    title: 'Dropout Management',
    description:
      'Logs potential customers who drop out and pushes data to relationship managers',
    icon: '/LOS/logout.svg',
  },
];
 
const Layout = () => {
  return (
    <div className="  bg-white dark:bg-black px-6 py-10  xl:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 xl:gap-20">

        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <H2 className=" dark:text-white  leading-tight">
           Capabilities Beyond Loan Origination 
          </H2>

          {/* Image Placeholder */}
          <img src="/LOS/Capability.webp"  alt="Layout" className="w-full object-cover rounded-2xl bg-[#D9D9D9] h-[300px] lg:h-[400px] " />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex  space-y-2 xl:space-y-4 flex-col gap-4 lg:pt-2 relative">

         
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center max-w-xl gap-10 p-6 rounded-2xl border border-[#D9D9D9] dark:bg-slate-900 shadow-sm bg-[#F8F8F8] hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full  bg-[#00AA72] flex items-center justify-center">
                <img
  src={feature.icon}
  alt={feature.title}
  className="w-6 h-6 object-contain"
/>
              </div>

              {/* Text */}
              <div>
                <H4 className="text-base dark:text-white font-bold   mb-1">
                  {feature.title}
                </H4>
                <P className="  leading-relaxed">
                  {feature.description}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout