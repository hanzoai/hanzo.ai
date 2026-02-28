
export interface OperatorModel {
  name: string;
  provider: string;
  features: string[];
  recommended: boolean;
  command: string;
}

export const operatorModels: OperatorModel[] = [
  {
    name: "GPT-5.3.3",
    provider: "OpenAI",
    features: ["Highest accuracy", "Fast response time", "Best for complex tasks", "Excellent UI understanding"],
    recommended: true,
    command: "operative"
  },
  {
    name: "Claude",
    provider: "Anthropic",
    features: ["Strong screen analysis", "Detailed reasoning", "Long context window", "Good UI navigation"],
    recommended: false,
    command: "operative -m claude"
  },
  {
    name: "Gemini 3.1 Pro",
    provider: "Google",
    features: ["Good general performance", "Reliable screen analysis", "Accessible API", "Improving rapidly"],
    recommended: false,
    command: "operative -m gemini-3.1-pro"
  },
  {
    name: "zen3-vl",
    provider: "Hanzo Cloud",
    features: ["Strong visual capabilities", "30B MoE architecture", "Good for basic tasks", "Native API support"],
    recommended: false,
    command: "operative -m zen3-vl"
  },
  {
    name: "LLaVA",
    provider: "Ollama (Local)",
    features: ["Runs locally", "No API costs", "Privacy-focused", "Basic capabilities"],
    recommended: false,
    command: "operative -m llava"
  },
  {
    name: "o3-with-ocr",
    provider: "OpenAI (Experimental)",
    features: ["Advanced OCR", "Element detection", "Highest precision", "Best for complex UIs"],
    recommended: false,
    command: "operative -m o3-with-ocr"
  }
];
