
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillingCalculator from "@/components/calculator/BillingCalculator";
import { Server, Database, HardDrive, Globe, Shield, HeadsetIcon, Activity, FileText } from "lucide-react";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Billing Calculator</h1>
          <p className="text-neutral-400 mb-6 max-w-3xl">
            Estimate your monthly Hanzo costs based on your infrastructure needs. Adjust the sliders below to see how different resources affect your total cost.
          </p>
          
          <div className="mb-12 p-6 rounded-xl border border-[#333] bg-gray-900/50 space-y-4">
            <h2 className="text-xl font-semibold">Pricing Structure</h2>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center gap-2">
                <Server className="h-4 w-4 text-neutral-400" />
                <span><strong>Compute:</strong> $155/month per performance machine (4 vCPU, 8GB RAM)</span>
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-4 w-4 text-neutral-400" />
                <span><strong>Hanzo Base:</strong> $77.50/month per replica (2 vCPU, 4GB RAM)</span>
              </li>
              <li className="flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-neutral-400" />
                <span><strong>Storage:</strong> $0.15/GB per month for persistent storage</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-neutral-400" />
                <span><strong>Bandwidth:</strong> $0.02/GB for North America outgoing traffic</span>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-neutral-400" />
                <span><strong>Analytics Events:</strong> First 1 million events/month free, then $0.0001 per event</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-neutral-400" />
                <span><strong>Observability Logs:</strong> $0.50/GB for log storage and processing</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-neutral-400" />
                <span><strong>Compliance:</strong> $99/month for enhanced security features</span>
              </li>
              <li className="flex items-center gap-2">
                <HeadsetIcon className="h-4 w-4 text-neutral-400" />
                <span><strong>Enterprise Support:</strong> $2,500/month for premium support</span>
              </li>
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
