
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
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-black">
        <div className="text-center">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white" initial="hidden" animate="visible" variants={titleVariants} onAnimationComplete={() => setAnimationComplete(true)}>
            <motion.span className="inline-flex items-center">
              {titleLetters1.map((letter, index) => <motion.span key={index} variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>)}
            </motion.span>
            
            {/* Reduced the margin-top (mt) value by 25% from the default spacing */}
            <motion.span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent pb-3 overflow-visible mt-[-0.5rem]" initial="hidden" animate={animationComplete ? "visible" : "hidden"} variants={titleVariants} onAnimationComplete={() => setTitleAnimationComplete(true)}>
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
        }} className="mt-20 rounded-xl bg-gray-900/50 p-8 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Terminal className="text-blue-400" size={20} />
                <h2 className="text-xl font-semibold text-blue-400">Quick Install</h2>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="text-gray-400 hover:text-blue-400 cursor-help w-4 h-4" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Docker will be automatically installed if not present on your system. Cannot be run inside a container.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="bg-black/50 rounded-lg p-4 mb-4 flex items-center justify-between group">
              <pre className="overflow-x-auto">
                <code className="text-gray-300">curl -sL hanzo.sh | sh</code>
              </pre>
              <button onClick={handleCopy} className="text-gray-400 hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" aria-label="Copy to clipboard">
                <ClipboardCopy size={20} />
              </button>
            </div>
            <div className="text-sm text-gray-400">
              <p>One command to install the complete Hanzo development platform. Compatible with Mac (Intel & Apple Silicon) and Linux systems.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};

export default Hero;
