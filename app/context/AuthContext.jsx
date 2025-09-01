"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const login = (userData) => {
    console.log('AuthContext: Login called with userData:', userData);
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('shoe-planet-user', JSON.stringify(userData));
    console.log('AuthContext: User saved to localStorage');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('shoe-planet-user');
  };

  const value = {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout,
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
