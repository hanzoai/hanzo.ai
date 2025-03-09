
import * as THREE from 'three';

// Creates the main globe mesh
export const createGlobe = (): THREE.Mesh => {
  const globeGeometry = new THREE.SphereGeometry(100, 64, 64);
  const globeMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x1a2035),
    transparent: true,
    opacity: 0.8,
  });
  return new THREE.Mesh(globeGeometry, globeMaterial);
};

// Creates the outer glow effect
export const createGlowEffect = (): THREE.Mesh => {
  const glowGeometry = new THREE.SphereGeometry(102, 64, 64);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x3a4b8c),
    transparent: true,
    opacity: 0.1,
  });
  return new THREE.Mesh(glowGeometry, glowMaterial);
};

// Creates simplified country outlines
export const createCountryOutlines = (): THREE.Group => {
  const countryLinesGroup = new THREE.Group();
  const countrySegments = 20;
  
  for (let i = 0; i < countrySegments; i++) {
    const phi = Math.PI * 2 * Math.random();
    const theta = Math.PI * Math.random();
    
    const countryPoints = [];
    
    // Create irregular country shape
    for (let j = 0; j < 8; j++) {
      const angle = (j / 8) * Math.PI * 2;
      const radius = 101; // Just above globe surface
      const jitter = 0.2 + Math.random() * 0.3;
      
      const x = radius * Math.sin(theta + jitter) * Math.cos(phi + angle);
      const y = radius * Math.sin(theta + jitter) * Math.sin(phi + angle);
      const z = radius * Math.cos(theta + jitter);
      
      countryPoints.push(new THREE.Vector3(x, y, z));
    }
    
    // Close the loop
    countryPoints.push(countryPoints[0].clone());
    
    const countryGeometry = new THREE.BufferGeometry().setFromPoints(countryPoints);
    const countryMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0x4a5568),
      transparent: true,
      opacity: 0.5,
    });
    
    const countryLine = new THREE.Line(countryGeometry, countryMaterial);
    countryLinesGroup.add(countryLine);
  }
  
  return countryLinesGroup;
};
