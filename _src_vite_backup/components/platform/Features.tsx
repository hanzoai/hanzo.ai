import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Terminal, Cloud, Database, RefreshCw, Globe, Server, Code2, Lock, Box, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Local Development",
    description: "Run the entire Hanzo stack locally with a single command",
    details: "Hanzo Platform brings the cloud to your machine, enabling you to develop with the same tools and services you'll use in production, all running locally.",
    icon: Terminal,
    replaces: ["docker-compose", "minikube", "kind", "vagrant"]
  },
  {
    title: "Open Source Infrastructure",
    description: "All the components you need to build AI applications, completely open source",
    details: "From local vector databases to inference engines, we've packaged everything you need to build and test AI applications without any cloud dependencies.",
    icon: Github,
    replaces: ["proprietary AI services", "closed APIs", "vendor lock-in"]
  },
  {
    title: "Seamless Cloud Transition",
    description: "Develop locally, deploy to Hanzo Cloud when you're ready",
    details: "The same configuration that runs your local Platform can be used to deploy to Hanzo Cloud with zero changes, giving you flexibility and scalability.",
    icon: Cloud,
    replaces: ["configuration drift", "environment differences", "deployment headaches"]
  },
  {
    title: "AI Development Toolkit",
    description: "Complete suite of AI tools for local model inference, fine-tuning, and testing",
    details: "Hanzo Platform includes optimized local LLM runners, vector search capabilities, and prompt engineering tools that work offline.",
    icon: Box,
    replaces: ["cloud-dependent AI development", "slow feedback loops", "costly experimentation"]
  },
  {
    title: "Community-Driven",
    description: "Built and maintained by a thriving open source community",
    details: "Join thousands of developers contributing to making AI development more accessible, open, and ethical through our permissively licensed platform.",
    icon: Globe,
    replaces: ["closed ecosystems", "walled gardens", "proprietary platforms"]
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Freedom to Build, Power to Deploy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Everything you love about Hanzo Cloud, available as free and open source software you can run anywhere.
          </motion.p>
        </div>
        
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-32 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-green-900/20 text-green-400 mr-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">{feature.title}</h2>
              </div>
              <p className="text-xl text-neutral-300 mb-4">{feature.description}</p>
              <p className="text-neutral-400 mb-6">{feature.details}</p>
              
              <a href="#learn-more" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <div className="mt-8">
                <p className="text-sm text-neutral-500 mb-2">Replaces</p>
                <div className="flex flex-wrap gap-4">
                  {feature.replaces.map((replace, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-neutral-400">
                      {replace}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
              <div className="aspect-video p-8 flex items-center justify-center bg-gradient-to-br from-green-900/10 to-[#fd4444]/10">
                <feature.icon className="h-24 w-24 text-green-500/70" />
              </div>
            </div>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Code2 className="h-10 w-10 text-green-400" />
              <h3 className="text-xl font-bold">MIT Licensed</h3>
              <p className="text-neutral-400">Fork it, modify it, use it commercially. We believe in true open source.</p>
            </div>
            
            <div className="space-y-4">
              <Lock className="h-10 w-10 text-green-400" />
              <h3 className="text-xl font-bold">Data Sovereignty</h3>
              <p className="text-neutral-400">Keep your code, data, and models on your infrastructure. No vendor lock-in.</p>
            </div>
            
            <div className="space-y-4">
              <Network className="h-10 w-10 text-green-400" />
              <h3 className="text-xl font-bold">Enterprise Ready</h3>
              <p className="text-neutral-400">Scale from a laptop to a data center with enterprise support available.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
