
import React from "react";
import { motion } from "framer-motion";
import { 
  Eye, 
  History, 
  GitCommit, 
  Shield, 
  Lock, 
  Bookmark,
  CheckCircle
} from "lucide-react";

const AuditFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-2 rounded-full bg-indigo-900/20 border border-indigo-500/20 text-indigo-400 mb-4">
            <History className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enterprise-Grade Audit & Security
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Full transparency and accountability with comprehensive audit logs 
            and enterprise security features that meet the most stringent compliance requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-xl border border-indigo-500/20 bg-[var(--black)]/50 overflow-hidden p-6"
          >
            <div className="absolute top-0 right-0 h-20 w-20 bg-indigo-500/10 rounded-bl-full"></div>
            <div className="bg-indigo-900/20 p-3 rounded-lg inline-flex mb-4">
              <Eye className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
            <p className="text-neutral-400 mb-4">
              Watch your AI agents' work in real-time through a secure virtual desktop environment. 
              Every action is visible and recordable.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Live screen sharing capability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Activity dashboards and alerts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Performance metrics tracking</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-xl border border-indigo-500/20 bg-[var(--black)]/50 overflow-hidden p-6"
          >
            <div className="absolute top-0 right-0 h-20 w-20 bg-indigo-500/10 rounded-bl-full"></div>
            <div className="bg-indigo-900/20 p-3 rounded-lg inline-flex mb-4">
              <GitCommit className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Audit Logs</h3>
            <p className="text-neutral-400 mb-4">
              Every action taken by AI agents is meticulously logged and stored securely. 
              Search, filter, and export logs for compliance reporting.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Tamper-proof logging system</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Full record of all decisions and actions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Advanced search and filtering options</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-xl border border-indigo-500/20 bg-[var(--black)]/50 overflow-hidden p-6"
          >
            <div className="absolute top-0 right-0 h-20 w-20 bg-indigo-500/10 rounded-bl-full"></div>
            <div className="bg-indigo-900/20 p-3 rounded-lg inline-flex mb-4">
              <Shield className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
            <p className="text-neutral-400 mb-4">
              Military-grade encryption, role-based access control, and compliance 
              with industry standards ensure your data remains secure.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">SOC 2, HIPAA, GDPR, and CCPA compliant</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">End-to-end encryption for all data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Single sign-on (SSO) and SCIM support</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-8 text-center"
        >
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-neutral-300">SOC 2 Type II</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-neutral-300">HIPAA</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-neutral-300">GDPR</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-neutral-300">CCPA</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-neutral-300">ISO 27001</span>
            </div>
            <div className="flex items-center">
              <Bookmark className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-neutral-300">99.9% Uptime SLA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditFeatures;
