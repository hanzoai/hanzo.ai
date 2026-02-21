// Frontier AI model families from Hanzo
const modelCategories = [
  {
    name: "Hanzo Zen Models",
    description: "14 foundation models across language, code, vision, multimodal, and specialized tasks",
    models: [
      {
        name: "Zen4 -- Flagship",
        provider: "Hanzo",
        features: ["~400B Dense Transformer (GLM-5)", "202K context window", "Ultra Max tier", "$3 / $9.60 per MTok"],
        description: "Flagship model built on GLM-5. Optimal for complex reasoning and multi-domain tasks."
      },
      {
        name: "Zen4 Ultra -- Maximum Reasoning",
        provider: "Hanzo",
        features: ["~400B Dense + CoT (GLM-5 thinking)", "202K context window", "Ultra Max tier", "Deep reasoning with chain-of-thought"],
        description: "Maximum reasoning capability with extended thinking for complex problems."
      },
      {
        name: "Zen4 Pro -- High Capability",
        provider: "Hanzo",
        features: ["80B MoE (3B active) via Qwen3-Next-80B-A3B", "131K context window", "Ultra tier", "Efficient MoE architecture"],
        description: "High-capability model with efficient MoE architecture for demanding workloads."
      },
      {
        name: "Zen4 Max -- Extended Context",
        provider: "Hanzo",
        features: ["235B MoE (22B active) via Qwen3-235B-A22B", "131K context window", "Ultra tier", "Large-scale MoE"],
        description: "Extended context MoE model for large document processing and analysis."
      },
      {
        name: "Zen4 Coder -- Code Generation",
        provider: "Hanzo",
        features: ["480B MoE (35B active) via Qwen3-Coder-480B-A35B", "262K context window", "Ultra tier", "Code generation and review"],
        description: "Code-specialized model for generation, review, and debugging."
      },
      {
        name: "Zen4 Coder Pro -- Premium Code",
        provider: "Hanzo",
        features: ["480B BF16 via Qwen3-Coder-480B", "262K context window", "Ultra Max tier", "Full-precision code analysis"],
        description: "Full-precision code model for maximum accuracy on complex codebases."
      },
      {
        name: "Zen4 Coder Flash -- Fast Code",
        provider: "Hanzo",
        features: ["30B MoE (3B active) via Qwen3-Coder-30B-A3B", "262K context window", "Pro Max tier", "Fast inline completions"],
        description: "Lightweight code model optimized for speed and inline completions."
      },
      {
        name: "Zen4 Thinking -- Deep Reasoning",
        provider: "Hanzo",
        features: ["80B MoE (3B active) via Qwen3-Next-80B-A3B (thinking)", "131K context window", "Pro Max tier", "Chain-of-thought"],
        description: "Dedicated reasoning model with explicit chain-of-thought capabilities."
      },
      {
        name: "Zen4 Mini -- Fast & Efficient",
        provider: "Hanzo",
        features: ["8B Dense Transformer via Qwen3-8B", "40K context window", "Pro tier", "Ultra-fast inference"],
        description: "Lightweight model optimized for speed and cost efficiency."
      },
      {
        name: "Zen3 Omni -- Hypermodal",
        provider: "Hanzo",
        features: ["~200B Dense Multimodal via GLM-4.7", "202K context window", "Pro Max tier", "Text, vision, and audio"],
        description: "Multimodal model supporting text, vision, and structured output."
      },
      {
        name: "Zen3 VL -- Vision-Language",
        provider: "Hanzo",
        features: ["30B MoE (3B active) via Qwen3-VL-30B-A3B", "131K context window", "Pro Max tier", "Image understanding"],
        description: "Vision-language model for image understanding and visual reasoning."
      },
      {
        name: "Zen3 Nano -- Edge",
        provider: "Hanzo",
        features: ["4B Dense Transformer via Qwen3-4B", "40K context window", "Pro tier", "Edge deployment"],
        description: "Ultra-lightweight model for edge deployment and low-latency tasks."
      },
      {
        name: "Zen3 Guard -- Content Safety",
        provider: "Hanzo",
        features: ["4B Dense Transformer via Qwen3-4B", "40K context window", "Pro tier", "Content moderation"],
        description: "Content safety classifier for moderation and guardrails."
      },
      {
        name: "Zen3 Embedding -- Text Embeddings",
        provider: "Hanzo",
        features: ["text-embedding-3-large via OpenAI", "8K context window", "Pro Max tier", "3072 dimensions"],
        description: "High-quality text embeddings for search, clustering, and retrieval."
      },
    ]
  },
  {
    name: "Third-Party Models",
    description: "Industry-leading models available through the Hanzo API gateway",
    models: [
      { name: "Claude Opus 4.6", provider: "Anthropic", features: ["1M context window", "Most capable model", "Complex reasoning", "Extended thinking"] },
      { name: "Claude Sonnet 4.6", provider: "Anthropic", features: ["1M context window", "Best balance of speed and intelligence", "Strong coding", "Fast inference"] },
      { name: "GPT-5", provider: "OpenAI", features: ["400K context window", "Multimodal", "Advanced reasoning", "Tool use"] },
      { name: "GPT-5 Mini", provider: "OpenAI", features: ["400K context window", "Fast and affordable", "Good quality", "Low latency"] },
      { name: "Qwen3-235B", provider: "Alibaba", features: ["131K context window", "Open-weight MoE", "Strong multilingual", "Cost-effective"] },
      { name: "DeepSeek R1", provider: "DeepSeek", features: ["64K context window", "Reasoning model", "Chain-of-thought", "Math and code"] },
    ]
  },
  {
    name: "Custom Models",
    description: "Deploy and customize models to meet your specific needs",
    models: [
      { name: "Fine-tuned Models", provider: "Custom", features: ["Domain adaptation", "Company knowledge base", "Specialized tasks", "Improved performance"] },
      { name: "Hugging Face Models", provider: "Custom", features: ["Community models", "Thousands of options", "Specialized capabilities", "Open source"] },
      { name: "Custom Embedding Models", provider: "Custom", features: ["Domain-specific embeddings", "Custom similarity metrics", "Enhanced search", "Optimized retrieval"] },
    ]
  }
];

export default modelCategories;
