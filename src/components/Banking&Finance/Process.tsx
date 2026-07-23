import React from 'react';
import { motion } from 'framer-motion';
import { H2, H3, P } from '../../styles/Typography';

type ProcessStepProps = {
    step: string;
    title: string;
    description: string;
    index: number;
};

// ── Animated pattern for the empty side ──────────────────────────────────────
const DotPattern: React.FC<{ index: number }> = ({ index }) => {
  const dots = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

      {/* Large step number watermark */}
      <motion.span
        className="absolute text-[100px] font-bold text-[#00AA72] select-none leading-none z-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 0.7 }}
        transition={{ duration: 0.7, delay: index * 0.12 }}
        viewport={{ once: true }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* Dot grid */}
      <div className="relative w-52 h-44 z-10">
        {dots.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gray-800"
            style={{
              left: `${(i % 5) * 23}%`,
              top:  `${Math.floor(i / 5) * 28}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale:   [0, 1.4, 1],
              opacity: [0, 0.7, 0.35],
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12 + i * 0.035,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      {/* Subtle concentric rings */}
      <motion.div
        className="absolute rounded-full z-20 border border-gray-900"
        style={{ width: 120, height: 120 }}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.12 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute rounded-full border border-gray-900"
        style={{ width: 180, height: 180 }}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: index * 0.12 + 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-center w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* LEFT side */}
      <div className="w-[calc(50%-48px)] flex justify-end relative min-h-[180px]">
        {isLeft ? (
          <div className="bg-white  rounded-2xl shadow-md p-6 w-full text-left">
            <H3 className="mt-2 font-semibold ">{title}</H3>
            <P className="mt-3 text-left">{description}</P>
          </div>
        ) : (
          <div className="relative w-full">
            <DotPattern index={index} />
          </div>
        )}
      </div>

      {/* Centre circle */}
      <div className="flex-shrink-0 w-24 flex items-center justify-center z-10">
        <div className="w-12 h-12 bg-[#00AA72] text-[24px] font-quadran   rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ring-4 ring-white">
          {/* {index + 1} */}
        </div>
      </div>

      {/* RIGHT side */}
      <div className="w-[calc(50%-48px)] flex justify-start relative min-h-[180px]">
        {!isLeft ? (
          <div className="bg-white  rounded-2xl shadow-md p-6 w-full text-justify">
            <H3 className="mt-2 font-semibold ">{title}</H3>
            <P className="mt-3 text-justify">{description}</P>
          </div>
        ) : (
          <div className="relative w-full">
            <DotPattern index={index} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Process = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "Requirements Discovery",
      description:
        "We assess your operations, workflows, and compliance needs. Our team identifies gaps and opportunities. We document your goals and define success metrics for implementation.",
    },
    {
      step: "STEP 2",
      title: "Solution Design",
      description:
        "We design tailored architecture including product parameters, workflows, and core system integrations. Our team maps data migration and ensures regulatory and business alignment.",
    },
    {
      step: "STEP 3",
      title: "Easy Configuration",
      description:
        "Our experts configure products, rules, user roles, and privileges. We set transaction parameters and exceptions. The system matches your workflows without requiring custom code changes.",
    },
    {
      step: "STEP 4",
      title: "Testing & Validation",
      description:
        "We test transaction processing, compliance checks, and reporting accuracy. Your team validates against real-world scenarios. All issues are addressed before go-live.",
    },
    {
      step: "STEP 5",
      title: "Deployment & Support",
      description:
        "We manage go-live with minimal disruption, provide training, and offer ongoing support. Our team monitors performance and assists with optimization and scaling.",
    },
  ];

  return (
    <>
      {/* ── DESKTOP: vertical alternating timeline ── */}
      <div className="hidden xl:block bg-[#EFEFEF] py-20 px-6" id="our-process" style={{ fontFamily: "Bricolage Grotesque" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <H2 className="text-[#00AA72]">Our Implementation Process</H2>
          </div>

          <div className="relative">
            {/* Vertical centre line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300" />

            <div className="flex flex-col gap-16">
              {steps.map((item, index) => (
                <ProcessStep
                  key={item.step}
                  step={item.step}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE: unchanged ── */}
      <div className="block xl:hidden bg-gray-100 py-8 xl:py-10 px-6">
        <div className="max-w-2xl mx-auto">
          <H2 className="text-[#00AA72] text-center mb-8">Our Implementation Process</H2>

          <div className="relative pl-16 space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[64px] top-1 w-14 h-14 bg-[#00AA72] rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-md">
                  {item.step}
                </div>
                <div className="flex flex-col lg:pl-2 items-start">
                  <H3 className="my-4 lg:my-2   font-semibold">{item.title}</H3>
                  <P className="">{item.description}</P>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;