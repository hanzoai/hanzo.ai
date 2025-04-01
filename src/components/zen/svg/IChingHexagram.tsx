
import React from "react";
import { HexagramLine } from "../types/hexagram";

interface IChingHexagramProps {
  lines: HexagramLine[];
  size?: number;
  className?: string;
}

const IChingHexagram: React.FC<IChingHexagramProps> = ({ 
  lines, 
  size = 40, 
  className = "" 
}) => {
  const lineHeight = size / 12;
  const lineSpacing = size / 8;
  const lineWidth = size;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <g>
        {lines.map((line, index) => {
          const y = index * (lineHeight + lineSpacing) + size / 6;
          
          if (line.type === "solid") {
            return (
              <rect 
                key={index} 
                x="0" 
                y={y} 
                width={lineWidth} 
                height={lineHeight} 
                fill="currentColor" 
              />
            );
          } else {
            // Broken line
            const gapWidth = lineWidth / 3;
            return (
              <g key={index}>
                <rect 
                  x="0" 
                  y={y} 
                  width={(lineWidth - gapWidth) / 2} 
                  height={lineHeight} 
                  fill="currentColor" 
                />
                <rect 
                  x={lineWidth - (lineWidth - gapWidth) / 2} 
                  y={y} 
                  width={(lineWidth - gapWidth) / 2} 
                  height={lineHeight} 
                  fill="currentColor" 
                />
              </g>
            );
          }
        })}
      </g>
    </svg>
  );
};

export default IChingHexagram;
