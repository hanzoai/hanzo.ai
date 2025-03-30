
import React, { useState, useEffect } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Key, Shield, UserCircle, MapPin, Phone, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection, { AnimatedHeading } from '@/components/ui/animated-section';

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

  if (!user) {
    return <div>Please sign in to access your account.</div>;
  }

  return (
    <AnimatedSection>
      <div className="space-y-10">
        <AnimatedHeading>
          <h2 className="text-2xl font-medium mb-8">Profile Settings</h2>
        </AnimatedHeading>

        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-2xl bg-neutral-900">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div>
            <h2 className="text-2xl font-medium mb-2">{user.name}</h2>
            <div className="flex items-center text-neutral-400">
              <Mail className="h-4 w-4 mr-2" />
              {user.email}
            </div>
            
            <div className="mt-5 space-x-4">
              <Button variant="outline" size="sm" className="bg-[var(--black)] border-white/10 hover:bg-[var(--white)]/5">
                Upload New Picture
              </Button>
              <Button variant="outline" size="sm" className="bg-[var(--black)] border-white/10 hover:bg-[var(--white)]/5 text-red-400 hover:text-red-300 hover:bg-red-900/10">
                Remove
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800/20 pt-8">
          <h3 className="text-xl font-medium mb-6">Personal Information</h3>
          
          <form onSubmit={handleProfileSubmit} className="space-y-8 max-w-xl">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-[var(--white)]">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-[var(--black)]/40 border-white/10 focus:border-white/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[var(--white)]">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[var(--black)]/40 border-white/10 focus:border-white/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-[var(--white)]">Bio</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="bg-[var(--black)]/40 border-white/10 focus:border-white/20 min-h-24"
                placeholder="Tell us about yourself"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-[var(--white)]">Location</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-[var(--black)]/40 border-white/10 focus:border-white/20"
                  placeholder="City, Country"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[var(--white)]">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[var(--black)]/40 border-white/10 focus:border-white/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website" className="text-[var(--white)]">Website</Label>
              <Input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="bg-[var(--black)]/40 border-white/10 focus:border-white/20"
                placeholder="https://example.com"
              />
            </div>
            
            <div className="flex gap-4 pt-2">
              <Button 
                type="submit" 
                className="bg-[var(--black)] hover:bg-neutral-900 border border-white/10"
              >
                Update Profile
              </Button>
              <Link to="/user-profile">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="bg-[var(--black)] border-white/10 hover:bg-[var(--white)]/5"
                >
                  View Public Profile
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Account;
