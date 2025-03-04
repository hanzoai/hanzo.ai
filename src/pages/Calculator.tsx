
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
          <p className="text-gray-400 mb-12 max-w-3xl">
            Estimate your monthly Hanzo costs based on your infrastructure needs. Adjust the sliders below to see how different resources affect your total cost.
          </p>
          <BillingCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
