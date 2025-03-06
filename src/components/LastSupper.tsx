
import { motion } from "framer-motion";
import { LucideIcon, Sparkles, Zap, Flame } from "lucide-react";
import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  gradient: string;
}

const Firework = () => {
  const [visible, setVisible] = useState(true);
  const [particles, setParticles] = useState<number[]>([]);
  
  useEffect(() => {
    // Toggle main sparkle visibility
    const interval = setInterval(() => {
      setVisible(prev => !prev);
      
      // Generate new particles on each pulse
      if (particles.length < 8) {
        setParticles(prev => [...prev, Date.now()]);
      } else {
        setParticles(prev => {
          const newParticles = [...prev];
          newParticles.shift();
          return [...newParticles, Date.now()];
        });
      }
    }, 700);
    
    return () => clearInterval(interval);
  }, [particles]);
  
  return (
    <div className="absolute z-10">
      {/* Main sparkle */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: visible ? 1.5 : 0.9, 
          opacity: visible ? 1 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      >
        <Sparkles className="h-14 w-14 text-purple-500" />
      </motion.div>
      
      {/* Particle explosions */}
      {particles.map((id, index) => (
        <motion.div
          key={id}
          initial={{ scale: 0.2, opacity: 0, x: 0, y: 0 }}
          animate={{ 
            scale: 1,
            opacity: [0, 1, 0],
            x: [0, (index % 2 === 0 ? 1 : -1) * (20 + Math.random() * 30)],
            y: [0, (index % 3 === 0 ? 1 : -1) * (20 + Math.random() * 30)]
          }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {index % 3 === 0 ? (
            <Flame className={`h-8 w-8 text-orange-500`} />
          ) : index % 3 === 1 ? (
            <Zap className={`h-8 w-8 text-amber-400`} />
          ) : (
            <Sparkles className={`h-6 w-6 text-fuchsia-500`} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

const LastSupper = ({ members }: { members: TeamMember[] }) => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-48 flex items-center justify-center gap-4 overflow-x-auto"
        >
          {/* Fireworks animation in the middle */}
          <Firework />
          
          {members.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} p-4 mx-auto mb-2`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <p className="text-white font-medium">{member.name}</p>
                <p className="text-purple-400 text-sm">{member.role}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default LastSupper;
