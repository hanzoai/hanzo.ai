
export interface OperatorModel {
  name: string;
  provider: string;
  features: string[];
  recommended: boolean;
  command: string;
}

export const operatorModels: OperatorModel[] = [
  {
    name: "GPT-4o",
    provider: "OpenAI",
    features: ["Highest accuracy", "Fast response time", "Best for complex tasks", "Excellent UI understanding"],
    recommended: true,
    command: "operative"
  },
  {
    name: "Claude 3",
    provider: "Anthropic",
    features: ["Strong screen analysis", "Detailed reasoning", "Long context window", "Good UI navigation"],
    recommended: false,
    command: "operative -m claude-3"
  },
  {
    name: "Gemini Pro Vision",
    provider: "Google",
    features: ["Good general performance", "Robust screen analysis", "Accessible API", "Improving rapidly"],
    recommended: false,
    command: "operative -m gemini-pro-vision"
  },
  {
    name: "Qwen-VL",
    provider: "Alibaba Cloud",
    features: ["Strong visual capabilities", "Growing feature set", "Good for basic tasks", "Alternative API option"],
    recommended: false,
    command: "operative -m qwen-vl"
  },
  {
    name: "LLaVA",
    provider: "Ollama (Local)",
    features: ["Runs locally", "No API costs", "Privacy-focused", "Basic capabilities"],
    recommended: false,
    command: "operative -m llava"
  },
  {
    name: "o1-with-ocr",
    provider: "OpenAI (Experimental)",
    features: ["Advanced OCR", "Element detection", "Highest precision", "Best for complex UIs"],
    recommended: false,
    command: "operative -m o1-with-ocr"
  }
];
