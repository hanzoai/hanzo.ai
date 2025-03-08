
import React from "react";
import { motion } from "framer-motion";
import { Terminal, Play, GitPullRequest, MessageSquare } from "lucide-react";

const HowItWorks = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const steps = [
    {
      command: "/plan",
      icon: <Terminal className="h-8 w-8 text-purple-400" />,
      description: "Before coding, Hanzo creates an implementation plan, explaining the steps it will take and the files it will create or change, for you to approve. And when you're happy, just click…"
    },
    {
      command: "/implement",
      icon: <GitPullRequest className="h-8 w-8 text-purple-400" />,
      description: "Working in its own dev container, Hanzo begins writing the code you've asked for. When it's done, it can create a PR in GitHub for you to review, or…"
    },
    {
      command: "/run",
      icon: <Play className="h-8 w-8 text-purple-400" />,
      description: "Hanzo can run its code on a virtual machine, giving you logs and a preview which you can share with others. Feed the logs back into the AI for further revisions. And speaking of revisions…"
    },
    {
      command: "/review and /revise",
      icon: <MessageSquare className="h-8 w-8 text-purple-400" />,
      description: "Reviewing code or a PR? Hanzo can summarize the PR, perform a review and execute your revisions for you - all inside GitHub."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Issue In, Pull Request Out
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let AI design, engineer and evolve your product
          </p>
        </div>

        <div className="mb-12">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            AI is for more than just pair programming. Delegate entire issues directly to Hanzo, squash out minor bugs, and clear your backlog. Hanzo is like the extra pair of hands you needed. Here's how it works:
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
              variants={item}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">{step.command}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-900/70 border-b border-gray-700/50">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-6">
            <div className="h-40 bg-gray-900/50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Github pull request screenshot</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-4">/ask around your codebase</h3>
            <p className="text-gray-300 mb-6">
              Hunting down a bug? Designing a new feature? Get started by asking Hanzo: the AI that knows everything it needs to answer your question accurately.
            </p>
            <div className="h-32 bg-gray-900/50 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Ask command illustration</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-4">AAA: Anywhere, Anytime, Asynchronous.</h3>
            <p className="text-gray-300 mb-6">
              With Hanzo running in the cloud, you can let it work on tasks asynchronously while you focus on other things. Kick things off from anywhere you are, and come back to a ready-to-review pull request. Perfect for the always-changing startup.
            </p>
            <div className="text-right">
              <a href="#get-started" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Get started <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
