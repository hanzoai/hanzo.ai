
import { Brain, Code2, Bot, Blocks, ChartBar, Database, Calculator, Scale, User, BarChart, LucideIcon, Bot as BotIcon, CodepenIcon, Server, Globe, Network, Activity, Zap, RefreshCw, ChevronRight, Github, ExternalLink } from "lucide-react";
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
  github?: string;
}

// AI Cloud animated component - improved version
const AiCloudGraphic = () => {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-md bg-gradient-to-br from-black to-gray-900 mb-6">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}></div>
      
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
            className="h-16 w-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center z-10"
            animate={{ 
              boxShadow: ["0 0 0 0px rgba(168, 85, 247, 0.1)", "0 0 0 15px rgba(168, 85, 247, 0)"],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Server className="h-8 w-8 text-purple-400" />
          </motion.div>
          
          {/* Connection lines and nodes */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const x = Math.cos(angle) * 70;
            const y = Math.sin(angle) * 50;
            
            return (
              <motion.div key={i} className="absolute" style={{ left: '50%', top: '50%' }}>
                {/* Connection line */}
                <motion.div 
                  className="absolute h-0.5 bg-gradient-to-r from-purple-500/60 to-purple-500/0 origin-left"
                  style={{ 
                    width: 70, 
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
                  className="absolute h-4 w-4 rounded-full bg-purple-400/80 flex items-center justify-center"
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + i * 0.1,
                  }}
                >
                  {i % 2 === 0 && <div className="h-1.5 w-1.5 rounded-full bg-white"></div>}
                </motion.div>
              </motion.div>
            );
          })}
          
          {/* Data particles flowing through connections */}
          {[...Array(6)].map((_, i) => {
            const angle = ((i * Math.PI * 2) / 6) + (Math.PI / 6);
            const pathLength = 70;
            
            return (
              <motion.div 
                key={`particle-${i}`}
                className="absolute h-2 w-2 rounded-full bg-white/80"
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
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.4,
                  repeatType: "loop",
                  times: [0, 0.5, 1]
                }}
              />
            );
          })}
          
          {/* Pulsing effect around main node */}
          <motion.div
            className="absolute h-16 w-16 rounded-full bg-purple-500/10"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

// DX Platform modular graphic - improved version
const DxPlatformGraphic = () => {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-md bg-gradient-to-br from-black to-gray-900 mb-6">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Grid of modular packages */}
        <motion.div 
          className="grid grid-cols-3 gap-3 w-4/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[...Array(6)].map((_, i) => {
            const icons = [
              <Code2 key={1} className="h-5 w-5" />, 
              <Bot key={2} className="h-5 w-5" />, 
              <Activity key={3} className="h-5 w-5" />, 
              <Globe key={4} className="h-5 w-5" />, 
              <Server key={5} className="h-5 w-5" />, 
              <Zap key={6} className="h-5 w-5" />
            ];
            
            return (
              <motion.div 
                key={i}
                className="flex items-center justify-center h-14 w-full rounded-md border border-gray-700 bg-black/80"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 * i,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(168, 85, 247, 0.5)",
                  backgroundColor: "rgba(20, 20, 20, 0.9)",
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
        </motion.div>

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
          
          {/* Active data signals */}
          {[...Array(3)].map((_, i) => {
            return (
              <motion.div 
                key={`signal-${i}`}
                className="absolute h-1.5 w-1.5 rounded-full bg-purple-400"
                style={{ 
                  left: `${33 + ((i % 3) * 33)}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  y: [0, -30, 30, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
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
  const [clickedOpen, setClickedOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!clickedOpen) {
      closeTimeout = setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  };

  const handleClick = () => {
    setClickedOpen(!clickedOpen);
    setOpen(!open);
  };

  const handleOutsideClick = () => {
    if (clickedOpen) {
      setClickedOpen(false);
      setOpen(false);
    }
  };

  const aiCloudItems: ProductItem[] = [
    {
      name: "AI Compute",
      icon: Brain,
      description: "Managed AI infrastructure and models",
      link: "/cloud#ai",
      github: "https://github.com/hanzoai/compute"
    },
    {
      name: "Analytics",
      icon: BarChart,
      description: "Data analytics and visualization tools",
      link: "/cloud#analytics",
      github: "https://github.com/hanzoai/analytics"
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
      link: "/database",
      github: "https://github.com/hanzoai/database"
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
      link: "/platform#ai",
      github: "https://github.com/hanzoai/ai"
    },
    {
      name: "Bot",
      icon: BotIcon,
      description: "Build conversational bots for your business",
      link: "/platform#bot",
      github: "https://github.com/hanzoai/bot"
    },
    {
      name: "Code",
      icon: Code2,
      description: "Powerful code generation and analysis",
      link: "/platform#code",
      github: "https://github.com/hanzoai/code"
    },
    {
      name: "Dev",
      icon: CodepenIcon,
      description: "Developer tools and productivity enhancers",
      link: "/dev",
      github: "https://github.com/hanzoai/dev"
    },
    {
      name: "Platform",
      icon: Server,
      description: "Virtual machine and container runtime solutions",
      link: "/platform#platform",
      github: "https://github.com/hanzoai/platform"
    },
    {
      name: "Observability",
      icon: Activity,
      description: "Intelligent monitoring and visualization",
      link: "/platform#observability",
      github: "https://github.com/hanzoai/observability"
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
      name: "Evolve",
      icon: RefreshCw,
      description: "Continuous improvement and adaptation",
      link: "/platform#evolve"
    }
  ];

  return (
    <div>
      <Popover 
        open={open || clickedOpen} 
        onOpenChange={(newOpen) => {
          if (!newOpen) {
            setClickedOpen(false);
            setOpen(false);
          }
        }}
      >
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PopoverTrigger asChild>
            <NavigationButton onClick={handleClick}>Products</NavigationButton>
          </PopoverTrigger>
          
          {open && !clickedOpen && (
            <div 
              className="absolute left-0 w-full h-10 -bottom-10"
              onMouseEnter={handleMouseEnter}
            />
          )}
        </div>
        
        <PopoverContent 
          className="w-[880px] p-8 bg-black border-gray-800"
          sideOffset={8}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onInteractOutside={handleOutsideClick}
        >
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-between mb-5">
                <Link to="/cloud">
                  <h3 className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
                    AI Cloud
                  </h3>
                </Link>
                <Link to="/cloud" className="text-sm text-purple-400 hover:text-purple-300 flex items-center group">
                  View Cloud
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              
              <AiCloudGraphic />
              
              <div className="space-y-5 max-h-[360px] overflow-y-auto pr-2">
                {aiCloudItems.map((item) => (
                  <div key={item.name} className="flex items-start space-x-3 group">
                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Link to={item.link} className="text-gray-300 group-hover:text-white font-medium">
                          {item.name}
                        </Link>
                        <div className="flex space-x-2">
                          {item.github && (
                            <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          <Link to={item.link} className="text-gray-500 hover:text-purple-400">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-5">
                <Link to="/platform">
                  <h3 className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
                    DX Platform
                  </h3>
                </Link>
                <Link to="/platform" className="text-sm text-purple-400 hover:text-purple-300 flex items-center group">
                  View Platform
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              
              <DxPlatformGraphic />
              
              <div className="grid grid-cols-2 gap-5 max-h-[360px] overflow-y-auto pr-2">
                {dxPlatformItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start space-x-3 group"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <item.icon 
                      className={`h-6 w-6 mt-1 transition-colors duration-200 ${
                        hoveredItem === item.name ? 'text-purple-400' : 'text-gray-400 group-hover:text-white'
                      }`} 
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Link to={item.link} className="text-gray-300 group-hover:text-white font-medium">
                          {item.name}
                        </Link>
                        <div className="flex space-x-2">
                          {item.github && (
                            <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          <Link to={item.link} className="text-gray-500 hover:text-purple-400">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
