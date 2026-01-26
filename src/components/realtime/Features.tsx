
import React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Globe, Users, Clock, Lock, Workflow, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
    >
      <div className="h-12 w-12 rounded-lg bg-red-900/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-[#fd4444]" />
      </div>
      <h3 className="text-xl font-semibold text-[var(--white)] mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "WebSocket Messaging",
      description: "Reliable, low-latency WebSocket connections with automatic reconnection and health monitoring."
    },
    {
      icon: Workflow,
      title: "Pub/Sub Channels",
      description: "Create and manage channels for organized communication between clients and services."
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Deploy to 200+ edge locations worldwide for single-digit millisecond latency."
    },
    {
      icon: Users,
      title: "Presence Detection",
      description: "Track user online status and activity with built-in presence management."
    },
    {
      icon: Clock,
      title: "Event History",
      description: "Configurable event history allows clients to catch up on missed updates."
    },
    {
      icon: Zap,
      title: "Message Filtering",
      description: "Advanced filtering to ensure clients only receive relevant data updates."
    },
    {
      icon: Lock,
      title: "Authentication",
      description: "Secure communication with JWT authentication and channel-level access control."
    },
    {
      icon: Shield,
      title: "Rate Limiting",
      description: "Protect your services with configurable rate limiting and abuse prevention."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">
            Key Features
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Everything you need to build scalable real-time applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
