
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  ArrowRight,
  CheckCircle,
  Zap,
  Sparkles,
  Bot,
  Blocks,
  Workflow,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const SolutionEmergingTech = () => {
  const features = [
    {
      icon: Bot,
      title: "Advanced AI Agents",
      description: "Deploy autonomous AI agents that can reason, plan, and execute complex tasks."
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      description: "Leverage cutting-edge generative AI for content creation and innovation."
    },
    {
      icon: Blocks,
      title: "Web3 & Blockchain",
      description: "Build decentralized applications and integrate blockchain technologies."
    },
    {
      icon: Workflow,
      title: "Quantum Computing",
      description: "Explore quantum algorithms for optimization and cryptography problems."
    },
    {
      icon: Zap,
      title: "Edge Computing",
      description: "Process data at the edge for ultra-low latency and real-time insights."
    },
    {
      icon: TrendingUp,
      title: "Innovation Labs",
      description: "Experiment with emerging technologies in our dedicated innovation labs."
    }
  ];

  const benefits = [
    "Stay ahead of competitors with early adoption of breakthrough technologies",
    "Reduce time-to-market for innovative products by 50% with rapid prototyping",
    "Access expert guidance on emerging tech evaluation and implementation",
    "Minimize risk with proven frameworks for technology experimentation",
    "Build future-proof solutions that adapt to evolving technology landscapes",
    "Partner with leading tech vendors and research institutions"
  ];

  const innovations = [
    {
      title: "AI-Powered Automation",
      description: "Deploy intelligent automation that learns and adapts to your business processes.",
      results: "70% reduction in manual work"
    },
    {
      title: "Immersive Experiences",
      description: "Create AR/VR experiences that transform how customers interact with your brand.",
      results: "3x engagement increase"
    },
    {
      title: "IoT Integration",
      description: "Connect and manage millions of IoT devices with enterprise-grade infrastructure.",
      results: "Real-time operational insights"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Emerging Technology Solutions - Hanzo AI</title>
        <meta name="description" content="Stay ahead with emerging technology solutions. From AI agents to quantum computing, explore tomorrow's technologies today." />
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
              <Rocket className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl font-bold mb-6" gradient="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">
              Emerging Technology
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8">
              Explore and implement tomorrow's technologies today.
              Stay ahead of the curve with cutting-edge innovations and expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Explore Innovation</Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg">
                <Link to="/ai">View AI Platform</Link>
              </Button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Cutting-Edge Technologies</h2>
              <p className="text-neutral-400 text-lg">
                Explore the frontier of technology with enterprise-grade implementations
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
                  <p className="text-neutral-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20 p-10"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Partner with Hanzo</h2>
              <p className="text-neutral-400 text-lg">
                Navigate the future with confidence and expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-neutral-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Innovation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Innovation in Action</h2>
              <p className="text-neutral-400 text-lg">
                Real-world applications of emerging technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{innovation.title}</h3>
                  <p className="text-neutral-400 mb-4">{innovation.description}</p>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-sm text-purple-400 font-semibold">{innovation.results}</p>
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
            className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our innovation labs and explore how emerging technologies can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Join Innovation Lab <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionEmergingTech;
