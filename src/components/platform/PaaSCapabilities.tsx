import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  Database,
  Key,
  HardDrive,
  Activity,
  Webhook,
  Terminal,
  Server,
  Lock,
  Users,
  FileJson,
  Clock,
  ChevronRight,
} from "lucide-react";

const BRAND_COLOR = "#10b981"; // Green for platform

interface Service {
  name: string;
  description: string;
  icon: React.ElementType;
  href?: string;
}

const CORE_SERVICES: Service[] = [
  {
    name: "Auth",
    description: "Authentication, SSO, OAuth, JWT, and user management out of the box",
    icon: Shield,
    href: "/identity",
  },
  {
    name: "Functions",
    description: "Serverless functions with automatic scaling and edge deployment",
    icon: Zap,
    href: "/functions",
  },
  {
    name: "Database",
    description: "PostgreSQL, vector search, and real-time subscriptions",
    icon: Database,
    href: "/datastore",
  },
  {
    name: "Storage",
    description: "S3-compatible object storage with CDN integration",
    icon: HardDrive,
  },
  {
    name: "Realtime",
    description: "WebSockets, presence, and live sync for collaborative apps",
    icon: Activity,
    href: "/realtime",
  },
  {
    name: "Secrets",
    description: "Encrypted secret management with versioning and rotation",
    icon: Key,
  },
];

const ADDITIONAL_SERVICES: Service[] = [
  {
    name: "API Gateway",
    description: "Rate limiting, caching, and request transformation",
    icon: Server,
  },
  {
    name: "Cron Jobs",
    description: "Scheduled tasks with monitoring and retry logic",
    icon: Clock,
  },
  {
    name: "Webhooks",
    description: "Event-driven integrations with external services",
    icon: Webhook,
  },
  {
    name: "IAM",
    description: "Fine-grained access control and policies",
    icon: Users,
  },
  {
    name: "Edge Config",
    description: "Global configuration with instant propagation",
    icon: FileJson,
  },
  {
    name: "Vault",
    description: "Hardware-backed encryption and key management",
    icon: Lock,
  },
];

const PaaSCapabilities = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
          >
            <Terminal className="w-3.5 h-3.5" />
            Platform-as-a-Service
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Backend Services, Ready to Deploy
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Everything you need to build production applications. Self-host on your infrastructure,
            or deploy to Hanzo Cloud with zero changes.
          </p>
        </motion.div>

        {/* Core services */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-white mb-6"
          >
            Core Services
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_SERVICES.map((service, index) => {
              const Icon = service.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 transition-all ${
                    service.href ? "hover:border-green-500/30 cursor-pointer" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: BRAND_COLOR }} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{service.name}</h4>
                      <p className="text-sm text-neutral-400">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );

              return service.href ? (
                <Link key={service.name} to={service.href}>
                  {content}
                </Link>
              ) : (
                <div key={service.name}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* Additional services */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-white mb-6"
          >
            Additional Services
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDITIONAL_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-lg bg-neutral-950/50 border border-neutral-800/50"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="text-sm font-medium text-white">{service.name}</span>
                      <span className="text-xs text-neutral-500 ml-2">{service.description}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CLI showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-neutral-500 font-mono">hanzo platform</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="space-y-3">
              <div className="text-neutral-500">
                <span className="text-green-400">$</span> hanzo init my-app
              </div>
              <div className="text-neutral-400">
                ✓ Created project configuration
              </div>
              <div className="text-neutral-400">
                ✓ Initialized Auth, Database, Storage
              </div>
              <div className="text-neutral-400">
                ✓ Generated TypeScript types
              </div>
              <div className="mt-4 text-neutral-500">
                <span className="text-green-400">$</span> hanzo dev
              </div>
              <div className="text-neutral-400">
                Starting local development server...
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-400">
                  Platform running at http://localhost:8000
                </span>
              </div>
              <div className="mt-4 text-neutral-500">
                <span className="text-green-400">$</span> hanzo deploy
              </div>
              <div className="text-neutral-400">
                Deploying to production...
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-400">
                  Live at https://my-app.hanzo.app
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://docs.hanzo.ai/platform/quickstart"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/cloud"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
            >
              Compare to Cloud
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaaSCapabilities;
