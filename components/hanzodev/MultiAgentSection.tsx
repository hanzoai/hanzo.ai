'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Crown, Clock, Monitor, Laptop, Gauge, Shield, Play, TestTube, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgentCodeDemo = () => {
  return (
    <div className="bg-background rounded-xl border border-border overflow-hidden">
      {/* IDE header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary/10" />
            <div className="w-3 h-3 rounded-full bg-primary/10" />
            <div className="w-3 h-3 rounded-full bg-primary/10" />
          </div>
          <span className="text-xs text-muted-foreground">Hanzo AI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">signal-server</span>
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* File tree */}
        <div className="col-span-3 border-r border-border p-3 text-xs font-mono">
          <div className="text-muted-foreground mb-2">service</div>
          <div className="ml-2 space-y-1">
            <div className="text-muted-foreground">RateLimiter.java</div>
            <div className="text-muted-foreground">RateLimitConfig.java</div>
            <div className="text-foreground bg-neutral-800 px-2 py-0.5 rounded">RateLimitMetrics.java</div>
          </div>
          <div className="text-muted-foreground mt-3 mb-2">delivery</div>
          <div className="ml-2 space-y-1">
            <div className="text-muted-foreground">MessageDeliveryLoop.java</div>
            <div className="text-muted-foreground">NoopDeliveryLoop.java</div>
          </div>
        </div>

        {/* Code panel */}
        <div className="col-span-5 border-r border-border p-4 font-mono text-xs">
          <div className="text-muted-foreground mb-2">package service.limits;</div>
          <div className="space-y-1">
            <div><span className="text-foreground">import</span> java.time.Instant;</div>
            <div><span className="text-foreground">import</span> java.util.concurrent.*;</div>
            <div className="mt-3"><span className="text-foreground">public class</span> <span className="text-foreground/60">RateLimitMetrics</span> {"{"}</div>
            <div className="ml-4 text-foreground/70">// allowedCount, blockedCount, resetCount</div>
            <div className="ml-4"><span className="text-foreground">private final</span> AtomicLong allowed = <span className="text-foreground">new</span> AtomicLong();</div>
            <div className="ml-4"><span className="text-foreground">private final</span> AtomicLong blocked = <span className="text-foreground">new</span> AtomicLong();</div>
            <div className="mt-3 ml-4"><span className="text-foreground">public void</span> <span className="text-foreground/70">markAllowed</span>() {"{"}</div>
            <div className="ml-8">allowed.incrementAndGet();</div>
            <div className="ml-8">lastAllowed.set(Instant.now());</div>
            <div className="ml-4">{"}"}</div>
          </div>
        </div>

        {/* Task panel */}
        <div className="col-span-4 p-4">
          <div className="mb-4">
            <div className="text-xs text-muted-foreground mb-1">Task</div>
            <div className="text-sm text-foreground">Improve the rate limiting implementation.</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3 mb-4">
            <div className="text-xs text-muted-foreground mb-2">Thought for 2 minutes.</div>
            <div className="text-xs text-foreground/80">I'll proceed with implementing all the improvements starting with Enhanced Metrics and Observability...</div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-primary/10 animate-pulse" />
            <span className="text-muted-foreground">Hanzo AI thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Users,
    title: "Multi-Agent Execution",
    description: "Hanzo dispatches the same task to multiple agents at once: Hanzo, Claude Code, Codex, Gemini.",
  },
  {
    icon: Crown,
    title: "LLM Consensus",
    description: "Every task is implemented differently by each agent, and LLM consensus selects the best implementation for users.",
  },
  {
    icon: Clock,
    title: "Long running tasks",
    description: "Support for long-running tasks that require extended hours of execution in isolated sandbox environments where agents can install, implement, and test.",
  },
  {
    icon: Monitor,
    title: "Monitor agents concurrently",
    description: "One view to monitor all agents' implementations for individuals and teams collaborating on different projects.",
  },
];

const ideFeatures = [
  {
    icon: Laptop,
    title: "Hanzo Agents on +35 IDEs",
    description: "Hanzo Agents run tasks on the Hanzo IDE, VSCode, JetBrains & more...",
  },
  {
    icon: Gauge,
    title: "Large code base context",
    description: "Hanzo coding agent is optimized for both small and very large production-grade codebases that require extensive context.",
  },
  {
    icon: Shield,
    title: "Controllable Autonomy",
    description: "Control the level of autonomy you want to grant the Hanzo coding agent while it executes your tasks.",
  },
  {
    icon: Play,
    title: "Plan, Execute, Test",
    description: "Hanzo agents are designed to implement tasks at a production level with detailed planning, high-precision execution, and a thorough testing phase.",
  },
  {
    icon: Globe,
    title: "Browser Agent",
    description: "The Hanzo coding agent includes many built-in tools, including the browser agent, which provides autonomy in testing and iterating on its implementation.",
  },
];

const MultiAgentSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: "var(--primary)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
          >
            Hanzo Autonomous Agent
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Run multiple autonomous agents in parallel
            <br />
            locally and remotely
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multi-agent remote execution with LLM consensus to select the best execution for each task.
          </p>
          <Button
            size="lg"
            className="mt-8 text-primary-foreground"

            asChild
          >
            <Link href="/signup">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Agent Code Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <AgentCodeDemo />
        </motion.div>

        {/* Multi-agent features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* IDE Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Hanzo Agents on +35 IDEs
          </h3>
          <p className="text-muted-foreground mb-6">
            Hanzo Agents run tasks on the Hanzo IDE, VSCode, JetBrains & more...
          </p>
          <Button
            size="lg"
            className="text-primary-foreground"

            asChild
          >
            <Link href="/download">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* IDE features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideFeatures.slice(1).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MultiAgentSection;
