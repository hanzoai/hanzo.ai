// Frontier AI model families from Hanzo
const modelCategories = [
  {
    name: "Frontier AI",
    description: "Hanzo's cutting-edge model families pushing the boundaries of AI capabilities",
    models: [
      { 
        name: "Zen Family", 
        provider: "Hanzo", 
        features: ["1T+ parameter MoE LLM", "Fused top language models", "Unmatched efficiency", "Peak performance"],
        description: "🪷 Hanzo's flagship large language model that combines multiple expert models for unprecedented capability."
      },
      { 
        name: "Sho Family", 
        provider: "Hanzo", 
        features: ["High-performance text diffusion", "Latency-aware generation", "Expert-guided semantic control", "Fluency and depth"],
        description: "🌀 Purpose-built for high-coherence generation with expert semantic control."
      },
      { 
        name: "Enso Family", 
        provider: "Hanzo", 
        features: ["Multimodal MUEN architecture", "Text, vision, and audio", "Diffusion-based intelligence", "Unified understanding"],
        description: "◯ Multimodal Mixture of Unbound Experts unifying understanding across modalities."
      },
      { 
        name: "Satori Family", 
        provider: "Hanzo", 
        features: ["Efficient video generation", "Latent space diffusion", "Temporal dynamics", "Frame coherence"],
        description: "🎥 Advanced video generation with explicit temporal modeling and reduced computational overhead."
      },
      { 
        name: "Mugen Family", 
        provider: "Hanzo", 
        features: ["Infinite context capability", "Unbounded sequence processing", "Memory-efficient architecture", "Continuous learning"],
        description: "∞ Breaking the boundaries of context length for truly unlimited AI reasoning."
      },
      { 
        name: "Koe Family", 
        provider: "Hanzo", 
        features: ["Advanced speech synthesis", "Multimodal voice generation", "Emotional expression", "Real-time processing"],
        description: "🗣️ Next-generation voice AI with human-like expressiveness and natural interaction."
      }
    ]
  },
  {
    name: "Foundation Models",
    description: "Industry-leading open-source models optimized for the Hanzo platform",
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