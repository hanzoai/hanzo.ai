
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroTitle from "@/components/hero/HeroTitle";

const Index6 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

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

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const handleTitleAnimationComplete = () => {
    setTitleAnimationComplete(true);
  };

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section ref={containerRef} className="pt-32 pb-20 px-4 md:px-8 min-h-[90vh] flex flex-col justify-center relative">
          <motion.div
            style={{ scale, opacity }}
            className="max-w-6xl mx-auto text-center"
          >
            <HeroTitle 
              mousePosition={mousePosition}
              containerRef={containerRef}
              onAnimationComplete={handleAnimationComplete}
              animationComplete={animationComplete}
              onTitleAnimationComplete={handleTitleAnimationComplete}
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 mb-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, private, transparent, and trusted AI solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                onClick={handleGetStarted}
              >
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-500/30 hover:border-purple-500/70 text-white hover:text-white px-8 py-6 text-lg"
                onClick={() => navigate('/platform')}
              >
                Explore Platform
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 md:px-8 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            >
              The Complete AI Engineering Platform
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature cards */}
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-purple-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Ready to Transform Your AI Development?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-300 mb-10"
            >
              Join thousands of developers and companies building the future with Hanzo AI.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                onClick={handleGetStarted}
              >
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Feature data
const features = [
  {
    title: "AI Engineering",
    description: "Build, deploy, and operate AI applications with developer-first tools that make AI development a breeze.",
    icon: ArrowRight,
    bgColor: "bg-purple-900/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Cloud Infrastructure",
    description: "Serverless, scalable cloud infrastructure designed for AI workloads with global distribution.",
    icon: ArrowRight,
    bgColor: "bg-blue-900/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Developer Experience",
    description: "Tools and workflows that streamline AI development for individuals and teams.",
    icon: ArrowRight,
    bgColor: "bg-green-900/20",
    iconColor: "text-green-400"
  },
  {
    title: "Production-Ready",
    description: "Enterprise-grade security, compliance, and reliability features for mission-critical AI systems.",
    icon: ArrowRight,
    bgColor: "bg-amber-900/20",
    iconColor: "text-amber-400"
  },
  {
    title: "Rapid Prototyping",
    description: "Go from idea to prototype in minutes with intuitive tools and pre-built templates.",
    icon: ArrowRight,
    bgColor: "bg-pink-900/20",
    iconColor: "text-pink-400"
  },
  {
    title: "AI Ecosystem",
    description: "Access to a growing ecosystem of AI models, tools, and services built on Hanzo.",
    icon: ArrowRight,
    bgColor: "bg-teal-900/20",
    iconColor: "text-teal-400"
  }
];

export default Index6;
