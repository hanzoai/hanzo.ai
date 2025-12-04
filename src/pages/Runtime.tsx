
import React from 'react';
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Container, Zap, Shield, Layers, Cloud, GitBranch, Server, Gauge, Lock, Box, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { Link } from "react-router-dom";

const Runtime = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Hanzo Runtime - Container Runtime for AI Applications</title>
        <meta name="description" content="High-performance container runtime optimized for AI workloads. Deploy, scale, and manage AI applications with enterprise-grade reliability." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="flex justify-center mb-6">
              <Container className="h-16 w-16 text-blue-400" />
            </div>
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-full px-4 py-1 inline-block mb-6">
              <span className="text-blue-400 text-sm font-medium">Container Runtime</span>
            </div>
            <ChromeText
              as="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              gradient="from-blue-400 to-cyan-400"
            >
              Hanzo Runtime
            </ChromeText>
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              High-performance container runtime optimized for AI applications. Deploy, scale, and manage AI workloads with enterprise-grade reliability and sub-second cold starts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-[var(--white)] px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-500/30 text-[var(--white)] hover:bg-blue-900/20 px-8 py-6 text-lg">
                <Link to="/pricing">View Documentation</Link>
              </Button>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-blue-900/20 border border-blue-500/20 rounded-xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="flex flex-col items-center p-6 bg-[var(--black)]/40 rounded-lg border border-blue-500/30">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-center text-neutral-300 text-sm">Sub-second cold starts for instant scaling</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-[var(--black)]/40 rounded-lg border border-blue-500/30">
                <Shield className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Secure by Default</h3>
                <p className="text-center text-neutral-300 text-sm">Isolated execution with built-in security</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-[var(--black)]/40 rounded-lg border border-blue-500/30">
                <Layers className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Optimized</h3>
                <p className="text-center text-neutral-300 text-sm">Built for ML frameworks and GPU workloads</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
              Built for Modern AI Workloads
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Everything you need to run AI applications at scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <Zap className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Cold Starts</h3>
              <p className="text-neutral-300">
                Sub-second container initialization with intelligent pre-warming and caching strategies for AI models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <Server className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">GPU Acceleration</h3>
              <p className="text-neutral-300">
                Native support for NVIDIA GPUs with automatic resource allocation and multi-GPU workload distribution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <Shield className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Isolation</h3>
              <p className="text-neutral-300">
                Industry-leading container isolation with gVisor sandboxing, preventing unauthorized access to host systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <Cloud className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Auto-scaling</h3>
              <p className="text-neutral-300">
                Intelligent scaling based on request volume, GPU utilization, and custom metrics with zero-downtime deployments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <GitBranch className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-Framework Support</h3>
              <p className="text-neutral-300">
                Out-of-the-box support for PyTorch, TensorFlow, JAX, ONNX Runtime, and all major ML frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <Gauge className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
              <p className="text-neutral-300">
                Comprehensive observability with metrics, logs, and traces for every container and model inference request.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Runtime Capabilities */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
              Enterprise-Grade Runtime Capabilities
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Production-ready features for mission-critical AI applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8"
            >
              <Lock className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Security & Compliance</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>SOC 2 Type II and ISO 27001 certified infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>End-to-end encryption for data in transit and at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>RBAC and fine-grained access controls for team collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Audit logging and compliance reporting for enterprise requirements</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8"
            >
              <Workflow className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Developer Experience</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Deploy from Docker images, GitHub repos, or Dockerfile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Built-in CI/CD integration with GitHub Actions, GitLab, and Jenkins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Local development environment that mirrors production exactly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>CLI tools for deployment, debugging, and log streaming</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8"
            >
              <Box className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Container Orchestration</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Kubernetes-compatible API for seamless migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Multi-region deployments with automatic failover and recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Blue-green and canary deployment strategies built-in</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Service mesh integration for advanced traffic management</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8"
            >
              <Gauge className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Model caching and pre-loading for faster inference</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Automatic batch processing and request queuing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Smart resource allocation based on workload patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>Built-in load balancing with health checks and circuit breakers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
              Performance That Matters
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real-world metrics from production workloads
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 mb-4">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  &lt;500ms
                </div>
                <p className="text-neutral-300">Cold Start Time</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 mb-4">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  99.99%
                </div>
                <p className="text-neutral-300">Uptime SLA</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 mb-4">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  10x
                </div>
                <p className="text-neutral-300">Faster Than Traditional</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 mb-4">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  0
                </div>
                <p className="text-neutral-300">Downtime Deployments</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
              Built for AI-First Teams
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Power your AI applications with the right infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8"
            >
              <div className="bg-blue-500/20 rounded-lg p-3 w-fit mb-6">
                <Server className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">LLM Inference</h3>
              <p className="text-neutral-300 mb-4">
                Deploy and scale large language models with automatic batching, model caching, and GPU optimization.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Support for Llama, GPT, Claude, and custom models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Automatic prompt caching and response streaming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Multi-GPU inference for large models</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8"
            >
              <div className="bg-blue-500/20 rounded-lg p-3 w-fit mb-6">
                <Layers className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Computer Vision</h3>
              <p className="text-neutral-300 mb-4">
                Run image and video processing workloads with optimized CUDA kernels and hardware acceleration.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Object detection, segmentation, and classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Real-time video analysis and streaming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Batch processing for large image datasets</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8"
            >
              <div className="bg-blue-500/20 rounded-lg p-3 w-fit mb-6">
                <Workflow className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ML Training & Fine-tuning</h3>
              <p className="text-neutral-300 mb-4">
                Train and fine-tune models with distributed computing, checkpoint management, and experiment tracking.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Distributed training across multiple GPUs and nodes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Automatic checkpoint saving and model versioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Integration with MLflow, Weights & Biases</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-12 md:p-16 border border-blue-500/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Deploy Your AI Applications Today</h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teams building production AI applications on Hanzo Runtime. Get started in minutes with our free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-[var(--white)] px-8 py-6 text-lg">
                <Link to="/contact">Start Building Free</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-500/30 text-[var(--white)] hover:bg-blue-900/20 px-8 py-6 text-lg">
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
            <p className="text-sm text-neutral-400 mt-6">
              No credit card required. Deploy your first container in under 5 minutes.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Runtime;
