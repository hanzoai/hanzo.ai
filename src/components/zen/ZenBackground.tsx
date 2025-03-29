
import React from "react";
import JapaneseWave from "./JapaneseWave";
import CherryBlossom from "./CherryBlossom";

const ZenBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900/30 to-black/80"></div>
      <CherryBlossom count={10} className="opacity-50" />
      <JapaneseWave 
        color="#9b87f5" 
        height={600} 
        opacity={0.006} 
        speed={90} 
        className="absolute bottom-0"
      />
      <JapaneseWave 
        color="#6E59A5" 
        height={600} 
        delay={5} 
        opacity={0.004} 
        speed={95} 
        className="absolute bottom-40"
      />
    </div>
  );
};

export default ZenBackground;
