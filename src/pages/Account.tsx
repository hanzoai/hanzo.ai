
import React, { useState } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Key, Shield } from 'lucide-react';

const Account = () => {
  const { user } = useAccount();
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would be an API call
    toast.success('Profile updated successfully');
  };
  
  const handleChangePassword = () => {
    // In a real app, this would trigger a password reset flow
    toast.success('Password reset link sent to your email');
  };

  if (!user) {
    return <div>Please sign in to access your account.</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src={user.avatar} />
          <AvatarFallback className="text-2xl bg-purple-900">{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div>
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <div className="flex items-center text-gray-400">
            <Mail className="h-4 w-4 mr-2" />
            {user.email}
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-6">
        <h3 className="text-xl font-medium mb-4">Personal Information</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-900 border-gray-700"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900 border-gray-700"
            />
          </div>
          
          <Button type="submit">
            Update Profile
          </Button>
        </form>
      </div>
      
      <div className="border-t border-gray-800 pt-6">
        <h3 className="text-xl font-medium mb-4">Security</h3>
        
        <div className="space-y-6 max-w-xl">
          <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
            <div className="flex items-center">
              <Key className="h-5 w-5 mr-3 text-gray-400" />
              <div>
                <div className="font-medium">Password</div>
                <div className="text-sm text-gray-400">Last changed 3 months ago</div>
              </div>
            </div>
            
            <Button variant="outline" onClick={handleChangePassword}>
              Change
            </Button>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-3 text-gray-400" />
              <div>
                <div className="font-medium">Two-Factor Authentication</div>
                <div className="text-sm text-gray-400">Not enabled</div>
              </div>
            </div>
            
            <Button variant="outline">
              Setup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
