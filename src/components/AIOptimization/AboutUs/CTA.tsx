import { ContactUsAI } from "../../../styles/Button";
import { H2, P } from "../../../styles/Typography";

export default function CTA() {
  return (
    <section className="w-full bg-[#E7E7FF] py-16 px-6 md:px-12 lg:px-10">
      <div className="max-w-8xl lg:mx-10 flex flex-col xl:flex-row justify-between items-start gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <P     className="text-[#5551FF] font-bold mb-3">
            Lorem ipsum dolor sit amet Lorem
          </P>

          <H2 className=" font-bold leading-tight text-[#020059]">
            Lorem ipsum dolor sit ,<br className="xl:block hidden"/> amet consectetur adipiscing Lorem
          </H2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1  xl:mt-12 max-w-lg">
          <P     className="text-gray-900 font-semibold">
            Time Sensitive Network:
            <span className="font-normal text-gray-700">
              {" "}Ensure to implement TSN defined by IEEE to enhance the end-to-end communication latencies
            </span>
          </P>

          <ContactUsAI className="border-none  mt-6">BOOK A  FREE DEMO</ContactUsAI>
        </div>

      </div>
    </section>
  );
}
