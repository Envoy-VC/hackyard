import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const tables = {
  account: defineTable({
    accessToken: v.optional(v.union(v.null(), v.string())),
    accessTokenExpiresAt: v.optional(v.union(v.null(), v.number())),
    accountId: v.string(),
    createdAt: v.number(),
    idToken: v.optional(v.union(v.null(), v.string())),
    password: v.optional(v.union(v.null(), v.string())),
    providerId: v.string(),
    refreshToken: v.optional(v.union(v.null(), v.string())),
    refreshTokenExpiresAt: v.optional(v.union(v.null(), v.number())),
    scope: v.optional(v.union(v.null(), v.string())),
    updatedAt: v.number(),
    userId: v.string(),
  })
    .index("accountId", ["accountId"])
    .index("accountId_providerId", ["accountId", "providerId"])
    .index("providerId_userId", ["providerId", "userId"])
    .index("userId", ["userId"]),
  jwks: defineTable({
    createdAt: v.number(),
    privateKey: v.string(),
    publicKey: v.string(),
  }),
  session: defineTable({
    createdAt: v.number(),
    expiresAt: v.number(),
    ipAddress: v.optional(v.union(v.null(), v.string())),
    token: v.string(),
    updatedAt: v.number(),
    userAgent: v.optional(v.union(v.null(), v.string())),
    userId: v.string(),
  })
    .index("expiresAt", ["expiresAt"])
    .index("expiresAt_userId", ["expiresAt", "userId"])
    .index("token", ["token"])
    .index("userId", ["userId"]),
  user: defineTable({
    createdAt: v.number(),
    email: v.string(),
    emailVerified: v.boolean(),
    image: v.optional(v.union(v.null(), v.string())),
    name: v.string(),
    updatedAt: v.number(),
    userId: v.optional(v.union(v.null(), v.string())),
  })
    .index("email_name", ["email", "name"])
    .index("name", ["name"])
    .index("userId", ["userId"]),
  verification: defineTable({
    createdAt: v.number(),
    expiresAt: v.number(),
    identifier: v.string(),
    updatedAt: v.number(),
    value: v.string(),
  })
    .index("expiresAt", ["expiresAt"])
    .index("identifier", ["identifier"]),
};

const schema = defineSchema(tables);

// biome-ignore lint/style/noDefaultExport: needed for Convex
export default schema;
