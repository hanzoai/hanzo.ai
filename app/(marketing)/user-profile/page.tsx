'use client'


import React, { useState, useEffect } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import { Avatar, AvatarFallback, AvatarImage } from "@hanzo/ui";
import { Button } from "@hanzo/ui";
import { Mail, MapPin, Calendar, Link as LinkIcon, Edit } from 'lucide-react';

import AccountLayout from '@/components/account/AccountLayout';
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const { user, currentOrganization } = useAccount();
  const router = useRouter();

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  // This would come from a real profile model
  const userProfile = {
    bio: "Senior Developer at Hanzo Industries with a passion for AI and web technologies.",
    location: "San Francisco, CA",
    joinedDate: "January 2022",
    website: "https://alexjohnson.dev",
    projects: [
      { id: 1, name: "Hanzo AI Platform", description: "Leading AI development platform" },
      { id: 2, name: "Vector DB Integration", description: "High-performance vector database" },
      { id: 3, name: "Cloud Deployment System", description: "Automated cloud infrastructure" }
    ]
  };

  return (
    <AccountLayout>
      <div className="space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <Avatar className="h-32 w-32 border-4 border-border">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-4xl bg-primary">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground mt-1">{userProfile.bio}</p>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {userProfile.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Joined {userProfile.joinedDate}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    {user.email}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    <a href={userProfile.website || "#"} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                      {userProfile.website.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => router.push('/account')} 
                variant="outline" 
                className="flex items-center"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        
        {/* Organization Info */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-medium mb-4">Current Organization</h2>
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center text-lg font-bold">
              {currentOrganization?.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-lg">{currentOrganization?.name}</div>
              <div className="text-sm text-muted-foreground">Role: {currentOrganization?.role}</div>
            </div>
          </div>
        </div>
        
        {/* Projects */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-medium mb-4">Recent Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {userProfile.projects.map(project => (
              <div key={project.id} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default UserProfile;
