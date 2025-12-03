
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Lock,
  Eye,
  AlertTriangle,
  FileCheck,
  KeyRound,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const SolutionCybersecurity = () => {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data encrypted at rest and in transit using industry-standard AES-256 encryption and TLS 1.3 protocols. Military-grade encryption with secure key management and automatic rotation."
    },
    {
      icon: KeyRound,
      title: "Advanced Identity Management",
      description: "Multi-factor authentication with SMS, email, authenticator apps, and biometric verification. Passwordless authentication using magic links, WebAuthn, and biometrics for frictionless security."
    },
    {
      icon: ShieldCheck,
      title: "Role-Based Access Control",
      description: "Define and manage permissions with customizable roles, user groups, and fine-grained access policies. JWT with short-lived tokens and secure refresh mechanisms."
    },
    {
      icon: Eye,
      title: "Enterprise SSO & Federation",
      description: "Seamless authentication across multiple applications with SAML, OIDC, and enterprise identity provider integrations. Active Directory and LDAP support with custom branding."
    },
    {
      icon: FileCheck,
      title: "Compliance & Auditing",
      description: "SOC 2, GDPR, HIPAA, and PCI DSS compliance with automated security assessments. Comprehensive logging and reporting for all user activities and access attempts."
    },
    {
      icon: AlertTriangle,
      title: "24/7 Threat Monitoring",
      description: "Continuous vulnerability monitoring with responsible disclosure program. Dedicated security team responds to incidents 24/7 with established protocols to identify, contain, and remediate threats."
    }
  ];

  const benefits = [
    "Protect all data with AES-256 encryption at rest and TLS 1.3 in transit with automatic key rotation",
    "Deploy across global regions (US, Canada, EU) with data residency controls and regional isolation",
    "Achieve SOC 2, GDPR, HIPAA, and PCI DSS compliance with built-in security frameworks",
    "Implement zero-trust security with multi-factor authentication and passwordless options",
    "Monitor continuously with 24/7 threat detection and automated incident response protocols",
    "Integrate seamlessly with Active Directory, LDAP, and major enterprise identity providers"
  ];

  const securityServices = [
    {
      title: "Identity & Access Management",
      description: "Complete identity solutions with MFA, passwordless authentication, SSO with SAML/OIDC, and social login integrations. Comprehensive tools for user management, profile administration, and account recovery with pre-built UI components.",
      results: "Secure authentication in minutes"
    },
    {
      title: "Infrastructure Security",
      description: "SOC 2 compliant data centers with 24/7 physical security, redundant power and network systems. Private WireGuard networking, DDoS protection, firewall rules, and bot mitigation built into the platform.",
      results: "99.99% uptime with zero-trust security"
    },
    {
      title: "Compliance Management",
      description: "Built-in compliance features for SOC 2, GDPR, HIPAA, and CCPA requirements. Automated security assessments, data residency controls, consent management for privacy compliance, and audit logging for all activities.",
      results: "Faster certification with audit trails"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Cybersecurity Solutions - Hanzo AI</title>
        <meta name="description" content="Enterprise cybersecurity solutions to protect your business from evolving threats. Zero trust, AI-powered threat detection, and 24/7 monitoring." />
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
              <Shield className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl font-bold mb-6" gradient="bg-gradient-to-r from-red-400 via-orange-400 to-red-500">
              Cybersecurity Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8">
              Enterprise-grade security built into every layer of the stack. From AES-256 encryption
              and zero-trust architecture to advanced identity management and 24/7 threat monitoring.
              Achieve compliance faster while protecting what matters most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Request Assessment</Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg">
                <Link to="/security">Learn More</Link>
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
              <h2 className="text-3xl font-bold mb-4">Comprehensive Security Solutions</h2>
              <p className="text-neutral-400 text-lg">
                Multi-layered security approach to protect your entire digital ecosystem
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
              <h2 className="text-3xl font-bold mb-4">Why Choose Hanzo Cybersecurity</h2>
              <p className="text-neutral-400 text-lg">
                Battle-tested security that protects what matters most
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

          {/* Security Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security Services</h2>
              <p className="text-neutral-400 text-lg">
                Comprehensive security solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {securityServices.map((service, index) => (
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

          {/* Security Infrastructure Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security-First Infrastructure</h2>
              <p className="text-neutral-400 text-lg">
                Built-in security across our entire product suite
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-8">
                <Shield className="h-10 w-10 text-purple-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-3">Global Data Regions</h3>
                <p className="text-neutral-300 mb-4">
                  Deploy across multiple geographic regions to ensure data residency compliance and low-latency access:
                </p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>United States (MCI - Kansas City): us-central-1</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Canada (YVR - Vancouver): ca-west-1</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>European Union (BCN - Barcelona): eu-west-1</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-8">
                <Lock className="h-10 w-10 text-purple-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-3">Security Products</h3>
                <p className="text-neutral-300 mb-4">
                  Comprehensive security tools integrated across the platform:
                </p>
                <div className="space-y-3">
                  <Link to="/identity" className="block group">
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <KeyRound className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Hanzo Identity</span>
                    </div>
                    <p className="text-neutral-400 text-sm ml-7">Complete IAM with SSO, MFA, and RBAC</p>
                  </Link>
                  <Link to="/security" className="block group">
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <ShieldCheck className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Platform Security</span>
                    </div>
                    <p className="text-neutral-400 text-sm ml-7">Infrastructure security and compliance</p>
                  </Link>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold mb-4">Secure Your Applications Today</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Implement enterprise-grade security in minutes with our comprehensive cybersecurity solutions.
              From encryption to identity management, we have you covered with SOC 2 compliant infrastructure
              and 24/7 threat monitoring.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Free Security Assessment <ArrowRight className="ml-2 h-5 w-5" />
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

export default SolutionCybersecurity;
