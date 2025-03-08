
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal, ClipboardCopy, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { toast } = useToast();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -sL hanzo.sh | sh");
    toast({
      description: "Command copied to clipboard!",
      duration: 2000
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  const titleText1 = "Build as fast";
  const titleText2 = "as you Dream";
  const titleLetters1 = titleText1.split("");
  const titleLetters2 = titleText2.split("");
  
  return <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

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
        }
        
        .vercel-button:hover::before {
          opacity: 1;
          filter: brightness(0.3);
          background: linear-gradient(
            90deg,
            rgb(60, 62, 66),
            rgb(100, 100, 100),
            rgb(80, 82, 85),
            rgb(60, 62, 66)
          );
        }

        .docs-button {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        
        .docs-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgb(70, 70, 70),
            rgb(120, 120, 120),
            rgb(90, 90, 90),
            rgb(70, 70, 70)
          );
          background-size: 300% 100%;
          z-index: -1;
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        
        .docs-button:hover::before {
          opacity: 1;
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #f5f5f5,
            #ffffff,
            #e0e0e0,
            #f5f5f5
          );
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: textGradient 8s ease infinite;
        }
        
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .chrome-text {
          position: relative;
          background: linear-gradient(
            135deg,
            #e6e6e6 0%,
            #ffffff 25%,
            #e6e6e6 50%,
            #cccccc 75%,
            #e6e6e6 100%
          );
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          transition: all 0.2s ease;
        }
        
        .underline-you {
          position: relative;
          display: inline-block;
        }
        
        .underline-you::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            #e6e6e6,
            #ffffff,
            #e6e6e6
          );
          transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .underline-you.active::after {
          width: 100%;
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center bg-black/0">
          <motion.h1 
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans tracking-tight text-white" 
            initial="hidden" 
            animate="visible" 
            variants={titleVariants} 
            onAnimationComplete={() => setAnimationComplete(true)}
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            <motion.span className="inline-flex items-center chrome-text">
              {titleLetters1.map((letter, index) => <motion.span key={index} variants={letterVariants} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>)}
            </motion.span>
            
            <motion.span 
              className="block text-white pb-3 overflow-visible chrome-text" 
              initial="hidden" 
              animate={animationComplete ? "visible" : "hidden"} 
              variants={titleVariants} 
              onAnimationComplete={() => setTitleAnimationComplete(true)}
            >
              {titleLetters2.map((letter, index) => {
                if (letter === "y" && titleLetters2[index+1] === "o" && titleLetters2[index+2] === "u") {
                  return (
                    <motion.span 
                      key={index} 
                      variants={letterVariants} 
                      className={`inline-block underline-you ${titleAnimationComplete ? 'active' : ''}`}
                    >
                      you
                    </motion.span>
                  );
                } else if ((letter === "o" || letter === "u") && titleLetters2[index-1] === "y" && titleLetters2[index-2] !== " ") {
                  return null;
                } else {
                  return (
                    <motion.span key={index} variants={letterVariants} className="inline-block">
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  );
                }
              })}
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
            Build as fast as you think. Design, Engineer, and Market AI-powered applications with our unified platform.
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
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10 docs-button">
              <a href="https://docs.hanzo.sh" className="gradient-text">Read Docs →</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Hero;
