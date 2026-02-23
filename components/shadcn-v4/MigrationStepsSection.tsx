'use client'


import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Follow the Tailwind v4 Upgrade Guide",
    description: "Upgrade to Tailwind v4 by following the official upgrade guide. Use the @tailwindcss/upgrade@next codemod to remove deprecated utility classes and update your Tailwind config."
  },
  {
    number: "02",
    title: "Update CSS Variables",
    description: "Move :root and .dark out of @layer base. Wrap color values in hsl(), add the inline option to @theme, and remove hsl() wrappers from @theme."
  },
  {
    number: "03",
    title: "Update Chart Colors",
    description: "Now that theme colors come with hsl(), remove the wrapper in your chartConfig by changing from 'hsl(var(--chart-1))' to 'var(--chart-1)'."
  },
  {
    number: "04",
    title: "Use the New size-* Utility",
    description: "Replace w-* h-* with the new size-* utility. For example, change 'w-4 h-4' to 'size-4'."
  },
  {
    number: "05",
    title: "Update Dependencies",
    description: "Update your dependencies with 'pnpm up \"@radix-ui/*\" cmdk lucide-react recharts tailwind-merge clsx --latest'."
  },
  {
    number: "06",
    title: "Remove forwardRef",
    description: "Use the remove-forward-ref codemod to migrate your forwardRef to props, or manually update the primitives by replacing React.forwardRef with React.ComponentProps."
  }
];

const MigrationStepsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 to-[#ffffff]/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Migration Steps</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Follow these steps to upgrade your existing shadcn/ui projects to Tailwind v4 and React 19.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-[#ffffff]/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-[#ffffff]/20 rounded-lg p-2 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#ffffff]">{step.number}</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                    <CardDescription className="text-neutral-400 mt-2">
                      {step.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                {index < steps.length - 1 && (
                  <CardContent className="pt-0 pb-4 flex justify-center">
                    <ArrowRight className="text-gray-600 h-5 w-5" />
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationStepsSection;
