
// Task data
export const DummyTaskData = [
  {
    id: "101",
    title: "Research AI models for text summarization",
    description: "Compare different models and evaluate performance on our dataset",
    status: "backlog",
    priority: "medium",
    assignees: [
      { id: "u1", name: "Alex Chen" }
    ],
    labels: [
      { id: "l1", name: "Research", color: "#9E86ED" },
      { id: "l2", name: "AI", color: "#3E63DD" }
    ],
    agentCount: 2,
    messageCount: 5
  },
  {
    id: "102",
    title: "Implement code generation agent",
    status: "backlog",
    priority: "high",
    assignees: [
      { id: "u2", name: "Sarah Kim" }
    ],
    labels: [
      { id: "l3", name: "Development", color: "#3E63DD" },
      { id: "l4", name: "Agent", color: "#36B37E" }
    ],
    messageCount: 3
  },
  {
    id: "103",
    title: "Design new agent dashboard UI",
    status: "todo",
    assignees: [
      { id: "u3", name: "Miguel Rodriguez" }
    ],
    labels: [
      { id: "l5", name: "Design", color: "#FF8B00" }
    ]
  },
  {
    id: "104",
    title: "Optimize token usage for research agents",
    status: "todo",
    priority: "medium",
    assignees: [
      { id: "u4", name: "Priya Sharma" }
    ],
    labels: [
      { id: "l6", name: "Optimization", color: "#36B37E" }
    ],
    agentCount: 1
  },
  {
    id: "105",
    title: "Integrate with vector database",
    description: "Connect agent memory system with Pinecone for long-term storage",
    status: "in-progress",
    priority: "high",
    assignees: [
      { id: "u1", name: "Alex Chen" }
    ],
    labels: [
      { id: "l7", name: "Integration", color: "#3E63DD" },
      { id: "l8", name: "Database", color: "#FF8B00" }
    ],
    agentCount: 1,
    messageCount: 8,
    dueDate: "2023-07-15"
  },
  {
    id: "106",
    title: "Implement cost tracking system",
    status: "in-progress",
    assignees: [
      { id: "u5", name: "Jakub Nowak" }
    ],
    labels: [
      { id: "l9", name: "Analytics", color: "#36B37E" }
    ],
    messageCount: 2
  },
  {
    id: "107",
    title: "Create agent onboarding documentation",
    status: "done",
    assignees: [
      { id: "u6", name: "Emily Johnson" }
    ],
    labels: [
      { id: "l10", name: "Documentation", color: "#9E86ED" }
    ],
    messageCount: 4
  },
  {
    id: "108",
    title: "Deploy agent system to production",
    status: "done",
    priority: "high",
    assignees: [
      { id: "u2", name: "Sarah Kim" },
      { id: "u4", name: "Priya Sharma" }
    ],
    labels: [
      { id: "l11", name: "DevOps", color: "#FF8B00" }
    ],
    messageCount: 7,
    dueDate: "2023-07-01"
  }
];

// Agent data
export const DummyAgentData = [
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
