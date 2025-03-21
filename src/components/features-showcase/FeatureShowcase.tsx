
import React, { useState, useEffect } from "react";
import FeatureSlide from "./FeatureSlide";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Settings, Cloud, Lock, Eye, Code, Shield, Users, Sparkles, Hand, Smile, Layout } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Customizable",
    description: "Tailor your AI experience from pre-training to implementation with adjustable parameters and flexible architecture designs.",
    icon: Settings,
    color: "bg-purple-600"
  },
  {
    title: "Private",
    description: "Keep your data secure with our privacy-focused solutions that prioritize your information security.",
    icon: Lock,
    color: "bg-blue-600"
  },
  {
    title: "Deploy Anywhere",
    description: "Flexible deployment options for any environment - cloud, on-premises, hybrid, or edge computing scenarios.",
    icon: Cloud,
    color: "bg-cyan-600"
  },
  {
    title: "Transparent",
    description: "Understand how your AI works with full transparency into model decisions and processing methods.",
    icon: Eye,
    color: "bg-emerald-600"
  },
  {
    title: "Open-Source Focused",
    description: "Built on and contributing to open-source technologies, ensuring compatibility and community support.",
    icon: Code,
    color: "bg-green-600"
  },
  {
    title: "Trustworthy",
    description: "Reliable AI systems designed with safety, ethics, and responsible AI principles at their core.",
    icon: Shield,
    color: "bg-amber-600"
  },
  {
    title: "Human-Centered AI",
    description: "Technology that enhances human capabilities and adapts to human needs rather than replacing them.",
    icon: Users,
    color: "bg-orange-600"
  },
  {
    title: "Engaging",
    description: "Interactive and intuitive AI experiences that keep users involved and productive throughout their journey.",
    icon: Sparkles,
    color: "bg-rose-600"
  },
  {
    title: "Hands-On Solutions",
    description: "Practical, ready-to-implement tools and frameworks that solve real-world problems immediately.",
    icon: Hand,
    color: "bg-pink-600"
  },
  {
    title: "Delightful",
    description: "AI experiences that surprise and delight users with thoughtful design and unexpected capabilities.",
    icon: Smile,
    color: "bg-indigo-600"
  },
  {
    title: "Beautiful Interfaces",
    description: "Stunning, intuitive user interfaces that make complex AI interactions simple and enjoyable.",
    icon: Layout,
    color: "bg-violet-600"
  }
];

const FeatureShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-advance slides when autoplay is enabled
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts with controls
  const handleNavigation = (direction: 'next' | 'prev') => {
    setAutoplay(false);
    
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    }
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentSlide(index);
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/80"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>
      </div>
      
      {/* Slides */}
      <div className="relative">
        {features.map((feature, index) => (
          <FeatureSlide
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10"
            onClick={() => handleNavigation('prev')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10"
            onClick={() => handleNavigation('next')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute top-8 left-0 right-0 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ 
                width: `${((currentSlide + 1) / features.length) * 100}%` 
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
