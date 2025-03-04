
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillingCalculator from "@/components/calculator/BillingCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Billing Calculator</h1>
          <p className="text-gray-400 mb-6 max-w-3xl">
            Estimate your monthly Hanzo costs based on your infrastructure needs. Adjust the sliders below to see how different resources affect your total cost.
          </p>
          
          <div className="mb-12 p-6 rounded-xl border border-[#333] bg-gray-900/50 space-y-4">
            <h2 className="text-xl font-semibold">Pricing Structure</h2>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Compute:</strong> $155/month per performance machine (4 vCPU, 8GB RAM)</li>
              <li><strong>Hanzo Base:</strong> $77.50/month per replica (2 vCPU, 4GB RAM)</li>
              <li><strong>Storage:</strong> $0.15/GB per month for persistent storage</li>
              <li><strong>Bandwidth:</strong> $0.02/GB for North America outgoing traffic</li>
              <li><strong>Analytics Events:</strong> First 1 million events/month free, then $0.0001 per event</li>
              <li><strong>Observability Logs:</strong> $0.50/GB for log storage and processing</li>
              <li><strong>Compliance:</strong> $99/month for SOC2 Type 2 compliance</li>
              <li><strong>Enterprise Support:</strong> $2,500/month for premium support</li>
            </ul>
          </div>
          
          <BillingCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
