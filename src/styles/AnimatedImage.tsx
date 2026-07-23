// src/styles/AnimatedImage.tsx
import { motion, type Variants } from "framer-motion";

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scaleY: 1.05,
    scaleX: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.4, 1] as const,
    },
  },
};

export const AnimatedImageContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={imageVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={className}
    style={{ transformOrigin: "50% 0%" }}
  >
    {children}
  </motion.div>
);