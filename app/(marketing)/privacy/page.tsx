'use client'

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-12 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
            >
              <Shield className="w-3.5 h-3.5" />
              Legal
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm text-muted-foreground"
            >
              Last updated: February 2026
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto prose prose-invert prose-sm max-w-none">
            <div className="space-y-10 text-foreground/80">

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hanzo AI, Inc. (&quot;Hanzo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our website (hanzo.ai), applications, APIs, and related services (collectively, the &quot;Services&quot;).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
                <h3 className="text-base font-medium text-foreground mb-2">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Account registration information (name, email address, password)</li>
                  <li>Organization and billing information</li>
                  <li>Communications you send to us (support requests, feedback)</li>
                  <li>Content you submit through our Services (prompts, code, files)</li>
                </ul>

                <h3 className="text-base font-medium text-foreground mt-4 mb-2">2.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Device and browser information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, timestamps)</li>
                  <li>API usage metrics (request counts, model usage, latency)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. AI Model Inputs and Outputs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you use our AI Services, your prompts and inputs are processed to generate responses. We do not use your inputs or outputs to train our models unless you explicitly opt in. Enterprise customers may negotiate additional data handling terms through a Data Processing Agreement (DPA).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li><strong className="text-foreground/90">Service Providers:</strong> Third parties that perform services on our behalf (hosting, analytics, payment processing)</li>
                  <li><strong className="text-foreground/90">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                  <li><strong className="text-foreground/90">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong className="text-foreground/90">With Your Consent:</strong> When you have given us permission to share</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures including encryption at rest (AES-256) and in transit (TLS 1.3), access controls, audit logging, and regular security assessments. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide Services. We will delete or anonymize your data upon request, subject to legal retention obligations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  To exercise these rights, contact us at <a href="mailto:privacy@hanzo.ai" className="text-foreground hover:underline">privacy@hanzo.ai</a>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws, including GDPR and CCPA.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Services are not directed to individuals under 16. We do not knowingly collect personal information from children. If we learn that we have collected information from a child, we will take steps to delete it promptly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-2 text-muted-foreground">
                  <p>Hanzo AI, Inc.</p>
                  <p>Email: <a href="mailto:privacy@hanzo.ai" className="text-foreground hover:underline">privacy@hanzo.ai</a></p>
                  <p>Web: <a href="/contact" className="text-foreground hover:underline">hanzo.ai/contact</a></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Privacy;
