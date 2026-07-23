import { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
// import { H3, H4, P } from "../../../styles/Typography";
import { H3, H4, P } from "../../../styles/Typography";
// import {  useEffect} from 'react';
// import { gsap } from 'gsap';


// const GlobalSpotlight = ({ containerRef, enabled = true, spotlightRadius = 590 }: { containerRef: React.RefObject<HTMLDivElement | null>; enabled?: boolean; spotlightRadius?: number }) => {
//   ... (unchanged, omitted for brevity in this view)
// };

const HEADING_TEXT = "How CloudDIET Compares Better \n To Other Tools & Platforms";

// Character "float" animation
const floatContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
};

const floatCharVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "15%",
    scaleY: 1.08,
    scaleX: 0.97,
  },
  visible: {
    opacity: 1,
    y: "0%",
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 0.28,
      ease: [0.25, 1, 0.4, 1], // hard, near-linear stop — minimal cushioning
    },
  },
};

// Card entrance — same treatment as the Onboarding video cards
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scaleY: 1.05,
    scaleX: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.4, 1],
    },
  },
};

export default function Firm() {

  // const containerRef = useRef<HTMLDivElement>(null);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  //   checkMobile();
  //   window.addEventListener('resize', checkMobile);
  //   return () => window.removeEventListener('resize', checkMobile);
  // }, []);

  const headingChars = useMemo(() => HEADING_TEXT.split(""), []);

  const cloudDietFeatures = [
    {
      id: 1,
      title: "Reserved Instance ",
      desc: "Optimizes reserved instances across full Azure ecosystem with deep billing model analysis for maximum guaranteed savings every month. ",
    },
    {
      id: 2,
      title: "Kubernetes Costs ",
      desc: "Manages Kubernetes clusters safely with zero downtime risks and full compliance during all Azure cost optimization processes. ",
    },
    {
      id: 3,
      title: "Microsoft Fabric ",
      desc: "Supports Microsoft Fabric workloads completely for comprehensive Azure cost management across all modern data platforms reliably",
    },
  ];

  const withoutCloudDietFeatures = [
    {
      id: 1,
      title: "Reserved Instances ",
      desc: "Provides limited reserved instance optimization without complete understanding of Azure billing ecosystem and resource relationships. ",
    },
    {
      id: 2,
      title: "Kubernetes Costs ",
      desc: "Often creates Kubernetes downtime risks and compliance violations when attempting Azure cost optimization across clusters. ",
    },
    {
      id: 3,
      title: "Microsoft Fabric ",
      desc: "Lacks proper Microsoft Fabric support causing incomplete cost optimization across Azure's modern data and analytics platforms. ",
    },
  ];

  return (
    <>
      {/* <style> ... (unchanged, omitted) ... </style> */}

      {/* <GlobalSpotlight
        containerRef={containerRef}
        enabled={!isMobile}
        spotlightRadius={590}
      /> */}
      <section className="w-full py-8 xl:py-16  dark:bg-black px-[40px]   md:px-[60px] xl:px-[160px]" >
        <div className=" ">
          {/* Heading */}
          <div className="text-center ">
            <H3 className="max-w-sm mx-auto dark:text-white text-[#009565] overflow-hidden">
              <motion.span
                className="inline-block"
                variants={floatContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {headingChars.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={floatCharVariants}
                    style={{ display: "inline-block", transformOrigin: "50% 0%" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </H3>

            <P className="my-4 max-w-3xl mx-10 md:mx-auto">
              See why CloudDIET delivers better Azure savings and functionality reliably
            </P>
          </div>

          {/* Outer White Container */}
          <div className="bg-white dark:bg-slate-700 rounded-3xl md:mt-8 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="grid bg-[#F7FFEC] dark:bg-slate-400 rounded-4xl  grid-cols-1 lg:grid-cols-2 lg:gap-6"
            >

              {/* Other Firms */}
              <motion.div
                variants={cardVariants}
                className="rounded-4xl animated-card p-6 ml-4 text-left"
              >
                 <H3 className=" xl:pt-6">Other Platforms </H3>
                <ul className="mt-6 space-y-4">
                  {withoutCloudDietFeatures.map((item) => (
                    <li key={item.id} className="flex items-start gap-4">
                      <img
                        src="/Check.png"
                        alt="check"
                        className="mt-1 h-7 w-7 shrink-0"
                      />
                      <div>
                        <H4 className="my-1 ">{item.title}</H4>
                        <P className="mt-1 max-w-sm">{item.desc}</P>
                      </div>
                    </li>
                  ))}
                </ul>

              </motion.div>

              {/* With CloudDiet */}
              <motion.div
                variants={cardVariants}
                className="
  bg-white  rounded-tl-[3rem]  rounded-br-[3rem]  dark:bg-slate-700 p-6 sm:p-8 text-left
  border-[0.5rem]  dark:border-gray-800 border-[#009565]
  shadow-xl
  md:-ml-4
"
              
              >
                <H3 className="text-[#009565] xl:pt-10 xl:-mt-8"> With CloudDiet</H3>

                <ul className="mt-6 space-y-4">
                  {cloudDietFeatures.map((item) => (
                    <li key={item.id} className="flex items-start gap-4">
                      <img
                        src="/CheckCircle.svg"
                        alt="check"
                        className="mt-1 h-7 w-7 shrink-0"
                      />
                      <div>
                        <H4 className="my-1 text-[#009565]">{item.title}</H4>
                        <P className="mt-1 max-w-sm">{item.desc}</P>
                      </div>
                    </li>
                  ))}
                </ul>

              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}