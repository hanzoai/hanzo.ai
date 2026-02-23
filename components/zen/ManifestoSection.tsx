
import React from "react";
import SectionHeader from "./SectionHeader";
import ZenPrinciplesList from "./ZenPrinciplesList";
import { principles } from "./data/zenPrinciples";
import { manifestoDescription } from "./data/manifestoText";

const ManifestoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Manifesto" 
          description={manifestoDescription}
        />
        
        <ZenPrinciplesList principles={principles} groupByDiscipline={true} />
      </div>
    </section>
  );
};

export default ManifestoSection;
