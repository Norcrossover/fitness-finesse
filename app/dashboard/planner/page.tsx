import WorkoutCategory from "@/components/features/workout/WorkoutCategory";
import FormWorkout from "@/components/features/workout/FormWorkout";
import Button from "@/components/common/Button";

const Planner = () => {
  return (
    <>
      {/* Not sure if we're going to take into account the user */}
      <h1 className="text-3xl font-bold mx-6 my-6">Good afternoon, Kobe.</h1>
      <div className="container text-white flex flex-col items-center my-14">
        <h2 className="text-xl font-semibold mb-4">Find a Quick Workout!</h2>
        <div className="w-3/4">
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
        <h2 className="text-xl font-semibold mb-4 mt-10">Try Something New!</h2>
        <form className="w-full flex justify-center">
          <fieldset className="bg-slate-800 p-10 text-center rounded-xl w-3/4">
            <legend className="sr-only">Try Something New</legend>
            <FormWorkout
              step={1}
              title="Number of exercises"
              label="exercises"
            />
            <FormWorkout step={2} title="Number of sets" label="sets" />
            <FormWorkout step={3} title="Number of reps" label="reps" />
            <FormWorkout step={4} title="Number of minutes" label="minutes" />
            <Button text="Generate" className="button-rounded-cyan" />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Planner;
