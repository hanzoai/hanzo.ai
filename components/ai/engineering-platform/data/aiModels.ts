
export interface AIModel {
  id: string;
  name: string;
  type: string;
  provider: string;
  accuracy: number;
  latency: number;
}

export const aiModels: AIModel[] = [
  { id: "zen4", name: "zen4", type: "LLM", provider: "Hanzo", accuracy: 96, latency: 85 },
  { id: "gpt4", name: "GPT-4o", type: "LLM", provider: "OpenAI", accuracy: 97, latency: 120 },
  { id: "claude3", name: "Claude 3", type: "LLM", provider: "Anthropic", accuracy: 96, latency: 140 },
  { id: "gemini", name: "Gemini", type: "LLM", provider: "Google", accuracy: 95, latency: 110 },
  { id: "qwen3", name: "Qwen3", type: "LLM", provider: "Qwen", accuracy: 94, latency: 80 },
  { id: "mixtral", name: "Mixtral", type: "LLM", provider: "Mistral", accuracy: 93, latency: 85 },
  { id: "llama3", name: "Llama 3", type: "LLM", provider: "Meta", accuracy: 94, latency: 90 },
  { id: "deepseek", name: "DeepSeek V3", type: "LLM", provider: "DeepSeek", accuracy: 95, latency: 75 },
  { id: "stability", name: "Stable Diffusion", type: "Image", provider: "Stability AI", accuracy: 92, latency: 200 },
  { id: "cohere", name: "Cohere Command", type: "LLM", provider: "Cohere", accuracy: 91, latency: 95 },
];
