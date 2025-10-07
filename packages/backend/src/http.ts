import { httpRouter } from "convex/server";

import { authComponent, createAuth } from "./auth";
import { polar } from "./polar";

const http = httpRouter();

authComponent.registerRoutes(http, createAuth);
polar.registerRoutes(http, {
  onProductCreated: async (_ctx, event) => {
    await true;
    console.log("Product created:", event);
  },
  onProductUpdated: async (_ctx, event) => {
    await true;
    console.log("Product updated:", event);
  },
  onSubscriptionCreated: async (_ctx, event) => {
    await Promise.resolve(true);
    const currentPlan = ["active", "trailing"].includes(event.data.status)
      ? "pro"
      : "free";
    console.log("Current Plan:", currentPlan);
    // TODO: Perform Mutation to update user's plan in DB
  },
  // Optional callbacks for webhook events
  onSubscriptionUpdated: async (_ctx, event) => {
    await Promise.resolve(true);
    console.log("Subscription updated:", event);
  },
  path: "/polar/events",
});

export default http;
