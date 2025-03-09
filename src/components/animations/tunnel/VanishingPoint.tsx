
import React from "react";
import { motion } from "framer-motion";

const VanishingPoint: React.FC = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      {/* Outer glow without the center point */}
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
