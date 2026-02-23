
export interface Position {
  x: number;
  y: number;
}

export type IconType = 
  | "cloud" 
  | "database" 
  | "github" 
  | "server" 
  | "hardDrive" 
  | "boxes" 
  | "box" 
  | "network" 
  | "link2";

export interface NodeType {
  id: string;
  type: string;
  position: Position;
  iconType: IconType;
  iconProps: { className: string };
  label: string;
  active: boolean;
  status: "pending" | "deployed" | "error";
  statusMessage: string;
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
