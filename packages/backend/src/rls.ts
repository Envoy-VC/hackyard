import {
  customCtx,
  customMutation,
  customQuery,
} from "convex-helpers/server/customFunctions";
import {
  type Rules,
  wrapDatabaseReader,
  wrapDatabaseWriter,
} from "convex-helpers/server/rowLevelSecurity";

import type { DataModel } from "./_generated/dataModel";
import {
  mutation as mutationCore,
  type QueryCtx,
  query as queryCore,
} from "./_generated/server";
import { authComponent } from "./auth";

async function rlsRules(ctx: QueryCtx) {
  const identity = await authComponent.safeGetAuthUser(ctx);
  return {
    profiles: {
      insert: async (ctx) => {
        if (!identity) return false;
        const existingProfile = await ctx.db
          .query("profiles")
          .withIndex("by_userId", (q) => q.eq("userId", identity._id))
          .unique();

        if (existingProfile) return false;
        return true;
      },
      modify: async (_ctx, doc) => {
        if (!identity) return false;

        if (doc.userId === identity._id) return await Promise.resolve(true);
        return Promise.resolve(false);
      },
      read: async (_ctx, _doc) => {
        return await Promise.resolve(true);
      },
    },
  } satisfies Rules<QueryCtx, DataModel>;
}

export const query = customQuery(
  queryCore,
  customCtx(async (ctx) => ({
    db: wrapDatabaseReader(ctx, ctx.db, await rlsRules(ctx)),
  })),
);

export const mutation = customMutation(
  mutationCore,
  customCtx(async (ctx) => ({
    db: wrapDatabaseWriter(ctx, ctx.db, await rlsRules(ctx)),
  })),
);
