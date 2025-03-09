
import React from "react";

interface GridLinesProps {
  className?: string;
  color?: string;
  spacing?: number;
  opacity?: number;
}

export const GridLines: React.FC<GridLinesProps> = ({ 
  className = "",
  color = "rgba(255, 255, 255, 0.05)", // Reduced opacity
  spacing = 40,
  opacity = 0.15 // Lower default opacity
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${spacing}px ${spacing}px`,
          opacity: opacity
        }}
      />
    </div>
  );
};

interface BlueprintLineProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  position?: string;
  width?: string;
  length?: string;
  color?: string;
  dashed?: boolean;
}

export const BlueprintLine: React.FC<BlueprintLineProps> = ({
  className = "",
  orientation = "horizontal",
  position = "center",
  width = "1px",
  length = "100%",
  color = "rgba(100, 149, 237, 0.15)", // Reduced opacity
  dashed = false
}) => {
  const isHorizontal = orientation === "horizontal";
  
  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{
        ...(isHorizontal 
          ? { 
              left: 0,
              right: 0,
              height: width,
              width: length,
              top: position === "center" ? "50%" : position,
              transform: position === "center" ? "translateY(-50%)" : "none"
            } 
          : { 
              top: 0,
              bottom: 0,
              width: width,
              height: length,
              left: position === "center" ? "50%" : position,
              transform: position === "center" ? "translateX(-50%)" : "none"
            }),
        backgroundColor: color,
        borderStyle: dashed ? "dashed" : "solid",
        borderWidth: dashed ? width : 0,
        borderColor: color,
      }}
    />
  );
};

interface ArchitecturalCornerProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  color?: string;
  thickness?: number;
}

export const ArchitecturalCorner: React.FC<ArchitecturalCornerProps> = ({
  className = "",
  position = "top-left",
  size = 40,
  color = "rgba(100, 149, 237, 0.25)", // Reduced opacity
  thickness = 1
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left": return "top-0 left-0";
      case "top-right": return "top-0 right-0";
      case "bottom-left": return "bottom-0 left-0";
      case "bottom-right": return "bottom-0 right-0";
    }
  };
  
  return (
    <div className={`absolute ${getPositionClasses()} pointer-events-none ${className}`}>
      <div 
        style={{
          width: size,
          height: size,
          borderColor: color,
          borderStyle: "solid",
          borderWidth: 0,
          ...(position === "top-left" && { borderTopWidth: thickness, borderLeftWidth: thickness }),
          ...(position === "top-right" && { borderTopWidth: thickness, borderRightWidth: thickness }),
          ...(position === "bottom-left" && { borderBottomWidth: thickness, borderLeftWidth: thickness }),
          ...(position === "bottom-right" && { borderBottomWidth: thickness, borderRightWidth: thickness }),
        }}
      />
    </div>
  );
};

export const ArchitecturalBox: React.FC<{
  children: React.ReactNode;
  className?: string;
  showCorners?: boolean;
  showGrid?: boolean;
  cornerSize?: number;
  cornerColor?: string;
  gridSpacing?: number;
  gridColor?: string;
  gridOpacity?: number;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({
  children,
  className = "",
  showCorners = true,
  showGrid = false,
  cornerSize = 20,
  cornerColor = "rgba(100, 149, 237, 0.25)", // Reduced opacity
  gridSpacing = 30,
  gridColor = "rgba(255, 255, 255, 0.05)", // Reduced opacity
  gridOpacity = 0.12, // Lower opacity
  onMouseEnter,
  onMouseLeave,
  onClick
}) => {
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {showGrid && (
        <GridLines 
          spacing={gridSpacing} 
          color={gridColor} 
          opacity={gridOpacity} 
        />
      )}
      
      {showCorners && (
        <>
          <ArchitecturalCorner position="top-left" size={cornerSize} color={cornerColor} />
          <ArchitecturalCorner position="top-right" size={cornerSize} color={cornerColor} />
          <ArchitecturalCorner position="bottom-left" size={cornerSize} color={cornerColor} />
          <ArchitecturalCorner position="bottom-right" size={cornerSize} color={cornerColor} />
        </>
      )}
      
      {children}
    </div>
  );
};
