
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  // Horizontal wheel scrolling logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: number;

    const handleWheel = (e: WheelEvent) => {
      if (container.scrollWidth > container.clientWidth) {
        e.preventDefault();
        setIsScrolling(true);
        container.scrollLeft += e.deltaY;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        container.addEventListener('wheel', handleWheel, { passive: false });
      } else {
        container.removeEventListener('wheel', handleWheel);
      }
    }, { threshold: 0.2 });

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Mouse drag handling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="features-showcase" ref={scrollRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/80"></div>
      </div>
      
      <motion.div 
        className="container px-4 mx-auto"
        style={{ opacity, y }}
      >
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

        <div className="feature-slide-container">
          <div 
            ref={containerRef}
            className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory feature-scroll-container cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="snap-center flex-shrink-0 w-[350px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureSlide
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  link={feature.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureShowcase;
