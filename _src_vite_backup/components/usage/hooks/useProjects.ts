
import { useState } from "react";
import { Project } from "../models/project";

export const useProjects = () => {
  // Mock data for projects
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "efficient-appreciation",
      currentCost: "$0.0279",
      estimatedCost: "$0.08",
      expanded: false,
      resources: {
        cpu: {
          usage: 20,
          value: "0.1 vCPU",
          maxValue: "0.5 vCPU"
        },
        memory: {
          usage: 50,
          value: "250 MB",
          maxValue: "500 MB"
        },
        network: {
          usage: 10,
          value: "10 MB",
          maxValue: "100 MB"
        },
        storage: {
          usage: 30,
          value: "150 MB",
          maxValue: "500 MB"
        }
      },
      costs: [
        {
          name: "Memory",
          usage: "116.14 minutely GB",
          rate: "$0.00000231 / GB / Minute",
          cost: "$0.0269"
        },
        {
          name: "CPU",
          usage: "1.02 minutely vCPU",
          rate: "$0.0000463 / vCPU / Minute",
          cost: "$0.0005"
        },
        {
          name: "Egress",
          usage: "0.00 total GB",
          rate: "$0.10 / GB",
          cost: "$0.0000"
        },
        {
          name: "Volume",
          usage: "102.51 minutely GB",
          rate: "$0.00000579 / GB / Minute",
          cost: "$0.0006"
        }
      ]
    },
    {
      id: "2",
      name: "cooperative-intuition",
      currentCost: "$0.0121",
      estimatedCost: "$0.03",
      expanded: false,
      resources: {
        cpu: {
          usage: 15,
          value: "0.1 vCPU",
          maxValue: "0.5 vCPU"
        },
        memory: {
          usage: 40,
          value: "200 MB",
          maxValue: "500 MB"
        },
        network: {
          usage: 5,
          value: "5 MB",
          maxValue: "100 MB"
        },
        storage: {
          usage: 20,
          value: "100 MB",
          maxValue: "500 MB"
        }
      },
      costs: [
        {
          name: "Memory",
          usage: "56.24 minutely GB",
          rate: "$0.00000231 / GB / Minute",
          cost: "$0.0110"
        },
        {
          name: "CPU",
          usage: "0.56 minutely vCPU",
          rate: "$0.0000463 / vCPU / Minute",
          cost: "$0.0003"
        },
        {
          name: "Egress",
          usage: "0.00 total GB",
          rate: "$0.10 / GB",
          cost: "$0.0000"
        },
        {
          name: "Volume",
          usage: "42.31 minutely GB",
          rate: "$0.00000579 / GB / Minute",
          cost: "$0.0002"
        }
      ]
    }
  ]);

  const toggleExpand = (projectId: string) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === projectId
          ? { ...project, expanded: !project.expanded }
          : project
      )
    );
  };

  return {
    projects,
    toggleExpand
  };
};
