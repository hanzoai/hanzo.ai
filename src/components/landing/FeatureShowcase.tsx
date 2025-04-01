
import React from "react";
import MainSection from "./feature-showcase/MainSection";
import AICloudSection from "./feature-showcase/AICloudSection";
import DXPlatformSection from "./feature-showcase/DXPlatformSection";
import { Cloud, Database, Server } from "lucide-react";
import { ProductItem } from "../navigation/products-menu/types";

const mockProducts: ProductItem[] = [
  {
    name: "AI Cloud",
    description: "Infrastructure optimized for AI workloads",
    icon: Cloud,
    href: "/cloud"
  },
  {
    name: "Vector DB",
    description: "High-performance vector database",
    icon: Database,
    href: "/vector"
  },
  {
    name: "Platform",
    description: "Open source AI platform",
    icon: Server,
    href: "/platform"
  }
];

const FeatureShowcase: React.FC = () => {
  return (
    <MainSection>
      {/* AI Cloud Section */}
      <AICloudSection products={mockProducts} />

      {/* DX Platform Section */}
      <DXPlatformSection products={mockProducts} />
    </MainSection>
  );
};

export default FeatureShowcase;
