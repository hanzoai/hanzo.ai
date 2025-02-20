
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Terminal, ClipboardCopy, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -sL hanzo.sh | sudo sh");
    toast({
      description: "Command copied to clipboard!",
      duration: 2000,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white"
          >
            Build as fast
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              as you think
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Design, Engineer, and Market AI-powered applications with our unified platform.
            Featuring streaming AI, UI components, and a real-time database - everything you need to build modern apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 bg-white text-black hover:bg-gray-200">
              <a href="https://hanzo.app">Launch App</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10"
            >
              <a href="https://docs.hanzo.sh">Read Docs</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 rounded-xl bg-gray-900/50 p-8 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="text-blue-400" size={20} />
            <h2 className="text-xl font-semibold text-blue-400">Quick Install</h2>
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
              <code className="text-gray-300">curl -sL <a href="https://hanzo.sh" className="text-blue-400 hover:underline">hanzo.sh</a> | sudo sh</code>
            </pre>
            <button
              onClick={handleCopy}
              className="text-gray-400 hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Copy to clipboard"
            >
              <ClipboardCopy size={20} />
            </button>
          </div>
          <div className="space-y-2 text-sm text-gray-400">
            <p>One command to install the complete Hanzo development platform.</p>
            <p>Compatible with Mac (Intel & Apple Silicon) and Linux systems.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
