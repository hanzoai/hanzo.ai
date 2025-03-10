
import React, { useState } from 'react';
import { CreditCard, Plus, Trash2, CheckCircle, Edit, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BillingTabsLink from './BillingTabsLink';

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { id: 1, type: 'visa', last4: '4242', expMonth: 12, expYear: 25, isDefault: true },
    { id: 2, type: 'mastercard', last4: '5555', expMonth: 10, expYear: 24, isDefault: false }
  ]);

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return <div className="text-blue-500 font-bold text-xs">VISA</div>;
      case 'mastercard':
        return <div className="text-red-500 font-bold text-xs">MC</div>;
      default:
        return <CreditCard className="h-4 w-4 text-gray-400" />;
    }
  };

  const setDefaultCard = (id: number) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === id
    })));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BillingTabsLink tabId="overview" variant="ghost">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Overview
          </BillingTabsLink>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Payment Method
        </Button>
      </div>
      
      {/* Cards list */}
      <div className="space-y-4">
        {cards.map(card => (
          <div 
            key={card.id} 
            className={`flex items-center justify-between p-4 rounded-lg border ${
              card.isDefault 
                ? 'border-purple-500 bg-purple-900/10' 
                : 'border-gray-800 bg-gray-900/30'
            }`}
          >
            <div className="flex items-center">
              <div className="h-10 w-14 bg-gray-800 rounded flex items-center justify-center mr-4">
                {getCardIcon(card.type)}
              </div>
              <div>
                <div className="font-medium">
                  {card.type.charAt(0).toUpperCase() + card.type.slice(1)} ending in {card.last4}
                  {card.isDefault && (
                    <span className="ml-2 text-xs bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-400">Expires {card.expMonth}/{card.expYear}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {!card.isDefault && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setDefaultCard(card.id)}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Set Default
                </Button>
              )}
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Billing Address</h3>
        <div className="space-y-1 mb-4">
          <div>Jane Doe</div>
          <div>123 Main St</div>
          <div>San Francisco, CA 94105</div>
          <div>United States</div>
        </div>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-2" />
          Edit Address
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
