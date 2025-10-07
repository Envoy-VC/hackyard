import { Polar } from "@convex-dev/polar";

import { api, components } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { env } from "./env";

export const polar: Polar<DataModel, { proMonthly: string }> = new Polar(
  components.polar,
  {
    getUserInfo: async (ctx) => {
      const user = await ctx.runQuery(api.auth.getCurrentUser);
      const email = user.email;
      const userId = user._id;
      return {
        email,
        userId,
      };
    },
    organizationToken: env.POLAR_ACCESS_TOKEN,
    products: {
      proMonthly: env.HACKYARD_PRO_CHECKOUT_ID,
    },
    server: "sandbox",
    webhookSecret: env.POLAR_WEBHOOK_SECRET,
  },
);

export const {
  changeCurrentSubscription,
  cancelCurrentSubscription,
  getConfiguredProducts,
  listAllProducts,
  generateCheckoutLink,
  generateCustomerPortalUrl,
} = polar.api();
