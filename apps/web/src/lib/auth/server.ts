import { getToken as getTokenNextjs } from "@convex-dev/better-auth/nextjs";
import { createAuth } from "@hackyard/backend/src/auth";

export const getToken = () => {
  return getTokenNextjs(createAuth);
};
