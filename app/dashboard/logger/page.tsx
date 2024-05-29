import ExerciseLogger from "@/components/features/workout/ExerciseLogger";
import FormWorkout from "@/components/features/workout/FormWorkout";

const Logger = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mx-6 my-6">Log Your Workout</h1>
      <div className="container mx-auto w-3/4 bg-slate-800 my-14 text-white p-4 rounded-xl">
        <ExerciseLogger num={1} title="Workout Name" />
      </div>
    </>
  );
};

export default Logger;
