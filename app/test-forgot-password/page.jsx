"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";

export default function TestForgotPassword() {
  const [testResults, setTestResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addResult = (message, type = "info") => {
    setTestResults(prev => [...prev, { message, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  const testEmailReset = async () => {
    setIsLoading(true);
    addResult("Testing email reset functionality...", "info");
    
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "email",
          identifier: "test@example.com",
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        addResult(`✅ Email reset test successful: ${data.message}`, "success");
      } else {
        addResult(`❌ Email reset test failed: ${data.error}`, "error");
      }
    } catch (error) {
      addResult(`❌ Email reset test error: ${error.message}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const testSMSReset = async () => {
    setIsLoading(true);
    addResult("Testing SMS reset functionality...", "info");
    
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "sms",
          identifier: "+254700000000",
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        addResult(`✅ SMS reset test successful: ${data.message}`, "success");
      } else {
        addResult(`❌ SMS reset test failed: ${data.error}`, "error");
      }
    } catch (error) {
      addResult(`❌ SMS reset test error: ${error.message}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div>
      <Navbar6 />
      <div className="min-h-screen bg-kicks-cream py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-kicks-white shadow-lg rounded-lg p-8">
              <h1 className="text-3xl font-bold text-kicks-black mb-6">Forgot Password Test</h1>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-kicks-black mb-4">Test Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-kicks-black mb-2">Email Service</h3>
                    <p className="text-sm text-kicks-anthracite">Provider: Resend</p>
                    <p className="text-sm text-kicks-anthracite">Status: {process.env.RESEND_API_KEY ? "✅ Configured" : "❌ Not configured"}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-kicks-black mb-2">SMS Service</h3>
                    <p className="text-sm text-kicks-anthracite">Provider: Africa's Talking</p>
                    <p className="text-sm text-kicks-anthracite">Status: {process.env.AFRICAS_TALKING_API_KEY ? "✅ Configured" : "❌ Not configured"}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-kicks-black mb-4">Test Actions</h2>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={testEmailReset}
                    disabled={isLoading}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-50"
                  >
                    Test Email Reset
                  </button>
                  <button
                    onClick={testSMSReset}
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
                  {testResults.length === 0 ? (
                    <p className="text-kicks-anthracite">No test results yet. Run a test to see results.</p>
                  ) : (
                    <div className="space-y-2">
                      {testResults.map((result, index) => (
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

              <div className="text-center">
                <Link
                  href="/forgot-password"
                  className="inline-block bg-kicks-gold text-kicks-white px-6 py-3 rounded-lg hover:bg-kicks-anthracite transition-colors font-medium"
                >
                  Go to Forgot Password Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

