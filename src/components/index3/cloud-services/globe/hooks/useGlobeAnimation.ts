
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GlobeSceneRef } from './useGlobeScene';

export const useGlobeAnimation = (globeRef: GlobeSceneRef | null) => {
  const animationFrameRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!globeRef) return;
    
    // Rotation speed
    const rotationSpeed = 0.0005;
    
    // Animation loop
    const animate = () => {
      if (!globeRef) return;
      
      const { globe, arcs, pointsGroup, countryLinesGroup, scene, camera, renderer } = globeRef;
      
      // Auto rotate the globe - very slow and smooth
      globe.rotation.y += rotationSpeed;
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
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [globeRef]);
  
  return animationFrameRef.current;
};
