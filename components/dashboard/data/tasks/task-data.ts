
// Task data for the Kanban board
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority?: "low" | "medium" | "high";
  assignees?: { id: string; name: string; avatar?: string }[];
  labels?: { id: string; name: string; color: string }[];
  agentCount?: number;
  messageCount?: number;
  dueDate?: string;
}

export const DummyTaskData: Task[] = [
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
      { id: "l1", name: "Research", color: "#a3a3a3" },
      { id: "l2", name: "AI", color: "#737373" }
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
      { id: "l3", name: "Development", color: "#737373" },
      { id: "l4", name: "Agent", color: "#d4d4d4" }
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
      { id: "l5", name: "Design", color: "#525252" }
    ]
  },
  {
    id: "104",
    title: "Optimize token usage for research agents",
    status: "todo",
    priority: "medium",
    assignees: [
      { id: "u4", name: "Dev Four" }
    ],
    labels: [
      { id: "l6", name: "Optimization", color: "#d4d4d4" }
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
      { id: "l7", name: "Integration", color: "#737373" },
      { id: "l8", name: "Database", color: "#525252" }
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
      { id: "l9", name: "Analytics", color: "#d4d4d4" }
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
      { id: "l10", name: "Documentation", color: "#a3a3a3" }
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
      { id: "u4", name: "Dev Four" }
    ],
    labels: [
      { id: "l11", name: "DevOps", color: "#525252" }
    ],
    messageCount: 7,
    dueDate: "2023-07-01"
  }
];
