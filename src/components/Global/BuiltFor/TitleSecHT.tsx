import { ArrowUpRight } from "lucide-react";
import { H1 } from "../../../styles/Typography";

export default function TitleSecHT() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/BuiltFor/bg_img1.png')" }}
    >
      {/* DARK OVERLAY (REMOVE IF NOT NEEDED) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-10 ">

          <div className="w-full md:w-[60%] space-y-6">
            <H1 className="text-white leading-tight">
              Shaping the
              Future Across
              B and F.
            </H1>

            <button className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg flex items-center gap-2 text-gray-900 shadow-lg hover:bg-white transition">
              <span className="text-sm font-semibold">EXPLORE SOLUTIONS</span>
              <ArrowUpRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
