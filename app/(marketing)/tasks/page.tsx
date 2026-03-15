"use client"

import { motion } from "framer-motion"
import {
  ListChecks,
  ArrowRight,
  RotateCcw,
  Shield,
  Clock,
  GitBranch,
  Radio,
  History,
  Lock,
  Users,
  Bot,
  ShoppingCart,
  Workflow,
  CalendarClock,
  UserCheck,
  Check,
} from "lucide-react"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For prototyping and small projects",
    actions: "25K actions/mo",
    namespaces: "1 namespace",
    features: [
      "Durable execution",
      "Automatic retries",
      "Web console",
      "Community support",
    ],
    cta: "Get Started",
    ctaHref: "https://console.hanzo.ai",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$0.035",
    period: "/1K actions",
    description: "1M actions included per month",
    actions: "1M actions included",
    namespaces: "10 namespaces",
    features: [
      "Everything in Free",
      "Scheduled workflows",
      "Signals & queries",
      "Email support",
    ],
    cta: "Start Pro",
    ctaHref: "https://console.hanzo.ai",
    highlight: true,
  },
  {
    name: "Team",
    price: "$0.025",
    period: "/1K actions",
    description: "10M actions included per month",
    actions: "10M actions included",
    namespaces: "Unlimited",
    features: [
      "Everything in Pro",
      "Multi-tenant isolation",
      "IAM integration",
      "Priority support",
    ],
    cta: "Start Team",
    ctaHref: "https://console.hanzo.ai",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated resources & SLAs",
    actions: "Unlimited actions",
    namespaces: "Unlimited",
    features: [
      "Everything in Team",
      "Dedicated cluster",
      "99.99% SLA",
      "24/7 support",
    ],
    cta: "Contact Sales",
    ctaHref: "https://hanzo.ai/contact",
    highlight: false,
  },
]

const features = [
  {
    icon: RotateCcw,
    title: "Durable Execution",
    description:
      "Workflows survive process crashes, server restarts, and network partitions. State is persisted automatically.",
  },
  {
    icon: GitBranch,
    title: "Saga Compensation",
    description:
      "Define compensating actions for every step. Automatic rollback on failure. Distributed transactions done right.",
  },
  {
    icon: Clock,
    title: "Scheduled Workflows",
    description:
      "Cron expressions, delayed starts, and recurring schedules. Timezone-aware. No external scheduler needed.",
  },
  {
    icon: Radio,
    title: "Signals & Queries",
    description:
      "Send signals to running workflows. Query workflow state at any point. Real-time coordination between workflows.",
  },
  {
    icon: History,
    title: "Full History & Replay",
    description:
      "Complete event history for every workflow execution. Deterministic replay for debugging. Audit trail built in.",
  },
  {
    icon: Lock,
    title: "KMS Secrets",
    description:
      "Inject secrets from Hanzo KMS into workflow activities. Rotated automatically. Never stored in workflow history.",
  },
  {
    icon: Shield,
    title: "IAM Integration",
    description:
      "Hanzo IAM for authentication and authorization. Namespace-level RBAC. Org-scoped data isolation.",
  },
  {
    icon: Users,
    title: "Multi-Tenant",
    description:
      "Namespace isolation per team or customer. Resource quotas. Independent scaling. Shared nothing architecture.",
  },
  {
    icon: Workflow,
    title: "Child Workflows",
    description:
      "Spawn child workflows from parents. Fan-out/fan-in patterns. Hierarchical execution with independent lifecycles.",
  },
]

const useCases = [
  {
    icon: Bot,
    title: "AI Agent Orchestration",
    description:
      "Coordinate multi-step agent workflows with tool calls, human approval gates, and automatic retry on LLM failures. Durable state means agents can run for hours or days.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Sagas",
    description:
      "Payment capture, inventory reservation, shipping, and notification as a single durable saga. Automatic compensation if any step fails. No lost orders.",
  },
  {
    icon: Workflow,
    title: "CI/CD Pipelines",
    description:
      "Build, test, deploy, and verify as a durable workflow. Retry flaky tests. Wait for manual approval. Roll back on failure. Full execution history.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled Jobs",
    description:
      "Replace fragile cron with durable scheduled workflows. Timezone-aware. Exactly-once execution guarantees. Built-in monitoring and alerting.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop",
    description:
      "Pause workflows waiting for human input. Approval gates, review steps, and escalation timeouts. Resume exactly where you left off.",
  },
]

export default function TasksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-border mb-8"
          >
            <ListChecks className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground/80">
              tasks.hanzo.ai
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Tasks
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4"
          >
            Durable Workflow Execution
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Build invincible applications. Workflows that survive crashes,
            retries that never give up, and sagas that always compensate.
            Your code runs to completion or rolls back cleanly. Every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">Durable</div>
              <div className="text-sm text-muted-foreground">Execution</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">4 SDKs</div>
              <div className="text-sm text-muted-foreground">
                Go / Py / TS / Java
              </div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">Sagas</div>
              <div className="text-sm text-muted-foreground">Built-in</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">Free</div>
              <div className="text-sm text-muted-foreground">25K actions/mo</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://console.hanzo.ai"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://docs.hanzo.ai/tasks"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
            >
              Documentation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Workflows That Never Fail
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every primitive you need for building reliable distributed systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-neutral-600 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Real Workloads
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI agents to payment sagas, Tasks handles the hard parts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary/30 border border-border rounded-xl p-6 hover:border-neutral-600 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
                  <useCase.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Code Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Native SDKs for Every Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Write workflows in Go, Python, TypeScript, or Java. Same durable
              guarantees everywhere.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Go Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary border border-border rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  workflow.go
                </span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="text-foreground/80">{`func OrderWorkflow(ctx workflow.Context,
  order Order) error {

  // Step 1: Reserve inventory
  err := workflow.ExecuteActivity(ctx,
    ReserveInventory, order).Get(ctx, nil)

  // Step 2: Charge payment
  err = workflow.ExecuteActivity(ctx,
    ChargePayment, order).Get(ctx, nil)

  // Step 3: Ship order
  return workflow.ExecuteActivity(ctx,
    ShipOrder, order).Get(ctx, nil)
}`}</code>
              </pre>
            </motion.div>

            {/* TypeScript Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-secondary border border-border rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  workflow.ts
                </span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="text-foreground/80">{`async function orderWorkflow(
  order: Order
): Promise<void> {

  // Step 1: Reserve inventory
  await reserveInventory(order)

  // Step 2: Charge payment
  await chargePayment(order)

  // Step 3: Ship order
  await shipOrder(order)

  // If any step fails, saga
  // compensation runs automatically
}`}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Durable execution powered by event sourcing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-secondary border border-border rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                architecture
              </span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono">
              <code className="text-foreground/80">{`
  +------------------+     +-------------------+
  |   Your Code      |     |   Hanzo Tasks     |
  |                  |     |   Server          |
  |  Workflow Def --------->  Scheduler        |
  |  Activity Impl -------->  Event History    |
  |  Worker Pool ---------->  State Store      |
  |                  |     |                   |
  +------------------+     +--------+----------+
                                    |
                    +---------------+---------------+
                    |               |               |
              +-----------+  +-----------+  +-----------+
              | Hanzo SQL |  | Hanzo KV  |  | Hanzo KMS |
              | (History) |  | (Queues)  |  | (Secrets) |
              +-----------+  +-----------+  +-----------+
`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Predictable Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pay per action. An action is a workflow start, activity execution,
              signal, or timer fire.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`rounded-xl p-6 flex flex-col ${
                  tier.highlight
                    ? "bg-primary/10 border-2 border-foreground/20"
                    : "bg-secondary/50 border border-border"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="text-sm font-medium text-foreground">
                    {tier.actions}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tier.namespaces}
                  </div>
                  <div className="border-t border-border pt-3 mt-3">
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground py-1"
                      >
                        <Check className="w-3.5 h-3.5 text-foreground/60 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={tier.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 font-medium rounded-full transition-colors text-sm ${
                    tier.highlight
                      ? "bg-primary hover:bg-accent text-primary-foreground"
                      : "bg-transparent border border-border hover:border-neutral-500 text-foreground"
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-secondary/50 border border-border rounded-2xl p-8 md:p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Build Invincible Applications
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Free tier includes 25K actions per month. No credit card required.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://console.hanzo.ai"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/hanzoai/tasks"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
