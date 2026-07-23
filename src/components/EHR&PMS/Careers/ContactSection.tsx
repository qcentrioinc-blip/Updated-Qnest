"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
// import { ContactUs } from "../../../styles/Button";
import ContactDrawer from "../Navbar/ContactDrawer";

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controlsThick = useAnimation();
  const controlsThin = useAnimation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (inView) {
      controlsThick.start({
        x: ["-100%", "100%"],
        scaleY: [1, 1.3, 1],
        opacity: [0, 1, 1],
        transition: {
          x: { duration: 3, repeat: Infinity, ease: "linear" },
          scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          opacity: { duration: 1, ease: "easeInOut" },
        },
      });
      controlsThin.start({
        x: ["-100%", "100%"],
        scaleY: [1, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          x: { duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 },
          scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.5 },
          opacity: { duration: 1, ease: "easeInOut", delay: 0.5 },
        },
      });
    }
  }, [inView, controlsThick, controlsThin]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[71vh] md:h-[30vh] xl:h-[50vh] bg-[#F1FBF5] overflow-hidden px-10 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 max-w-7xl mx-auto">

        {/* LEFT TEXT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-quadran   font-semibold leading-[120%] text-[28px] sm:text-[32px] md:text-[40px]"
          >
            <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Sed ut perspiciatis
            </span><br/>
            <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Unde Seduo ut perspiciatis
            </span>
          </motion.h2>
        </div>

        {/* RIGHT TEXT + BUTTON */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[14px] md:text-[16px] leading-[150%] text-gray-700 mb-4"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </motion.p>

          {/* <ContactUs
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDrawerOpen(true);
            }}
            className="w-fit transition-transform hover:scale-105 active:scale-95"
          >
            CONTACT US
          </ContactUs> */}
        </div>
      </div>

      {/* BACKGROUND SHAPE */}
      <motion.img
        src="/EHR-PMS/Careers/shape1.png"
        className="absolute bottom-[-200px] right-0 w-[300px] md:w-[400px] lg:w-[500px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      />

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};

export default ContactSection;
