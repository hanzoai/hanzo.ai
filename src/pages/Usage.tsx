import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UsageOverview from "@/components/usage/UsageOverview";
import ProjectUsage from "@/components/usage/ProjectUsage";
import ResourceBreakdown from "@/components/usage/ResourceBreakdown";
import DateRangePicker from "@/components/usage/DateRangePicker";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";

const Usage = () => {
  const [dateRange, setDateRange] = useState({ start: "Mar 7", end: "Mar 8" });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-8">
              <AnimatedHeading>Usage</AnimatedHeading>
              <DateRangePicker 
                dateRange={dateRange} 
                onDateRangeChange={setDateRange} 
              />
            </div>

            <UsageOverview 
              dateRange={dateRange}
              currentUsage="$0.04"
              discounts="$0.00"
              creditsUsed="$0.00"
              estimatedCost="$0.07"
              creditsAvailable="5.00"
              creditsRequired="0.00"
            />
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Usage by Project</h2>
              <ProjectUsage />
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Resource Breakdown</h2>
              <ResourceBreakdown />
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Usage;

