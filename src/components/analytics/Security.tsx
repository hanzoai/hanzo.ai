
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle } from "lucide-react";

const certifications = [
  { name: "SOC 2 Type II", details: "Audit in progress. Enterprise security controls." },
  { name: "GDPR ready", details: "Data protection controls for EU compliance." },
  { name: "Privacy-first", details: "Built with privacy-by-design principles." },
  { name: "HIPAA capable", details: "BAA available for healthcare use cases." }
];

const SecurityFeatures = [
  "End-to-end encryption",
  "Data residency controls",
  "Custom data retention policies",
  "Role-based access control",
  "Regular security audits",
  "Privacy-focused data collection",
  "Automated compliance monitoring"
];

const Security = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900/40 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <ShieldCheck className="h-10 w-10 text-[#fd4444]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Enterprise-Grade Security & Compliance</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Secure by design, ensuring your data meets stringent compliance standards.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl border border-gray-800 p-6 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-[#fd4444]/20 rounded-full border border-[#fd4444]/30">
                  <Lock className="h-8 w-8 text-[#fd4444]" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-6">Security Features</h3>
              
              <ul className="space-y-3">
                {SecurityFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-[#fd4444] mr-3 flex-shrink-0" />
                    <span className="text-neutral-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl border border-gray-800 p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Compliance Certifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-gray-800/30 rounded-lg p-5 border border-gray-700"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 p-2 bg-[#fd4444]/30 rounded-full">
                        <ShieldCheck className="h-6 w-6 text-[#fd4444]" />
                      </div>
                      <h4 className="text-lg font-medium">{cert.name}</h4>
                    </div>
                    <p className="mt-3 text-neutral-400">{cert.details}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 bg-[#fd4444]/10 rounded-lg p-5 border border-[#fd4444]/20">
                <div className="flex">
                  <div className="mr-4 p-2 bg-[#fd4444]/20 rounded-full">
                    <svg className="h-6 w-6 text-[#fd4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Data Privacy Commitment</h4>
                    <p className="text-neutral-400">
                      We believe privacy is a fundamental right. Hanzo Analytics is designed with privacy-first principles and gives you full control over your data collection practices.
                    </p>
                    <a href="#privacy-policy" className="inline-block mt-3 text-[#fd4444] hover:text-[#ff6b6b] transition-colors">
                      Read our privacy policy →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;
