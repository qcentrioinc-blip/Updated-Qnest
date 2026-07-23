import { useState } from "react";
import { H2, H4, } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";
import { motion } from "framer-motion";

const FeatureGrid = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full  dark:bg-[#141414] bg-white ">
    <div className="px-[40px] md:px-[60px] xl:px-[160px]  py-10 font-quadran   text-[#1a1a1a]">
      
      {/* Main Container */}
      <div className="flex flex-col gap-6 lg:flex-row">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 flex-1">

          {/* Top Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              flex flex-col justify-center
              rounded-[20px] bg-[#f2f4f4]
              px-6 py-6 md:px-8 md:py-8
              min-h-[260px] md:min-h-[346px]
            "
          >
            <H2 className="mb-6 leading-tight text-[#00AA72]">
              Solve Core Revenue Cycle Challenges
            </H2>
            <p className="text-[#141414] text-[18px] font-quicksand leading-relaxed max-w-xl">
              Our platform directly targets the major inefficiencies that delay payments and increase administrative costs for insurance teams. 
            </p>
          </motion.div>

          {/* Bottom Cards */}
          <div className="flex flex-col gap-6 md:flex-row">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                flex flex-col gap-3
                rounded-[20px] bg-[#00AA72]
                px-6 py-6
                flex-1
                hover:-translate-y-1 transition-transform
              "
            >
              <span className="text-2xl font-bold">1</span>
              <H4>Reduced Denials</H4>
               <p className="font-quicksand text-[18px]">Automated claim scrubbing and accurate coding cut denial rates dramatically.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                flex flex-col gap-3
                rounded-[20px] bg-[#d7e4e4]
                px-6 py-6
                flex-1
                hover:-translate-y-1 transition-transform
              "
            >
              <span className="text-2xl font-bold">2</span>
              <H4>Faster Payments</H4>
              <p className="font-quicksand text-[18px]">Streamlined submission and real-time tracking accelerate reimbursement cycles. </p>
            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative flex items-end
            rounded-[20px]
            bg-cover bg-center
            p-4
            min-h-[360px] md:min-h-[450px] lg:min-h-[570px]
            flex-1
          "
          style={{
            backgroundImage: `url('/EHR-PMS/InsuranceCoordinator/Img4.webp')`,
          }}
        >
          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="
              flex w-full flex-col justify-between gap-6
              rounded-[20px]
              border border-white/30
              bg-white/60
              p-6 md:p-8
              backdrop-blur-md
              min-h-[200px] md:min-h-[246px]
            "
          >
            <p className="text-lg font-quicksand  text-[18px] font-bold leading-snug text-gray-900 md:text-xl">
              See how our integrated system transforms <br/> your claims workflow. 
            </p>

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
    Get Demo

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

          </motion.div>
        </motion.div>

      </div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
     </section>
  );
};

export default FeatureGrid;
