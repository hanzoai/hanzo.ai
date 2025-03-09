
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { majorCities, continents } from '../globeData';

export interface GlobeSceneRef {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  globe: THREE.Mesh;
  pointsGroup: THREE.Group;
  countryLinesGroup: THREE.Group;
  arcs: THREE.Line[];
}

export const useGlobeScene = (
  containerRef: React.RefObject<HTMLDivElement>,
  width: number,
  height: number
) => {
  const globeRef = useRef<GlobeSceneRef | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing content
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - increased zoom level
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 230; // Closer zoom
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Globe
    const globeGeometry = new THREE.SphereGeometry(100, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x1a2035),
      transparent: true,
      opacity: 0.8,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    
    // Add a slightly larger transparent outer glow
    const glowGeometry = new THREE.SphereGeometry(102, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x3a4b8c),
      transparent: true,
      opacity: 0.1,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);
    
    // Add country outlines
    const countryLinesGroup = new THREE.Group();
    scene.add(countryLinesGroup);
    
    // Create simplified country outlines
    const countrySegments = 20;
    for (let i = 0; i < countrySegments; i++) {
      const phi = Math.PI * 2 * Math.random();
      const theta = Math.PI * Math.random();
      
      const countrySize = 5 + Math.random() * 15;
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
    
    // Connection points (data centers or traffic hubs)
    const pointsGroup = new THREE.Group();
    scene.add(pointsGroup);
    
    // Create points
    const points = [];
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
    
    // Create connections (arcs) between points
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
      scene.add(arc);
      arcs.push(arc);
    }
    
    // Store all references for animation
    globeRef.current = {
      scene,
      camera,
      renderer,
      globe,
      pointsGroup,
      countryLinesGroup,
      arcs,
    };
    
    // Handle window resize
    const handleResize = () => {
      if (!globeRef.current) return;
      
      const { camera, renderer } = globeRef.current;
      
      const newWidth = containerRef.current?.clientWidth || width;
      const newHeight = containerRef.current?.clientHeight || height;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (globeRef.current) {
        const { scene, renderer } = globeRef.current;
        
        // Dispose of geometries and materials
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            }
          }
        });
        
        // Remove renderer
        renderer.dispose();
        
        if (containerRef.current && renderer.domElement) {
          try {
            containerRef.current.removeChild(renderer.domElement);
          } catch (e) {
            console.warn("Could not remove renderer from container", e);
          }
        }
      }
    };
  }, [containerRef, width, height]);
  
  return globeRef.current;
};
