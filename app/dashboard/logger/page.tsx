import ExerciseLogger from "@/components/features/workout/ExerciseLogger";
import FormWorkout from "@/components/features/workout/FormWorkout";
import Button from "@/components/common/Button";

const Logger = () => {
  return (
    <>
      <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
        Log Your Workout
      </h1>
      <div className="container mx-auto text-white text-center sm:text-left my-14">
        <div className="w-5/6 mx-auto sm:w-full">
          <h2 className="text-xl font-semibold mb-4 sm:mt-0 sm:text-left">
            Enter In Your Workout!
          </h2>
          <form className="bg-slate-800 p-10 rounded-xl">
            <ExerciseLogger title="Workout Name" num={1} />
            <hr></hr>
            <fieldset className="my-8 text-center">
              <legend className="sr-only">Log your workout below</legend>
              <div className="sm:flex justify-around">
                <FormWorkout
                  id="numSets"
                  title="# of Sets"
                  type="number"
                  classInput="input-workout lg:inline-block"
                  classLabel="label-workout lg:inline-block lg:mr-8"
                />
                <FormWorkout
                  id="numReps"
                  title="# of Reps"
                  type="number"
                  classInput="input-workout lg:inline-block"
                  classLabel="label-workout lg:inline-block  lg:mr-8"
                />
                <FormWorkout
                  id="numWeights"
                  title="# of Weight"
                  type="number"
                  classInput="input-workout lg:inline-block"
                  classLabel="label-workout lg:inline-block lg:mr-8"
                />
              </div>
              <hr></hr>
              <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-28">
                <Button text="+ More" className="button-rounded-cyan mt-8" />
                <Button text="- Less" className="button-rounded-cyan mt-8" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logger;
