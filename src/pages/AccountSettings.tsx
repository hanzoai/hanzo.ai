
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAccount } from '@/contexts/AccountContext';
import AnimatedSection, { AnimatedHeading } from '@/components/ui/animated-section';
import { toast } from 'sonner';

const AccountSettings = () => {
  const { user, updateUserProfile } = useAccount();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings updated successfully');
  };

  return (
    <AnimatedSection>
      <AnimatedHeading>Account Settings</AnimatedHeading>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mt-8">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={user?.email || ''}
            disabled
            className="bg-gray-900/20 border-gray-800/30"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notifications">Email Notifications</Label>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="marketing"
                className="rounded border-gray-800/30 bg-gray-900/20"
                defaultChecked
              />
              <label htmlFor="marketing">Marketing updates</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="security"
                className="rounded border-gray-800/30 bg-gray-900/20"
                defaultChecked
              />
              <label htmlFor="security">Security alerts</label>
            </div>
          </div>
        </div>

        <Button type="submit" className="bg-gray-900 hover:bg-gray-800 border-none">
          Save Changes
        </Button>
      </form>
    </AnimatedSection>
  );
};

export default AccountSettings;
