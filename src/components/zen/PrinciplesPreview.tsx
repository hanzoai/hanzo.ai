import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, X } from "lucide-react";
import { Link } from "react-router-dom";
import IChingHexagram from "./svg/IChingHexagram";
import { principles } from "./data/zenPrinciples";
import { HexagramLine } from "./types/hexagram";

interface WisdomDialogProps {
  principle: {
    name: string;
    chineseName: string;
    pinyin: string;
    principle: string;
    lines: HexagramLine[];
    wisdomText?: string;
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl max-w-md w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <IChingHexagram lines={principle.lines} size={32} className="text-white mr-4" />
                <div>
                  <h3 className="text-white text-xl font-medium">{principle.name}</h3>
                  <div className="text-neutral-400 text-sm">
                    {principle.chineseName} · {principle.pinyin}
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-4 text-neutral-200 font-medium">
              "{principle.principle}"
            </div>
            
            <div className="text-neutral-400 text-sm">
              {principle.wisdomText || "In the boundless void, patterns emerge. The wise engineer recognizes that structure itself is emptiness, and emptiness is structure. Through this understanding, they create systems that flow with, rather than against, the natural momentum of change."}
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <Link 
                to="/zen" 
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center justify-center"
              >
                <span>Explore more wisdom</span>
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PrinciplesPreview = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const previewHexagrams = [
    {
      id: "1",
      name: "Creative Force",
      chineseName: "乾",
      pinyin: "qián",
      principle: "Initiate with clear vision",
      wisdomText: "The Creative is heaven's foundation. The master engineer builds with vision that transcends the immediate, seeing potential where others perceive only obstacles. In initiating new endeavors, clarity of purpose illuminates the path forward.",
      lines: [
        { type: "solid" as const }, { type: "solid" as const }, { type: "solid" as const },
        { type: "solid" as const }, { type: "solid" as const }, { type: "solid" as const }
      ]
    },
    {
      id: "2",
      name: "Receptive Force",
      chineseName: "坤",
      pinyin: "kūn",
      principle: "Nurture with patience",
      wisdomText: "The Receptive is earth's foundation. The enlightened developer understands that cultivation requires space and time. Success comes not from forcing growth, but from creating the conditions where innovation naturally flourishes.",
      lines: [
        { type: "broken" as const }, { type: "broken" as const }, { type: "broken" as const },
        { type: "broken" as const }, { type: "broken" as const }, { type: "broken" as const }
      ]
    },
    {
      id: "8",
      name: "Unity",
      chineseName: "比",
      pinyin: "bǐ",
      principle: "Unite teams through shared purpose",
      wisdomText: "When teams align with genuine purpose, productivity transforms from mere output to meaningful creation. The wise leader cultivates unity not through mandate but through shared vision that resonates with each individual's journey.",
      lines: [
        { type: "broken" as const }, { type: "broken" as const }, { type: "broken" as const },
        { type: "broken" as const }, { type: "broken" as const }, { type: "solid" as const }
      ]
    },
    {
      id: "11",
      name: "Harmony",
      chineseName: "泰",
      pinyin: "tài",
      principle: "Align interfaces for natural flow",
      wisdomText: "When heaven and earth commune, prosperity follows. In software, when interfaces align with natural user expectations, friction disappears and harmony emerges. Design not what you can, but what you should.",
      lines: [
        { type: "broken" as const }, { type: "broken" as const }, { type: "broken" as const },
        { type: "solid" as const }, { type: "solid" as const }, { type: "solid" as const }
      ]
    },
    {
      id: "24",
      name: "Return",
      chineseName: "復",
      pinyin: "fù",
      principle: "Embrace continuous renewal",
      wisdomText: "After completion comes return; after complexity, simplicity. The cycle of renewal teaches that refactoring is not fixing what's broken, but honoring the natural evolution of code as understanding deepens.",
      lines: [
        { type: "solid" as const }, { type: "broken" as const }, { type: "broken" as const },
        { type: "broken" as const }, { type: "broken" as const }, { type: "broken" as const }
      ]
    },
    {
      id: "30",
      name: "Illumination",
      chineseName: "離",
      pinyin: "lí",
      principle: "Bring clarity through documentation",
      wisdomText: "As the sun illuminates the earth, so does clarity illuminate understanding. Documentation is not an afterthought but a form of compassion for future developers and users who will walk the path you've cleared.",
      lines: [
        { type: "broken" as const }, { type: "solid" as const }, { type: "solid" as const },
        { type: "solid" as const }, { type: "solid" as const }, { type: "broken" as const }
      ]
    },
    {
      id: "33",
      name: "Retreat",
      chineseName: "遯",
      pinyin: "dùn",
      principle: "Know when to refactor and simplify",
      wisdomText: "Strategic withdrawal is not defeat but wisdom. When complexity multiplies, the master engineer knows to step back, simplify, and create space for sustainable solutions to emerge naturally.",
      lines: [
        { type: "solid" as const }, { type: "solid" as const }, { type: "solid" as const },
        { type: "solid" as const }, { type: "solid" as const }, { type: "broken" as const }
      ]
    },
    {
      id: "63",
      name: "After Completion",
      chineseName: "既济",
      pinyin: "jì jì",
      principle: "Balance attained leads to new beginnings",
      wisdomText: "After completion, vigilance remains essential. Even perfect systems require maintenance and evolution. The wise engineer celebrates success briefly, then prepares for the next transformation that inevitability approaches.",
      lines: [
        { type: "solid" as const }, { type: "broken" as const }, { type: "solid" as const },
        { type: "broken" as const }, { type: "solid" as const }, { type: "broken" as const }
      ]
    }
  ];

  const openWisdomDialog = (principle: any) => {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
            The 88 Principles
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Ancient wisdom reimagined for modern engineering. Each principle guides a different 
            aspect of building remarkable software.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewHexagrams.map((hexagram, index) => (
            <motion.div
              key={hexagram.id}
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
              className="bg-gradient-to-br from-gray-900/40 to-gray-950/70 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 relative overflow-hidden group"
              onClick={() => openWisdomDialog(hexagram)}
            >
              <div className="absolute top-2 right-2 text-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info size={16} />
              </div>
              
              <div className="flex items-center mb-4">
                <IChingHexagram lines={hexagram.lines} size={36} className="text-white mr-4 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="text-white text-lg font-medium">{hexagram.name}</h3>
                  <div className="text-neutral-500 text-sm">
                    {hexagram.chineseName} · {hexagram.pinyin}
                  </div>
                </div>
              </div>
              <p className="text-neutral-400 text-sm mb-4">{hexagram.principle}</p>
              
              <motion.div 
                className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                initial={false}
                whileHover={{ scale: 1.05, opacity: 0.1 }}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/zen" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors group">
            <span className="group-hover:underline">Explore all principles</span>
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
