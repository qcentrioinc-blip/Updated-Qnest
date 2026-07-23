import { H2, H3, P } from "../../../styles/Typography";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const FeatureHighlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const { title, features } = (() => {
    if (pathname.includes("insurance-coordinator")) {
      return {
        title: " Your Centralized Claims Hub",
        features: [
          {
            title: "Real-Time Dashboard Visibility",
            text:
              " Monitor key metrics like pending claims, denials, and completed appointments in one unified, at-a-glance dashboard. ",
          },
          {
            title: "Integrated Patient Profiles ",
            text:
              "Access all patient insurance details, eligibility, and coverage history directly within their unified health profile for verification. ",
          },
          {
            title: "Automated Workflow Tracking ",
            text:
              "Track the status of every prior authorization and claim submission from start to resolution without manual follow-up. ",
          },
        ],
      };
    }

    if (pathname.includes("nurse")) {
      return {
        title: " Nurse-Centric Workflow ",
        features: [
          {
            title: "Centralized Patient View ",
            text:
              " Access a patient's complete medical history, medications, and active orders in one consolidated profile for informed care. ",
          },
          {
            title: " Streamlined Clinical Documentation",
            text:
              "Document vitals, assessments, and interventions quickly using smart, form-based templates that auto-save to the patient's record. ",
          },
          {
            title: "Coordinated Task Management ",
            text:
              "View, assign, and track all clinical tasks and medication administrations from a unified team task list.",
          },
        ],
      };
    }

    if (pathname.includes("receptionist")) {
      return {
        title: " Eliminate Daily Frustrations ",
        features: [
          {
            title: "Lost Paperwork Chase ",
            text:
              "Stop searching for paper charts and forms. All patient documents and consents are stored digitally and securely. ",
          },
          {
            title: "Manual Schedule Updates ",
            text:
              " No more erasing and rewriting the appointment book. The digital calendar updates in real time for everyone. ",
          },
          {
            title: "Confusing Patient Status ",
            text:
              " End uncertainty about who is waiting or which room is free with live, color-coded status tracking. ",
          },
        ],
      };
    }

    // Default fallback
    return {
      title: "Eliminate Daily Frustrations",
      features: [
        {
          title: "Operational Inefficiencies",
          text:
            "Streamline workflows and eliminate daily operational bottlenecks.",
        },
        {
          title: "Manual Processes",
          text:
            "Replace paper-based processes with automated digital workflows.",
        },
        {
          title: "Lack of Visibility",
          text:
            "Gain real-time insight across your practice operations.",
        },
      ],
    };
  })();

  return (
    <section className="relative  dark:bg-[#141414] bg-white">
    <section className="relative px-[40px] md:px-[60px] xl:px-[160px] py-6 dark:bg-[#141414] bg-white">
      {/* Heading */}
      <div className="text-center mb-2">
        <H2 className="text-[#00AA72] dark:text-[#00AA72]  ">{title}</H2>
      </div>

      {/* Fade Gradients (Tablet only) */}
      <div className="pointer-events-none hidden md:block lg:hidden">
        <div className="absolute left-0 top-32 h-[70%] w-10 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-32 h-[70%] w-10 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Features */}
      <div
        ref={scrollRef}
        className="
          grid grid-cols-1 gap-y-14
          md:flex md:gap-10 md:overflow-x-auto md:overflow-y-hidden
          md:snap-x md:snap-mandatory
          md:pb-4 md:scrollbar-hide
          lg:grid lg:grid-cols-3 lg:gap-x-16
          lg:overflow-visible
        "
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-start md:min-w-[320px] md:snap-start lg:min-w-0"
          >
            {/* Plus Icon */}
            <div className="mb-6">
              <span className="text-[#ff7a00] text-6xl font-light leading-none">
                +
              </span>
            </div>

            <H3 className="text-[#141414] dark:text-white mb-4">{item.title}</H3>
            <P className="text-[#141414] max-w-xs leading-relaxed">
              {item.text}
            </P>
          </motion.div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
    </section>
  );
};

export default FeatureHighlights;
