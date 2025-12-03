
import React from 'react';
import { motion } from "framer-motion";
import { Landmark, Shield, TrendingUp, Users, Lock, Smartphone, FileCheck, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const IndustryBanking = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-emerald-400 text-sm font-medium">Banking Industry</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Next-Generation Banking with AI
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Transform customer experiences, enhance security, and drive operational efficiency with enterprise-grade AI solutions. Hanzo delivers SOC 2, HIPAA, and GDPR-compliant infrastructure with 99.99% uptime, processing millions of transactions securely in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-[var(--white)] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-emerald-500/30 text-[var(--white)] hover:bg-emerald-900/20 px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-emerald-500/30">
                <Landmark className="h-10 w-10 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Digital Banking</h3>
                <p className="text-center text-neutral-300">Modern cloud infrastructure for digital-first banking</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-emerald-500/30">
                <Shield className="h-10 w-10 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fraud Detection</h3>
                <p className="text-center text-neutral-300">Real-time AI-powered fraud prevention and compliance</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-emerald-500/30">
                <Users className="h-10 w-10 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Customer Intelligence</h3>
                <p className="text-center text-neutral-300">Personalized experiences through AI-driven insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-emerald-400 to-teal-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              AI-powered capabilities designed for modern banking challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6"
            >
              <Shield className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fraud Prevention</h3>
              <p className="text-neutral-300">
                Advanced ML models powered by Hanzo's Data & AI platform for real-time fraud detection with 99.5% accuracy. Process millions of transactions per second with automated anomaly detection, reducing fraud losses by 85% while minimizing false positives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6"
            >
              <TrendingUp className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Risk Analytics</h3>
              <p className="text-neutral-300">
                AI-driven credit risk assessment with predictive analytics, accelerating time-to-insight by 70%. Automated portfolio stress testing and regulatory compliance monitoring ensure Basel III and Dodd-Frank adherence while optimizing capital allocation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6"
            >
              <Users className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Intelligence</h3>
              <p className="text-neutral-300">
                Deliver hyper-personalized product recommendations and experiences using Hanzo's AI models. Understand customer behavior, predict churn with 35% higher retention rates, and increase revenue by 25% through AI-powered next-best-action recommendations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6"
            >
              <Smartphone className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Digital Assistant</h3>
              <p className="text-neutral-300">
                Deploy conversational AI chatbots powered by Hanzo's frontier AI models for 24/7 customer service. Handle account inquiries, transaction processing, and personalized financial advice with natural language understanding, reducing support costs by 40%.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6"
            >
              <FileCheck className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Document Processing</h3>
              <p className="text-neutral-300">
                Intelligent document extraction and processing powered by generative AI for 60% faster loan approvals. Automate KYC verification, extract data from unstructured documents, and streamline customer onboarding with AI-powered validation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6"
            >
              <Lock className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AML & Compliance</h3>
              <p className="text-neutral-300">
                Automated anti-money laundering detection with AI-powered transaction surveillance. Achieve compliance certification 3x faster with continuous monitoring for SOC 2, PCI DSS, and regional regulations. Automated suspicious activity reporting with full audit trails.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-emerald-400 to-teal-400">
              Industry Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real-world applications transforming banking operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Intelligent Fraud Detection</h3>
              <p className="text-emerald-300 mb-4">
                Protect customers and reduce losses with AI-powered fraud detection using Hanzo's real-time ML infrastructure.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Process millions of transactions per second with Hanzo Edge for sub-50ms detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Behavioral biometrics and pattern recognition with 99.5% accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Automated case management reducing investigation time by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Outcome: 85% reduction in fraud losses, $2M+ saved annually per institution</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Credit Risk Assessment</h3>
              <p className="text-neutral-300 mb-4">
                Make faster, more accurate lending decisions with AI-driven risk models powered by Hanzo's advanced analytics platform.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Alternative data analysis processing petabytes of data for expanded credit access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Real-time portfolio risk monitoring and automated stress testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Automated underwriting with Hanzo Functions reducing approval time by 70%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Outcome: 15% increase in loan approvals, 20% reduction in default rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Conversational Banking</h3>
              <p className="text-neutral-300 mb-4">
                Deliver 24/7 customer service with AI-powered virtual assistants built on Hanzo's unified AI platform.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Natural language understanding powered by frontier AI models (GPT-4, Claude)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Automated transaction processing handling 10,000+ interactions per minute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Personalized financial advice with context-aware recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Outcome: 40% reduction in support costs, 90% customer satisfaction</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
              <p className="text-neutral-300 mb-4">
                Streamline compliance operations with intelligent automation powered by Hanzo's secure, auditable infrastructure.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Automated KYC and customer due diligence reducing onboarding time by 80%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Real-time transaction surveillance across all channels with AI detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Automated regulatory reporting with immutable audit trails and data sovereignty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Outcome: 3x faster compliance certification, zero regulatory violations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-2xl p-8 md:p-12 border border-emerald-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Banking Operations</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Partner with Hanzo to deliver secure, intelligent, and customer-centric banking experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-[var(--white)] px-8 py-6 text-lg">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-emerald-500/30 text-[var(--white)] hover:bg-emerald-900/20 px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryBanking;
