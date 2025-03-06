
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal, ClipboardCopy, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

const Hero = () => {
  const { toast } = useToast();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -sL hanzo.sh | sh");
    toast({
      description: "Command copied to clipboard!",
      duration: 2000
    });
  };

  // Animation variants for the text with moderate timing
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

  // Split text for individual letter animations
  const titleText1 = "Build as fast";
  const titleText2 = "as you think";
  const titleLetters1 = titleText1.split("");
  const titleLetters2 = titleText2.split("");
  
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Changed from gradient to solid black to prevent flash */}
      <div className="absolute inset-0 bg-black" />

      {/* Add the keyframes animation here but using style jsx syntax without the global attribute */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rainbowGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .rainbow-btn:hover {
          background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff);
          background-size: 200% 200%;
          animation: rainbowGradient 3s ease infinite;
          color: white;
          border: none;
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center bg-black/0">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white" initial="hidden" animate="visible" variants={titleVariants} onAnimationComplete={() => setAnimationComplete(true)}>
            <motion.span className="inline-flex items-center">
              {titleLetters1.map((letter, index) => <motion.span key={index} variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>)}
            </motion.span>
            
            <motion.span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent pb-3 overflow-visible" initial="hidden" animate={animationComplete ? "visible" : "hidden"} variants={titleVariants} onAnimationComplete={() => setTitleAnimationComplete(true)}>
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
            Featuring streaming AI, UI components, and a real-time database - everything you need to build modern apps.
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
        }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className={`text-lg px-8 bg-white text-black hover:bg-gray-200 rainbow-btn`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="https://hanzo.app">Launch App</a>
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
