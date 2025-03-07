import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, BarChart3, CreditCard, Wand2, Bot, Network, Cpu, Leaf, Brain, Target, Blocks, Cloud, HardDrive, Code, Shield, KeyRound, Bot as BotIcon, Monitor, ChevronLeft, ChevronRight, Globe, LineChart, Building2, GraduationCap, Newspaper, ShoppingCart, Users, DollarSign, Wrench } from "lucide-react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useRef, useState } from "react";
import { getIcon } from "@/constants/iconMappings";

const allFeatures = [{
  icon: <Wand2 className="h-6 w-6" />,
  title: "Hanzo App",
  description: "Design, build, and launch full-featured applications with our generative App Builder. Native analytics and platform API integration."
}, {
  icon: <Bot className="h-6 w-6" />,
  title: "Hanzo Bot",
  description: "Launch agentic frameworks effortlessly using our drag-and-drop GUI to build and iterate on scalable agentic workflows."
}, {
  icon: <Code2 className="h-6 w-6" />,
  title: "Hanzo Code",
  description: "Open Source IDE that embeds AI agents directly into your coding workflow, accelerating development and deployment."
}, {
  icon: <Cpu className="h-6 w-6" />,
  title: "Hanzo Dev",
  description: "24/7 AI engineers that ingest your data and code to build, refine, test, and engineer alongside you autonomously."
}, {
  icon: <Network className="h-6 w-6" />,
  title: "Hanzo Router",
  description: "Access hosted and private models with dynamic routing, fallback systems, and advanced caching through our scalable AI platform."
}, {
  icon: <BarChart3 className="h-6 w-6" />,
  title: "Deep Learning Cloud",
  description: "Cloud orchestration with rapid deployment, auto-scaling, and NVIDIA hardware access through NVIDIA Inception Program."
}, {
  icon: <Leaf className="h-6 w-6" />,
  title: "Green Infrastructure",
  description: "1 Gigawatt of green energy secured at industry-leading prices, powering sustainable AI development and deployment."
}, {
  icon: <CreditCard className="h-6 w-6" />,
  title: "Hanzo Network",
  description: "Decentralized compute fabric allocating half its capacity to building next-gen frontier models in the open."
}];

const industriesData = [
  {
    name: "Cloud",
    icon: <Globe className="h-5 w-5 text-blue-400 mb-2" />,
    image: "/lovable-uploads/a6b76d5c-59a9-4ba8-897e-69558005b6ed.png",
    description: "Cloud orchestration with rapid deployment"
  },
  {
    name: "Cybersecurity",
    icon: <Shield className="h-5 w-5 text-red-400 mb-2" />,
    image: "/lovable-uploads/97902904-f9ea-475e-9c65-5664eab422e5.png",
    description: "Advanced security solutions for business"
  },
  {
    name: "Data and Artificial Intelligence",
    icon: <Brain className="h-5 w-5 text-purple-400 mb-2" />,
    image: "/lovable-uploads/a31568fe-aa1f-4933-add1-b981564f25b9.png",
    description: "Cutting-edge AI solutions for business transformation"
  },
  {
    name: "Digital Engineering and Manufacturing",
    icon: <Code className="h-5 w-5 text-green-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Engineering solutions for manufacturing"
  },
  {
    name: "Emerging Technology",
    icon: <Cpu className="h-5 w-5 text-yellow-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Frontier technology solutions"
  },
  {
    name: "Ecosystem Partners",
    icon: <Network className="h-5 w-5 text-indigo-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Collaborative partnership networks"
  },
  {
    name: "Finance and Risk Management",
    icon: <DollarSign className="h-5 w-5 text-green-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Financial solutions and risk assessment"
  },
  {
    name: "Infrastructure and Capital Projects",
    icon: <Building2 className="h-5 w-5 text-gray-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Infrastructure development and capital management"
  },
  {
    name: "Learning",
    icon: <GraduationCap className="h-5 w-5 text-blue-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Educational technology and learning solutions"
  },
  {
    name: "Marketing and Experience",
    icon: <Newspaper className="h-5 w-5 text-pink-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Marketing solutions and experience design"
  },
  {
    name: "Metaverse",
    icon: <LineChart className="h-5 w-5 text-cyan-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Metaverse development and integration"
  },
  {
    name: "Sales and Commerce",
    icon: <ShoppingCart className="h-5 w-5 text-orange-400 mb-2" />,
    image: "/placeholder.svg",
    description: "Sales enablement and commerce solutions"
  }
];

const industriesSectors = [
  {
    name: "Artificial Intelligence",
    image: "/lovable-uploads/a31568fe-aa1f-4933-add1-b981564f25b9.png",
    description: "Cutting-edge AI solutions for business transformation"
  },
  {
    name: "Financial Services",
    image: "/placeholder.svg",
    description: "Innovative solutions for banking and finance sectors"
  },
  {
    name: "Manufacturing & Mobility",
    image: "/placeholder.svg",
    description: "Optimizing operations and driving innovation in manufacturing"
  },
  {
    name: "Healthcare",
    image: "/placeholder.svg",
    description: "Digital transformation for healthcare providers"
  },
  {
    name: "Retail & Consumer",
    image: "/placeholder.svg",
    description: "Creating exceptional customer experiences"
  },
  {
    name: "Technology",
    image: "/placeholder.svg",
    description: "Empowering the tech industry with advanced solutions"
  },
  {
    name: "Energy & Utilities",
    image: "/placeholder.svg",
    description: "Smart solutions for sustainable energy management"
  },
  {
    name: "Telecommunications",
    image: "/placeholder.svg",
    description: "Next-generation communication infrastructure"
  },
  {
    name: "Education",
    image: "/placeholder.svg",
    description: "Digital learning platforms and educational technology"
  },
  {
    name: "Government",
    image: "/placeholder.svg",
    description: "Digital transformation for public services"
  }
];

const Features = () => {
  const displayedFeatures = allFeatures.slice(0, 16);
  const hasMoreFeatures = allFeatures.length > 16;
  
  const industryIcons = {
    "Artificial Intelligence": <Brain className="h-5 w-5 text-purple-400 mb-2" />,
    "Adtech": <Target className="h-5 w-5 text-blue-400 mb-2" />,
    "Blockchain": <Blocks className="h-5 w-5 text-orange-400 mb-2" />,
    "Cloud Computing": <Cloud className="h-5 w-5 text-cyan-400 mb-2" />,
    "GPU": <Cpu className="h-5 w-5 text-red-400 mb-2" />,
    "Hardware": <HardDrive className="h-5 w-5 text-gray-400 mb-2" />,
    "Machine Learning": <Brain className="h-5 w-5 text-green-400 mb-2" />,
    "Software": <Code className="h-5 w-5 text-yellow-400 mb-2" />,
    "Cyber Security": <Shield className="h-5 w-5 text-pink-400 mb-2" />,
    "Confidential Computing": <KeyRound className="h-5 w-5 text-indigo-400 mb-2" />
  };

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const testimonialText = "We've helped businesses and individuals harness the power of AI to drive growth, efficiency, and innovation.";
  const testimonialCharacters = testimonialText.split("");
  const textContainerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1
      }
    }
  };
  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 5
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };

  const industriesSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: industriesSectionRef,
    offset: ["start end", "end start"]
  });

  const industriesTitleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const industriesDescriptionY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const industriesCarouselY = useTransform(scrollYProgress, [0, 1], [50, -20]);

  const [api, setApi] = useState<any>(null);
  
  useEffect(() => {
    if (!api) return;
    
    // Start auto-scrolling
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    // Clean up interval
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-3xl sm:text-4xl font-display text-white">
            Leading the Fourth Industrial Revolution
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Hanzo is a developer-first AI platform bringing frontier research directly into your workflow with open, private, and decentralized solutions.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayedFeatures.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="relative p-6 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 hover:ring-white/20 transition-all flex flex-col items-center text-center my-0">
              <div className="p-2 bg-white/10 w-fit rounded-lg text-white">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </motion.div>)}
        </div>

        {hasMoreFeatures && <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="mt-12 text-center">
            <Button variant="ghost" onClick={() => window.location.href = '/solutions'} className="text-white hover:text-purple-400 transition-colors">
              View All Solutions
            </Button>
          </motion.div>}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/5">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-12">
          <h2 className="font-display text-white bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-4xl">
            Hanzo has an impressive track record...
          </h2>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 backdrop-blur-sm rounded-xl ring-1 ring-white/10">
              <div className="max-w-md overflow-hidden">
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="visible" viewport={{
              once: true,
              amount: 0.8
            }} className="text-lg text-gray-300 overflow-hidden">
                  <span>We've helped businesses and individuals harness the </span> 
                  <span className="text-white font-bold">power of AI</span>
                  <span> to drive growth, efficiency, and innovation.</span>
                </motion.div>
                <Button variant="outline" className="mt-6 bg-white text-black border-white hover:bg-gray-100 hover:text-black">
                  Our Testimonial
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              <div className="p-6 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center">
                <h3 className="text-4xl font-medium text-white">1M<sup>+</sup></h3>
                <p className="mt-2 text-gray-300">Users benefiting from our AI-powered solutions</p>
              </div>
              
              <div className="p-6 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center">
                <h3 className="text-4xl font-medium text-white">4.9<span className="text-2xl">/5</span></h3>
                <p className="mt-2 text-gray-300">Average rating across all AI-driven applications</p>
              </div>
              
              <div className="p-6 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center">
                <h3 className="text-4xl font-medium text-white">80<sup>%</sup></h3>
                <p className="mt-2 text-gray-300">Faster decision-making with AI recommendations</p>
              </div>
              
              <div className="p-6 backdrop-blur-sm rounded-xl ring-1 ring-white/10 flex flex-col items-center text-center">
                <h3 className="text-4xl font-medium text-white">99<sup>%</sup></h3>
                <p className="mt-2 text-gray-300">Uptime guarantee for seamless AI experience</p>
              </div>
            </div>
          </motion.div>
      </div>

      <div ref={industriesSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/5 relative">
        <div className="text-center mb-12">
          <motion.h3 
            style={{ y: industriesTitleY }}
            className="text-[#de8e3d] font-medium text-lg mb-4"
          >
            Industries we serve
          </motion.h3>
          <motion.h2 
            style={{ y: industriesTitleY }}
            className="text-4xl font-display text-white mb-4"
          >
            We deliver impact in various industries
          </motion.h2>
          <motion.p 
            style={{ y: industriesDescriptionY }}
            className="text-gray-300 max-w-3xl mx-auto mb-16"
          >
            We have a proven track record of delivering impactful solutions tailored to various industries, 
            driving success and innovation across diverse business sectors.
          </motion.p>
        </div>
        
        <motion.div 
          style={{ y: industriesCarouselY }}
          className="relative z-20 py-8"
        >
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {industriesData.map((industry, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group h-[400px] relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="flex items-center mb-2">
                        {industry.icon}
                        <h3 className="text-xl font-medium text-white ml-2">{industry.name}</h3>
                      </div>
                      <p className="text-gray-300">{industry.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
