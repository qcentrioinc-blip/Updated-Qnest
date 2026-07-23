import { useState } from "react";
import { motion } from "framer-motion";
import { H2, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

const HeroSec = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, setMenuOpen] = useState(false);

  const easeOut = [0.4, 0, 0.2, 1] as const;

  return (
    <section className="bg-white dark:bg-[#141414] overflow-hidden">
      <div className="relative px-[40px] md:px-[60px] xl:px-[160px] pt-16 lg:pt-40">
    
        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative overflow-hidden"
        >
          <img
            src="/EHR-PMS/Receptionist/img.webp"
            alt="Professional workspace"
            className="
              w-full
              h-[420px]
              sm:h-[500px]
              md:h-[620px]
              lg:h-[700px]
              xl:h-[700px]
              object-cover
            "
            loading="lazy"
            decoding="async"
          />

          {/* Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="
              absolute
              top-0
              left-0
              w-full
              sm:w-[520px]
              md:w-[600px]
              lg:w-[700px]
              h-auto
              lg:min-h-[400px]
              bg-white
              dark:bg-teal-900
              rounded-br-[28px]
              p-6
              sm:p-8
              lg:p-10
              shadow-[0_4px_18px_rgba(0,0,0,0.05)]
              flex
              items-center
            "
          >
            {/* Centered content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="text-left max-w-2xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
              >
                <H2 className="text-[#00AA72] dark:text-white leading-[1.15] mb-6">
                  Simplify Front Desk,
                  Engage Patients
                </H2>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
              >
                <P className="text-[#141414] mb-8">
                  Manage patient flow, check-ins, and communication from one intuitive dashboard. Reduce wait times and streamline every front desk task. 
                </P>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
              >
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
    See How

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
          </motion.div>
        </motion.div>
      </div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};

export default HeroSec;
