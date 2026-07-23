import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { H1, H3, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

const HeroSec = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, setMenuOpen] = useState(false);

  /* ---------- Ultra-Smooth Animations ---------- */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly faster stagger for better flow
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 5, // Reduced from 24 to prevent the "jumpy" feeling
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Increased duration for a calmer entrance
        ease: [0.22, 1, 0.36, 1], // Custom "Quint" ease-out curve
      },
    },
  };

  const cardBaseMobile =
    "w-full h-[160px] md:h-[180px]  rounded-[33.83px] p-8 flex flex-col justify-center transition-all relative overflow-hidden";

  return (
    <div className="    rounded-[20px] dark:max-w-full ">
      <div className="bg-white  py-16 lg:pt-30 font-quadran  px-[40px] md:px-[60px] xl:px-[160px]  dark:bg-[#141414] text-[#00AA72] overflow-x-hidden rounded-[20px]">

        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <H1 className="mb-8  dark:text-white">
            Streamline Claims, <br />  Maximize Revenue
          </H1>

          <button
            onClick={() => {
              setMenuOpen(false);
              setDrawerOpen(true);
            }}
            className="
    group
    inline-flex items-center justify-center
    px-6 h-12
    rounded-lg
    font-quadran   font-bold text-sm tracking-widest
    bg-white text-[#00AA72]
    border-2 border-[#00AA72]
    transition-all duration-300 ease-in-out
    hover:border-b-[4px]
    hover:-translate-y-[2px]
    shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
    cursor-pointer
    mb-4
  "
          >
            <span className="flex items-center gap-2">
              Explore

              <span className="relative flex items-center justify-center w-[20px] h-[20px]">

                {/* Default Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>

                {/* Hover Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>

              </span>
            </span>
          </button>

        </motion.header>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Triggers slightly before it hits the view
          className="mx-auto max-w-[1400px] grid grid-cols-1 gap-6 lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-5 lg:-mt-20"
        >
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            className={`${cardBaseMobile} 
    bg-[#e0fcf4] 
    lg:w-[277.4px] 
    lg:h-[420.6px] 
    lg:justify-end
    relative 
    overflow-hidden
  `}
            style={{
              backgroundImage: "url('/EHR-PMS/InsuranceCoordinator/img1.webp')", // add your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mb-4 lg:mb-12 text-5xl text-[#00AA72]">⟶</div>
            <p className="text-base leading-relaxed    text-[14px] md:text-[16px]   lg:text-[16px] xl:text-[18px]
        font-quicksand
      
        text-[#141414]
         font-medium">
              Submit clean claims, track every status, and resolve denials faster. Start Today.
            </p>
          </motion.div>


          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            className={`${cardBaseMobile} bg-[#f0f0f0] lg:w-[171.4px] lg:h-[284.1px] lg:justify-end`}
          >
            <H3 className="mb-2 text-black text-3xl font-bold">99%</H3 >
            <p className="text-base leading-relaxed    text-[14px] md:text-[16px]   lg:text-[16px] xl:text-[18px]
        font-quicksand
      
        text-[#141414]
         font-medium">
              Claim Submission Accuracy Rate
            </p>
          </motion.div>

          {/* Image 1 - Hidden on iPad Pro/Mobile */}
          <motion.img
            variants={itemVariants}
            src="/EHR-PMS/InsuranceCoordinator/img2.webp"
            alt="Team"
            className="hidden lg:block rounded-[33.83px] object-cover lg:w-[266.1px] lg:h-[284.1px]"
          />

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            className={`${cardBaseMobile} bg-[#00796b] text-white lg:w-[171.4px] lg:h-[284.1px] lg:justify-end`}
          >
            <H3 className="mb-2 text-white text-3xl font-bold">60%</H3 >
            <P className="text-white text-sm">
              Faster Denial Resolution
            </P>
          </motion.div>

          {/* Image 2 - Hidden on iPad Pro/Mobile */}
          <motion.img
            variants={itemVariants}
            src="/EHR-PMS/InsuranceCoordinator/img3.webp"
            alt="Office"
            className="hidden lg:block rounded-[33.83px] object-cover lg:w-[266.1px] lg:h-[389.6px]"
          />
        </motion.div>

        <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </div>
    </div>
  );
};

export default HeroSec;