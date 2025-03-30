
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const Logo = () => {
  const { isDarkMode } = useTheme();
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Animation variants for the container - includes initial flip
  const logoVariants = {
    initial: {
      opacity: 0,
      rotateY: 180, // Start flipped horizontally
      scale: 0.6
    },
    animate: {
      opacity: 1,
      rotateY: 0, // Flip back to normal
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.12,
        when: "beforeChildren" // Make sure the flip completes before the children start animating
      }
    }
  };
  
  // Counter-clockwise folding animation starting from bottom left
  const pathVariants = {
    initial: (custom: number) => ({
      opacity: 0,
      scale: 0.8,
      x: custom % 2 === 0 ? -15 : 15,
      y: custom % 3 === 0 ? -15 : 15,
      rotate: custom * 5
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
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
  const accentColor = isDarkMode ? "#DDDDDD" : "#DDDDDD";
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        initial="initial"
        animate="animate"
        variants={logoVariants}
        className="w-6 h-6 relative" // Reduced from w-7 h-7 to w-6 h-6
        onAnimationComplete={() => setAnimationComplete(true)}
        style={{ transformOrigin: "center center" }} // Ensure proper flipping
      >
        <svg 
          viewBox="0 0 67 67" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Bottom left square (starting point) */}
          <motion.path
            custom={1}
            variants={pathVariants}
            d="M22.21 67V44.6369H0V67H22.21Z" 
            fill={fillColor}
          />
          
          {/* Bottom left accent */}
          <motion.path
            custom={1.5}
            variants={pathVariants}
            d="M0 44.6369L22.21 46.8285V44.6369H0Z" 
            fill={accentColor}
          />
          
          {/* Center part (counter-clockwise second) */}
          <motion.path
            custom={2}
            variants={pathVariants}
            d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" 
            fill={fillColor}
          />
          
          {/* Top left square (counter-clockwise third) */}
          <motion.path
            custom={3}
            variants={pathVariants}
            d="M22.21 0H0V22.3184H22.21V0Z" 
            fill={fillColor}
          />
          
          {/* Top right square (counter-clockwise fourth) */}
          <motion.path
            custom={4}
            variants={pathVariants}
            d="M66.7198 0H44.5098V22.3184H66.7198V0Z" 
            fill={fillColor}
          />
          
          {/* Top right accent */}
          <motion.path
            custom={4.5}
            variants={pathVariants}
            d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" 
            fill={accentColor}
          />
          
          {/* Bottom right square (counter-clockwise fifth) */}
          <motion.path
            custom={5}
            variants={pathVariants}
            d="M66.7198 67V44.6369H44.5098V67H66.7198Z" 
            fill={fillColor}
          />
        </svg>
      </motion.div>
      
      <motion.span 
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className={`font-bold text-2xl ${isDarkMode ? "text-[var(--white)]" : "text-neutral-900"}`} // Changed from text-xl to text-2xl
      >
        Hanzo
      </motion.span>
    </Link>
  );
};

export default Logo;
