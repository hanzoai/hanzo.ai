
import React from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Button } from '@/components/ui/button';
import { Building, Users, Calendar, Globe, Edit, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AccountLayout from '@/components/account/AccountLayout';

const OrganizationProfile = () => {
  const { currentOrganization } = useAccount();
  const navigate = useNavigate();

  if (!currentOrganization) {
    return <div>No organization selected.</div>;
  }

  // This would come from a real organization profile model
  const orgProfile = {
    description: "Leading AI and development solutions provider.",
    founded: "2018",
    location: "San Francisco, CA",
    website: "https://hanzo.industries",
    teamSize: "43 members",
    plans: "Pro Plan ($49/month)",
    security: "SOC 2 Compliant, GDPR Ready"
  };

  // Mock team members data
  const teamMembers = [
    { id: '1', name: 'Alex Johnson', role: 'Owner', avatar: '/placeholder.svg' },
    { id: '2', name: 'Sarah Chen', role: 'Admin', avatar: '/placeholder.svg' },
    { id: '3', name: 'Miguel Rodriguez', role: 'Member', avatar: '/placeholder.svg' },
    { id: '4', name: 'Leila Patel', role: 'Member', avatar: '/placeholder.svg' },
  ];

  return (
    <AccountLayout>
      <div className="space-y-8">
        {/* Organization Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="h-32 w-32 bg-gray-900/30 rounded-xl flex items-center justify-center">
            <Building className="h-16 w-16 text-gray-400" />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{currentOrganization.name}</h1>
                <p className="text-gray-400 mt-1">{orgProfile.description}</p>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    Founded {orgProfile.founded}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Globe className="h-4 w-4 mr-2" />
                    {orgProfile.location}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    {orgProfile.teamSize}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Shield className="h-4 w-4 mr-2" />
                    {orgProfile.security}
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => navigate('/account/organization')} 
                variant="outline" 
                className="flex items-center bg-black hover:bg-gray-900/30 border-gray-800/30"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Organization
              </Button>
            </div>
          </div>
        </div>
        
        {/* Organization Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black border-0 rounded-lg p-6">
            <h3 className="font-medium text-gray-400 mb-2">Current Plan</h3>
            <div className="text-2xl font-bold">Pro Plan</div>
            <div className="text-sm text-gray-400 mt-1">$49/month, billed annually</div>
          </div>
          
          <div className="bg-black border-0 rounded-lg p-6">
            <h3 className="font-medium text-gray-400 mb-2">Team Members</h3>
            <div className="text-2xl font-bold">{teamMembers.length}</div>
            <div className="text-sm text-gray-400 mt-1">
              {teamMembers.filter(m => m.role === 'Owner' || m.role === 'Admin').length} admins, 
              {teamMembers.filter(m => m.role === 'Member').length} members
            </div>
          </div>
          
          <div className="bg-black border-0 rounded-lg p-6">
            <h3 className="font-medium text-gray-400 mb-2">Your Role</h3>
            <div className="text-2xl font-bold">{currentOrganization.role}</div>
            <div className="text-sm text-gray-400 mt-1">
              {currentOrganization.role === 'owner' 
                ? 'Full access to all settings' 
                : currentOrganization.role === 'admin' 
                  ? 'Can invite members and modify settings'
                  : 'Standard access to resources'}
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="bg-black border-0 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Team Members</h2>
            <Button 
              onClick={() => navigate('/account/organization')} 
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 border-0"
            >
              View All
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.slice(0, 3).map(member => (
              <div key={member.id} className="flex items-center p-3 bg-gray-900/20 rounded-lg">
                <div className="h-10 w-10 bg-gray-900/50 rounded-full mr-3 flex items-center justify-center text-sm font-medium">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-xs text-gray-400">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default OrganizationProfile;
