"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { H3, P } from "../../styles/Typography";
export default function AuditAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // ✅ IMAGE ANIMATION (finishes early)
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["100%", "65%"]
  );
  // ✅ TEXT ANIMATION (STRICTLY after image + delay)
  const rawOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5],   // ⬅️ delayed more
    [0, 1]
  );
  // ✅ Clamp to avoid early visibility
  const textOpacity = useTransform(rawOpacity, (v) =>
    v < 0.01 ? 0 : v
  );
  const textY = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [140, 0]
  );
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white dark:bg-black xl:h-[280vh]"
    >
      {/* ✅ Sticky with navbar offset */}
      <div className="xl:sticky xl:top-[70px] xl:h-[calc(100vh-70px)] xl:overflow-hidden">

        <div className="relative w-full xl:h-full">

          {/* DESKTOP */}
          <div className="hidden xl:flex items-center w-full h-full">

            {/* IMAGE */}
            <motion.img
              src="/AuditSectionImage.webp"
              alt="Audit"
              className="object-cover h-[400px] md:h-[500px] lg:h-[700px]"
              style={{ width: imageWidth, maxWidth: "100%" }}
            />
            {/* TEXT */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute bottom-16 right-10 w-[30%] pointer-events-none"
            >
              <H3 className="text-[#00AA72] font-bold mb-3">
                Domain experts in managing banking operations and compliance
              </H3>

              <P className="text-[#141414] max-w-lg lg:mb-10 xl:mb-6">
                Our team includes practitioners from global and regional banks with direct experience in AML, CDD, and financial crime risk management. They have led functions at leading MNC banks and dealt with regulators worldwide.
              </P>

              <P className="text-[#141414] max-w-lg lg:mb-10">
                This firsthand domain expertise ensures our solutions address real operational challenges faced by financial institutions daily.Unlike typical technology vendors, we understand banking from the inside out.
              </P>

              <P className="text-[#141414] max-w-lg lg:mb-10 xl:mb-0">
                This deep industry knowledge informs every product we build. When you work with Qnest, you gain access to decades of collective banking experience dedicated to solving your most pressing operational and regulatory challenges.
              </P>
            </motion.div>
          </div>
          {/* MOBILE */}
          <div className="flex flex-col justify-start xl:hidden">
            <div className="w-full mx-auto">
              <img
                src="/AuditSectionImage.webp"
                alt="Audit"
                className="h-auto w-full lg:h-[500px]"
              />
            </div>

            <div className="mx-auto mt-8 w-full max-w-full px-6 pb-6 text-left">
              <H3 className="text-[#00AA72] font-bold mb-3">
                Domain experts in managing banking operations and compliance
              </H3>

              <P className="text-[#141414] max-w-full lg:mb-10 mb-4 xl:mb-6">
                This firsthand domain expertise ensures our solutions address real operational challenges faced by financial institutions daily.Unlike typical technology vendors, we understand banking from the inside out.
              </P>

              <P className="text-[#141414] max-w-full lg:mb-10 mb-4 xl:mb-6">
                Our practitioners have managed complex AML operations, designed compliance workflows, and implemented risk frameworks across multiple jurisdictions.
              </P>

              <P className="text-[#141414] max-w-full lg:mb-10 mb-4 xl:mb-0">
                This deep industry knowledge informs every product we build. When you work with Qnest, you gain access to decades of collective banking experience dedicated to solving your most pressing operational and regulatory challenges.
              </P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
