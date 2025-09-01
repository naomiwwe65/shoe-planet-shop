"use client";

import React, { useState, useEffect } from "react";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";

export default function TestEmail() {
  const [email, setEmail] = useState("jeffotieno65@gmail.com");
  const [phone, setPhone] = useState("+254700000000");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState(null);

  const addResult = (message, type = "info") => {
    setResults(prev => [...prev, { message, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  // Load configuration status on component mount
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/api/auth/config-status');
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error('Failed to load config:', error);
      }
    };
    loadConfig();
  }, []);

  const testEmail = async () => {
    setIsLoading(true);
    addResult(`Testing email reset for: ${email}`, "info");
    
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "email",
          identifier: email,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        addResult(`✅ Email API response: ${data.message}`, "success");
        addResult("📧 Check your email inbox and spam folder", "info");
        addResult("📋 Check browser console for detailed logs", "info");
      } else {
        addResult(`❌ Email API error: ${data.error}`, "error");
      }
    } catch (error) {
      addResult(`❌ Network error: ${error.message}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const testSMS = async () => {
    setIsLoading(true);
    addResult(`Testing SMS reset for: ${phone}`, "info");
    
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "sms",
          identifier: phone,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        addResult(`✅ SMS API response: ${data.message}`, "success");
        addResult("📱 Check your phone for SMS", "info");
        addResult("📋 Check browser console for detailed logs", "info");
      } else {
        addResult(`❌ SMS API error: ${data.error}`, "error");
      }
    } catch (error) {
      addResult(`❌ Network error: ${error.message}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div>
      <Navbar6 />
      <div className="min-h-screen bg-kicks-cream py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-kicks-white shadow-lg rounded-lg p-8">
              <h1 className="text-3xl font-bold text-kicks-black mb-6">Email & SMS Debug Test</h1>
              
                             <div className="mb-8">
                 <h2 className="text-xl font-semibold text-kicks-black mb-4">Configuration Status</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="bg-gray-50 p-4 rounded-lg">
                     <h3 className="font-medium text-kicks-black mb-2">Email Service ({config?.email?.service || 'Loading...'})</h3>
                     <p className="text-sm text-kicks-anthracite">API Key: {config?.email?.apiKey === 'Present' ? "✅ Present" : "❌ Missing"}</p>
                     <p className="text-sm text-kicks-anthracite">Domain: {config?.email?.domain || 'Not Set'}</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-lg">
                     <h3 className="font-medium text-kicks-black mb-2">SMS Service ({config?.sms?.service || 'Loading...'})</h3>
                     <p className="text-sm text-kicks-anthracite">API Key: {config?.sms?.apiKey === 'Present' ? "✅ Present" : "❌ Missing"}</p>
                     <p className="text-sm text-kicks-anthracite">Username: {config?.sms?.username || 'Not Set'}</p>
                     <p className="text-sm text-kicks-anthracite">From: {config?.sms?.from || 'Not Set'}</p>
                   </div>
                 </div>
                 {config && (
                   <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                     <h3 className="font-medium text-kicks-black mb-2">App Configuration</h3>
                     <p className="text-sm text-kicks-anthracite">App URL: {config.app?.url || 'Not Set'}</p>
                     <p className="text-sm text-kicks-anthracite">Convex URL: {config.app?.convexUrl === 'Present' ? "✅ Present" : "❌ Missing"}</p>
                   </div>
                 )}
               </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-kicks-black mb-4">Test Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-kicks-black mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                      placeholder="Enter email to test"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-kicks-black mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                      placeholder="Enter phone to test"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-kicks-black mb-4">Test Actions</h2>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={testEmail}
                    disabled={isLoading}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-50"
                  >
                    Test Email Reset
                  </button>
                  <button
                    onClick={testSMS}
                    disabled={isLoading}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium disabled:opacity-50"
                  >
                    Test SMS Reset
                  </button>
                  <button
                    onClick={clearResults}
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    Clear Results
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-kicks-black mb-4">Test Results</h2>
                <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="text-kicks-anthracite">No test results yet. Run a test to see results.</p>
                  ) : (
                    <div className="space-y-2">
                      {results.map((result, index) => (
                        <div key={index} className={`p-3 rounded-lg ${
                          result.type === "success" ? "bg-green-100 text-green-800" :
                          result.type === "error" ? "bg-red-100 text-red-800" :
                          "bg-blue-100 text-blue-800"
                        }`}>
                          <div className="flex justify-between items-start">
                            <span className="text-sm">{result.message}</span>
                            <span className="text-xs opacity-75">{result.timestamp}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

                             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                 <h3 className="font-medium text-yellow-800 mb-2">Troubleshooting Tips:</h3>
                 <ul className="text-sm text-yellow-700 space-y-1">
                   <li>• Check your email inbox and spam folder</li>
                   <li>• Open browser console (F12) to see detailed logs</li>
                   <li>• Verify your Resend API key is correct</li>
                   <li>• Check Africa's Talking account status</li>
                   <li>• Ensure the email/phone exists in your database</li>
                                       <li>• <strong>Email Service:</strong> Using Resend - check naomiwwe65@protonmail.com for forwarded emails</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
