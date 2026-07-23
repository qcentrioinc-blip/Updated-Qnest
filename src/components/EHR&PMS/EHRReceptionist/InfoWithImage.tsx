import { motion } from "framer-motion";
import { H2, H4, P } from "../../../styles/Typography";

const InfoWithImage = () => {
  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="bg-[#f4fbfa]  py-4 overflow-hidden">
      <div className="px-[40px] md:px-[60px] xl:px-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col h-full">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mb-8"
            >
              <H2 className="text-[#00AA72] mb-4">
                Essential Front-Desk Tools
              </H2>

              <P className="text-[#141414] max-w-lg">
                Access the integrated tools you need daily to manage patient
                interactions and support clinical staff efficiently.
              </P>
            </motion.div>

            {/* Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex flex-col gap-6 flex-1"
            >
              {/* Card 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: easeOut,
                    },
                  },
                }}
                className="bg-white rounded-3xl shadow-lg p-8 flex justify-between items-start min-h-[180px]"
              >
                <div className="pr-6">
                  <H4 className="text-gray-900 mb-4">
                    Self Check-In Kiosk
                  </H4>

                  <P className="text-[#141414] text-sm max-w-sm">
                    Enable patients to check themselves in via a tablet or
                    kiosk, reducing front desk queues and manual work.
                  </P>
                </div>

                <span className="w-12 h-12 rounded-full bg-[#00AA72] flex items-center justify-center text-white font-semibold shrink-0">
                  01
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: easeOut,
                    },
                  },
                }}
                className="bg-white rounded-3xl shadow-lg p-8 flex justify-between items-start min-h-[180px]"
              >
                <div className="pr-6">
                  <H4 className="text-gray-900 mb-4">
                    Digital Consent Capture
                  </H4>

                  <P className="text-[#141414] text-sm max-w-sm">
                    Collect patient signatures and forms electronically with
                    timestamps, ensuring compliance and eliminating lost
                    paperwork.
                  </P>
                </div>

                <span className="w-12 h-12 rounded-full bg-[#00AA72] flex items-center justify-center text-white font-semibold shrink-0">
                  02
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="h-full"
          >
            <div className="h-full rounded-br-[5rem] overflow-hidden">
              <img
                src="/EHR-PMS/Receptionist/img1.webp"
                alt="Reception"
                className="w-full h-full object-cover min-h-[560px] lg:min-h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoWithImage;