
import { motion } from "framer-motion";
import { AppWindow, Rocket, Bot, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickApps = [{
  icon: <Bot className="h-6 w-6 text-white" />,
  title: "AI Chat Assistant",
  description: "Launch your own ChatGPT-style AI assistant",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
  borderColor: "group-hover:border-blue-400/30"
}, {
  icon: <ShoppingCart className="h-6 w-6 text-white" />,
  title: "E-commerce Store",
  description: "Start selling products online in minutes",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]",
  borderColor: "group-hover:border-green-400/30"
}, {
  icon: <AppWindow className="h-6 w-6 text-white" />,
  title: "Web3 dApp",
  description: "Build a decentralized application",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.3)]",
  borderColor: "group-hover:border-purple-400/30"
}, {
  icon: <Rocket className="h-6 w-6 text-white" />,
  title: "Custom App",
  description: "Start from scratch with our App Builder",
  glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.3)]",
  borderColor: "group-hover:border-orange-400/30"
}];

const QuickStart = () => {
  return <section className="py-12 bg-gradient-to-b from-black via-gray-900/50 to-black bg-[#000a00]/[0.12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl font-display text-white mb-4">
            Quick Launch Apps
          </h2>
          <p className="text-lg text-gray-400">
            Get started quickly with our pre-built templates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickApps.map((app, index) => <motion.div 
            key={app.title} 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              delay: index * 0.1
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              transition: { 
                type: "spring", 
                stiffness: 2500, 
                damping: 8,
                duration: 0.02 
              }
            }}
            whileTap={{
              scale: 0.95,
              rotate: -2,
              transition: { 
                type: "spring", 
                stiffness: 2500, 
                damping: 8,
                duration: 0.02
              }
            }}
            className={`group relative p-6 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30 backdrop-blur-sm rounded-xl 
                border border-white/5 transition-all duration-50 hover:border-white/10 ${app.glowColor} ${app.borderColor}`}>
              <div className="p-3 rounded-lg w-fit bg-white/5 text-white mx-auto">
                {app.icon}
              </div>
              
              <p className="mt-2 text-gray-400 text-center">{app.description}</p>
              <Button className="mt-4 w-full bg-white/5 hover:bg-white/10 text-white border border-white/10
                  transition-all duration-300 hover:border-white/20" variant="outline">
                Launch App
                <Rocket className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

export default QuickStart;
