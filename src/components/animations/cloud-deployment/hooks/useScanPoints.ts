
import { useState, useEffect } from "react";
import { ScanPointType } from "../types";

export const useScanPoints = () => {
  const [scanPoints, setScanPoints] = useState<ScanPointType[]>([]);

  // Initialize grid points for the scanning effect
  useEffect(() => {
    const points = [];
    const gridSize = 8;
    const cellSize = 100 / gridSize;
    
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        // Skip some points to create a less uniform pattern
        if (Math.random() > 0.6) continue;
        
        points.push({
          x: x * cellSize + (Math.random() * cellSize * 0.6),
          y: y * cellSize + (Math.random() * cellSize * 0.6),
          active: false
        });
      }
    }
    
    setScanPoints(points);
  }, []);

  const activateScanPoints = (count: number) => {
    setScanPoints(prev => 
      prev.map((point, idx) => ({
        ...point,
        active: idx < count ? true : point.active
      }))
    );
  };

  const activateAllScanPoints = () => {
    setScanPoints(prev => 
      prev.map(point => ({
        ...point,
        active: true
      }))
    );
  };

  return {
    scanPoints,
    activateScanPoints,
    activateAllScanPoints
  };
};
