
import React, { useState } from 'react';
import { Copy, Check, Share2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ReferralLinkProps {
  referralLink: string;
  referralCode: string;
}

const ReferralLink = ({ referralLink, referralCode }: ReferralLinkProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setIsCopied(true);
    toast.success("Referral link copied to clipboard!");
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSendInvites = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      toast.success(`Invitations sent to ${emailInput.split(',').length} contacts!`);
      setEmailInput('');
    } else {
      toast.error("Please enter at least one email address");
    }
  };

  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-medium mb-4">Your Referral Link</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Input 
            value={referralLink} 
            readOnly 
            className="pr-12 bg-gray-900 border-gray-700"
          />
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute right-0 top-0 h-full"
            onClick={handleCopyLink}
          >
            {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Button className="flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share Link
        </Button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-800">
        <h3 className="text-lg font-medium mb-4">Send Invites via Email</h3>
        <form onSubmit={handleSendInvites} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="emails" className="sr-only">Email Addresses</Label>
            <Input 
              id="emails"
              placeholder="Enter email addresses, separated by commas" 
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-gray-900 border-gray-700"
            />
          </div>
          <Button type="submit" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Send Invites
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReferralLink;
