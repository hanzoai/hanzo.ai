
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  ArrowRight,
  CheckCircle,
  Code2,
  Sparkles,
  GitBranch,
  Terminal,
  Blocks,
  Zap,
  Layers,
  Play,
  Database,
  Workflow,
  FileCode,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";

const Studio = () => {
  const features = [
    {
      icon: Code2,
      title: "Visual AI Workflow Builder",
      description: "Design complex AI pipelines with an intuitive drag-and-drop interface. No code required for basic workflows."
    },
    {
      icon: Sparkles,
      title: "AI-Powered Code Generation",
      description: "Generate production-ready code from natural language descriptions and visual workflows automatically."
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamlessly integrate with Git for collaborative development. Track changes across workflows and code."
    },
    {
      icon: Terminal,
      title: "Integrated Terminal & Debugger",
      description: "Debug AI pipelines in real-time with built-in terminal, logs, and performance monitoring tools."
    },
    {
      icon: Blocks,
      title: "Extensible Plugin System",
      description: "Extend functionality with custom plugins and integrations. Access a marketplace of community extensions."
    },
    {
      icon: Zap,
      title: "Hot Reload & Live Preview",
      description: "See changes instantly with hot module replacement. Test AI responses in real-time as you build."
    }
  ];

  const capabilities = [
    {
      title: "Multi-Model Orchestration",
      description: "Connect and orchestrate multiple AI models in a single workflow. Mix and match GPT-4, Claude, Llama, and custom models.",
      icon: Layers,
      features: [
        "Model chaining and composition",
        "Automatic fallback and retry logic",
        "Cross-model context sharing",
        "Performance benchmarking"
      ]
    },
    {
      title: "Data Pipeline Management",
      description: "Build sophisticated data pipelines with visual tools. Transform, enrich, and route data between AI models and services.",
      icon: Database,
      features: [
        "ETL workflow designer",
        "Real-time data streaming",
        "Vector database integration",
        "Data validation and testing"
      ]
    },
    {
      title: "Workflow Automation",
      description: "Create autonomous agents and automated workflows. Schedule tasks, trigger events, and orchestrate complex operations.",
      icon: Workflow,
      features: [
        "Event-driven architecture",
        "Scheduled executions",
        "Conditional logic and branching",
        "Error handling and monitoring"
      ]
    }
  ];

  const developerTools = [
    {
      icon: FileCode,
      title: "Code Export",
      description: "Export workflows to Python, TypeScript, or Go. Get clean, production-ready code you can customize."
    },
    {
      icon: Play,
      title: "Interactive Playground",
      description: "Test and iterate rapidly with an interactive playground. Experiment with prompts, models, and parameters."
    },
    {
      icon: Bot,
      title: "Agent Framework",
      description: "Build autonomous AI agents with built-in tools, memory, and reasoning capabilities."
    }
  ];

  const useCases = [
    {
      title: "RAG Application Development",
      description: "Build retrieval-augmented generation systems with visual tools. Connect vector databases, implement semantic search, and manage document processing pipelines.",
      results: "Deploy in hours, not weeks",
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      title: "AI Agent Orchestration",
      description: "Create multi-agent systems with complex workflows. Design autonomous agents that collaborate, make decisions, and execute tasks independently.",
      results: "80% faster agent development",
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Production ML Pipelines",
      description: "Build end-to-end machine learning pipelines from data ingestion to model deployment. Monitor performance, manage versions, and scale automatically.",
      results: "99.9% uptime guaranteed",
      gradient: "from-blue-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Studio - Low-code IDE for AI Development | Hanzo AI</title>
        <meta name="description" content="Build, deploy, and scale AI applications with Studio - the low-code IDE for AI development. Visual workflow builder, AI-powered code generation, and integrated debugging." />
        <meta name="keywords" content="AI IDE, low-code AI, AI development, AI workflow builder, AI studio, machine learning IDE" />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <Laptop className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText
              as="h1"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              gradient="from-purple-400 to-indigo-400"
            >
              Hanzo Studio
            </ChromeText>
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              The low-code IDE for AI development. Build sophisticated AI applications
              with visual workflows, AI-powered code generation, and integrated debugging.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Start Building <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg">
                <Link to="/platform">View Platform</Link>
              </Button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for AI Developers</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                Everything you need to build, test, and deploy AI applications at scale
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6 hover:border-purple-500/40 transition-colors"
                >
                  <feature.icon className="h-10 w-10 text-purple-400 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Studio Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced AI Development Capabilities</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                Professional-grade tools for building production AI systems
              </p>
            </div>
            <div className="space-y-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-black/80 rounded-2xl border border-gray-800 p-8 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center">
                        <capability.icon className="h-8 w-8 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                      <p className="text-neutral-300 mb-6 text-lg leading-relaxed">{capability.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {capability.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            <span className="text-neutral-400">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Developer Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Developer Productivity</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                Powerful tools that accelerate your AI development workflow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {developerTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl border border-indigo-500/20 p-8"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <tool.icon className="h-7 w-7 text-indigo-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Applications</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                See how teams are using Studio to build production AI systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${useCase.gradient} backdrop-blur-sm rounded-xl border border-gray-800 p-8 hover:border-purple-500/40 transition-colors`}
                >
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-sm text-purple-400 font-semibold">{useCase.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 p-12 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build the Future?</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers building cutting-edge AI applications with Hanzo Studio.
              Start creating today with our free tier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Studio;
