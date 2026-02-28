
// Agent data for the AgentsList component
export interface Agent {
  id: string;
  name: string;
  status: "idle" | "running" | "paused" | "error";
  type: string;
  model: string;
  tasks: number;
  tokens: number;
  cost: number;
  lastActive: string;
  memory: number;
  // Additional fields for agent details
  description?: string;
  ragSources?: {
    id: string;
    name: string;
    type: "database" | "vector" | "file" | "api";
    connection: string;
  }[];
  // Resource usage
  cpu?: number;
  gpu?: number;
  storage?: number;
  bandwidth?: number;
}

export const DummyAgentData: Agent[] = [
  {
    id: "a1",
    name: "ResearchGPT",
    status: "running",
    type: "Research",
    model: "GPT-5.3.3",
    tasks: 2,
    tokens: 127430,
    cost: 6.37,
    lastActive: "2 minutes ago",
    memory: 65,
    description: "Research assistant for gathering and synthesizing information from various sources.",
    ragSources: [
      { id: "rs1", name: "Research Database", type: "database", connection: "postgres://user:pass@host/db" },
      { id: "rs2", name: "Document Library", type: "vector", connection: "pinecone://index" }
    ],
    cpu: 35,
    gpu: 65,
    storage: 22,
    bandwidth: 14
  },
  {
    id: "a2",
    name: "CodeAssistant",
    status: "idle",
    type: "Coding",
    model: "Claude Opus",
    tasks: 0,
    tokens: 89320,
    cost: 4.47,
    lastActive: "3 hours ago",
    memory: 32
  },
  {
    id: "a3",
    name: "DataAnalyzer",
    status: "running",
    type: "Assistant",
    model: "GPT-5.3.3",
    tasks: 1,
    tokens: 54280,
    cost: 2.71,
    lastActive: "45 minutes ago",
    memory: 48
  },
  {
    id: "a4",
    name: "ContentWriter",
    status: "paused",
    type: "Assistant",
    model: "Claude Sonnet",
    tasks: 1,
    tokens: 104570,
    cost: 3.14,
    lastActive: "2 days ago",
    memory: 28
  },
  {
    id: "a5",
    name: "SQLHelper",
    status: "error",
    type: "Coding",
    model: "GPT-5.3.3",
    tasks: 0,
    tokens: 12850,
    cost: 0.64,
    lastActive: "5 hours ago",
    memory: 15
  },
  {
    id: "a6",
    name: "DocumentProcessor",
    status: "running",
    type: "Research",
    model: "Claude Haiku",
    tasks: 3,
    tokens: 203750,
    cost: 6.11,
    lastActive: "Just now",
    memory: 78
  },
  {
    id: "a7",
    name: "MarketingAssistant",
    status: "idle",
    type: "Assistant",
    model: "GPT-5.3.3",
    tasks: 0,
    tokens: 67820,
    cost: 3.39,
    lastActive: "1 day ago",
    memory: 22
  }
];
