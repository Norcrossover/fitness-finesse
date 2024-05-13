"use client";
import React from "react";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoaded) return; // Wait until user loading state is determined
    if (!isSignedIn) {
      router.push("/sign-in"); // Redirect if not signed in
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <div>
      {/* Dashboard content */}
      {/* {isSignedIn && <p>Welcome to your Dashboard!</p>} */}
      <SignedOut>
        <RedirectToSignIn></RedirectToSignIn>
      </SignedOut>
      <SignedIn>
        <p>Welcome to your Dashboard!</p>
        <UserButton
          showName={true}
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default Dashboard;
