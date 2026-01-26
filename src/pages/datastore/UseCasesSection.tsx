import React from "react";
import { motion } from "framer-motion";
import { Activity, BarChart, Clock, ShoppingCart, Shield, Lightbulb, Signal, LineChart, Gamepad2, Cpu, Network, Users } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const UseCasesSection = () => {
  const useCases = [
    { name: "Web and app analytics", icon: BarChart },
    { name: "E-commerce and finance", icon: ShoppingCart },
    { name: "Time series", icon: Clock },
    { name: "Advertising networks and RTB", icon: Network },
    { name: "Information security", icon: Shield },
    { name: "Business intelligence", icon: Lightbulb },
    { name: "Telecommunications", icon: Signal },
    { name: "Monitoring and telemetry", icon: LineChart },
    { name: "Online games", icon: Gamepad2 },
    { name: "Internet of Things (IoT)", icon: Cpu },
    { name: "Observability", icon: Activity },
    { name: "User behavior analytics", icon: Users }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fd4444]/10 to-[#fd4444]/5 opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Datastore at Scale
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Powering a wide range of applications across industries with unmatched performance
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-900/20 border border-gray-800 rounded-lg p-6 text-center flex flex-col items-center hover:bg-gray-900/40 hover:border-gray-700 transition-all"
              >
                <Icon className="h-8 w-8 text-[#fd4444] mb-3" />
                <p className="text-neutral-300">{useCase.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
