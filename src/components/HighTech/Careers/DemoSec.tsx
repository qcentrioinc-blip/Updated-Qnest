import { ArrowUpRight } from "lucide-react";
import { H2 } from "../../../styles/Typography";

const DemoSection = () => {
  return (
    <section className="w-full bg-[#111111] text-white py-24 px-6 flex justify-center items-center">
      <div className="max-w-4xl w-full text-center border-y border-[#F99526]  rounded-[50px] py-16 px-6 md:px-12 relative overflow-hidden">
        <H2 className="">
          Sed ut perspiciatis unde omnis
          <br />
          iste natus error sit{" "}
          <span className=" text-[#8E5CF8] ">
            voluptatem accusantium doloremque
          </span>
        </H2>

        <button className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-black text-sm font-semibold tracking-wide hover:bg-gray-200 transition-all duration-300">
          GET PRODUCT DEMO
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default DemoSection;
