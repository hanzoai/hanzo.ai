
import React from "react";
import { Server, Database, Shield, Zap, Layers, GitBranch } from "lucide-react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechCard = ({ icon, title, description }: TechCardProps) => {
  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

const TechStack = () => {
  const techItems = [
    {
      icon: <Server className="h-8 w-8 text-amber-400" />,
      title: "Cloud-Native Architecture",
      description: "Built on serverless infrastructure that scales automatically with your business demands."
    },
    {
      icon: <Database className="h-8 w-8 text-amber-400" />,
      title: "Real-time Data",
      description: "Access to real-time inventory, pricing, and customer data across all sales channels."
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-400" />,
      title: "Enterprise Security",
      description: "PCI-compliant infrastructure with encryption at rest and in transit for all sensitive data."
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-400" />,
      title: "High Performance",
      description: "Low latency APIs with global CDN distribution for lightning-fast experiences."
    },
    {
      icon: <Layers className="h-8 w-8 text-amber-400" />,
      title: "Composable Architecture",
      description: "Mix and match components to create custom solutions tailored to your specific needs."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-amber-400" />,
      title: "Developer Workflow",
      description: "Full CI/CD support with staging environments and version control integration."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900/30 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Technology Stack</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Built on modern technologies for performance, security, and scalability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, index) => (
            <TechCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
