import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

const publicRoutes = ["/", "/sign-in"];

export function checkAuthentication(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is public
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return { isAuthenticated: true, userId: null };
  }

  // For private routes, check if the user is authenticated
  const { userId } = getAuth(request);

  if (!userId) {
    return { isAuthenticated: false, userId: null };
  }

  return { isAuthenticated: true, userId };
}

// Custom middleware to handle Clerk authentication
export function middleware(request: NextRequest) {
  const { isAuthenticated } = checkAuthentication(request);

  if (!isAuthenticated) {
    // If not authenticated, redirect to sign-in page
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// This config ensures that the middleware runs on the appropriate routes
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
