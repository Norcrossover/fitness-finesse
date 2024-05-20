import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="h-full flex gap-4 flex-col items-center align-items-center p-24">
      <h1>This is the landing page</h1>
      <div className="flex p-5">
        <div className="border border-pink-500 bg-cyan-700 text-cyan-100 rounded-xl m-5 p-2">
          <SignInButton
            fallbackRedirectUrl="/dashboard"
            signUpFallbackRedirectUrl="/onboarding"
          >
            Sign in
          </SignInButton>
        </div>
        <div className="border border-pink-500 bg-cyan-700 text-cyan-100 rounded-xl m-5 p-2">
          <SignUpButton
            signInFallbackRedirectUrl="/dashboard"
            fallbackRedirectUrl="/onboarding"
          >
            Sign up
          </SignUpButton>
        </div>
      </div>
    </main>
  );
}
