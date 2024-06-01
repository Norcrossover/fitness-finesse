import React, { ChangeEvent } from "react";
import Button from "@/components/common/Button";
import { ExerciseLog } from "@/models/WorkoutLog";

interface ExerciseBlockProps {
  exercise: ExerciseLog;
  handleExerciseChange: (oldName: string, newName: string) => void;
  handleSetChange: (
    exerciseName: string,
    setIndex: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  addSet: (exerciseName: string) => void;
  removeSet: (exerciseName: string) => void;
}

const ExerciseBlock: React.FC<ExerciseBlockProps> = ({
  exercise,
  handleExerciseChange,
  handleSetChange,
  addSet,
  removeSet,
}) => {
  const handleNameChange = (e: { target: { value: string } }) => {
    handleExerciseChange(exercise.name, e.target.value);
  };

  return (
    <div className="p-2 mb-8 flex flex-col justify-center">
      <div className="form-workout">
        <label
          htmlFor={`exerciseName-${exercise.name}`}
          className="label-workout lg:inline-block lg:mr-10 mt-8 font-semibold"
        >
          Exercise Name
        </label>
        <input
          id={`exerciseName-${exercise.name}`}
          name={`exerciseName-${exercise.name}`}
          type="text"
          value={exercise.name}
          onChange={handleNameChange}
          className="input-workout lg:inline-block"
        />
      </div>
      {exercise.sets.map((set, index) => (
        <div
          key={index}
          className="sm:flex sm:justify-center border border-slate-500 rounded shadow"
        >
          <div className="form-workout">
            <label
              htmlFor={`numReps-${exercise.name}-${index}`}
              className="label-workout lg:inline-block lg:mr-8 sm:mt-8"
            >
              # of Reps
            </label>
            <input
              id={`numReps-${exercise.name}-${index}`}
              name="reps"
              type="number"
              value={set.reps}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleSetChange(exercise.name, index, e)
              }
              className="input-workout lg:inline-block"
            />
          </div>
          <div className="form-workout">
            <label
              htmlFor={`numWeight-${exercise.name}-${index}`}
              className="label-workout lg:inline-block lg:mr-8 sm:mt-8"
            >
              Weight (lbs)
            </label>
            <input
              id={`numWeight-${exercise.name}-${index}`}
              name="weight"
              type="number"
              value={set.weight}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleSetChange(exercise.name, index, e)
              }
              className="input-workout lg:inline-block"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center gap-4 p-2 m-4">
        <Button
          text="+ Set"
          className="button-rounded-cyan"
          onClick={() => addSet(exercise.name)}
          type="button"
        />
        <Button
          text="- Set"
          className="button-rounded-pink"
          onClick={() => removeSet(exercise.name)}
          type="button"
        />
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default ExerciseBlock;
