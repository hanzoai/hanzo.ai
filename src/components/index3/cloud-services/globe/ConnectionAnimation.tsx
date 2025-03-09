
import { useEffect, useRef } from "react";
import { useCanvasContext } from "./CanvasContext";

const ConnectionAnimation = () => {
  const { setConnectionPoints } = useCanvasContext();
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const animateConnections = () => {
      let activationIndex = 0;
      
      const activatePoints = () => {
        if (activationIndex < 24) { // Maximum number of points
          setConnectionPoints(prevPoints => {
            const newPoints = [...prevPoints];
            if (newPoints[activationIndex]) {
              newPoints[activationIndex] = { ...newPoints[activationIndex], active: true };
            }
            return newPoints;
          });
          
          activationIndex++;
          animationRef.current = setTimeout(activatePoints, 200) as unknown as number;
        } else {
          setTimeout(() => {
            setConnectionPoints(prevPoints => prevPoints.map(p => ({ ...p, active: false })));
            activationIndex = 0;
            animationRef.current = setTimeout(activatePoints, 1000) as unknown as number;
          }, 3000);
        }
      };
      
      animationRef.current = setTimeout(activatePoints, 500) as unknown as number;
    };
    
    animateConnections();
    
    return () => {
      if (animationRef.current !== null) {
        clearTimeout(animationRef.current);
      }
    };
  }, [setConnectionPoints]);

  return null;
};

export default ConnectionAnimation;
