import { H2,   H3,   H4, P } from "../../../styles/Typography";
 
const PhysicianHeroSection = () => {
  return (
    <section className="relative w-full bg-white dark:bg-[#141414] py-10 overflow-hidden">
       {/* Wave Shape */}
  {/* <img
    src="/EHR-PMS/Physician/shape1.svg"
    alt="decorative wave"
    className="
      pointer-events-none
      hidden lg:block
      absolute
      right-0
      top-140
      -translate-y-1/2
      w-[700px]
      opacity-100
      z-0
    "
  /> */}
      <div className=" px-[40px] md:px-[60px] xl:px-[160px] lg:pt-0">
        {/* Top Content */}
        <div className="grid grid-cols-1 mt-10  lg:mt-36 lg:px-6  lg:grid-cols-[2fr_1fr] gap-10 items-center">
          {/* Left Text */}
          <div>
            <H2 className="text-4xl font-semibold text-[#00AA72]  leading-tight">
              Practice Medicine,
             
              Not Paperwork.
            </H2>
          </div>
 
          {/* Right Description */}
          <P className=" max-w-xl">
   Unified Clinicapp is the physician-friendly EHR that reduces clicks and charting time so you can focus on patient care, while its integrated practice management tools streamline scheduling, billing, and patient communication. 
          </P>
        </div>
 
        {/* Images + Stats */}
        <div className="relative mt-16 lg:px-6">
          {/* IMAGE WRAPPER */}
      <div className="relative w-full max-w-[745px] flex flex-col gap-4 lg:block">
 
            {/* Image 1 */}
           <img
  src="/EHRIcons/PhysicianHero1.webp"
  alt="Healthcare Building"
  className="
    w-full
    h-[180px] sm:h-[220px] lg:w-[745px] lg:h-[285px]
    rounded-[16px]
    object-cover
  "
/>
 
 
            {/* Image 2 */}
        <img
  src="/EHRIcons/PhysicianHero2.webp"
  alt="Doctors Reviewing Chart"
  className="
    w-full
    h-[160px] sm:h-[200px]
    rounded-[16px]
    object-cover
    shadow-lg
 
    lg:absolute
    lg:left-full
    lg:top-full
    lg:-translate-y-2
    lg:w-[500px]
    lg:h-[212px]
  "
/>
 
 
          </div>
 
          {/* Stats */}
          <div className=" mt-10 lg:mt-28  grid grid-cols-3 gap-10 max-w-3xl">
            <div className="lg:mt-4">
              <H3 className=" font-bold dark:text-white">
               Achieve Best Results  
              </H3>
            </div>
 
            <div>
              <H2 className="text-4xl font-bold text-gray-900 dark:text-[#00AA72]  ">55X</H2>
              <H4 className="dark:text-white">Faster Charting</H4>
            </div>
 
            <div>
              <H2 className="text-4xl font-bold text-gray-900 dark:text-[#00AA72]  ">85%</H2>
              <H4 className="dark:text-white">Fewer Clicks</H4>
            </div>
          </div>
        </div>
      </div>
 
      {/* Responsive Fixes */}
      {/* <style>{`
        @media (max-width: 1024px) {
          img {
            position: static !important;
            transform: none !important;
            width: 100% !important;
            height: auto !important;
            margin-top: 1rem;
          }
        }
      `}</style> */}
    </section>
  );
};
 
export default PhysicianHeroSection;