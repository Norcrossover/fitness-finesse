"use client";
import { useRouter } from "next/navigation";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import LineData from "@/components/features/dashboard/LineData";
import PieData from "@/components/features/dashboard/PieData";

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    router.push("/sign-in");
  }

  const userName = user?.firstName || "User";

  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <main className="container mx-auto mt-10 mb-20">
          <div className="mb-6">
            <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
              Good afternoon, {userName}
            </h1>
          </div>
          <div className="grid grid-cols-1">
            <h2 className="header-2">Check out your personal growth</h2>
            <div className="bg-cyan-200 p-5 shadow-lg mb-14 rounded-lg md:h-[450px]">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between h-full">
                <div className="w-full md:w-3/4 h-full">
                  <LineData />
                </div>
                <div className="w-full md:w-1/4 h-full flex items-center justify-center">
                  <p className="text-lg sm:font-semibold leading-7 text-center">
                    Be the change you want to see! Here is your total weight
                    lifted over time. Remember that consistency is key.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="header-2">Find out your most performed workout</h2>
            <div className="bg-cyan-200 p-5 shadow-lg rounded-lg md:h-[450px]">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between h-full">
                <div className="w-full md:w-1/4 h-full flex items-center justify-center">
                  <p className="text-lg sm:font-semibold leading-7 text-center">
                    Looking for your favorite workout? Here are the top 10 most
                    exercise performed. Keep up the good work!
                  </p>
                </div>
                <div className="w-full md:w-3/4 h-full">
                  <PieData />
                </div>
              </div>
            </div>
          </div>
        </main>
      </SignedIn>
    </div>
  );
};

export default Dashboard;
