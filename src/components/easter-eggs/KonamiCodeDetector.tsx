import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

interface KonamiCodeDetectorProps {
  onCodeComplete?: () => void;
}

const KonamiCodeDetector: React.FC<KonamiCodeDetectorProps> = ({ onCodeComplete }) => {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeysPressed = [...keysPressed, e.key];
      
      // Only keep the most recent entries that could match the Konami code
      if (newKeysPressed.length > KONAMI_CODE.length) {
        newKeysPressed.shift();
      }
      
      setKeysPressed(newKeysPressed);
      
      // Check if Konami code is completed
      const isKonamiCode = newKeysPressed.length === KONAMI_CODE.length &&
        newKeysPressed.every((key, index) => key === KONAMI_CODE[index]);
      
      if (isKonamiCode) {
        if (onCodeComplete) {
          onCodeComplete();
        } else {
          navigate('/zen');
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keysPressed, navigate, onCodeComplete]);
  
  // This component doesn't render anything
  return null;
};

export default KonamiCodeDetector;
