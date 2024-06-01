import WorkoutLogger from "@/components/features/workout/WorkoutLogger";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
        Log Your Workout
      </h1>
      <WorkoutLogger />
    </>
  );
};

export default Page;
