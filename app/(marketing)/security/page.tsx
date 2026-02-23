'use client'

import Link from "next/link";

import React from "react";
import { motion } from "framer-motion";

import {
  Shield,
  Lock,
  CheckCircle,
  Server,
  Eye,
  Key,
  FileCheck,
  Globe,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Fingerprint,
  Database,
  Network,
  Clock,
  Users,
  FileText,
  Bug
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

const COMPLIANCE_BADGES = [
  { name: "SOC 2 Type II", description: "Audit in progress" },
  { name: "GDPR", description: "Data protection ready" },
  { name: "CCPA", description: "Privacy controls" },
  { name: "HIPAA", description: "BAA available" },
];

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted at rest with AES-256 and in transit with TLS 1.3. Your data remains protected throughout its lifecycle.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description:
      "Enforce MFA across your organization with support for TOTP, hardware keys, and biometric authentication.",
  },
  {
    icon: Key,
    title: "API Key Management",
    description:
      "Fine-grained API key permissions with automatic rotation, usage tracking, and instant revocation capabilities.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Granular permissions with predefined roles and custom access policies. Audit trails for all access events.",
  },
  {
    icon: Network,
    title: "Private Networking",
    description:
      "VPC peering, private endpoints, and IP allowlisting. Keep your infrastructure isolated and secure.",
  },
  {
    icon: Database,
    title: "Data Residency",
    description:
      "Choose where your data lives. Deploy to specific regions to meet compliance and sovereignty requirements.",
  },
];

const ENTERPRISE_FEATURES = [
  "Single Sign-On (SAML, OIDC)",
  "Custom security policies",
  "Dedicated security engineer",
  "Priority incident response",
  "Custom data retention",
  "Advanced audit logging",
  "Penetration testing reports",
  "Security questionnaire support",
];

const EDGE_FEATURES = [
  { name: "Global Edge Network", description: "15+ regions worldwide" },
  { name: "Auto-scaling", description: "Scale to zero or millions" },
  { name: "Data Residency", description: "Choose your data location" },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Shield className="w-3.5 h-3.5" />
                SOC 2 Audit in Progress
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">Security without</span>
                <br />
                <span className="text-neutral-400">compromise.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                Enterprise-grade security built into every layer. Your data is encrypted,
                access is controlled, and compliance is maintained by default.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Talk to Security Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="https://docs.hanzo.ai/security"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  Security Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>

              {/* Compliance Badges */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {COMPLIANCE_BADGES.map((badge) => (
                  <div
                    key={badge.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800"
                  >
                    <CheckCircle className="w-4 h-4 text-white/70" />
                    <span className="text-sm font-medium text-white">{badge.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Defense in Depth
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Multiple layers of security controls protect your applications and data
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECURITY_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                  style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                >
                  Infrastructure
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Built on secure foundations
                </h2>
                <p className="text-neutral-400 mb-8">
                  Our infrastructure runs on enterprise-grade data centers with 24/7 physical
                  security, redundant power, and isolated network architecture. Every component
                  is designed with security as the primary requirement.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Server, text: "KVM hardware-isolated virtual machines" },
                    { icon: Eye, text: "24/7 security monitoring and alerting" },
                    { icon: Clock, text: "99.999% uptime SLA with automatic failover" },
                    { icon: FileCheck, text: "Automated security patching and updates" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-neutral-500" />
                        <span className="text-neutral-300">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 rounded-xl p-8 border border-neutral-800"
              >
                <Globe className="w-10 h-10 text-neutral-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Global High-Performance Edge</h3>
                <p className="text-neutral-400 mb-6">
                  Deploy globally with automatic scaling and data residency controls
                  to meet compliance requirements.
                </p>

                <div className="space-y-4">
                  {EDGE_FEATURES.map((feature) => (
                    <div
                      key={feature.name}
                      className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{feature.name}</span>
                      </div>
                      <span className="text-sm text-neutral-400">{feature.description}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise Security */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/50 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                <div className="bg-gradient-to-br from-white/10 to-transparent rounded-xl p-8 border border-white/20">
                  <Shield className="w-10 h-10 mb-6" style={{ color: BRAND_COLOR }} />
                  <h3 className="text-xl font-bold text-white mb-4">
                    Enterprise Security Program
                  </h3>
                  <p className="text-neutral-400 mb-6">
                    For organizations with advanced security requirements, our Enterprise plan
                    includes dedicated security support and custom configurations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ENTERPRISE_FEATURES.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center mt-8 text-sm font-medium transition-colors"
                    style={{ color: BRAND_COLOR }}
                  >
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                  style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                >
                  Enterprise
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Security for the most demanding organizations
                </h2>
                <p className="text-neutral-400 mb-6">
                  Whether you're in healthcare, finance, or government, Hanzo meets the
                  security and compliance requirements of regulated industries.
                </p>
                <p className="text-neutral-400">
                  Our security team works directly with enterprise customers to understand
                  their unique requirements and implement appropriate controls.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vulnerability Disclosure */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/20 to-transparent rounded-xl p-8 border border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Bug className="w-6 h-6 text-white/60" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Responsible Disclosure
                  </h3>
                  <p className="text-neutral-400 mb-4">
                    We take security vulnerabilities seriously and appreciate the work of
                    security researchers. If you discover a vulnerability, please report it
                    responsibly.
                  </p>
                  <a
                    href="mailto:security@hanzo.ai"
                    className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white/60 transition-colors"
                  >
                    security@hanzo.ai
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Ready to secure your AI infrastructure?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
            >
              Start building with enterprise-grade security today. Our team is ready to help
              you meet your compliance requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/signup"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
              >
                Schedule Security Review
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="https://docs.hanzo.ai/security"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-neutral-500 hover:text-white transition-colors"
              >
                Read the security documentation
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Security;
