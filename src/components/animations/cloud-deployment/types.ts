
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface NodeType {
  id: string;
  type: "app" | "database" | "github" | "volume" | "container" | "redis" | "postgres" | "network";
  position: { x: number; y: number };
  iconType: string;
  iconProps?: {
    className?: string;
    size?: number;
    color?: string;
  };
  label: string;
  active: boolean;
  status?: "deployed" | "pending" | "failed";
  statusMessage?: string;
}

export interface ConnectionType {
  id: string;
  source: string;
  target: string;
  active: boolean;
}

export interface NotificationType {
  id: string;
  title: string;
  message: string;
  type: "success" | "error" | "info";
  timestamp: Date;
}

export interface ScanPointType {
  x: number;
  y: number;
  active: boolean;
}
