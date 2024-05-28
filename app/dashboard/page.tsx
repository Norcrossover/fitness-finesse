"use client";
import React from "react";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <main className="h-full w-full grid grid-rows-12 gap-4 items-center justify-items-center p-4 m-4">
          <div className="row-span-2 flex-col items-center w-full font-semibold">
            <h1 className="text-2xl">Good</h1>
            <h1 className="text-2xl">afternoon,</h1>
            <h1 className="text-2xl">
              {user?.fullName ? user?.firstName : user?.username}.
            </h1>
          </div>
          <div className="row-span-8 grid grid-rows-3 gap-4 size-full">
            <div className="row-span-1 bg-cyan-200 p-5 shadow-lg rounded-lg h-[250px]">
              These will
            </div>
            <div className="row-span-1 bg-cyan-300 p-5 shadow-lg rounded-lg h-[250px]">
              Be replaced by
            </div>
            <div className="row-span-1 bg-cyan-400 p-5 shadow-lg rounded-lg h-[250px]">
              Chart Content that shows the Workout data for the current user
            </div>
          </div>
        </main>
      </SignedIn>
    </div>
  );
};

export default Dashboard;
