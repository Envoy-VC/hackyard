"use client";

import type { ReactNode } from "react";

import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexReactClient } from "convex/react";

import { env } from "@/env";
import { authClient } from "@/lib/auth/client";

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL, {
  expectAuth: false,
});

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConvexBetterAuthProvider authClient={authClient} client={convex}>
      {children}
    </ConvexBetterAuthProvider>
  );
};
