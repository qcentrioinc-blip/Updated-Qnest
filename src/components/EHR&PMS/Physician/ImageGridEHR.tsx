import { useState } from "react";
import { H3, H4, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

const ImageGridEHR = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-full lg:min-h-screen  py-6">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-3 lg:gap-4">
          
          {/* First Row - Left Column (Doctor with Laptop) */}
          <div className="lg:col-span-8">
            <div className="relative h-64 md:h-80 lg:h-[450px] rounded-4xl overflow-hidden shadow-lg group">
              <img
                src="/EHRIcons/ImageDoctor.webp"
                alt="Doctor working on laptop"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* First Row - Right Column (New Light Green "For Clinicians" Card) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-4xl bg-[#E3F2ED] h-full min-h-[350px] p-8 md:p-12 flex flex-col justify-center shadow-sm">
              <div>
                <H3 className="text-gray-900 font-bold text-2xl md:text-3xl inline-block pb-3 border-b border-gray-400 w-full max-w-[280px]">
                  For Clinicians
                </H3>

                <p className="font-quicksand text-base md:text-[18px] text-gray-800 font-medium mt-6 leading-relaxed">
                  Designed with physician input to streamline your daily workflow,
                  reduce documentation burden, and support clinical excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Left Column (Reduces Administrative Burden) */}
          <div className="lg:col-span-5">
            <div className="relative h-64 md:h-80 lg:h-90 bg-[#008938] rounded-4xl overflow-hidden shadow-lg p-8 md:p-10 flex flex-col justify-end">
              <div className="flex justify-center items-center mb-10">
                <img src="/ReduceAdmin.svg" alt="reduce" className="w-20 h-20 md:w-28 md:h-28" />
              </div>

              <H4 className="text-2xl md:text-3xl text-white mb-4">
                Reduces Administrative Burden
              </H4>
              <p className="text-sm md:text-base lg:text-[18px] font-quicksand text-white">
                Automates coding and billing tasks integrated from your clinical notes.
              </p>
            </div>
          </div>

          {/* Second Row - Right Column (Supports Smarter Decisions) */}
          <div className="lg:col-span-8">
            <div className="relative h-64 md:h-80 lg:h-90 bg-[#00AA72] flex flex-row rounded-4xl overflow-hidden shadow-lg group">
              {/* Text overlay */}
              <div className="absolute bottom-12 left-6 p-2 md:p-0 md:left-8 z-10">
                <H4 className="text-2xl md:text-3xl text-white mb-3">
                  Supports Smarter Decisions
                </H4>
                <P className="max-w-xs text-white">
                  Provides real-time alerts and patient history in one view.
                </P>
              </div>

              <img
                src="/EHRIcons/LadyDoctor.webp"
                alt="Female doctor with laptop"
                className="w-full hidden md:block h-full absolute -bottom-10 px-20 md:-right-20 lg:-right-28 object-contain scale-120 transition-transform duration-500 group-hover:scale-125"
              />
            </div>
          </div>

        </div>
      </div>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default ImageGridEHR;