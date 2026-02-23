'use client'

import React from "react";
import { Slider } from "@hanzo/ui";

interface ResourceSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: number;
  onChange: (value: number[]) => void;
  min: number;
  max: number;
  cost: number;
  unit: string;
}

const ResourceSection = ({
  icon,
  title,
  description,
  value,
  onChange,
  min,
  max,
  cost,
  unit
}: ResourceSectionProps) => {
  return (
    <div className="p-6 rounded-xl border border-[#333] bg-gray-900/50 hover:border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-muted-foreground">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{value} {unit}</span>
          <span className="font-semibold">${cost.toFixed(2)}/mo</span>
        </div>

        <Slider
          value={[value]}
          onValueChange={onChange}
          min={min}
          max={max}
          step={1}
          className="my-4"
        />

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
