
import React from 'react';
import { Button } from "@/components/ui/button";

const MachinesCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 md:p-12 border border-green-500/30">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Power Your AI Workloads</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get started with Hanzo Machines today and experience high-performance AI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                Sign Up Free
              </Button>
              <Button variant="outline" className="border-green-500/30 text-white hover:bg-green-900/20 px-8 py-6 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinesCTA;
