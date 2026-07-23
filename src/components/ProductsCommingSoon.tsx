import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductsComingSoon() {
  return (
    <section className="relative w-full min-h-screen bg-[#F4F8FF] flex items-center justify-center px-6 overflow-hidden">

      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-[45%] h-full bg-[#F4F8FF] hidden lg:block rounded-l-[120px]" />

      {/* Decorative blur circle */}
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-60" />

      <div className="max-w-4xl text-center relative z-10">

        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-[#00AA72]/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#00AA72]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[36px] lg:text-[48px]
                     font-quadran  EHR
                     leading-[120%] text-[#00AA72]"
        >
          Coming Soon
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-[14px] md:text-[16px] lg:text-[18px]
                     font-quicksand
                     leading-[140%]
                     max-w-2xl mx-auto text-[#141414]"
        >
          We’re working on something exciting. This product is currently under
          development and will be available soon.

          In the meantime, feel free to explore our existing solutions or
          return to the product marketplace.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/industries/banking-and-finance/marketplace"
            className="px-6 py-3 bg-[#00AA72] text-white rounded-lg font-quadran   hover:bg-blue-700 transition"
          >
            View All Banking Products
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-[#00AA72] text-[#00AA72] rounded-lg font-quadran   hover:bg-blue-50 transition"
          >
            Contact Our Team
          </Link>
        </motion.div>

      </div>
    </section>
  );
}