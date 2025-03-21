
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FeatureSlide } from "./";
import { Settings, Cloud, Lock, Eye, Code, Shield, Users, Sparkles, Hand, Smile, Layout } from "lucide-react";

const features = [
  {
    title: "Customizable",
    description: "Tailor your AI experience from pre-training to implementation with adjustable parameters and flexible architecture designs.",
    icon: Settings,
    color: "bg-purple-600",
    link: "/ai"
  },
  {
    title: "Private",
    description: "Keep your data secure with our privacy-focused solutions that prioritize your information security.",
    icon: Lock,
    color: "bg-blue-600",
    link: "/security"
  },
  {
    title: "Deploy Anywhere",
    description: "Flexible deployment options for any environment - cloud, on-premises, hybrid, or edge computing scenarios.",
    icon: Cloud,
    color: "bg-cyan-600",
    link: "/cloud"
  },
  {
    title: "Transparent",
    description: "Understand how your AI works with full transparency into model decisions and processing methods.",
    icon: Eye,
    color: "bg-emerald-600",
    link: "/ai"
  },
  {
    title: "Open-Source Focused",
    description: "Built on and contributing to open-source technologies, ensuring compatibility and community support.",
    icon: Code,
    color: "bg-green-600",
    link: "/open-source"
  },
  {
    title: "Trustworthy",
    description: "Reliable AI systems designed with safety, ethics, and responsible AI principles at their core.",
    icon: Shield,
    color: "bg-amber-600",
    link: "/security"
  },
  {
    title: "Human-Centered AI",
    description: "Technology that enhances human capabilities and adapts to human needs rather than replacing them.",
    icon: Users,
    color: "bg-orange-600",
    link: "/ai"
  },
  {
    title: "Engaging",
    description: "Interactive and intuitive AI experiences that keep users involved and productive throughout their journey.",
    icon: Sparkles,
    color: "bg-rose-600",
    link: "/platform"
  },
  {
    title: "Hands-On Solutions",
    description: "Practical, ready-to-implement tools and frameworks that solve real-world problems immediately.",
    icon: Hand,
    color: "bg-pink-600",
    link: "/solutions"
  },
  {
    title: "Delightful",
    description: "AI experiences that surprise and delight users with thoughtful design and unexpected capabilities.",
    icon: Smile,
    color: "bg-indigo-600",
    link: "/ai"
  },
  {
    title: "Beautiful Interfaces",
    description: "Stunning, intuitive user interfaces that make complex AI interactions simple and enjoyable.",
    icon: Layout,
    color: "bg-violet-600",
    link: "/platform"
  }
];

const FeatureShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a snap scrolling effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If scrolling horizontally is possible
      if (container.scrollWidth > container.clientWidth) {
        // Check if we're at the beginning or end of horizontal scroll
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
        const isAtStart = container.scrollLeft === 0;

        // If scrolling right and not at the end, or scrolling left and not at the start
        if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="features-showcase">
      {/* Background element - simple gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/80"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white chrome-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Feature Ecosystem
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover the powerful capabilities that make Hanzo AI the platform of choice for developers and enterprises
          </motion.p>
        </div>

        <div className="feature-slide-container" ref={scrollRef}>
          <div 
            ref={containerRef}
            className="flex gap-6 pb-6 px-2 overflow-x-auto snap-x snap-mandatory feature-scroll-container"
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="snap-center flex-shrink-0 w-[350px]"
              >
                <FeatureSlide
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  link={feature.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
