// import { useMotionValue, useAnimationFrame, useInView } from "framer-motion";
import { useRef } from "react";
import { P } from "../../../styles/Typography";

// const logos = [
//   "/CompanyLogo/Dell.png",
//   "/CompanyLogo/GoogleCloud.png",
//   "/CompanyLogo/Infosys.png",
//   "/CompanyLogo/Oracle.png",
//   "/CompanyLogo/AWS.png",
//   "/CompanyLogo/Deloitte.png",
// ];

export default function Partners() {
 
  const sectionRef = useRef<HTMLElement>(null);

  // const x = useMotionValue(0);
  // const isInView = useInView(sectionRef, { amount: 0.2 });

  // const SPEED = 0.6;          // px per frame
  // const RESET_AT = -1400;     // adjust based on logo width

  // useAnimationFrame(() => {
  //   if (!isInView) return;

  //   const current = x.get();
  //   const next = current - SPEED;

  //   x.set(next <= RESET_AT ? 0 : next);
  // });

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-8xl mx-6 xl:px-10 flex flex-col text-center">

        {/* INFO CARDS (UNCHANGED) */}
        <div className="relative">
          <div className="
  mx-auto max-w-7xl rounded-3xl px-6 py-8
  bg-white/10 backdrop-blur-md
  border border-white/50
  shadow-[0_8px_32px_rgba(0,0,0,0.25)]
">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
              <div className="text-center py-4">
                <span className="inline-block px-5 py-3 mb-3 rounded-full bg-white text-sm font-semibold text-black">
                  AI-Powered Profiling
                </span>
                <P className="font-medium text-white">
                  Analyzes resource configuration,<br />usage, and costs.
                </P>
              </div>

              <div className="text-center py-4">
                <span className="inline-block px-5 py-3 mb-3 rounded-full bg-white text-sm font-semibold text-black">
                  Expert Recommendations
                </span>
                <P className="font-medium text-white">
                  Actionable insights from<br />cloud engineering veterans.
                </P>
              </div>

              <div className="text-center py-4">
                <span className="inline-block px-5 py-3 mb-3 rounded-full bg-white text-sm font-semibold text-black">
                  Guaranteed Savings
                </span>
                <P className="font-medium text-white">
                  Pay only a share<br />of realized savings.
                </P>
              </div>
            </div>
          </div>
        </div>

        {/* <H2 className="font-semibold text-[#F5F5F5]">
          We partnered with
        </H2> */}

        {/* AUTO SLIDER (SAME UI) */}
        {/* <div className="relative mt-10 overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-8 will-change-transform"
          >
            {logos.concat(logos, logos).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[220px] h-[100px] bg-gray-200 rounded-md"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div> */}

      </div>
    </section>
  );
}
 