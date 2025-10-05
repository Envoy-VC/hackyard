import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth";
import type { FieldAttribute } from "better-auth/db";

import { components } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import authSchema from "./betterAuth/schema";

const additionalFields: Record<string, FieldAttribute> = {
  hasCompletedOnboarding: {
    defaultValue: false,
    required: true,
    type: "boolean",
  },
};

const siteUrl = process.env.SITE_URL as string;

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
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
