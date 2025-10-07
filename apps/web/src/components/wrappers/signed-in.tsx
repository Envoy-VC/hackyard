"use client";

import {
  Authenticated as AuthenticatedConvex,
  AuthLoading as AuthLoadingConvex,
  Unauthenticated as UnauthenticatedConvex,
} from "convex/react";

export const SignedIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthenticatedConvex>{children}</AuthenticatedConvex>
      <AuthLoadingConvex>Loading...</AuthLoadingConvex>
      <UnauthenticatedConvex>Unauthenticated</UnauthenticatedConvex>
    </>
  );
};
