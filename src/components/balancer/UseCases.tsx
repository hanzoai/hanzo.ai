
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Shield, FileText, Server as LoadBalancer } from "lucide-react";

const useCases = [
  {
    id: "ingress-controller",
    icon: Server,
    title: "Ingress Controller",
    description: "Deploy Hanzo Balancer as your Kubernetes Ingress Controller to simplify networking, secure your APIs, and reduce the costs of managing your microservices with a dynamic, production-ready Kubernetes Ingress routing solution.",
    learnMoreLink: "#ingress"
  },
  {
    id: "waf",
    icon: Shield,
    title: "Web Application Firewall",
    description: "Leverage Hanzo Balancer as your WAF to protect your microservices and APIs against a myriad of online threats, such as SQL injection and cross-site scripting, thus enhancing security and ensuring data integrity.",
    learnMoreLink: "#waf"
  },
  {
    id: "certificate",
    icon: FileText,
    title: "Certificate Management",
    description: "Hanzo Balancer provides built-in support for Let's Encrypt (ACME) automatic certificate management as well as user-defined certificates.",
    learnMoreLink: "#cert"
  },
  {
    id: "load-balancing",
    icon: LoadBalancer,
    title: "Load Balancing",
    description: "Control load to upstream services with flexible Layer 4 and Layer 7 routing and load balancing capabilities plus a large middleware toolkit that enables dynamic scaling, zero-downtime blue-green and canary deployments, mirroring, and more.",
    learnMoreLink: "#lb"
  }
];

const UseCaseCard = ({ useCase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
    >
      <div className="bg-red-800/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <useCase.icon className="h-6 w-6 text-[#fd4444]" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
      <p className="text-neutral-300 mb-4">{useCase.description}</p>
      <a href={useCase.learnMoreLink} className="text-[#fd4444] hover:text-[#ff6b6b]">
        Learn more
      </a>
    </motion.div>
  );
};

const UseCases = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hanzo Balancer Use Cases</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
