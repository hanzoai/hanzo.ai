'use client'


import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "./models/project";
import ResourceUsageSection from "./ResourceUsageSection";
import ProjectCostSection from "./ProjectCostSection";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

interface ProjectCardProps {
  project: Project;
  onToggleExpand: (projectId: string) => void;
}

const ProjectCard = ({ project, onToggleExpand }: ProjectCardProps) => {
  return (
    <motion.div 
      variants={cardAnimation}
      className="rounded-xl border border-gray-800 bg-gray-900/20 overflow-hidden"
    >
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-800/30"
        onClick={() => onToggleExpand(project.id)}
      >
        <div className="flex items-center gap-4">
          {project.expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
          <span className="font-medium">{project.name}</span>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <div className="text-sm text-muted-foreground">Current Cost</div>
            <div className="font-medium">{project.currentCost}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Estimated</div>
            <div className="font-medium">{project.estimatedCost}</div>
          </div>
        </div>
      </div>
      
      {project.expanded && (
        <div className="p-6 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ResourceUsageSection resources={project.resources} />
            <ProjectCostSection costs={project.costs} currentCost={project.currentCost} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
