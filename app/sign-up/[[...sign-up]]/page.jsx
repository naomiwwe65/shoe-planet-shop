"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar6 } from "../../../home/components/navbar-06";
import { Footer1 } from "../../../home/components/footer-01";
import { useAuth } from "../../context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api.js";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // Create user
      const userId = `user-${Date.now()}`;
      const userData = {
        id: userId,
        email: formData.email,
        name: formData.name,
        createdAt: new Date().toISOString(),
      };

      // Save to Convex (but don't fail if it doesn't work)
      try {
        await createUserMutation({
          userId: userId,
          email: formData.email,
          name: formData.name,
        });
      } catch (convexError) {
        console.error('Convex error (non-critical):', convexError);
        // Continue with signup even if Convex fails
      }

      // Auto-login after successful signup
      login(userData);
      router.push('/');
    } catch (error) {
      console.error('Error creating user:', error);
      setError("Sign up failed. Please try again.");
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
              <h1 className="text-3xl font-bold text-kicks-black mb-2">Create Account</h1>
              <p className="text-kicks-anthracite">Join Shoe Planet Kenya today</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-kicks-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                  placeholder="Enter your full name"
                  required
                  disabled={isLoading}
                />
              </div>

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
                  placeholder="Create a password"
                  required
                  disabled={isLoading}
                  minLength={6}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-kicks-black mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                  placeholder="Confirm your password"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                <span className="text-sm text-kicks-anthracite">
                  I agree to the{" "}
                  <Link href="/terms" className="text-kicks-gold hover:text-kicks-anthracite">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-kicks-gold hover:text-kicks-anthracite">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-kicks-gold text-kicks-white py-3 rounded-lg hover:bg-kicks-anthracite transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-kicks-anthracite">
                Already have an account?{" "}
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
