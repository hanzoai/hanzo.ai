
import React from "react";
import { motion } from "framer-motion";

interface TaijiProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

const TaijiSymbol: React.FC<TaijiProps> = ({ 
  size = 48, 
  className = "",
  animate = false
}) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Outer circle */}
      <motion.circle 
        cx="50" 
        cy="50" 
        r="49" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        variants={animate ? draw : undefined}
      />
      
      {/* Yin-yang curve */}
      <motion.path 
        d="M50 1C23.9 1 2 22.9 2 49s21.9 48 48 48 48-21.9 48-48S76.1 1 50 1zm0 86c-10.4 0-18.8-8.4-18.8-18.8S39.6 49.4 50 49.4s18.8 8.4 18.8 18.8S60.4 87 50 87zm18.8-56.3c0 10.4-8.4 18.8-18.8 18.8S31.2 41.1 31.2 30.7 39.6 11.9 50 11.9s18.8 8.4 18.8 18.8z" 
        fill="currentColor"
        variants={animate ? draw : undefined}
      />
      
      {/* White dot in dark side */}
      <motion.circle 
        cx="50" 
        cy="30.7" 
        r="6" 
        fill="white"
        variants={animate ? {
          hidden: { scale: 0, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.3 }
          }
        } : undefined}
      />
      
      {/* Dark dot in white side */}
      <motion.circle 
        cx="50" 
        cy="68.3" 
        r="6" 
        fill="currentColor"
        variants={animate ? {
          hidden: { scale: 0, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.3 }
          }
        } : undefined}
      />
    </motion.svg>
  );
};

export default TaijiSymbol;
