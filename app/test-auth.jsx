"use client";

import { useAuth } from "./context/AuthContext";

export default function TestAuth() {
  const { isAuthenticated, user, isLoading } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Authentication Test</h1>
      
      <div className="space-y-4">
        <div>
          <strong>Loading:</strong> {isLoading ? "Yes" : "No"}
        </div>
        <div>
          <strong>Authenticated:</strong> {isAuthenticated ? "Yes" : "No"}
        </div>
        <div>
          <strong>User:</strong> {user ? JSON.stringify(user, null, 2) : "None"}
        </div>
        <div>
          <strong>LocalStorage:</strong> {localStorage.getItem('shoe-planet-user') || "None"}
        </div>
      </div>
    </div>
  );
}

