import { motion } from "framer-motion";
import { H2, P } from "../../../styles/Typography";

const HeroSec = () => {
  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="dark:bg-[#141414]">
    <section className="w-full min-h-screen px-[40px] md:px-[60px] xl:px-[160px] pt-20 lg:pt-40 font-quadran   flex flex-col overflow-hidden">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8"
      >
        <H2 className="text-[#2A2A2A] dark:text-[#00AA72]   leading-tight max-w-xl">
           Clinical Efficiency at Your Fingertips
        </H2>
        <P className="max-w-md text-[#141414] leading-relaxed md:pt-2 xl:pt-8">
          Access unified patient records, document care, and coordinate tasks seamlessly from any device to support better outcomes. 
        </P>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 pb-8"
      >
        
        {/* 1. Large Portrait Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-3 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="/EHR-PMS/Nurse/img1.webp" 
            alt="Medical professional"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2. Stat Card (5x) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="bg-[#f2f2f2] dark:bg-black rounded-3xl p-6 flex flex-col justify-center lg:row-span-1"
        >
          <span className="text-4xl dark:text-[#00AA72]   lg:text-5xl font-medium font-quadran   text-black mb-1">
            5x
          </span>
          <P className="text-[#141414] "> Faster Charting</P>
        </motion.div>

        {/* 3. Tall Abstract Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-3 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="/EHR-PMS/Nurse/img3.webp" 
            alt="Abstract waves"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 4. Hands Holding Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-2 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="/EHR-PMS/Nurse/img4.webp" 
            alt="Supportive hands"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 5. Typing/Stethoscope Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="lg:row-span-2 overflow-hidden rounded-3xl bg-gray-100"
        >
          <img 
            src="/EHR-PMS/Nurse/img2.webp" 
            alt="Medical workspace"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 6. Stat Card (30+) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: easeOut },
            },
          }}
          className="bg-[#f2f2f2] dark:bg-teal-900 rounded-3xl p-6 flex flex-col justify-center lg:row-span-1"
        >
          <span className="text-4xl lg:text-5xl font-quadran   font-medium text-black mb-1">
            30+
          </span>
          <P className="text-[#141414] text-xs lg:text-sm">
            Integrated Clinical Tools
          </P>
        </motion.div>

      </motion.div>
    </section>
    </section>
  );
};

export default HeroSec;
