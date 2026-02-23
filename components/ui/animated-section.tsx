'use client'


import React from "react";
import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { sectionAnimation, headingAnimation, staggerContainer } from "./animation-variants";

// Define the allowed HTML elements for the animated section
type AllowedElements = "section" | "div" | "article" | "main" | "aside" | "header" | "footer";

interface AnimatedSectionProps {
  as?: AllowedElements;
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
  // Instead of using dynamic motion[as], create element based on 'as' prop
  const MotionComponent = motion[as];
  
  return (
    <MotionComponent
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
    </MotionComponent>
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
