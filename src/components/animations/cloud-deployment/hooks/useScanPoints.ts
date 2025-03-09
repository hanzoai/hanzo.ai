
import { useState, useEffect } from "react";
import { ScanPointType } from "../types";

export const useScanPoints = () => {
  const [scanPoints, setScanPoints] = useState<ScanPointType[]>([]);

  // Initialize grid points for the scanning effect
  useEffect(() => {
    const points: ScanPointType[] = [];
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
    
    // Activate points gradually
    const activatePoints = () => {
      setScanPoints(prev => {
        const inactiveIndex = prev.findIndex(p => !p.active);
        if (inactiveIndex === -1) return prev;
        
        return prev.map((point, idx) => 
          idx === inactiveIndex ? { ...point, active: true } : point
        );
      });
    };
    
    // Activate points at intervals
    const interval = setInterval(activatePoints, 500);
    
    return () => clearInterval(interval);
  }, []);

  return { scanPoints };
};
