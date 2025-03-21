
import React from 'react';
import ChromeText from "@/components/ui/chrome-text";

const UseCaseCard = ({ title, description, features }) => {
  return (
    <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      <ul className="space-y-2 text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MachinesUseCases = () => {
  const useCases = [
    {
      title: "ML Training",
      description: "Train large-scale AI models with high-performance GPU clusters and optimized ML frameworks.",
      features: [
        "Multi-GPU instances with NVLink",
        "Distributed training across multiple machines",
        "Pre-installed PyTorch, TensorFlow, and JAX"
      ]
    },
    {
      title: "Inference Optimization",
      description: "Deploy models for inference with optimized runtime configurations.",
      features: [
        "GPU-accelerated inference endpoints",
        "Automatic model quantization and optimization",
        "Horizontal scaling for high-throughput demands"
      ]
    },
    {
      title: "High-Performance Computing",
      description: "Run scientific simulations, financial modeling, and other compute-intensive workloads.",
      features: [
        "High core-count CPU machines",
        "MPI and other HPC frameworks pre-installed",
        "Bare metal performance with containerized convenience"
      ]
    },
    {
      title: "Large Language Models",
      description: "Run and fine-tune frontier Large Language Models with optimized environments.",
      features: [
        "Optimized for LLaMA, Falcon, and other open LLMs",
        "LoRA and QLoRA fine-tuning support",
        "Seamless integration with Hanzo AI endpoints"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl font-bold mb-4">
            Designed for AI Workloads
          </ChromeText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimized infrastructure for every stage of machine learning and AI development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              features={useCase.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachinesUseCases;
