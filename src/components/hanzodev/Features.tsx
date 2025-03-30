
import React from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, FileCode, GitBranch, Check, Monitor, Users, Keyboard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-10 w-10 text-purple-400" />,
      title: "Hanzo executes work. Autonomously.",
      description: "Hanzo understand business requirements, analyze the entire codebase, create a plan, generate code and tests your app."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-400" />,
      title: "Learn from your feedback.",
      description: "With every edit you make, agents learn your style, format, and templates. Like a human would."
    },
    {
      icon: <FileCode className="h-10 w-10 text-purple-400" />,
      title: "Specs & Code insight",
      description: "Hanzo starts by deeply analyzing your codebase, auto-generating specs to give you a clear path forward before any code is written."
    },
    {
      icon: <GitBranch className="h-10 w-10 text-purple-400" />,
      title: "Seamless Git Workflow",
      description: "Hanzo automatically branches out, commits changes, and manage pull requests within your existing Git workflow."
    },
    {
      icon: <Check className="h-10 w-10 text-purple-400" />,
      title: "Code Integrity",
      description: "Agents integrate with your CI/CD, compile code, run tests, linters and other checks to ensure integrity and quality."
    },
    {
      icon: <Monitor className="h-10 w-10 text-purple-400" />,
      title: "Live Previews",
      description: "Get instant feedback on how your code changes with live previews, making it easier to iterate and improve on the fly."
    },
    {
      icon: <Users className="h-10 w-10 text-purple-400" />,
      title: "Built for Teams",
      description: "Hanzo is designed for teams to work together. Easily create, share, and benefit from AI agents together."
    },
    {
      icon: <Keyboard className="h-10 w-10 text-purple-400" />,
      title: "Developer Focus",
      description: "Enjoy keybord-first design and UI elegance with a focus on simplicity and ease of use."
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-3 gap-12 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="md:col-span-1">
            <motion.div 
              className="sticky top-32"
              variants={item}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI-Powered Features that Transform Development
              </h2>
              <p className="text-neutral-300 mb-8">
                Hanzo provides powerful AI capabilities that streamline development workflows and help teams ship faster.
              </p>
              <div className="h-1 w-24 bg-purple-500 rounded"></div>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
                  variants={item}
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
