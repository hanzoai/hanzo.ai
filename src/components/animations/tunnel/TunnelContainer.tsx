
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TunnelContainerProps {
  children: ReactNode;
}

const TunnelContainer: React.FC<TunnelContainerProps> = ({ children }) => {
  return (
    <motion.div 
      className="absolute inset-0 w-full h-full"
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{ 
        rotateX: [0, 3, 0, -3, 0],
        rotateY: [0, -3, 0, 3, 0]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default TunnelContainer;
