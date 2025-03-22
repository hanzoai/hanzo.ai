
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const Logo = () => {
  const { isDarkMode } = useTheme();
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Animation variants for the origami folding effect
  const logoVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08
      }
    }
  };
  
  const squareVariants = {
    initial: (custom: number) => ({
      opacity: 0,
      rotate: custom * 15,
      scale: 0.8,
      x: custom * 10
    }),
    animate: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  // Simulate page load completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const fillColor = isDarkMode ? "#ffffff" : "#000000";
  const accentColor = isDarkMode ? "#cccccc" : "#333333";
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        initial="initial"
        animate="animate"
        variants={logoVariants}
        className="w-10 h-10 relative"
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top left square */}
          <motion.rect
            custom={-2}
            variants={squareVariants}
            x="5" 
            y="5" 
            width="30" 
            height="30" 
            fill={fillColor}
          />
          
          {/* Top right square */}
          <motion.rect
            custom={2}
            variants={squareVariants}
            x="65" 
            y="5" 
            width="30" 
            height="30" 
            fill={fillColor}
          />
          
          {/* Bottom left square */}
          <motion.rect
            custom={-1}
            variants={squareVariants}
            x="5" 
            y="65" 
            width="30" 
            height="30" 
            fill={fillColor}
          />
          
          {/* Bottom right square */}
          <motion.rect
            custom={1}
            variants={squareVariants}
            x="65" 
            y="65" 
            width="30" 
            height="30" 
            fill={fillColor}
          />
          
          {/* Center parallelogram with subtle shading for origami effect */}
          <motion.path
            custom={0}
            variants={squareVariants}
            d="M35 35 L65 20 L65 65 L35 80 Z" 
            fill={fillColor}
          />
          
          {/* Shadow/highlight for origami effect */}
          <motion.path
            custom={0.2}
            variants={squareVariants}
            d="M35 35 L65 20 L65 30 L35 45 Z" 
            fill={accentColor}
            opacity="0.15"
          />
        </svg>
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}
      >
        Hanzo
      </motion.span>
    </Link>
  );
};

export default Logo;
