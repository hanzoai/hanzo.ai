
import React from "react";

export interface HexagramLine {
  type: 'solid' | 'broken';
}

export interface HexagramProps {
  lines: HexagramLine[];
  size?: number;
  className?: string;
}

const IChingHexagram: React.FC<HexagramProps> = ({ 
  lines = Array(6).fill({ type: 'solid' }), 
  size = 36, 
  className = "" 
}) => {
  // Ensure we have exactly 6 lines
  const normalizedLines = lines.slice(0, 6);
  while (normalizedLines.length < 6) {
    normalizedLines.push({ type: 'solid' });
  }
  
  // Calculate dimensions
  const lineHeight = size / 12;
  const lineWidth = size;
  const gap = lineHeight;
  const totalHeight = (lineHeight * 6) + (gap * 5);
  
  return (
    <svg 
      width={lineWidth} 
      height={totalHeight} 
      viewBox={`0 0 ${lineWidth} ${totalHeight}`} 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {normalizedLines.map((line, index) => {
        const y = index * (lineHeight + gap);
        
        if (line.type === 'solid') {
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
          // For broken lines, draw two rectangles with a gap
          const gapWidth = lineWidth / 3;
          const segmentWidth = (lineWidth - gapWidth) / 2;
          return (
            <g key={index}>
              <rect
                x="0"
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill="currentColor"
              />
              <rect
                x={segmentWidth + gapWidth}
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill="currentColor"
              />
            </g>
          );
        }
      })}
    </svg>
  );
};

export default IChingHexagram;
