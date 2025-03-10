
import React, { useState } from 'react';
import { CreditCard, Plus, Trash2, CheckCircle, Edit, ArrowLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import BillingTabsLink from './BillingTabsLink';

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { id: 1, type: 'visa', last4: '4242', expMonth: 12, expYear: 25, isDefault: true },
    { id: 2, type: 'mastercard', last4: '5555', expMonth: 10, expYear: 24, isDefault: false }
  ]);
  
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardName: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });

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
    
    toast.success('Default payment method updated');
  };
  
  const handleAddCard = () => {
    setShowAddCard(true);
  };
  
  const handleCloseAddCard = () => {
    setShowAddCard(false);
    setNewCard({
      cardNumber: '',
      cardName: '',
      expMonth: '',
      expYear: '',
      cvc: ''
    });
  };
  
  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitCard = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!newCard.cardNumber || !newCard.cardName || !newCard.expMonth || !newCard.expYear || !newCard.cvc) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Add new card
    const cardType = newCard.cardNumber.startsWith('4') ? 'visa' : 'mastercard';
    const last4 = newCard.cardNumber.slice(-4);
    
    setCards([
      ...cards,
      {
        id: Date.now(),
        type: cardType,
        last4,
        expMonth: parseInt(newCard.expMonth),
        expYear: parseInt(newCard.expYear),
        isDefault: false
      }
    ]);
    
    toast.success('Payment method added successfully');
    handleCloseAddCard();
    
    // Redirect to overview after adding card to continue user journey
    const navigate = BillingTabsLink({ tabId: 'overview', children: '' }).props.onClick;
    if (navigate) navigate();
  };
  
  const handleDeleteCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
    toast.success('Payment method removed');
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BillingTabsLink tabId="overview" variant="ghost">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Overview
          </BillingTabsLink>
        </div>
        <Button onClick={handleAddCard}>
          <Plus className="h-4 w-4 mr-2" />
          Add Payment Method
        </Button>
      </div>
      
      {/* Add new card form */}
      {showAddCard && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Add Payment Method</h3>
            <Button variant="ghost" size="sm" onClick={handleCloseAddCard}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <form onSubmit={handleSubmitCard} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                name="cardName"
                placeholder="John Doe"
                value={newCard.cardName}
                onChange={handleCardInputChange}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="4242 4242 4242 4242"
                value={newCard.cardNumber}
                onChange={handleCardInputChange}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expMonth">Month</Label>
                <Input
                  id="expMonth"
                  name="expMonth"
                  placeholder="MM"
                  maxLength={2}
                  value={newCard.expMonth}
                  onChange={handleCardInputChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expYear">Year</Label>
                <Input
                  id="expYear"
                  name="expYear"
                  placeholder="YY"
                  maxLength={2}
                  value={newCard.expYear}
                  onChange={handleCardInputChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  name="cvc"
                  placeholder="123"
                  maxLength={3}
                  value={newCard.cvc}
                  onChange={handleCardInputChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full mt-4">
              Add Payment Method
            </Button>
          </form>
        </div>
      )}
      
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
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                onClick={() => handleDeleteCard(card.id)}
              >
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
