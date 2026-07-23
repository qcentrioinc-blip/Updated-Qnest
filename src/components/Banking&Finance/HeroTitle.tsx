 
import { H1, P } from "../../styles/Typography";

export default function HeroTitle() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-8xl mx-auto   px-20 py-12 sm:py-16 lg:py-10">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          
          {/* Left Side */}
          <div className="w-full lg:w-1/2">
            <H1 className="font-semibold leading-[1.1] tracking-tight">
              <span className="block text-blue-600 
                               text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Complete banking technology
              </span>
              <span className="block text-gray-900 
                               text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                stack built for scale
              </span>
            </H1>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2">
            <P className="  
                          text-sm sm:text-base md:text-lg 
                          leading-relaxed max-w-full lg:max-w-xl">
              Qnest delivers integrated core banking, payments, lending, and compliance solutions to financial institutions across North America, Europe, Asia, and Australia. Our platforms automate complex processes, ensure regulatory compliance, and help banks, credit unions, and financial institutions scale operations efficiently. 
            </P>
          </div>

        </div>
      </div>
    </section>
  );
}