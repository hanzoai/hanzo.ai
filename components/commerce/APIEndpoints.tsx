'use client'


import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@hanzo/ui/tabs";
import { cn } from "@/lib/utils";

interface EndpointProps {
  path: string;
  description: string;
}

const EndpointCard = ({ path, description }: EndpointProps) => {
  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-4 hover:border-border transition-all duration-300">
      <div className="font-mono text-sm text-foreground/60 mb-2">{path}</div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const APIEndpoints = () => {
  const [activeCategory, setActiveCategory] = useState("commerce");

  const endpointCategories = {
    commerce: [
      { path: "/cart", description: "List all carts for the current session/user" },
      { path: "/cart/{id}", description: "Get details for a specific cart" },
      { path: "/cart/{id}/set", description: "Update cart items and quantities" },
      { path: "/cart/{id}/discard", description: "Remove a cart" },
      { path: "/checkout/capture/{id}", description: "Capture payment for a previously authorized checkout" },
      { path: "/checkout/charge", description: "Process a direct checkout charge" },
      { path: "/checkout/authorize", description: "Authorize payment for later capture" },
      { path: "/collection/{id}", description: "Get a specific product collection" },
      { path: "/collection", description: "List all product collections" },
      { path: "/coupon", description: "List all available coupons" },
      { path: "/coupon/{id}", description: "Get details for a specific coupon" },
      { path: "/discount", description: "List all available discounts" },
      { path: "/discount/{id}", description: "Get details for a specific discount" },
      { path: "/order/{id}", description: "Get a specific order" },
      { path: "/order", description: "List all orders" },
      { path: "/order/{id}/refund", description: "Process a refund for an order" },
      { path: "/order/{id}/payments", description: "View payment details for an order" },
      { path: "/order/{id}/capture", description: "Capture payment for a previously authorized order" },
      { path: "/product", description: "List all products" },
      { path: "/product/{id}", description: "Get a specific product" },
      { path: "/return/{id}", description: "Get details for a specific return" },
      { path: "/return", description: "List all returns" },
      { path: "/review", description: "List all product reviews" },
      { path: "/review/{id}", description: "Get a specific product review" },
      { path: "/store/{id}", description: "Get a specific store" },
      { path: "/store", description: "List all stores" },
      { path: "/site/{siteid}/deploy", description: "Deploy a site/storefront" },
      { path: "/store/{id}/product/{key}", description: "Get a specific product in a store" },
      { path: "/store/{id}/variant/{key}", description: "Get a specific variant in a store" },
      { path: "/variant/{id}", description: "Get a specific product variant" },
      { path: "/variant", description: "List all product variants" }
    ],
    identity: [
      { path: "/account/login", description: "User authentication endpoint" },
      { path: "/account", description: "Manage user account details" },
      { path: "/account/create", description: "Create a new user account" },
      { path: "/user/{id}", description: "Get or update a specific user" },
      { path: "/user", description: "List all users (admin)" }
    ],
    marketing: [
      { path: "/affiliate/{id}", description: "Get a specific affiliate" },
      { path: "/affiliate/{id}/connect", description: "Connect an affiliate to an account" },
      { path: "/affiliate", description: "List all affiliates" },
      { path: "/affiliate/{id}/transactions", description: "View affiliate transactions" },
      { path: "/referral", description: "List all referrals" },
      { path: "/referral/{id}", description: "Get a specific referral" },
      { path: "/campaign/{id}", description: "Get a specific marketing campaign" },
      { path: "/campaign", description: "List all marketing campaigns" },
      { path: "/form/{id}", description: "Get a specific marketing form" },
      { path: "/form", description: "List all marketing forms" },
      { path: "/form/{id}/submit", description: "Submit data to a marketing form" },
      { path: "/referrer/{id}", description: "Get a specific referrer" },
      { path: "/referrer/{id}/referrals", description: "List referrals for a specific referrer" },
      { path: "/referrer", description: "List all referrers" },
      { path: "/referrer/{id}/transactions", description: "View referrer transactions" },
      { path: "/submission/{id}", description: "Get a specific form submission" },
      { path: "/submission", description: "List all form submissions" },
      { path: "/subscriber/{id}", description: "Get a specific subscriber" },
      { path: "/subscriber", description: "List all subscribers" },
      { path: "/transaction/{id}", description: "Get a specific marketing transaction" }
    ],
    payments: [
      { path: "/invoice/{id}", description: "Get a specific invoice" },
      { path: "/invoice", description: "List all invoices" },
      { path: "/payment/{id}", description: "Get a specific payment" },
      { path: "/payment", description: "List all payments" },
      { path: "/payment/{id}/refund", description: "Process a refund for a payment" },
      { path: "/plan/{id}", description: "Get a specific subscription plan" },
      { path: "/plan", description: "List all subscription plans" },
      { path: "/plan/{id}/refund", description: "Process a refund for a subscription plan" },
      { path: "/subscription/{id}", description: "Get a specific subscription" },
      { path: "/subscription", description: "List all subscriptions" }
    ],
    platform: [
      { path: "/media", description: "List all media assets" },
      { path: "/media/{id}", description: "Get a specific media asset" },
      { path: "/organization/{id}", description: "Get a specific organization" },
      { path: "/organization", description: "List all organizations" },
      { path: "/organization/{id}/integrations", description: "List all integrations for an organization" },
      { path: "/organization/{id}/integrations/{integrationId}", description: "Get a specific integration" },
      { path: "/webhook", description: "List all webhooks" },
      { path: "/webhook/{id}", description: "Get a specific webhook" }
    ]
  };

  const tabClasses = "data-[state=active]:bg-primary/5 data-[state=active]:text-foreground/60 border-b-0";

  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Comprehensive API</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete API-first platform that powers your e-commerce business with flexible endpoints for every need.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="commerce" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="w-full mb-6 bg-gray-900/50 border border-gray-800 rounded-lg p-1 h-auto flex flex-wrap">
              <TabsTrigger value="commerce" className={cn(tabClasses, "flex-1")}>
                Commerce
              </TabsTrigger>
              <TabsTrigger value="identity" className={cn(tabClasses, "flex-1")}>
                Identity
              </TabsTrigger>
              <TabsTrigger value="marketing" className={cn(tabClasses, "flex-1")}>
                Marketing
              </TabsTrigger>
              <TabsTrigger value="payments" className={cn(tabClasses, "flex-1")}>
                Payments
              </TabsTrigger>
              <TabsTrigger value="platform" className={cn(tabClasses, "flex-1")}>
                Platform
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(endpointCategories).map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground/60">
                    Hanzo {category.charAt(0).toUpperCase() + category.slice(1)} API Endpoints
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {endpointCategories[category as keyof typeof endpointCategories].map((endpoint, index) => (
                      <EndpointCard
                        key={index}
                        path={endpoint.path}
                        description={endpoint.description}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default APIEndpoints;
