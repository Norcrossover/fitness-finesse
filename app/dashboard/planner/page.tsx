"use client";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import PlannerContent from "@/components/features/planner/PlannerContent";

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
      <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
        Good afternoon, {userName}.
      </h1>
      <PlannerContent />
    </>
  );
};

export default Planner;
