
import React from 'react';
import { Shield, Database, Server } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const EnterpriseFeature = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center">
      <Icon className="h-12 w-12 text-green-400 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

const MachinesEnterprise = () => {
  const features = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "SOC 2, HIPAA, and GDPR compliant infrastructure with hardware-level isolation."
    },
    {
      icon: Database,
      title: "Data Sovereignty",
      description: "Regional deployment options to meet data residency and sovereignty requirements."
    },
    {
      icon: Server,
      title: "Reserved Capacity",
      description: "Guaranteed availability with capacity reservations for critical workloads."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl font-bold mb-4">
            Enterprise-Grade Infrastructure
          </ChromeText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for organizations with the most demanding requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <EnterpriseFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachinesEnterprise;
