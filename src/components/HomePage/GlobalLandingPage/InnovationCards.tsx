import { motion } from "framer-motion";
import { P } from "../../../styles/Typography";
const InnovationCards = () => {
  return (
    <section className="w-full bg-white dark:bg-black px-4 sm:px-8 xl:mx-auto">

      {/* Overall Container */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-6 xl:gap-[30px]">

        {/* ══════ ROW 1: Heading + Approach Card ══════ */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 xl:gap-[30px]">

          {/* ── Left: Label + Heading ── */}
          <div className="flex flex-col gap-3 w-full lg:flex-1 lg:min-w-0">

            {/* Dash + Label */}
            {/* <div className="flex items-center gap-3">
              <div className="w-[32px] h-[3px] bg-gray-400 rounded-full flex-shrink-0" />
              <span
                className="text-[#00AA72] text-[18px] sm:text-[20px] xl:text-[24px] font-medium leading-none"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Quis autem
              </span>
            </div> */}

            {/* Heading */}
            <h2
              className="text-[#2A2A2A] dark:text-white text-[36px] sm:text-[44px] lg:text-[42px] xl:text-[64px] font-semibold leading-none tracking-normal m-0 w-full  "
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              We build platforms that scale with you.
            </h2>
          </div>

          {/* ── Right: Our Approach Card ── */}
          <div className="relative flex flex-col justify-center w-full lg:w-[48%] xl:w-[626px] xl:h-[198px] flex-shrink-0 rounded-[30px] bg-[#E7E3D7] p-5 xl:pt-[20px] xl:pr-[30px] xl:pb-[20px] xl:pl-[30px] gap-4 xl:gap-[21px]">

            {/* Dark Circle */}
            {/* <div className="absolute top-4 right-4 xl:top-[20px] xl:right-[30px] w-[38px] h-[38px] xl:w-[46px] xl:h-[46px] rounded-full bg-[#424242] flex-shrink-0" /> */}

            {/* Our Approach Title */}
            <span
              className="text-[#00AA72] text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-none block pr-12 xl:pr-0 xl:w-[250px]"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              Our Approach
            </span>

            {/* Paragraph */}
            <p
              className="text-[#141414] text-[13px] sm:text-[14px] xl:text-[16px] font-normal leading-[155%] m-0 w-full xl:w-[526px]"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              We engage stakeholders throughout the journey, involving them in key decisions to ensure alignment and ownership. Our solutions fit real workflows, ease change, and drive stronger adoption across teams while delivering measurable business outcomes.
            </p>
          </div>
        </div>

        {/* ══════ ROW 2: Bottom Row ══════ */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[400px_1fr_1fr] xl:grid-cols-[600px_0fr_2fr_2fr] gap-3   ">

          {/* ── Bottom Left Card ── */}
          <div className="relative w-full h-[420px] sm:h-[400px] lg:h-[454px] xl:h-[454px] rounded-[30px] bg-[#E7E3D7] overflow-hidden sm:col-span-2 lg:col-span-1 flex flex-col justify-between p-5 xl:p-0">

            {/* ── MOBILE & TABLET LAYOUT (Similar to Desktop) ── */}
            <div className="relative flex flex-col h-full xl:hidden overflow-hidden">

              {/* ✅ Heading Badge */}
              <div className="absolute top-[20px] left-[20px] flex items-center bg-white rounded-full px-[15px] py-[10px] h-[46px] w-fit z-20">
                <span
                  className="text-[#00AA72] text-[18px] font-quadran   sm:text-[20px] font-semibold leading-none"

                >
                  How We Deliver
                </span>
              </div>

              {/* ✅ Image Card - adjusted for mobile */}
              {/* <div className="absolute top-[50px] right-[0px] w-[140px] h-[180px] sm:w-[180px] sm:h-[230px] rounded-[20px] overflow-hidden z-20 shadow-lg">
                <img
                  src="/howwe.webp"
                  alt="How we deliver"
                  className="w-full h-full object-cover"
                />
              </div> */}

              {/* ✅ Pill Buttons Marquee - Moves Left to Right */}
              <div className="absolute top-[120px] left-0 w-full overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[10px] w-max"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[10px] pr-[10px]">
                      {["Agile", "Scalable", "Integrated", "Compliant", "Automated", "Reliable "].map((text, j) => (
                        <div
                          key={j}
                          className="flex items-center border border-[#00AA72] rounded-full px-[15px] py-[8px] h-[40px] whitespace-nowrap"
                        >
                          <span
                            className="text-[#00AA72] text-[14px] font-semibold tracking-widest"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                          >
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Large Text Marquee - Moves Right to Left */}
              <div className="absolute top-[180px] left-0 w-full overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[20px] w-max"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[20px] pr-[20px]">
                      {["Practical solutions. Measurable results. Lasting impact. "].map((text, j) => (
                        <span
                          key={j}
                          className="text-[#00AA72] text-[20px] font-bold tracking-widest whitespace-nowrap"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Bottom Description */}
              <P
                className="absolute bottom-[40px] left-[20px] right-[20px] text-[#141414]  leading-[155%] m-0 z-20"

              >
                We deliver agile, integrated platforms that automate compliance and scale reliably with your institution's growth.
              </P>
            </div>



            <div className="hidden xl:block w-full h-full relative overflow-hidden">

              {/* ✅ Heading Badge - Static top left */}
              <div className="absolute top-[20px] left-[21px] flex items-center bg-white rounded-full px-[20px] py-[15px] h-[60px] w-[280px] z-0">
                <span
                  className="text-[#00AA72] text-[24px] font-semibold leading-none block "
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  Delivering Solutions
                </span>
              </div>

              {/* ✅ Image Card - z-10 always in FRONT */}
              {/* <div className="absolute top-[30px] left-[460px] w-[214px] h-[340px] rounded-[20px] overflow-hidden z-10">
                <img
                  src="/howwe.webp"
                  alt="How we deliver"
                  className="w-full h-full object-cover"
                />
              </div> */}

              {/* ✅ Pill Buttons - Infinite LEFT → RIGHT Marquee, BEHIND image */}
              <div className="absolute top-[160px] left-0 w-full overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}           // moves left to right
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[16px] w-max"
                >
                  {/* Duplicate TWICE for seamless infinite loop */}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[16px] pr-[16px] font-quadran  ">
                      {["Agile", "Scalable", "Integrated", "Compliant", "Automated", "Reliable "].map((text, j) => (
                        <div
                          key={j}
                          className="flex items-center border border-[#00AA72] rounded-full px-[28px] py-[14px] h-[56px] whitespace-nowrap"
                        >
                          <span
                            className="text-[#00AA72] text-[18px] font-semibold tracking-widest"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                          >
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Large Text - Infinite RIGHT → LEFT Marquee, BEHIND image */}
              <div className="absolute top-[240px] left-0 w-full overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}           // moves right to left
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[40px] w-max"
                >
                  {/* Duplicate TWICE for seamless infinite loop */}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[40px] pr-[40px] font-quadran  ">
                      {["Practical solutions. Measurable results. Lasting impact."].map((text, j) => (
                        <span
                          key={j}
                          className="text-[#00AA72] text-[28px] font-bold tracking-widest whitespace-nowrap"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Bottom Description - STATIC, no animation */}
              <p
                className="absolute top-[380px] left-0 right-0 mx-10 w-[542px] text-left text-[#141414] text-[16px] font-normal leading-[155%] m-0 z-0"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                We deliver agile, integrated platforms that automate compliance and scale reliably with your institution's growth.
              </p>

            </div>

          </div>

          {/* ── Spacer — xl only, pushes images to right ── */}
          <div className="hidden xl:block" />
          {/* Rotating Background SVG (Behind Right Cards Only) */}
          <div className="hidden xl:block absolute right-[150px] top-[300px] pointer-events-none z-0">
            <motion.img
              src="/Global-Landing-Page/Circle.svg"
              alt="circle pattern"
              className="w-[350px] h-[300px] object-contain opacity-80"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              style={{ transformOrigin: "50% 50%" }}
            />
          </div>

          {/* ── First Image ── */}
          <div className="relative z-10 w-full h-[260px] hidden md:flex sm:h-[380px] lg:h-[454px] xl:h-[454px] rounded-[30px] overflow-hidden">
            <img
              src="/Global-Landing-Page/card1.webp"
              alt="Woman working with laptop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ── Second Image ── */}
          <div className="relative z-10 w-full h-[260px] sm:h-[380px] lg:h-[454px] xl:h-[454px] rounded-[30px] overflow-hidden">
            <img
              src="/Global-Landing-Page/card2.webp"
              alt="Two men reviewing tablet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationCards;