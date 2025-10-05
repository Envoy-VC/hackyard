import { defineTable } from "convex/server";
import { v } from "convex/values";

export const profilesSchema = {
  profiles: defineTable({
    displayName: v.optional(v.string()),
    profileImage: v.optional(v.string()),
    userId: v.string(),
    username: v.string(),
  })
    .index("by_userId", ["userId"])
    .index("by_username", ["username"]),
};
