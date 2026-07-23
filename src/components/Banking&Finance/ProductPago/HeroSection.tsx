import { Link } from 'react-router-dom';
// import { ContactUs } from '../../../styles/Button';
import { H1, P } from '../../../styles/Typography';

const HeroSection = () => {
  return (
  <section className="w-full bg-[#00AA72] dark:bg-[#0f172a] xl:h-auto overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto  px-4 lg:px-6   xl:py-20 pt-16 xl:pt-36">

     <div className="flex flex-col xl:flex-row items-center pt-24 justify-between gap-12">

          {/* LEFT CONTENT */}
        <div className="max-w-4xl xl:max-w-xl text-center xl:text-left flex flex-col">

  {/* HEADING */}
  <H1 className="text-white mb-6 order-1 xl:order-none">
    Complete Payment and Settlement System for US Banks
  </H1>

  {/* PARAGRAPH */}
  <P className="text-white/90 mb-8 order-3 xl:order-none">
   Description: 

PAGO streamlines payment processing with support for digital payments, electronic checks, ACH, Fedwire, and real-time monitoring on PCI DSS and SOC 1/SOC 2 ready infrastructure. Lower fees, robust security, and seamless integration with existing systems. Meets FFIEC payment system guidelines and Regulation E consumer protection requirements. 
  </P>

  {/* BUTTON */}
  <Link
    to="#contact-us"
    onClick={(e) => {
      const el = document.getElementById("contact-us");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="order-4 xl:order-none"
  >
    {/* <ContactUs className=" gap-2 whitespace-nowrap shrink-0">
      Learn More
    </ContactUs> */}
  </Link>

</div>

          {/* RIGHT IMAGE */}
      <div className="xl:w-1/2 pb-16 xl:pb-0 flex justify-center order-2 xl:order-none">
  <div className="relative flex items-center justify-center">

    {/* WHITE ROTATING CIRCLE */}
    <div className="absolute xl:-top-22 xl:left-14 animate-spin-sloww">
  <svg
    width="520"
    height="520"
    viewBox="0 0 520 520"
    className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[580px] lg:h-[580px] xl:w-[520px] xl:h-[520px]"
  >
    <circle
      cx="260"
      cy="260"
      r="250"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="14 10"
    />
  </svg>
</div>

    {/* BLACK ROTATING CIRCLE */}
   <div className="absolute xl:-top-14 xl:left-20 animate-spin-reverse">
  <svg
    width="460"
    height="460"
    viewBox="0 0 460 460"
    className="w-[250px] h-[250px] md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px] xl:w-[460px] xl:h-[460px]"
  >
    <circle
      cx="230"
      cy="230"
      r="220"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeDasharray="14 10"
    />
  </svg>
</div>

    {/* IMAGE (UNCHANGED SIZE) */}
    <img
      src="/HeroPago.webp"
      alt="Hero visual"
      className="relative z-10  pl-2 pt-2  md:pt-16 md:pl-10 xl:pt-3  xl:pl-4  xl:scale-110 object-contain"
    />

  </div>
</div>



        </div>

      </div>
    </section>
    
  );
};

export default HeroSection;