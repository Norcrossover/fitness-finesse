import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

const publicRoutes = ["/", "/sign-in"];

// Custom middleware to handle Clerk authentication
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is public
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // For private routes, check if the user is authenticated
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// This config ensures that the middleware runs on the appropriate routes
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
