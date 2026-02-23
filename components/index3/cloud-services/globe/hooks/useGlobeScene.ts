'use client'


import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { majorCities, continents } from '../globeData';
import { createGlobe, createGlowEffect, createCountryOutlines } from './useGlobeElements';
import { createConnectionPoints, createConnectionArcs } from './useGlobeConnections';
import { setupScene, handleResize, cleanupScene } from './useGlobeSceneSetup';

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
    // Set up the scene
    const sceneSetup = setupScene(containerRef, width, height);
    if (!sceneSetup) return;
    
    const { scene, camera, renderer } = sceneSetup;
    
    // Create globe and add to scene
    const globe = createGlobe();
    scene.add(globe);
    
    // Add glow effect
    const glow = createGlowEffect();
    scene.add(glow);
    
    // Add country outlines
    const countryLinesGroup = createCountryOutlines();
    scene.add(countryLinesGroup);
    
    // Create connection points (data centers)
    const { pointsGroup, points } = createConnectionPoints();
    scene.add(pointsGroup);
    
    // Create connections (arcs) between points
    const arcs = createConnectionArcs(points);
    arcs.forEach(arc => scene.add(arc));
    
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
    const resizeHandler = () => {
      if (!globeRef.current) return;
      handleResize(containerRef, camera, renderer, width, height);
    };
    
    window.addEventListener('resize', resizeHandler);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeHandler);
      
      if (globeRef.current) {
        cleanupScene(containerRef, scene, renderer);
      }
    };
  }, [containerRef, width, height]);
  
  return globeRef.current;
};
