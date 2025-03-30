
import React from "react";
import { CheckCircle } from "lucide-react";

const IntegrationCategory = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" />
            <span className="text-neutral-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Integrations = () => {
  const integrationCategories = [
    {
      title: "Payment Gateways",
      items: ["Stripe", "PayPal", "Adyen", "Square", "Braintree", "Klarna", "Affirm", "Apple Pay"]
    },
    {
      title: "Marketing & CRM",
      items: ["Mailchimp", "Klaviyo", "HubSpot", "Salesforce", "Segment", "Meta Pixel", "Google Analytics", "Customer.io"]
    },
    {
      title: "Shipping & Fulfillment",
      items: ["ShipStation", "ShipBob", "EasyPost", "FedEx", "UPS", "USPS", "DHL", "AfterShip"]
    },
    {
      title: "Accounting & ERP",
      items: ["QuickBooks", "Xero", "NetSuite", "SAP", "Avalara", "TaxJar", "Sage", "Microsoft Dynamics"]
    }
  ];

  return (
    <section className="py-16 bg-[var(--black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Integrations</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Connect seamlessly with your existing technology stack and third-party services.
          </p>
        </div>
        
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          {integrationCategories.map((category, index) => (
            <IntegrationCategory 
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
