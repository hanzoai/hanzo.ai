import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  Shield,
  Users,
  Zap,
  Globe,
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  Server,
  Lock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#fd4444";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade security with GDPR controls, encryption, and comprehensive audit logging."
  },
  {
    icon: Users,
    title: "User Management",
    description: "SCIM provisioning, SSO integration, and granular role-based access control."
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Multi-region deployment with 99.99% uptime SLA and dedicated support channels."
  },
  {
    icon: Zap,
    title: "Custom AI Resources",
    description: "Tailored AI credits, custom models, and dedicated compute infrastructure."
  }
];

const benefits = [
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Priority support with dedicated account managers, guaranteed response times, and direct access to our engineering team.",
    gradient: "from-[#fd4444]/20 to-orange-900/20",
    border: "border-[#fd4444]/30"
  },
  {
    icon: Server,
    title: "Custom Integrations",
    description: "Seamlessly integrate with your existing infrastructure, identity providers, and business systems.",
    gradient: "from-emerald-900/20 to-teal-900/20",
    border: "border-emerald-500/30"
  },
  {
    icon: Lock,
    title: "Flexible Deployment",
    description: "Deploy on our cloud, your cloud, or on-premises. We support hybrid deployments for security and compliance.",
    gradient: "from-violet-900/20 to-purple-900/20",
    border: "border-violet-500/30"
  }
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 1hr", label: "Response Time" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "24/7", label: "Support" },
];

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Enterprise Solutions - Hanzo AI Platform</title>
        <meta name="description" content="Scale your business with enterprise-grade AI solutions. Dedicated support, custom integrations, and advanced security features for large organizations." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, #8b5cf6 0%, transparent 70%)`,
                filter: "blur(80px)",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Building2 className="w-3.5 h-3.5" />
                Enterprise Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">AI at</span>
                <br />
                <span className="text-neutral-400">enterprise scale.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                Scale your business with enterprise-grade AI solutions. Get dedicated support,
                custom integrations, and advanced security features designed for large organizations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Sales
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  View Pricing
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Enterprise Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Everything you need to deploy AI at scale with confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Enterprise Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Choose Hanzo Enterprise?</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Built for organizations that demand the highest standards.
              </p>
            </motion.div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${benefit.gradient} rounded-xl p-8 border ${benefit.border}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${BRAND_COLOR}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-neutral-300">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 md:px-8 bg-neutral-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: BRAND_COLOR }} />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security & Compliance</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
                Enterprise-grade security with industry-leading compliance standards.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {["SOC 2 Audit in Progress", "GDPR Ready", "CCPA Compliant", "HIPAA BAA Available", "Enterprise SSO"].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-white">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fd4444]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#fd4444]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to get started?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
            >
              Contact our enterprise sales team for a personalized demo and custom pricing
              that meets your organization's unique needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:enterprise@hanzo.ai"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
              >
                enterprise@hanzo.ai
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Enterprise;
