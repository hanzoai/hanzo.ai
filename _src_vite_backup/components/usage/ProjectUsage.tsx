
import React from "react";
import ProjectCard from "./ProjectCard";
import { useProjects } from "./hooks/useProjects";

const ProjectUsage = () => {
  const { projects, toggleExpand } = useProjects();

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onToggleExpand={toggleExpand} 
        />
      ))}
    </div>
  );
};

export default ProjectUsage;
