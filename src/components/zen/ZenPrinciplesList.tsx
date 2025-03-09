
import React from "react";
import ZenPrincipleCard, { ZenPrinciple } from "./ZenPrincipleCard";

interface ZenPrinciplesListProps {
  principles: ZenPrinciple[];
}

const ZenPrinciplesList: React.FC<ZenPrinciplesListProps> = ({ principles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {principles.map((principle, index) => (
        <ZenPrincipleCard key={principle.title} principle={principle} index={index} />
      ))}
    </div>
  );
};

export default ZenPrinciplesList;
