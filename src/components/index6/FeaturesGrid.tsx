import React from "react";
import { motion } from "framer-motion";
import { features } from "./data/featuresData";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, bgColor, iconColor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 30px -15px rgba(136, 58, 234, 0.5)",
        borderColor: "rgba(139, 92, 246, 0.5)" 
      }}
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 transition-all duration-300"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${bgColor}`}
      >
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </motion.div>
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
        className="text-xl font-bold mb-2 text-[var(--white)]"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        viewport={{ once: true }}
        className="text-neutral-400"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[var(--black)]/50 relative">
      {/* Animated background dots */}
      <motion.div 
        className="absolute inset-0 opacity-20 z-0 pointer-events-none"
        initial={{ backgroundPositionY: "0%" }}
        animate={{ backgroundPositionY: "100%" }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "reverse" }}
        style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--white)]"
        >
          The Complete AI Engineering Platform
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full mx-auto mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
