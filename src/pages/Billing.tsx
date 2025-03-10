
import React, { useState, useEffect } from "react";
import BillingOverview from "@/components/billing/BillingOverview";
import PaymentMethods from "@/components/billing/PaymentMethods";
import BillingHistory from "@/components/billing/BillingHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";
import { useLocation, useNavigate } from "react-router-dom";

const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultTab = location.hash ? location.hash.replace('#', '') : "overview";
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    // Update active tab when hash changes
    const hash = location.hash.replace('#', '');
    if (hash && (hash === 'overview' || hash === 'payment-methods' || hash === 'history')) {
      setActiveTab(hash);
    } else if (!hash) {
      setActiveTab('overview');
    }
  }, [location.hash]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/account/billing#${value}`, { replace: true });
  };

  return (
    <AnimatedSection>
      <AnimatedHeading>
        <h2 className="text-2xl font-bold mb-6">Billing</h2>
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
  );
};

export default BillingPage;
