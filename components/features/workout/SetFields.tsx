import React, { ChangeEvent } from "react";
import FormWorkout from "@/components/features/workout/FormWorkout";
import { ExerciseSet } from "@/models/WorkoutLog";

interface SetFieldsProps {
  exerciseName: string;
  index: number;
  set: ExerciseSet;
  handleSetChange: (
    exerciseName: string,
    setIndex: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
}

const SetFields: React.FC<SetFieldsProps> = ({
  exerciseName,
  index,
  set,
  handleSetChange,
}) => (
  <div className="sm:flex justify-around">
    <FormWorkout
      id={`numReps-${exerciseName}-${index}`}
      title="# of Reps"
      type="number"
      value={set.reps}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleSetChange(exerciseName, index, e)
      }
      classInput="input-workout lg:inline-block"
      classLabel="label-workout lg:inline-block lg:mr-8 sm:mt-8"
    />
    <FormWorkout
      id={`numWeight-${exerciseName}-${index}`}
      title="Weight (lbs)"
      type="number"
      value={set.weight}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleSetChange(exerciseName, index, e)
      }
      classInput="input-workout lg:inline-block"
      classLabel="label-workout lg:inline-block lg:mr-8 sm:mt-8"
    />
  </div>
);

export default SetFields;
