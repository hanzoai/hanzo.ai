import React from "react";
import { Button } from "@/components/ui/button";

const APIPricing = () => {
  const latestModels = [
    {
      name: "Zen1 Max",
      description: "Most intelligent model for complex tasks",
      features: ["200k context window", "50% discount with batch processing*"],
      pricing: {
        input: "$15 / MTok",
        promptCachingWrite: "$18.75 / MTok",
        promptCachingRead: "$1.50 / MTok",
        output: "$75 / MTok"
      }
    },
    {
      name: "Zen1",
      description: "Optimal balance of intelligence, cost, and speed",
      features: ["200k context window", "50% discount with batch processing*"],
      pricing: {
        input: "$3 / MTok",
        promptCachingWrite: "$3.75 / MTok",
        promptCachingRead: "$0.30 / MTok",
        output: "$15 / MTok"
      }
    },
    {
      name: "Sho1",
      description: "Fastest, most cost-effective diffusion LLM",
      features: ["200k context window", "50% discount with batch processing*"],
      pricing: {
        input: "$0.80 / MTok",
        promptCachingWrite: "$1 / MTok",
        promptCachingRead: "$0.08 / MTok",
        output: "$4 / MTok"
      }
    }
  ];

  const tools = [
    {
      name: "Web search",
      description: "Give Zen access to the latest information from the web",
      cost: "$10 / 1K searches*"
    },
    {
      name: "Code execution",
      description: "Run Python code in a sandboxed environment for advanced data analysis",
      details: "50 free hours of usage daily per organization",
      cost: "$0.05 per hour per container for additional usage"
    }
  ];

  const thirdPartyModels = [
    {
      name: "Claude Opus 3",
      features: ["200k context window", "50% discount with batch processing*"],
      pricing: {
        input: "$15 / MTok",
        promptCachingWrite: "$18.75 / MTok",
        promptCachingRead: "$1.50 / MTok",
        output: "$75 / MTok"
      }
    },
    {
      name: "Claude Sonnet 3.7",
      features: ["200k context window", "50% discount with batch processing*"],
      pricing: {
        input: "$3 / MTok",
        promptCachingWrite: "$3.75 / MTok",
        promptCachingRead: "$0.30 / MTok",
        output: "$15 / MTok"
      }
    }
  ];

  const ModelCard = ({ model, isThirdParty = false }) => (
    <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
      <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
      {model.description && (
        <p className="text-neutral-400 mb-4">{model.description}</p>
      )}
      
      {model.features && (
        <div className="mb-4">
          {model.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-neutral-400 mb-1">
              <span className="w-2 h-2 bg-neutral-400 rounded-full mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-neutral-500">Input</span>
          <div className="font-medium">{model.pricing.input}</div>
        </div>
        <div>
          <span className="text-neutral-500">Output</span>
          <div className="font-medium">{model.pricing.output}</div>
        </div>
        <div>
          <span className="text-neutral-500">Prompt caching write</span>
          <div className="font-medium">{model.pricing.promptCachingWrite}</div>
        </div>
        <div>
          <span className="text-neutral-500">Prompt caching read</span>
          <div className="font-medium">{model.pricing.promptCachingRead}</div>
        </div>
      </div>
    </div>
  );

  const ToolCard = ({ tool }) => (
    <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
      <p className="text-neutral-400 mb-4">{tool.description}</p>
      
      {tool.details && (
        <div className="flex items-center text-sm text-neutral-400 mb-3">
          <span className="w-2 h-2 bg-neutral-400 rounded-full mr-2"></span>
          {tool.details}
        </div>
      )}

      <div className="text-right">
        <span className="text-neutral-500">Cost</span>
        <div className="font-medium">{tool.cost}</div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto mb-16">
      {/* Latest Models Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Latest models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestModels.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
        
        <div className="text-sm text-neutral-500 mb-6">
          *Learn more about <a href="#" className="text-blue-400 hover:underline">batch processing</a>
        </div>
        
        <div className="text-sm text-neutral-500 mb-6">
          Customers can purchase prioritized API capacity with Priority Tier
        </div>
        
        <div className="text-sm text-neutral-500 mb-8">
          Prompt caching pricing is for our standard 5-minute TTL; <a href="#" className="text-blue-400 hover:underline">extended prompt caching</a> is available at an additional cost
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
            Start building
          </Button>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Explore pricing for tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
        
        <div className="text-sm text-neutral-500 mb-8">
          *Does not include input and output tokens required to process requests
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
            Start building
          </Button>
        </div>
      </div>

      {/* Third-party Models Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Explore third-party models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thirdPartyModels.map((model) => (
            <ModelCard key={model.name} model={model} isThirdParty={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default APIPricing;