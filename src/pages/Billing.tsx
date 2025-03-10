
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillingOverview from "@/components/billing/BillingOverview";
import PaymentMethods from "@/components/billing/PaymentMethods";
import BillingHistory from "@/components/billing/BillingHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";
import { useLocation, useNavigate } from "react-router-dom";

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultTab = location.hash ? location.hash.replace('#', '') : "overview";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/billing#${value}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <AnimatedHeading>
              <h1 className="text-4xl font-bold mb-8">Billing</h1>
            </AnimatedHeading>

            <Tabs 
              defaultValue={activeTab} 
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="mb-8 bg-gray-900/50 border border-gray-800">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
                <TabsTrigger value="history">Billing History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <BillingOverview />
              </TabsContent>
              
              <TabsContent value="payment-methods">
                <PaymentMethods />
              </TabsContent>
              
              <TabsContent value="history">
                <BillingHistory />
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Billing;
