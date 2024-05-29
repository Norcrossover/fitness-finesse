"use client";
import React from "react";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import ExerciseCarousel from "./ExerciseCarousel";

const Page: React.FC = () => {
  return (
    <main className="h-full">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <ExerciseCarousel />
      </SignedIn>
    </main>
  );
};

export default Page;
