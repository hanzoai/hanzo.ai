
import { Brain, Code2, Bot, Blocks, ChartBar, Database, Calculator, Scale, User, BarChart, LucideIcon, Bot as BotIcon, CodepenIcon, Server, Globe, Network, Activity, Zap, RefreshCw, ChevronRight } from "lucide-react";
import { products } from "@/constants/navigation";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductItem {
  name: string;
  icon: LucideIcon;
  description: string;
  link: string;
}

// AI Cloud animated component
const AiCloudGraphic = () => {
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-md bg-black/40 mb-6">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Cloud network visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central cloud node */}
          <motion.div 
            className="h-12 w-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center z-10"
            animate={{ 
              boxShadow: ["0 0 0 0px rgba(168, 85, 247, 0.1)", "0 0 0 10px rgba(168, 85, 247, 0)"],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Server className="h-6 w-6 text-purple-400" />
          </motion.div>
          
          {/* Connection lines and nodes */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 6;
            const x = Math.cos(angle) * 60;
            const y = Math.sin(angle) * 40;
            
            return (
              <motion.div key={i} className="absolute" style={{ left: '50%', top: '50%' }}>
                {/* Connection line */}
                <motion.div 
                  className="absolute h-0.5 bg-gradient-to-r from-purple-500/60 to-purple-500/0 origin-left"
                  style={{ 
                    width: 60, 
                    transform: `translate(0, -50%) rotate(${angle}rad)`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1,
                  }}
                />
                
                {/* Node */}
                <motion.div 
                  className="absolute h-3 w-3 rounded-full bg-purple-400/80"
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + i * 0.1,
                  }}
                />
              </motion.div>
            );
          })}
          
          {/* Data particles flowing through connections */}
          {[...Array(3)].map((_, i) => {
            const angle = ((i * Math.PI * 2) / 3) + (Math.PI / 6);
            const pathLength = 60;
            
            return (
              <motion.div 
                key={`particle-${i}`}
                className="absolute h-1.5 w-1.5 rounded-full bg-white"
                style={{ 
                  left: '50%', 
                  top: '50%', 
                }}
                animate={{
                  x: [0, Math.cos(angle) * pathLength],
                  y: [0, Math.sin(angle) * pathLength],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  repeatType: "loop",
                  times: [0, 0.5, 1]
                }}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

// DX Platform modular graphic
const DxPlatformGraphic = () => {
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-md bg-black/40 mb-6">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Grid of modular packages */}
        <div className="grid grid-cols-3 gap-2 w-4/5">
          {[...Array(6)].map((_, i) => {
            const icons = [<Code2 key={1} />, <Bot key={2} />, <Activity key={3} />, <Globe key={4} />, <Server key={5} />, <Zap key={6} />];
            
            return (
              <motion.div 
                key={i}
                className="flex items-center justify-center h-12 w-full rounded-md border border-gray-700 bg-black/60"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 * i,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(168, 85, 247, 0.5)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-gray-400"
                  whileHover={{ color: "#a855f7" }}
                >
                  {icons[i]}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Connection lines between modules */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => {
            const startX = 33 + (i * 33); // percentage points
            
            return (
              <motion.div 
                key={`vline-${i}`}
                className="absolute w-px bg-gray-700/50 top-1/4 h-1/2"
                style={{ left: `${startX}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
              />
            );
          })}
          
          {[...Array(1)].map((_, i) => {
            const startY = 50; // percentage points
            
            return (
              <motion.div 
                key={`hline-${i}`}
                className="absolute h-px bg-gray-700/50 left-1/4 w-1/2"
                style={{ top: `${startY}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ProductsMenu = () => {
  const [open, setOpen] = useState(false);

  const aiCloudItems: ProductItem[] = [
    {
      name: "AI Compute",
      icon: Brain,
      description: "Managed AI infrastructure and models",
      link: "/cloud#ai"
    },
    {
      name: "Analytics",
      icon: BarChart,
      description: "Data analytics and visualization tools",
      link: "/cloud#analytics"
    },
    {
      name: "Base",
      icon: Database,
      description: "Managed database and backend services",
      link: "/cloud#base"
    },
    {
      name: "Commerce",
      icon: Scale,
      description: "E-commerce platform and payment processing",
      link: "/cloud#commerce"
    },
    {
      name: "Database",
      icon: Database,
      description: "The fastest open-source planet scale database",
      link: "/database"
    },
    {
      name: "Identity",
      icon: User,
      description: "User authentication and identity management",
      link: "/cloud#identity"
    },
    {
      name: "Payments",
      icon: Calculator,
      description: "Payment processing and subscription billing",
      link: "/cloud#payments"
    }
  ];

  const dxPlatformItems: ProductItem[] = [
    {
      name: "AI",
      icon: Brain,
      description: "Integrate AI capabilities into your applications",
      link: "/platform#ai"
    },
    {
      name: "Bot",
      icon: BotIcon,
      description: "Build conversational bots for your business",
      link: "/platform#bot"
    },
    {
      name: "Code",
      icon: Code2,
      description: "Powerful code generation and analysis",
      link: "/platform#code"
    },
    {
      name: "Dev",
      icon: CodepenIcon,
      description: "Developer tools and productivity enhancers",
      link: "/dev"
    },
    {
      name: "Runtime",
      icon: Server,
      description: "Virtual machine and container runtime solutions",
      link: "/platform#runtime"
    },
    {
      name: "Deploy",
      icon: Zap,
      description: "Simple deployment to any environment",
      link: "/platform#deploy"
    },
    {
      name: "Network",
      icon: Globe,
      description: "Secure networking and connectivity",
      link: "/platform#network"
    },
    {
      name: "Scale",
      icon: Scale,
      description: "Seamlessly scale your applications",
      link: "/platform#scale"
    },
    {
      name: "Monitor",
      icon: Activity,
      description: "Real-time application monitoring",
      link: "/platform#monitor"
    },
    {
      name: "Evolve",
      icon: RefreshCw,
      description: "Continuous improvement and adaptation",
      link: "/platform#evolve"
    }
  ];

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <NavigationButton onHoverStart={() => setOpen(true)}>Products</NavigationButton>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[880px] p-6 bg-black border-gray-800"
          sideOffset={8}
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Link to="/cloud">
                  <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">
                    AI Cloud
                  </h3>
                </Link>
                <Link to="/cloud" className="text-sm text-purple-400 hover:text-purple-300 flex items-center group">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              
              <AiCloudGraphic />
              
              <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
                {aiCloudItems.map((item) => (
                  <Link to={item.link} key={item.name} className="flex items-start space-x-3 group">
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                    <div>
                      <div className="text-gray-300 group-hover:text-white font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <Link to="/platform">
                  <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">
                    DX Platform
                  </h3>
                </Link>
                <Link to="/platform" className="text-sm text-purple-400 hover:text-purple-300 flex items-center group">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              
              <DxPlatformGraphic />
              
              <div className="grid grid-cols-2 gap-4 max-h-[360px] overflow-y-auto pr-2">
                {dxPlatformItems.map((item) => (
                  <Link to={item.link} key={item.name} className="flex items-start space-x-3 group">
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                    <div>
                      <div className="text-gray-300 group-hover:text-white font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
