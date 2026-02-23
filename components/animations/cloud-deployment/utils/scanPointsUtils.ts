
import { ScanPointType } from "../types";

/**
 * Creates an array of scan points distributed across a grid
 * with some randomness for a more natural appearance
 */
export const generateScanPoints = (
  gridSize: number = 8,
  pointDensity: number = 0.4
): ScanPointType[] => {
  const points: ScanPointType[] = [];
  const cellSize = 100 / gridSize;
  
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      // Skip some points to create a less uniform pattern
      if (Math.random() > pointDensity) continue;
      
      points.push({
        x: x * cellSize + (Math.random() * cellSize * 0.6),
        y: y * cellSize + (Math.random() * cellSize * 0.6),
        active: false
      });
    }
  }
  
  return points;
};

/**
 * Activates a single inactive scan point
 */
export const activateNextScanPoint = (points: ScanPointType[]): ScanPointType[] => {
  const inactiveIndex = points.findIndex(p => !p.active);
  if (inactiveIndex === -1) return points;
  
  return points.map((point, idx) => 
    idx === inactiveIndex ? { ...point, active: true } : point
  );
};
