
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    organization: '',
    role: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        toast.error('Please fill in all required fields');
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      
      if (!formData.agreeToTerms) {
        toast.error('You must agree to the terms of service');
        return;
      }
      
      setStep(2);
    } else if (step === 2) {
      if (!formData.name || !formData.organization) {
        toast.error('Please fill in all required fields');
        return;
      }
      
      // Store user data in localStorage to simulate account creation
      localStorage.setItem('user', JSON.stringify({
        id: 'user-' + Date.now(),
        name: formData.name,
        email: formData.email,
        avatar: null
      }));
      
      localStorage.setItem('organizations', JSON.stringify([
        { 
          id: 'org-' + Date.now(), 
          name: formData.organization, 
          role: 'owner' 
        }
      ]));
      
      toast.success('Account created successfully!');
      
      // Redirect to payment method page
      navigate('/billing#payment-methods');
    }
  };
  
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-neutral-400 mt-2">
            {step === 1 ? 'Enter your details to get started' : 'Set up your profile'}
          </p>
        </div>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the <a href="/terms" className="text-[#fd4444] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#fd4444] hover:underline">Privacy Policy</a>
                  </Label>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization Name</Label>
                  <div className="relative">
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Your Company"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role (Optional)</Label>
                  <div className="relative">
                    <Input
                      id="role"
                      name="role"
                      placeholder="e.g. Developer, Manager"
                      value={formData.role}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}
            
            <Button 
              type="submit" 
              className="w-full mt-6 bg-[#fd4444] hover:bg-[#e03e3e] text-[var(--white)]"
            >
              {step === 1 ? 'Continue' : 'Create Account'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        
        <div className="text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <a href="/login" className="text-[#fd4444] hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
