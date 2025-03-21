
import React from "react";

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    </div>
  );
};

export default Background;
