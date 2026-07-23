import { H1, H3, P } from "../../../styles/Typography";

export default function ImgSec1() {
  return (
    <section className="relative w-full bg-[#00AA72]  dark:bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-start gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-white">

          <H1 className="leading-tight">
            Ready to Strengthen Your 
            AML Program 
          </H1>

          {/* CARD */}
          <div className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl border border-white/20">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
                <img className="text-white w-12 h-12 z-10"  
              src="/ProductSherlock/icon7.svg"
              />
              </div>

              <H3>Request Demo</H3>
            </div>

            <div className="border-l border-white/30 pl-6 ">
              <P className="text-white/90 leading-relaxed mt-4">
                 Our team will guide you through SHERLOCK’s key features and demonstrate how it integrates seamlessly with your core banking systems. Learn how the platform enhances transaction monitoring, streamlines watchlist screening, and simplifies KYC verification, helping your institution strengthen compliance and operate more efficiently.

                
              </P>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-white">

          <P className="max-w-xl text-white/90 xl:pt-6 leading-relaxed">
            Schedule a demo to see how SHERLOCK automates transaction monitoring, watch list screening, and KYC verification for your institution. 
          </P>

        </div>

      </div>

      {/* IMAGE FIXED TO SECTION BOTTOM RIGHT */}
      <img
  src="/ProductSherlock/img.webp"
  alt="demo"
  className="
    w-full max-w-md mx-auto
    lg:absolute lg:bottom-0 lg:right-0 lg:max-w-3xl lg:mt-0
  "
/>

    </section>
  );
}