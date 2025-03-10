import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { 
  Bell, Globe, Moon, Sun, Laptop, 
  MailCheck, AlertCircle, BarChart3
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  // General settings
  const [theme, setTheme] = useState('system');
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [productUpdates, setProductUpdates] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [usageReports, setUsageReports] = useState(false);
  
  const handleSaveSettings = () => {
    toast.success('Settings updated successfully');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      
      <Tabs 
        defaultValue="general" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-6 bg-gray-900/50 border border-gray-800">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Appearance</h3>
              
              <div className="grid grid-cols-3 gap-3">
                <div 
                  className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border transition-colors ${
                    theme === 'light' ? 'border-purple-500 bg-purple-900/20' : 'border-gray-800 bg-gray-900/30'
                  }`}
                  onClick={() => setTheme('light')}
                >
                  <Sun className="h-6 w-6 mb-2" />
                  <span>Light</span>
                </div>
                
                <div 
                  className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border transition-colors ${
                    theme === 'dark' ? 'border-purple-500 bg-purple-900/20' : 'border-gray-800 bg-gray-900/30'
                  }`}
                  onClick={() => setTheme('dark')}
                >
                  <Moon className="h-6 w-6 mb-2" />
                  <span>Dark</span>
                </div>
                
                <div 
                  className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border transition-colors ${
                    theme === 'system' ? 'border-purple-500 bg-purple-900/20' : 'border-gray-800 bg-gray-900/30'
                  }`}
                  onClick={() => setTheme('system')}
                >
                  <Laptop className="h-6 w-6 mb-2" />
                  <span>System</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Language & Region</h3>
              
              <div className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">Language</div>
                    <div className="text-sm text-gray-400">English (US)</div>
                  </div>
                </div>
                
                <Button variant="outline">
                  Change
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Email Notifications</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <div className="flex items-center">
                  <MailCheck className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-gray-400">Receive emails about your account activity</div>
                  </div>
                </div>
                
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications} 
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">Product Updates</div>
                    <div className="text-sm text-gray-400">Get notified about new features and improvements</div>
                  </div>
                </div>
                
                <Switch 
                  checked={productUpdates} 
                  onCheckedChange={setProductUpdates} 
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">Security Alerts</div>
                    <div className="text-sm text-gray-400">Get notified about security-related events</div>
                  </div>
                </div>
                
                <Switch 
                  checked={securityAlerts} 
                  onCheckedChange={setSecurityAlerts} 
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">Usage Reports</div>
                    <div className="text-sm text-gray-400">Receive weekly usage and billing reports</div>
                  </div>
                </div>
                
                <Switch 
                  checked={usageReports} 
                  onCheckedChange={setUsageReports} 
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="border-t border-gray-800 pt-6 flex justify-end">
        <Button onClick={handleSaveSettings}>
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default AccountSettings;
