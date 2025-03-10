import React, { useState } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gift, Copy, Share2, User, DollarSign, ArrowRight, Check, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import AccountLayout from '@/components/account/AccountLayout';

const ReferralProgram = () => {
  const { user } = useAccount();
  const [emailInput, setEmailInput] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Mock referral data
  const referralCode = "ALEXJ5CREDITS";
  const referralLink = `https://hanzo.ai/signup?ref=${referralCode}`;
  const referralStats = {
    totalInvited: 12,
    signedUp: 8,
    creditsEarned: 40,
    pending: 4
  };

  // Mock referral history
  const referralHistory = [
    { id: 1, name: "Sarah Chen", email: "sarah@example.com", status: "Completed", date: "2024-06-12", credits: 5 },
    { id: 2, name: "Miguel Rodriguez", email: "miguel@example.com", status: "Completed", date: "2024-06-05", credits: 5 },
    { id: 3, name: "Priya Patel", email: "priya@example.com", status: "Completed", date: "2024-05-28", credits: 5 },
    { id: 4, name: "James Wilson", email: "james@example.com", status: "Pending", date: "2024-06-15", credits: 0 },
    { id: 5, name: "Olivia Kim", email: "olivia@example.com", status: "Pending", date: "2024-06-14", credits: 0 }
  ];

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
    <AccountLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-8 rounded-xl border border-purple-500/20">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
              <Gift className="h-8 w-8 text-purple-300" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">Referral Program</h1>
              <p className="text-lg text-gray-300">Get $5 in credits for every friend who signs up and pays for any plan</p>
            </div>
          </div>
        </div>

        {/* Referral Link */}
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
        
        {/* Referral Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Mail className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Total Invited</div>
                <div className="text-2xl font-bold">{referralStats.totalInvited}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <User className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Signed Up</div>
                <div className="text-2xl font-bold">{referralStats.signedUp}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Credits Earned</div>
                <div className="text-2xl font-bold">${referralStats.creditsEarned}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Clock className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Pending</div>
                <div className="text-2xl font-bold">{referralStats.pending}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Referral History */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-medium mb-4">Referral History</h2>
          
          <div className="rounded-lg border border-gray-800 overflow-hidden">
            <Table>
              <TableHeader className="bg-gray-900">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Credits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referralHistory.map((referral) => (
                  <TableRow key={referral.id} className="border-gray-800">
                    <TableCell className="font-medium">{referral.name}</TableCell>
                    <TableCell>{referral.email}</TableCell>
                    <TableCell>{referral.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        referral.status === 'Completed' 
                          ? 'bg-green-900/30 text-green-300' 
                          : 'bg-yellow-900/30 text-yellow-300'
                      }`}>
                        {referral.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {referral.credits > 0 ? `$${referral.credits}` : '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-medium mb-4">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 rounded-full bg-purple-900/30 text-purple-300 flex items-center justify-center mr-3">
                  1
                </div>
                <h3 className="font-medium">Share Your Link</h3>
              </div>
              <p className="text-sm text-gray-400">
                Share your unique referral link with friends and colleagues via email or social media
              </p>
            </div>
            
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 rounded-full bg-purple-900/30 text-purple-300 flex items-center justify-center mr-3">
                  2
                </div>
                <h3 className="font-medium">Friends Sign Up</h3>
              </div>
              <p className="text-sm text-gray-400">
                When your friends use your link to sign up and subscribe to any paid plan
              </p>
            </div>
            
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 rounded-full bg-purple-900/30 text-purple-300 flex items-center justify-center mr-3">
                  3
                </div>
                <h3 className="font-medium">Earn Credits</h3>
              </div>
              <p className="text-sm text-gray-400">
                You receive $5 in credits for each successful referral that can be used toward your subscription
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default ReferralProgram;
