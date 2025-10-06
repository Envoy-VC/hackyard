import { type NextRequest, NextResponse } from "next/server";

import { getSessionCookie } from "better-auth/cookies";

const publicRoutes = ["/", "/auth", "/onboarding"];
const signInRoute = "/auth";

const middleware = (request: NextRequest) => {
  const sessionCookie = getSessionCookie(request);

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);
  const isSignInRoute = signInRoute === request.nextUrl.pathname;

  // If public route, skip auth
  if (isPublicRoute) {
    // Redirect to "/" if signed in and trying to access a auth route
    if (sessionCookie && isSignInRoute) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Handle Private Routes
  // Redirect to "/auth" if not signed in
  if (!sessionCookie) {
    return NextResponse.redirect(new URL(signInRoute, request.url));
  }

  // Passthrough if signed in
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!.*\\..*|_next|api).*)", "/", "/trpc(.*)"],
};

// biome-ignore lint/style/noDefaultExport: needed for Next.js middleware
export default middleware;
