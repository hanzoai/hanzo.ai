'use client'


import React from "react";
import { motion } from "framer-motion";

interface JapaneseWaveProps {
  color?: string;
  height?: number;
  width?: string;
  delay?: number;
  className?: string;
  opacity?: number;
  speed?: number;
}

const JapaneseWave: React.FC<JapaneseWaveProps> = ({
  color = "#9b87f5",
  height = 30,
  width = "100%",
  delay = 0,
  className = "",
  opacity = 0.5,
  speed = 20,
}) => {
  return (
    <div className={`overflow-hidden ${className}`} style={{ width }}>
      <motion.svg
        viewBox="0 0 1440 320"
        height={height}
        width="100%"
        initial={{ x: -1440 }}
        animate={{ x: 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay
        }}
        style={{ willChange: "transform" }} // Improves performance
      >
        <path
          fill={color}
          fillOpacity={opacity}
          d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,197.3C560,224,640,256,720,261.3C800,267,880,245,960,208C1040,171,1120,117,1200,101.3C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </motion.svg>
    </div>
  );
};

export default JapaneseWave;
