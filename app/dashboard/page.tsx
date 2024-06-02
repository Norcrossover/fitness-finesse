"use client";
import { useRouter } from "next/navigation";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import LineData from "@/components/features/dashboard/LineData";

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
        <main className="container mx-auto my-10">
          <div className="mb-6">
            <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
              Good afternoon, {userName}
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-cyan-200 p-5 shadow-lg rounded-lg md:h-[450px]">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between h-full">
                <div className="w-full md:w-3/4 h-full">
                  <LineData />
                </div>
                <div className="w-full md:w-1/4 h-full flex items-center justify-center">
                  <p className="text-lg font-semibold leading-7 text-center">
                    Be the change you want to see! Here is your total weight
                    lifted over time. Remember that consistency is key. It's
                    either day one or one day!
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cyan-300 p-5 shadow-lg rounded-lg h-full">
              Be replaced by
            </div>
          </div>
        </main>
      </SignedIn>
    </div>
  );
};

export default Dashboard;
