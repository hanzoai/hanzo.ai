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
    stars: '18k+'
  },
  librechat: {
    name: 'LibreChat',
    description: 'Enhanced ChatGPT Clone with multi-model support, plugins, and advanced features.',
    url: 'https://librechat.ai',
    github: 'https://github.com/danny-avila/LibreChat',
    license: 'MIT',
    stars: '20k+'
  },
  langflow: {
    name: 'Langflow',
    description: 'Visual framework for building AI workflows. Drag-and-drop LLM app builder.',
    url: 'https://langflow.org',
    github: 'https://github.com/langflow-ai/langflow',
    license: 'MIT',
    stars: '35k+'
  },
  comfyui: {
    name: 'ComfyUI',
    description: 'The most powerful and modular stable diffusion GUI and backend.',
    url: 'https://www.comfy.org',
    github: 'https://github.com/comfyanonymous/ComfyUI',
    license: 'GPL-3.0',
    stars: '60k+'
  },
  langfuse: {
    name: 'Langfuse',
    description: 'Open source LLM engineering platform. Traces, evals, prompt management, and metrics.',
    url: 'https://langfuse.com',
    github: 'https://github.com/langfuse/langfuse',
    license: 'MIT',
    stars: '8k+'
  },
  anthropic_computer_use: {
    name: 'Anthropic Computer Use',
    description: 'Reference implementation for Claude computer use capabilities.',
    url: 'https://docs.anthropic.com/en/docs/agents-and-tools/computer-use',
    github: 'https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo',
    license: 'MIT',
    stars: '5k+'
  },

  // Automation & Workflows
  activepieces: {
    name: 'Activepieces',
    description: 'Open source Zapier alternative. Automate without limits with 200+ integrations.',
    url: 'https://activepieces.com',
    github: 'https://github.com/activepieces/activepieces',
    license: 'MIT',
    stars: '10k+'
  },
  temporal: {
    name: 'Temporal',
    description: 'Durable execution platform for mission-critical code. Never lose work to failures.',
    url: 'https://temporal.io',
    github: 'https://github.com/temporalio/temporal',
    license: 'MIT',
    stars: '12k+'
  },
  bullmq: {
    name: 'BullMQ',
    description: 'Premium message queue for Node.js based on Redis. Fast, reliable, and feature-rich.',
    url: 'https://bullmq.io',
    github: 'https://github.com/taskforcesh/bullmq',
    license: 'MIT',
    stars: '6k+'
  },

  // Analytics & Growth
  'hanzo-insights': {
    name: 'Hanzo Insights',
    description: 'Product analytics, session recordings, feature flags, A/B testing, and more.',
    url: 'https://insights.hanzo.ai',
    github: 'https://github.com/hanzoai/insights',
    license: 'MIT',
    stars: '22k+'
  },
  umami: {
    name: 'Umami',
    description: 'Privacy-focused website analytics. GDPR compliant, no cookies, lightweight.',
    url: 'https://umami.is',
    github: 'https://github.com/umami-software/umami',
    license: 'MIT',
    stars: '23k+'
  },
  growthbook: {
    name: 'GrowthBook',
    description: 'Feature flags and A/B testing platform built for teams.',
    url: 'https://growthbook.io',
    github: 'https://github.com/growthbook/growthbook',
    license: 'MIT',
    stars: '6k+'
  },
  dittofeed: {
    name: 'Dittofeed',
    description: 'Open source customer engagement platform. Lifecycle messaging for modern teams.',
    url: 'https://dittofeed.com',
    github: 'https://github.com/dittofeed/dittofeed',
    license: 'MIT',
    stars: '2k+'
  },

  // CX & Business
  chatwoot: {
    name: 'Chatwoot',
    description: 'Open source customer engagement suite. Omnichannel support inbox for modern teams.',
    url: 'https://chatwoot.com',
    github: 'https://github.com/chatwoot/chatwoot',
    license: 'MIT',
    stars: '21k+'
  },
  twenty: {
    name: 'Twenty',
    description: 'Modern open source CRM. Beautifully designed alternative to Salesforce.',
    url: 'https://twenty.com',
    github: 'https://github.com/twentyhq/twenty',
    license: 'AGPL-3.0',
    stars: '24k+'
  },
  erpnext: {
    name: 'ERPNext',
    description: 'Free and open source ERP. Complete business management solution.',
    url: 'https://erpnext.com',
    github: 'https://github.com/frappe/erpnext',
    license: 'GPL-3.0',
    stars: '21k+'
  },

  // Search & Data
  meilisearch: {
    name: 'Meilisearch',
    description: 'Lightning fast search engine. Typo-tolerant, relevant, and easy to use.',
    url: 'https://meilisearch.com',
    github: 'https://github.com/meilisearch/meilisearch',
    license: 'MIT',
    stars: '48k+'
  },

  // ML Frameworks
  candle: {
    name: 'Candle',
    description: 'Minimalist ML framework for Rust with focus on performance and simplicity.',
    url: 'https://huggingface.github.io/candle',
    github: 'https://github.com/huggingface/candle',
    license: 'MIT/Apache-2.0',
    stars: '16k+'
  },
  vllm: {
    name: 'vLLM',
    description: 'High-throughput and memory-efficient inference engine for LLMs.',
    url: 'https://vllm.ai',
    github: 'https://github.com/vllm-project/vllm',
    license: 'Apache-2.0',
    stars: '32k+'
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
    model="gpt-4o",  # or claude-3-5-sonnet, gemini-pro, etc.
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
  model: 'gpt-4o',
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
    "model": "gpt-4o",
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
    model="gpt-4o"
)

writer = Agent(
    name="Writer",
    instructions="You write clear, engaging content.",
    model="claude-3-5-sonnet"
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
