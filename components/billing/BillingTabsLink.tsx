'use client'


import React from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@hanzo/ui";

interface BillingTabsLinkProps {
  tabId: 'overview' | 'payment-methods' | 'history';
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
}

const BillingTabsLink: React.FC<BillingTabsLinkProps> = ({ 
  tabId, 
  children, 
  variant = 'outline' 
}) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/account/billing#${tabId}`);
  };
  
  return (
    <Button 
      variant={variant} 
      onClick={handleClick}
      className="bg-[var(--black)] hover:bg-secondary border border-border text-[var(--white)]"
    >
      {children}
    </Button>
  );
};

export default BillingTabsLink;
