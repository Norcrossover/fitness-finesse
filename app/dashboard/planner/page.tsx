import WorkoutCategory from "@/components/features/workout/WorkoutCategory";

const Planner = () => {
  return (
    <div className="flex flex-col mx-8 my-10">
      {/* Not sure if we want to pass in a prop of user here */}
      <h1 className="text-3xl font-bold mb-6">Good afternoon, Kobe.</h1>
      <div className="w-3/4 text-center sm:w-auto sm:text-left">
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
    </div>
  );
};

export default Planner;
