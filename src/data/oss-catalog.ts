/**
 * OSS Catalog Data Model
 *
 * Faceted browsing with hot/cool sorting, badges, and clear actions
 */

import {
  Bot,
  Brain,
  Code,
  Database,
  Globe,
  Key,
  Layers,
  MessageSquare,
  Plug,
  Route,
  Search,
  Server,
  Shield,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Activity,
  FileCode,
  Package,
  Rocket,
  Container,
  Lock,
  BarChart3,
  GitBranch,
  Play,
  type LucideIcon,
} from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

export type RepoType = 'core' | 'sdk' | 'template' | 'example' | 'tool' | 'mcp' | 'connector';
export type Maturity = 'stable' | 'active' | 'experimental';
export type DeploymentType = 'one-click' | 'docker' | 'k8s' | 'library' | 'npm' | 'pip';

export interface RepoActions {
  deployUrl?: string;
  docsUrl?: string;
  githubUrl: string;
  learnUrl?: string;
  npmUrl?: string;
  pypiUrl?: string;
}

export interface RepoSignals {
  updatedAt: string;
  featured: boolean;
  recommended: boolean;
  deployable: boolean;
  hotScore: number; // 0-100, computed from signals
}

export interface OSSRepo {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: RepoType;
  categories: string[];
  languages: string[];
  useCases: string[];
  maturity: Maturity;
  deployment: DeploymentType[];
  actions: RepoActions;
  signals: RepoSignals;
  icon?: LucideIcon;
  upstream?: {
    name: string;
    url: string;
  };
}

export interface FeaturedCollection {
  id: string;
  title: string;
  description: string;
  repos: string[]; // repo ids
  icon: LucideIcon;
}

// =============================================================================
// FILTER TAXONOMY
// =============================================================================

export const repoTypes: { value: RepoType; label: string; description: string }[] = [
  { value: 'core', label: 'Core Infrastructure', description: 'Foundational platform services' },
  { value: 'sdk', label: 'SDK / Library', description: 'Client libraries and SDKs' },
  { value: 'template', label: 'Template / Starter', description: 'Ready-to-deploy starters' },
  { value: 'example', label: 'Example / Reference', description: 'Reference implementations' },
  { value: 'tool', label: 'Tooling', description: 'CLI tools and utilities' },
  { value: 'mcp', label: 'MCP Server', description: 'Model Context Protocol tools' },
  { value: 'connector', label: 'Connector', description: 'Integrations and adapters' },
];

export const categories = [
  'AI & Agents',
  'Developer Tools',
  'App Platform',
  'Databases & Search',
  'Integrations & Automation',
  'Security & Governance',
  'Observability & Ops',
  'Infrastructure',
];

export const languages = [
  'TypeScript',
  'Python',
  'Go',
  'Rust',
  'Java',
  'Shell',
];

export const useCases = [
  'RAG',
  'Multi-agent',
  'Inference Gateway',
  'MCP Tooling',
  'Observability',
  'CI/CD',
  'Vector Search',
  'Authentication',
  'Serverless',
  'Data Pipeline',
];

export const maturityLevels: { value: Maturity; label: string; color: string }[] = [
  { value: 'stable', label: 'Stable', color: 'green' },
  { value: 'active', label: 'Active', color: 'blue' },
  { value: 'experimental', label: 'Experimental', color: 'orange' },
];

export const deploymentTypes: { value: DeploymentType; label: string }[] = [
  { value: 'one-click', label: 'One-click Deploy' },
  { value: 'docker', label: 'Docker' },
  { value: 'k8s', label: 'Kubernetes' },
  { value: 'library', label: 'Library Only' },
  { value: 'npm', label: 'npm Package' },
  { value: 'pip', label: 'pip Package' },
];

// =============================================================================
// SORT OPTIONS
// =============================================================================

export const sortOptions = [
  { value: 'hot', label: 'Hot', description: 'Trending and recommended' },
  { value: 'recent', label: 'Recently Updated', description: 'Latest changes' },
  { value: 'beginner', label: 'Beginner-friendly', description: 'Easy to start' },
  { value: 'name', label: 'Alphabetical', description: 'A to Z' },
];

// =============================================================================
// FEATURED COLLECTIONS
// =============================================================================

export const featuredCollections: FeaturedCollection[] = [
  {
    id: 'build-agent',
    title: 'Build an Agent',
    description: 'Everything you need to build AI agents',
    repos: ['dev', 'mcp', 'agent', 'vector', 'functions'],
    icon: Bot,
  },
  {
    id: 'ship-rag',
    title: 'Ship a RAG API',
    description: 'Vector search + LLM gateway + SQL',
    repos: ['rag-starter', 'vector', 'sql', 'gateway'],
    icon: Search,
  },
  {
    id: 'deploy-mcp',
    title: 'Deploy MCP Server',
    description: 'Model Context Protocol tools',
    repos: ['mcp', 'mcp-template', 'functions'],
    icon: Plug,
  },
  {
    id: 'automation-governance',
    title: 'Automation + Governance',
    description: 'Workflows with policy controls',
    repos: ['auto', 'flow', 'policy', 'approvals'],
    icon: Shield,
  },
];

// =============================================================================
// OSS CATALOG DATA
// =============================================================================

export const ossCatalog: OSSRepo[] = [
  // ===== CORE INFRASTRUCTURE =====
  {
    id: 'dev',
    name: 'Hanzo Dev',
    slug: 'hanzoai/dev',
    description: 'AI coding agent for your terminal. Multi-agent orchestration, codebase understanding, and PR automation.',
    type: 'tool',
    categories: ['AI & Agents', 'Developer Tools'],
    languages: ['TypeScript', 'Rust'],
    useCases: ['Multi-agent', 'CI/CD'],
    maturity: 'stable',
    deployment: ['npm', 'one-click'],
    actions: {
      deployUrl: 'https://hanzo.sh/install.sh',
      docsUrl: 'https://docs.hanzo.ai/dev',
      githubUrl: 'https://github.com/hanzoai/dev',
      learnUrl: '/dev',
      npmUrl: 'https://npmjs.com/package/@hanzo/dev',
    },
    signals: {
      updatedAt: '2026-01-20',
      featured: true,
      recommended: true,
      deployable: true,
      hotScore: 98,
    },
    icon: Terminal,
  },
  {
    id: 'gateway',
    name: 'LLM Gateway',
    slug: 'hanzoai/llm',
    description: 'Unified proxy for 100+ LLM providers. OpenAI-compatible API with load balancing, caching, and observability.',
    type: 'core',
    categories: ['AI & Agents', 'Infrastructure'],
    languages: ['Python'],
    useCases: ['Inference Gateway', 'Observability'],
    maturity: 'stable',
    deployment: ['docker', 'k8s', 'one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/gateway',
      docsUrl: 'https://docs.hanzo.ai/gateway',
      githubUrl: 'https://github.com/hanzoai/llm',
      learnUrl: '/products/ml/zen',
    },
    signals: {
      updatedAt: '2026-01-19',
      featured: true,
      recommended: true,
      deployable: true,
      hotScore: 95,
    },
    icon: Route,
    upstream: {
      name: 'LiteLLM',
      url: 'https://github.com/BerriAI/litellm',
    },
  },
  {
    id: 'mcp',
    name: 'Hanzo MCP',
    slug: 'hanzoai/mcp',
    description: '260+ tools for AI models via Model Context Protocol. File ops, browser, search, memory, and more.',
    type: 'mcp',
    categories: ['AI & Agents', 'Developer Tools'],
    languages: ['TypeScript'],
    useCases: ['MCP Tooling', 'Multi-agent'],
    maturity: 'active',
    deployment: ['npm'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/mcp',
      githubUrl: 'https://github.com/hanzoai/mcp',
      learnUrl: '/products/apps/mcp',
      npmUrl: 'https://npmjs.com/package/@hanzo/mcp',
    },
    signals: {
      updatedAt: '2026-01-18',
      featured: true,
      recommended: true,
      deployable: false,
      hotScore: 92,
    },
    icon: Plug,
  },
  {
    id: 'agent',
    name: 'Agent SDK',
    slug: 'hanzoai/agent',
    description: 'Multi-agent SDK with swarm orchestration. Build agents that collaborate, hand off, and self-heal.',
    type: 'sdk',
    categories: ['AI & Agents'],
    languages: ['Python', 'TypeScript'],
    useCases: ['Multi-agent', 'RAG'],
    maturity: 'active',
    deployment: ['pip', 'npm'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/agent',
      githubUrl: 'https://github.com/hanzoai/agent',
      learnUrl: '/products/apps/agent',
      pypiUrl: 'https://pypi.org/project/hanzoai/',
    },
    signals: {
      updatedAt: '2026-01-17',
      featured: true,
      recommended: true,
      deployable: false,
      hotScore: 90,
    },
    icon: Bot,
  },
  {
    id: 'vector',
    name: 'Vector DB',
    slug: 'hanzoai/vector',
    description: 'High-performance vector database with HNSW indexing. Sub-millisecond similarity search at scale.',
    type: 'core',
    categories: ['Databases & Search', 'AI & Agents'],
    languages: ['Rust', 'Python'],
    useCases: ['Vector Search', 'RAG'],
    maturity: 'stable',
    deployment: ['docker', 'k8s', 'one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/vector',
      docsUrl: 'https://docs.hanzo.ai/vector',
      githubUrl: 'https://github.com/hanzoai/vector',
      learnUrl: '/products/data/vector',
    },
    signals: {
      updatedAt: '2026-01-15',
      featured: true,
      recommended: true,
      deployable: true,
      hotScore: 88,
    },
    icon: Sparkles,
  },
  {
    id: 'functions',
    name: 'Functions',
    slug: 'hanzoai/functions',
    description: 'Serverless compute with zero cold starts. Deploy functions that scale to zero and wake instantly.',
    type: 'core',
    categories: ['App Platform', 'Infrastructure'],
    languages: ['TypeScript', 'Python', 'Go', 'Rust'],
    useCases: ['Serverless', 'CI/CD'],
    maturity: 'stable',
    deployment: ['one-click', 'docker'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/functions',
      docsUrl: 'https://docs.hanzo.ai/functions',
      githubUrl: 'https://github.com/hanzoai/functions',
      learnUrl: '/products/compute/functions',
    },
    signals: {
      updatedAt: '2026-01-14',
      featured: true,
      recommended: true,
      deployable: true,
      hotScore: 85,
    },
    icon: Zap,
  },
  {
    id: 'chat',
    name: 'Hanzo Chat',
    slug: 'hanzoai/chat',
    description: 'Enhanced ChatGPT-style UI with multi-model support, plugins, and MCP integration.',
    type: 'template',
    categories: ['AI & Agents', 'App Platform'],
    languages: ['TypeScript'],
    useCases: ['Multi-agent', 'RAG'],
    maturity: 'stable',
    deployment: ['docker', 'one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/chat',
      docsUrl: 'https://docs.hanzo.ai/chat',
      githubUrl: 'https://github.com/hanzoai/chat',
      learnUrl: '/products/apps/chat',
    },
    signals: {
      updatedAt: '2026-01-16',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 82,
    },
    icon: MessageSquare,
    upstream: {
      name: 'LibreChat',
      url: 'https://github.com/danny-avila/LibreChat',
    },
  },
  {
    id: 'console',
    name: 'Console',
    slug: 'hanzoai/console',
    description: 'LLM observability dashboard. Traces, evals, prompt management, and cost analytics.',
    type: 'core',
    categories: ['Observability & Ops', 'AI & Agents'],
    languages: ['TypeScript', 'Python'],
    useCases: ['Observability'],
    maturity: 'stable',
    deployment: ['docker', 'one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/console',
      docsUrl: 'https://docs.hanzo.ai/console',
      githubUrl: 'https://github.com/hanzoai/console',
      learnUrl: '/products/apps/console',
    },
    signals: {
      updatedAt: '2026-01-13',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 80,
    },
    icon: Activity,
    upstream: {
      name: 'Langfuse',
      url: 'https://github.com/langfuse/langfuse',
    },
  },
  {
    id: 'flow',
    name: 'Flow',
    slug: 'hanzoai/flow',
    description: 'Visual workflow builder for LLM pipelines. Drag-and-drop AI app construction.',
    type: 'core',
    categories: ['AI & Agents', 'Integrations & Automation'],
    languages: ['TypeScript', 'Python'],
    useCases: ['Data Pipeline', 'Multi-agent'],
    maturity: 'active',
    deployment: ['docker', 'one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/flow',
      docsUrl: 'https://docs.hanzo.ai/flow',
      githubUrl: 'https://github.com/hanzoai/flow',
      learnUrl: '/products/async/flow',
    },
    signals: {
      updatedAt: '2026-01-12',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 78,
    },
    icon: Workflow,
    upstream: {
      name: 'Langfuse',
      url: 'https://github.com/langfuse/langfuse',
    },
  },
  {
    id: 'auto',
    name: 'Auto',
    slug: 'hanzoai/auto',
    description: 'No-code automation platform. 200+ integrations for workflows without coding.',
    type: 'core',
    categories: ['Integrations & Automation'],
    languages: ['TypeScript'],
    useCases: ['Data Pipeline', 'CI/CD'],
    maturity: 'stable',
    deployment: ['docker', 'one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/auto',
      docsUrl: 'https://docs.hanzo.ai/auto',
      githubUrl: 'https://github.com/hanzoai/auto',
      learnUrl: '/products/async/auto',
    },
    signals: {
      updatedAt: '2026-01-11',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 75,
    },
    icon: Play,
    upstream: {
      name: 'Activepieces',
      url: 'https://github.com/activepieces/activepieces',
    },
  },

  // ===== SDKs =====
  {
    id: 'python-sdk',
    name: 'Python SDK',
    slug: 'hanzoai/python-sdk',
    description: 'Official Python client for Hanzo APIs. Type-safe, async-first, with full API coverage.',
    type: 'sdk',
    categories: ['Developer Tools'],
    languages: ['Python'],
    useCases: ['Inference Gateway', 'Multi-agent'],
    maturity: 'stable',
    deployment: ['pip'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/sdk/python',
      githubUrl: 'https://github.com/hanzoai/python-sdk',
      pypiUrl: 'https://pypi.org/project/hanzoai/',
    },
    signals: {
      updatedAt: '2026-01-10',
      featured: false,
      recommended: true,
      deployable: false,
      hotScore: 70,
    },
    icon: Code,
  },
  {
    id: 'js-sdk',
    name: 'TypeScript SDK',
    slug: 'hanzoai/js-sdk',
    description: 'Official TypeScript/JavaScript client. Works in Node.js, browsers, and edge runtimes.',
    type: 'sdk',
    categories: ['Developer Tools'],
    languages: ['TypeScript'],
    useCases: ['Inference Gateway', 'Multi-agent'],
    maturity: 'stable',
    deployment: ['npm'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/sdk/typescript',
      githubUrl: 'https://github.com/hanzoai/js-sdk',
      npmUrl: 'https://npmjs.com/package/@hanzo/ai',
    },
    signals: {
      updatedAt: '2026-01-09',
      featured: false,
      recommended: true,
      deployable: false,
      hotScore: 68,
    },
    icon: Code,
  },
  {
    id: 'go-sdk',
    name: 'Go SDK',
    slug: 'hanzoai/go-sdk',
    description: 'Official Go client. Idiomatic Go with context support and connection pooling.',
    type: 'sdk',
    categories: ['Developer Tools'],
    languages: ['Go'],
    useCases: ['Inference Gateway'],
    maturity: 'stable',
    deployment: ['library'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/sdk/go',
      githubUrl: 'https://github.com/hanzoai/go-sdk',
    },
    signals: {
      updatedAt: '2026-01-08',
      featured: false,
      recommended: false,
      deployable: false,
      hotScore: 55,
    },
    icon: Code,
  },
  {
    id: 'rust-sdk',
    name: 'Rust SDK',
    slug: 'hanzoai/rust-sdk',
    description: 'Official Rust client with async/await, crypto primitives, and DID support.',
    type: 'sdk',
    categories: ['Developer Tools'],
    languages: ['Rust'],
    useCases: ['Inference Gateway'],
    maturity: 'active',
    deployment: ['library'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/sdk/rust',
      githubUrl: 'https://github.com/hanzoai/rust-sdk',
    },
    signals: {
      updatedAt: '2026-01-07',
      featured: false,
      recommended: false,
      deployable: false,
      hotScore: 50,
    },
    icon: Code,
  },

  // ===== TEMPLATES =====
  {
    id: 'rag-starter',
    name: 'RAG Starter',
    slug: 'hanzoai/rag-starter',
    description: 'Production-ready RAG template. Vector search + reranking + streaming responses.',
    type: 'template',
    categories: ['AI & Agents', 'App Platform'],
    languages: ['TypeScript', 'Python'],
    useCases: ['RAG', 'Vector Search'],
    maturity: 'stable',
    deployment: ['one-click', 'docker'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/new?template=rag-starter',
      docsUrl: 'https://docs.hanzo.ai/templates/rag',
      githubUrl: 'https://github.com/hanzoai/rag-starter',
      learnUrl: '/templates/rag',
    },
    signals: {
      updatedAt: '2026-01-15',
      featured: true,
      recommended: true,
      deployable: true,
      hotScore: 85,
    },
    icon: Search,
  },
  {
    id: 'agent-starter',
    name: 'Agent Starter',
    slug: 'hanzoai/agent-starter',
    description: 'Multi-agent template with tool use, memory, and handoffs. Ready for production.',
    type: 'template',
    categories: ['AI & Agents'],
    languages: ['Python'],
    useCases: ['Multi-agent', 'MCP Tooling'],
    maturity: 'active',
    deployment: ['one-click', 'docker'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/new?template=agent-starter',
      docsUrl: 'https://docs.hanzo.ai/templates/agent',
      githubUrl: 'https://github.com/hanzoai/agent-starter',
      learnUrl: '/templates/agent',
    },
    signals: {
      updatedAt: '2026-01-14',
      featured: true,
      recommended: true,
      deployable: true,
      hotScore: 83,
    },
    icon: Bot,
  },
  {
    id: 'mcp-template',
    name: 'MCP Server Template',
    slug: 'hanzoai/mcp-template',
    description: 'Scaffold a new MCP server in minutes. TypeScript + SSE + tool definitions.',
    type: 'template',
    categories: ['Developer Tools', 'AI & Agents'],
    languages: ['TypeScript'],
    useCases: ['MCP Tooling'],
    maturity: 'stable',
    deployment: ['npm'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/mcp/create',
      githubUrl: 'https://github.com/hanzoai/mcp-template',
      learnUrl: '/templates/mcp',
    },
    signals: {
      updatedAt: '2026-01-13',
      featured: false,
      recommended: true,
      deployable: false,
      hotScore: 72,
    },
    icon: FileCode,
  },
  {
    id: 'api-starter',
    name: 'API Starter',
    slug: 'hanzoai/api-starter',
    description: 'Production API template with auth, rate limiting, and OpenAPI docs.',
    type: 'template',
    categories: ['App Platform'],
    languages: ['TypeScript'],
    useCases: ['Serverless'],
    maturity: 'stable',
    deployment: ['one-click', 'docker'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/new?template=api-starter',
      docsUrl: 'https://docs.hanzo.ai/templates/api',
      githubUrl: 'https://github.com/hanzoai/api-starter',
    },
    signals: {
      updatedAt: '2026-01-12',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 65,
    },
    icon: Layers,
  },

  // ===== SECURITY & GOVERNANCE =====
  {
    id: 'iam',
    name: 'IAM',
    slug: 'hanzoai/iam',
    description: 'Identity and access management. RBAC, API keys, OAuth, and SSO.',
    type: 'core',
    categories: ['Security & Governance'],
    languages: ['Go', 'TypeScript'],
    useCases: ['Authentication'],
    maturity: 'stable',
    deployment: ['docker', 'k8s'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/iam',
      githubUrl: 'https://github.com/hanzoai/iam',
      learnUrl: '/products/platform/iam',
    },
    signals: {
      updatedAt: '2026-01-10',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 60,
    },
    icon: Key,
  },
  {
    id: 'policy',
    name: 'Policy Engine',
    slug: 'hanzoai/policy',
    description: 'Policy-as-code for AI governance. Define rules for model access, data handling, and compliance.',
    type: 'core',
    categories: ['Security & Governance', 'AI & Agents'],
    languages: ['Go'],
    useCases: ['Authentication'],
    maturity: 'active',
    deployment: ['docker', 'library'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/policy',
      githubUrl: 'https://github.com/hanzoai/policy',
      learnUrl: '/products/platform/guard',
    },
    signals: {
      updatedAt: '2026-01-09',
      featured: false,
      recommended: false,
      deployable: true,
      hotScore: 45,
    },
    icon: Shield,
  },
  {
    id: 'approvals',
    name: 'Approvals',
    slug: 'hanzoai/approvals',
    description: 'Human-in-the-loop approval workflows. Review gates for sensitive AI operations.',
    type: 'tool',
    categories: ['Security & Governance'],
    languages: ['TypeScript'],
    useCases: ['CI/CD'],
    maturity: 'experimental',
    deployment: ['docker'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/approvals',
      githubUrl: 'https://github.com/hanzoai/approvals',
    },
    signals: {
      updatedAt: '2026-01-05',
      featured: false,
      recommended: false,
      deployable: true,
      hotScore: 35,
    },
    icon: Lock,
  },

  // ===== DATABASES =====
  {
    id: 'sql',
    name: 'SQL',
    slug: 'hanzoai/sql',
    description: 'Managed PostgreSQL with pgvector. SQL + vector search in one database.',
    type: 'core',
    categories: ['Databases & Search'],
    languages: ['SQL'],
    useCases: ['Vector Search', 'Data Pipeline'],
    maturity: 'stable',
    deployment: ['one-click', 'docker'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/sql',
      docsUrl: 'https://docs.hanzo.ai/sql',
      githubUrl: 'https://github.com/hanzoai/sql',
      learnUrl: '/products/data/sql',
    },
    signals: {
      updatedAt: '2026-01-08',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 62,
    },
    icon: Database,
  },
  {
    id: 'kv',
    name: 'KV Store',
    slug: 'hanzoai/kv',
    description: 'Edge-optimized key-value store. Sub-millisecond reads with global replication.',
    type: 'core',
    categories: ['Databases & Search'],
    languages: ['Rust'],
    useCases: [],
    maturity: 'stable',
    deployment: ['one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/kv',
      docsUrl: 'https://docs.hanzo.ai/kv',
      githubUrl: 'https://github.com/hanzoai/kv',
      learnUrl: '/products/data/kv',
    },
    signals: {
      updatedAt: '2026-01-06',
      featured: false,
      recommended: false,
      deployable: true,
      hotScore: 48,
    },
    icon: Database,
  },
  {
    id: 'search',
    name: 'Search',
    slug: 'hanzoai/search',
    description: 'Full-text search with typo tolerance. Lightning fast, relevant results.',
    type: 'core',
    categories: ['Databases & Search'],
    languages: ['Rust'],
    useCases: ['Vector Search'],
    maturity: 'stable',
    deployment: ['docker', 'one-click'],
    actions: {
      deployUrl: 'https://cloud.hanzo.ai/deploy/search',
      docsUrl: 'https://docs.hanzo.ai/search',
      githubUrl: 'https://github.com/hanzoai/search',
      learnUrl: '/products/data/search',
    },
    signals: {
      updatedAt: '2026-01-04',
      featured: false,
      recommended: true,
      deployable: true,
      hotScore: 58,
    },
    icon: Search,
    upstream: {
      name: 'Meilisearch',
      url: 'https://github.com/meilisearch/meilisearch',
    },
  },

  // ===== OBSERVABILITY =====
  {
    id: 'telemetry',
    name: 'Telemetry',
    slug: 'hanzoai/telemetry',
    description: 'Unified observability stack. Metrics, logs, and traces in one platform.',
    type: 'core',
    categories: ['Observability & Ops'],
    languages: ['Go', 'TypeScript'],
    useCases: ['Observability'],
    maturity: 'stable',
    deployment: ['docker', 'k8s'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/telemetry',
      githubUrl: 'https://github.com/hanzoai/telemetry',
      learnUrl: '/products/observability/telemetry',
    },
    signals: {
      updatedAt: '2026-01-03',
      featured: false,
      recommended: false,
      deployable: true,
      hotScore: 52,
    },
    icon: BarChart3,
  },

  // ===== INFRASTRUCTURE =====
  {
    id: 'edge',
    name: 'Edge Runtime',
    slug: 'hanzoai/edge',
    description: 'Global edge compute network. Run code in 300+ locations worldwide.',
    type: 'core',
    categories: ['Infrastructure'],
    languages: ['TypeScript', 'Rust'],
    useCases: ['Serverless'],
    maturity: 'stable',
    deployment: ['one-click'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/edge',
      githubUrl: 'https://github.com/hanzoai/edge',
      learnUrl: '/products/platform/edge',
    },
    signals: {
      updatedAt: '2026-01-02',
      featured: false,
      recommended: false,
      deployable: true,
      hotScore: 55,
    },
    icon: Globe,
  },
  {
    id: 'hke',
    name: 'HKE',
    slug: 'hanzoai/hke',
    description: 'Hanzo Kubernetes Engine. Managed K8s with AI workload optimization.',
    type: 'core',
    categories: ['Infrastructure'],
    languages: ['Go'],
    useCases: [],
    maturity: 'stable',
    deployment: ['k8s'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/hke',
      githubUrl: 'https://github.com/hanzoai/hke',
      learnUrl: '/products/platform/hke',
    },
    signals: {
      updatedAt: '2026-01-01',
      featured: false,
      recommended: false,
      deployable: true,
      hotScore: 40,
    },
    icon: Container,
  },

  // ===== CONNECTORS =====
  {
    id: 'github-connector',
    name: 'GitHub Connector',
    slug: 'hanzoai/github-connector',
    description: 'Sync GitHub repos, issues, and PRs. Bi-directional integration.',
    type: 'connector',
    categories: ['Integrations & Automation'],
    languages: ['TypeScript'],
    useCases: ['CI/CD'],
    maturity: 'stable',
    deployment: ['npm'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/connectors/github',
      githubUrl: 'https://github.com/hanzoai/github-connector',
    },
    signals: {
      updatedAt: '2026-01-10',
      featured: false,
      recommended: false,
      deployable: false,
      hotScore: 42,
    },
    icon: GitBranch,
  },
  {
    id: 'slack-connector',
    name: 'Slack Connector',
    slug: 'hanzoai/slack-connector',
    description: 'Slack integration for AI workflows. Commands, notifications, and threads.',
    type: 'connector',
    categories: ['Integrations & Automation'],
    languages: ['TypeScript'],
    useCases: [],
    maturity: 'stable',
    deployment: ['npm'],
    actions: {
      docsUrl: 'https://docs.hanzo.ai/connectors/slack',
      githubUrl: 'https://github.com/hanzoai/slack-connector',
    },
    signals: {
      updatedAt: '2026-01-08',
      featured: false,
      recommended: false,
      deployable: false,
      hotScore: 38,
    },
    icon: MessageSquare,
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getRepoById(id: string): OSSRepo | undefined {
  return ossCatalog.find(repo => repo.id === id);
}

export function getReposByType(type: RepoType): OSSRepo[] {
  return ossCatalog.filter(repo => repo.type === type);
}

export function getReposByCategory(category: string): OSSRepo[] {
  return ossCatalog.filter(repo => repo.categories.includes(category));
}

export function getFeaturedRepos(): OSSRepo[] {
  return ossCatalog.filter(repo => repo.signals.featured);
}

export function getRecommendedRepos(): OSSRepo[] {
  return ossCatalog.filter(repo => repo.signals.recommended);
}

export function sortByHot(repos: OSSRepo[]): OSSRepo[] {
  return [...repos].sort((a, b) => b.signals.hotScore - a.signals.hotScore);
}

export function sortByRecent(repos: OSSRepo[]): OSSRepo[] {
  return [...repos].sort((a, b) =>
    new Date(b.signals.updatedAt).getTime() - new Date(a.signals.updatedAt).getTime()
  );
}

export function filterRepos(
  repos: OSSRepo[],
  filters: {
    types?: RepoType[];
    categories?: string[];
    languages?: string[];
    useCases?: string[];
    maturity?: Maturity[];
    deployment?: DeploymentType[];
    search?: string;
  }
): OSSRepo[] {
  return repos.filter(repo => {
    if (filters.types?.length && !filters.types.includes(repo.type)) return false;
    if (filters.categories?.length && !filters.categories.some(c => repo.categories.includes(c))) return false;
    if (filters.languages?.length && !filters.languages.some(l => repo.languages.includes(l))) return false;
    if (filters.useCases?.length && !filters.useCases.some(u => repo.useCases.includes(u))) return false;
    if (filters.maturity?.length && !filters.maturity.includes(repo.maturity)) return false;
    if (filters.deployment?.length && !filters.deployment.some(d => repo.deployment.includes(d))) return false;
    if (filters.search) {
      const search = filters.search.toLowerCase();
      return (
        repo.name.toLowerCase().includes(search) ||
        repo.description.toLowerCase().includes(search) ||
        repo.slug.toLowerCase().includes(search)
      );
    }
    return true;
  });
}
