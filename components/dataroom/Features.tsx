'use client'

import React from "react";
import {
  BarChart3, FolderLock, Shield, Paintbrush,
  Eye, Mail, Globe, Webhook, Users, Fingerprint
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
      icon: <BarChart3 className="h-6 w-6 text-foreground/60" />,
      title: "Page-by-Page Analytics",
      description: "Track how recipients engage with every page. See time spent, completion rates, and revisits in real time."
    },
    {
      icon: <FolderLock className="h-6 w-6 text-foreground/60" />,
      title: "Secure Data Rooms",
      description: "Organize documents into structured folders for due diligence, fundraising, or any multi-document workflow."
    },
    {
      icon: <Shield className="h-6 w-6 text-foreground/60" />,
      title: "Access Controls",
      description: "Password protection, email verification, NDA agreements, expiration dates, and download restrictions."
    },
    {
      icon: <Paintbrush className="h-6 w-6 text-foreground/60" />,
      title: "Custom Branding",
      description: "White-label with your logo, colors, and custom domain. Present a professional experience to investors."
    },
    {
      icon: <Eye className="h-6 w-6 text-foreground/60" />,
      title: "Watermarking",
      description: "Dynamic watermarks with viewer information. Protect sensitive documents from unauthorized sharing."
    },
    {
      icon: <Mail className="h-6 w-6 text-foreground/60" />,
      title: "Email Verification",
      description: "Require verified email before viewing. Know exactly who is accessing your documents."
    },
    {
      icon: <Globe className="h-6 w-6 text-foreground/60" />,
      title: "Custom Domains",
      description: "Use your own domain for sharing links. Build trust with a branded URL."
    },
    {
      icon: <Webhook className="h-6 w-6 text-foreground/60" />,
      title: "Webhooks",
      description: "Real-time notifications when documents are viewed. Integrate with your CRM and workflow tools."
    },
    {
      icon: <Users className="h-6 w-6 text-foreground/60" />,
      title: "Team Management",
      description: "Multi-tenant workspaces with role-based access. Manage sharing across your organization."
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-foreground/60" />,
      title: "SSO Authentication",
      description: "Passkeys, Google, LinkedIn, SAML SSO, and Hanzo IAM single sign-on."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Share Documents With Full Visibility</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Know exactly how recipients engage with your documents. Control access, track analytics, and present professionally.
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
