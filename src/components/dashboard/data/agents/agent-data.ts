
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
}

export const DummyAgentData: Agent[] = [
  {
    id: "a1",
    name: "ResearchGPT",
    status: "running",
    type: "Research",
    model: "GPT-4o",
    tasks: 2,
    tokens: 127430,
    cost: 6.37,
    lastActive: "2 minutes ago",
    memory: 65
  },
  {
    id: "a2",
    name: "CodeAssistant",
    status: "idle",
    type: "Coding",
    model: "Claude 3 Opus",
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
    model: "GPT-4o",
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
    model: "Claude 3 Sonnet",
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
    model: "GPT-4o",
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
    model: "Claude 3 Haiku",
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
    model: "GPT-4o",
    tasks: 0,
    tokens: 67820,
    cost: 3.39,
    lastActive: "1 day ago",
    memory: 22
  }
];
