import { motion } from "framer-motion";
import { 
  Code2, BarChart3, CreditCard, Wand2, Bot, Network, Cpu, Leaf, 
  Brain, Target, Blocks, Cloud, HardDrive, Code, Shield, KeyRound, 
  Bot as BotIcon, Monitor
} from "lucide-react";
import { Button } from "./ui/button";

const allFeatures = [
  {
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

  return <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
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

        <div className="mt-20">
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
              <div className="max-w-md">
                <p className="text-lg text-gray-300">We've helped businesses and individuals harness the <span className="text-orange-500 font-semibold">power of AI</span> to drive growth, efficiency, and innovation.</p>
                <Button variant="outline" className="mt-6 bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:text-white">
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
      }} className="mt-20 relative overflow-hidden rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-blue-700/20 to-transparent z-0"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40 z-10"></div>
        
        <div className="relative z-20 p-8">
          <h3 className="text-white mb-6 font-normal text-3xl bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Industries We Transform</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Artificial Intelligence", "Adtech", "Blockchain", "Cloud Computing", "GPU", "Hardware", "Machine Learning", "Software", "Cyber Security", "Confidential Computing"].map((industry, index) => (
              <motion.div 
                key={industry} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)" 
                }}
                className="group"
              >
                <div className="px-4 py-3 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 transition-all duration-300 transform hover:border-purple-500/40 flex flex-col items-center text-center h-full justify-center">
                  {industryIcons[industry]}
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
};

export default Features;
