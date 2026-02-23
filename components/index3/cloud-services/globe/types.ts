
export type TrafficConnection = {
  id: string;
  sourceId: string;
  targetId: string;
  progress: number;
  speed: number;
  color: string;
  size: number;
};

export type ConnectionPoint = {
  id?: string;
  x: number;
  y: number;
  active: boolean;
  size?: number; // For city lights of varying sizes
  intensity?: number; // For pulsing effect
  connections?: TrafficConnection[]; // For traffic between points
};

export type GeoCoordinate = {
  lat: number;
  lon: number;
  name?: string;
  size?: number;
};

export type CanvasContextProps = {
  connectionPoints: ConnectionPoint[];
  setConnectionPoints: React.Dispatch<React.SetStateAction<ConnectionPoint[]>>;
  globeRadius: number;
  centerX: number;
  centerY: number;
  setCanvasContext: (ctx: CanvasRenderingContext2D) => void;
  drawGlobe: () => void;
  generateConnectionPoints: (width: number, height: number) => void;
};
