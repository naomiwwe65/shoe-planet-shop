"use client";

import { useState, useEffect } from "react";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const { isAuthenticated, user, logout, isLoading: authLoading } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated (but wait for auth to load)
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/sign-in');
    }
  }, [isAuthenticated, authLoading, router]);

  // Show loading while auth is being checked
  if (authLoading) {
    return (
      <div className="min-h-screen bg-kicks-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kicks-gold mx-auto mb-4"></div>
          <p className="text-kicks-anthracite">Loading authentication...</p>
        </div>
      </div>
    );
  }

  // Show loading or redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-kicks-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kicks-gold mx-auto mb-4"></div>
          <p className="text-kicks-anthracite">Redirecting to sign in...</p>
        </div>
      </div>
    );
  }

  // Get user's orders from Convex - temporarily disabled due to API issues
  const orders = [];

  // Get user data from Convex - temporarily disabled due to useQuery issues
  const convexUser = null;

  // Handle loading states
  const isLoading = false;

  // Debug logging
  console.log("Profile Page Debug:", {
    isAuthenticated,
    authLoading,
    userId: user?.id,
    userEmail: user?.email,
    orders: orders?.length || 0,
    convexUser: convexUser ? "Found" : "Not found"
  });

  return (
    <div>
      <Navbar6 />
      <div className="min-h-screen bg-kicks-cream py-8">
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kicks-gold mx-auto mb-4"></div>
              <p className="text-kicks-anthracite">Loading profile...</p>
            </div>
          </div>
        )}
        {!isLoading && (
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-kicks-black mb-8">My Profile</h1>
            
            {/* Tab Navigation */}
            <div className="flex border-b border-kicks-pearl mb-8">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "profile"
                    ? "text-kicks-gold border-b-2 border-kicks-gold"
                    : "text-kicks-anthracite hover:text-kicks-black"
                }`}
              >
                Profile Settings
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === "orders"
                    ? "text-kicks-gold border-b-2 border-kicks-gold"
                    : "text-kicks-anthracite hover:text-kicks-black"
                }`}
              >
                Order History ({orders.length})
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "profile" && (
              <div className="bg-kicks-white rounded-lg shadow-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-kicks-black mb-4">Account Information</h2>
                    <div className="space-y-4">
                      <div className="border border-kicks-pearl rounded-lg p-4">
                        <label className="block text-sm font-medium text-kicks-anthracite mb-1">Name</label>
                        <p className="text-lg text-kicks-black font-medium">
                          {user?.name || 'Not provided'}
                        </p>
                      </div>
                      <div className="border border-kicks-pearl rounded-lg p-4">
                        <label className="block text-sm font-medium text-kicks-anthracite mb-1">Email</label>
                        <p className="text-lg text-kicks-black font-medium">{user?.email}</p>
                      </div>
                      <div className="border border-kicks-pearl rounded-lg p-4">
                        <label className="block text-sm font-medium text-kicks-anthracite mb-1">Member Since</label>
                        <p className="text-lg text-kicks-black font-medium">
                          {user?.createdAt 
                            ? new Date(user.createdAt).toLocaleDateString() 
                            : 'Recently'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-kicks-pearl pt-6">
                    <button
                      onClick={logout}
                      className="btn-primary"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="bg-kicks-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-kicks-black mb-6">Order History</h2>
                
                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📦</div>
                    <h3 className="text-xl font-bold text-kicks-black mb-2">No orders yet</h3>
                    <p className="text-kicks-anthracite mb-6">Start shopping to see your order history here!</p>
                    <a href="/products" className="btn-primary">
                      Browse Products
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order._id} className="card-hover">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-bold text-kicks-black">Order #{order._id.slice(-8)}</h4>
                            <p className="text-sm text-kicks-anthracite">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="product-price">KSh {order.total.toLocaleString()}</p>
                            <p className="text-sm text-kicks-anthracite">{order.status}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <img
                                src={item.product?.image || item.image}
                                alt={item.product?.name || item.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex-1">
                                <p className="product-title">
                                  {item.product?.name || item.name}
                                </p>
                                <p className="text-sm text-kicks-anthracite">
                                  Qty: {item.quantity} • Size: {item.size}
                                </p>
                              </div>
                              <p className="product-price">
                                KSh {(item.product?.price || item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        )}
      </div>
      <Footer1 />
    </div>
  );
}
