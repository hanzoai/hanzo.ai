'use client'


import React from "react";
import ZenPrincipleCard, { ZenPrinciple } from "./ZenPrincipleCard";

interface ZenPrinciplesListProps {
  principles: ZenPrinciple[];
  groupByDiscipline?: boolean;
}

const ZenPrinciplesList: React.FC<ZenPrinciplesListProps> = ({ 
  principles, 
  groupByDiscipline = false 
}) => {
  // Group principles by discipline
  const disciplineGroups = React.useMemo(() => {
    if (!groupByDiscipline) return null;

    const groups: Record<string, ZenPrinciple[]> = {};
    principles.forEach(principle => {
      const discipline = principle.discipline || "Uncategorized";
      if (!groups[discipline]) {
        groups[discipline] = [];
      }
      groups[discipline].push(principle);
    });
    return groups;
  }, [principles, groupByDiscipline]);

  if (groupByDiscipline && disciplineGroups) {
    return (
      <div className="space-y-12">
        {Object.entries(disciplineGroups).map(([discipline, disciplinePrinciples]) => (
          <div key={discipline} className="space-y-6">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-semibold text-[#ffffff]">{discipline}</h3>
              <div className="h-px flex-grow bg-[#ffffff]/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplinePrinciples.map((principle, index) => (
                <ZenPrincipleCard 
                  key={principle.title} 
                  principle={principle} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {principles.map((principle, index) => (
        <ZenPrincipleCard key={principle.title} principle={principle} index={index} />
      ))}
    </div>
  );
};

export default ZenPrinciplesList;
