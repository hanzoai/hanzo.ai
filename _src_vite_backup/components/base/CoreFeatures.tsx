
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { 
  Database, Lock, Code, Workflow, 
  HardDrive, Brain, Server, File 
} from "lucide-react";

const CoreFeatures = () => {
  const features = [
    {
      icon: Database,
      title: "Postgres Database",
      description: "Enterprise-grade relational database with security built-in.",
      features: [
        "Fully portable and extensible relational database",
        "Built-in row-level security (RLS) and custom database triggers",
        "Real-time and asynchronous data handling"
      ],
      color: "blue"
    },
    {
      icon: Server,
      title: "Embedded SQLite",
      description: "Lightweight database for rapid development with scaling options.",
      features: [
        "Lightweight, embedded SQLite for rapid local development and testing",
        "Instant real-time synchronization on the user side",
        "Seamlessly scalable to Hanzo's planetary-scale Datastore"
      ],
      color: "green"
    },
    {
      icon: Lock,
      title: "Authentication",
      description: "Secure user management with multiple auth methods.",
      features: [
        "Email/password, OAuth providers, and magic link authentication",
        "Customizable user roles, permissions, and multi-factor authentication",
        "Integrated email verification and password recovery"
      ],
      color: "purple"
    },
    {
      icon: Code,
      title: "Edge Functions",
      description: "Serverless compute with global distribution.",
      features: [
        "Deploy globally distributed serverless functions without server management",
        "Easy integration with external APIs and third-party services",
        "Secure, scalable, and minimal latency"
      ],
      color: "amber"
    },
    {
      icon: Workflow,
      title: "Realtime Subscriptions",
      description: "WebSocket-based data synchronization for live updates.",
      features: [
        "WebSocket-based data synchronization for live collaboration",
        "Built-in event broadcasting and subscription management",
        "Real-time notifications and updates"
      ],
      color: "indigo"
    },
    {
      icon: HardDrive,
      title: "File Storage",
      description: "Efficient storage and serving of user content.",
      features: [
        "Efficient storage and management of files, images, and videos",
        "Support for file versioning, access controls, and secure URLs",
        "Global CDN for fast content delivery"
      ],
      color: "cyan"
    },
    {
      icon: Brain,
      title: "Vector Embeddings",
      description: "AI-ready database for semantic search and ML features.",
      features: [
        "Built-in integration with ML frameworks like OpenAI and Hugging Face",
        "Optimized for semantic search, recommendations, and AI use cases",
        "Efficient storage and querying of high-dimensional vectors"
      ],
      color: "rose"
    },
    {
      icon: File,
      title: "Instant APIs",
      description: "Automatically generated APIs for data access.",
      features: [
        "RESTful and GraphQL API generation for data access and manipulation",
        "Automatic Swagger documentation and API versioning support",
        "Customizable endpoints and middleware support"
      ],
      color: "blue"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--white)] mb-4">Core Features</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Everything you need to build modern, scalable applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              delay={index}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
