
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { ConnectionPoint, CanvasContextProps } from "./types";
import { useGlobeDrawing } from "./useGlobeDrawing";
import { useConnectionPoints } from "./useConnectionPoints";

const CanvasContext = createContext<CanvasContextProps | undefined>(undefined);

export const useCanvasContext = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("useCanvasContext must be used within a CanvasProvider");
  }
  return context;
};

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [connectionPoints, setConnectionPoints] = useState<ConnectionPoint[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // These values will be recalculated when dimensions change
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const globeRadius = Math.min(dimensions.width / 2, dimensions.height / 2) * 0.9;

  const { drawGlobe: globalDrawGlobe } = useGlobeDrawing();
  const { generateConnectionPoints: globalGenerateConnectionPoints } = useConnectionPoints();

  const setCanvasContext = useCallback((context: CanvasRenderingContext2D) => {
    setCtx(context);
  }, []);

  const drawGlobe = useCallback(() => {
    globalDrawGlobe(
      ctx, 
      dimensions, 
      connectionPoints,
      centerX,
      centerY,
      globeRadius
    );
  }, [ctx, centerX, centerY, globeRadius, connectionPoints, dimensions, globalDrawGlobe]);

  const generateConnectionPoints = useCallback((width: number, height: number) => {
    setDimensions({ width, height });
    
    const newCenterX = width / 2;
    const newCenterY = height / 2;
    const newGlobeRadius = Math.min(width / 2, height / 2) * 0.9;
    
    const newPoints = globalGenerateConnectionPoints(
      width, 
      height, 
      newCenterX, 
      newCenterY, 
      newGlobeRadius
    );
    
    setConnectionPoints(newPoints);
  }, [globalGenerateConnectionPoints]);

  const value = {
    connectionPoints,
    setConnectionPoints,
    globeRadius,
    centerX,
    centerY,
    setCanvasContext,
    drawGlobe,
    generateConnectionPoints
  };

  return (
    <CanvasContext.Provider value={value}>
      {children}
    </CanvasContext.Provider>
  );
};
