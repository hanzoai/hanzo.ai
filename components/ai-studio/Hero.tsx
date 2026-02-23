
import React from "react";
import ChromeText from "@/components/ui/chrome-text";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-white/20 to-white/10 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <ChromeText as="h1" className="text-4xl font-bold mb-2">
          Hanzo AI Studio
        </ChromeText>
        <p className="text-foreground/80 max-w-xl">
          Your workspace for AI model experimentation, prompt engineering, and creating agent-based applications.
        </p>
      </div>
    </div>
  );
};

export default Hero;
