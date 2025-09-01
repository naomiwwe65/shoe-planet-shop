"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Convex mutations
  const createUserMutation = useMutation(api.users.createSimpleUser);
  const updateUserMutation = useMutation(api.users.updateUser);

  // Real-time user data from Convex (when authenticated)
  const convexUser = useQuery(
    api.users.getUserById,
    isAuthenticated && user ? { userId: user.id } : "skip"
  );

  // Check if user is logged in on page load
  useEffect(() => {
    const savedUser = localStorage.getItem('shoe-planet-user');
    console.log('AuthContext: Checking saved user:', savedUser);
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        console.log('AuthContext: Setting user data:', userData);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('shoe-planet-user');
      }
    }
    setIsLoading(false);
  }, []);

  // Sync with Convex user data when available
  useEffect(() => {
    if (convexUser && isAuthenticated && user) {
      // Update local user data with latest from Convex
      const updatedUser = {
        ...user,
        ...convexUser,
        // Keep local fields that might not be in Convex
        id: user.id,
        email: convexUser.email || user.email,
        name: convexUser.firstName && convexUser.lastName 
          ? `${convexUser.firstName} ${convexUser.lastName}` 
          : user.name,
      };
      setUser(updatedUser);
      localStorage.setItem('shoe-planet-user', JSON.stringify(updatedUser));
    }
  }, [convexUser, isAuthenticated, user]);

  const login = async (userData) => {
    console.log('AuthContext: Login called with userData:', userData);
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('shoe-planet-user', JSON.stringify(userData));
    console.log('AuthContext: User saved to localStorage');

    // Create or update user in Convex
    try {
      await createUserMutation({
        userId: userData.id,
        email: userData.email,
        name: userData.name,
        firstName: userData.name?.split(' ')[0],
        lastName: userData.name?.split(' ').slice(1).join(' '),
      });
      console.log('AuthContext: User synced to Convex');
    } catch (error) {
      console.error('AuthContext: Error syncing user to Convex:', error);
      // Continue with login even if Convex sync fails
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('shoe-planet-user');
  };

  const updateUserProfile = async (updates) => {
    if (!isAuthenticated || !user) {
      throw new Error('User must be authenticated to update profile');
    }

    try {
      await updateUserMutation({
        clerkUserId: user.id,
        ...updates,
      });
      console.log('AuthContext: User profile updated in Convex');
    } catch (error) {
      console.error('AuthContext: Error updating user profile:', error);
      throw error;
    }
  };

  const value = {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
