/**
 * Upstream OSS Projects
 *
 * Maps Hanzo products to their upstream open source foundations.
 * Used for attribution, co-branding, and documentation links.
 */

export interface UpstreamProject {
  name: string;
  description: string;
  url: string;
  github: string;
  logo?: string;
  license: string;
  stars?: string;
  creator: string;
  creatorUrl?: string;
  gratitude: string;
  sbomPackages?: string[];
  revenueShareEligible: boolean;
}

export interface ProductSDK {
  language: string;
  name: string;
  package: string;
  registry: string;
  url: string;
  installCommand: string;
  docsUrl?: string;
}

export interface ProductCommunity {
  discord?: string;
  github: string;
  docs: string;
  discussions?: string;
  twitter?: string;
  slack?: string;
}

export interface CodeExample {
  language: string;
  label: string;
  code: string;
  description?: string;
}

// =============================================================================
// UPSTREAM OSS PROJECTS
// =============================================================================

export const upstreamProjects: Record<string, UpstreamProject> = {
  // AI & ML
  litellm: {
    name: 'LiteLLM',
    description: 'Call 100+ LLMs with a unified interface. The most popular LLM proxy with 18k+ GitHub stars.',
    url: 'https://litellm.ai',
    github: 'https://github.com/BerriAI/litellm',
    license: 'MIT',
    stars: '18k+',
    creator: 'BerriAI / Ishaan & Krrish',
    creatorUrl: 'https://github.com/BerriAI',
    gratitude: 'LiteLLM is the backbone of our AI Gateway — Ishaan and Krrish built the most elegant LLM proxy we\'ve ever seen.',
    sbomPackages: ['litellm'],
    revenueShareEligible: true,
  },
  librechat: {
    name: 'LibreChat',
    description: 'Enhanced ChatGPT Clone with multi-model support, plugins, and advanced features.',
    url: 'https://librechat.ai',
    github: 'https://github.com/danny-avila/LibreChat',
    license: 'MIT',
    stars: '20k+',
    creator: 'Danny Avila',
    creatorUrl: 'https://github.com/danny-avila',
    gratitude: 'Danny\'s vision for LibreChat gave us the foundation for Hanzo Chat — a truly open alternative to ChatGPT.',
    sbomPackages: ['librechat'],
    revenueShareEligible: true,
  },
  langflow: {
    name: 'Langflow',
    description: 'Visual framework for building AI workflows. Drag-and-drop LLM app builder.',
    url: 'https://langflow.org',
    github: 'https://github.com/langflow-ai/langflow',
    license: 'MIT',
    stars: '35k+',
    creator: 'Langflow AI / Gabriel Luiz',
    creatorUrl: 'https://github.com/langflow-ai',
    gratitude: 'Langflow\'s visual workflow approach transformed how we think about AI pipeline composition.',
    sbomPackages: ['langflow'],
    revenueShareEligible: true,
  },
  comfyui: {
    name: 'ComfyUI',
    description: 'The most powerful and modular stable diffusion GUI and backend.',
    url: 'https://www.comfy.org',
    github: 'https://github.com/comfyanonymous/ComfyUI',
    license: 'GPL-3.0',
    stars: '60k+',
    creator: 'comfyanonymous',
    creatorUrl: 'https://github.com/comfyanonymous',
    gratitude: 'ComfyUI\'s node-based architecture is the most powerful creative AI tool ever built. We\'re honored to build on it.',
    sbomPackages: ['comfyui'],
    revenueShareEligible: true,
  },
  langfuse: {
    name: 'Langfuse',
    description: 'Open source LLM engineering platform. Traces, evals, prompt management, and metrics.',
    url: 'https://langfuse.com',
    github: 'https://github.com/langfuse/langfuse',
    license: 'MIT',
    stars: '8k+',
    creator: 'Langfuse Team / Max & Marc',
    creatorUrl: 'https://github.com/langfuse',
    gratitude: 'Langfuse brought real observability to LLM applications. Essential infrastructure for anyone running AI at scale.',
    sbomPackages: ['langfuse'],
    revenueShareEligible: true,
  },
  anthropic_computer_use: {
    name: 'Anthropic Computer Use',
    description: 'Reference implementation for Claude computer use capabilities.',
    url: 'https://docs.anthropic.com/en/docs/agents-and-tools/computer-use',
    github: 'https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo',
    license: 'MIT',
    stars: '5k+',
    creator: 'Anthropic',
    creatorUrl: 'https://github.com/anthropics',
    gratitude: 'Anthropic\'s pioneering work on computer use capabilities opened an entirely new paradigm for AI agents.',
    sbomPackages: ['anthropic'],
    revenueShareEligible: true,
  },

  // Automation & Workflows
  activepieces: {
    name: 'Activepieces',
    description: 'Open source Zapier alternative. Automate without limits with 200+ integrations.',
    url: 'https://activepieces.com',
    github: 'https://github.com/activepieces/activepieces',
    license: 'MIT',
    stars: '10k+',
    creator: 'Activepieces Team',
    creatorUrl: 'https://github.com/activepieces',
    gratitude: 'Activepieces proved that workflow automation doesn\'t need to be a walled garden. Open, extensible, and beautiful.',
    sbomPackages: ['@activepieces/shared'],
    revenueShareEligible: true,
  },
  temporal: {
    name: 'Temporal',
    description: 'Durable execution platform for mission-critical code. Never lose work to failures.',
    url: 'https://temporal.io',
    github: 'https://github.com/temporalio/temporal',
    license: 'MIT',
    stars: '12k+',
    creator: 'Temporal Technologies / Maxim Fateev',
    creatorUrl: 'https://github.com/temporalio',
    gratitude: 'Temporal\'s durable execution model fundamentally changed how we think about reliability. Mission-critical code deserves nothing less.',
    sbomPackages: ['temporalio'],
    revenueShareEligible: true,
  },
  bullmq: {
    name: 'BullMQ',
    description: 'Premium message queue for Node.js based on Redis. Fast, reliable, and feature-rich.',
    url: 'https://bullmq.io',
    github: 'https://github.com/taskforcesh/bullmq',
    license: 'MIT',
    stars: '6k+',
    creator: 'Taskforce.sh / Manuel Astorga',
    creatorUrl: 'https://github.com/taskforcesh',
    gratitude: 'BullMQ is the most reliable message queue in the Node.js ecosystem. Simple, fast, and battle-tested.',
    sbomPackages: ['bullmq'],
    revenueShareEligible: true,
  },

  // Analytics & Growth
  'hanzo-insights': {
    name: 'Hanzo Insights',
    description: 'Product analytics, session recordings, feature flags, A/B testing, and more.',
    url: 'https://insights.hanzo.ai',
    github: 'https://github.com/hanzoai/insights',
    license: 'MIT',
    stars: '22k+',
    creator: 'Hanzo AI (PostHog fork)',
    creatorUrl: 'https://github.com/hanzoai',
    gratitude: 'Built on PostHog\'s incredible analytics foundation — James and Tim created the definitive open-source analytics platform.',
    sbomPackages: ['posthog-js'],
    revenueShareEligible: true,
  },
  umami: {
    name: 'Umami',
    description: 'Privacy-focused website analytics. GDPR compliant, no cookies, lightweight.',
    url: 'https://umami.is',
    github: 'https://github.com/umami-software/umami',
    license: 'MIT',
    stars: '23k+',
    creator: 'Mike Cao',
    creatorUrl: 'https://github.com/mikecao',
    gratitude: 'Mike proved you can have powerful analytics without surveillance. Privacy-first, lightweight, elegant.',
    sbomPackages: ['@umami/node'],
    revenueShareEligible: true,
  },
  growthbook: {
    name: 'GrowthBook',
    description: 'Feature flags and A/B testing platform built for teams.',
    url: 'https://growthbook.io',
    github: 'https://github.com/growthbook/growthbook',
    license: 'MIT',
    stars: '6k+',
    creator: 'GrowthBook / Jeremy Dorn',
    creatorUrl: 'https://github.com/growthbook',
    gratitude: 'GrowthBook brought proper Bayesian experimentation to everyone. No more guessing if features work.',
    sbomPackages: ['@growthbook/growthbook'],
    revenueShareEligible: true,
  },
  dittofeed: {
    name: 'Dittofeed',
    description: 'Open source customer engagement platform. Lifecycle messaging for modern teams.',
    url: 'https://dittofeed.com',
    github: 'https://github.com/dittofeed/dittofeed',
    license: 'MIT',
    stars: '2k+',
    creator: 'Dittofeed Team',
    creatorUrl: 'https://github.com/dittofeed',
    gratitude: 'Dittofeed is building the open-source Braze we all needed. Customer engagement without vendor lock-in.',
    sbomPackages: ['dittofeed'],
    revenueShareEligible: true,
  },

  // CX & Business
  chatwoot: {
    name: 'Chatwoot',
    description: 'Open source customer engagement suite. Omnichannel support inbox for modern teams.',
    url: 'https://chatwoot.com',
    github: 'https://github.com/chatwoot/chatwoot',
    license: 'MIT',
    stars: '21k+',
    creator: 'Chatwoot / Pranav Rajs & Sojan Jose',
    creatorUrl: 'https://github.com/chatwoot',
    gratitude: 'Chatwoot built the Intercom alternative the world deserved — open, omnichannel, and community-driven.',
    sbomPackages: ['@chatwoot/sdk'],
    revenueShareEligible: true,
  },
  twenty: {
    name: 'Twenty',
    description: 'Modern open source CRM. Beautifully designed alternative to Salesforce.',
    url: 'https://twenty.com',
    github: 'https://github.com/twentyhq/twenty',
    license: 'AGPL-3.0',
    stars: '24k+',
    creator: 'Twenty / Charles Bochet',
    creatorUrl: 'https://github.com/twentyhq',
    gratitude: 'Charles and the Twenty team are building the most beautiful CRM ever made. Salesforce, but actually enjoyable.',
    sbomPackages: ['twenty'],
    revenueShareEligible: true,
  },
  erpnext: {
    name: 'ERPNext',
    description: 'Free and open source ERP. Complete business management solution.',
    url: 'https://erpnext.com',
    github: 'https://github.com/frappe/erpnext',
    license: 'GPL-3.0',
    stars: '21k+',
    creator: 'Frappe / Rushabh Mehta',
    creatorUrl: 'https://github.com/frappe',
    gratitude: 'Rushabh\'s decade-long commitment to open-source ERP changed business software forever. ERPNext proves enterprise doesn\'t have to mean expensive.',
    sbomPackages: ['frappe', 'erpnext'],
    revenueShareEligible: true,
  },

  // Search & Data
  meilisearch: {
    name: 'Meilisearch',
    description: 'Lightning fast search engine. Typo-tolerant, relevant, and easy to use.',
    url: 'https://meilisearch.com',
    github: 'https://github.com/meilisearch/meilisearch',
    license: 'MIT',
    stars: '48k+',
    creator: 'Meili / Quentin de Quelen',
    creatorUrl: 'https://github.com/meilisearch',
    gratitude: 'Meilisearch made search fast, relevant, and delightfully simple. The Algolia alternative we always wanted.',
    sbomPackages: ['meilisearch'],
    revenueShareEligible: true,
  },

  // ML Frameworks
  candle: {
    name: 'Candle',
    description: 'Minimalist ML framework for Rust with focus on performance and simplicity.',
    url: 'https://huggingface.github.io/candle',
    github: 'https://github.com/huggingface/candle',
    license: 'MIT/Apache-2.0',
    stars: '16k+',
    creator: 'Hugging Face / Laurent Mazare',
    creatorUrl: 'https://github.com/huggingface',
    gratitude: 'Laurent\'s work on Candle brought ML to Rust with elegance. Minimalist, performant, and a joy to use.',
    sbomPackages: ['candle-core'],
    revenueShareEligible: true,
  },
  vllm: {
    name: 'vLLM',
    description: 'High-throughput and memory-efficient inference engine for LLMs.',
    url: 'https://vllm.ai',
    github: 'https://github.com/vllm-project/vllm',
    license: 'Apache-2.0',
    stars: '32k+',
    creator: 'vLLM Project / Woosuk Kwon',
    creatorUrl: 'https://github.com/vllm-project',
    gratitude: 'vLLM\'s PagedAttention revolutionized LLM serving. The single most important inference optimization of the generation.',
    sbomPackages: ['vllm'],
    revenueShareEligible: true,
  },
};

// =============================================================================
// PRODUCT TO UPSTREAM MAPPING
// =============================================================================

export const productUpstreamMap: Record<string, string> = {
  // Core AI products
  'gateway': 'litellm',
  'chat': 'librechat',
  'flow': 'langfuse',
  'auto': 'activepieces',
  'studio': 'comfyui',
  'console': 'langfuse',
  'operative': 'anthropic_computer_use',

  // Async & messaging
  'mq': 'bullmq',
  'tasks': 'temporal',

  // Growth & analytics
  'insights': 'hanzo-insights',
  'web-analytics': 'umami',
  'experiments': 'growthbook',
  'engage': 'dittofeed',

  // CX & business
  'cx': 'chatwoot',
  'crm': 'twenty',
  'erp': 'erpnext',

  // Data & search
  'search': 'meilisearch',

  // ML frameworks
  'serving': 'vllm',
};

// =============================================================================
// SDK CONFIGURATIONS
// =============================================================================

export const hanzoSDKs: ProductSDK[] = [
  {
    language: 'python',
    name: 'Hanzo Python SDK',
    package: 'hanzoai',
    registry: 'PyPI',
    url: 'https://pypi.org/project/hanzoai/',
    installCommand: 'pip install hanzoai',
    docsUrl: 'https://docs.hanzo.ai/sdk/python'
  },
  {
    language: 'typescript',
    name: 'Hanzo TypeScript SDK',
    package: '@hanzo/ai',
    registry: 'npm',
    url: 'https://www.npmjs.com/package/@hanzo/ai',
    installCommand: 'npm install @hanzo/ai',
    docsUrl: 'https://docs.hanzo.ai/sdk/typescript'
  },
  {
    language: 'go',
    name: 'Hanzo Go SDK',
    package: 'github.com/hanzoai/go-sdk',
    registry: 'Go Modules',
    url: 'https://pkg.go.dev/github.com/hanzoai/go-sdk',
    installCommand: 'go get github.com/hanzoai/go-sdk',
    docsUrl: 'https://docs.hanzo.ai/sdk/go'
  },
  {
    language: 'rust',
    name: 'Hanzo Rust SDK',
    package: 'hanzoai',
    registry: 'crates.io',
    url: 'https://crates.io/crates/hanzoai',
    installCommand: 'cargo add hanzoai',
    docsUrl: 'https://docs.hanzo.ai/sdk/rust'
  }
];

// =============================================================================
// CODE EXAMPLES BY PRODUCT
// =============================================================================

export const productCodeExamples: Record<string, CodeExample[]> = {
  gateway: [
    {
      language: 'python',
      label: 'Python',
      description: 'Use the OpenAI SDK with Hanzo Gateway',
      code: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.hanzo.ai/v1",
    api_key="your-hanzo-key"
)

response = client.chat.completions.create(
    model="gpt-5.3",  # or claude-sonnet-4-6, gemini-3.1-pro, etc.
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)`
    },
    {
      language: 'typescript',
      label: 'TypeScript',
      description: 'Use the OpenAI SDK with Hanzo Gateway',
      code: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.hanzo.ai/v1',
  apiKey: 'your-hanzo-key'
});

const response = await client.chat.completions.create({
  model: 'gpt-5.3',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);`
    },
    {
      language: 'curl',
      label: 'cURL',
      description: 'Direct API call to Hanzo Gateway',
      code: `curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-5.3",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
    }
  ],
  mcp: [
    {
      language: 'bash',
      label: 'CLI',
      description: 'Install and run Hanzo MCP server',
      code: `# Install globally
npm install -g @hanzo/mcp

# Run with Claude Code
claude --mcp @hanzo/mcp

# Or configure in settings
echo '{"mcpServers": {"hanzo": {"command": "hanzo-mcp"}}}' > ~/.claude/mcp.json`
    },
    {
      language: 'typescript',
      label: 'TypeScript',
      description: 'Use MCP tools programmatically',
      code: `import { Client } from '@modelcontextprotocol/sdk/client';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio';

const transport = new StdioClientTransport({
  command: 'hanzo-mcp'
});

const client = new Client({ name: 'my-app' }, { capabilities: {} });
await client.connect(transport);

const tools = await client.listTools();
console.log(\`Available tools: \${tools.tools.length}\`);`
    }
  ],
  agent: [
    {
      language: 'python',
      label: 'Python',
      description: 'Create a multi-agent system',
      code: `from hanzoai import Agent, Swarm

# Define specialized agents
researcher = Agent(
    name="Researcher",
    instructions="You research topics thoroughly.",
    model="gpt-5.3"
)

writer = Agent(
    name="Writer",
    instructions="You write clear, engaging content.",
    model="claude-sonnet-4-6"
)

# Create swarm and run
swarm = Swarm()
result = swarm.run(
    agent=researcher,
    messages=[{"role": "user", "content": "Research AI trends"}],
    handoff_to=writer
)
print(result.messages[-1].content)`
    }
  ],
  chat: [
    {
      language: 'docker',
      label: 'Docker',
      description: 'Run Hanzo Chat with Docker Compose',
      code: `# docker-compose.yml
services:
  chat:
    image: ghcr.io/hanzoai/chat:latest
    ports:
      - "3081:3081"
    environment:
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - ANTHROPIC_API_KEY=\${ANTHROPIC_API_KEY}
    volumes:
      - ./data:/app/data

# Start
docker compose up -d`
    }
  ]
};

// =============================================================================
// COMMUNITY LINKS BY PRODUCT
// =============================================================================

export const productCommunityLinks: Record<string, ProductCommunity> = {
  default: {
    discord: 'https://discord.gg/hanzo',
    github: 'https://github.com/hanzoai',
    docs: 'https://docs.hanzo.ai',
    twitter: 'https://twitter.com/hanaboratory'
  }
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getUpstreamForProduct(productId: string): UpstreamProject | null {
  const upstreamKey = productUpstreamMap[productId];
  if (!upstreamKey) return null;
  return upstreamProjects[upstreamKey] || null;
}

export function getCodeExamplesForProduct(productId: string): CodeExample[] {
  return productCodeExamples[productId] || [];
}

export function getCommunityForProduct(productId: string): ProductCommunity {
  return productCommunityLinks[productId] || productCommunityLinks.default;
}

// =============================================================================
// SBOM REVENUE SHARING CONFIGURATION
// =============================================================================

export const sbomRevenueConfig = {
  sharePercentage: 25,
  payoutOptions: ['USD', 'Hanzo Network', 'AI Coin'] as const,
  supportedChains: ['Ethereum', 'Solana', 'Polygon', 'Base', 'Arbitrum'] as const,
  dashboardUrl: '/oss/dashboard',
  connectUrl: '/oss/connect',
  description: 'Hanzo dedicates 25% of all compute costs to open source contributors, distributed transparently based on verified SBOMs.',
};

export function getSBOMPackagesForProduct(productId: string): string[] {
  const upstreamKey = productUpstreamMap[productId];
  if (!upstreamKey) return [];
  const project = upstreamProjects[upstreamKey];
  return project?.sbomPackages || [];
}
