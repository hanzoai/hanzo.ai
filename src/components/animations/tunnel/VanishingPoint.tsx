
import React from "react";
import { motion } from "framer-motion";

const VanishingPoint: React.FC = () => {
  return (
    <motion.div
      className="absolute w-4 h-4 bg-purple-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-md"
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.5, 1],
        boxShadow: [
          "0 0 5px 0px rgba(139, 92, 246, 0.3)",
          "0 0 20px 10px rgba(139, 92, 246, 0.7)",
          "0 0 5px 0px rgba(139, 92, 246, 0.3)"
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default VanishingPoint;
