import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal, ClipboardCopy, Info, Rocket, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const { toast } = useToast();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -sL hanzo.sh | sh");
    toast({
      description: "Command copied to clipboard!",
      duration: 2000
    });
  };

  const titleVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15
      }
    }
  };
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  const titleText1 = "Build as fast";
  const titleText2 = "as you think";
  const titleLetters1 = titleText1.split("");
  const titleLetters2 = titleText2.split("");

  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-black">
        <div className="text-center pt-12 md:pt-18"> {/* Increased padding above the title by 50% */}
          <motion.h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white" initial="hidden" animate="visible" variants={titleVariants} onAnimationComplete={() => setAnimationComplete(true)}>
            <motion.span className="inline-flex items-center">
              {titleLetters1.map((letter, index) => <motion.span key={index} variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>)}
            </motion.span>
            
            <motion.span className="block bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent pb-3 overflow-visible mt-[-0.5rem]" initial="hidden" animate={animationComplete ? "visible" : "hidden"} variants={titleVariants} onAnimationComplete={() => setTitleAnimationComplete(true)}>
              {titleLetters2.map((letter, index) => <motion.span key={index} variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>)}
            </motion.span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: titleAnimationComplete ? 1 : 0,
          y: titleAnimationComplete ? 0 : 20
        }} transition={{
          duration: 0.4,
          delay: 0.25
        }} className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Design, Engineer, and Market AI-powered applications with our unified platform.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: titleAnimationComplete ? 1 : 0,
          y: titleAnimationComplete ? 0 : 20
        }} transition={{
          duration: 0.4,
          delay: 0.35
        }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center mb-18"> {/* Increased padding below the buttons by 50% */}
            <Button 
              size="lg" 
              className={cn(
                "text-lg px-8 bg-white text-black hover:bg-none transition-all duration-300 relative overflow-hidden group",
                isButtonHovered ? "text-white" : "hover:text-white"
              )}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"
              )} 
              style={{
                backgroundSize: '200% 200%',
                animation: isButtonHovered ? 'gradient-animation 2s ease infinite' : 'none'
              }}
              />
              <style global>{`
                @keyframes gradient-animation {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}</style>
              <span className="relative z-10">
                <a href="https://hanzo.app">Launch App</a>
              </span>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10">
              <a href="https://docs.hanzo.sh">Read Docs</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>;
};

export default Hero;
