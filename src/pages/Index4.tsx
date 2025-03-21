
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Plus, Layers, Clock, Video, HelpCircle, ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <main className="pt-24 pb-16 px-4">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Design the Future with Hanzo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Minimalist. Intuitive. Powerful. Build AI-native apps that transform the way we work.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-white hover:bg-gray-100 text-black border-none"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white/20 bg-white/5 hover:bg-white/10"
              >
                Explore Features
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Glass UI Showcase */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glass UI Element inspired by the image */}
            <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-8 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">Design your experience...</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Tools
                  </Button>
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Storyboard <ArrowUp className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
                  <Layers className="h-5 w-5 text-white" />
                  <span>16:9</span>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
                  <ChevronRight className="h-5 w-5 text-white" />
                  <span>480p</span>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
                  <Clock className="h-5 w-5 text-white" />
                  <span>5s</span>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
                  <Video className="h-5 w-5 text-white" />
                  <span>2v</span>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="backdrop-blur-2xl bg-gray-900/20 border border-white/5 rounded-2xl h-56 md:h-96 flex items-center justify-center">
                <p className="text-gray-400 text-lg">Preview Area</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Build with Glass-like UI Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Translucent Layers</h3>
                <p className="text-gray-400">
                  Create depth and dimension with our glass morphism UI components that add sophistication to your interfaces.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time-Saving Tools</h3>
                <p className="text-gray-400">
                  Built-in timers and schedulers to automate your workflows and keep your projects on track.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visual Creation</h3>
                <p className="text-gray-400">
                  Intuitive video and media tools that make content creation seamless and professional.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10 rounded-3xl p-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Creating Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of designers and developers who are building the future with our glass-inspired UI components.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black px-8 py-6 rounded-lg text-lg font-medium"
            >
              Get Started Now
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        className={`fixed bottom-8 right-8 bg-white/10 backdrop-blur-lg p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all z-50 ${
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
