import React from "react";
import { H3, H4, P } from "../../../styles/Typography";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Dashboard & Accounts",
    description:
      "Dashboard with visual insights, transaction history, statements, and real-time balances across all accounts.",
    icon: "/ProductIBS/icon1.svg"
  },
  {
    title: "Payments & Fund Transfers",
    description:
      "Send money, pay bills, and transfer funds locally or globally with secure, real-time processing.",
    icon: "/ProductIBS/icon2.svg"
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};



const FeatureGridSection: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between gap-12">

        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full xl:w-1/2 flex flex-col justify-start"
        >
          <H3 className="text-[#00AA72] leading-snug mb-6">
            Complete Internet Banking Platform for Retail and Corporate Customers 
          </H3>

          <P>
            IBS provides secure online banking with real-time account access, fund transfers, bill payments, and comprehensive account management features integrated with core banking systems. Fully compliant with FFIEC guidelines, GLBA privacy rules, and Regulation E (Electronic Fund Transfer Act) requirements for consumer accounts.
          </P>
        </motion.div>

        {/* Right: Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="bg-[#F3F3F3] dark:bg-slate-900 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col p-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-lg md:text-xl">
  <img 
    src={card.icon} 
    alt={card.title} 
    className="w-10 h-10 object-contain" 
  />
</div>

              <H4 className="mb-2 dark:text-white">{card.title}</H4>

              <P className="leading-relaxed">{card.description}</P>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGridSection;