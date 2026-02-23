'use client'


import { motion, useScroll, useTransform } from "framer-motion";
import { AppWindow, Rocket, Bot, ShoppingCart } from "lucide-react";
import { Button } from "@hanzo/ui";
import { useRef } from "react";

const quickApps = [{
  icon: <Bot className="h-6 w-6 text-[var(--white)]" />,
  title: "AI Chat Assistant",
  description: "Launch your own ChatGPT-style AI assistant",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]",
  borderColor: "group-hover:border-white/20"
}, {
  icon: <ShoppingCart className="h-6 w-6 text-[var(--white)]" />,
  title: "E-commerce Store",
  description: "Start selling products online in minutes",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]",
  borderColor: "group-hover:border-white/20"
}, {
  icon: <AppWindow className="h-6 w-6 text-[var(--white)]" />,
  title: "Web3 dApp",
  description: "Build a decentralized application",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]",
  borderColor: "group-hover:border-white/20"
}, {
  icon: <Rocket className="h-6 w-6 text-[var(--white)]" />,
  title: "Custom App",
  description: "Start from scratch with our App Builder",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]",
  borderColor: "group-hover:border-white/20"
}];

const QuickStart = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create parallax transforms with different speeds
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [50, -20]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-12 relative overflow-hidden bg-[var(--black)]"
    >
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black bg-black/[0.12] z-0"
        style={{ y: backgroundY }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[128px] relative z-10">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          className="text-center mb-12"
          style={{ y: titleY }}
        >
          <h2 className="text-3xl font-display text-[var(--white)] mb-4">
            Quick Launch Apps
          </h2>
          <motion.p 
            className="text-lg text-neutral-400"
            style={{ y: descriptionY }}
          >
            Get started quickly with our pre-built templates
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ y: cardsY }}
        >
          {quickApps.map((app, index) => <motion.div 
            key={app.title} 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              delay: index * 0.1
            }} 
            whileHover={{
              scale: 1.08,
              rotate: 2,
              transition: {
                type: "spring",
                stiffness: 2500,
                damping: 8,
                duration: 0.02
              }
            }} 
            whileTap={{
              scale: 0.95,
              rotate: -2,
              transition: {
                type: "spring",
                stiffness: 2500,
                damping: 8,
                duration: 0.02
              }
            }} 
            className={`group relative p-6 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30 backdrop-blur-sm rounded-xl 
                border border-white/5 transition-all duration-50 hover:border-white/10 ${app.glowColor} ${app.borderColor}`}>
              <div className="p-3 rounded-lg w-fit bg-[var(--white)]/5 text-[var(--white)] mx-auto">
                {app.icon}
              </div>
              
              <p className="mt-2 text-neutral-400 text-center">{app.description}</p>
              <Button className="mt-4 w-full bg-[var(--white)]/5 hover:bg-[var(--white)]/10 text-[var(--white)] border border-white/10
                  transition-all duration-300 hover:border-white/20" variant="outline">
                Launch App
                <Rocket className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>)}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStart;
