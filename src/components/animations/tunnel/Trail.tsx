
import React from "react";
import { motion } from "framer-motion";

interface TrailProps {
  startX: number;
  startY: number;
  startZ: number;
  endX: number;
  endY: number;
  endZ: number;
  length: number;
  opacity: number;
  width: number;
  index: number;
}

const Trail: React.FC<TrailProps> = ({
  startX,
  startY,
  startZ,
  endX,
  endY,
  endZ,
  length,
  opacity,
  width,
  index
}) => {
  return (
    <motion.div
      key={`trail-${index}`}
      className="absolute"
      style={{
        width: `${width}px`,
        height: `${length}px`,
        background: `linear-gradient(to bottom, rgba(155, 135, 245, ${opacity}) 0%, rgba(155, 135, 245, 0) 100%)`,
        left: `${startX}%`,
        top: `${startY}%`,
        transform: `translateZ(${startZ}px) rotateX(90deg)`,
        transformOrigin: "center center",
      }}
      animate={{
        left: [`${startX}%`, `${endX}%`],
        top: [`${startY}%`, `${endY}%`],
        translateZ: [startZ, endZ],
        opacity: [opacity, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: index * 0.05,
      }}
    />
  );
};

export default Trail;
