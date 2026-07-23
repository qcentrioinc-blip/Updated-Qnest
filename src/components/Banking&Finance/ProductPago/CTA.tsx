import { H2, P } from "../../../styles/Typography";
 
const features = [
  {
    id: 1,
    text: "Automated Clearing House (ACH) for batch processing",
    icon: "/Pago/Vector.svg"
  },
  {
    id: 2,
    text: "Real-time payment processing with secure authentication",
    icon: "/Pago/Time.svg"
  },
  {
    id: 3,
    text: "AML monitoring for cross-referencing beneficiary data  ",
    icon: "/Pago/Group.svg"
  },
  {
    id: 4,
    text: " NACHA framework for harmonized practices",
   
     icon: "/Pago/Grid.svg"
  },
];
 
const CTA = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl  px-6 lg:px-16  xl:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr_1fr]  gap-4 xl:gap-12  items-center xl:items-start">
 
          {/* Column 1 */}
          <div>
            <span className="inline-block font-quicksand mb-4 px-4 py-1.5 border border-gray-300 rounded-full text-sm">
              Overview
            </span>
 
            <H2 className="leading-tight">
              Built for All  Payment Types-Nacha, Fedwire, and Reg E Compliant 
            </H2>
          </div>
 
          {/* Column 2 */}
          <div className="space-y-6 mt-8 xl:space-y-10">
            {features.slice(0, 2).map((item) => (
              <div key={item.id} className="flex gap-2  items-center">
            <div className="w-8 h-8 xl:w-14 xl:h-14 bg-[#00AA72] rounded-full flex items-center justify-center flex-shrink-0">
  <img src={item.icon} alt="" className="w-4 xl:w-8 object-contain" />
</div>
                <P className="leading-tight pt-2 dark:text-white">{item.text}</P>
              </div>
            ))}
          </div>
 
          {/* Column 3 */}
        <div className="space-y-6  mt-8 xl:space-y-10">
            {features.slice(2, 4).map((item) => (
              <div key={item.id} className="flex gap-2 items-center">
           <div className="w-8 h-8 xl:w-14 xl:h-14 bg-[#00AA72] rounded-full flex items-center justify-center flex-shrink-0">
  <img src={item.icon} alt="" className="w-4 xl:w-8 object-contain" />
</div>
                <P className="leading-tight pt-2 dark:text-white">{item.text}</P>
              </div>
            ))}
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default CTA;