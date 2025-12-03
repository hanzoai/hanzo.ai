
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  Code,
  ArrowRight,
  CheckCircle,
  GitBranch,
  Boxes,
  Workflow,
  Container,
  TestTube,
  Gauge
} from "lucide-react";
import { Link } from "react-router-dom";

const SolutionEngineering = () => {
  const features = [
    {
      icon: GitBranch,
      title: "DevOps Excellence",
      description: "Implement CI/CD pipelines and automation for faster, more reliable deployments."
    },
    {
      icon: Boxes,
      title: "Microservices Architecture",
      description: "Design and build scalable, maintainable microservices-based applications."
    },
    {
      icon: Workflow,
      title: "Agile Development",
      description: "Accelerate delivery with modern agile methodologies and best practices."
    },
    {
      icon: Container,
      title: "Cloud-Native Apps",
      description: "Build containerized applications optimized for cloud environments."
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Comprehensive testing strategies including automated and performance testing."
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Optimize application performance, scalability, and resource utilization."
    }
  ];

  const benefits = [
    "Deploy 50x more frequently with automated CI/CD pipelines",
    "Reduce development costs by 35% through efficient engineering practices",
    "Improve code quality with 90% test coverage and automated reviews",
    "Scale applications seamlessly to handle millions of concurrent users",
    "Accelerate time-to-market by 60% with agile methodologies",
    "Access a global talent pool of senior engineers and architects"
  ];

  const engineeringServices = [
    {
      title: "Application Modernization",
      description: "Transform legacy applications into modern, cloud-native architectures.",
      results: "60% faster feature delivery"
    },
    {
      title: "Platform Engineering",
      description: "Build internal developer platforms that accelerate team productivity.",
      results: "3x improvement in velocity"
    },
    {
      title: "Quality Engineering",
      description: "Implement comprehensive testing and quality assurance frameworks.",
      results: "85% reduction in bugs"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Engineering Solutions - Hanzo AI</title>
        <meta name="description" content="Digital engineering and manufacturing solutions. Build modern applications with agile methodologies, DevOps, and cloud-native technologies." />
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
              <Code className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl font-bold mb-6" gradient="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
              Engineering Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8">
              Build the future with modern engineering practices and technologies.
              From ideation to deployment, we accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Start Building</Link>
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
              <h2 className="text-3xl font-bold mb-4">Modern Engineering Capabilities</h2>
              <p className="text-neutral-400 text-lg">
                Full-stack engineering expertise for next-generation applications
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Hanzo Engineering</h2>
              <p className="text-neutral-400 text-lg">
                Proven engineering excellence that delivers results
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

          {/* Engineering Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Engineering Services</h2>
              <p className="text-neutral-400 text-lg">
                Comprehensive solutions for modern software development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineeringServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Development?</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with our world-class engineering team to build innovative solutions faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Talk to Engineers <ArrowRight className="ml-2 h-5 w-5" />
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

export default SolutionEngineering;
