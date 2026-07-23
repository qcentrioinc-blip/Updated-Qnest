import { motion } from "framer-motion";
import { H2, H4} from "../../../styles/Typography";

const Highlights = () => {
  const cards = [1, 2, 3];

  return (
    <section className="w-full bg-[#230053] text-white px-10 py-16 md:py-24">
      {/* Top Text Section */}
      <div className="max-w-8xl mx-10 text-left mb-12">
        <H2 className="font-bold mb-2">Sed ut perspiciatis</H2>
        <H2 className="text-[#F99526] mb-4">Unde Seduo ut perspiciatis</H2>
      </div>

      {/* Cards Section */}
      <div className="max-w-8xl mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white text-black rounded-md p-8 shadow-md hover:shadow-xl transition-all duration-300 h-[550px] flex flex-col"
          >
            <div className="w-15 h-15 bg-gray-300 rounded-full mb-5"></div>
            <div className="w-full h-76 bg-gray-200 rounded-md mb-5"></div>
            <H4 className="font-semibold">
              We onboard users from 126+ countries — whether you hold a passport
              or a residence permit we’ve got you covered.
            </H4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
