
import React from "react";
import JapaneseWave from "./JapaneseWave";

const ZenBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900/20"></div>
      <JapaneseWave 
        color="#9b87f5" 
        height={600} 
        opacity={0.02} 
        speed={45} 
        className="absolute bottom-0"
      />
      <JapaneseWave 
        color="#6E59A5" 
        height={600} 
        delay={2} 
        opacity={0.015} 
        speed={50} 
        className="absolute bottom-40"
      />
    </div>
  );
};

export default ZenBackground;
