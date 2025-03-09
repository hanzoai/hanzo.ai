
import { GeoCoordinate } from './types';

// Major city coordinates (simplified for visualization)
export const majorCities: GeoCoordinate[] = [
  { lat: 40.7128, lon: -74.0060, name: "New York", size: 4 },
  { lat: 51.5074, lon: -0.1278, name: "London", size: 4 },
  { lat: 35.6762, lon: 139.6503, name: "Tokyo", size: 4 },
  { lat: 22.3193, lon: 114.1694, name: "Hong Kong", size: 3 },
  { lat: 19.0760, lon: 72.8777, name: "Mumbai", size: 3 },
  { lat: -33.8688, lon: 151.2093, name: "Sydney", size: 3 },
  { lat: 1.3521, lon: 103.8198, name: "Singapore", size: 3 },
  { lat: 55.7558, lon: 37.6173, name: "Moscow", size: 3 },
  { lat: -23.5505, lon: -46.6333, name: "São Paulo", size: 3 },
  { lat: 48.8566, lon: 2.3522, name: "Paris", size: 3 },
  { lat: 37.7749, lon: -122.4194, name: "San Francisco", size: 2 },
  { lat: 39.9042, lon: 116.4074, name: "Beijing", size: 3 },
  { lat: 34.0522, lon: -118.2437, name: "Los Angeles", size: 3 },
  { lat: 41.9028, lon: 12.4964, name: "Rome", size: 2 },
  { lat: 52.5200, lon: 13.4050, name: "Berlin", size: 2 },
  { lat: -34.6037, lon: -58.3816, name: "Buenos Aires", size: 2 },
  { lat: 25.2048, lon: 55.2708, name: "Dubai", size: 3 },
  { lat: -6.2088, lon: 106.8456, name: "Jakarta", size: 2 },
  { lat: 30.0444, lon: 31.2357, name: "Cairo", size: 2 },
  { lat: 31.2304, lon: 121.4737, name: "Shanghai", size: 3 }
];

// Simplified continent outlines for visualization
export const continents: GeoCoordinate[][] = [
  // North America (simplified outline)
  [
    { lat: 60, lon: -130 }, { lat: 70, lon: -90 }, { lat: 50, lon: -60 },
    { lat: 30, lon: -80 }, { lat: 25, lon: -100 }, { lat: 35, lon: -120 },
    { lat: 60, lon: -130 }
  ],
  // South America (simplified outline)
  [
    { lat: 10, lon: -80 }, { lat: 0, lon: -60 }, { lat: -20, lon: -40 },
    { lat: -40, lon: -70 }, { lat: -20, lon: -80 }, { lat: 10, lon: -80 }
  ],
  // Europe (simplified outline)
  [
    { lat: 60, lon: -10 }, { lat: 70, lon: 30 }, { lat: 45, lon: 40 },
    { lat: 35, lon: 30 }, { lat: 35, lon: -10 }, { lat: 60, lon: -10 }
  ],
  // Africa (simplified outline)
  [
    { lat: 35, lon: -10 }, { lat: 35, lon: 50 }, { lat: 0, lon: 50 },
    { lat: -35, lon: 20 }, { lat: 0, lon: -10 }, { lat: 35, lon: -10 }
  ],
  // Asia (simplified outline)
  [
    { lat: 70, lon: 30 }, { lat: 70, lon: 180 }, { lat: 0, lon: 110 },
    { lat: 0, lon: 50 }, { lat: 45, lon: 40 }, { lat: 70, lon: 30 }
  ],
  // Australia (simplified outline)
  [
    { lat: -10, lon: 110 }, { lat: -10, lon: 155 }, { lat: -40, lon: 155 },
    { lat: -40, lon: 110 }, { lat: -10, lon: 110 }
  ]
];
