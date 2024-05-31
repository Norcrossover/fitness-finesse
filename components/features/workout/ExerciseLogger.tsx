import Button from "@/components/common/Button";
import FormWorkout from "@/components/features/workout/FormWorkout";

// For each item
type ExerciseLoggerProps = {
  title: string;
  num: number;
};

const ExerciseLogger = ({ title, num }: ExerciseLoggerProps) => {
  return (
    <div className="flex flex-col p-2 gap-5 items-center text-center">
      <div className="flex">
        <span className="w-10 outline outline-2 outline-white rounded-full text-white">
          {num}
        </span>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <span className="flex flex-col justify-around gap-4">
        <FormWorkout
          id="numSets"
          title="# of Sets"
          type="number"
          classInput="input-workout"
          classLabel="label-workout"
        />
        <FormWorkout
          id="numReps"
          title="# of Reps"
          type="number"
          classInput="input-workout"
          classLabel="label-workout"
        />
        <FormWorkout
          id="numWeight"
          title="# of Weight"
          type="number"
          classInput="input-workout"
          classLabel="label-workout"
        />
      </span>
      <Button text="+ More" className="button-rounded-cyan" />
    </div>
  );
};

export default ExerciseLogger;
