
import { LucideIcon } from "lucide-react";

export interface ProductItem {
  name: string;
  icon: LucideIcon;
  description: string;
  link?: string;
  id?: string;
}
