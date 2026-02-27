'use client'

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Terms = () => {
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
              <FileText className="w-3.5 h-3.5" />
              Legal
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-4"
            >
              Terms of Service
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
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Hanzo AI, Inc. (&quot;Hanzo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including our website (hanzo.ai), applications, APIs, and related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 16 years of age to use the Services. By using the Services, you represent and warrant that you meet this requirement and have the legal capacity to enter into these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To access certain features, you must create an account. You agree to provide accurate, current, and complete information, and to keep your account credentials confidential. You are responsible for all activity that occurs under your account.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Use of Services</h2>
                <h3 className="text-base font-medium text-foreground mb-2">4.1 Permitted Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may use the Services for lawful purposes in accordance with these Terms and all applicable laws and regulations.
                </p>
                <h3 className="text-base font-medium text-foreground mt-4 mb-2">4.2 Prohibited Use</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Use the Services to generate harmful, illegal, or deceptive content</li>
                  <li>Attempt to reverse-engineer, decompile, or extract model weights</li>
                  <li>Use automated systems to scrape or overload the Services</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services</li>
                  <li>Violate any applicable law, regulation, or third-party rights</li>
                  <li>Circumvent rate limits, access controls, or security measures</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. AI Services and Output</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI Services generate outputs based on your inputs. You retain ownership of your inputs. Subject to these Terms, you own the outputs generated for you, to the extent permitted by law. AI-generated outputs may not be unique and similar outputs may be generated for other users. We do not guarantee the accuracy, completeness, or fitness of any output for a particular purpose.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. API Usage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  API access is subject to rate limits and usage quotas as described in your plan. You must not share API keys or use them in a manner that exceeds your authorized usage. We reserve the right to throttle or suspend access for abuse or excessive usage.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Payment and Billing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We may change pricing with 30 days&apos; notice. Usage-based charges are billed in arrears based on metered consumption.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Services, including all software, models, documentation, and branding, are owned by Hanzo AI, Inc. and are protected by intellectual property laws. These Terms do not grant you any rights to our trademarks, logos, or brand features.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of the Services is subject to our <a href="/privacy" className="text-foreground hover:underline">Privacy Policy</a>, which describes how we collect, use, and protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, HANZO AI, INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">12. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Hanzo AI, Inc. and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of the Services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">13. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend or terminate your access to the Services at any time for violation of these Terms or for any other reason with reasonable notice. You may terminate your account at any time by contacting us. Upon termination, your right to use the Services ceases immediately.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">14. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in San Francisco County, California.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">15. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Continued use of the Services after changes constitutes acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">16. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms, please contact us at:
                </p>
                <div className="mt-2 text-muted-foreground">
                  <p>Hanzo AI, Inc.</p>
                  <p>Email: <a href="mailto:legal@hanzo.ai" className="text-foreground hover:underline">legal@hanzo.ai</a></p>
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

export default Terms;
