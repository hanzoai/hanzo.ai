
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  PieChart,
  Calculator,
  AlertCircle,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const SolutionFinance = () => {
  const features = [
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Strategic financial planning and forecasting with AI-powered insights."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify, assess, and mitigate financial risks with advanced analytics."
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Optimize investment portfolios with real-time market analysis and AI."
    },
    {
      icon: AlertCircle,
      title: "Fraud Detection",
      description: "Detect and prevent financial fraud with machine learning algorithms."
    },
    {
      icon: FileText,
      title: "Regulatory Compliance",
      description: "Ensure compliance with financial regulations and reporting standards."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track financial performance with comprehensive dashboards and insights."
    }
  ];

  const benefits = [
    "Reduce financial risk exposure by 60% with predictive risk analytics",
    "Improve forecasting accuracy by 85% using AI-powered models",
    "Automate 70% of routine financial operations and reporting",
    "Detect fraud in real-time with 99.7% accuracy rate",
    "Ensure compliance with automated regulatory monitoring",
    "Optimize working capital and cash flow management"
  ];

  const financeSolutions = [
    {
      title: "Treasury Management",
      description: "Optimize cash management, liquidity, and treasury operations with automation.",
      results: "30% improvement in cash flow"
    },
    {
      title: "Credit Risk Assessment",
      description: "Assess credit risk with AI-powered models that analyze thousands of variables.",
      results: "40% reduction in defaults"
    },
    {
      title: "Financial Close",
      description: "Accelerate the financial close process with automated reconciliation and reporting.",
      results: "5-day close cycle"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Finance & Risk Management - Hanzo AI</title>
        <meta name="description" content="Transform finance operations with AI-powered solutions. From risk management to compliance, optimize your financial operations." />
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
              <DollarSign className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl font-bold mb-6" gradient="bg-gradient-to-r from-green-400 via-teal-400 to-emerald-500">
              Finance & Risk Management
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8">
              Transform your finance operations with intelligent automation and analytics.
              Reduce risk, ensure compliance, and drive strategic financial decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
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
              <h2 className="text-3xl font-bold mb-4">Comprehensive Financial Solutions</h2>
              <p className="text-neutral-400 text-lg">
                End-to-end financial management and risk mitigation capabilities
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Hanzo for Finance</h2>
              <p className="text-neutral-400 text-lg">
                Proven financial technology that delivers measurable results
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

          {/* Finance Solutions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Specialized Finance Solutions</h2>
              <p className="text-neutral-400 text-lg">
                Industry-leading financial technology for modern enterprises
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financeSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-neutral-400 mb-4">{solution.description}</p>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-sm text-purple-400 font-semibold">{solution.results}</p>
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
            <h2 className="text-3xl font-bold mb-4">Transform Your Finance Operations</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Let our financial technology experts help you reduce risk and optimize performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
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

export default SolutionFinance;
