
import React from "react";
import CloudServiceCard from "./CloudServiceCard";
import { cloudServiceData } from "./cloudServiceData";
import Link from "next/link";
import { Button } from "@hanzo/ui";
import { ArchitecturalBox, GridLines } from "@/components/ui/architectural-elements";

interface CloudServiceGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const CloudServiceGrid: React.FC<CloudServiceGridProps> = ({ isHovered, setIsHovered }) => {
  // Get all but the last item for regular display
  const mainServices = cloudServiceData.slice(0, 11);
  
  return (
    <div className="space-y-8 relative">
      {/* Add architectural grid lines */}
      <div className="absolute inset-0 -z-10">
        <GridLines spacing={60} opacity={0.15} color="rgba(59, 130, 246, 0.2)" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {/* Regular service cards */}
        {mainServices.map((service) => (
          <CloudServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            icon={service.icon}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            color={service.color}
          />
        ))}
        
        {/* Special "Learn More" card as the last item */}
        <Link
          href="/cloud"
          className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/30 transition-all duration-300 h-full flex flex-col justify-center items-center"
          onMouseEnter={() => setIsHovered("learn-more")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-[#ffffff]/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)]">Explore More</h3>
            <p className="text-neutral-300 text-sm">Discover our full range of cloud solutions and services</p>
            <Button 
              className="mt-2 bg-[#ffffff] hover:bg-[#cccccc] text-[var(--white)] border-none"
              radius="full"
            >
              View All Services
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CloudServiceGrid;
