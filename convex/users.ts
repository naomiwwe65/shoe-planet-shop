import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getUser = query({
  args: { clerkUserId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_user", (q) => q.eq("clerkUserId", args.clerkUserId))
      .first();
  },
});

export const createUser = mutation({
  args: {
    clerkUserId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    phone: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    postalCode: v.optional(v.string()),
    country: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_user", (q) => q.eq("clerkUserId", args.clerkUserId))
      .first();

    if (existingUser) {
      return existingUser._id;
    }

    // Only include defined fields
    const userData = {
      clerkUserId: args.clerkUserId,
      email: args.email,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    } as any;

    if (args.firstName !== undefined) userData.firstName = args.firstName;
    if (args.lastName !== undefined) userData.lastName = args.lastName;
    if (args.phone !== undefined) userData.phone = args.phone;
    if (args.address !== undefined) userData.address = args.address;
    if (args.city !== undefined) userData.city = args.city;
    if (args.postalCode !== undefined) userData.postalCode = args.postalCode;
    if (args.country !== undefined) userData.country = args.country;

    return await ctx.db.insert("users", userData);
  },
});

export const updateUser = mutation({
  args: {
    clerkUserId: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    phone: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    postalCode: v.optional(v.string()),
    country: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_user", (q) => q.eq("clerkUserId", args.clerkUserId))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    const { clerkUserId, ...updates } = args;
    return await ctx.db.patch(user._id, {
      ...updates,
      updatedAt: Date.now(),
    });
  },
});

// Simple user creation without Clerk
export const createSimpleUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      console.log("Creating user with data:", args);
      
      // Check if user already exists
      const existingUser = await ctx.db
        .query("users")
        .withIndex("by_clerk_user", (q) => q.eq("clerkUserId", args.userId))
        .first();

      if (existingUser) {
        console.log("User already exists:", existingUser._id);
        return existingUser._id;
      }

      // Create new user
      const userData = {
        clerkUserId: args.userId, // Using userId as clerkUserId for simplicity
        email: args.email,
        firstName: args.firstName || args.name.split(' ')[0],
        lastName: args.lastName || args.name.split(' ').slice(1).join(' '),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      console.log("Inserting user data:", userData);
      const userId = await ctx.db.insert("users", userData);
      console.log("User created successfully with ID:", userId);
      return userId;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
});

// Get user by ID
export const getUserById = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_user", (q) => q.eq("clerkUserId", args.userId))
      .first();
  },
});

// Test mutation to create a sample user
export const createTestUser = mutation({
  args: {},
  handler: async (ctx) => {
    const testUserData = {
      clerkUserId: "test-user-123",
      email: "test@example.com",
      firstName: "Test",
      lastName: "User",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    try {
      const userId = await ctx.db.insert("users", testUserData);
      console.log("Test user created with ID:", userId);
      return userId;
    } catch (error) {
      console.error("Error creating test user:", error);
      throw error;
    }
  },
});

// Get all users (for debugging)
export const getAllUsers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

// Get user by email
export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
  },
});

// Get user by phone
export const getUserByPhone = query({
  args: { phone: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("phone"), args.phone))
      .first();
  },
});

// Create password reset token
export const createPasswordReset = mutation({
  args: {
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
    method: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("passwordResets", {
      userId: args.userId,
      token: args.token,
      expiresAt: args.expiresAt,
      method: args.method,
      createdAt: Date.now(),
    });
  },
});

// Get password reset by token
export const getPasswordReset = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("passwordResets")
      .filter((q) => q.eq(q.field("token"), args.token))
      .first();
  },
});

// Delete password reset token
export const deletePasswordReset = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const resetRecord = await ctx.db
      .query("passwordResets")
      .filter((q) => q.eq(q.field("token"), args.token))
      .first();
    
    if (resetRecord) {
      await ctx.db.delete(resetRecord._id);
    }
  },
});

// Update user password
export const updatePassword = mutation({
  args: {
    userId: v.id("users"),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // In a real app, you would hash the password here
    // For demo purposes, we'll store it as-is
    return await ctx.db.patch(args.userId, {
      password: args.password,
      updatedAt: Date.now(),
    });
  },
});
