
import * as THREE from 'three';

export const createGlobe = (): THREE.Mesh => {
  const globeGeometry = new THREE.SphereGeometry(100, 64, 64);
  const globeMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x1a1a1a),
    transparent: true,
    opacity: 0.9,
  });
  return new THREE.Mesh(globeGeometry, globeMaterial);
};

export const createGlowEffect = (): THREE.Mesh => {
  const glowGeometry = new THREE.SphereGeometry(102, 64, 64);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x333333),
    transparent: true,
    opacity: 0.1,
  });
  return new THREE.Mesh(glowGeometry, glowMaterial);
};

export const createCountryOutlines = (): THREE.Group => {
  const countryLinesGroup = new THREE.Group();
  const countrySegments = 40; // Increased number of segments
  
  for (let i = 0; i < countrySegments; i++) {
    const phi = Math.PI * 2 * Math.random();
    const theta = Math.PI * Math.random();
    
    const countryPoints = [];
    
    // Create continent-like shapes
    for (let j = 0; j < 12; j++) {
      const angle = (j / 12) * Math.PI * 2;
      const radius = 101;
      const jitter = 0.3 + Math.random() * 0.4; // Increased jitter for more visible land masses
      
      const x = radius * Math.sin(theta + jitter) * Math.cos(phi + angle);
      const y = radius * Math.sin(theta + jitter) * Math.sin(phi + angle);
      const z = radius * Math.cos(theta + jitter);
      
      countryPoints.push(new THREE.Vector3(x, y, z));
    }
    
    // Close the loop
    countryPoints.push(countryPoints[0].clone());
    
    const countryGeometry = new THREE.BufferGeometry().setFromPoints(countryPoints);
    const countryMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0x666666), // Lighter color for better visibility
      transparent: true,
      opacity: 0.7, // Increased opacity
    });
    
    const countryLine = new THREE.Line(countryGeometry, countryMaterial);
    countryLinesGroup.add(countryLine);
  }
  
  return countryLinesGroup;
};
