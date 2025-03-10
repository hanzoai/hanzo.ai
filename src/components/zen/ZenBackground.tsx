
import React from "react";
import JapaneseWave from "./JapaneseWave";

const ZenBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900/20"></div>
      <JapaneseWave 
        color="#9b87f5" 
        height={600} 
        opacity={0.008} 
        speed={70} 
        className="absolute bottom-0"
      />
      <JapaneseWave 
        color="#6E59A5" 
        height={600} 
        delay={5} 
        opacity={0.006} 
        speed={75} 
        className="absolute bottom-40"
      />
    </div>
  );
};

export default ZenBackground;
