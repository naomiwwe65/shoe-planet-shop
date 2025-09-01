"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";
import { useAuth } from "../context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api.js";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  const createUserMutation = useMutation(api.users.createSimpleUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    // Simulate authentication (in real app, this would be an API call)
    try {
      // For demo purposes, accept any email/password combination
      const userId = `user-${Date.now()}`;
      const userData = {
        id: userId,
        email: formData.email,
        name: formData.email.split('@')[0], // Use email prefix as name
        createdAt: new Date().toISOString(),
      };

      // Save to Convex (but don't fail if it doesn't work)
      try {
        await createUserMutation({
          userId: userId,
          email: formData.email,
          name: formData.email.split('@')[0],
        });
      } catch (convexError) {
        console.error('Convex error (non-critical):', convexError);
        // Continue with login even if Convex fails
      }

      login(userData);
      router.push('/');
    } catch (error) {
      console.error('Error creating user:', error);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <Navbar6 />
      <div className="min-h-screen bg-kicks-cream flex items-center justify-center py-8">
        <div className="w-full max-w-md">
          <div className="bg-kicks-white shadow-lg rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-kicks-black mb-2">Welcome Back</h1>
              <p className="text-kicks-anthracite">Sign in to your account</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-kicks-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-kicks-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-kicks-anthracite">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-kicks-gold hover:text-kicks-anthracite">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-kicks-gold text-kicks-white py-3 rounded-lg hover:bg-kicks-anthracite transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-kicks-anthracite">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-kicks-gold hover:text-kicks-anthracite font-medium">
                  Sign up
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
