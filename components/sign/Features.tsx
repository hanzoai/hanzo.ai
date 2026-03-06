'use client'

import React from "react";
import {
  PenLine, FileText, Users, Webhook,
  Shield, Layers, Mail, Fingerprint, Eye, Globe
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-border transition-colors duration-300">
      <div className="bg-primary/5 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <PenLine className="h-6 w-6 text-foreground/60" />,
      title: "E-Signatures",
      description: "Legally binding electronic signatures with full audit trails and certificate of completion."
    },
    {
      icon: <FileText className="h-6 w-6 text-foreground/60" />,
      title: "Templates",
      description: "Create reusable templates with pre-defined signing fields. Send documents for signature in seconds."
    },
    {
      icon: <Users className="h-6 w-6 text-foreground/60" />,
      title: "Teams & Workspaces",
      description: "Multi-tenant workspaces with role-based access. Manage signing across your organization."
    },
    {
      icon: <Webhook className="h-6 w-6 text-foreground/60" />,
      title: "Webhooks & API",
      description: "Real-time event notifications and a complete REST API for programmatic document management."
    },
    {
      icon: <Shield className="h-6 w-6 text-foreground/60" />,
      title: "Security & Compliance",
      description: "End-to-end encryption, SOC 2 ready, and GDPR compliant. Your documents are safe."
    },
    {
      icon: <Layers className="h-6 w-6 text-foreground/60" />,
      title: "Custom Branding",
      description: "White-label the signing experience with your logo, colors, and custom domain."
    },
    {
      icon: <Mail className="h-6 w-6 text-foreground/60" />,
      title: "Email Notifications",
      description: "Automatic email reminders and notifications for pending signatures."
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-foreground/60" />,
      title: "Authentication",
      description: "Passkeys, Google SSO, and Hanzo IAM single sign-on for secure access."
    },
    {
      icon: <Eye className="h-6 w-6 text-foreground/60" />,
      title: "Real-Time Status",
      description: "Track document status in real-time. See who has signed, who hasn't, and send reminders."
    },
    {
      icon: <Globe className="h-6 w-6 text-foreground/60" />,
      title: "Multi-Language",
      description: "Support for 20+ languages. Localized signing experience for global teams."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need for Document Signing</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            A complete document signing platform with templates, workflows, and enterprise-grade security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
