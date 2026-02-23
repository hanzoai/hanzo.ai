'use client'


import { motion } from "framer-motion";
import { Code as CodeIcon } from "lucide-react";
import { Button } from "@hanzo/ui";

const Code = () => {
  return (
    <section className="py-20 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[var(--white)]/10 px-4 py-1 rounded-full mb-6">
            <CodeIcon className="h-4 w-4 text-[var(--white)]" />
            <span className="text-sm text-[var(--white)]">Modern Development Stack</span>
          </div>
          <h2 className="text-4xl font-display text-[var(--white)] mb-4">Code with Confidence</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A modern development stack with real-time AI, beautiful UI components, and a powerful database.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                <div className="w-3 h-3 rounded-full bg-primary/10"></div>
              </div>
              <div className="text-sm text-muted-foreground">app.tsx</div>
            </div>
            <div className="bg-[var(--black)] p-6">
              <pre className="text-sm">
                <code className="text-foreground/80">
                  <span className="text-muted-foreground">import</span>{" "}
                  <span className="text-foreground/80">{"{"}</span>{" "}
                  <span className="text-muted-foreground">createAI</span>{" "}
                  <span className="text-foreground/80">{"}"}</span>{" "}
                  <span className="text-muted-foreground">from</span>{" "}
                  <span className="text-foreground/70">'@hanzo/ai'</span>
                  {"\n"}
                  <span className="text-muted-foreground">import</span>{" "}
                  <span className="text-foreground/80">{"{"}</span>{" "}
                  <span className="text-muted-foreground">Button</span>{" "}
                  <span className="text-foreground/80">{"}"}</span>{" "}
                  <span className="text-muted-foreground">from</span>{" "}
import { "\n" } from "@hanzo/ui";
};

export default Code;
