'use client'


import { useState, useEffect } from "react";
import { ScanPointType } from "../types";
import { generateScanPoints, activateNextScanPoint } from "../utils/scanPointsUtils";

export const useScanPoints = (
  gridSize: number = 8,
  pointDensity: number = 0.4,
  activationInterval: number = 500
) => {
  const [scanPoints, setScanPoints] = useState<ScanPointType[]>([]);

  // Initialize grid points for the scanning effect
  useEffect(() => {
    // Generate initial points
    const initialPoints = generateScanPoints(gridSize, pointDensity);
    setScanPoints(initialPoints);
    
    // Activate points gradually
    const interval = setInterval(() => {
      setScanPoints(prevPoints => activateNextScanPoint(prevPoints));
    }, activationInterval);
    
    return () => clearInterval(interval);
  }, [gridSize, pointDensity, activationInterval]);

  return { scanPoints };
};
