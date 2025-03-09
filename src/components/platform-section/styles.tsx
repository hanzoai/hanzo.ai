
import React from "react";

export const PlatformStyles: React.FC = () => {
  return (
    <style>
      {`
      .text-gradient-steel {
        background: linear-gradient(
          90deg,
          rgb(180, 180, 180),
          rgb(240, 240, 240),
          rgb(180, 180, 180)
        );
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: shimmer 6s ease infinite;
      }
      
      @keyframes shimmer {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
    </style>
  );
};

export default PlatformStyles;
