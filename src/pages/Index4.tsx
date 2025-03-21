
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Plus, 
  ArrowUp,
  ArrowRight,
  Code, 
  Terminal, 
  Database,
  Command
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArchitecturalBox, GridLines, BlueprintLine } from "@/components/ui/architectural-elements";
import { createAnimationVariant, timing, curves } from "@/components/ui/animation-variants";

const fadeInAnimation = createAnimationVariant("fadeIn", {
  duration: timing.medium,
  curve: curves.snappy
});

const Index4 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Subtle grid background */}
      <GridLines spacing={40} opacity={0.07} className="fixed inset-0 -z-10" />
      
      {/* Subtle gradient accents */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute -top-80 -right-80 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-8 relative z-10">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto mb-32 relative">
          <BlueprintLine orientation="horizontal" position="20%" color="rgba(255,255,255,0.04)" />
          <BlueprintLine orientation="vertical" position="15%" color="rgba(255,255,255,0.04)" />
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-white">
              Infrastructure for the<br />modern world
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Build, deploy, and scale applications effortlessly with our developer-focused platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="h-12 px-8 bg-white hover:bg-zinc-200 text-black transition-colors duration-300"
              >
                Start building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 border-zinc-800 bg-transparent hover:bg-zinc-900 transition-colors duration-300"
              >
                Documentation
              </Button>
            </div>
            
            <div className="text-sm text-zinc-500 flex items-center justify-center gap-2">
              No credit card required <span className="mx-2">•</span> Cancel anytime
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Feature Card 1 */}
            <ArchitecturalBox
              className="backdrop-blur-lg bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700/50 transition-all duration-300"
              showCorners={true}
              cornerColor="rgba(100, 100, 100, 0.2)"
              cornerSize={20}
            >
              <div className="mb-4 p-2 bg-zinc-800/50 rounded-lg w-10 h-10 flex items-center justify-center">
                <Terminal className="h-5 w-5 text-zinc-300" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Developer Experience</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Intuitive CLI and dashboard designed for efficient workflow and rapid development.
              </p>
            </ArchitecturalBox>
            
            {/* Feature Card 2 */}
            <ArchitecturalBox
              className="backdrop-blur-lg bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700/50 transition-all duration-300"
              showCorners={true}
              cornerColor="rgba(100, 100, 100, 0.2)"
              cornerSize={20}
            >
              <div className="mb-4 p-2 bg-zinc-800/50 rounded-lg w-10 h-10 flex items-center justify-center">
                <Code className="h-5 w-5 text-zinc-300" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Instant Deployments</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                From code to production in seconds with automatic builds and zero downtime updates.
              </p>
            </ArchitecturalBox>
            
            {/* Feature Card 3 */}
            <ArchitecturalBox
              className="backdrop-blur-lg bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700/50 transition-all duration-300"
              showCorners={true}
              cornerColor="rgba(100, 100, 100, 0.2)"
              cornerSize={20}
            >
              <div className="mb-4 p-2 bg-zinc-800/50 rounded-lg w-10 h-10 flex items-center justify-center">
                <Database className="h-5 w-5 text-zinc-300" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Global Infrastructure</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Scale effortlessly with our distributed network optimized for performance and reliability.
              </p>
            </ArchitecturalBox>
          </motion.div>
        </section>

        {/* Terminal Demo Section */}
        <section className="max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ArchitecturalBox
              className="backdrop-blur-lg bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden"
              showGrid={true}
              gridColor="rgba(255,255,255,0.03)"
              gridSpacing={30}
              gridOpacity={0.1}
            >
              <div className="flex items-center border-b border-zinc-800/70 px-4 py-3">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-mono text-zinc-400">terminal</span>
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <div className="flex items-start mb-4">
                  <span className="text-green-400 mr-2">$</span>
                  <span className="text-zinc-300">hanzo deploy</span>
                </div>
                
                <div className="pl-4 text-zinc-500 space-y-1">
                  <p>Initializing deployment...</p>
                  <p>Building application <span className="text-zinc-400">v2.3.5</span></p>
                  <p className="text-zinc-400">Installing dependencies...</p>
                  <p className="text-zinc-400">Running build command...</p>
                  <p className="text-green-400">✓ Build successful</p>
                  <p className="text-zinc-400">Uploading artifacts...</p>
                  <p className="text-green-400">✓ Deployment complete</p>
                </div>
                
                <div className="mt-6 flex items-start">
                  <span className="text-green-400 mr-2">$</span>
                  <span className="text-zinc-300">_</span>
                </div>
              </div>
            </ArchitecturalBox>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-gradient-to-b from-zinc-900/40 to-zinc-900/80 border border-zinc-800/50 rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">
              Start building today
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers who are creating the next generation of applications on our platform.
            </p>
            <Button 
              size="lg" 
              className="h-12 px-8 bg-white hover:bg-zinc-200 text-black transition-colors duration-300"
            >
              Deploy your first project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        className={`fixed bottom-8 right-8 bg-zinc-800/80 backdrop-blur-md p-3 rounded-full border border-zinc-700/30 hover:bg-zinc-700/80 transition-all z-50 ${
          !scrolled && 'pointer-events-none'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </motion.button>
    </div>
  );
};

export default Index4;
