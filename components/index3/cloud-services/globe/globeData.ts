
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
  { lat: 37.7749, lon: -122.4194, name: "San Francisco", size: 3 },
  { lat: 39.9042, lon: 116.4074, name: "Beijing", size: 3 },
  { lat: 34.0522, lon: -118.2437, name: "Los Angeles", size: 3 },
  { lat: 41.9028, lon: 12.4964, name: "Rome", size: 2 },
  { lat: 52.5200, lon: 13.4050, name: "Berlin", size: 2 },
  { lat: -34.6037, lon: -58.3816, name: "Buenos Aires", size: 2 },
  { lat: 25.2048, lon: 55.2708, name: "Dubai", size: 3 },
  { lat: -6.2088, lon: 106.8456, name: "Jakarta", size: 2 },
  { lat: 30.0444, lon: 31.2357, name: "Cairo", size: 2 },
  { lat: 31.2304, lon: 121.4737, name: "Shanghai", size: 3 },
  { lat: 13.7563, lon: 100.5018, name: "Bangkok", size: 3 },
  { lat: 19.4326, lon: -99.1332, name: "Mexico City", size: 3 },
  { lat: 43.6532, lon: -79.3832, name: "Toronto", size: 3 },
  { lat: 59.3293, lon: 18.0686, name: "Stockholm", size: 2 },
  { lat: -26.2041, lon: 28.0473, name: "Johannesburg", size: 2 }
];

// Country and continent outlines for visualization (simplified)
export const continents: GeoCoordinate[][] = [
  // North America (more detailed outline)
  [
    { lat: 70, lon: -140 }, { lat: 75, lon: -95 }, { lat: 70, lon: -80 },
    { lat: 60, lon: -70 }, { lat: 50, lon: -60 }, { lat: 40, lon: -50 },
    { lat: 30, lon: -75 }, { lat: 25, lon: -85 }, { lat: 15, lon: -90 },
    { lat: 20, lon: -105 }, { lat: 30, lon: -115 }, { lat: 40, lon: -125 },
    { lat: 50, lon: -125 }, { lat: 60, lon: -140 }, { lat: 70, lon: -140 }
  ],
  
  // South America (more detailed outline)
  [
    { lat: 15, lon: -80 }, { lat: 10, lon: -75 }, { lat: 5, lon: -75 },
    { lat: 0, lon: -80 }, { lat: -5, lon: -80 }, { lat: -10, lon: -75 },
    { lat: -15, lon: -65 }, { lat: -20, lon: -60 }, { lat: -30, lon: -65 },
    { lat: -35, lon: -70 }, { lat: -50, lon: -75 }, { lat: -55, lon: -70 },
    { lat: -50, lon: -60 }, { lat: -40, lon: -55 }, { lat: -30, lon: -50 },
    { lat: -20, lon: -40 }, { lat: -10, lon: -40 }, { lat: 0, lon: -50 },
    { lat: 10, lon: -65 }, { lat: 15, lon: -80 }
  ],
  
  // Europe (more detailed outline)
  [
    { lat: 60, lon: -10 }, { lat: 60, lon: 0 }, { lat: 55, lon: 10 },
    { lat: 55, lon: 20 }, { lat: 50, lon: 30 }, { lat: 45, lon: 35 },
    { lat: 40, lon: 30 }, { lat: 35, lon: 25 }, { lat: 35, lon: 15 },
    { lat: 40, lon: 10 }, { lat: 45, lon: 0 }, { lat: 40, lon: -10 },
    { lat: 50, lon: -10 }, { lat: 60, lon: -10 }
  ],
  
  // Africa (more detailed outline)
  [
    { lat: 35, lon: -10 }, { lat: 30, lon: 0 }, { lat: 30, lon: 30 },
    { lat: 35, lon: 35 }, { lat: 30, lon: 40 }, { lat: 20, lon: 50 },
    { lat: 10, lon: 50 }, { lat: 0, lon: 45 }, { lat: -10, lon: 40 },
    { lat: -20, lon: 40 }, { lat: -30, lon: 30 }, { lat: -35, lon: 20 },
    { lat: -30, lon: 15 }, { lat: -30, lon: 0 }, { lat: -25, lon: -15 },
    { lat: -15, lon: -15 }, { lat: -5, lon: -10 }, { lat: 5, lon: -10 },
    { lat: 15, lon: -15 }, { lat: 25, lon: -15 }, { lat: 35, lon: -10 }
  ],
  
  // Asia (more detailed outline)
  [
    { lat: 70, lon: 30 }, { lat: 75, lon: 90 }, { lat: 70, lon: 135 },
    { lat: 65, lon: 170 }, { lat: 55, lon: 170 }, { lat: 50, lon: 140 },
    { lat: 45, lon: 145 }, { lat: 35, lon: 135 }, { lat: 25, lon: 125 },
    { lat: 15, lon: 110 }, { lat: 5, lon: 100 }, { lat: 0, lon: 95 },
    { lat: 5, lon: 80 }, { lat: 10, lon: 75 }, { lat: 15, lon: 75 },
    { lat: 20, lon: 60 }, { lat: 30, lon: 50 }, { lat: 40, lon: 45 },
    { lat: 50, lon: 40 }, { lat: 60, lon: 30 }, { lat: 70, lon: 30 }
  ],
  
  // Australia/Oceania (more detailed outline)
  [
    { lat: -10, lon: 110 }, { lat: -10, lon: 130 }, { lat: -15, lon: 145 },
    { lat: -20, lon: 150 }, { lat: -30, lon: 155 }, { lat: -35, lon: 150 },
    { lat: -40, lon: 145 }, { lat: -35, lon: 140 }, { lat: -35, lon: 135 },
    { lat: -30, lon: 125 }, { lat: -25, lon: 115 }, { lat: -20, lon: 110 },
    { lat: -10, lon: 110 }
  ],
  
  // Antarctica (simplified outline)
  [
    { lat: -60, lon: -180 }, { lat: -70, lon: -90 }, { lat: -70, lon: 0 },
    { lat: -70, lon: 90 }, { lat: -60, lon: 180 }, { lat: -60, lon: -180 }
  ]
];
