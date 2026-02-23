'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@hanzo/ui/separator";
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
    <div className="mt-16 mb-24 px-4" id="principles">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--white)]">Our Principles</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Time-tested principles guiding the development of next-generation AI systems and applications
        </p>
        <div className="h-px w-20 bg-gray-700 mx-auto mt-6"></div>
      </motion.div>

      {/* Sticky Discipline Filter */}
      <div className="sticky top-0 z-40 bg-[var(--black)]/95 backdrop-blur-sm border-b border-gray-800/50 py-6 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedDiscipline === null 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"
            }`}
            onClick={() => setSelectedDiscipline(null)}
          >
            All Disciplines
          </button>
          {disciplines.map(discipline => (
            <button
              key={discipline}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedDiscipline === discipline 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"
              }`}
              onClick={() => setSelectedDiscipline(discipline)}
            >
              {discipline}
            </button>
          ))}
        </div>
        
        {/* Display count of displayed principles */}
        <div className="text-center mt-4 text-muted-foreground text-sm">
          {selectedDiscipline ? (
            <p>Showing principles from the {selectedDiscipline} discipline</p>
          ) : (
            <p>Showing all engineering principles across {disciplines.length} disciplines</p>
          )}
        </div>
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
        <div className="bg-primary/5 rounded-xl p-8 border border-border max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Apply These Principles</h3>
          <p className="text-muted-foreground mb-6">
            Ready to build with these principles? Explore our documentation, try our models, or dive into our open-source platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.hanzo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Read Documentation
            </a>
            <a
              href="/platform"
              className="px-6 py-3 bg-transparent border border-border text-foreground hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
            >
              Explore Platform
            </a>
            <a
              href="https://github.com/hanzoai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-border text-foreground hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
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