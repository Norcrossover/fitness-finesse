"use client";
import WorkoutCategory from "@/components/features/workout/WorkoutCategory";
import FormWorkout from "@/components/features/planner/FormWorkout";
import Button from "@/components/common/Button";

const PlannerContent = () => {
  return (
    <div className="container mx-auto text-white flex flex-col sm:flex-row text-center items-center sm:items-start justify-center my-14 gap-10">
      <div className="w-3/4 sm:w-1/2">
        <h2 className="header-2">Find a quick workout!</h2>
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
        <h2 className="header-2">Try Something New!</h2>
        <form>
          <fieldset className="bg-slate-800 p-10 text-center rounded-xl">
            <legend className="sr-only">Try Something New</legend>
            <FormWorkout
              id="exercises"
              title="Step 1: Number of exercises"
              type="number"
              classInput="input-workout"
              classLabel="label-workout"
            />
            <FormWorkout
              id="sets"
              title="Step 2: Number of sets"
              type="number"
              classInput="input-workout"
              classLabel="label-workout"
            />
            <FormWorkout
              id="reps"
              title="Step 3: Number of reps"
              type="number"
              classInput="input-workout"
              classLabel="label-workout"
            />
            <FormWorkout
              id="minutes"
              title="Step 4: Number of minutes"
              type="number"
              classInput="input-workout"
              classLabel="label-workout"
            />
            <Button text="Generate" className="button-rounded-cyan mt-4" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PlannerContent;
