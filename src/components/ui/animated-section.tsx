
import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { sectionAnimation, headingAnimation, staggerContainer } from "./animation-variants";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
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
  const Component = motion[as as keyof typeof motion] || motion.section;
  
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

export const AnimatedHeading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <motion.div
    variants={headingAnimation}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedStaggerContainer = ({
  children,
  className,
  delayFactor = 0.05,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { delayFactor?: number }) => (
  <motion.div
    variants={staggerContainer(delayFactor)}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
