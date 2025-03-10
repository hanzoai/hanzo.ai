
import React, { useState } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Building, User, UserPlus, MoreVertical, Upload } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const Organization = () => {
  const { currentOrganization } = useAccount();
  const [orgName, setOrgName] = useState(currentOrganization?.name || '');
  
  // Mock team members for demonstration
  const teamMembers = [
    { id: '1', name: 'Alex Johnson', email: 'alex@hanzo.ai', role: 'Owner', avatar: '/placeholder.svg' },
    { id: '2', name: 'Sarah Chen', email: 'sarah@hanzo.ai', role: 'Admin', avatar: '/placeholder.svg' },
    { id: '3', name: 'Miguel Rodriguez', email: 'miguel@hanzo.ai', role: 'Member', avatar: '/placeholder.svg' },
    { id: '4', name: 'Leila Patel', email: 'leila@hanzo.ai', role: 'Member', avatar: '/placeholder.svg' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would be an API call
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
            <Label>Organization Logo</Label>
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <Building className="h-8 w-8 text-gray-400" />
              </div>
              
              <Button variant="outline" className="space-x-2">
                <Upload className="h-4 w-4" />
                <span>Upload Logo</span>
              </Button>
            </div>
          </div>
          
          <Button type="submit">
            Update Organization
          </Button>
        </form>
      </div>
      
      <div className="border-t border-gray-800 pt-6">
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
      </div>
    </div>
  );
};

export default Organization;
