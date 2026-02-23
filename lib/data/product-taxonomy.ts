/**
 * Hanzo Product Taxonomy
 *
 * Complete product catalog organized by category.
 * Each product links to GitHub repo, docs, and has install commands.
 */

export interface Product {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  category: ProductCategory
  subcategory?: string
  icon: string
  href: string
  github: string
  docs?: string
  install?: {
    cli?: string
    docker?: string
    npm?: string
    pip?: string
  }
  features: string[]
  status: 'ga' | 'beta' | 'alpha' | 'coming'
  openSource: boolean
  pricing?: 'free' | 'freemium' | 'paid'
}

export type ProductCategory =
  | 'data'
  | 'compute'
  | 'async'
  | 'ml'
  | 'observability'
  | 'platform'
  | 'apps'
  | 'growth'
  | 'cx'

export interface CategoryInfo {
  id: ProductCategory
  name: string
  tagline: string
  description: string
  icon: string
  href: string
}

// =============================================================================
// CATEGORIES
// =============================================================================

export const categories: CategoryInfo[] = [
  {
    id: 'data',
    name: 'Data',
    tagline: 'Core persistence & retrieval primitives',
    description: 'Storage, databases, and search engines for every workload. From relational to vector, key-value to document stores.',
    icon: 'Database',
    href: '/products/data'
  },
  {
    id: 'compute',
    name: 'Compute',
    tagline: 'Run code and host apps',
    description: 'Serverless functions, containers, and isolated execution environments. Deploy anywhere, scale automatically.',
    icon: 'Cpu',
    href: '/products/compute'
  },
  {
    id: 'async',
    name: 'Async',
    tagline: 'Background execution & messaging',
    description: 'Durable tasks, scheduled jobs, queues, and pub/sub. Build reliable distributed systems.',
    icon: 'Clock',
    href: '/products/async'
  },
  {
    id: 'ml',
    name: 'ML',
    tagline: 'End-to-end MLOps',
    description: 'From notebooks to production. Train, tune, serve, and manage models at scale.',
    icon: 'Brain',
    href: '/products/ml'
  },
  {
    id: 'observability',
    name: 'Observability',
    tagline: 'Signals & instrumentation',
    description: 'Metrics, logs, traces, and product analytics. Full visibility into your systems.',
    icon: 'Activity',
    href: '/products/observability'
  },
  {
    id: 'platform',
    name: 'Platform',
    tagline: 'Infrastructure & security',
    description: 'Routing, authentication, secrets, and deployment. Everything for multi-tenant hosting.',
    icon: 'Layers',
    href: '/products/platform'
  },
  {
    id: 'apps',
    name: 'Apps',
    tagline: 'End-user applications',
    description: 'Production-ready applications built on Hanzo primitives. BaaS, analytics, commerce, and more.',
    icon: 'LayoutGrid',
    href: '/products/apps'
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Analytics, experiments & engagement',
    description: 'Product analytics, web analytics, feature flags, A/B testing, and lifecycle messaging. Understand users and grow faster.',
    icon: 'TrendingUp',
    href: '/products/growth'
  },
  {
    id: 'cx',
    name: 'CX & Ops',
    tagline: 'Customer experience & operations',
    description: 'Support inbox, CRM, and ERP. Everything for customer success and business operations.',
    icon: 'HeadphonesIcon',
    href: '/products/cx'
  }
]

// =============================================================================
// DATA PRODUCTS
// =============================================================================

export const dataProducts: Product[] = [
  {
    id: 'sql',
    name: 'Hanzo SQL',
    shortName: 'SQL',
    tagline: 'Managed PostgreSQL',
    description: 'Production-ready PostgreSQL with automatic backups, scaling, and high availability. The database developers trust.',
    category: 'data',
    icon: 'Database',
    href: '/products/data/sql',
    github: 'https://github.com/hanzoai/postgres',
    docs: 'https://docs.hanzo.ai/sql',
    install: {
      cli: 'hanzo db create --type postgres',
      docker: 'docker run -d hanzo/postgres'
    },
    features: ['Automatic backups', 'Point-in-time recovery', 'Read replicas', 'Connection pooling', 'Extensions support'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'sql-vector',
    name: 'Hanzo SQL Vector',
    shortName: 'SQL Vector',
    tagline: 'pgvector for AI/ML',
    description: 'Vector similarity search inside PostgreSQL. Store embeddings alongside your data with pgvector.',
    category: 'data',
    icon: 'Boxes',
    href: '/products/data/sql-vector',
    github: 'https://github.com/hanzoai/sql-vector',
    docs: 'https://docs.hanzo.ai/sql-vector',
    install: {
      cli: 'hanzo db create --type postgres --extensions pgvector'
    },
    features: ['Vector similarity search', 'HNSW indexing', 'Cosine/L2/IP distance', 'Hybrid queries', 'Native PostgreSQL'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'documentdb',
    name: 'Hanzo DocumentDB',
    shortName: 'DocumentDB',
    tagline: 'MongoDB-compatible',
    description: 'Document database with MongoDB wire protocol compatibility. Store and query JSON documents at scale.',
    category: 'data',
    icon: 'FileJson',
    href: '/products/data/documentdb',
    github: 'https://github.com/hanzoai/documentdb',
    docs: 'https://docs.hanzo.ai/documentdb',
    install: {
      cli: 'hanzo db create --type documentdb',
      docker: 'docker run -d hanzo/documentdb'
    },
    features: ['MongoDB compatible', 'BSON documents', 'Aggregation pipelines', 'Change streams', 'Sharding'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'kv',
    name: 'Hanzo KV',
    shortName: 'KV',
    tagline: 'Redis-compatible key-value',
    description: 'Ultra-fast key-value store with Redis compatibility. Sub-millisecond latency for caching and session storage.',
    category: 'data',
    icon: 'Key',
    href: '/products/data/kv',
    github: 'https://github.com/hanzoai/kv',
    docs: 'https://docs.hanzo.ai/kv',
    install: {
      cli: 'hanzo db create --type kv',
      docker: 'docker run -d hanzo/kv'
    },
    features: ['Redis compatible', 'Sub-ms latency', 'Pub/sub', 'Lua scripting', 'Cluster mode'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'datastore',
    name: 'Hanzo Datastore',
    shortName: 'Datastore',
    tagline: 'Real-time analytics warehouse',
    description: 'ClickHouse-powered analytics database for real-time queries on massive datasets. OLAP at scale.',
    category: 'data',
    icon: 'BarChart3',
    href: '/products/data/datastore',
    github: 'https://github.com/hanzoai/datastore',
    docs: 'https://docs.hanzo.ai/datastore',
    install: {
      cli: 'hanzo db create --type datastore',
      docker: 'docker run -d hanzo/datastore'
    },
    features: ['Columnar storage', 'Real-time ingestion', 'SQL queries', 'Materialized views', 'Petabyte scale'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'datastore-vector',
    name: 'Hanzo Datastore Vector',
    shortName: 'Datastore Vector',
    tagline: 'Vector search in ClickHouse',
    description: 'Vector similarity search within your analytics warehouse. Combine embeddings with OLAP queries.',
    category: 'data',
    icon: 'Boxes',
    href: '/products/data/datastore-vector',
    github: 'https://github.com/hanzoai/datastore',
    docs: 'https://docs.hanzo.ai/datastore-vector',
    features: ['Vector indexes', 'Hybrid analytics', 'Real-time similarity', 'SQL integration'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'vector',
    name: 'Hanzo Vector',
    shortName: 'Vector',
    tagline: 'High-performance vector database',
    description: 'Purpose-built vector database optimized for AI embeddings. Lightning-fast similarity search at any scale.',
    category: 'data',
    icon: 'Sparkles',
    href: '/products/data/vector',
    github: 'https://github.com/hanzoai/vector',
    docs: 'https://docs.hanzo.ai/vector',
    install: {
      cli: 'hanzo db create --type vector',
      docker: 'docker run -d hanzo/vector'
    },
    features: ['HNSW indexing', 'Filtered search', 'Payload storage', 'Quantization', 'Distributed mode'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'storage',
    name: 'Hanzo Storage',
    shortName: 'Storage',
    tagline: 'S3-compatible object storage',
    description: 'Store files, models, and assets with S3-compatible APIs. Infinite scale, pay for what you use.',
    category: 'data',
    icon: 'HardDrive',
    href: '/products/data/storage',
    github: 'https://github.com/hanzoai/storage',
    docs: 'https://docs.hanzo.ai/storage',
    install: {
      cli: 'hanzo storage create mybucket'
    },
    features: ['S3 compatible', 'Versioning', 'Lifecycle policies', 'CDN integration', 'Presigned URLs'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'search',
    name: 'Hanzo Search',
    shortName: 'Search',
    tagline: 'Lightning-fast full-text search',
    description: 'Instant search experiences with typo tolerance. Relevant results in milliseconds with minimal configuration.',
    category: 'data',
    icon: 'Search',
    href: '/products/data/search',
    github: 'https://github.com/hanzoai/search',
    docs: 'https://docs.hanzo.ai/search',
    install: {
      cli: 'hanzo search create myindex',
      docker: 'docker run -d hanzo/search'
    },
    features: ['Typo tolerance', 'Faceted search', 'Filters', 'Synonyms', 'Instant results'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// COMPUTE PRODUCTS
// =============================================================================

export const computeProducts: Product[] = [
  {
    id: 'functions',
    name: 'Hanzo Functions',
    shortName: 'Functions',
    tagline: 'Serverless compute platform',
    description: 'Deploy functions in any language. Auto-scaling, pay-per-execution, zero cold starts with edge deployment.',
    category: 'compute',
    icon: 'Zap',
    href: '/products/compute/functions',
    github: 'https://github.com/hanzoai/functions',
    docs: 'https://docs.hanzo.ai/functions',
    install: {
      cli: 'hanzo functions deploy ./my-function'
    },
    features: ['Any language', 'Auto-scaling', 'Edge deployment', 'Event triggers', 'Zero cold starts'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'runtime',
    name: 'Hanzo Runtime',
    shortName: 'Runtime',
    tagline: 'Isolated execution sandbox',
    description: 'Secure sandboxed execution for untrusted code. Run user code safely with resource limits and isolation.',
    category: 'compute',
    icon: 'Shield',
    href: '/products/compute/runtime',
    github: 'https://github.com/hanzoai/runtime',
    docs: 'https://docs.hanzo.ai/runtime',
    features: ['V8 isolates', 'Resource limits', 'Network isolation', 'Timeout controls', 'Secure by default'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'machines',
    name: 'Hanzo Machines',
    shortName: 'Machines',
    tagline: 'Dedicated AI compute',
    description: 'GPU instances for training and inference. From A10G to H100, with spot pricing and preemption.',
    category: 'compute',
    icon: 'Cpu',
    href: '/products/compute/machines',
    github: 'https://github.com/hanzoai/machines',
    docs: 'https://docs.hanzo.ai/machines',
    features: ['GPU instances', 'Spot pricing', 'Auto-scaling', 'Persistent storage', 'SSH access'],
    status: 'ga',
    openSource: false,
    pricing: 'paid'
  },
  {
    id: 'gateway',
    name: 'Hanzo Gateway',
    shortName: 'Gateway',
    tagline: 'Unified AI inference proxy',
    description: 'Route to 100+ LLM providers through a single API. Load balancing, fallbacks, caching, and cost optimization.',
    category: 'compute',
    icon: 'Zap',
    href: '/products/compute/gateway',
    github: 'https://github.com/hanzoai/gateway',
    docs: 'https://docs.hanzo.ai/gateway',
    features: ['100+ providers', 'Load balancing', 'Fallbacks', 'Response caching', 'Cost tracking', 'Rate limiting', 'Streaming', 'OpenAI compatible'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// ASYNC PRODUCTS
// =============================================================================

export const asyncProducts: Product[] = [
  {
    id: 'auto',
    name: 'Hanzo Auto',
    shortName: 'Auto',
    tagline: 'AI-powered workflow automation',
    description: 'All-in-one AI workflow automation platform. Build automations visually with drag-and-drop. 280+ integrations, AI-first design, enterprise-ready. Based on Activepieces.',
    category: 'async',
    icon: 'PlayCircle',
    href: '/products/async/auto',
    github: 'https://github.com/hanzoai/auto',
    docs: 'https://docs.hanzo.ai/auto',
    install: {
      cli: 'hanzo auto init',
      docker: 'docker run -d hanzo/auto',
      npm: 'npm install @hanzo/auto'
    },
    features: ['280+ integrations', 'Visual builder', 'AI-first design', 'Webhooks', 'Schedules', 'MCP support', 'TypeScript pieces', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'flow',
    name: 'Hanzo Flow',
    shortName: 'Flow',
    tagline: 'Visual AI/LLM workflow builder',
    description: 'Build sophisticated AI/LLM pipelines with a visual drag-and-drop interface. Chain models, process data, and deploy AI workflows. Based on Langflow.',
    category: 'async',
    icon: 'Workflow',
    href: '/products/async/flow',
    github: 'https://github.com/hanzoai/flow',
    docs: 'https://docs.hanzo.ai/flow',
    install: {
      cli: 'hanzo flow init',
      docker: 'docker run -d hanzo/flow'
    },
    features: ['Visual LLM pipeline builder', 'Multi-model support', 'RAG workflows', 'Agent orchestration', 'Custom components', 'Deploy anywhere'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'mq',
    name: 'Hanzo MQ',
    shortName: 'MQ',
    tagline: 'Message queue for Node.js',
    description: 'The fastest, most reliable message queue for Node.js. Built on Hanzo KV (Redis/Valkey compatible). Rock solid stability and atomicity. Based on BullMQ.',
    category: 'async',
    icon: 'Radio',
    href: '/products/async/mq',
    github: 'https://github.com/hanzoai/mq',
    docs: 'https://docs.hanzo.ai/mq',
    install: {
      npm: 'npm install @hanzo/mq'
    },
    features: ['Job queues', 'Delayed jobs', 'Rate limiting', 'Priorities', 'Parent-child dependencies', 'Repeatable jobs', 'Sandboxed workers'],
    status: 'ga',
    openSource: true,
    pricing: 'free'
  },
  {
    id: 'tasks',
    name: 'Hanzo Tasks',
    shortName: 'Tasks',
    tagline: 'Durable workflow execution',
    description: 'Run long-running tasks with guaranteed delivery. Retries, timeouts, and exactly-once semantics. Temporal-compatible.',
    category: 'async',
    icon: 'ListTodo',
    href: '/products/async/tasks',
    github: 'https://github.com/hanzoai/tasks',
    docs: 'https://docs.hanzo.ai/tasks',
    install: {
      cli: 'hanzo tasks create mytask'
    },
    features: ['Guaranteed delivery', 'Retries', 'Timeouts', 'Dead letter queues', 'Observability'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'cron',
    name: 'Hanzo Cron',
    shortName: 'Cron',
    tagline: 'Scheduled jobs',
    description: 'Run code on a schedule. Cron expressions, timezone support, and guaranteed execution.',
    category: 'async',
    icon: 'Clock',
    href: '/products/async/cron',
    github: 'https://github.com/hanzoai/cron',
    docs: 'https://docs.hanzo.ai/cron',
    install: {
      cli: 'hanzo cron create --schedule "0 * * * *" myjob'
    },
    features: ['Cron expressions', 'Timezone support', 'Guaranteed execution', 'Monitoring', 'Retries'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'queues',
    name: 'Hanzo Queues',
    shortName: 'Queues',
    tagline: 'High-throughput work queues',
    description: 'Distributed message queues for background processing. FIFO ordering, batching, and priority queues.',
    category: 'async',
    icon: 'ListOrdered',
    href: '/products/async/queues',
    github: 'https://github.com/hanzoai/queues',
    docs: 'https://docs.hanzo.ai/queues',
    install: {
      cli: 'hanzo queues create myqueue'
    },
    features: ['FIFO ordering', 'Batching', 'Priority queues', 'Dead letter queues', 'Exactly-once'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'pubsub',
    name: 'Hanzo PubSub',
    shortName: 'PubSub',
    tagline: 'Event streaming & messaging',
    description: 'High-throughput pub/sub messaging with JetStream persistence. NATS-compatible.',
    category: 'async',
    icon: 'Radio',
    href: '/products/async/pubsub',
    github: 'https://github.com/hanzoai/pubsub',
    docs: 'https://docs.hanzo.ai/pubsub',
    install: {
      cli: 'hanzo pubsub create mytopic',
      docker: 'docker run -d hanzo/pubsub'
    },
    features: ['Pub/sub', 'Hanzo Stream persistence', 'Request-reply', 'Wildcard subjects', 'Clustering', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'stream',
    name: 'Hanzo Stream',
    shortName: 'Stream',
    tagline: 'Kafka-compatible streaming gateway',
    description: 'Kafka wire protocol gateway over Hanzo PubSub. Use any Kafka client; storage and replication handled by PubSub.',
    category: 'async',
    icon: 'ArrowLeftRight',
    href: '/products/async/stream',
    github: 'https://github.com/hanzoai/stream',
    docs: 'https://docs.hanzo.ai/stream',
    install: {
      cli: 'hanzo stream create',
      docker: 'docker run -d hanzo/stream'
    },
    features: ['Kafka compatible', 'Stateless gateway', 'PubSub backend', 'Consumer groups', 'Topic management', 'Horizontally scalable', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// ML PRODUCTS
// =============================================================================

export const mlProducts: Product[] = [
  {
    id: 'notebooks',
    name: 'Hanzo Notebooks',
    shortName: 'Notebooks',
    tagline: 'Managed Jupyter workspaces',
    description: 'Interactive development environments with GPU support. Collaborate in real-time, version everything.',
    category: 'ml',
    subcategory: 'Develop',
    icon: 'BookOpen',
    href: '/products/ml/notebooks',
    github: 'https://github.com/hanzoai/notebooks',
    docs: 'https://docs.hanzo.ai/notebooks',
    features: ['JupyterLab', 'GPU support', 'Real-time collaboration', 'Git integration', 'Custom environments'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'pipelines',
    name: 'Hanzo Pipelines',
    shortName: 'Pipelines',
    tagline: 'ML workflow orchestration',
    description: 'Build and run reproducible ML pipelines. DAG-based workflow orchestration with artifact tracking.',
    category: 'ml',
    subcategory: 'Orchestrate',
    icon: 'GitBranch',
    href: '/products/ml/pipelines',
    github: 'https://github.com/hanzoai/pipelines',
    docs: 'https://docs.hanzo.ai/pipelines',
    features: ['DAG workflows', 'Artifact tracking', 'Caching', 'Parameterization', 'Scheduling'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'training',
    name: 'Hanzo Training',
    shortName: 'Training',
    tagline: 'Distributed training jobs',
    description: 'Train models at scale with PyTorch, TensorFlow, XGBoost. Distributed training made simple.',
    category: 'ml',
    subcategory: 'Train',
    icon: 'Dumbbell',
    href: '/products/ml/training',
    github: 'https://github.com/hanzoai/training',
    docs: 'https://docs.hanzo.ai/training',
    features: ['PyTorch', 'TensorFlow', 'XGBoost', 'Distributed training', 'Checkpointing'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'tuning',
    name: 'Hanzo Tuning',
    shortName: 'Tuning',
    tagline: 'Hyperparameter optimization',
    description: 'AutoML and hyperparameter search with Katib. Find the best model configuration automatically.',
    category: 'ml',
    subcategory: 'Tune',
    icon: 'SlidersHorizontal',
    href: '/products/ml/tuning',
    github: 'https://github.com/hanzoai/tuning',
    docs: 'https://docs.hanzo.ai/tuning',
    features: ['Grid search', 'Random search', 'Bayesian optimization', 'Early stopping', 'Multi-objective'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'serving',
    name: 'Hanzo Serving',
    shortName: 'Serving',
    tagline: 'Production model inference',
    description: 'Deploy models to production with KServe. Auto-scaling, canary deployments, A/B testing.',
    category: 'ml',
    subcategory: 'Serve',
    icon: 'Rocket',
    href: '/products/ml/serving',
    github: 'https://github.com/hanzoai/serving',
    docs: 'https://docs.hanzo.ai/serving',
    features: ['Auto-scaling', 'Canary deployments', 'A/B testing', 'GPU inference', 'Batching'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'zen',
    name: 'Zen Models',
    shortName: 'Zen',
    tagline: 'Hypermodal AI model family',
    description: 'Complete foundation model ecosystem from edge to cloud. Language, vision, 3D, video, and audio generation in a unified family.',
    category: 'ml',
    subcategory: 'Models',
    icon: 'Sparkles',
    href: '/products/ml/zen',
    github: 'https://github.com/zenlm',
    docs: 'https://docs.hanzo.ai/zen',
    features: ['Language (0.6B-30B)', 'Vision-Language', '3D Generation', 'Video Generation', 'Audio/Music', 'Edge Optimized', 'MCP Support', 'Apache 2.0'],
    status: 'ga',
    openSource: true,
    pricing: 'free'
  },
  {
    id: 'enso',
    name: 'Hanzo Enso',
    shortName: 'Enso',
    tagline: 'Multimodal diffusion intelligence',
    description: 'Mixture of Unbound Experts with Noise (MUEN) architecture. Unifies understanding and generation across text, vision, and audio through diffusion.',
    category: 'ml',
    subcategory: 'Models',
    icon: 'Sparkles',
    href: '/products/ml/enso',
    github: 'https://github.com/hanzoai/enso',
    docs: 'https://docs.hanzo.ai/enso',
    features: ['Multimodal diffusion', 'Text generation', 'Vision synthesis', 'Audio generation', 'Expert routing', 'High coherence'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'kensho',
    name: 'Hanzo Kensho',
    shortName: 'Kensho',
    tagline: 'State-of-the-art image generation',
    description: 'Next-generation 17B parameter image foundation model. Achieves state-of-the-art quality within seconds.',
    category: 'ml',
    subcategory: 'Models',
    icon: 'Image',
    href: '/products/ml/kensho',
    github: 'https://github.com/hanzoai/kensho',
    docs: 'https://docs.hanzo.ai/kensho',
    features: ['17B parameters', 'High-quality images', 'Fast generation', 'Style control', 'Prompt following'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'mu',
    name: 'Hanzo Mu',
    shortName: 'Mu',
    tagline: 'Full-length song generation',
    description: 'Blazingly fast end-to-end song generation with latent diffusion. Create complete songs with vocals and accompaniment.',
    category: 'ml',
    subcategory: 'Models',
    icon: 'Music',
    href: '/products/ml/mu',
    github: 'https://github.com/hanzoai/mu',
    docs: 'https://docs.hanzo.ai/mu',
    features: ['Full songs', 'Vocals + instruments', 'Multiple genres', 'Latent diffusion', 'Fast generation'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'satori',
    name: 'Hanzo Satori',
    shortName: 'Satori',
    tagline: 'Efficient video generation',
    description: 'Video generation in latent space with explicit temporal dynamics. High-quality frame coherence with reduced compute.',
    category: 'ml',
    subcategory: 'Models',
    icon: 'Video',
    href: '/products/ml/satori',
    github: 'https://github.com/hanzoai/satori',
    docs: 'https://docs.hanzo.ai/satori',
    features: ['Latent space', 'Temporal coherence', 'Efficient compute', 'Frame consistency', 'Text-to-video'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'jin',
    name: 'Hanzo Jin',
    shortName: 'Jin',
    tagline: 'Unified multimodal LLM',
    description: 'Multimodal language model unifying text, vision, audio, and 3D.',
    category: 'ml',
    subcategory: 'Models',
    icon: 'Brain',
    href: '/products/ml/jin',
    github: 'https://github.com/hanzoai/jin',
    docs: 'https://docs.hanzo.ai/jin',
    features: ['Multimodal', 'Joint embeddings', 'Diffusion transformer'],
    status: 'coming',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'registry',
    name: 'Hanzo Model Registry',
    shortName: 'Registry',
    tagline: 'Model versioning & governance',
    description: 'Track model versions, artifacts, and lineage. Approval workflows and provenance tracking.',
    category: 'ml',
    subcategory: 'Manage',
    icon: 'Archive',
    href: '/products/ml/registry',
    github: 'https://github.com/hanzoai/registry',
    docs: 'https://docs.hanzo.ai/registry',
    features: ['Version control', 'Artifact storage', 'Lineage tracking', 'Approval workflows', 'Model cards'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'feature-store',
    name: 'Hanzo Feature Store',
    shortName: 'Feature Store',
    tagline: 'Online/offline feature serving',
    description: 'Manage ML features with Feast. Offline features in warehouse, online in KV for low-latency serving.',
    category: 'ml',
    subcategory: 'Features',
    icon: 'Layers',
    href: '/products/ml/feature-store',
    github: 'https://github.com/hanzoai/feature-store',
    docs: 'https://docs.hanzo.ai/feature-store',
    features: ['Offline features', 'Online serving', 'Feature versioning', 'Point-in-time joins', 'Streaming'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'evaluation',
    name: 'Hanzo Evaluation',
    shortName: 'Evaluation',
    tagline: 'Model quality & drift detection',
    description: 'Evaluate models in production. Benchmarks, drift detection, and quality monitoring.',
    category: 'ml',
    subcategory: 'Evaluate',
    icon: 'CheckCircle',
    href: '/products/ml/evaluation',
    github: 'https://github.com/hanzoai/evaluation',
    docs: 'https://docs.hanzo.ai/evaluation',
    features: ['Benchmarks', 'Drift detection', 'Quality metrics', 'RAG evaluation', 'A/B analysis'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// OBSERVABILITY PRODUCTS
// =============================================================================

export const observabilityProducts: Product[] = [
  {
    id: 'metrics',
    name: 'Hanzo Metrics',
    shortName: 'Metrics',
    tagline: 'Time-series metrics database',
    description: 'High-performance metrics storage and querying. PromQL-compatible, petabyte scale.',
    category: 'observability',
    icon: 'LineChart',
    href: '/products/observability/metrics',
    github: 'https://github.com/hanzoai/metrics',
    docs: 'https://docs.hanzo.ai/metrics',
    features: ['PromQL', 'High cardinality', 'Downsampling', 'Alerting', 'Grafana integration'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'logs',
    name: 'Hanzo Logs',
    shortName: 'Logs',
    tagline: 'Scalable log aggregation',
    description: 'Collect, store, and query logs at scale. Fast full-text search with structured logging.',
    category: 'observability',
    icon: 'ScrollText',
    href: '/products/observability/logs',
    github: 'https://github.com/hanzoai/logs',
    docs: 'https://docs.hanzo.ai/logs',
    features: ['Full-text search', 'Structured logs', 'Log pipelines', 'Retention policies', 'Live tail'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'traces',
    name: 'Hanzo Traces',
    shortName: 'Traces',
    tagline: 'Distributed tracing',
    description: 'End-to-end request tracing for distributed systems. Jaeger-compatible, optimized for AI workloads.',
    category: 'observability',
    icon: 'Route',
    href: '/products/observability/traces',
    github: 'https://github.com/hanzoai/traces',
    docs: 'https://docs.hanzo.ai/traces',
    features: ['Distributed tracing', 'Span analytics', 'Service maps', 'Latency analysis', 'AI-aware'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'telemetry',
    name: 'Hanzo Telemetry',
    shortName: 'Telemetry',
    tagline: 'OpenTelemetry collector',
    description: 'Unified telemetry collection with OpenTelemetry. Collect metrics, logs, and traces from any source.',
    category: 'observability',
    icon: 'Radio',
    href: '/products/observability/telemetry',
    github: 'https://github.com/hanzoai/telemetry',
    docs: 'https://docs.hanzo.ai/telemetry',
    features: ['OTel collector', 'Protocol conversion', 'Sampling', 'Filtering', 'Multi-destination'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// PLATFORM PRODUCTS
// =============================================================================

export const platformProducts: Product[] = [
  {
    id: 'platform',
    name: 'Hanzo Platform',
    shortName: 'Platform',
    tagline: 'PaaS framework & runtime',
    description: 'Deploy and manage applications with zero DevOps. Git push to deploy, automatic TLS, scaling.',
    category: 'platform',
    icon: 'Layers',
    href: '/products/platform/platform',
    github: 'https://github.com/hanzoai/platform',
    docs: 'https://docs.hanzo.ai/platform',
    install: {
      cli: 'curl -fsSL hanzo.sh | bash'
    },
    features: ['Git deploy', 'Auto TLS', 'Custom domains', 'Preview environments', 'Rollbacks'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'edge',
    name: 'Hanzo Edge',
    shortName: 'Edge',
    tagline: 'High-performance API edge',
    description: 'Ultra-high performance API gateway and edge proxy. Sub-millisecond latency, stateless design, and declarative configuration.',
    category: 'platform',
    icon: 'Zap',
    href: '/products/platform/edge',
    github: 'https://github.com/hanzoai/edge',
    docs: 'https://docs.hanzo.ai/edge',
    install: {
      cli: 'hanzo edge deploy',
      docker: 'docker run -d hanzo/edge'
    },
    features: ['Sub-ms latency', 'Stateless design', 'Rate limiting', 'JWT validation', 'Response aggregation', 'Backend-for-frontend', 'GraphQL gateway', 'Plugin ecosystem'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'hke',
    name: 'Hanzo Kubernetes Engine',
    shortName: 'HKE',
    tagline: 'Managed Kubernetes clusters',
    description: 'Production-ready managed Kubernetes with a full-featured console. Automatic upgrades, scaling, multi-tenancy, and built-in DevOps tooling.',
    category: 'platform',
    icon: 'Boxes',
    href: '/products/platform/hke',
    github: 'https://github.com/hanzoai/hke',
    docs: 'https://docs.hanzo.ai/hke',
    install: {
      cli: 'hanzo hke create mycluster --nodes 3'
    },
    features: ['Managed Kubernetes', 'Multi-tenant console', 'Auto-scaling', 'Auto-upgrades', 'GPU node pools', 'CI/CD pipelines', 'App store', 'Observability stack'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'iam',
    name: 'Hanzo IAM',
    shortName: 'IAM',
    tagline: 'Identity & access management',
    description: 'Authentication and authorization for your apps. SSO, MFA, RBAC, and OAuth/OIDC.',
    category: 'platform',
    icon: 'UserCheck',
    href: '/products/platform/iam',
    github: 'https://github.com/hanzoai/iam',
    docs: 'https://docs.hanzo.ai/iam',
    features: ['SSO', 'MFA', 'RBAC', 'OAuth/OIDC', 'API keys'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'kms',
    name: 'Hanzo KMS',
    shortName: 'KMS',
    tagline: 'Secrets management',
    description: 'Enterprise secrets management and encryption. Secure your API keys, credentials, and sensitive data.',
    category: 'platform',
    icon: 'KeyRound',
    href: '/products/platform/kms',
    github: 'https://github.com/hanzoai/kms',
    docs: 'https://docs.hanzo.ai/kms',
    features: ['Secret storage', 'Encryption', 'Rotation', 'Access policies', 'Audit logs'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'networking',
    name: 'Hanzo Networking',
    shortName: 'Networking',
    tagline: 'Zero-trust virtual networks',
    description: 'Identity-aware virtual networks with zero-trust policies. Create secure overlay networks that span clouds, datacenters, and edge locations.',
    category: 'platform',
    icon: 'Network',
    href: '/products/platform/networking',
    github: 'https://github.com/hanzoai/networking',
    docs: 'https://docs.hanzo.ai/networking',
    install: {
      cli: 'hanzo network create mynetwork',
      docker: 'docker run -d hanzo/networking'
    },
    features: ['Zero-trust architecture', 'Identity-based policies', 'End-to-end encryption', 'Multi-cloud', 'Service mesh', 'Edge routers', 'Private DNS', 'Micro-segmentation'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'tunnel',
    name: 'Hanzo Tunnel',
    shortName: 'Tunnel',
    tagline: 'Secure local & service tunneling',
    description: 'Instant secure tunnels for localhost and private services. Zero-trust sharing without port forwarding or firewall changes.',
    category: 'platform',
    icon: 'Route',
    href: '/products/platform/tunnel',
    github: 'https://github.com/hanzoai/tunnel',
    docs: 'https://docs.hanzo.ai/tunnel',
    install: {
      cli: 'hanzo tunnel share localhost:3000',
      docker: 'docker run -d hanzo/tunnel'
    },
    features: ['Instant tunnels', 'Zero-trust sharing', 'Public & private modes', 'Custom domains', 'No port forwarding', 'End-to-end encrypted', 'Self-hostable', 'Team sharing'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'dns',
    name: 'Hanzo DNS',
    shortName: 'DNS',
    tagline: 'Programmable DNS infrastructure',
    description: 'Flexible, programmable DNS service. Plugin-based architecture for service discovery, load balancing, and intelligent routing.',
    category: 'platform',
    icon: 'Globe',
    href: '/products/platform/dns',
    github: 'https://github.com/hanzoai/dns',
    docs: 'https://docs.hanzo.ai/dns',
    install: {
      cli: 'hanzo dns create mydomain.ai',
      docker: 'docker run -d hanzo/dns'
    },
    features: ['Plugin architecture', 'Service discovery', 'Load balancing', 'DNSSEC', 'Private zones', 'Edge routing', 'Health checks', 'Geo-routing'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'guard',
    name: 'Hanzo Guard',
    shortName: 'Guard',
    tagline: 'LLM safety layer',
    description: 'Sanitize inputs and outputs between your app and AI providers. Protect against prompt injection, PII leakage, and harmful content.',
    category: 'platform',
    icon: 'Shield',
    href: '/products/platform/guard',
    github: 'https://github.com/hanzoai/guard',
    docs: 'https://docs.hanzo.ai/guard',
    install: {
      docker: 'docker run -d hanzo/guard',
      cli: 'hanzo guard enable'
    },
    features: ['Prompt injection defense', 'PII detection', 'Content filtering', 'Token limits', 'Cost controls', 'Audit logging', 'Policy engine', 'Real-time scanning'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// APPS PRODUCTS
// =============================================================================

export const appsProducts: Product[] = [
  {
    id: 'base',
    name: 'Hanzo Base',
    shortName: 'Base',
    tagline: 'Backend-as-a-Service',
    description: 'Build apps without backend code. Database, auth, storage, and realtime out of the box.',
    category: 'apps',
    icon: 'Boxes',
    href: '/products/apps/base',
    github: 'https://github.com/hanzoai/base',
    docs: 'https://docs.hanzo.ai/base',
    features: ['Database', 'Auth', 'Storage', 'Realtime', 'Edge functions'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'analytics',
    name: 'Hanzo Analytics',
    shortName: 'Analytics',
    tagline: 'Privacy-focused web analytics',
    description: 'Simple, privacy-focused web analytics. No cookies, GDPR compliant, lightweight script.',
    category: 'apps',
    icon: 'BarChart',
    href: '/products/apps/analytics',
    github: 'https://github.com/hanzoai/analytics',
    docs: 'https://docs.hanzo.ai/analytics',
    features: ['Privacy-first', 'No cookies', 'GDPR compliant', 'Lightweight', 'Real-time'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'commerce',
    name: 'Hanzo Commerce',
    shortName: 'Commerce',
    tagline: 'AI-powered e-commerce',
    description: 'Complete commerce platform with payments, subscriptions, and AI-powered recommendations.',
    category: 'apps',
    icon: 'ShoppingCart',
    href: '/products/apps/commerce',
    github: 'https://github.com/hanzoai/commerce',
    docs: 'https://docs.hanzo.ai/commerce',
    features: ['Payments', 'Subscriptions', 'Invoicing', 'AI recommendations', 'Entitlements'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'chat',
    name: 'Hanzo Chat',
    shortName: 'Chat',
    tagline: 'AI chat interface',
    description: 'Beautiful chat interface for AI assistants. Multi-model support, MCP integration, conversation memory.',
    category: 'apps',
    icon: 'MessageSquare',
    href: '/products/apps/chat',
    github: 'https://github.com/hanzoai/chat',
    docs: 'https://docs.hanzo.ai/chat',
    features: ['Multi-model', 'MCP support', 'Conversation memory', 'File uploads', 'Code execution'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'flow',
    name: 'Hanzo Flow',
    shortName: 'Flow',
    tagline: 'Visual workflow builder',
    description: 'Build AI workflows visually. Connect models, APIs, and data sources with drag-and-drop.',
    category: 'apps',
    icon: 'Workflow',
    href: '/products/apps/flow',
    github: 'https://github.com/hanzoai/flow',
    docs: 'https://docs.hanzo.ai/flow',
    features: ['Visual builder', 'AI nodes', 'API connectors', 'Triggers', 'Versioning'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'console',
    name: 'Hanzo Console',
    shortName: 'Console',
    tagline: 'Admin control plane',
    description: 'Unified admin interface for all Hanzo products. Manage resources, users, and billing.',
    category: 'apps',
    icon: 'LayoutDashboard',
    href: '/products/apps/console',
    github: 'https://github.com/hanzoai/console',
    docs: 'https://docs.hanzo.ai/console',
    features: ['Resource management', 'User admin', 'Billing', 'Audit logs', 'Team management'],
    status: 'ga',
    openSource: false,
    pricing: 'freemium'
  },
  {
    id: 'cloud',
    name: 'Hanzo Cloud',
    shortName: 'Cloud',
    tagline: 'AI infrastructure platform',
    description: 'Unified AI infrastructure and MCP management. Connect to 100+ models, manage context, deploy agents.',
    category: 'apps',
    icon: 'Cloud',
    href: '/products/apps/cloud',
    github: 'https://github.com/hanzoai/cloud',
    docs: 'https://docs.hanzo.ai/cloud',
    features: ['100+ models', 'MCP management', 'Agent deployment', 'Context windows', 'Usage analytics'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'agent',
    name: 'Hanzo Agent',
    shortName: 'Agent',
    tagline: 'Multi-agent orchestration SDK',
    description: 'Build and orchestrate AI agents with built-in tools, memory, and planning. OpenAI Agents SDK compatible.',
    category: 'apps',
    icon: 'Bot',
    href: '/products/apps/agent',
    github: 'https://github.com/hanzoai/agent',
    docs: 'https://docs.hanzo.ai/agent',
    install: {
      pip: 'pip install hanzo-agent',
      cli: 'hanzo agent create myagent'
    },
    features: ['Multi-agent', 'Tool use', 'Memory systems', 'Planning', 'Handoffs', 'Tracing', 'OpenAI compatible', 'MCP support'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'mcp',
    name: 'Hanzo MCP',
    shortName: 'MCP',
    tagline: 'Model Context Protocol tools',
    description: 'Unified MCP server with 260+ tools for AI development. Browser automation, file operations, code analysis, and more.',
    category: 'apps',
    icon: 'Sparkles',
    href: '/products/apps/mcp',
    github: 'https://github.com/hanzoai/mcp',
    docs: 'https://docs.hanzo.ai/mcp',
    install: {
      npm: 'npm install -g @hanzo/mcp',
      pip: 'pip install hanzo-mcp'
    },
    features: ['260+ tools', 'Browser automation', 'File operations', 'Code analysis', 'Memory', 'Computer use', 'Extensible', 'Multi-runtime'],
    status: 'ga',
    openSource: true,
    pricing: 'free'
  },
  {
    id: 'operative',
    name: 'Hanzo Operative',
    shortName: 'Operative',
    tagline: 'Computer use for AI',
    description: 'Give AI agents the ability to control computers. Screen capture, mouse/keyboard control, and application automation.',
    category: 'apps',
    icon: 'Monitor',
    href: '/products/apps/operative',
    github: 'https://github.com/hanzoai/operative',
    docs: 'https://docs.hanzo.ai/operative',
    install: {
      pip: 'pip install hanzo-operative'
    },
    features: ['Screen capture', 'Mouse control', 'Keyboard input', 'App automation', 'Claude integration', 'Headless mode', 'Recording', 'Replay'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// GROWTH PRODUCTS
// =============================================================================

export const growthProducts: Product[] = [
  {
    id: 'insights',
    name: 'Hanzo Insights',
    shortName: 'Insights',
    tagline: 'Product analytics platform',
    description: 'Understand user behavior with product analytics. Event tracking, funnels, cohorts, session replay, and feature flags. PostHog-compatible.',
    category: 'growth',
    icon: 'PieChart',
    href: '/products/growth/insights',
    github: 'https://github.com/hanzoai/insights',
    docs: 'https://docs.hanzo.ai/insights',
    install: {
      cli: 'hanzo insights init',
      docker: 'docker run -d hanzo/insights'
    },
    features: ['Event tracking', 'Funnels', 'Cohorts', 'Session replay', 'Feature flags', 'A/B testing', 'Heatmaps', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'web-analytics',
    name: 'Hanzo Web Analytics',
    shortName: 'Web Analytics',
    tagline: 'Privacy-focused web analytics',
    description: 'Simple, privacy-focused website analytics. No cookies, GDPR compliant, lightweight script. Umami-compatible.',
    category: 'growth',
    icon: 'BarChart',
    href: '/products/growth/web-analytics',
    github: 'https://github.com/hanzoai/web-analytics',
    docs: 'https://docs.hanzo.ai/web-analytics',
    install: {
      cli: 'hanzo analytics create mysite',
      docker: 'docker run -d hanzo/web-analytics'
    },
    features: ['Privacy-first', 'No cookies', 'GDPR compliant', 'Lightweight', 'Real-time', 'Custom events', 'UTM tracking', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'experiments',
    name: 'Hanzo Experiments',
    shortName: 'Experiments',
    tagline: 'Feature flags & A/B testing',
    description: 'Ship features safely with feature flags and A/B testing. Gradual rollouts, targeting rules, and statistical analysis. GrowthBook-compatible.',
    category: 'growth',
    icon: 'SlidersHorizontal',
    href: '/products/growth/experiments',
    github: 'https://github.com/hanzoai/experiments',
    docs: 'https://docs.hanzo.ai/experiments',
    install: {
      cli: 'hanzo experiments init',
      npm: 'npm install @hanzo/experiments'
    },
    features: ['Feature flags', 'A/B testing', 'Gradual rollouts', 'Targeting rules', 'Statistical analysis', 'SDK support', 'Warehouse native', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'engage',
    name: 'Hanzo Engage',
    shortName: 'Engage',
    tagline: 'Lifecycle messaging & automation',
    description: 'Customer engagement and lifecycle messaging. Email, push, SMS, and in-app messages triggered by user behavior. Dittofeed-compatible.',
    category: 'growth',
    icon: 'MessageSquare',
    href: '/products/growth/engage',
    github: 'https://github.com/hanzoai/engage',
    docs: 'https://docs.hanzo.ai/engage',
    install: {
      cli: 'hanzo engage init',
      docker: 'docker run -d hanzo/engage'
    },
    features: ['Email campaigns', 'Push notifications', 'SMS', 'In-app messages', 'Journey builder', 'Segmentation', 'Templates', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'ads',
    name: 'Hanzo Ads',
    shortName: 'Ads',
    tagline: 'Paid acquisition & attribution',
    description: 'Unified ad management and attribution. Connect ad platforms, track conversions, optimize spend across channels.',
    category: 'growth',
    icon: 'Zap',
    href: '/products/growth/ads',
    github: 'https://github.com/hanzoai/ads',
    docs: 'https://docs.hanzo.ai/ads',
    features: ['Multi-channel', 'Attribution', 'Conversion tracking', 'Budget optimization', 'Creative testing', 'Audience sync', 'ROAS reporting'],
    status: 'beta',
    openSource: false,
    pricing: 'paid'
  }
]

// =============================================================================
// CX & OPS PRODUCTS
// =============================================================================

export const cxProducts: Product[] = [
  {
    id: 'cx-suite',
    name: 'Hanzo CX',
    shortName: 'CX',
    tagline: 'Complete customer experience suite',
    description: 'Your complete customer experience platform. Unified inbox for email, chat, social, and phone. AI-powered responses, routing, and analytics. Chatwoot-compatible.',
    category: 'cx',
    icon: 'MessageSquare',
    href: '/products/cx/suite',
    github: 'https://github.com/hanzoai/cx',
    docs: 'https://docs.hanzo.ai/cx',
    install: {
      cli: 'hanzo cx init',
      docker: 'docker run -d hanzo/cx'
    },
    features: ['Unified inbox', 'Omnichannel', 'AI responses', 'Live chat', 'Automation rules', 'CSAT surveys', 'Reports', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'crm',
    name: 'Hanzo CRM',
    shortName: 'CRM',
    tagline: 'Modern customer relationship management',
    description: 'Open source CRM built for modern teams. Contacts, deals, pipelines, and automation. Twenty/EspoCRM-compatible.',
    category: 'cx',
    icon: 'UserCheck',
    href: '/products/cx/crm',
    github: 'https://github.com/hanzoai/crm',
    docs: 'https://docs.hanzo.ai/crm',
    install: {
      cli: 'hanzo crm init',
      docker: 'docker run -d hanzo/crm'
    },
    features: ['Contact management', 'Deal pipelines', 'Email sync', 'Automation', 'Custom fields', 'API-first', 'GraphQL', 'Self-hostable'],
    status: 'ga',
    openSource: true,
    pricing: 'freemium'
  },
  {
    id: 'erp',
    name: 'Hanzo ERP',
    shortName: 'ERP',
    tagline: 'Enterprise resource planning',
    description: 'Complete business management suite. Accounting, inventory, HR, and operations in one platform. ERPNext/Odoo-compatible.',
    category: 'cx',
    icon: 'Boxes',
    href: '/products/cx/erp',
    github: 'https://github.com/hanzoai/erp',
    docs: 'https://docs.hanzo.ai/erp',
    install: {
      cli: 'hanzo erp init',
      docker: 'docker run -d hanzo/erp'
    },
    features: ['Accounting', 'Inventory', 'HR', 'Manufacturing', 'Projects', 'CRM', 'E-commerce', 'Self-hostable'],
    status: 'beta',
    openSource: true,
    pricing: 'freemium'
  }
]

// =============================================================================
// ALL PRODUCTS
// =============================================================================

export const allProducts: Product[] = [
  ...dataProducts,
  ...computeProducts,
  ...asyncProducts,
  ...mlProducts,
  ...observabilityProducts,
  ...platformProducts,
  ...appsProducts,
  ...growthProducts,
  ...cxProducts
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter(p => p.category === category)
}

export function getProduct(id: string): Product | undefined {
  return allProducts.find(p => p.id === id)
}

export function getCategory(id: ProductCategory): CategoryInfo | undefined {
  return categories.find(c => c.id === id)
}

export function getMLSubcategories(): string[] {
  return [...new Set(mlProducts.map(p => p.subcategory).filter(Boolean))] as string[]
}

// =============================================================================
// NAVIGATION DATA
// =============================================================================

export const productNavigation = {
  products: categories.map(cat => ({
    name: cat.name,
    href: cat.href,
    items: getProductsByCategory(cat.id).map(p => ({
      name: p.shortName,
      href: p.href,
      description: p.tagline
    }))
  }))
}
