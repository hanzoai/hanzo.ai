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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--white)]">The 64 Principles</h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          Eight disciplines, each with eight principles, guiding the path to enlightened engineering
        </p>
        <div className="h-px w-20 bg-gray-700 mx-auto mt-6"></div>
      </motion.div>

      {/* Discipline Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          className={`px-3 py-1 rounded-full text-sm ${
            selectedDiscipline === null 
              ? "bg-purple-500/30 text-purple-200" 
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
                ? "bg-purple-500/30 text-purple-200" 
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
          <p>Showing 8 principles from the {selectedDiscipline} discipline</p>
        ) : (
          <p>Showing all 64 principles across 8 disciplines</p>
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
      
      <div className="text-center mt-12">
        <p className="text-neutral-500 italic">
          "In code as in life, principles guide the path to enlightenment."
        </p>
      </div>
    </div>
  );
};

export default ZenOfHanzoPrinciples;