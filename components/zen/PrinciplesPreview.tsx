'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, X } from "lucide-react";
import Link from "next/link";
import { principles } from "./data/zenPrinciples";

interface WisdomDialogProps {
  principle: {
    number: string;
    title: string;
    description: string;
    discipline: string;
    emoji: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const WisdomDialog: React.FC<WisdomDialogProps> = ({ principle, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-gray-900 to-background border border-border rounded-2xl max-w-md w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full text-foreground mr-3">
                  {principle.emoji}
                </div>
                <div>
                  <h3 className="text-foreground text-xl font-medium">{principle.title}</h3>
                  <div className="text-muted-foreground text-sm">
                    {principle.discipline}
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-4 text-neutral-200 font-medium">
              "{principle.description}"
            </div>
            
            <div className="text-muted-foreground text-sm">
              Deep mastery of this principle leads to engineering excellence. Apply it consistently to create systems that are elegant, resilient, and sustainable.
            </div>
            
            <div className="mt-6 pt-4 border-t border-border text-center">
              <Link 
                href="/philosophy" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center justify-center"
              >
                <span>Explore more principles</span>
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface Principle {
  number: string;
  title: string;
  description: string;
  discipline: string;
  emoji: string;
}

const PrinciplesPreview = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<Principle | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);

  // Get unique disciplines from principles
  const disciplines = Array.from(new Set(principles.map(p => p.discipline)));

  // Get 8 representative principles - one from each discipline
  const previewPrinciples = disciplines.map(discipline => {
    return principles.find(p => p.discipline === discipline);
  }).filter(Boolean);

  const openWisdomDialog = (principle: Principle) => {
    setSelectedPrinciple(principle);
    setIsDialogOpen(true);
  };

  const closeWisdomDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="py-24 px-4 relative" id="principles">
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,20,1) 100%)"
        }}
      />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
            Zen of Hanzo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering principles rooted in ancient wisdom, designed for modern developers building 
            next-generation AI systems and applications.
          </p>
        </motion.div>
        
        {/* Discipline Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              selectedDiscipline === null 
                ? "bg-primary/20 text-foreground" 
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
            } transition-colors`}
            onClick={() => setSelectedDiscipline(null)}
          >
            All
          </button>
          {disciplines.map(discipline => (
            <button
              key={discipline}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedDiscipline === discipline 
                  ? "bg-primary/20 text-foreground" 
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300"
              } transition-colors`}
              onClick={() => setSelectedDiscipline(discipline)}
            >
              {discipline}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(selectedDiscipline 
            ? previewPrinciples.filter(p => p?.discipline === selectedDiscipline)
            : previewPrinciples
          ).map((principle, index) => principle && (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-gray-900/40 to-gray-950/70 border border-border rounded-2xl p-6 hover:border-white/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              onClick={() => openWisdomDialog(principle)}
            >
              <div className="absolute top-2 right-2 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info size={16} />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-lg">
                  {principle.emoji}
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-medium">{principle.title}</h3>
                  <div className="text-muted-foreground text-sm">
                    {principle.discipline}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{principle.description}</p>
              
              <motion.div 
                className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                initial={false}
                whileHover={{ scale: 1.05, opacity: 0.1 }}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/philosophy" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group">
            <span className="group-hover:underline">Learn more principles</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {selectedPrinciple && (
        <WisdomDialog 
          principle={selectedPrinciple} 
          isOpen={isDialogOpen} 
          onClose={closeWisdomDialog} 
        />
      )}
    </section>
  );
};

export default PrinciplesPreview;