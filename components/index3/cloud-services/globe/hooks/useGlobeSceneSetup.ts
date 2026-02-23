
import * as THREE from 'three';

// Sets up the basic Three.js scene, camera and renderer
export const setupScene = (
  containerRef: React.RefObject<HTMLDivElement>,
  width: number,
  height: number
): {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
} | null => {
  if (!containerRef.current) return null;
  
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
  
  return { scene, camera, renderer };
};

// Handles window resize
export const handleResize = (
  containerRef: React.RefObject<HTMLDivElement>,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  width: number,
  height: number
) => {
  const newWidth = containerRef.current?.clientWidth || width;
  const newHeight = containerRef.current?.clientHeight || height;
  
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(newWidth, newHeight);
};

// Cleans up Three.js resources
export const cleanupScene = (
  containerRef: React.RefObject<HTMLDivElement>,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer
) => {
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
};
