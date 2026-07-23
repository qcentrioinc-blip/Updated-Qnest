import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { H4} from "../../../styles/Typography";

const counters = [
  { value: 50, suffix: "+", label: "Duis aute iru dolor" },
  { value: 55, suffix: "X", label: "Duis aute iru dolor" },
  { value: 30, suffix: "%", label: "Duis aute iru dolor" },
];

// 🔹 Easing function for smoother, bouncy feel
const easeOutExpo = (t: number) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

const CounterSection = () => {
  const counterSectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const isCounterInView = useInView(counterSectionRef, { once: true, amount: 0.3 });

  const [counts, setCounts] = useState<number[]>(Array(counters.length).fill(0));
  const [imageConstrained, setImageConstrained] = useState(false);

  // 🔸 Shrink/expand image on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setImageConstrained(entries[0].isIntersecting),
      { threshold: 0.25 }
    );

    if (counterSectionRef.current) observer.observe(counterSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔸 Smooth, easing counter animation
  useEffect(() => {
    if (!isCounterInView) return;

    const startValues = [...counts];
    const duration = 2000; // slightly slower for visible easing
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      const newCounts = counters.map((c, i) =>
        Math.floor(startValues[i] + (c.value - startValues[i]) * eased)
      );
      setCounts(newCounts);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isCounterInView]);

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      {/* 🔹 Shrinking Image */}
      <motion.div
        ref={imageRef}
        className="w-full flex justify-center transition-all duration-700 ease-out"
        style={{
          maxWidth: imageConstrained ? "80rem" : "100%",
          margin: "0 auto",
          paddingLeft: imageConstrained ? "1.5rem" : "0",
          paddingRight: imageConstrained ? "1.5rem" : "0",
        }}
      >
        <div
          className="w-full overflow-hidden transition-all duration-700 ease-out"
          style={{
            borderRadius: imageConstrained ? "1rem" : "0",
          }}
        >
          <img
            src="/HighTech/Careers/bg_img2.png"
            alt="Team working"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>

      {/* 🔹 Counter Section */}
      <div
        ref={counterSectionRef}
        className="w-full py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 flex justify-center"
      >
        <div className="max-w-6xl w-full flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-0">
          {counters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isCounterInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center sm:text-left"
            >
              <div className="flex items-baseline justify-center sm:justify-start">
                <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold  text-[#666666] tabular-nums">
                  {counts[i]}
                </h1>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#666666] ml-1">
                  {c.suffix}
                </span>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={isCounterInView ? { width: 150 } : {}}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15 + 0.3,
                  ease: "easeOut",
                }}
                className="h-[2px] bg-gray-600 mt-4 mb-4 mx-auto sm:mx-0"
              />

              <H4 className="text-[#F99526] ">{c.label}</H4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
