import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, Shield, Clock, ArrowRight, CheckCircle } from "lucide-react";

const BRAND_COLOR = "#fd4444";

const TERMS_HIGHLIGHTS = [
  {
    icon: FileText,
    title: "Clear Terms",
    description: "Plain language terms that are easy to understand, no legal jargon.",
  },
  {
    icon: Scale,
    title: "Fair Use",
    description: "Reasonable usage policies designed for developers and businesses.",
  },
  {
    icon: Shield,
    title: "Data Rights",
    description: "Your content remains yours. We only use it to provide our services.",
  },
  {
    icon: Clock,
    title: "Notice of Changes",
    description: "We'll notify you of any material changes to these terms.",
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Terms of Service - Hanzo AI</title>
        <meta
          name="description"
          content="Hanzo AI terms of service - the conditions for using our platform and services."
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
                <FileText className="w-3.5 h-3.5" />
                Legal Agreement
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">Terms of</span>
                <br />
                <span className="text-neutral-400">Service.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                These terms govern your use of Hanzo AI platform and services.
                We've written them in plain language to be as clear as possible.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="#terms-content"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Read Full Terms
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  to="/privacy"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  Privacy Policy
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Terms Highlights */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TERMS_HIGHLIGHTS.map((item, index) => {
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

        {/* Terms Content */}
        <section id="terms-content" className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Use of Services</h2>
                <p className="text-neutral-300 mb-6">
                  Our services are provided for business and development purposes. You may use our services
                  only as permitted by these terms and any applicable laws and regulations.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">User Accounts</h2>
                <p className="text-neutral-300 mb-6">
                  You may need to create an account to use some of our services. You are responsible for
                  maintaining the security of your account and password. Hanzo AI cannot and will not
                  be liable for any loss or damage from your failure to comply with this security obligation.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Content and Intellectual Property</h2>
                <p className="text-neutral-300 mb-6">
                  Content you create using our services remains yours. However, by using our services,
                  you grant us a license to use, host, store, reproduce, and modify such content as needed
                  to provide the services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">API Usage and Rate Limits</h2>
                <p className="text-neutral-300 mb-6">
                  Our APIs are subject to rate limits and usage restrictions. Excessive use that negatively
                  impacts our services or other users may result in temporary or permanent restriction of your access.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Termination</h2>
                <p className="text-neutral-300 mb-6">
                  We may terminate or suspend your access to our services immediately, without prior notice
                  or liability, for any reason, including breach of these Terms.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Disclaimer of Warranties</h2>
                <p className="text-neutral-300 mb-6">
                  Our services are provided "as is" and "as available" without any warranties of any kind,
                  either express or implied.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Limitation of Liability</h2>
                <p className="text-neutral-300 mb-6">
                  In no event shall Hanzo AI be liable for any indirect, incidental, special,
                  consequential or punitive damages, or any loss of profits or revenues.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Changes to Terms</h2>
                <p className="text-neutral-300 mb-6">
                  We reserve the right to modify these terms at any time. We will provide notice of
                  significant changes by posting an announcement on our website and sending you an email.
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
              Have questions?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
            >
              Our team is available to answer any questions about our terms of service.
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
              <a
                href="mailto:legal@hanzo.ai"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
              >
                legal@hanzo.ai
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
