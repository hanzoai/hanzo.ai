
import React from "react";
import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { sectionAnimation, headingAnimation, staggerContainer } from "./animation-variants";

interface AnimatedSectionProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  motionProps?: MotionProps;
  animationVariant?: "default" | "fadeIn" | "fadeInBlur" | "popIn";
  delay?: number;
  viewportAmount?: number; // How much of section needs to be in view
  once?: boolean; // Only animate once?
}

const AnimatedSection = ({
  as = "section",
  children,
  className,
  motionProps,
  animationVariant = "default",
  delay = 0,
  viewportAmount = 0.2,
  once = true,
  ...props
}: AnimatedSectionProps) => {
  // Use the correct type for the dynamic component
  const Component = motion[as as keyof typeof motion];
  
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={sectionAnimation}
      transition={{ delay }}
      className={cn("relative", className)}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedHeading = ({
  children,
  className,
}: AnimatedTextProps) => (
  <motion.div
    variants={headingAnimation}
    className={className}
  >
    {children}
  </motion.div>
);

interface AnimatedStaggerProps {
  children: React.ReactNode;
  className?: string;
  delayFactor?: number;
}

export const AnimatedStaggerContainer = ({
  children,
  className,
  delayFactor = 0.05,
}: AnimatedStaggerProps) => (
  <motion.div
    variants={staggerContainer(delayFactor)}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
