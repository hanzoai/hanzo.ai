
import React, { useState, useEffect } from "react";
import BillingOverview from "@/components/billing/BillingOverview";
import PaymentMethods from "@/components/billing/PaymentMethods";
import BillingHistory from "@/components/billing/BillingHistory";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    // Update active section when hash changes
    const hash = location.hash.replace('#', '');
    if (hash && (hash === 'overview' || hash === 'payment-methods' || hash === 'history')) {
      setActiveSection(hash);
    } else if (!hash) {
      setActiveSection('overview');
    }
  }, [location.hash]);

  const handleSectionChange = (value: string) => {
    setActiveSection(value);
    navigate(`/account/billing#${value}`, { replace: true });
  };

  return (
    <AnimatedSection>
      <AnimatedHeading>
        <h2 className="text-2xl font-bold mb-6">Billing</h2>
      </AnimatedHeading>

      <div className="mb-8 flex space-x-2 border-b border-gray-800/20 pb-2">
        <Button 
          variant={activeSection === "overview" ? "default" : "ghost"} 
          onClick={() => handleSectionChange("overview")}
          className={activeSection === "overview" ? "bg-gray-900 hover:bg-gray-800" : "hover:bg-gray-900/20"}
        >
          Overview
        </Button>
        <Button 
          variant={activeSection === "payment-methods" ? "default" : "ghost"} 
          onClick={() => handleSectionChange("payment-methods")}
          className={activeSection === "payment-methods" ? "bg-gray-900 hover:bg-gray-800" : "hover:bg-gray-900/20"}
        >
          Payment Methods
        </Button>
        <Button 
          variant={activeSection === "history" ? "default" : "ghost"} 
          onClick={() => handleSectionChange("history")}
          className={activeSection === "history" ? "bg-gray-900 hover:bg-gray-800" : "hover:bg-gray-900/20"}
        >
          Billing History
        </Button>
      </div>
      
      <div>
        {activeSection === "overview" && <BillingOverview />}
        {activeSection === "payment-methods" && <PaymentMethods />}
        {activeSection === "history" && <BillingHistory />}
      </div>
    </AnimatedSection>
  );
};

export default BillingPage;
