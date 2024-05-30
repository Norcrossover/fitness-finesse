"use client";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import WorkoutCategory from "@/components/features/workout/WorkoutCategory";
import FormWorkout from "@/components/features/workout/FormWorkout";
import Button from "@/components/common/Button";

const Planner = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  if (!isLoaded) return; // Wait until user loading state is determined

  if (!isSignedIn) {
    router.push("/sign-in"); // Redirect if not signed in
  }

  const userName = user?.firstName || "User"; // Determine if undefined , fallback to user

  return (
    <>
      {/* Not sure if we're going to take into account the user */}
      <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
        Good afternoon, {userName}.
      </h1>
      <div className="container mx-auto text-white flex flex-col sm:flex-row text-center items-center sm:items-start justify-center my-14 gap-10">
        <div className="w-3/4 sm:w-1/2">
          <h2 className="text-xl font-semibold mb-4 sm:text-left">
            Find a quick workout!
          </h2>
          <WorkoutCategory
            title="Weight lifting"
            exercises={[
              "4 x Overhead press",
              "4 x Front Raise",
              "4 x Face Pull",
              "4 x Reverse Fly",
            ]}
          />
          <WorkoutCategory
            title="Core"
            exercises={[
              "12 x Crunches",
              "3 x Plank",
              "4 x Bicycle Crunch",
              "6 x Bear Crawl",
            ]}
          />
          <WorkoutCategory
            title="Legs"
            exercises={[
              "6 x Good Mornings",
              "4 x Hip Extension",
              "12 x Leg Curl",
              "4 x Romanian Deadlift",
            ]}
          />
        </div>
        <div className="w-3/4 sm:w-1/2">
          <h2 className="text-xl font-semibold mb-4 sm:mt-0 sm:text-left">
            Try Something New!
          </h2>
          <form>
            <fieldset className="bg-slate-800 p-10 text-center rounded-xl">
              <legend className="sr-only">Try Something New</legend>
              <FormWorkout
                step={1}
                title="Number of exercises"
                label="exercises"
              />
              <FormWorkout step={2} title="Number of sets" label="sets" />
              <FormWorkout step={3} title="Number of reps" label="reps" />
              <FormWorkout step={4} title="Number of minutes" label="minutes" />
              <Button text="Generate" className="button-rounded-cyan mt-4" />
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Planner;
