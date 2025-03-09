
import React from "react";
import { motion } from "framer-motion";

const VanishingPoint: React.FC = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      {/* Center point with pulsing effect */}
      <motion.div
        className="rounded-full bg-white"
        style={{ 
          width: "4px", 
          height: "4px",
          boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.8), 0 0 30px 15px rgba(155, 135, 245, 0.6)"
        }}
        animate={{ 
          boxShadow: [
            "0 0 15px 5px rgba(255, 255, 255, 0.8), 0 0 30px 15px rgba(155, 135, 245, 0.6)",
            "0 0 20px 10px rgba(255, 255, 255, 0.9), 0 0 40px 20px rgba(155, 135, 245, 0.7)",
            "0 0 15px 5px rgba(255, 255, 255, 0.8), 0 0 30px 15px rgba(155, 135, 245, 0.6)",
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Outer glow */}
      <motion.div
        className="absolute rounded-full bg-transparent"
        style={{ 
          width: "60px", 
          height: "60px",
          top: "-30px",
          left: "-30px",
          background: "radial-gradient(circle, rgba(155, 135, 245, 0.3) 0%, rgba(155, 135, 245, 0.1) 50%, rgba(155, 135, 245, 0) 70%)"
        }}
        animate={{ 
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
};

export default VanishingPoint;
