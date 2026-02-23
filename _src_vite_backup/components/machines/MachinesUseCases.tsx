
import React from 'react';
import ChromeText from "@/components/ui/chrome-text";

const BRAND_COLOR = "#fd4444";

interface UseCaseCardProps {
  title: string;
  description: string;
  features: string[];
}

const UseCaseCard = ({ title, description, features }: UseCaseCardProps) => {
  return (
    <div
      className="bg-card rounded-xl p-8"
      style={{ backgroundColor: `${BRAND_COLOR}08`, border: `1px solid ${BRAND_COLOR}30` }}
    >
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <ul className="space-y-2 text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2" style={{ color: BRAND_COLOR }}>•</span>
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
    <section
      className="py-20"
      style={{ background: `linear-gradient(to bottom, transparent, ${BRAND_COLOR}10)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl font-bold mb-4">
            Designed for AI Workloads
          </ChromeText>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
