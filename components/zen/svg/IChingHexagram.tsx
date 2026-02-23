'use client'


import React from "react";
import { motion } from "framer-motion";

export interface HexagramLine {
  type: 'solid' | 'broken';
}

export interface HexagramProps {
  lines: HexagramLine[];
  size?: number;
  className?: string;
  animate?: boolean;
  index?: number;
}

const IChingHexagram: React.FC<HexagramProps> = ({ 
  lines = Array(6).fill({ type: 'solid' }), 
  size = 36, 
  className = "",
  animate = false,
  index = 0
}) => {
  // Ensure we have exactly 6 lines
  const normalizedLines = lines.slice(0, 6);
  while (normalizedLines.length < 6) {
    normalizedLines.push({ type: 'solid' });
  }
  
  // Calculate dimensions
  const lineHeight = size / 14;
  const lineWidth = size;
  const gap = lineHeight * 1.3;
  const totalHeight = (lineHeight * 6) + (gap * 5);
  
  return (
    <svg 
      width={lineWidth} 
      height={totalHeight} 
      viewBox={`0 0 ${lineWidth} ${totalHeight}`} 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {normalizedLines.map((line, lineIndex) => {
        const y = lineIndex * (lineHeight + gap);
        const delay = animate ? 0.1 + (index * 0.02) + (lineIndex * 0.05) : 0;
        
        if (line.type === 'solid') {
          return (
            <motion.rect
              key={lineIndex}
              x="0"
              y={y}
              width={lineWidth}
              height={lineHeight}
              fill="currentColor"
              initial={animate ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay,
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ originX: 0 }}
            />
          );
        } else {
          // For broken lines, draw two rectangles with a gap
          const gapWidth = lineWidth / 3;
          const segmentWidth = (lineWidth - gapWidth) / 2;
          return (
            <g key={lineIndex}>
              <motion.rect
                x="0"
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill="currentColor"
                initial={animate ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={{ originX: 0 }}
              />
              <motion.rect
                x={segmentWidth + gapWidth}
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill="currentColor"
                initial={animate ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: delay + 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={{ originX: 0 }}
              />
            </g>
          );
        }
      })}
    </svg>
  );
};

export default IChingHexagram;
