
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
            <svg
              viewBox="0 0 67 67"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 mx-auto text-[var(--white)]"
              aria-label="Hanzo Logo"
              role="img"
            >
              <path d="M22.21 67V44.6369H0V67H22.21Z" fill="currentColor" />
              <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD" />
              <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill="currentColor" />
              <path d="M22.21 0H0V22.3184H22.21V0Z" fill="currentColor" />
              <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill="currentColor" />
              <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD" />
              <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill="currentColor" />
            </svg>
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
