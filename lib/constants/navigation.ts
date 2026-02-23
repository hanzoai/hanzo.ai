/**
 * Navigation Constants
 *
 * Product taxonomy-based navigation structure.
 * See src/data/product-taxonomy.ts for full product definitions.
 */

export const products = [
  {
    title: "Data",
    description: "Core persistence & retrieval primitives",
    href: "/products/data",
    items: [
      { name: "SQL", href: "/products/data/sql", description: "Managed PostgreSQL" },
      { name: "SQL Vector", href: "/products/data/sql-vector", description: "pgvector for AI/ML" },
      { name: "DocumentDB", href: "/products/data/documentdb", description: "MongoDB-compatible" },
      { name: "KV", href: "/products/data/kv", description: "Redis-compatible key-value" },
      { name: "Datastore", href: "/products/data/datastore", description: "Real-time analytics warehouse" },
      { name: "Vector", href: "/products/data/vector", description: "High-performance vector database" },
      { name: "Storage", href: "/products/data/storage", description: "S3-compatible object storage" },
      { name: "Search", href: "/products/data/search", description: "Lightning-fast full-text search" }
    ]
  },
  {
    title: "Compute",
    description: "Run code and host apps",
    href: "/products/compute",
    items: [
      { name: "Functions", href: "/products/compute/functions", description: "Serverless compute platform" },
      { name: "Runtime", href: "/products/compute/runtime", description: "Isolated execution sandbox" },
      { name: "Machines", href: "/products/compute/machines", description: "Dedicated AI compute" }
    ]
  },
  {
    title: "Async",
    description: "Background execution & messaging",
    href: "/products/async",
    items: [
      { name: "Tasks", href: "/products/async/tasks", description: "Durable workflow execution" },
      { name: "Cron", href: "/products/async/cron", description: "Scheduled jobs" },
      { name: "Queues", href: "/products/async/queues", description: "High-throughput work queues" },
      { name: "PubSub", href: "/products/async/pubsub", description: "Event streaming & messaging" }
    ]
  },
  {
    title: "ML",
    description: "End-to-end MLOps",
    href: "/products/ml",
    items: [
      { name: "Notebooks", href: "/products/ml/notebooks", description: "Managed Jupyter workspaces" },
      { name: "Pipelines", href: "/products/ml/pipelines", description: "ML workflow orchestration" },
      { name: "Training", href: "/products/ml/training", description: "Distributed training jobs" },
      { name: "Tuning", href: "/products/ml/tuning", description: "Hyperparameter optimization" },
      { name: "Serving", href: "/products/ml/serving", description: "Production model inference" },
      { name: "Model Registry", href: "/products/ml/registry", description: "Model versioning & governance" },
      { name: "Feature Store", href: "/products/ml/feature-store", description: "Online/offline feature serving" },
      { name: "Evaluation", href: "/products/ml/evaluation", description: "Model quality & drift detection" }
    ]
  },
  {
    title: "Observability",
    description: "Signals & instrumentation",
    href: "/products/observability",
    items: [
      { name: "Metrics", href: "/products/observability/metrics", description: "Time-series metrics database" },
      { name: "Logs", href: "/products/observability/logs", description: "Scalable log aggregation" },
      { name: "Traces", href: "/products/observability/traces", description: "Distributed tracing" },
      { name: "Telemetry", href: "/products/observability/telemetry", description: "OpenTelemetry collector" },
      { name: "Insights", href: "/products/observability/insights", description: "Product analytics" }
    ]
  },
  {
    title: "Platform",
    description: "Infrastructure & security",
    href: "/products/platform",
    items: [
      { name: "Platform", href: "/products/platform/platform", description: "PaaS framework & runtime" },
      { name: "Edge", href: "/products/platform/edge", description: "High-performance API edge" },
      { name: "HKE", href: "/products/platform/hke", description: "Managed Kubernetes clusters" },
      { name: "IAM", href: "/products/platform/iam", description: "Identity & access management" },
      { name: "KMS", href: "/products/platform/kms", description: "Secrets management" },
      { name: "Networking", href: "/products/platform/networking", description: "Zero-trust virtual networks" },
      { name: "Tunnel", href: "/products/platform/tunnel", description: "Secure local & service tunneling" },
      { name: "DNS", href: "/products/platform/dns", description: "Programmable DNS infrastructure" }
    ]
  },
  {
    title: "Apps",
    description: "End-user applications",
    href: "/products/apps",
    items: [
      { name: "Base", href: "/products/apps/base", description: "Backend-as-a-Service" },
      { name: "Analytics", href: "/products/apps/analytics", description: "Privacy-focused web analytics" },
      { name: "Commerce", href: "/products/apps/commerce", description: "AI-powered e-commerce" },
      { name: "Chat", href: "/products/apps/chat", description: "AI chat interface" },
      { name: "Flow", href: "/products/apps/flow", description: "Visual workflow builder" },
      { name: "Console", href: "/products/apps/console", description: "Admin control plane" },
      { name: "Cloud", href: "/products/apps/cloud", description: "AI infrastructure platform" }
    ]
  }
];

// Legacy product list for backwards compatibility
export const legacyProducts = [
  {
    title: "AI Cloud",
    items: [
      "AI", "Chat", "Datastore", "Edge", "Functions",
      "Identity", "Machines", "Payments", "Realtime", "Storage", "Vector"
    ]
  },
  {
    title: "DX Platform",
    items: [
      "App", "Bot", "Code", "Dev", "Extension", "Runtime", "Operator", "Studio"
    ]
  }
];

export const solutions = [
  {
    title: "Use Cases",
    href: "/solutions",
    items: [
      { name: "RAG Applications", href: "/solutions/rag", description: "Build retrieval-augmented generation apps" },
      { name: "AI Agents", href: "/solutions/agents", description: "Deploy autonomous AI agents" },
      { name: "Real-time AI", href: "/solutions/realtime", description: "Stream AI responses in real-time" },
      { name: "Fine-tuning", href: "/solutions/fine-tuning", description: "Train custom models on your data" },
      { name: "Computer Vision", href: "/solutions/vision", description: "Process images and video" },
      { name: "Voice & Audio", href: "/solutions/audio", description: "Speech recognition and synthesis" }
    ]
  },
  {
    title: "Stacks",
    href: "/solutions/stacks",
    items: [
      { name: "SaaS Starter", href: "/solutions/stacks/saas", description: "Launch your SaaS in days" },
      { name: "Analytics Stack", href: "/solutions/stacks/analytics", description: "Self-hosted analytics platform" },
      { name: "E-commerce Stack", href: "/solutions/stacks/ecommerce", description: "AI-powered storefront" },
      { name: "Developer Portal", href: "/solutions/stacks/devportal", description: "API documentation and SDKs" }
    ]
  },
  {
    title: "Industries",
    href: "/solutions/industries",
    items: [
      { name: "Healthcare", href: "/solutions/industries/healthcare", description: "Healthcare-ready AI" },
      { name: "Finance", href: "/solutions/industries/finance", description: "Enterprise-grade security" },
      { name: "Retail", href: "/solutions/industries/retail", description: "Personalization and recommendations" },
      { name: "Enterprise", href: "/solutions/industries/enterprise", description: "Private cloud deployment" }
    ]
  }
];

export const resources = [
  {
    title: "Learn",
    items: [
      {
        name: "Documentation",
        url: "https://docs.hanzo.ai",
        description: "Comprehensive guides and tutorials"
      },
      {
        name: "API Reference",
        url: "https://docs.hanzo.ai/api",
        description: "Detailed API documentation"
      },
      {
        name: "Examples",
        url: "https://github.com/hanzoai/examples",
        description: "Sample projects and code snippets"
      },
      {
        name: "Blog",
        url: "/blog",
        description: "Technical articles and updates"
      }
    ]
  },
  {
    title: "Community",
    items: [
      {
        name: "Discord",
        url: "https://discord.gg/hanzo",
        description: "Join our developer community"
      },
      {
        name: "GitHub",
        url: "https://github.com/hanzoai",
        description: "Source code and contributions"
      },
      {
        name: "Forum",
        url: "https://github.com/hanzoai/discussions",
        description: "Ask questions and share ideas"
      },
      {
        name: "Status",
        url: "https://status.hanzo.ai",
        description: "System status and incidents"
      }
    ]
  },
  {
    title: "Support",
    items: [
      {
        name: "Help Center",
        url: "https://help.hanzo.ai",
        description: "FAQs and troubleshooting"
      },
      {
        name: "Contact Support",
        url: "/contact",
        description: "Get help from our team"
      },
      {
        name: "Enterprise",
        url: "/enterprise",
        description: "Dedicated support and SLAs"
      }
    ]
  }
];

export const company = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" }
];

export const legal = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Security", href: "/security" }
];

// Main navigation structure
export const mainNav = [
  {
    name: "Products",
    href: "/products",
    children: products
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: solutions
  },
  {
    name: "Docs",
    href: "https://docs.hanzo.ai",
    external: true
  },
  {
    name: "Pricing",
    href: "/pricing"
  }
];

// Footer navigation
export const footerNav = {
  products: products.map(cat => ({
    title: cat.title,
    href: cat.href,
    items: cat.items.slice(0, 4) // Show top 4 items
  })),
  solutions: solutions,
  resources: resources,
  company: company,
  legal: legal
};
