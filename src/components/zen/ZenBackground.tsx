
import React from "react";

const ZenBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Pure, minimalist background with subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-gray-900/70 to-transparent" />
      <div className="absolute left-0 bottom-0 right-0 h-[40vh] bg-gradient-to-t from-gray-900/70 to-transparent" />
      
      {/* Radial gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(25,25,25,0), rgba(0,0,0,0.9))'
        }}
      />
      
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8)'
        }}
      />
    </div>
  );
};

export default ZenBackground;
