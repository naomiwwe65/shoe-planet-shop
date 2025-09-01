"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [token, setToken] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      validateToken(tokenFromUrl);
    } else {
      setMessage("Invalid reset link. Please request a new password reset.");
      setMessageType("error");
    }
  }, [searchParams]);

  const validateToken = async (token) => {
    try {
      const response = await fetch("/api/auth/validate-reset-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsValidToken(true);
        setMessage("Token is valid. Please enter your new password.");
        setMessageType("success");
      } else {
        setIsValidToken(false);
        setMessage(data.error || "Invalid or expired reset token.");
        setMessageType("error");
      }
    } catch (error) {
      setIsValidToken(false);
      setMessage("Error validating token. Please try again.");
      setMessageType("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password reset successfully! You can now log in with your new password.");
        setMessageType("success");
        
        // Clear form
        setPassword("");
        setConfirmPassword("");
        
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      } else {
        setMessage(data.error || "Failed to reset password. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar6 />
      <div className="min-h-screen bg-kicks-cream py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-kicks-white shadow-lg rounded-lg p-8">
              <h1 className="text-3xl font-bold text-kicks-black mb-6 text-center">
                Reset Password
              </h1>

              {message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  messageType === "success" 
                    ? "bg-green-100 text-green-800 border border-green-200" 
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}>
                  {message}
                </div>
              )}

              {isValidToken ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-kicks-black mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                      placeholder="Enter your new password"
                      required
                      minLength={6}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-kicks-black mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                      placeholder="Confirm your new password"
                      required
                      minLength={6}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-kicks-gold text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors font-medium disabled:opacity-50"
                  >
                    {isLoading ? "Resetting Password..." : "Reset Password"}
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-kicks-anthracite mb-4">
                    This reset link is invalid or has expired.
                  </p>
                  <button
                    onClick={() => router.push("/forgot-password")}
                    className="bg-kicks-gold text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                  >
                    Request New Reset Link
                  </button>
                </div>
              )}

              <div className="mt-6 text-center">
                <a
                  href="/sign-in"
                  className="text-kicks-gold hover:text-kicks-anthracite transition-colors"
                >
                  Back to Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
