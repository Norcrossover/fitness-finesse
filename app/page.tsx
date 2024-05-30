import { SignInButton, SignUpButton } from "@clerk/nextjs";
import AuthenticationButtonStyling from "@/components/common/authenticationButtonStyling";
import ExercisePageSnippet from "@/components/features/landingPage/ExercisesPageSnippet";

export default function Home() {
  return (
    <main className="h-full w-full grid grid-rows-12 gap-4 items-center justify-items-center p-4">
      <div className="row-span-1 flex items-center justify-center w-full">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Fitness Finesse
        </h1>
      </div>
      <div className="row-span-10 grid grid-rows-3 gap-4 size-full">
        <div className="row-span-1 bg-cyan-200 p-5 shadow-lg rounded-lg">
          <ExercisePageSnippet />
        </div>
        <div className="row-span-1 bg-cyan-300 p-5 shadow-lg rounded-lg">
          Content 2
        </div>
        <div className="row-span-1 bg-cyan-400 p-5 shadow-lg rounded-lg">
          Content 3
        </div>
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
  );
}
