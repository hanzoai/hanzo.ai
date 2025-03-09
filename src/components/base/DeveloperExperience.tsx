
import React from "react";
import { motion } from "framer-motion";
import { Code, Command, BookOpen, Users } from "lucide-react";

const DeveloperExperience = () => {
  const features = [
    {
      icon: Command,
      title: "Comprehensive CLI Tools",
      description: "Powerful CLI for scaffolding, deploying, and managing applications with simple commands."
    },
    {
      icon: Code,
      title: "Rich SDKs & Libraries",
      description: "SDKs supporting JavaScript, React, Ruby, Node, Flutter, and more for seamless integration."
    },
    {
      icon: Users,
      title: "Project Management Dashboard",
      description: "Full project lifecycle management directly from the Hanzo Base dashboard."
    },
    {
      icon: BookOpen,
      title: "Extensive Documentation",
      description: "Detailed documentation, community-driven examples, and best practices to accelerate development."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white">Developer Experience</h2>
            <p className="text-xl text-gray-300">
              Designed for developers who value simplicity, flexibility, and power.
              Our tools make database and backend development a breeze.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-900/30 text-blue-400">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                    <p className="mt-1 text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="bg-gray-900/30 rounded-xl border border-gray-800 p-1 shadow-xl overflow-hidden">
              <div className="flex items-center bg-gray-900 rounded-t-lg px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-gray-400 text-sm">Terminal</div>
              </div>
              <div className="bg-gray-950 p-4 rounded-b-lg overflow-hidden">
                <div className="font-mono text-sm">
                  <p className="text-gray-400 mb-2">$ npx create-hanzo-app my-project</p>
                  <p className="text-green-400 mb-2">Initializing Hanzo Base project...</p>
                  <p className="text-gray-400 mb-2">$ cd my-project && npm run dev</p>
                  <p className="text-green-400 mb-2">✓ Hanzo Base server started on http://localhost:3000</p>
                  <p className="text-green-400 mb-2">✓ Admin UI available at http://localhost:3000/admin</p>
                  <p className="text-gray-400 mb-2">$ hanzo deploy</p>
                  <p className="text-green-400">✓ Project deployed to https://my-project.hanzo.app</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperience;
