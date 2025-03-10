
import React, { useState, useEffect } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Key, Shield, UserCircle, MapPin, Phone, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Account = () => {
  const { user, updateUserProfile } = useAccount();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState('');
  
  useEffect(() => {
    if (user) {
      setFullName(user.name || '');
      setEmail(user.email || '');
      setBio(user.bio || '');
      setLocation(user.location || '');
      setWebsite(user.website || '');
      setPhone(user.phone || '');
    }
  }, [user]);
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateUserProfile({
      name: fullName,
      email,
      bio,
      location,
      website,
      phone
    });
    
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
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6 pt-4">
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
              
              <div className="mt-4 space-x-4">
                <Button variant="outline" size="sm">
                  Upload New Picture
                </Button>
                <Button variant="outline" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                  Remove
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-medium mb-4">Personal Information</h3>
            
            <form onSubmit={handleProfileSubmit} className="space-y-6 max-w-xl">
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
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="bg-gray-900 border-gray-700 min-h-24"
                  placeholder="Tell us about yourself"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-gray-900 border-gray-700"
                    placeholder="City, Country"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-900 border-gray-700"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  placeholder="https://example.com"
                />
              </div>
              
              <div className="flex gap-4">
                <Button type="submit">
                  Update Profile
                </Button>
                <Link to="/user-profile">
                  <Button type="button" variant="outline">
                    View Public Profile
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6 pt-4">
          <h3 className="text-xl font-medium mb-4">Security Settings</h3>
          
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
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-6 pt-4">
          <h3 className="text-xl font-medium mb-4">Preferences</h3>
          
          <div className="space-y-6 max-w-xl">
            <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <UserCircle className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <div className="font-medium">Profile Visibility</div>
                  <div className="text-sm text-gray-400">Control who can see your profile</div>
                </div>
              </div>
              
              <Button variant="outline">
                Configure
              </Button>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-sm text-gray-400">Manage email preferences</div>
                </div>
              </div>
              
              <Button variant="outline">
                Configure
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Account;
