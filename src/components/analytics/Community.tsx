
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Github, ExternalLink, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const statsItems = [
  { 
    icon: <Github className="h-6 w-6" />,
    value: 17,
    suffix: "M+",
    label: "Downloads",
    countUpDuration: 2
  },
  { 
    icon: <Github className="h-6 w-6" />,
    value: 25,
    suffix: "K+",
    label: "GitHub Stars",
    countUpDuration: 2.2
  },
  { 
    icon: <Users className="h-6 w-6" />,
    value: 280,
    suffix: "+",
    label: "Contributors",
    countUpDuration: 1.8
  }
];

const Community = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Powered by Community, Improved by Collaboration</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of developers building the future of analytics together.
          </p>
        </motion.div>
        
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {statsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-900/30 rounded-full border border-purple-900/30 text-purple-400">
                    {item.icon}
                  </div>
                </div>
                
                <div className="text-4xl font-bold mb-2">
                  {isInView ? (
                    <CountUp end={item.value} duration={item.countUpDuration} />
                  ) : (
                    0
                  )}
                  <span>{item.suffix}</span>
                </div>
                
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 rounded-xl border border-gray-800 p-8"
            >
              <div className="flex items-center mb-6">
                <Github className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">Open Source</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                Hanzo Analytics is fully open source, with a vibrant community of developers contributing from around the world. Join us on GitHub to collaborate on the future of analytics.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
                  <div className="flex-1">
                    <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded mt-2"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
                  <div className="flex-1">
                    <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded mt-2"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
                  <div className="flex-1">
                    <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded mt-2"></div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub Repo
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 rounded-xl border border-gray-800 p-8"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Resources</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                Access comprehensive documentation, tutorials, and examples to help you make the most of Hanzo Analytics.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { 
                    title: "Documentation", 
                    description: "Comprehensive guides and API references",
                    link: "#documentation" 
                  },
                  { 
                    title: "Community Forum", 
                    description: "Join discussions with developers and AI experts",
                    link: "#forum" 
                  },
                  { 
                    title: "Examples", 
                    description: "Sample projects showcasing Hanzo Analytics",
                    link: "#examples" 
                  },
                  { 
                    title: "Support", 
                    description: "Get help from our team and community",
                    link: "#support" 
                  }
                ].map((resource, i) => (
                  <a 
                    key={i} 
                    href={resource.link} 
                    className="block p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg border border-gray-700 transition-colors"
                  >
                    <h4 className="font-medium text-white mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </a>
                ))}
              </div>
              
              <Button variant="outline" className="flex items-center gap-2">
                Browse All Resources
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Simple CountUp component
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  
  return <>{count}</>;
};

export default Community;
