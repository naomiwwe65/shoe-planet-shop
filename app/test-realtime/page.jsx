"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";

export default function TestRealtimePage() {
  const { user, isAuthenticated, updateUserProfile } = useAuth();
  const { items: cartItems, addToCart } = useCart();
  const [testMessage, setTestMessage] = useState("");

  // Get all users for real-time display
  const allUsers = useQuery(api.users.getAllUsers);
  
  // Get all cart items for real-time display
  const allCartItems = useQuery(api.cart.getCartItems, 
    isAuthenticated && user ? { userId: user.id } : "skip"
  );

  // Test mutation to update user profile
  const updateProfile = async () => {
    if (!isAuthenticated || !user) {
      setTestMessage("Please log in to test real-time updates");
      return;
    }

    try {
      await updateUserProfile({
        firstName: `Updated ${new Date().toLocaleTimeString()}`,
        lastName: "Test User",
      });
      setTestMessage("Profile updated! Check other browser tabs/devices to see real-time sync.");
    } catch (error) {
      setTestMessage(`Error: ${error.message}`);
    }
  };

  // Test adding to cart
  const testAddToCart = async () => {
    if (!isAuthenticated || !user) {
      setTestMessage("Please log in to test cart updates");
      return;
    }

    try {
      // Create a test product
      const testProduct = {
        id: `test-product-${Date.now()}`,
        name: `Test Product ${new Date().toLocaleTimeString()}`,
        price: 1000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      };

      await addToCart(testProduct);
      setTestMessage("Product added to cart! Check other browser tabs/devices to see real-time sync.");
    } catch (error) {
      setTestMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Navbar6 />
      <div className="min-h-screen bg-kicks-cream py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-kicks-black mb-8 text-center">
              Real-time Synchronization Test
            </h1>

            {/* Status */}
            <div className="bg-kicks-white rounded-lg p-6 mb-8 shadow-lg">
              <h2 className="text-xl font-semibold text-kicks-black mb-4">Current Status</h2>
              <div className="space-y-2">
                <p><strong>Authentication:</strong> {isAuthenticated ? "✅ Logged In" : "❌ Not Logged In"}</p>
                <p><strong>User ID:</strong> {user?.id || "N/A"}</p>
                <p><strong>User Name:</strong> {user?.name || "N/A"}</p>
                <p><strong>Cart Items:</strong> {cartItems.length}</p>
              </div>
            </div>

            {/* Test Controls */}
            <div className="bg-kicks-white rounded-lg p-6 mb-8 shadow-lg">
              <h2 className="text-xl font-semibold text-kicks-black mb-4">Test Controls</h2>
              <div className="space-y-4">
                <button
                  onClick={updateProfile}
                  disabled={!isAuthenticated}
                  className="bg-kicks-gold text-kicks-white px-6 py-3 rounded-lg hover:bg-kicks-anthracite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Update Profile (Real-time Test)
                </button>
                
                <button
                  onClick={testAddToCart}
                  disabled={!isAuthenticated}
                  className="bg-kicks-gold text-kicks-white px-6 py-3 rounded-lg hover:bg-kicks-anthracite transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-4"
                >
                  Add Test Product to Cart
                </button>
              </div>
              
              {testMessage && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg">
                  {testMessage}
                </div>
              )}
            </div>

            {/* Real-time Data Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* All Users */}
              <div className="bg-kicks-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-kicks-black mb-4">
                  All Users (Real-time)
                </h2>
                {allUsers ? (
                  <div className="space-y-2">
                    {allUsers.map((user) => (
                      <div key={user._id} className="p-3 bg-kicks-cream rounded-lg">
                        <p><strong>ID:</strong> {user.clerkUserId}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Created:</strong> {new Date(user.createdAt).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-kicks-anthracite">Loading users...</p>
                )}
              </div>

              {/* Cart Items */}
              <div className="bg-kicks-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-kicks-black mb-4">
                  Your Cart Items (Real-time)
                </h2>
                {allCartItems ? (
                  <div className="space-y-2">
                    {allCartItems.map((item) => (
                      <div key={item._id} className="p-3 bg-kicks-cream rounded-lg">
                        <p><strong>Product ID:</strong> {item.productId}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                        <p><strong>Size:</strong> {item.size || "N/A"}</p>
                        <p><strong>Added:</strong> {new Date(item.createdAt).toLocaleString()}</p>
                      </div>
                    ))}
                    {allCartItems.length === 0 && (
                      <p className="text-kicks-anthracite">No items in cart</p>
                    )}
                  </div>
                ) : (
                  <p className="text-kicks-anthracite">
                    {isAuthenticated ? "Loading cart..." : "Please log in to view cart"}
                  </p>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-kicks-white rounded-lg p-6 mt-8 shadow-lg">
              <h2 className="text-xl font-semibold text-kicks-black mb-4">How to Test Real-time Sync</h2>
              <div className="space-y-2 text-kicks-anthracite">
                <p>1. Open this page in multiple browser tabs or devices</p>
                <p>2. Log in with the same account in all tabs</p>
                <p>3. Click "Update Profile" or "Add Test Product to Cart" in one tab</p>
                <p>4. Watch the data update in real-time in other tabs!</p>
                <p>5. The changes should appear automatically without refreshing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
