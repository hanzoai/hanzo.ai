
import React from "react";
import { motion } from "framer-motion";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--black)]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 70%)",
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default MainSection;
