'use client'


import React from 'react';
import MachinesHero from "@/components/machines/MachinesHero";
import MachinesFeatures from "@/components/machines/MachinesFeatures";
import MachinesUseCases from "@/components/machines/MachinesUseCases";
import MachinesEnterprise from "@/components/machines/MachinesEnterprise";
import MachinesCTA from "@/components/machines/MachinesCTA";

const Machines = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      <MachinesHero />
      <MachinesFeatures />
      <MachinesUseCases />
      <MachinesEnterprise />
      <MachinesCTA />
      
    </div>
  );
};

export default Machines;
