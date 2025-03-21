
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Settings, Cloud, Lock, Eye, Code, Shield, Users, Sparkles, Hand, Smile, Layout } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="features-showcase">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/80"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>
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

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <Card className="bg-black/50 border border-gray-800 backdrop-blur-sm overflow-hidden h-[400px] flex flex-col">
                    <CardHeader>
                      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${feature.color}`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-center mt-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-300 text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-center pb-6">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 text-white"
                        onClick={() => navigate(feature.link)}
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative static md:absolute" />
            <CarouselNext className="relative static md:absolute" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeatureShowcase;
