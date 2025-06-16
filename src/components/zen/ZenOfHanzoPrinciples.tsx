import React, { useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import ZenPrincipleCard from "./ZenPrincipleCard";
import { principles } from "./data/zenPrinciples";

const ZenOfHanzoPrinciples: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);
  
  // Get unique disciplines from principles data
  const disciplines = Array.from(new Set(principles.map(p => p.discipline)));

  const filteredPrinciples = selectedDiscipline
    ? principles.filter(p => p.discipline === selectedDiscipline)
    : principles;

  return (
    <div className="mt-16 mb-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--white)]">Engineering Principles</h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          Time-tested principles guiding the development of next-generation AI systems and applications
        </p>
        <div className="h-px w-20 bg-gray-700 mx-auto mt-6"></div>
      </motion.div>

      {/* Discipline Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          className={`px-3 py-1 rounded-full text-sm ${
            selectedDiscipline === null 
              ? "bg-white/20 text-white" 
              : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
          } transition-colors`}
          onClick={() => setSelectedDiscipline(null)}
        >
          All Disciplines
        </button>
        {disciplines.map(discipline => (
          <button
            key={discipline}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedDiscipline === discipline 
                ? "bg-white/20 text-white" 
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
            } transition-colors`}
            onClick={() => setSelectedDiscipline(discipline)}
          >
            {discipline}
          </button>
        ))}
      </div>

      {/* Display count of displayed principles */}
      <div className="text-center mb-8 text-neutral-500">
        {selectedDiscipline ? (
          <p>Showing principles from the {selectedDiscipline} discipline</p>
        ) : (
          <p>Showing all engineering principles across disciplines</p>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPrinciples.map((principle, index) => (
          <ZenPrincipleCard 
            key={principle.number} 
            principle={principle} 
            index={index} 
          />
        ))}
      </div>
      
      <div className="text-center mt-16">
        <div className="bg-white/5 rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Apply These Principles</h3>
          <p className="text-neutral-400 mb-6">
            Ready to build with these principles? Explore our documentation, try our models, or dive into our open-source platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.hanzo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--white)] text-black rounded-lg hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] border border-transparent transition-all duration-300"
            >
              Read Documentation
            </a>
            <a
              href="/platform"
              className="px-6 py-3 bg-transparent border border-white/20 text-white hover:bg-[var(--white)] hover:text-black rounded-lg transition-all duration-300"
            >
              Explore Platform
            </a>
            <a
              href="https://github.com/hanzoai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-white/20 text-white hover:bg-[var(--white)] hover:text-black rounded-lg transition-all duration-300"
            >
              Open Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZenOfHanzoPrinciples;