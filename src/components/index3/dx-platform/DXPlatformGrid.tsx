
import React from "react";
import DXPlatformCard from "./DXPlatformCard";
import { dxPlatformData } from "./dxPlatformData";

interface DXPlatformGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const DXPlatformGrid: React.FC<DXPlatformGridProps> = ({ isHovered, setIsHovered }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {dxPlatformData.map((platform) => (
          <DXPlatformCard
            key={platform.id}
            id={platform.id}
            title={platform.title}
            description={platform.description}
            features={platform.features}
            icon={platform.icon}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            color={platform.color}
          />
        ))}
      </div>
    </div>
  );
};

export default DXPlatformGrid;
