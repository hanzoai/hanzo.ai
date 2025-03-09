
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { latLongToVector3, createArc } from './globeUtils';
import { majorCities, continents } from './globeData';

interface GlobeThreeJsProps {
  width: number;
  height: number;
}

const GlobeThreeJs: React.FC<GlobeThreeJsProps> = ({ width, height }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<{
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    globe: THREE.Mesh,
    arcs: THREE.Line[],
    pointsGroup: THREE.Group,
    countryLinesGroup: THREE.Group,
    raycaster: THREE.Raycaster,
    mouse: THREE.Vector2,
    animationId: number | null
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    
    // Semi-transparent background
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 3, 18);

    // Camera setup - more zoomed in view
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 2.0); // Position closer to see more detail
    camera.lookAt(0, 0, 0);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Clear the container before adding the new renderer
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);
    
    // Create a group for all points
    const pointsGroup = new THREE.Group();
    scene.add(pointsGroup);
    
    // Create a group for country outlines
    const countryLinesGroup = new THREE.Group();
    scene.add(countryLinesGroup);
    
    // Create globe sphere - slightly transparent
    const GLOBE_RADIUS = 1;
    const sphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x2b3a67,
      transparent: true,
      opacity: 0.15,
      side: THREE.FrontSide,
    });
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(globe);
    
    // Add a wireframe to the globe
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x47689b,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wireframe = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Add country outlines
    continents.forEach(continent => {
      if (continent.length < 2) return; // Need at least 2 points to draw a line
      
      const points = continent.map(coord => 
        latLongToVector3(coord.lat, coord.lon, GLOBE_RADIUS * 1.001) // Slightly above the surface
      );
      
      // Create a closed loop
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x3c6382, 
        transparent: true,
        opacity: 0.6,
        linewidth: 1.5
      });
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      countryLinesGroup.add(line);
    });

    // Add ambient light for base illumination
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    
    // Add directional light for shading
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // Raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    // Add points for major cities
    const arcs: THREE.Line[] = [];
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x80ccff,
      size: 0.05, // Slightly larger points
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    
    // Create city points
    const cityPositions: THREE.Vector3[] = [];
    const cityData: {position: THREE.Vector3, name: string, size: number}[] = [];
    
    majorCities.forEach((city) => {
      const position = latLongToVector3(city.lat, city.lon, GLOBE_RADIUS);
      cityPositions.push(position);
      cityData.push({
        position,
        name: city.name || `City at ${city.lat}, ${city.lon}`,
        size: city.size || 2
      });
    });
    
    // Add some random points around the globe
    for (let i = 0; i < 30; i++) {
      const lat = (Math.random() * 180) - 90; // -90 to 90 degrees (full globe)
      const lon = Math.random() * 360 - 180; // -180 to 180 degrees
      const position = latLongToVector3(lat, lon, GLOBE_RADIUS);
      cityPositions.push(position);
      cityData.push({
        position,
        name: `Location ${i+1}`,
        size: 1
      });
    }
    
    pointsGeometry.setFromPoints(cityPositions);
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    pointsGroup.add(points);
    
    // Create glowing dots at city points
    cityData.forEach((city) => {
      // Create glowing dots for major cities
      if (city.size > 1) {
        const glowGeometry = new THREE.SphereGeometry(0.01 * city.size, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0x70e3ff,
          transparent: true,
          opacity: 0.8,
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.copy(city.position);
        pointsGroup.add(glow);
      }
    });
    
    // Create more arcs between points to simulate traffic
    for (let i = 0; i < 20; i++) {
      const startIndex = Math.floor(Math.random() * cityPositions.length);
      let endIndex;
      do {
        endIndex = Math.floor(Math.random() * cityPositions.length);
      } while (endIndex === startIndex);
      
      const start = cityPositions[startIndex];
      const end = cityPositions[endIndex];
      
      // Get a color from blue to cyan spectrum
      const hue = 210 + Math.random() * 40;
      const arc = createArc(
        start,
        end,
        GLOBE_RADIUS,
        `hsl(${hue}, 80%, 70%)`,
        50
      );
      
      // Start with low opacity
      (arc.material as THREE.LineBasicMaterial).opacity = 0.1 + Math.random() * 0.3;
      
      scene.add(arc);
      arcs.push(arc);
    }
    
    // Smooth rotation
    let rotationSpeed = 0.0005;
    
    // Store all references
    globeRef.current = {
      scene,
      camera,
      renderer,
      globe,
      arcs,
      pointsGroup,
      countryLinesGroup,
      raycaster,
      mouse,
      animationId: null
    };
    
    // Animation loop
    const animate = () => {
      const current = globeRef.current;
      if (!current) return;
      
      // Auto rotate the globe - very slow and smooth
      globe.rotation.y += rotationSpeed;
      wireframe.rotation.y += rotationSpeed;
      pointsGroup.rotation.y += rotationSpeed;
      countryLinesGroup.rotation.y += rotationSpeed;
      
      // Animate arcs - pulse effect with different phases
      arcs.forEach((arc, index) => {
        const material = arc.material as THREE.LineBasicMaterial;
        const phase = Date.now() * 0.001 + index * 0.5; // Different phase for each arc
        material.opacity = 0.15 + 0.3 * Math.sin(phase);
        
        // Make some arcs appear to move along the path
        if (index % 3 === 0) {
          // This creates a moving pulse effect
          const dashSize = 0.1 + 0.1 * Math.sin(phase * 2);
          if (material.defines) {
            material.defines.USE_DASH = "";
            material.dashSize = dashSize;
            material.gapSize = 0.1;
          }
        }
      });
      
      // Render scene
      renderer.render(scene, camera);
      
      // Continue animation loop
      current.animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    if (globeRef.current) {
      globeRef.current.animationId = animationId;
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!globeRef.current || !containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      globeRef.current.camera.aspect = width / height;
      globeRef.current.camera.updateProjectionMatrix();
      globeRef.current.renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (globeRef.current && globeRef.current.animationId !== null) {
        cancelAnimationFrame(globeRef.current.animationId);
      }
      
      // Dispose geometries and materials
      if (globeRef.current) {
        arcs.forEach(arc => {
          arc.geometry.dispose();
          (arc.material as THREE.Material).dispose();
          scene.remove(arc);
        });
        
        points.geometry.dispose();
        (points.material as THREE.Material).dispose();
        scene.remove(points);
        
        globe.geometry.dispose();
        (globe.material as THREE.Material).dispose();
        scene.remove(globe);
        
        renderer.dispose();
      }
    };
  }, [width, height]);
  
  return (
    <div ref={containerRef} className="w-full h-full" />
  );
};

export default GlobeThreeJs;
