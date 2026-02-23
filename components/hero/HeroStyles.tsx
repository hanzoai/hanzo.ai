
import React from "react";

const HeroStyles: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      .vercel-button {
        background: white;
        color: black;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transition: color 0.3s ease;
      }
      
      .vercel-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          90deg,
          rgb(139, 143, 152),
          rgb(247, 248, 248),
          rgb(201, 203, 207),
          rgb(139, 143, 152)
        );
        background-size: 300% 100%;
        z-index: -1;
        transition: opacity 0.3s ease;
        opacity: 0;
        animation: vercelGradient 4s ease alternate infinite;
        filter: blur(0px);
      }
      
      @keyframes vercelGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; filter: blur(2px); }
        100% { background-position: 0% 50%; }
      }
      
      .vercel-button:hover {
        color: white;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
      }
      
      .vercel-button:hover::before {
        opacity: 1;
        filter: brightness(0.3);
        background: linear-gradient(
          90deg,
          rgb(60, 62, 66),
          rgb(100, 100, 100),
          rgb(80, 82, 85),
          rgb(60, 62, 66)
        );
      }

      .docs-button {
        position: relative;
        z-index: 1;
        overflow: hidden;
      }
      
      .docs-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          90deg,
          rgb(70, 70, 70),
          rgb(120, 120, 120),
          rgb(90, 90, 90),
          rgb(70, 70, 70)
        );
        background-size: 300% 100%;
        z-index: -1;
        transition: opacity 0.3s ease;
        opacity: 0;
      }
      
      .docs-button:hover::before {
        opacity: 1;
      }

      .gradient-text {
        background: linear-gradient(
          90deg,
          #f5f5f5,
          #ffffff,
          #e0e0e0,
          #f5f5f5
        );
        background-size: 300% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: textGradient 8s ease infinite;
      }
      
      @keyframes textGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .chrome-text {
        position: relative;
        background: linear-gradient(
          135deg,
          #e6e6e6 0%,
          #ffffff 25%,
          #e6e6e6 50%,
          #cccccc 75%,
          #e6e6e6 100%
        );
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: all 0.2s ease;
      }
      
      .underline-you {
        position: relative;
        display: inline-block;
      }
      
      .underline-you::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          #e6e6e6,
          #ffffff,
          #e6e6e6
        );
        transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      }
      
      .underline-you.active::after {
        width: 100%;
      }
    `}} />
  );
};

export default HeroStyles;
