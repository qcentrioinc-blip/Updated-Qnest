import { H4 ,P } from "../../../styles/Typography";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface TestimonialItem {
  title: string;
  text: string;
}

const testimonials: TestimonialItem[] = [
  {
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-white  text-black py-20 px-6 md:px-10">
      {/* <H2 className="mb-10 mx-4 lg:mx-10 md:mx-0 lg:mb-20">Sed ut perspiciatis</H2> */}

      <div className="grid md:px-0 lg:px-10  sm:px-4    md:gap-x-10 lg:gap-24 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <AnimatedCard key={index} item={item} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

interface AnimatedCardProps {
  item: TestimonialItem;
  delay: number;
}

const AnimatedCard = ({ item, delay }: AnimatedCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y:70 }}
      animate={controls}
      className="text-center md:text-left"
    >
      <div className="w-12 h-12 bg-gray-300 rounded-full  mx-auto md:mx-0 mb-6"></div>
      <H4 className="mb-4 ">{item.title}</H4>
      <P className="text-gray-600   leading-tight text-justify">{item.text}</P>
    </motion.div>
  );
};

export default Testimonial;
