import { H2, H3, P } from "../../../styles/Typography";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

/* ---------- Animation Tokens ---------- */
const easeOut = [0.4, 0, 0.2, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/* ---------- Component ---------- */
const InformationGrid = () => {
  const { pathname } = useLocation();

  const { title, description, features, image } = (() => {
    /* ---------- insurance-coordinator ---------- */
    if (pathname.includes("insurance-coordinator")) {
      return {
        title: " Built for Coordinators",
        description:
          " Our system is designed around the unique challenges and workflows of insurance coordination, not just billing.",

          image: "/EHR-PMS/InsuranceCoordinator/Img5.webp", 
        features: [
          {
            title: " Centralized Payer Portal ",
            text:
              "Manage all insurance communications, documents, and requirements from one integrated dashboard, not scattered systems. ",
          },
          {
            title: " Real-Time Status Tracking ",
            text:
              "See live updates on every claim and authorization, eliminating manual calls and email follow-ups for status. ",
          },
          {
            title: "Proactive Denial Alerts ",
            text:
              " Get instant notifications on potential claim errors before submission to fix issues and prevent denials. ",
          },
          {
            title: " Integrated Clinical Data ",
            text:
              "Access supporting medical notes and documentation directly from the patient's chart to speed up appeals. ",
          },
          {
            title: "Automated Workflow Rules ",
            text:
              "Set custom rules to auto-route tasks, send reminders, and ensure no authorization or claim is missed. ",
          },
        ],
      };
    }

    /* ---------- nurse ---------- */
    if (pathname.includes("nurse")) {
      return {
        title: "Supporting Your Expertise ",
        description:
          " Designed to reduce documentation burden and provide the right information at the right time, empowering your clinical judgment. ",
         image: "/EHR-PMS/Nurse/Img7.webp",
          features: [
          {
            title: "Reduces Documentation Time ",
            text:
              "Smart forms and templates cut charting work in half, giving you more time for direct patient care. ",
          },
          {
            title: "Enhances Care Coordination ",
            text:
              "See real-time provider orders and updates, ensuring smooth handoffs and consistent team communication for every patient. ",
          },
          {
            title: " Improves Medication Safety ",
            text:
              "Integrated e-MAR with alerts for allergies and interactions helps prevent errors and supports safe administration practices. ",
          },
          {
            title: "Streamlines Patient Handoff ",
            text:
              "Access a complete, chronological patient timeline to get up to speed quickly during shift changes or consults. ",
          },
          {
            title: "Organizes Clinical Tasks ",
            text:
              " Manage all your assessments, vitals, and follow-ups from one prioritized list, so nothing important gets missed. ",
          },
        ],
      };
    }

    /* ---------- receptionist ---------- */
    if (pathname.includes("receptionist")) {
      return {
        title: " Designed for You ",
        description:
          "Built around the real-world needs of the front desk to eliminate daily frustrations and boost efficiency. ",

           image: "/EHR-PMS/InsuranceCoordinator/Img6.webp",
        features: [
          {
            title: "Unified Communication Hub ",
            text:
              "Handle calls, messages, and staff alerts from one screen instead of multiple disconnected systems. ",
          },
          {
            title: "Real-Time Room Status ",
            text:
              " See which rooms are occupied or available instantly to assign patients and reduce wait times. ",
          },
          {
            title: "Automated Patient Reminders ",
            text:
              " The system sends confirmations and reminders automatically, reducing no-shows and manual follow-up calls. ",
          },
          {
            title: "One-Click Profile Access ",
            text:
              "Open any patient’s full record, schedule, and documents with a single click from the dashboard. ",
          },
          {
            title: "Integrated Task Lists ",
            text:
              " View and manage all pending front-desk tasks and follow-ups in one organized, shared list. ",
          },
        ],
      };
    }

    /* ---------- Fallback ---------- */
    return {
      title: "Designed for You",
      description:
        "Built to eliminate operational inefficiencies and improve day-to-day workflows.",

         image: "/EHR-PMS/InsuranceCoordinator/Img5.webp",
      features: [
        {
          title: "Centralized Operations",
          text:
            "Bring disconnected workflows into one unified system.",
        },
        {
          title: "Real-Time Visibility",
          text:
            "Track activity, status, and progress across teams.",
        },
        {
          title: "Automation First",
          text:
            "Reduce manual effort with intelligent automation.",
        },
        {
          title: "Improved Collaboration",
          text:
            "Keep teams aligned with shared tools and data.",
        },
        {
          title: "Scalable Workflows",
          text:
            "Grow without adding operational complexity.",
        },
      ],
    };
  })();

  return (
    <section className="relative w-full  dark:bg-[#141414] bg-white ">
    <section className="px-[40px] md:px-[60px] xl:px-[160px]  py-16    overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="mb-16 border-b border-gray-200 pb-10"
      >
        <H2 className="text-[#00AA72] mb-6 ">{title}</H2>
        <P className="max-w-xl text-[#141414] leading-relaxed">
          {description}
        </P>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="
              relative transition-transform
              after:content-['']
              after:absolute
              after:top-0
              after:right-[-2rem]
              after:w-[0.5px]
              after:h-full
              after:bg-gray-300
              md:[&:nth-child(2n)]:after:hidden
              lg:[&:nth-child(2n)]:after:block
              lg:[&:nth-child(3n)]:after:hidden
            "
          >
            <motion.span
              variants={lineVariants}
              className="absolute right-[-2rem] top-0 h-full w-[0.5px] bg-gray-300 origin-top"
            />

            <H3 className="text-[#141414] mb-4 dark:text-[#00AA72]  ">{feature.title}</H3>
            <P className="text-[#141414] leading-relaxed">{feature.text}</P>
          </motion.div>
        ))}

        {/* Image Placeholder */}
        <motion.div variants={itemVariants} className="flex items-center justify-center">
  <motion.img
    src={image}  // replace with your imported image
    alt={title}
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: easeOut }}
    className="w-full h-48 md:h-50 rounded-xl object-cover shadow-xl"
  />
</motion.div>
      </motion.div>
    </section>
    </section>
  );
};

export default InformationGrid;
