
export interface ResourceUsage {
  usage: number; // 0-100
  value: string;
  maxValue: string;
}

export interface ProjectResources {
  cpu: ResourceUsage;
  memory: ResourceUsage;
  network: ResourceUsage;
  storage: ResourceUsage;
}

export interface CostItem {
  name: string;
  usage: string;
  rate: string;
  cost: string;
}

export interface Project {
  id: string;
  name: string;
  currentCost: string;
  estimatedCost: string;
  expanded: boolean;
  resources: ProjectResources;
  costs: CostItem[];
}
