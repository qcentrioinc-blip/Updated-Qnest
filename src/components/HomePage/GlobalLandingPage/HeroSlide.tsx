import { motion } from "framer-motion";

interface Slide {
  color: string;
  title: string;
  description: string;
  image: string;
}

interface HeroSlideProps {
  slide: Slide;
}

const HeroSlide = ({ slide }: HeroSlideProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between px-20">

      {/* Circle Animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: slide.color,
        }}
        initial={{
          clipPath: "circle(0% at 50% 100%)",
        }}
        animate={{
          clipPath: "circle(120% at 50% 100%)",
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      />

      {/* Text */}
      <div className="relative z-10 max-w-lg">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5"
        >
          {slide.description}
        </motion.p>
      </div>

      {/* Image */}
      <motion.img
        src={slide.image}
        alt=""
        className="relative hero-image z-10 w-[500px]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
};

export default HeroSlide;