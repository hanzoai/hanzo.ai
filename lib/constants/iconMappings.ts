
import {
  Globe,
  Shield,
  Brain,
  Code,
  Building2,
  Network,
  DollarSign,
  Wrench,
  Rocket,
  Factory,
  Building,
  Car,
  Newspaper,
  ShoppingCart,
  Laptop,
  Plane,
  Landmark,
  Heart,
  Leaf,
  GraduationCap,
  LineChart,
  Users
} from "lucide-react";

export const solutionIcons = {
  // Capabilities
  "Cloud": Globe,
  "Cybersecurity": Shield,
  "Data and Artificial Intelligence": Brain,
  "Digital Engineering and Manufacturing": Code,
  "Emerging Technology": Rocket,
  "Ecosystem Partners": Network,
  "Finance and Risk Management": DollarSign,
  "Infrastructure and Capital Projects": Building2,
  "Learning": GraduationCap,
  "Marketing and Experience": Newspaper,
  "Metaverse": LineChart,
  "Sales and Commerce": ShoppingCart,
  "Hanzo Works": Users,
  
  // Industries
  "Aerospace and Defense": Plane,
  "Automotive": Car,
  "Banking": Landmark,
  "Chemicals": Factory,
  "Communications and Media": Laptop,
  "Consumer Goods and Services": ShoppingCart,
  "Energy": Leaf,
  "Health": Heart,
  "High Tech": Rocket,
  "Industrial": Factory,
  "Insurance": Shield,
  "Life Sciences": Heart,
  "Natural Resources": Leaf,
  "Public Service": Building,
  "Private Equity": DollarSign,
  "Retail": ShoppingCart,
  "Software and Platforms": Code,
  "Travel": Plane,
  "US Federal Government": Building,
  "Utilities": Network,
  
  // Default
  "Technology": Wrench,
  "Infrastructure": Network,
} as const;

export const getIcon = (name: string) => {
  return solutionIcons[name as keyof typeof solutionIcons] || Globe;
};
