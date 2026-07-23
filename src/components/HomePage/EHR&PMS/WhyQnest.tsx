import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { H1, H2, H3, H4, P } from "../../../styles/Typography";

export default function WhyQnest() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });

  const spring = { stiffness: 120, damping: 30 };

  const cardsY = useSpring(useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"]), spring);
  const sideOffset = useSpring(useTransform(scrollYProgress, [0, 0.8], [120, 0]), spring);
  const titleOpacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), spring);

  const cards = [
    { num: "40%", title: "Faster Documentation", desc: "Streamlined clinical workflows and smart templates reduce charting time, allowing physicians to focus more on patient care." },
    { num: "99%", title: "Claim Accuracy", desc: "Integrated billing and automated coding slash claim denials, ensuring faster reimbursements and improved revenue cycle health." },
    { num: "50%", title: "Fewer No-Shows", desc: "Patient self-scheduling, reminders, and telehealth options dramatically reduce missed appointments and enhance patient engagement." },
  ];
  return (
    <>
      {/* DESKTOP */}
      <div ref={ref} className="hidden dark:bg-[#042F2E]  lg:block relative h-[200vh]">
        <div className="sticky w-full top-0 h-screen overflow-hidden bg-transparent">
          {/* DECORATIVE STARS – DESKTOP ONLY */}
<div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
  {/* Top center star */}
<img
  src="/EHRIcons/StarEHR.svg"
  className="absolute top-10 left-1/2 -translate-x-1/2 w-8 scale-110"
  alt=""
/>


  {/* Left floating star */}
  <img
    src="/EHRIcons/StarEHR.svg"
className="absolute top-40 left-20 w-7 scale-110"
    alt=""
  />

  {/* Right floating star */}
  <img
    src="/EHRIcons/StarEHR.svg"
 className="absolute top-48 right-24 w-8 scale-110"
    alt=""
  />

  {/* Bottom center star */}
  <img
    src="/EHRIcons/StarEHR.svg"
    className="absolute bottom-20 left-1/2 -translate-x-1/2 w-7 scale-110"
    alt=""
  />
</div>

          {/* TITLE */}
          <motion.div style={{ opacity: titleOpacity }} className="absolute top-24 w-full z-10     text-center ">
            <H2 className=" text-[#00AA72] dark:text-[#00AA72]   mb-4">
              One Unified Platform
            </H2>
            <P className=" mx-auto max-w-3xl dark:text-white text-black">
              Unified Clinicapp seamlessly integrates EHR and practice management into one intuitive, HIPAA-compliant, cloud-based solution for modern healthcare. 
            </P>  
          </motion.div>
          {/* CARDS */}
          <motion.div style={{ y: cardsY }} className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[60px] xl:px-[160px]">
            <div className="grid grid-cols-12 gap-8 max-w-full mx-auto w-full  ">
              {cards.map((c, i) => (
                <motion.div key={i} style={{ marginTop: i !== 1 ? sideOffset : 0 }} className="col-span-12 lg:col-span-4">
                  <div className="bg-transparent border-5 border-[#00AA72] dark:border-amber-400 rounded-br-[6rem] rounded-tl-[6rem] h-[550px]   py-10 px-6   flex flex-col justify-between">
                    <div>
                      <H2 className="text-[#00AA72] dark:text-white">{c.num}</H2>
                      <H3 className=" text-[#00AA72] dark:text-white">{c.title}</H3>
                    </div>
                    <H4 className="text-[#2A2A2A] dark:text-white">{c.desc}</H4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden py-16 px-4 space-y-8">
        <H2 className="text-center  text-[#00AA72]">
          Why Qnest
        </H2>
        {cards.map((c, i) => (
          <motion.div
  key={i}
  className="bg-white border-5 border-[#00AA72] rounded-br-[3rem] rounded-tl-[3rem] p-6"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: i * 0.2 }}  
  viewport={{ once: true }}
>

            <H1 className=" text-[#00AA72]">{c.num}</H1>
            <H3 className="text-[#00AA72]">{c.title}</H3>
            <H4 className="mt-4 text-[#2A2A2A]">{c.desc}</H4>
          </motion.div>
        ))}
      </div>
    </>
  );
}
