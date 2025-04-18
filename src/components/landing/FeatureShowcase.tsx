
import React from "react";
import { aiCloudItems, dxPlatformItems } from "../navigation/products-menu/product-data";
import MainSection from "./feature-showcase/MainSection";
import AICloudSection from "./feature-showcase/AICloudSection";
import DXPlatformSection from "./feature-showcase/DXPlatformSection";
import IndustriesSection from "./feature-showcase/IndustriesSection";
import ServiceCards from "./feature-showcase/ServiceCards";

const FeatureShowcase: React.FC = () => {
  // Take exactly 11 items from the aiCloudItems array
  const limitedCloudItems = aiCloudItems.slice(0, 11);
  
  // Take exactly 11 items from the dxPlatformItems array
  const limitedPlatformItems = dxPlatformItems.slice(0, 11);

  return (
    <MainSection>
      {/* AI Cloud Section */}
      <AICloudSection products={limitedCloudItems} />

      {/* DX Platform Section */}
      <DXPlatformSection products={limitedPlatformItems} />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Agency and Sensei Group Cards */}
      <ServiceCards />
    </MainSection>
  );
};

export default FeatureShowcase;
