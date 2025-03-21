
// Model categories and their respective models
const modelCategories = [
  {
    name: "Foundation Models",
    description: "Industry-leading large language models for various use cases",
    models: [
      { name: "GPT-4o", provider: "Open Source", features: ["Multimodal capabilities", "Advanced reasoning", "High accuracy", "Fast performance"] },
      { name: "Claude 3 Opus", provider: "Open Source", features: ["Best reasoning", "Strong knowledge retrieval", "Long context window", "Low hallucination rate"] },
      { name: "Llama 3 70B", provider: "Open Source", features: ["Strong multilingual support", "Open weights", "Fast inference", "Cost-effective"] },
      { name: "Gemini Pro", provider: "Open Source", features: ["Multimodal reasoning", "Good tool use", "State-of-the-art performance", "Works in many languages"] },
      { name: "Mixtral 8x7B", provider: "Open Source", features: ["Mixture of experts", "Good performance-to-cost ratio", "Open weights", "Efficient context handling"] },
      { name: "Phi-3", provider: "Open Source", features: ["Compact yet powerful", "Fast inference speeds", "Excellent performance per parameter", "Low resource requirements"] },
    ]
  },
  {
    name: "Specialized Models",
    description: "Domain-specific models optimized for particular tasks",
    models: [
      { name: "CodeLlama", provider: "Open Source", features: ["Code generation", "Code completion", "Documentation", "Multi-language support"] },
      { name: "DALL-E 3", provider: "Open Source", features: ["Image generation", "High fidelity", "Text-to-image", "Creative outputs"] },
      { name: "Whisper", provider: "Open Source", features: ["Speech-to-text", "Multi-language ASR", "Low error rate", "Robust to background noise"] },
      { name: "Stable Diffusion XL", provider: "Open Source", features: ["High resolution images", "Open weights", "Multiple styles", "Fast generation"] },
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
