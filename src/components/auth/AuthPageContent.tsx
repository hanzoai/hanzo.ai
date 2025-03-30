
import React, { ReactNode } from 'react';

interface AuthPageContentProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

const AuthPageContent: React.FC<AuthPageContentProps> = ({ 
  title, 
  subtitle, 
  children,
  footer
}) => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center mb-6">
          <a href="/" className="inline-block mb-8">
            <img 
              src="/placeholder.svg" 
              alt="Hanzo Logo" 
              className="h-10 mx-auto"
            />
          </a>
          <h1 className="text-3xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-neutral-400 mt-2">{subtitle}</p>
          )}
        </div>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          {children}
        </div>
        
        {footer && (
          <div className="text-center text-sm text-neutral-400">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPageContent;
