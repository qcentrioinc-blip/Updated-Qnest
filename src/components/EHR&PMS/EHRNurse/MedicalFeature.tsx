import { motion } from "framer-motion";
import { H2, H3, P } from "../../../styles/Typography";

const MedicalFeature = () => {
  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="dark:bg-[#141414] bg-white">
    <section className="max-w-7xl mx-auto px-6 pb-8 md:pb-16 font-quadran   overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="relative aspect-[4/3] md:aspect-square lg:aspect-[1/1] overflow-hidden rounded-[20px]"
        >
          <img 
            src="/EHR-PMS/Nurse/img5.webp" 
            alt="Medical professional typing with stethoscope"
            className="w-full h-full object-cover shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.14 },
            },
          }}
          className="flex flex-col space-y-8"
        >
          
          {/* Heading & Intro */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: easeOut },
              },
            }}
            className="space-y-4"
          >
            <H2 className="text-[#00AA72] dark:text-white">
              Essential Nursing Tools 
            </H2>
            <P className="text-[#141414] leading-relaxed max-w-lg xl:mb-6">
             Our platform provides the integrated clinical features you need for efficient, accurate, and coordinated daily patient care. 
            </P>
          </motion.div>

          {/* Sub-Feature */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: easeOut },
              },
            }}
            className="flex items-start gap-4"
          >
           <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
  <img
    src="/EHR-PMS/Nurse/icon1.svg"
    alt="Feature icon"
    loading="lazy"
    className="w-8 h-8 md:w-10 md:h-10 object-contain"
  />
</div>

            
            <div className="space-y-2">
              <H3 className="text-gray-900 dark:text-amber-400">
                Smart Triage Module
              </H3>
              <P className="text-[#141414] leading-relaxed xl:mb-6">
                 Log patient vitals, chief complaints, and acuity levels upon check-in to prioritize care and inform the provider. 
              </P>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: easeOut },
              },
            }}
            className="bg-[#008080] rounded-2xl p-6 md:p-8"
          >
            <P className="text-white/80 leading-relaxed">
              This data flows directly into the patient's active chart, giving the physician immediate context for a faster, more informed visit. 
            </P>
          </motion.div>

        </motion.div>
      </div>
    </section>
    </section>
  );
};

export default MedicalFeature;
