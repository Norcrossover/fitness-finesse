import ExerciseLogger from "@/components/features/workout/ExerciseLogger";
import FormWorkout from "@/components/features/workout/FormWorkout";

const Logger = () => {
  return (
    <>
      <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
        Log Your Workout
      </h1>
      <div className="container w-3/4 sm:w-full mx-auto bg-slate-800 my-14 text-white p-4 rounded-xl">
        <ExerciseLogger num={1} title="Workout Name" />
      </div>
    </>
  );
};

export default Logger;
