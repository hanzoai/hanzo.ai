
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Cloud as CloudIcon,
  Server,
  Shield,
  Zap,
  BarChart,
  Lock,
  Cpu,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";

const SolutionCloud = () => {
  const features = [
    {
      icon: Server,
      title: "Hardware-Virtualized Containers",
      description: "Hanzo Machines are hardware-virtualized containers running on proprietary AI-optimized hardware that launch instantly and scale automatically. Boot times under 250ms enable serverless compute without trade-offs."
    },
    {
      icon: CloudIcon,
      title: "Global Edge Network",
      description: "Deploy in 35 regions worldwide, from Sydney to São Paulo, with 200+ edge locations for sub-100ms response times and native-app feel no matter where your users are."
    },
    {
      icon: Zap,
      title: "Instant Scaling",
      description: "Machines start fast enough to handle HTTP requests, run only when you need them, and scale into tens of thousands of instances automatically without manual intervention."
    },
    {
      icon: Cpu,
      title: "GPU Acceleration",
      description: "From LLMs to inferencing, access NVIDIA H100, A100, and L4 GPUs with hardware acceleration using the same developer experience as a simple CRUD app."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2, GDPR, and HIPAA compliant infrastructure with private WireGuard networking, end-to-end encryption, and comprehensive audit logging built-in."
    },
    {
      icon: Database,
      title: "AI-Native Storage",
      description: "Vector databases, document stores, and relational databases optimized for AI workloads with automatic scaling and seamless integration."
    }
  ];

  const benefits = [
    "Deploy with serverful JavaScript without the hassle of serverless - machines boot in 250ms or less",
    "Scale into tens of thousands of instances with instant provisioning and zero cold starts",
    "Access high-performance GPUs (H100, A100, L4) for AI training and inference workloads",
    "Deploy in 35 global regions with private encrypted WireGuard networking that works out of the box",
    "Maintain compliance with SOC 2, HIPAA, GDPR with automatic encryption and audit logging",
    "Enterprise support from actual engineers who ship code on the platform - not chatbots"
  ];

  const useCases = [
    {
      title: "AI/ML Model Deployment",
      description: "Run and fine-tune frontier Large Language Models with optimized environments. Access to NVIDIA H100, A100 GPUs with LoRA and QLoRA fine-tuning support, seamlessly integrated with Hanzo AI endpoints.",
      results: "Deploy LLMs in 250ms with zero cold starts"
    },
    {
      title: "Edge Computing Applications",
      description: "Deploy serverless functions at 200+ global edge locations with ultra-low latency. Run AI inference, edge caching, and real-time WebSocket applications with automatic regional failover and load balancing.",
      results: "Sub-50ms response times for 99% of users"
    },
    {
      title: "Full-Stack JavaScript Apps",
      description: "Automatically detect JavaScript, TypeScript, Bun, or Deno runtime and generate VMs with everything needed. Graduate from serverless compute to regain control over your stack and hosting bill.",
      results: "Run complete apps with real GPUs and CPUs"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Cloud Solutions - Hanzo AI</title>
        <meta name="description" content="Enterprise cloud solutions for modern businesses. Deploy, scale, and manage your infrastructure with confidence." />
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
              <Globe className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl font-bold mb-6" gradient="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Cloud Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8">
              Enterprise-grade cloud infrastructure built for AI engineers. Deploy hardware-virtualized
              containers that boot in 250ms, scale to tens of thousands of instances, and run anywhere
              from edge to GPU clusters. The most flexible and powerful compute platform for modern AI workloads.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
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
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Cloud Capabilities</h2>
              <p className="text-neutral-400 text-lg">
                Everything you need to build, deploy, and manage modern cloud infrastructure
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Hanzo Cloud</h2>
              <p className="text-neutral-400 text-lg">
                Proven results that drive business transformation
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

          {/* Use Cases Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real-World Applications</h2>
              <p className="text-neutral-400 text-lg">
                See how organizations leverage our cloud solutions
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
                  className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-neutral-400 mb-4">{useCase.description}</p>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-sm text-purple-400 font-semibold">{useCase.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cloud Products Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Cloud Product Suite</h2>
              <p className="text-neutral-400 text-lg">
                Integrated cloud products that work seamlessly together
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/edge" className="group">
                <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6 hover:border-cyan-500/40 transition-colors h-full">
                  <Zap className="h-8 w-8 text-cyan-400 mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Edge Computing</h3>
                  <p className="text-neutral-400 text-sm">Deploy to 200+ edge locations with sub-50ms latency</p>
                </div>
              </Link>
              <Link to="/functions" className="group">
                <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6 hover:border-blue-500/40 transition-colors h-full">
                  <Server className="h-8 w-8 text-blue-400 mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Serverless Functions</h3>
                  <p className="text-neutral-400 text-sm">Multi-language support with zero cold starts</p>
                </div>
              </Link>
              <Link to="/machines" className="group">
                <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6 hover:border-green-500/40 transition-colors h-full">
                  <Cpu className="h-8 w-8 text-green-400 mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">Dedicated Machines</h3>
                  <p className="text-neutral-400 text-sm">High-performance GPU instances for AI workloads</p>
                </div>
              </Link>
              <Link to="/datastore" className="group">
                <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6 hover:border-purple-500/40 transition-colors h-full">
                  <Database className="h-8 w-8 text-purple-400 mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Data Storage</h3>
                  <p className="text-neutral-400 text-sm">Vector, document, and relational databases</p>
                </div>
              </Link>
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
            <h2 className="text-3xl font-bold mb-4">Deploy Globally in Seconds</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the power of serverful JavaScript without serverless trade-offs. Get started with
              Hanzo Cloud today and join teams shipping production AI applications from prototype to scale
              with zero re-architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/solutions">Explore All Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionCloud;
