"use client";
import WorkoutLogger from "@/components/features/workout/WorkoutLogger";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

const Page = () => {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
          Log Your Workout
        </h1>
        <WorkoutLogger />
      </SignedIn>
    </>
  );
};

export default Page;
