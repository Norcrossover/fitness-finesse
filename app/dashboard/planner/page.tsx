"use client";
import { useRouter } from "next/navigation";
import PlannerBlock from "@/components/features/planner/PlannerBlock";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

const Planner = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    router.push("/sign-in");
  }

  const userName = user?.firstName || "User";

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
          Try something new!
        </h1>
        <PlannerBlock />
      </SignedIn>
    </>
  );
};

export default Planner;
