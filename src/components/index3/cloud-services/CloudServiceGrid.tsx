
import React from "react";
import CloudServiceCard from "./CloudServiceCard";
import { cloudServiceData } from "./cloudServiceData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CloudServiceGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const CloudServiceGrid: React.FC<CloudServiceGridProps> = ({ isHovered, setIsHovered }) => {
  // Get all but the last item for regular display
  const mainServices = cloudServiceData.slice(0, 11);
  
  return (
    <div className="space-y-8">
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
        <div 
          className="flex flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/20 h-full min-h-[240px] hover:border-blue-500/40 transition-all duration-300"
          onMouseEnter={() => setIsHovered("learn-more")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">Explore More</h3>
            <p className="text-gray-300 text-sm">Discover our full range of cloud solutions and services</p>
            <Button variant="outline" className="mt-4 bg-blue-950/50 text-white border-blue-500/30 hover:bg-blue-900/40">
              <Link to="/cloud">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServiceGrid;
