
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/account/billing#${tabId}`);
  };
  
  return (
    <Button 
      variant={variant} 
      onClick={handleClick}
      className="bg-[var(--black)] hover:bg-neutral-900 border border-white/10 text-[var(--white)]"
    >
      {children}
    </Button>
  );
};

export default BillingTabsLink;
