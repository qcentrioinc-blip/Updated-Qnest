import { motion, easeOut } from "framer-motion";
import { H3, P } from "../../../styles/Typography";
import { CheckCircle } from "lucide-react";

export default function ImageGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      {/* ================= ROW 1 ================= */}
      <div className="flex flex-col lg:flex-row items-stretch gap-14 max-w-8xl mx-auto">

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full lg:basis-[55%]"
        >
          <img
            src="/Platform/Bg.png"
            alt="base"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[500px] object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            w-full lg:basis-[45%]
            flex flex-col
            justify-end lg:justify-between
            px-6 sm:px-8
            text-center lg:text-left
            gap-6 lg:gap-0
          "
        >
          {/* TOP TEXT */}
          <div className="flex flex-col gap-6  xl:max-w-md">
            <H3>Lorem ipsum dolor , consectetur adipis</H3>
            <P>
              Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
              irure dolor in reprehenderit in voluptate velit Duis aute irure
              dolor in reprehenderit in voluptate velit Duis aute irure
            </P>
          </div>

          {/* BOTTOM LIST */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-bold text-gray-800">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <li key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5" />
                  Duis aute irure
                </li>
              ))}
          </ul>
        </motion.div>
      </div>

      {/* ================= ROW 2 ================= */}
      <div className="flex flex-col-reverse lg:flex-row items-stretch gap-14 mt-24 max-w-8xl mx-auto">

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            w-full lg:basis-[45%]
            flex flex-col
            justify-end lg:justify-between
            px-6 sm:px-8
            text-center lg:text-left
            gap-6 lg:gap-0
          "
        >
          {/* TOP TEXT */}
          <div className="flex flex-col gap-6 xl:max-w-md">
            <H3>Lorem ipsum dolor , consectetur adipis</H3>
            <P>
              Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
              irure dolor in reprehenderit in voluptate velit Duis aute irure
              dolor in reprehenderit in voluptate velit Duis aute irure
            </P>
          </div>

          {/* BOTTOM LIST */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-bold text-gray-800">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <li key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5" />
                  Duis aute irure
                </li>
              ))}
          </ul>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full lg:basis-[55%]"
        >
          <img
            src="/Platform/Bg2.png"
            alt="base"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
