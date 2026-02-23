'use client'


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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex p-2 rounded-full mb-4"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)", color: "var(--primary)" }}
          >
            <History className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Enterprise-Grade Audit & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            className="relative rounded-xl bg-card overflow-hidden p-6"
            style={{ border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)" }}
          >
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full" style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}></div>
            <div
              className="p-3 rounded-lg inline-flex mb-4"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Real-Time Monitoring</h3>
            <p className="text-muted-foreground mb-4">
              Watch your AI agents' work in real-time through a secure virtual desktop environment.
              Every action is visible and recordable.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Live screen sharing capability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Activity dashboards and alerts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Performance metrics tracking</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-xl bg-card overflow-hidden p-6"
            style={{ border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)" }}
          >
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full" style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}></div>
            <div
              className="p-3 rounded-lg inline-flex mb-4"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <GitCommit className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Comprehensive Audit Logs</h3>
            <p className="text-muted-foreground mb-4">
              Every action taken by AI agents is meticulously logged and stored securely.
              Search, filter, and export logs for compliance reporting.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Tamper-proof logging system</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Full record of all decisions and actions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Advanced search and filtering options</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-xl bg-card overflow-hidden p-6"
            style={{ border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)" }}
          >
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full" style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}></div>
            <div
              className="p-3 rounded-lg inline-flex mb-4"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise Security</h3>
            <p className="text-muted-foreground mb-4">
              Military-grade encryption, role-based access control, and compliance
              with industry standards ensure your data remains secure.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Enterprise security with GDPR and CCPA controls</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">End-to-end encryption for all data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Single sign-on (SSO) and SCIM support</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-8 text-center"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)" }}
        >
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center">
              <Lock className="h-6 w-6 mr-2" />
              <span className="text-muted-foreground">SOC 2*</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-6 w-6 mr-2" />
              <span className="text-muted-foreground">HIPAA Ready</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-6 w-6 mr-2" />
              <span className="text-muted-foreground">GDPR</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-6 w-6 mr-2" />
              <span className="text-muted-foreground">CCPA</span>
            </div>
            <div className="flex items-center">
              <Bookmark className="h-6 w-6 mr-2" />
              <span className="text-muted-foreground">99.9% Uptime SLA</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4">*SOC 2 audit in progress</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditFeatures;
