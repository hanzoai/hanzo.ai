
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { latLongToVector3 } from '../globeUtils';
import { majorCities, continents } from '../globeData';

export interface GlobeSceneRef {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  globe: THREE.Mesh;
  arcs: THREE.Line[];
  pointsGroup: THREE.Group;
  countryLinesGroup: THREE.Group;
  raycaster: THREE.Raycaster;
  mouse: THREE.Vector2;
  animationId: number | null;
}

export const useGlobeScene = (
  containerRef: React.RefObject<HTMLDivElement>,
  width: number,
  height: number
): GlobeSceneRef | null => {
  const globeRef = useRef<GlobeSceneRef | null>(null);
  
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
    
    // Create the scene objects
    const { globe, wireframe, arcs } = createGlobeObjects(scene, pointsGroup, countryLinesGroup);
    scene.add(wireframe);
    
    // Add lighting to the scene
    addLighting(scene);
    
    // Raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
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
        disposeGlobeResources(globeRef.current, scene, renderer);
      }
    };
  }, [width, height]);
  
  return globeRef.current;
};

// Helper function to create globe objects
const createGlobeObjects = (
  scene: THREE.Scene, 
  pointsGroup: THREE.Group, 
  countryLinesGroup: THREE.Group
) => {
  const GLOBE_RADIUS = 1;
  
  // Create globe sphere - slightly transparent
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
  
  // Add country outlines
  addCountryOutlines(countryLinesGroup, GLOBE_RADIUS);
  
  // Add city points and traffic arcs
  const { arcs } = addCitiesAndTraffic(pointsGroup, GLOBE_RADIUS);
  
  return { globe, wireframe, arcs };
};

// Helper function to add country outlines
const addCountryOutlines = (countryLinesGroup: THREE.Group, radius: number) => {
  continents.forEach(continent => {
    if (continent.length < 2) return; // Need at least 2 points to draw a line
    
    const points = continent.map(coord => 
      latLongToVector3(coord.lat, coord.lon, radius * 1.001) // Slightly above the surface
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
};

// Helper function to add cities and traffic
const addCitiesAndTraffic = (pointsGroup: THREE.Group, radius: number) => {
  const arcs: THREE.Line[] = [];
  const pointsGeometry = new THREE.BufferGeometry();
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x80ccff,
    size: 0.05,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  });
  
  // Create city points
  const cityPositions: THREE.Vector3[] = [];
  const cityData: {position: THREE.Vector3, name: string, size: number}[] = [];
  
  majorCities.forEach((city) => {
    const position = latLongToVector3(city.lat, city.lon, radius);
    cityPositions.push(position);
    cityData.push({
      position,
      name: city.name || `City at ${city.lat}, ${city.lon}`,
      size: city.size || 2
    });
  });
  
  // Add some random points around the globe
  for (let i = 0; i < 30; i++) {
    const lat = (Math.random() * 180) - 90;
    const lon = Math.random() * 360 - 180;
    const position = latLongToVector3(lat, lon, radius);
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
  createTrafficArcs(arcs, cityPositions, radius);
  
  return { arcs };
};

// Helper function to create traffic arcs
const createTrafficArcs = (arcs: THREE.Line[], cityPositions: THREE.Vector3[], radius: number) => {
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
      radius,
      `hsl(${hue}, 80%, 70%)`,
      50
    );
    
    // Start with low opacity
    (arc.material as THREE.LineBasicMaterial).opacity = 0.1 + Math.random() * 0.3;
    
    arcs.push(arc);
  }
};

// Helper function to create an arc
const createArc = (
  start: THREE.Vector3, 
  end: THREE.Vector3, 
  radius: number, 
  color: string = "#88ccff", 
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

// Helper function to add lighting
const addLighting = (scene: THREE.Scene) => {
  // Add ambient light for base illumination
  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);
  
  // Add directional light for shading
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);
};

// Helper function to dispose globe resources
const disposeGlobeResources = (
  globeRef: GlobeSceneRef, 
  scene: THREE.Scene, 
  renderer: THREE.WebGLRenderer
) => {
  globeRef.arcs.forEach(arc => {
    arc.geometry.dispose();
    (arc.material as THREE.Material).dispose();
    scene.remove(arc);
  });
  
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.geometry.dispose();
      
      if (Array.isArray(object.material)) {
        object.material.forEach(material => material.dispose());
      } else {
        object.material.dispose();
      }
    }
  });
  
  renderer.dispose();
};
