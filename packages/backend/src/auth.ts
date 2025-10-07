import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth";
import type { FieldAttribute } from "better-auth/db";

import { components } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import authSchema from "./betterAuth/schema";
import { env } from "./env";

const additionalFields: Record<string, FieldAttribute> = {
  hasCompletedOnboarding: {
    defaultValue: false,
    required: true,
    type: "boolean",
  },
  plan: {
    defaultValue: "free",
    required: true,
    type: "string",
  },
};

const siteUrl = env.SITE_URL;

export const authComponent = createClient<DataModel, typeof authSchema>(
  components.betterAuth,
  {
    local: {
      schema: authSchema,
    },
  },
);

export const createAuth = (
  ctx: GenericCtx<DataModel>,
  { optionsOnly } = { optionsOnly: false },
) => {
  return betterAuth({
    account: {
      accountLinking: {
        enabled: true,
      },
    },
    baseURL: siteUrl,
    database: authComponent.adapter(ctx),
    logger: {
      disabled: optionsOnly,
    },
    plugins: [convex()],
    socialProviders: {
      github: {
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
      },
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },
    user: {
      additionalFields,
    },
  });
};

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return await authComponent.getAuthUser(ctx);
  },
});

export const getCurrentUserSafe = query({
  args: {},
  handler: async (ctx) => {
    return await authComponent.safeGetAuthUser(ctx);
  },
});
