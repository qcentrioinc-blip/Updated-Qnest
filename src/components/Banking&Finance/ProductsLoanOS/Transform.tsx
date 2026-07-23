 
import { H2, H4, P } from '../../../styles/Typography'

 
const features = [
  {
    id: 1,
    title: 'eVerification and OCR ',
      icon: '/Verify.svg',
    description:
      ' Built-in OCR reads standard documents with AI learning and mismatch detection capabilities',
  },
  {
    id: 2,
    title: 'Corporate Loan Screening',
      icon: '/Hand.svg',
    description:
      'Analyzes CMA data for ratio analysis, funds flow, and highlights observed deviations',
  },
]

const Transform = () => {
  return (
    <section className="w-full bg-white dark:bg-black px-4 pb-6 sm:px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col pt-10  xl:flex-row items-center gap-10 xl::gap-16">

        {/* Left — Image Placeholder */}
        <div className="w-full xl:w-1/2 flex-shrink-0">
          <img src="/LOS/TRANSFORMLOANOS.webp"  alt="Transform" className="w-full h-[400px]  xl:h-[600px] rounded-2xl bg-gray-200" />
        </div>

        {/* Right — Content */}
        <div className="w-full xl:w-1/2 flex flex-col  gap-6">

          {/* Heading */}
          <H2 className="text-3xl sm:text-4xl dark:text-[#00AA72]  font-extrabold  leading-tight">
            Verification, Corporate Screening, and Approval Workflows
          </H2>

          {/* Subtitle */}
          <P className=" text-sm sm:text-base dark:text-white leading-relaxed">
           System enables eVerification of documents, screens corporate loans with CMA data analysis, and routes applications through configurable approval matrix with multiple levels.
          </P>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col gap-4 p-5 rounded-2xl border border-[#D9D9D9] bg-[#F8F8F8] dark:bg-slate-950 hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#00AA72] flex items-center justify-center flex-shrink-0">
                 <img
  src={feature.icon}
  alt={feature.title}
  className="w-6 h-6 object-contain"
/>
                </div>

                {/* Text */}
                <div>
                  <H4 className="text-base  dark:text-white font-bold  mb-2 leading-snug">
                    {feature.title}
                  </H4>
                  <P className="  leading-relaxed dark:text-gray-400">
                    {feature.description}
                  </P>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Transform