
import React from "react";
import { Cloud, Database, Github, Server, HardDrive, Boxes, Box, Network, Link2, LucideProps } from "lucide-react";

export const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  "cloud": Cloud,
  "database": Database,
  "github": Github,
  "server": Server,
  "hardDrive": HardDrive,
  "boxes": Boxes,
  "box": Box,
  "network": Network,
  "link": Link2
};

export const renderIcon = (iconType: string, props?: LucideProps) => {
  const IconComponent = iconMap[iconType];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} />;
};
