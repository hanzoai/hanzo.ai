import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

const BRAND_COLOR = "#fd4444";

const PRIVACY_HIGHLIGHTS = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Your data is encrypted at rest and in transit with industry-standard encryption.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Strict access controls ensure only authorized personnel can access your information.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We're transparent about what data we collect and how we use it.",
  },
  {
    icon: FileText,
    title: "Your Rights",
    description: "You have full control over your data with the right to access, modify, or delete it.",
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Privacy Policy - Hanzo AI</title>
        <meta
          name="description"
          content="Hanzo AI privacy policy - how we protect your data and respect your privacy. Privacy controls for GDPR and CCPA."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
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
                <Shield className="w-3.5 h-3.5" />
                Privacy-First
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">Your privacy</span>
                <br />
                <span className="text-neutral-400">is our priority.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                We believe in transparency and giving you control over your data.
                This policy explains how we collect, use, and protect your information.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                {["GDPR", "CCPA", "Privacy-first"].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-white">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRIVACY_HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Information We Collect</h2>
                <p className="text-neutral-300 mb-6">
                  We collect information that you provide directly to us when you use our services,
                  including personal information such as your name, email address, and payment information.
                  We also collect usage data and analytics to improve our services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">How We Use Your Information</h2>
                <p className="text-neutral-300 mb-6">
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, send communications, and develop new products and services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Sharing Your Information</h2>
                <p className="text-neutral-300 mb-6">
                  We may share your information with third-party service providers to help us operate our business
                  and provide our services. We may also share information if required by law or to protect our rights.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Data Security</h2>
                <p className="text-neutral-300 mb-6">
                  We implement appropriate security measures to protect your personal information.
                  All data is encrypted at rest with AES-256 and in transit with TLS 1.3.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Your Rights</h2>
                <p className="text-neutral-300 mb-6">
                  You can access, update, or delete your account information at any time by
                  logging into your account or contacting us directly. Under GDPR and CCPA,
                  you have additional rights including data portability and the right to opt-out.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Us</h2>
                <p className="text-neutral-300 mb-6">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@hanzo.ai" className="text-[#fd4444] hover:underline">
                    privacy@hanzo.ai
                  </a>
                </p>

                <p className="mt-8 text-neutral-500 text-sm">
                  Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </motion.div>
            </div>
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
              Questions about privacy?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
            >
              Our team is here to help. Contact us for any questions about how we handle your data.
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
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/security"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
              >
                View Security Page
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
