
import { Variants } from "framer-motion";

// Animation timing presets (in seconds)
export const timing = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8
};

// Animation curves
export const curves = {
  snappy: [0.2, 0.8, 0.2, 1],
  bouncy: [0.22, 1.28, 0, 1],
  smooth: [0.4, 0, 0.2, 1],
  precise: [0.4, 0, 0.6, 1]
};

// Configurable animation factory
export const createAnimationVariant = (
  type: "fadeIn" | "slideUp" | "scaleIn" | "popIn" | "fadeInBlur",
  options?: {
    duration?: number;
    delay?: number;
    staggerChildren?: number;
    curve?: number[];
    distance?: number;
    blur?: number;
  }
): Variants => {
  const {
    duration = timing.fast,
    delay = 0,
    staggerChildren = 0.05,
    curve = curves.snappy,
    distance = 20,
    blur = 10
  } = options || {};

  const baseTransition = {
    duration,
    ease: curve,
    delay
  };

  // Animation variants
  switch (type) {
    case "fadeIn":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: baseTransition
        }
      };
    case "fadeInBlur":
      return {
        hidden: { 
          opacity: 0, 
          y: distance, 
          filter: `blur(${blur}px)` 
        },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: baseTransition
        }
      };
    case "slideUp":
      return {
        hidden: { y: distance },
        visible: { 
          y: 0,
          transition: baseTransition
        }
      };
    case "scaleIn":
      return {
        hidden: { scale: 0.92, opacity: 0 },
        visible: { 
          scale: 1, 
          opacity: 1,
          transition: baseTransition
        }
      };
    case "popIn":
      return {
        hidden: { 
          scale: 0.8, 
          opacity: 0,
          filter: `blur(${blur}px)`
        },
        visible: { 
          scale: 1, 
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            ...baseTransition,
            ease: curves.bouncy
          }
        }
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: baseTransition
        }
      };
  }
};

// Staggered container
export const staggerContainer = (staggerChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.1
    }
  }
});

// Animation hooks for common page sections
export const sectionAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.smooth
});

export const headingAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.3,
  curve: curves.snappy
});

export const cardAnimation = createAnimationVariant("popIn", {
  duration: 0.35,
  curve: curves.bouncy
});

export const buttonAnimation = createAnimationVariant("scaleIn", {
  duration: 0.25,
  curve: curves.bouncy
});
