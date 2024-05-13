import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="h-4/6 flex gap-4 flex-col items-center align-items-center p-24">
      <h1>This is the landing page</h1>
      <div className="border border-white rounded-xl">
        <SignInButton
          fallbackRedirectUrl="/dashboard"
          signUpFallbackRedirectUrl="/onboarding"
        >
          Sign in
        </SignInButton>
      </div>

      <div className="border border-white rounded-xl">
        <SignUpButton
          signInFallbackRedirectUrl="/dashboard"
          fallbackRedirectUrl="/onboarding"
        >
          Sign up
        </SignUpButton>
      </div>
    </main>
  );
}
