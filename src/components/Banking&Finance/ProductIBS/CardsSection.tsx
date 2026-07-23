import { H4, P } from "../../../styles/Typography";
import { motion } from "framer-motion";

const features = [
  {
    title: " 24/7 Customer Account Access",
    description:
      "Customers view balances, transactions, and statements anytime from any device. ",
    icon: "/ProductIBS/icon3.svg",
     image: "/ProductIBS/b1.webp",
  },
  {
    title: " Reduced Branch Footfall",
    description:
      "Online transactions minimize teller visits and lower branch operational costs. ",
    icon: "/ProductIBS/icon4.svg",
     image: "/ProductIBS/b2.webp",
  },
  {
    title: "Real-Time Transaction Updates",
    description:
      "Instant confirmation for fund transfers and bill payments improves customer experience. ",
    icon: "/ProductIBS/icon5.svg",
     image: "/ProductIBS/b3.webp",
  },
  {
    title: " Secure Document Access ",
    description:
      "Secure statement download with authentication protects customer data and provides controlled access to account documents. ",
    icon: "/ProductIBS/icon6.svg",
     image: "/ProductIBS/b4.webp",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function CardsSection() {
  return (
    <section className="w-full bg-[#FAFAFA] dark:bg-black py-6 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {features.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-white dark:bg-slate-900 p-6 sm:p-7 md:p-8 rounded-xl shadow-lg
              w-full
              h-[360px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[440px]
              flex flex-col justify-between
              border border-gray-200
            "
          >
            <div>
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <H4 className="text-gray-900 dark:text-white mb-3">
                {item.title}
              </H4>

              {/* Description */}
              <P className="text-gray-700 dark:text-gray-300 leading-relaxed xl:max-w-[470px]">
                {item.description}
              </P>
            </div>

            {/* Bottom Placeholder (same as your original design) */}
            <div className="w-full h-[55%] rounded-lg mt-5 overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}