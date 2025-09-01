"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";

export default function ForgotPasswordPage() {
  const [recoveryMethod, setRecoveryMethod] = useState("email"); // "email" or "sms"
  const [identifier, setIdentifier] = useState(""); // email or phone number
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    if (!identifier) {
      setError("Please enter your " + (recoveryMethod === "email" ? "email address" : "phone number"));
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: recoveryMethod,
          identifier: identifier,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          recoveryMethod === "email"
            ? "Password reset link has been sent to your email address."
            : "Password reset code has been sent to your phone number."
        );
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar6 />
      <div className="min-h-screen bg-kicks-cream flex items-center justify-center py-8">
        <div className="w-full max-w-md">
          <div className="bg-kicks-white shadow-lg rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-kicks-black mb-2">Forgot Password</h1>
              <p className="text-kicks-anthracite">
                Enter your {recoveryMethod === "email" ? "email address" : "phone number"} to reset your password
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                {message}
              </div>
            )}

            {/* Recovery Method Toggle */}
            <div className="flex bg-kicks-pearl rounded-lg p-1 mb-6">
              <button
                type="button"
                onClick={() => setRecoveryMethod("email")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  recoveryMethod === "email"
                    ? "bg-kicks-white text-kicks-black shadow-sm"
                    : "text-kicks-anthracite hover:text-kicks-black"
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setRecoveryMethod("sms")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  recoveryMethod === "sms"
                    ? "bg-kicks-white text-kicks-black shadow-sm"
                    : "text-kicks-anthracite hover:text-kicks-black"
                }`}
              >
                SMS
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-kicks-black mb-2">
                  {recoveryMethod === "email" ? "Email Address" : "Phone Number"}
                </label>
                <input
                  type={recoveryMethod === "email" ? "email" : "tel"}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                  placeholder={
                    recoveryMethod === "email" 
                      ? "Enter your email address" 
                      : "Enter your phone number (e.g., +254700000000)"
                  }
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-kicks-gold text-kicks-white py-3 rounded-lg hover:bg-kicks-anthracite transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-kicks-anthracite">
                Remember your password?{" "}
                <Link href="/sign-in" className="text-kicks-gold hover:text-kicks-anthracite font-medium">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="text-center mt-6">
              <Link href="/" className="text-kicks-anthracite hover:text-kicks-black">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

