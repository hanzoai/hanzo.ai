
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@hanzo/ui";

interface UseCaseCardProps {
  title: string;
  description: string;
  image?: string;
  color: string;
  index: number;
}

const UseCaseCard = ({ title, description, image, color, index }: UseCaseCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-gray-800 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex flex-col h-full`}>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className={`text-2xl font-bold mb-4 text-${color}-400`}>{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="link" size="sm" className="text-foreground/60 hover:text-foreground/60 p-0 w-fit">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <div className="w-full md:w-1/2 bg-gray-900/50 h-48 md:h-auto relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/20 to-transparent opacity-50`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-${color}-400 text-9xl opacity-10 font-bold`}>{index + 1}</div>
        </div>
      </div>
    </div>
  );
};

const UseCases = () => {
  const useCases = [
    {
      title: "Direct-to-Consumer (DTC) Brands",
      description: "Create unique shopping experiences that reflect your brand identity with custom storefronts powered by our API-first platform.",
      color: "amber"
    },
    {
      title: "Multi-channel Retailers",
      description: "Sell seamlessly across web, mobile, social media, and marketplaces with a unified backend for inventory and orders.",
      color: "amber"
    },
    {
      title: "Subscription Businesses",
      description: "Build flexible subscription models with automated recurring billing, customizable frequencies, and easy customer management.",
      color: "amber"
    },
    {
      title: "Enterprise B2B Commerce",
      description: "Power complex B2B sales with account-based pricing, bulk ordering, approval workflows, and personalized catalogs.",
      color: "amber"
    }
  ];

  return (
    <section className="py-16 bg-[var(--black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Use Cases</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            See how businesses leverage Hanzo Commerce to create exceptional shopping experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              color={useCase.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
