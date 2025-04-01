
import { LucideIcon } from "lucide-react";

export interface ProductItem {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  id?: string;
}
