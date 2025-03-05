
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal, ClipboardCopy, Info, Rocket, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

const Hero = () => {
  const { toast } = useToast();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

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
        <div className="text-center">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white" initial="hidden" animate="visible" variants={titleVariants} onAnimationComplete={() => setAnimationComplete(true)}>
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
            <Button size="lg" className="text-lg px-8 bg-white text-black hover:bg-gray-200">
              <a href="https://hanzo.app">Launch App</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10">
              <a href="https://docs.hanzo.sh">Read Docs</a>
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: titleAnimationComplete ? 1 : 0,
          y: titleAnimationComplete ? 0 : 40
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="mt-20 rounded-xl bg-gradient-to-br from-black to-gray-800 p-8 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-white/5 to-white/2 rounded-full blur-3xl border border-white/10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-white/5 to-white/2 rounded-full blur-3xl border border-white/10"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-gray-700 to-black rounded-lg">
                  <Rocket className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">Quick Install</h2>
                  <p className="text-gray-300 text-sm">Get started in seconds</p>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="text-gray-300 hover:text-white cursor-help w-5 h-5" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs bg-gray-800 text-white border-gray-700">
                    <p>Docker will be automatically installed if not present on your system. Cannot be run inside a container.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 mb-6 flex items-center justify-between group border border-gray-700 relative overflow-hidden"
            >
              <pre className="overflow-x-auto w-full">
                <code className="text-gray-200 font-mono flex items-center">
                  <Zap className="mr-2 text-yellow-400 inline-block" size={18} />
                  curl -sL hanzo.sh | sh
                </code>
              </pre>
              <motion.button 
                onClick={handleCopy} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100 bg-gray-700/50 p-2 rounded-md" 
                aria-label="Copy to clipboard"
              >
                <ClipboardCopy size={18} />
              </motion.button>
            </motion.div>
            
            <div className="text-sm text-gray-300 flex items-start space-x-2">
              <div className="min-w-4 pt-1">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-2 h-2 rounded-full bg-green-400"
                />
              </div>
              <p>One command to install the complete Hanzo development platform. Compatible with Mac (Intel & Apple Silicon) and Linux systems.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};

export default Hero;
