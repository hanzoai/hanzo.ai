
import React, { useState, useEffect } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Building, User, UserPlus, MoreVertical, Upload, MapPin, Globe, Link as LinkIcon } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const Organization = () => {
  const { currentOrganization, updateOrganization } = useAccount();
  const [orgName, setOrgName] = useState('');
  const [orgDescription, setOrgDescription] = useState('');
  const [orgWebsite, setOrgWebsite] = useState('');
  const [orgLocation, setOrgLocation] = useState('');
  
  useEffect(() => {
    if (currentOrganization) {
      setOrgName(currentOrganization.name || '');
      setOrgDescription(currentOrganization.description || '');
      setOrgWebsite(currentOrganization.website || '');
      setOrgLocation(currentOrganization.location || '');
    }
  }, [currentOrganization]);
  
  // Mock team members for demonstration
  const teamMembers = [
    { id: '1', name: 'Alex Johnson', email: 'alex@hanzo.ai', role: 'Owner', avatar: '/placeholder.svg' },
    { id: '2', name: 'Sarah Chen', email: 'sarah@hanzo.ai', role: 'Admin', avatar: '/placeholder.svg' },
    { id: '3', name: 'Miguel Rodriguez', email: 'miguel@hanzo.ai', role: 'Member', avatar: '/placeholder.svg' },
    { id: '4', name: 'Leila Patel', email: 'leila@hanzo.ai', role: 'Member', avatar: '/placeholder.svg' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateOrganization({
      name: orgName,
      description: orgDescription,
      website: orgWebsite,
      location: orgLocation
    });
    
    toast.success('Organization settings updated');
  };
  
  const handleInviteMember = () => {
    // In a real app, this would open a modal for invitation
    toast.success('Invitation link created and copied to clipboard');
  };

  if (!currentOrganization) {
    return <div>No organization selected.</div>;
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="h-24 w-24 bg-gray-800 rounded-xl flex items-center justify-center">
              <Building className="h-12 w-12 text-gray-400" />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentOrganization.name}</h2>
              <div className="text-gray-400">
                {currentOrganization.role === 'owner' ? 'You are the owner of this organization' : 
                  `You are a ${currentOrganization.role} in this organization`}
              </div>
              
              <div className="mt-4 space-x-4">
                <Button variant="outline" size="sm" className="space-x-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload Logo</span>
                </Button>
                <Link to="/organization-profile">
                  <Button variant="outline" size="sm">
                    View Public Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-medium mb-4">Organization Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization Name</Label>
                <Input
                  id="orgName"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="orgDescription">Description</Label>
                <Textarea
                  id="orgDescription"
                  value={orgDescription}
                  onChange={(e) => setOrgDescription(e.target.value)}
                  className="bg-gray-900 border-gray-700 min-h-24"
                  placeholder="Tell us about your organization"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="orgWebsite">Website</Label>
                <Input
                  id="orgWebsite"
                  value={orgWebsite}
                  onChange={(e) => setOrgWebsite(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  placeholder="https://example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="orgLocation">Location</Label>
                <Input
                  id="orgLocation"
                  value={orgLocation}
                  onChange={(e) => setOrgLocation(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  placeholder="City, Country"
                />
              </div>
              
              <Button type="submit">
                Update Organization
              </Button>
            </form>
          </div>
        </TabsContent>
        
        <TabsContent value="members" className="space-y-6 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium">Team Members</h3>
            
            <Button onClick={handleInviteMember} className="space-x-2">
              <UserPlus className="h-4 w-4" />
              <span>Invite Member</span>
            </Button>
          </div>
          
          <div className="rounded-lg border border-gray-800 overflow-hidden">
            <Table>
              <TableHeader className="bg-gray-900">
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id} className="border-gray-800">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-gray-800">{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-gray-400">{member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        member.role === 'Owner' 
                          ? 'bg-purple-900/30 text-purple-300' 
                          : member.role === 'Admin' 
                            ? 'bg-blue-900/30 text-blue-300' 
                            : 'bg-gray-800 text-gray-300'
                      }`}>
                        {member.role}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                          <DropdownMenuItem className="text-white hover:bg-gray-800">
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-gray-800">
                            Change Role
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400 hover:bg-red-900/30 hover:text-red-300">
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6 pt-4">
          <h3 className="text-xl font-medium mb-4">Advanced Settings</h3>
          
          <div className="space-y-6 max-w-xl">
            <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <div className="font-medium">Organization Roles</div>
                  <div className="text-sm text-gray-400">Manage permission levels</div>
                </div>
              </div>
              
              <Button variant="outline">
                Configure
              </Button>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <div className="font-medium">Domains & SSO</div>
                  <div className="text-sm text-gray-400">Configure single sign-on</div>
                </div>
              </div>
              
              <Button variant="outline">
                Configure
              </Button>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg bg-red-900/10 border border-red-800/20">
              <div className="flex items-center">
                <div className="font-medium text-red-400">Delete Organization</div>
                <div className="text-sm text-red-400/70">This action is irreversible</div>
              </div>
              
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Organization;
