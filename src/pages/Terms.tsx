
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Terms of Service - Hanzo Industries</title>
        <meta 
          name="description" 
          content="Hanzo Industries terms of service - the conditions for using our platform and services." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              These Terms of Service govern your use of the Hanzo Industries platform and services.
              By using our services, you agree to these terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
            <p>
              Our services are provided for business and development purposes. You may use our services
              only as permitted by these terms and any applicable laws and regulations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">User Accounts</h2>
            <p>
              You may need to create an account to use some of our services. You are responsible for
              maintaining the security of your account and password. Hanzo Industries cannot and will not
              be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Content and Intellectual Property</h2>
            <p>
              Content you create using our services remains yours. However, by using our services,
              you grant us a license to use, host, store, reproduce, and modify such content as needed
              to provide the services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">API Usage and Rate Limits</h2>
            <p>
              Our APIs are subject to rate limits and usage restrictions. Excessive use that negatively
              impacts our services or other users may result in temporary or permanent restriction of your access.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice
              or liability, for any reason, including breach of these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without any warranties of any kind,
              either express or implied.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p>
              In no event shall Hanzo Industries be liable for any indirect, incidental, special,
              consequential or punitive damages, or any loss of profits or revenues.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of
              significant changes by posting an announcement on our website.
            </p>
            
            <p className="mt-8 text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
