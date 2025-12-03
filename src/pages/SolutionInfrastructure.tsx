
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ArrowRight,
  CheckCircle,
  Server,
  Network,
  Cpu,
  HardDrive,
  Activity,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const SolutionInfrastructure = () => {
  const features = [
    {
      icon: Server,
      title: "Infrastructure Design",
      description: "Design scalable, resilient infrastructure architectures for mission-critical systems."
    },
    {
      icon: Network,
      title: "Network Engineering",
      description: "Build high-performance networks with advanced routing, security, and optimization."
    },
    {
      icon: Cpu,
      title: "Compute Optimization",
      description: "Optimize compute resources for performance, cost, and energy efficiency."
    },
    {
      icon: HardDrive,
      title: "Storage Solutions",
      description: "Implement enterprise storage solutions with high availability and disaster recovery."
    },
    {
      icon: Activity,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring, alerting, and observability across your infrastructure."
    },
    {
      icon: Settings,
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning and management with IaC best practices."
    }
  ];

  const benefits = [
    "Reduce infrastructure costs by 45% with optimization and automation",
    "Achieve 99.99% uptime with redundant, highly available architectures",
    "Scale infrastructure 10x faster with automated provisioning",
    "Improve performance by 60% through optimization and tuning",
    "Ensure compliance with industry standards and regulations",
    "24/7 infrastructure support from certified engineers"
  ];

  const infrastructureServices = [
    {
      title: "Data Center Solutions",
      description: "Design and manage enterprise data centers with cutting-edge technology.",
      results: "50% reduction in energy costs"
    },
    {
      title: "Network Transformation",
      description: "Modernize network infrastructure with SDN, SD-WAN, and zero trust security.",
      results: "70% faster deployment"
    },
    {
      title: "Hybrid Infrastructure",
      description: "Seamlessly integrate on-premises and cloud infrastructure for optimal flexibility.",
      results: "Best of both worlds"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Infrastructure & Capital Projects - Hanzo AI</title>
        <meta name="description" content="Enterprise infrastructure solutions that power modern businesses. From data centers to network transformation, build resilient infrastructure." />
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
              <Building2 className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl font-bold mb-6" gradient="bg-gradient-to-r from-slate-300 via-blue-400 to-slate-400">
              Infrastructure Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8">
              Build resilient, scalable infrastructure that powers your business.
              From data centers to networks, we design and manage enterprise infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Consult an Expert</Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg">
                <Link to="/cloud">View Cloud Platform</Link>
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
              <h2 className="text-3xl font-bold mb-4">Complete Infrastructure Management</h2>
              <p className="text-neutral-400 text-lg">
                End-to-end infrastructure solutions for enterprise-scale operations
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Hanzo Infrastructure</h2>
              <p className="text-neutral-400 text-lg">
                Mission-critical infrastructure that never fails
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

          {/* Infrastructure Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Infrastructure Services</h2>
              <p className="text-neutral-400 text-lg">
                Comprehensive infrastructure solutions for modern enterprises
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infrastructureServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-400 mb-4">{service.description}</p>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-sm text-purple-400 font-semibold">{service.results}</p>
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
            <h2 className="text-3xl font-bold mb-4">Build Infrastructure That Scales</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with our infrastructure experts to design and implement world-class solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Start Planning <ArrowRight className="ml-2 h-5 w-5" />
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

export default SolutionInfrastructure;
