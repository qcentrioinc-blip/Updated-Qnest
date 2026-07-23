// src/styles/animations.ts
import type { Variants } from "framer-motion";

// Float character animation variants for headings
export const floatContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
};

export const floatCharVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "15%",
    scaleY: 1.08,
    scaleX: 0.97,
  },
  visible: {
    opacity: 1,
    y: "0%",
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 0.28,
      ease: [0.25, 1, 0.4, 1],
    },
  },
};

// Card/Image animation variants
export const cardVariants: Variants = {
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
      ease: [0.25, 1, 0.4, 1],
    },
  },
};

// Paragraph fade-in from below
export const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.4, 1],
    },
  },
};

// Container for staggering children
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};