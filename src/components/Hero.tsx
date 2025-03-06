
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
      y: 20,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  // Split text for individual letter animations
  const titleText1 = "Plan and build";
  const titleText2 = "your product";
  const titleLetters1 = titleText1.split("");
  const titleLetters2 = titleText2.split("");
  
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Changed from gradient to solid black to prevent flash */}
      <div className="absolute inset-0 bg-black" />

      {/* Add the keyframes animation here but using style jsx syntax without the global attribute */}
      <style dangerouslySetInnerHTML={{ __html: `
        .vercel-button {
          background: white;
          color: black;
          position: relative;
          z-index: 1;
          overflow: hidden;
          transition: color 0.3s ease;
        }
        
        .vercel-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgb(139, 143, 152),
            rgb(247, 248, 248),
            rgb(201, 203, 207),
            rgb(139, 143, 152)
          );
          background-size: 300% 100%;
          z-index: -1;
          transition: opacity 0.3s ease;
          opacity: 0;
          animation: vercelGradient 4s ease alternate infinite;
          filter: blur(0px);
        }
        
        @keyframes vercelGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; filter: blur(2px); }
          100% { background-position: 0% 50%; }
        }
        
        .vercel-button:hover {
          color: white;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }
        
        .vercel-button:hover::before {
          opacity: 1;
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center bg-black/0">
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans tracking-tight text-white" initial="hidden" animate="visible" variants={titleVariants} onAnimationComplete={() => setAnimationComplete(true)}>
            <motion.span className="inline-flex items-center">
              {titleLetters1.map((letter, index) => <motion.span key={index} variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>)}
            </motion.span>
            
            <motion.span className="block bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent pb-3 overflow-visible" initial="hidden" animate={animationComplete ? "visible" : "hidden"} variants={titleVariants} onAnimationComplete={() => setTitleAnimationComplete(true)}>
              {titleLetters2.map((letter, index) => <motion.span key={index} variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>)}
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(8px)"
            }} 
            animate={{
              opacity: titleAnimationComplete ? 1 : 0,
              y: titleAnimationComplete ? 0 : 20,
              filter: titleAnimationComplete ? "blur(0px)" : "blur(8px)"
            }} 
            transition={{
              duration: 0.4,
              delay: 0.25
            }} 
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Linear is a purpose-built tool for modern 
            product development. Streamline issues, 
            projects, and product roadmaps.
          </motion.p>

          <motion.div 
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(8px)"
            }} 
            animate={{
              opacity: titleAnimationComplete ? 1 : 0,
              y: titleAnimationComplete ? 0 : 20,
              filter: titleAnimationComplete ? "blur(0px)" : "blur(8px)"
            }} 
            transition={{
              duration: 0.4,
              delay: 0.35
            }} 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 vercel-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="https://hanzo.app">Start building</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10">
              <a href="https://docs.hanzo.sh">Introducing Customer Requests →</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Hero;
