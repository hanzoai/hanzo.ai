
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, Code, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const DXPlatform = () => {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-purple-400" />,
      title: "Hanzo AI",
      description: "The intelligence engine behind every Hanzo product.",
      items: [
        "Frontier LLMs, vector search, and advanced reasoning models",
        "Autonomous workflows that continuously learn and improve",
        "Accessible via the intuitive @hanzo/ai SDK"
      ]
    },
    {
      icon: <Bot className="h-10 w-10 text-purple-400" />,
      title: "Hanzo Bot",
      description: "Easily build agentic workflows without code.",
      items: [
        "Drag-and-drop GUI for creating intelligent agents",
        "Continuous learning agents with self-improvement loops",
        "Autonomous execution of complex tasks and workflows"
      ]
    },
    {
      icon: <Code className="h-10 w-10 text-purple-400" />,
      title: "Hanzo Code",
      description: "AI-enhanced IDE integration to amplify developer productivity.",
      items: [
        "Direct integration with VS Code, Vim, and Emacs",
        "Real-time, context-aware code completion and analysis",
        "Intelligent bug detection and proactive code optimization"
      ]
    },
    {
      icon: <Terminal className="h-10 w-10 text-purple-400" />,
      title: "Hanzo Dev",
      description: "Your autonomous AI-powered software engineer.",
      items: [
        "Task delegation from issue creation to PR completion",
        "Automatic coding, debugging, reviewing, and testing",
        "Seamless integration into existing CI/CD pipelines"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Hanzo DX Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An integrated Developer Experience (DX) purpose-built to accelerate software development with intelligent automation
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
              variants={item}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            to="/dev" 
            className="text-purple-400 hover:text-purple-300 inline-flex items-center"
          >
            Learn more about Hanzo DX Platform
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DXPlatform;
