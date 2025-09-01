import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    category: v.string(), // "Kids", "Women", "Men"
    subcategory: v.string(), // "Athletic", "Casual", "Formal", etc.
    color: v.string(),
    price: v.number(),
    originalPrice: v.number(),
    rating: v.number(),
    reviews: v.number(),
    description: v.string(),
    features: v.array(v.string()),
    sizes: v.array(v.string()),
    inStock: v.boolean(),
    image: v.string(),
    images: v.array(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_category", ["category"]),
  
  cartItems: defineTable({
    userId: v.string(),
    productId: v.id("products"),
    quantity: v.number(),
    size: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
  
  orders: defineTable({
    userId: v.string(),
    items: v.array(v.object({
      productId: v.id("products"),
      quantity: v.number(),
      size: v.string(),
      price: v.number(),
      name: v.string(),
      image: v.string(),
    })),
    total: v.number(),
    shippingAddress: v.object({
      name: v.string(),
      address: v.string(),
      city: v.string(),
      postalCode: v.string(),
      phone: v.string(),
    }),
    status: v.string(), // "pending", "processing", "shipped", "delivered"
    paymentStatus: v.string(), // "pending", "paid", "failed"
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
  
  users: defineTable({
    clerkUserId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    phone: v.optional(v.string()),
    password: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    postalCode: v.optional(v.string()),
    country: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_clerk_user", ["clerkUserId"]),
  
  passwordResets: defineTable({
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
    method: v.string(), // "email" or "sms"
    createdAt: v.number(),
  }).index("by_token", ["token"]),
});
