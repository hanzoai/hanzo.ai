
import * as THREE from 'three';

// Creates data center points on the globe
export const createConnectionPoints = (): {
  pointsGroup: THREE.Group;
  points: THREE.Vector3[];
} => {
  const pointsGroup = new THREE.Group();
  const points: THREE.Vector3[] = [];
  const pointCount = 30;
  
  for (let i = 0; i < pointCount; i++) {
    const lat = Math.random() * 180 - 90;
    const lng = Math.random() * 360 - 180;
    
    // Convert to 3D coordinates
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const radius = 101;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    
    const position = new THREE.Vector3(x, y, z);
    points.push(position);
    
    // Add point visualization
    const pointGeometry = new THREE.SphereGeometry(1, 16, 16);
    const pointMaterial = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? 0x4299e1 : 0x48bb78,
    });
    
    const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
    pointMesh.position.copy(position);
    pointsGroup.add(pointMesh);
    
    // Add glow
    const pointGlowGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const pointGlowMaterial = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? 0x4299e1 : 0x48bb78,
      transparent: true,
      opacity: 0.3,
    });
    
    const pointGlow = new THREE.Mesh(pointGlowGeometry, pointGlowMaterial);
    pointGlow.position.copy(position);
    pointsGroup.add(pointGlow);
  }
  
  return { pointsGroup, points };
};

// Creates connection arcs between points
export const createConnectionArcs = (points: THREE.Vector3[]): THREE.Line[] => {
  const arcs: THREE.Line[] = [];
  const connections = 25;
  
  for (let i = 0; i < connections; i++) {
    const startIdx = Math.floor(Math.random() * points.length);
    let endIdx;
    do {
      endIdx = Math.floor(Math.random() * points.length);
    } while (endIdx === startIdx);
    
    const start = points[startIdx];
    const end = points[endIdx];
    
    // Create a curved arc
    const arcPoints = [];
    const arcSegments = 50;
    
    for (let j = 0; j <= arcSegments; j++) {
      const t = j / arcSegments;
      
      // Linear interpolation
      const x = start.x + (end.x - start.x) * t;
      const y = start.y + (end.y - start.y) * t;
      const z = start.z + (end.z - start.z) * t;
      
      // Add elevation to the middle of the arc
      const elevation = Math.sin(Math.PI * t) * 15;
      const direction = new THREE.Vector3(x, y, z).normalize();
      
      const elevatedPoint = new THREE.Vector3(
        x + direction.x * elevation,
        y + direction.y * elevation,
        z + direction.z * elevation
      );
      
      arcPoints.push(elevatedPoint);
    }
    
    const arcGeometry = new THREE.BufferGeometry().setFromPoints(arcPoints);
    const arcMaterial = new THREE.LineBasicMaterial({
      color: i % 3 === 0 ? 0x3182ce : 0x38a169,
      transparent: true,
      opacity: 0.6,
      linecap: 'round',
      linejoin: 'round',
    });
    
    // For some lines, add the dash effect
    if (i % 3 === 0) {
      arcMaterial.defines = arcMaterial.defines || {};
      arcMaterial.defines.USE_DASH = "";
      (arcMaterial as any).dashSize = 0.1;
      (arcMaterial as any).gapSize = 0.1;
    }
    
    const arc = new THREE.Line(arcGeometry, arcMaterial);
    arcs.push(arc);
  }
  
  return arcs;
};
