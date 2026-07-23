import { useRef } from "react";
import { motion } from "framer-motion";
const AnimatedStatementWithImageTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
 
  const text =
    "Qnest Global turns business goals into measurable results with clear strategy, reliable technology, and ongoing support";
 
  const words = text.split(" ");
 
  // const images = useMemo(
  //   () => [
  //     "../AIOptimization/1.webp",
  //     "../AIOptimization/2.webp",
  //     "../AIOptimization/3.webp",
  //     "../AIOptimization/4.webp",
  //     "../AIOptimization/5.webp",
  //     "../AIOptimization/6.webp"
  //   ],
  //   []
  // );
 
  // useEffect(() => {
  //   if (!containerRef.current) return;
  //   new ImageTrail(containerRef.current);
  // }, []);
 
  return (
    <div
      ref={containerRef}
      className="relative w-full h-[30vh] lg:h-[50vh] xl:h-[70vh] overflow-hidden flex items-center justify-center"
    >
      {/* TEXT */}
      <div className="relative z-10 text-center max-w-8xl mx-10">
        <motion.h2
          className="text-[24px] md:text-[32px] lg:text-[64px] font-semibold text-[#2A2A2A] leading-relaxed font-quadran  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: i * 0.04
                  }
                }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
 
      {/* IMAGE TRAIL */}
      {/* {images.map((src, i) => (
        <div
          key={i}
          className="trail-img absolute top-0 left-0 w-[190px] aspect-square rounded-xl opacity-0 overflow-hidden pointer-events-none"
        >
          <div
            className="w-[calc(100%+20px)] h-[calc(100%+20px)] bg-cover bg-center absolute -top-[10px] -left-[10px]"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))} */}
    </div>
  );
};
 
export default AnimatedStatementWithImageTrail;