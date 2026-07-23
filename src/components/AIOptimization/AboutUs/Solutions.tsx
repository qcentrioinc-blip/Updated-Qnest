 
import { H2, H4,   P } from "../../../styles/Typography";

export default function Solutions() {
  return (
    <section className="w-full bg-black text-white py-10 lg:py-20 lg:px-10">
      <div className="max-w-8xl mx-4 md:mx-10 lg:mx-10  ">
 <div className="text-center">
     {/* HEADING */}
        <H2 className="   font-bold leading-tight">
          Our tailored solutions crafted <br className="xl:block hidden" />
          from your problem <br className="xl:block hidden" />statement.
        </H2>

        {/* DESCRIPTION */}
        <P className="text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed  ">
         We've been in the trenches with manufacturers for years. We've seen what works, what doesn't, and what's just hype. Our solutions are proven, our methodologies are refined, and our team is ready to hit the ground running. Here's what we bring to the table.
        </P>
 </div>
       

        {/* SOLUTION CARDS */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* CARD 1 */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <img
              src="/AIAbout/Solutions1.png"
              width={400}
              height={250}
              className="rounded-xl object-cover"
              alt="Solution 1"
            />
            <H4 className="text-xl font-semibold mb-2 text-center md:text-left">
              Digital Infrastructure
            </H4>

            <ul className="text-gray-300 space-y-2 list-disc 
              mx-auto md:ml-4 leading-relaxed text-center md:text-left">
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                IT-OT Convergence
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                OT Security
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Edge Data Center
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Cloud Management
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Wireless
              </li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <img
              src="/AIAbout/Solutions2.png"
              width={400}
              height={250}
              className="rounded-xl object-cover"
              alt="Solution 2"
            />
            <H4 className="text-xl font-semibold mb-2 text-center md:text-left">
              Digital Infrastructure
            </H4>

            <ul className="text-gray-300 space-y-2 list-disc 
              mx-auto md:ml-4 leading-relaxed text-center md:text-left">
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                IT-OT Convergence
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                OT Security
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Edge Data Center
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Cloud Management
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Wireless
              </li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <img
              src="/AIAbout/Solutions3.png"
              width={400}
              height={250}
              className="rounded-xl object-cover"
              alt="Solution 3"
            />
            <H4 className="text-xl font-semibold mb-2 text-center md:text-left">
              Digital Infrastructure
            </H4>

            <ul className="text-gray-300 space-y-2 list-disc 
              mx-auto md:ml-4 leading-relaxed text-center md:text-left">
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                IT-OT Convergence
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                OT Security
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Edge Data Center
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Cloud Management
              </li>
              <li className="text-[14px] md:text-[16px] font-quicksand leading-[120%]">
                Wireless
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}