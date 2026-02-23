
import { NodeType } from "../types";

// Initial cloud node configuration
export const initialNodes: NodeType[] = [
  {
    id: "cloud-1",
    type: "app",
    position: { x: 50, y: 50 },
    iconType: "cloud",
    iconProps: { className: "h-7 w-7 text-white/70" },
    label: "Hanzo Cloud",
    active: true,
    status: "deployed",
    statusMessage: "Cloud environment ready"
  }
];

// Deployment sequence timing configuration (in milliseconds)
export const sequenceTimings = {
  importGithub: 1000,
  deployGithub: 2500,
  createPrivateNetwork: 3000,
  createRedis: 4000,
  deployRedis: 5500,
  createRedisVolume: 6000,
  attachRedisVolume: 6500,
  createPostgres: 7500,
  deployPostgres: 9000,
  createPostgresVolume: 9500,
  attachPostgresVolume: 10000,
  createPublicNetwork: 11000,
  deployPublicNetwork: 12000
};
