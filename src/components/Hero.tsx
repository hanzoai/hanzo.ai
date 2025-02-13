import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900" />

      {/* Content */}
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
            Design, Engineer, and Market AI-powered applications with our comprehensive AI first platform.
            From code assistance to frontier models, build anything as fast as you can dream up your next big idea.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 bg-white text-black hover:bg-gray-200">
              Start Building
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Code preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 rounded-xl bg-gray-900/50 p-4 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl"
        >
          <pre className="overflow-x-auto">
            <code className="text-sm sm:text-base text-gray-300">
              <span className="text-blue-400">import</span>{" "}
              <span className="text-green-400">{"{ AI }"}</span>{" "}
              <span className="text-blue-400">from</span>{" "}
              <span className="text-yellow-300">'hanzo/ai'</span>
              {"\n\n"}
              <span className="text-purple-400">const</span> editor{" "}
              <span className="text-gray-400">=</span>{" "}
              <span className="text-blue-400">new</span>{" "}
              <span className="text-green-400">AI.CodeEditor</span>
              {"\n"}
              <span className="text-purple-400">const</span> result{" "}
              <span className="text-gray-400">=</span>{" "}
              <span className="text-blue-400">await</span>{" "}
              editor.improveCode(myCode)
              {"\n\n"}
              <span className="text-gray-500">// AI that understands you</span>
              {"\n"}console.<span className="text-blue-400">log</span>(result)
            </code>
          </pre>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
