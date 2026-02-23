
import * as THREE from 'three';
import { ConnectionPoint, GeoCoordinate } from './types';

// Helper to convert lat/lon to x,y on the globe
export const latLongToPosition = (
  lat: number, 
  lon: number, 
  centerX: number, 
  centerY: number, 
  radius: number,
  verticalScale: number = 1 // For controlling sphere vs ellipse shape
): {x: number, y: number} => {
  // Convert to radians
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  
  // Calculate positions with perfect circle proportions
  // Using full lon range (-180 to +180) for proper hemisphere view
  const x = centerX + (radius * Math.cos(latRad) * Math.sin(lonRad));
  
  // Y coordinate with vertical scaling - when verticalScale is 1, it's a perfect circle
  const y = centerY - (radius * Math.sin(latRad) * verticalScale);
  
  return { x, y };
};

// Helper function to find a point by ID
export const findPointById = (points: ConnectionPoint[], id?: string): ConnectionPoint | undefined => {
  return id ? points.find(p => p.id === id) : undefined;
};

// Convert lat/long to 3D position on a sphere
export const latLongToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  
  return new THREE.Vector3(x, y, z);
};

// Create an arc between two points on the globe
export const createArc = (
  start: THREE.Vector3, 
  end: THREE.Vector3, 
  radius: number, 
  color: string = "#cccccc",
  segments: number = 50
): THREE.Line => {
  // Calculate the midpoint and raise it to create an arc
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const distance = start.distanceTo(end);
  
  // Normalize the midpoint and scale it to radius + arc height
  mid.normalize().multiplyScalar(radius + distance * 0.15);
  
  // Create a quadratic bezier curve
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const points = curve.getPoints(segments);
  
  // Create the line geometry
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ 
    color: color,
    transparent: true,
    opacity: 0.5,
    linewidth: 1
  });
  
  return new THREE.Line(geometry, material);
};
