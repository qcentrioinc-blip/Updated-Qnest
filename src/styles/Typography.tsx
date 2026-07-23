// src/styles/Typography.tsx
import React, { type ReactNode, type CSSProperties } from "react";
import { motion, type Variants } from "framer-motion";

// Float character animation variants for headings
const floatContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
};

const floatCharVariants: Variants = {
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
      ease: [0.25, 1, 0.4, 1] as const,
    },
  },
};

// Paragraph fade-in from below
const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.4, 1] as const,
    },
  },
};

// Recursive TextFloat component - safely splits strings while keeping JSX/<br/> intact
const TextFloat = ({ children }: { children: ReactNode }) => {
  const processNode = (node: ReactNode, keyPrefix = ""): ReactNode => {
    if (typeof node === "string" || typeof node === "number") {
      return String(node)
        .split("")
        .map((char, index) => (
          <motion.span
            key={`${keyPrefix}-${index}`}
            variants={floatCharVariants}
            className="inline-block"
            style={{ transformOrigin: "50% 0%" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ));
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => processNode(child, `${keyPrefix}-${i}`));
    }

    if (React.isValidElement(node)) {
      if (node.type === "br") {
        return <br key={keyPrefix} />;
      }

      const nodeProps = (node.props || {}) as Record<string, unknown>;
      const innerChildren = nodeProps.children as ReactNode;

      if (node.type === React.Fragment) {
        return processNode(innerChildren, keyPrefix);
      }

      return React.cloneElement(
        node,
        { ...nodeProps, key: keyPrefix },
        processNode(innerChildren, keyPrefix)
      );
    }

    return node;
  };

  return (
    <motion.span
      variants={floatContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="inline"
    >
      {processNode(children)}
    </motion.span>
  );
};

type TypographyProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

// Helper function for responsive text sizes
const getResponsiveSize = (mobile: string, tablet: string, desktop: string) => {
  return `text-[${mobile}] md:text-[${tablet}] lg:text-[${desktop}]`;
};

export const H1 = ({ children, className = "", style }: TypographyProps) => (
  <h1 
    className={`
      font-quadran 
      font-bold 
      leading-[120%]
      ${getResponsiveSize('32px', '46px', '44px')}
      tracking-[-0.7px] lg:tracking-[-1.5px]
      ${className}
    `} 
    style={style}
  >
    <TextFloat>{children}</TextFloat>
  </h1>
);

export const H2 = ({ children, className = "", style }: TypographyProps) => (
  <h2 
    className={`
      font-quadran 
      font-semibold 
      leading-[120%]
      ${getResponsiveSize('20px', '24px', '32px')}
      tracking-[-0.7px] lg:tracking-[-1px]
      ${className}
    `} 
    style={style}
  >
    <TextFloat>{children}</TextFloat>
  </h2>
);

export const H3 = ({ children, className = "", style }: TypographyProps) => (
  <h3 
    className={`
      font-quadran 
      font-semibold 
      leading-[120%]
      ${getResponsiveSize('18px', '18px', '24px')}
      tracking-[-0.7px] lg:tracking-[-1px]
      ${className}
    `} 
    style={style}
  >
    <TextFloat>{children}</TextFloat>
  </h3>
);

export const H4 = ({ children, className = "", style }: TypographyProps) => (
  <h4 
    className={`
      font-quadran 
      font-semibold 
      leading-[120%]
      ${getResponsiveSize('16px', '16px', '18px')}
      tracking-[-0.7px] lg:tracking-[-1px]
      ${className}
    `} 
    style={style}
  >
    <TextFloat>{children}</TextFloat>
  </h4>
);

export const P = ({ children, className = "", style }: TypographyProps) => (
  <motion.p
    variants={paragraphVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={`
      font-quadran 
      font-light
      leading-[120%] md:leading-[18px]
      ${getResponsiveSize('16px', '12px', '12px')}
      tracking-[-0.4px] md:tracking-[-0.3px]
      ${className}
    `}
    style={style}
  >
    {children}
  </motion.p>
);

export const SupportingText = ({ children, className = "", style }: TypographyProps) => (
  <p 
    className={`
      font-quadran 
      font-regular 
      leading-[120%]
      ${getResponsiveSize('12px', '10px', '10px')}
      ${className}
    `} 
    style={style}
  >
    {children}
  </p>
);

export const ButtonText = ({ children, className = "", style }: TypographyProps) => (
  <span 
    className={`
      font-quadran 
      font-bold 
      ${getResponsiveSize('14px', '12px', '12px')}
      leading-[120%]
      ${className}
    `} 
    style={style}
  >
    {children}
  </span>
);

const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  SupportingText,
  ButtonText,
};

export default Typography;
