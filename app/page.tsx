"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useAuth,
} from "@clerk/nextjs";
import AuthenticationButtonStyling from "@/components/common/authenticationButtonStyling";
import ExercisePageSnippet from "@/components/features/landingPage/ExercisesPageSnippet";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LinePageSnippet from "@/components/features/landingPage/LinePageSnippet";
import PiePageSnippet from "@/components/features/landingPage/PiePageSnippet";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <>
      <SignedOut>
        <main className="h-full w-full grid grid-rows-10 items-center justify-items-center mb-14 p-4">
          <div className="row-span-1 flex items-center justify-center w-full">
            <h1 className="text-3xl font-bold text-center">
              Welcome to Fitness Finesse
            </h1>
          </div>
          <div className="row-span-8 grid grid-rows-3 gap-24">
            <div className="row-span-1 bg-cyan-200 p-4 mb-10 shadow-lg rounded-lg">
              <ExercisePageSnippet />
            </div>
            <div className="row-span-1 bg-cyan-300 p-4 mb-10 shadow-lg rounded-lg">
              <LinePageSnippet />
            </div>
            <div className="row-span-1 bg-cyan-400 p-4 mb-10 shadow-lg rounded-lg">
              <PiePageSnippet />
            </div>
          </div>
          <div className="row-span-1 flex items-center justify-center w-full">
            <h2 className="text-3xl font-bold text-center text-white shadow-xl shadow-cyan-600">
              Day One or One Day?
            </h2>
          </div>
          <div className="row-span-1 flex justify-center p-5 w-full">
            <AuthenticationButtonStyling>
              <SignInButton
                fallbackRedirectUrl="/dashboard"
                signUpFallbackRedirectUrl="/onboarding"
              >
                Log in
              </SignInButton>
            </AuthenticationButtonStyling>
            <AuthenticationButtonStyling>
              <SignUpButton
                signInFallbackRedirectUrl="/dashboard"
                fallbackRedirectUrl="/onboarding"
              >
                Sign up
              </SignUpButton>
            </AuthenticationButtonStyling>
          </div>
        </main>
      </SignedOut>
    </>
  );
}
